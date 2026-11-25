// One Star for Monday — entry program (program/v1, node22).
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt: a one-star
// review of Monday written as if Monday were a restaurant. No network,
// no randomness, no dependencies — the same line on every run, well
// inside the 1-180 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: 23 words, 129 characters, one line, plain text.
// Table ("seated me badly"), server ("served"), dishes (a 7am alarm,
// spilled coffee, gridlock, a 9am meeting) and the bill ("the whole
// week") — every Monday pain, and the joke only works on Monday,
// the day the whole week gets charged.
const ENTRY =
  "One star. Monday seated me badly, served a 7am alarm, spilled " +
  "coffee, gridlock, and a 9am meeting, then billed me the whole week.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
// Only ever write inside MAKEFUN_OUTPUT_DIR — never a relative path, never
// rmSync/rm the output dir (the grader runs on a read-only filesystem).
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
