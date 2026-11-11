
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");

const backupRoot = path.join(
  ROOT,
  "yaamur-colors-backup"
);

// الألوان الرسمية الجديدة
const COLORS = {
  primary: "#08704C",
  green: "#4D7A61",
  sage: "#799B88",
  greenLight: "#D2DED7",
  olive: "#A2B366",
  oliveLight: "#F0F3E7",
};

// استبدال الألوان المستخدمة سابقًا
const replacements = [
  ["#00A186", COLORS.green],
  ["#008C74", COLORS.green],
  ["#7B4F28", COLORS.olive],
  ["#F8F4ED", COLORS.oliveLight],
  ["#C3CFF1", COLORS.greenLight],
  ["#EAF3EE", COLORS.oliveLight],

  // تدرجات خضراء قديمة
  ["#07563D", COLORS.primary],
  ["#07553D", COLORS.primary],
  ["#06583C", COLORS.primary],
  ["#042B20", "#205939"],

  // ظلال الأخضر
  ["#174734", "#205939"],
];

// الملفات التي سنراجعها
const allowedExtensions = new Set([
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
  ".css",
]);

const excludedDirs = new Set([
  "node_modules",
  ".next",
  ".git",
  "public",
  "yaamur-colors-backup",
]);

let changedFiles = 0;
let changedColors = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    if (excludedDirs.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!allowedExtensions.has(
      path.extname(entry.name)
    )) {
      continue;
    }

    const original = fs.readFileSync(
      fullPath,
      "utf8"
    );

    let updated = original;

    for (const [oldColor, newColor] of replacements) {
      const regex = new RegExp(
        oldColor.replace("#", "#"),
        "gi"
      );

      const matches = updated.match(regex);

      if (matches) {
        changedColors += matches.length;
        updated = updated.replace(regex, newColor);
      }
    }

    if (updated === original) continue;

    // إنشاء نسخة احتياطية من الملف الأصلي
    const relative = path.relative(SRC, fullPath);
    const backupPath = path.join(
      backupRoot,
      relative
    );

    fs.mkdirSync(
      path.dirname(backupPath),
      { recursive: true }
    );

    fs.copyFileSync(fullPath, backupPath);

    fs.writeFileSync(fullPath, updated, "utf8");

    changedFiles++;

    console.log(
      "Updated:",
      path.relative(ROOT, fullPath)
    );
  }
}

if (!fs.existsSync(SRC)) {
  console.error(
    "ERROR: src folder not found."
  );
  process.exit(1);
}

walk(SRC);

console.log("\n----------------------");
console.log("YAAMUR COLOR UPDATE");
console.log("----------------------");
console.log("Files updated:", changedFiles);
console.log("Colors replaced:", changedColors);
console.log("Backup:", backupRoot);
console.log("----------------------");
console.log("Done!");
