import { mkdirSync, writeFileSync } from "node:fs";

// Six-word story, revised: a stronger turn — grief, identity, and
// something left unsaid. The twin is gone, yet the narrator answers.
const story = "My twin died; I still answer.";

function validate(text: string): void {
  const words = text.trim().split(/\s+/);
  if (words.length !== 6) {
    throw new Error(`expected exactly 6 words, got ${words.length}`);
  }
  if (text.length < 1 || text.length > 60) {
    throw new Error("entry must be 1-60 characters");
  }
  if (!text.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must have no leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
}

mkdirSync("/output", { recursive: true });
validate(story);
writeFileSync("/output/entry.txt", story, "utf8");
console.log(`wrote ${story.length} chars, ${story.trim().split(/\s+/).length} words`);
