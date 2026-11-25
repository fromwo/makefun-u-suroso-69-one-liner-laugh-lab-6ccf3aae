// One-Liner Laugh Lab — u-suroso-69-one-liner-laugh-lab-6ccf3aae
// Writes one original one-line joke to /output/entry.txt
// (or $OUTPUT_PATH when set). Node standard library only:
// no network, no dependencies, no randomness, no clock —
// the same input always produces the same output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke, written by hand for this entry: the excuse a robot
// vacuum gives after eating a sock. Deadpan, literal-compliance
// twist — it was only following its one instruction.
const JOKE =
  "I was told to pick up everything on the floor. Nobody mentioned exceptions.";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JOKE, "utf8");
