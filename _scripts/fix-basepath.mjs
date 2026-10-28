// Post-export fixup: mdsvr 2.x does not apply generate.basePath to
// root-relative links rendered from Markdown content (e.g. ./01-ai-intro
// becomes /01-ai-intro/ instead of /ai-2nd-degree/01-ai-intro/).
// This script prefixes any href="/..." or src="/..." missing the basePath.

import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const settings = JSON.parse(readFileSync("_mdsvr/settings.json", "utf8"));
const basePath = settings.generate?.basePath?.replace(/\/$/, "");
const outputDir = settings.generate?.outputDir ?? "_html/public";

if (!basePath) {
  console.log("fix-basepath: no generate.basePath set, skipping");
  process.exit(0);
}

const escaped = basePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const pattern = new RegExp(
  `(href|src)="\\/(?!${escaped.slice(1)}(\\/|"))`,
  "g"
);

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* htmlFiles(full);
    else if (entry.endsWith(".html")) yield full;
  }
}

let files = 0;
let links = 0;
for (const file of htmlFiles(outputDir)) {
  const html = readFileSync(file, "utf8");
  const fixed = html.replace(pattern, (_m, attr) => {
    links++;
    return `${attr}="${basePath}/`;
  });
  if (fixed !== html) {
    writeFileSync(file, fixed);
    files++;
  }
}

console.log(`fix-basepath: prefixed ${links} link(s) in ${files} file(s) with "${basePath}"`);
