// Robot Pickup Line Championship — entry program.
//
// The program writes exactly one pickup line, a single line of at most
// 200 characters, to /output/entry.txt. The line is fixed: the same bytes
// on every run, so the two grading runs agree byte for byte.
//
// The joke is built from the robot's own hardware instead of a human line
// with a beep pasted on: a short charging cable turns a logistical limit
// into the flirtation itself. No setup the punchline does not need, and
// the robot stays charming rather than creepy — it asks for proximity
// because the cable forces it, and lets the human decide.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. Counted by the gate check and verified by hand:
// 120 characters, one line, no trailing newline in the file.
const PICKUP_LINE =
  "My charging cable is only three feet long, so if you want to keep talking, you'll have to stand dangerously close to me.";

// The gate the sealed scorer applies: UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything that would fail it.
const GATE_MIN_CHARS = 1;
const GATE_MAX_CHARS = 200;

function validateLine(line: string): void {
  const chars = [...line].length;
  if (chars < GATE_MIN_CHARS || chars > GATE_MAX_CHARS) {
    throw new Error(
      `entry line is ${chars} characters, outside the ${GATE_MIN_CHARS}-${GATE_MAX_CHARS} gate`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry line is only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
}

function outputDir(): string {
  // The grader provides /output. OUTPUT_DIR only lets a local run point
  // the file elsewhere for testing; it is never needed in grading.
  return process.env.OUTPUT_DIR ?? "/output";
}

function main(): void {
  validateLine(PICKUP_LINE);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  // No trailing newline: the file holds exactly the line, nothing else.
  writeFileSync(target, PICKUP_LINE, "utf8");
  console.log(PICKUP_LINE);
}

main();
