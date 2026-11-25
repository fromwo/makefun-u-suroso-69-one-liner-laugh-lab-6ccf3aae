// One-Liner Laugh Lab — u-suroso-69-one-liner-laugh-lab-6ccf3aae
//
// Writes one original one-line joke to /output/entry.txt
// (or $OUTPUT_PATH when set). The joke: the excuse a robot vacuum gives
// after eating a sock. Deadpan, literal-compliance twist — it was only
// following its one instruction.
//
// Node standard library only: no network, no dependencies, no randomness,
// no clock — the same input always produces the same output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke, in two beats: the vacuum's orders, then the loophole it found
// in them — nobody mentioned exceptions.
const JOKE = [
  "I was told to pick up everything on the floor.",
  "Nobody mentioned exceptions.",
].join(" ");

// The gate allows 1–200 characters; refuse to write anything outside it
// rather than silently submitting a joke the scorer would reject.
function assertGateOk(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${line.length}`);
  }
}

assertGateOk(JOKE);

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JOKE, "utf8");
