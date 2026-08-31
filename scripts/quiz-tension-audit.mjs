/**
 * quiz-tension-audit.mjs
 *
 * Enumerates all (question, question, answer-combo) triples that have no
 * tension defined, then scores them by "cross-tag conflict potential" so
 * the most politically interesting uncovered pairs surface first.
 *
 * Usage:  node scripts/quiz-tension-audit.mjs [--all] [--covered]
 *
 *   (no flag)   Print uncovered pairs with score > 0, sorted by score
 *   --all       Print every pair (covered and uncovered)
 *   --covered   Print only pairs that already have a tension
 */

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const dataCode = readFileSync(join(ROOT, "src/assets/js/quiz-data.js"), "utf-8");

let QUIZ_QUESTIONS, QUIZ_CONTRADICTIONS;
try {
  const wrapped = new Function(`${dataCode}; return { QUIZ_QUESTIONS, QUIZ_CONTRADICTIONS };`);
  ({ QUIZ_QUESTIONS, QUIZ_CONTRADICTIONS } = wrapped());
} catch (e) {
  console.error("Failed to parse quiz-data.js:", e.message);
  process.exit(1);
}

const SHOW_ALL = process.argv.includes("--all");
const SHOW_COVERED = process.argv.includes("--covered");

// Canonical key for a (q1,a1,q2,a2) pair
function comboKey(q1, a1, q2, a2) {
  return [`${q1}:${a1}`, `${q2}:${a2}`].sort().join("|");
}

// Build set of covered combos
const coveredCombos = new Set();
for (const c of QUIZ_CONTRADICTIONS) {
  if (c.conditions.length !== 2) continue;
  const [c0, c1] = c.conditions;
  coveredCombos.add(comboKey(c0.q, c0.a, c1.q, c1.a));
}

// Cross-tag pairs that indicate genuine logical tension when both appear
const CONFLICT_PAIRS = [
  ["s", "l"],  // statist + libertarian
  ["s", "x"],  // statist + structural skeptic
  ["l", "r"],  // libertarian + reformist
  ["l", "b"],  // libertarian + bleeding heart (want outcomes via gov they distrust)
];

function scoreConflict(tags) {
  const tagSet = new Set(tags);
  let score = 0;
  for (const [a, b] of CONFLICT_PAIRS) {
    if (tagSet.has(a) && tagSet.has(b)) score += 2;
  }
  return score;
}

const qById = new Map(QUIZ_QUESTIONS.map(q => [q.id, q]));

const results = [];
const qList = QUIZ_QUESTIONS;

for (let i = 0; i < qList.length; i++) {
  for (let j = i + 1; j < qList.length; j++) {
    const q1 = qList[i];
    const q2 = qList[j];

    for (const a1 of ["yes", "no"]) {
      for (const a2 of ["yes", "no"]) {
        const key = comboKey(q1.id, a1, q2.id, a2);
        const covered = coveredCombos.has(key);

        if (SHOW_COVERED && !covered) continue;
        if (!SHOW_ALL && !SHOW_COVERED && covered) continue;

        const tags = [
          ...(a1 === "yes" ? q1.yesTags : q1.noTags),
          ...(a2 === "yes" ? q2.yesTags : q2.noTags)
        ];
        const score = scoreConflict(tags);

        if (!SHOW_ALL && !SHOW_COVERED && score === 0) continue;

        results.push({ q1: q1.id, a1, q2: q2.id, a2, tags: [...new Set(tags)], score, covered });
      }
    }
  }
}

results.sort((a, b) => b.score - a.score);

const label = SHOW_COVERED ? "COVERED" : SHOW_ALL ? "ALL" : "UNCOVERED (score > 0)";
console.log(`\n=== Quiz Tension Audit: ${label} ===`);
console.log(`Questions: ${QUIZ_QUESTIONS.length}  |  Tensions: ${QUIZ_CONTRADICTIONS.length}`);
console.log(`All possible pairs: ${QUIZ_QUESTIONS.length * (QUIZ_QUESTIONS.length - 1) / 2}`);
console.log(`Covered combos: ${coveredCombos.size}\n`);

for (const r of results) {
  const mark = r.covered ? "[COVERED]" : `[score ${r.score}]`;
  const cat1 = qById.get(r.q1)?.category ?? "?";
  const cat2 = qById.get(r.q2)?.category ?? "?";
  console.log(`${mark}  ${r.q1} (${r.a1}) + ${r.q2} (${r.a2})`);
  console.log(`  cats: ${cat1} / ${cat2}  |  tags: ${r.tags.join(", ")}`);
}

console.log(`\nTotal: ${results.length} pairs shown`);
