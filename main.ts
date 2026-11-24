// Two-Sentence Horror — winning entry (candidate C24, blind-pairwise winner).
// Writes exactly two sentences, 112 characters, to /output/entry.txt.
// v2: added a format self-check so the program refuses to write an entry
// that would fail the gate (must be 1-400 characters, exactly two sentences).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I count the steps to my flat every night: fourteen. Tonight there were fifteen, and the extra one was breathing.";

// Gate mirror: UTF-8 text, 1-400 characters, not only whitespace, exactly
// two sentences (split on a terminal mark followed by whitespace).
const sentences = entry.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry length ${entry.length} is outside the 1-400 gate`);
}
if (entry.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (sentences.length !== 2) {
  throw new Error(`entry has ${sentences.length} sentences, expected exactly 2`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
