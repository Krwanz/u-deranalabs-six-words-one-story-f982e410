// Six Words, One Story — u-deranalabs-six-words-one-story-f982e410
// The whole entry is one six-word story. This program writes it to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR when the grader sets it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "Grandmother's recipe, still warm, no grandmother.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
