/**
 * Generate og:image PNG cards for all posts, domains, and the site default.
 * Also generates a 32x32 favicon PNG as a raster fallback.
 *
 * Run after the Eleventy build: `node scripts/generate-og-images.mjs`
 * Output: _site/og/*.png, _site/assets/favicon-32.png
 */

import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const site = JSON.parse(readFileSync(join(ROOT, "src/_data/site.json"), "utf-8"));
const domains = JSON.parse(readFileSync(join(ROOT, "src/_data/domains.json"), "utf-8"));

const MONO_FONT = join(ROOT, "src/assets/fonts/ibm-plex-mono/IBMPlexMono-Regular.woff2");

mkdirSync(join(ROOT, "_site/og"), { recursive: true });
mkdirSync(join(ROOT, "_site/assets"), { recursive: true });

// -- Helpers --

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapWords(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    const test = cur ? `${cur} ${w}` : w;
    if (test.length <= maxChars) {
      cur = test;
    } else {
      if (cur) lines.push(cur);
      cur = w.length > maxChars ? w.slice(0, maxChars - 1) + "…" : w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function layoutTitle(text) {
  let lines = wrapWords(text, 28);
  if (lines.length <= 3) return { lines, size: 60, lineH: 78 };
  lines = wrapWords(text, 36);
  if (lines.length <= 3) return { lines, size: 48, lineH: 64 };
  lines = wrapWords(text, 44).slice(0, 3);
  return { lines, size: 40, lineH: 54 };
}

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^(\w+):\s*["']?(.+?)["']?\s*$/);
    if (kv) out[kv[1]] = kv[2];
  }
  return out;
}

// -- Card SVG builder --

function buildCardSvg({ topLabel, title }) {
  const { lines, size, lineH } = layoutTitle(title);
  const textRows = lines
    .map(
      (line, i) =>
        `<text x="52" y="${180 + i * lineH}" font-family="IBM Plex Mono" font-size="${size}" fill="#e8e7e0">${escapeXml(line)}</text>`
    )
    .join("\n  ");

  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0d0c0a"/>
  <rect width="5" height="630" fill="#e05252"/>
  <text x="52" y="50" font-family="IBM Plex Mono" font-size="14" fill="#e05252" letter-spacing="3">${escapeXml(topLabel.toUpperCase())}</text>
  <line x1="52" y1="72" x2="1148" y2="72" stroke="#2e2e2a" stroke-width="1"/>
  ${textRows}
  <line x1="52" y1="560" x2="1148" y2="560" stroke="#2e2e2a" stroke-width="1"/>
  <text x="52" y="600" font-family="IBM Plex Mono" font-size="15" fill="#5c5c5c" letter-spacing="4">${escapeXml(site.name.toUpperCase())}</text>
  <text x="1148" y="600" font-family="IBM Plex Mono" font-size="15" fill="#5c5c5c" letter-spacing="1" text-anchor="end">NATHOMPSON.COM</text>
</svg>`;
}

function renderPng(svg, opts = {}) {
  const resvg = new Resvg(svg, {
    font: {
      fontFiles: [MONO_FONT],
      loadSystemFonts: false,
      defaultFontFamily: "IBM Plex Mono",
    },
    ...opts,
  });
  return resvg.render().asPng();
}

function save(destPath, png) {
  writeFileSync(destPath, png);
  const rel = destPath.replace(ROOT + "/", "");
  console.log(`  ok  ${rel}`);
}

// -- Post cards --

const postsDir = join(ROOT, "src/content/posts");
for (const file of readdirSync(postsDir).filter((f) => f.endsWith(".md"))) {
  const slug = file.replace(/\.md$/, "");
  const raw = readFileSync(join(postsDir, file), "utf-8");
  const fm = parseFrontmatter(raw);
  const domain = domains.find((d) => d.key === fm.domain);
  try {
    const svg = buildCardSvg({
      topLabel: domain ? domain.title : "Analysis",
      title: fm.title || slug,
    });
    save(join(ROOT, "_site/og", `${slug}.png`), renderPng(svg));
  } catch (err) {
    console.warn(`  WARN  og/${slug}.png: ${err.message}`);
  }
}

// -- Domain cards --

for (const domain of domains) {
  try {
    const svg = buildCardSvg({ topLabel: "Domain", title: domain.title });
    save(join(ROOT, "_site/og", `domain-${domain.key}.png`), renderPng(svg));
  } catch (err) {
    console.warn(`  WARN  og/domain-${domain.key}.png: ${err.message}`);
  }
}

// -- Default site card --

try {
  const svg = buildCardSvg({ topLabel: "Diagnostic Engine", title: site.tagline });
  save(join(ROOT, "_site/og/default.png"), renderPng(svg));
} catch (err) {
  console.warn(`  WARN  og/default.png: ${err.message}`);
}

// -- Favicon 32x32 PNG --

try {
  const faviconSvg = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#111111"/>
  <rect width="2" height="32" fill="#b91c1c"/>
  <text x="18" y="23" font-family="IBM Plex Mono" font-size="19" fill="#f0efea" text-anchor="middle">N</text>
</svg>`;
  save(join(ROOT, "_site/assets/favicon-32.png"), renderPng(faviconSvg));
} catch (err) {
  console.warn(`  WARN  favicon-32.png: ${err.message}`);
}

console.log("\nDone.");
