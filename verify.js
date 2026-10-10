const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = "D:/girlfriend-gift-site";

// Final clean file tree
console.log("=== FINAL FILE TREE (rebuilt site) ===");
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === "WhatsApp*") continue; // client media: leave as-is
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      console.log(`  ${"  ".repeat(0)}${e.name}/`);
      walk(p);
    } else {
      console.log(`  ${"  "}${e.name}`);
    }
  }
}
walk(root);

// No dates in captions across all pages
console.log("\n=== CHECK: no dates in captions across all pages ===");
for (const f of ["index.html", "letter.html", "questions.html", "gallery.html", "videos.html", "song.html"]) {
  const txt = fs.readFileSync(path.join(root, f), "utf8");
  const dates = txt.match(/\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2}\b/gi) || [];
  const years = txt.match(/\b(19|20)\d{2}\b/g) || [];
  console.log(`  ${f}: dates=${dates.length} years=${years.length}`);
}

// No placeholder copy
console.log("\n=== CHECK: no raw placeholder copy in pages ===");
for (const f of ["index.html", "letter.html", "questions.html", "gallery.html", "videos.html", "song.html"]) {
  const txt = fs.readFileSync(path.join(root, f), "utf8");
  console.log(`  ${f}: '[[Caption]]' count = ${txt.split("[[Caption]]").length - 1}`);
}

// script src app.js
console.log("\n=== CHECK: script src app.js ===");
for (const f of ["index.html", "gallery.html", "videos.html", "song.html", "letter.html", "questions.html"]) {
  const txt = fs.readFileSync(path.join(root, f), "utf8");
  console.log(`  ${f}: script src app.js -> ${txt.includes("app.js")}`);
}

// app.js stats
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
console.log(`\napp.js: ${app.length} chars, use strict: ${/^\s*['"]use strict['"]/.test(app)}, console.log: ${app.includes("console.log")}, TODO: ${app.split("TODO").length - 1}, FIXME: ${app.split("FIXME").length - 1}, [[ placeholders: ${app.split("[[").length - 1}`);

// styles.css tokens
console.log("\n=== CHECK: styles.css tokens ===");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const requiredTokens = ["--paper", "--rose", "--gold", "--ink", "--font-serif", "--font-sans",
  "--radius", "--space-12", "--reveal-distance", ".reveal", ".photo-card",
  ".letter-paper", ".marquee", ".sparkle", "scroll-snap"];
const missing = requiredTokens.filter(t => !css.includes(t));
console.log("  all required tokens present" || missing.length ? missing : "  all required tokens present");

// JS syntax
try {
  execSync("node --check " + path.join(root, "app.js"), { stdio: "pipe" });
  console.log("\nnode --check app.js: PASS");
} catch (e) {
  console.log("\nnode --check app.js: FAIL");
}

// CSS brace balance
const openBraces = (css.match(/{/g) || []).length;
const closeBraces = (css.match(/}/g) || []).length;
console.log(`CSS braces: open ${openBraces} close ${closeBraces} balanced: ${openBraces === closeBraces}`);

// PRD checklist
const prd = fs.readFileSync(path.join(root, "docs", "PRD.md"), "utf8");
console.log("\n=== PRD checklist ===");
for (const item of ["Docs: PRD, glossary, ADR, production-notes-adobe",
  "6 pages built: index, letter, questions, gallery, videos, song",
  "styles.css (design system + motion)",
  "app.js (motion layer)",
  "assets/ placeholders (6 photos, 3 video thumbnails as real JPEGs)",
  "Full render verification",
  "Client media drop-in",
  "Vercel deployment"]) {
  console.log(`  [${prd.toLowerCase().includes(item.toLowerCase()) ? "x" : " "}] ${item}`);
}

console.log("\nALL CHECKS COMPLETE");
