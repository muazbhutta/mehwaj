#!/usr/bin/env node
// ============================================================================
// check-copy: guards the house style rules for visible copy.
//
//   * no em dash and no en dash anywhere
//   * no spaced hyphen used as a dash (" - ")
//   * the firm name is always written "M.W. & Co.", never "MW & Co"
//   * no "premier" and no "ICAP-approved" claims
//
// Comment only lines are skipped, so notes to developers are not policed.
// Run it with: npm run check:copy
// ============================================================================

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOTS = ["app", "components", "lib"];
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".mjs", ".css"];
const cwd = process.cwd();

const RULES = [
  {
    id: "em-dash",
    test: /—/,
    message: 'em dash found. Use a comma, a colon, a full stop or "·".',
  },
  {
    id: "en-dash",
    test: /–/,
    message:
      'en dash found. Use "to" for ranges, or a comma, a colon or a full stop.',
  },
  {
    id: "spaced-hyphen",
    test: /\S \- \S/,
    message:
      'spaced hyphen used as a dash. Use a comma, a colon, a full stop or "·".',
  },
  {
    id: "firm-name",
    test: /\bMW\s*&(?:amp;)?\s*Co\b/,
    message: 'the firm name is written "M.W. & Co.", with dots.',
  },
  {
    id: "premier",
    test: /\bpremier\b/i,
    message: 'remove "premier": the tone is factual, not promotional.',
  },
  {
    id: "icap-approved",
    test: /ICAP[- ]approved/i,
    message:
      'remove "ICAP-approved": the firm holds a Certificate of Practice.',
  },
];

/** A line that only carries a comment is not visible copy. */
function isCommentLine(line) {
  const trimmed = line.trim();
  return (
    trimmed.startsWith("//") ||
    trimmed.startsWith("/*") ||
    trimmed.startsWith("*") ||
    trimmed.startsWith("#")
  );
}

/**
 * The parts of a line that are actually copy: string literals, JSX text
 * between tags, and a bare prose line inside a multi line JSX block. Code is
 * left alone, so arithmetic such as `length - 1` is not mistaken for a dash.
 */
function copySegments(line) {
  const segments = [];

  const literals = line.match(
    /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/g
  );
  if (literals) segments.push(...literals);

  const jsxText = line.match(/>[^<>{}]+</g);
  if (jsxText) segments.push(...jsxText);

  // A line of plain prose wrapped across several lines of JSX.
  if (!/["'`<>{};=()]/.test(line)) segments.push(line);

  return segments;
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, files);
    } else if (EXTENSIONS.some((ext) => entry.endsWith(ext))) {
      files.push(full);
    }
  }
  return files;
}

const problems = [];

for (const root of ROOTS) {
  let files;
  try {
    files = walk(join(cwd, root));
  } catch {
    continue;
  }

  for (const file of files) {
    const lines = readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, i) => {
      if (isCommentLine(line)) return;
      const segments = copySegments(line);
      if (segments.length === 0) return;

      for (const rule of RULES) {
        const hit = segments.find((segment) => rule.test.test(segment));
        if (hit) {
          problems.push({
            file: relative(cwd, file),
            line: i + 1,
            rule: rule.id,
            message: rule.message,
            text: hit.trim().slice(0, 120),
          });
        }
      }
    });
  }
}

if (problems.length === 0) {
  console.log("check:copy passed. No banned characters or phrases found.");
  process.exit(0);
}

console.error(`check:copy failed with ${problems.length} problem(s):\n`);
for (const p of problems) {
  console.error(`${p.file}:${p.line}  [${p.rule}] ${p.message}`);
  console.error(`    ${p.text}\n`);
}
process.exit(1);
