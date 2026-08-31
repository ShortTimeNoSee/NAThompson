/**
 * Privacy and style enforcement test.
 *
 * Scans source files and (optionally) built HTML for:
 *   1. External URLs (src, href, action) pointing outside nathompson.com
 *   2. Inline <script> tags (blocked by CSP, signals a template bug)
 *   3. Inline <style> blocks and style="" attributes (blocked by style-src 'self')
 *   4. JS CSSOM style writes (.style / cssText / setProperty)
 *   5. Dead Permissions-Policy features and CSP privacy regressions in _headers
 *   6. Unfingerprinted /assets/js|css references in built HTML (CDN cache-busting)
 *   7. Em dash characters (U+2014) and substitutes (" -- ", " - ")
 *
 * Flags:
 *   --source-only   Skip the _site HTML scan (fast, used by pre-commit hook)
 *
 * Exits with code 1 if any violation is found.
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const SOURCE_ONLY = process.argv.includes("--source-only");
const SITE_DIR = join(process.cwd(), "_site");
const ALLOWED_HOSTS = ["nathompson.com"];

// Matches external URLs in resource-loading attributes (src, action) on any element.
// href is intentionally excluded here -- <a href> outbound navigation links are fine;
// <link href> is checked separately below.
const EXTERNAL_SRC_RE =
  /(?:src|action)=["'](https?:\/\/(?!nathompson\.com)[^"']+)["']/gi;

// Matches external href only on <link> and <base> elements (resource loads / redirects).
// Does NOT match <a href>, which is plain navigation and does not violate CSP or privacy.
const EXTERNAL_LINK_HREF_RE =
  /<(?:link|base)\b[^>]*\bhref=["'](https?:\/\/(?!nathompson\.com)[^"']+)["']/gi;

// Matches external URLs in <meta content="..."> (e.g. http-equiv refresh).
const EXTERNAL_META_CONTENT_RE =
  /<meta\b[^>]*\bcontent=["'](https?:\/\/(?!nathompson\.com)[^"']+)["']/gi;

// Matches url() in CSS with an absolute URL
const EXTERNAL_CSS_URL_RE =
  /url\(["']?(https?:\/\/(?!nathompson\.com)[^"')]+)["']?\)/gi;

// Inline script tags (excluding type="application/ld+json" which is data, not executable)
const INLINE_SCRIPT_RE = /<script(?![^>]*type=["']application\/ld\+json["'])[^>]*>[^<]+<\/script>/gi;

// Inline <style> blocks are blocked by style-src 'self' and break page chrome
const INLINE_STYLE_BLOCK_RE = /<style\b[^>]*>/gi;

// Inline style="" attributes are blocked by style-src 'self'
const INLINE_STYLE_ATTR_RE = /\sstyle\s*=\s*["']/gi;

// JS CSSOM writes are blocked by the same CSP directive
const JS_STYLE_WRITE_RE = /\.style(?:\.[A-Za-z_$][\w$]*|\[["'][^"']+["']\]|\s*=)|cssText\s*=|setProperty\s*\(/g;

// Removed / never-standardized Permissions-Policy features that browsers warn about
const BAD_PERMISSIONS_FEATURES = ["interest-cohort", "browsing-topics"];

// Em dash in template output files (not prose content inside .post-body)
const EM_DASH = "—";

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

function extractPostBody(html) {
  const match = html.match(/<div class="post-body"[^>]*>([\s\S]*?)<\/div>/);
  return match ? match[1] : "";
}

let failures = [];

const htmlFiles = SOURCE_ONLY ? [] : walk(SITE_DIR).filter((f) => f.endsWith(".html"));

if (!SOURCE_ONLY) {
  for (const file of htmlFiles) {
    const rel = relative(SITE_DIR, file);
    const html = readFileSync(file, "utf-8");

    // Check for external URLs in resource-loading attributes
    let match;
    while ((match = EXTERNAL_SRC_RE.exec(html)) !== null) {
      failures.push(`EXTERNAL SRC/ACTION in ${rel}: ${match[1]}`);
    }
    EXTERNAL_SRC_RE.lastIndex = 0;

    while ((match = EXTERNAL_LINK_HREF_RE.exec(html)) !== null) {
      failures.push(`EXTERNAL LINK HREF in ${rel}: ${match[1]}`);
    }
    EXTERNAL_LINK_HREF_RE.lastIndex = 0;

    while ((match = EXTERNAL_META_CONTENT_RE.exec(html)) !== null) {
      failures.push(`EXTERNAL META CONTENT in ${rel}: ${match[1]}`);
    }
    EXTERNAL_META_CONTENT_RE.lastIndex = 0;

    while ((match = EXTERNAL_CSS_URL_RE.exec(html)) !== null) {
      failures.push(`EXTERNAL CSS URL in ${rel}: ${match[1]}`);
    }
    EXTERNAL_CSS_URL_RE.lastIndex = 0;

    // Check for inline executable scripts
    const scriptMatches = html.match(INLINE_SCRIPT_RE);
    if (scriptMatches) {
      for (const s of scriptMatches) {
        failures.push(`INLINE SCRIPT in ${rel}: ${s.slice(0, 80)}...`);
      }
    }

    // Inline styles are blocked by CSP style-src 'self'
    if (INLINE_STYLE_BLOCK_RE.test(html)) {
      failures.push(`INLINE STYLE BLOCK in ${rel}`);
    }
    INLINE_STYLE_BLOCK_RE.lastIndex = 0;

    if (INLINE_STYLE_ATTR_RE.test(html)) {
      failures.push(`INLINE STYLE ATTR in ${rel}`);
    }
    INLINE_STYLE_ATTR_RE.lastIndex = 0;

    // Local JS/CSS must be content-fingerprinted so CDN max-age cannot pin a stale file
    const assetRefs = html.matchAll(
      /(?:src|href)=["'](\/assets\/(?:js|css)\/[^"'?]+)(\?[^"']*)?["']/g
    );
    for (const [, assetPath, query] of assetRefs) {
      if (!query || !/\bv=[0-9a-f]{8,}\b/i.test(query)) {
        failures.push(`UNFINGERPRINTED ASSET in ${rel}: ${assetPath}`);
      }
    }
  }
}

// -- Check source code files for em dashes AND em dash substitutes
// Covers all .js, .njk, .css, .json, .html files under src/ and root config files.
const SOURCE_EXTS = [".njk", ".json", ".css", ".js", ".html"];
// Matches em dash substitutes in prose:
//   " -- "  double-hyphen with spaces
//   " - "   single hyphen with spaces (hyphenated words never have surrounding spaces)
// Applied to .md files and prose-only JS files (quiz-data.js).
// NOT applied globally to all .js files to avoid false positives from arithmetic (x - y).
const EM_DASH_SUB_RE = / -- /g;
const EM_DASH_SINGLE_RE = / - /g;
const PROSE_JS_FILES = new Set(["src/assets/js/quiz-data.js"]);

function walkSource() {
  const results = [];
  // Walk all of src/ so nothing is missed (quiz.njk, index.njk, etc.)
  try {
    results.push(...walk(join(process.cwd(), "src")));
  } catch (_) {}
  // Root config files
  results.push(join(process.cwd(), ".eleventy.js"));
  return results;
}

for (const file of walkSource()) {
  // Only check template/script/style extensions; .md is handled separately below
  if (!SOURCE_EXTS.some((ext) => file.endsWith(ext))) continue;
  let content;
  try {
    content = readFileSync(file, "utf-8");
  } catch (_) {
    continue;
  }
  const rel = relative(process.cwd(), file);
  const lines = content.split("\n");
  lines.forEach((line, i) => {
    if (line.includes(EM_DASH)) {
      failures.push(`EM DASH in ${rel}:${i + 1}: ${line.trim()}`);
    }
    if (EM_DASH_SUB_RE.test(line)) {
      failures.push(`EM DASH SUBSTITUTE (" -- ") in ${rel}:${i + 1}: ${line.trim()}`);
    }
    EM_DASH_SUB_RE.lastIndex = 0;

    if (PROSE_JS_FILES.has(rel) && EM_DASH_SINGLE_RE.test(line)) {
      failures.push(`EM DASH SUBSTITUTE (" - ") in ${rel}:${i + 1}: ${line.trim()}`);
    }
    EM_DASH_SINGLE_RE.lastIndex = 0;

    if (INLINE_STYLE_BLOCK_RE.test(line)) {
      failures.push(`INLINE STYLE BLOCK in ${rel}:${i + 1}`);
    }
    INLINE_STYLE_BLOCK_RE.lastIndex = 0;

    if (INLINE_STYLE_ATTR_RE.test(line)) {
      failures.push(`INLINE STYLE ATTR in ${rel}:${i + 1}: ${line.trim().slice(0, 100)}`);
    }
    INLINE_STYLE_ATTR_RE.lastIndex = 0;

    if (file.endsWith(".js") && JS_STYLE_WRITE_RE.test(line)) {
      failures.push(`JS STYLE WRITE in ${rel}:${i + 1}: ${line.trim().slice(0, 100)}`);
    }
    JS_STYLE_WRITE_RE.lastIndex = 0;
  });
}

// -- Headers: keep CSP strict and Permissions-Policy free of dead feature names
for (const headersPath of [
  join(process.cwd(), "src/_headers"),
  join(process.cwd(), "_headers"),
]) {
  let headers;
  try {
    headers = readFileSync(headersPath, "utf-8");
  } catch (_) {
    continue;
  }
  const rel = relative(process.cwd(), headersPath);
  for (const feature of BAD_PERMISSIONS_FEATURES) {
    if (headers.includes(feature)) {
      failures.push(`DEAD PERMISSIONS-POLICY FEATURE in ${rel}: ${feature}`);
    }
  }
  if (!/style-src\s+'self'/.test(headers)) {
    failures.push(`CSP style-src 'self' missing in ${rel}`);
  }
  if (!/script-src\s+'self'/.test(headers)) {
    failures.push(`CSP script-src 'self' missing in ${rel}`);
  }
  if (/cloudflareinsights|unsafe-inline|unsafe-eval/.test(headers)) {
    failures.push(`CSP privacy regression in ${rel}: third-party or unsafe directive`);
  }
}

// -- Check all .md files in src/ for em dashes and em dash substitutions
const contentFiles = walk(join(process.cwd(), "src")).filter((f) => f.endsWith(".md"));
for (const file of contentFiles) {
  const rel = relative(process.cwd(), file);
  let content;
  try {
    content = readFileSync(file, "utf-8");
  } catch (_) {
    continue;
  }
  const lines = content.split("\n");
  lines.forEach((line, i) => {
    if (line.includes(EM_DASH)) {
      failures.push(`EM DASH in ${rel}:${i + 1}: ${line.trim()}`);
    }
    if (EM_DASH_SUB_RE.test(line)) {
      failures.push(`EM DASH SUBSTITUTE (" -- ") in ${rel}:${i + 1}: ${line.trim()}`);
    }
    EM_DASH_SUB_RE.lastIndex = 0;

    if (EM_DASH_SINGLE_RE.test(line)) {
      failures.push(`EM DASH SUBSTITUTE (" - ") in ${rel}:${i + 1}: ${line.trim()}`);
    }
    EM_DASH_SINGLE_RE.lastIndex = 0;
  });
}

if (failures.length > 0) {
  console.error("\nPrivacy / style check FAILED:\n");
  for (const f of failures) {
    console.error("  FAIL  " + f);
  }
  console.error(`\n${failures.length} violation(s) found.\n`);
  process.exit(1);
} else {
  const htmlNote = SOURCE_ONLY ? "source-only mode" : `${htmlFiles.length} HTML files`;
  console.log(`Style check passed (${htmlNote}).`);
}
