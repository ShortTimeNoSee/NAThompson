import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { DateTime } from "luxon";
import markdownItAnchor from "markdown-it-anchor";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetHashCache = new Map();

function contentHash(absPath) {
  if (assetHashCache.has(absPath)) return assetHashCache.get(absPath);
  const hash = crypto
    .createHash("sha256")
    .update(fs.readFileSync(absPath))
    .digest("hex")
    .slice(0, 10);
  assetHashCache.set(absPath, hash);
  return hash;
}

export default function (eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });

  // Fingerprint local assets so CDN/browser caches cannot serve stale JS/CSS after deploy.
  // Usage: {{ "/assets/js/quiz.js" | asset }}
  eleventyConfig.addFilter("asset", (urlPath) => {
    if (!urlPath || typeof urlPath !== "string" || !urlPath.startsWith("/")) {
      throw new Error(`asset filter expects an absolute site path, got: ${urlPath}`);
    }
    const abs = path.join(__dirname, "src", urlPath.replace(/^\//, ""));
    if (!fs.existsSync(abs)) {
      throw new Error(`asset filter: file not found for ${urlPath} (${abs})`);
    }
    return `${urlPath}?v=${contentHash(abs)}`;
  });

  // Heading anchors (appear on hover inside post-body, about-body)
  eleventyConfig.amendLibrary("md", (md) => {
    md.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        placement: "after",
        class: "heading-anchor",
        symbol: "#",
        ariaHidden: true,
      }),
      level: [2, 3, 4],
      slugify: (s) =>
        s
          .trim()
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_]+/g, "-")
          .replace(/^-+|-+$/g, ""),
    });
  });

  // RSS + Atom feeds (source of truth: src/_data/site.json)
  const site = JSON.parse(fs.readFileSync("./src/_data/site.json", "utf-8"));

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feeds/atom.xml",
    collection: { name: "post", limit: 50 },
    metadata: {
      language: "en",
      title: site.name,
      subtitle: site.tagline,
      base: site.url + "/",
      author: { name: site.author.name },
    },
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/feeds/rss.xml",
    collection: { name: "post", limit: 50 },
    metadata: {
      language: "en",
      title: site.name,
      subtitle: site.tagline,
      base: site.url + "/",
      author: { name: site.author.name },
    },
  });

  // Age filter: written word for ages 18–29, empty string at 30+ (no longer notable)
  const AGE_WORDS = {
    18: "eighteen", 19: "nineteen", 20: "twenty", 21: "twenty-one",
    22: "twenty-two", 23: "twenty-three", 24: "twenty-four", 25: "twenty-five",
    26: "twenty-six", 27: "twenty-seven", 28: "twenty-eight", 29: "twenty-nine",
  };
  eleventyConfig.addFilter("ageWord", (birthdate) => {
    if (!birthdate) return "";
    const birth = DateTime.fromISO(birthdate);
    const age = Math.floor(DateTime.now().diff(birth, "years").years);
    return AGE_WORDS[age] || "";
  });

  // Date filters
  eleventyConfig.addFilter("dateISO", (d) =>
    DateTime.fromJSDate(d, { zone: "utc" }).toISO()
  );

  eleventyConfig.addFilter("dateShort", (d) =>
    DateTime.fromJSDate(d, { zone: "utc" }).toFormat("yyyy-MM-dd")
  );

  eleventyConfig.addFilter("dateReadable", (d) =>
    DateTime.fromJSDate(d, { zone: "utc" }).toFormat("dd LLL yyyy").toUpperCase()
  );

  eleventyConfig.addFilter("dateYear", (d) =>
    DateTime.fromJSDate(d, { zone: "utc" }).toFormat("yyyy")
  );

  // Reading time (220 wpm average adult reading speed)
  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return "1 MIN";
    const text = content.replace(/<[^>]*>/g, "");
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 220);
    return `${minutes} MIN`;
  });

  // Word count (strips HTML tags)
  eleventyConfig.addFilter("wordCount", (content) => {
    if (!content) return 0;
    const text = content.replace(/<[^>]*>/g, "");
    return text.trim().split(/\s+/).length;
  });

  // Domain title lookup (source of truth: src/_data/domains.json)
  const domains = JSON.parse(fs.readFileSync("./src/_data/domains.json", "utf-8"));
  eleventyConfig.addFilter("domainLabel", (key) => {
    const d = domains.find((d) => d.key === key);
    return d ? d.title : key;
  });

  // Limit array to first N items
  eleventyConfig.addFilter("limit", (arr, n) => (Array.isArray(arr) ? arr.slice(0, n) : []));

  // Truncate to N chars at word boundary
  eleventyConfig.addFilter("truncate", (str, len = 160) => {
    if (!str || str.length <= len) return str;
    return str.slice(0, len).replace(/\s\S*$/, "") + "...";
  });

  // Related posts: combine same-domain posts + explicit related slugs, deduped
  eleventyConfig.addFilter("relatedPosts", (allPosts, currentUrl, sameDomainPosts, relatedSlugs, max = 3) => {
    const seen = new Set([currentUrl]);
    const result = [];

    for (const post of (sameDomainPosts || [])) {
      if (result.length >= max) break;
      if (!seen.has(post.url)) {
        seen.add(post.url);
        result.push(post);
      }
    }

    if (Array.isArray(relatedSlugs)) {
      for (const slug of relatedSlugs) {
        if (result.length >= max) break;
        const post = (allPosts || []).find((p) => p.fileSlug === slug);
        if (post && !seen.has(post.url)) {
          seen.add(post.url);
          result.push(post);
        }
      }
    }

    return result;
  });

  // Collections
  let capturedPosts = [];
  eleventyConfig.addCollection("post", (api) => {
    const posts = api
      .getFilteredByGlob("src/content/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
    capturedPosts = posts;
    return posts;
  });

  // One collection per domain, auto-generated from domains.json
  for (const domain of domains) {
    const key = domain.key;
    eleventyConfig.addCollection(`domain_${key.replace(/-/g, "_")}`, (api) =>
      api
        .getFilteredByGlob("src/content/posts/**/*.md")
        .filter((p) => p.data.domain === key)
        .sort((a, b) => b.date - a.date)
    );
  }

  // Post-build: raw .md endpoints + JSON API
  eleventyConfig.on("eleventy.after", async ({ dir, results }) => {
    const posts = results.filter(
      (r) => r.inputPath?.includes("/content/posts/") && r.url
    );

    // Copy each post source to _site/{slug}.md for raw plaintext access
    for (const post of posts) {
      try {
        const slug = post.url.replace(/^\/|\/$/g, "");
        if (slug && !slug.includes("/")) {
          const raw = fs.readFileSync(post.inputPath, "utf-8");
          fs.writeFileSync(path.join(dir.output, `${slug}.md`), raw);
        }
      } catch (_) {}
    }

    // JSON API
    const apiDir = path.join(dir.output, "api", "v1");
    fs.mkdirSync(path.join(apiDir, "posts"), { recursive: true });
    fs.mkdirSync(path.join(apiDir, "domains"), { recursive: true });

    const generatedAt = new Date().toISOString();

    // Strip YAML frontmatter from markdown source
    const stripFrontmatter = (src) => src.replace(/^---[\s\S]*?---\n+/, "").trimStart();

    // /api/v1.json: discovery
    fs.writeFileSync(
      path.join(apiDir, "../v1.json"),
      JSON.stringify({
        version: "1",
        generatedAt,
        endpoints: {
          posts: "/api/v1/posts.json",
          post: "/api/v1/posts/{slug}.json",
          domains: "/api/v1/domains.json",
          domain: "/api/v1/domains/{key}.json",
        },
        site: site.url,
        license: site.license.spdx,
      }, null, 2)
    );

    // /api/v1/posts.json: index
    fs.writeFileSync(
      path.join(apiDir, "posts.json"),
      JSON.stringify({
        version: "1",
        generatedAt,
        posts: capturedPosts.map((p) => ({
          slug: p.fileSlug,
          url: p.url,
          title: p.data.title,
          date: p.date.toISOString(),
          domain: p.data.domain,
          excerpt: p.data.excerpt || null,
          description: p.data.description || null,
          related: p.data.related || [],
          links: {
            self: `/api/v1/posts/${p.fileSlug}.json`,
            html: p.url,
            markdown: `/${p.fileSlug}.md`,
          },
        })),
      }, null, 2)
    );

    // /api/v1/posts/{slug}.json: individual posts with content
    for (const p of capturedPosts) {
      const raw = fs.readFileSync(p.inputPath, "utf-8");
      const relatedResolved = (p.data.related || []).map((slug) => {
        const rel = capturedPosts.find((r) => r.fileSlug === slug);
        return rel
          ? { slug: rel.fileSlug, url: rel.url, title: rel.data.title,
              links: { self: `/api/v1/posts/${rel.fileSlug}.json`, html: rel.url } }
          : { slug };
      });

      fs.writeFileSync(
        path.join(apiDir, "posts", `${p.fileSlug}.json`),
        JSON.stringify({
          version: "1",
          slug: p.fileSlug,
          url: p.url,
          title: p.data.title,
          date: p.date.toISOString(),
          domain: p.data.domain,
          excerpt: p.data.excerpt || null,
          description: p.data.description || null,
          related: relatedResolved,
          content: stripFrontmatter(raw),
          contentType: "text/markdown",
          links: {
            self: `/api/v1/posts/${p.fileSlug}.json`,
            html: p.url,
            markdown: `/${p.fileSlug}.md`,
            domain: `/api/v1/domains/${p.data.domain}.json`,
          },
        }, null, 2)
      );
    }

    // /api/v1/domains.json: index
    fs.writeFileSync(
      path.join(apiDir, "domains.json"),
      JSON.stringify({
        version: "1",
        generatedAt,
        domains: domains.map((d) => {
          const domainPosts = capturedPosts.filter((p) => p.data.domain === d.key);
          return {
            key: d.key,
            title: d.title,
            description: d.description,
            url: `/${d.key}/`,
            postCount: domainPosts.length,
            posts: domainPosts.map((p) => p.fileSlug),
            links: {
              self: `/api/v1/domains/${d.key}.json`,
              html: `/${d.key}/`,
            },
          };
        }),
      }, null, 2)
    );

    // /api/v1/domains/{key}.json: individual domains with full post metadata
    for (const d of domains) {
      const domainPosts = capturedPosts.filter((p) => p.data.domain === d.key);
      fs.writeFileSync(
        path.join(apiDir, "domains", `${d.key}.json`),
        JSON.stringify({
          version: "1",
          key: d.key,
          title: d.title,
          description: d.description,
          url: `/${d.key}/`,
          posts: domainPosts.map((p) => ({
            slug: p.fileSlug,
            url: p.url,
            title: p.data.title,
            date: p.date.toISOString(),
            excerpt: p.data.excerpt || null,
            links: {
              self: `/api/v1/posts/${p.fileSlug}.json`,
              html: p.url,
            },
          })),
          links: {
            self: `/api/v1/domains/${d.key}.json`,
            html: `/${d.key}/`,
          },
        }, null, 2)
      );
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
