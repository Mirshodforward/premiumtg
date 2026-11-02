// scripts/gen-auto-posts-index.mjs — lib/blog/posts/auto/ dagi maqola fayllaridan
// lib/blog/posts/auto-index.ts ro'yxatini yasaydi.
//
// NIMA UCHUN: avtoblogyoz har maqolani alohida fayl sifatida qo'shadi (1 fayl = 1 maqola)
// va mavjud fayllarni tahrirlamaydi. Ro'yxat shu skriptdan chiqadi, shuning uchun
// qo'lda import yozish shart emas va build sinmaydi.
//
// QACHON ISHLAYDI: `npm run build` oldidan (prebuild) va `npm run blog:index` bilan.
// Vercel `npm run build` ni ishga tushiradi, demak prebuild u yerda ham ishlaydi.
//
// FAYL QOIDASI: lib/blog/posts/auto/<slug>.ts, ichida `export const post: BlogPost = {...}`.
// Fayl nomi = slug (a-z, 0-9, defis). `_` bilan boshlangan fayllar o'tkazib yuboriladi.
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "lib/blog/posts/auto");
const out = join(root, "lib/blog/posts/auto-index.ts");

if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const files = readdirSync(dir)
  .filter((f) => f.endsWith(".ts") && !f.startsWith("_"))
  .sort();

const errors = [];
for (const f of files) {
  const name = f.slice(0, -3);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
    errors.push(`${f}: fayl nomi slug bo'lishi kerak (a-z, 0-9, defis)`);
    continue;
  }
  const slug = readFileSync(join(dir, f), "utf8").match(
    /\bslug:\s*"([^"]+)"/,
  )?.[1];
  if (slug !== name) {
    errors.push(
      `${f}: ichidagi slug "${slug ?? "yo'q"}" fayl nomiga teng emas`,
    );
  }
}
if (errors.length) {
  console.error("auto-index xatolari:\n  " + errors.join("\n  "));
  process.exit(1);
}

const next = [
  "// AVTOMATIK YASALGAN FAYL — qo'lda tahrirlamang.",
  "// Manba: scripts/gen-auto-posts-index.mjs (npm run blog:index).",
  'import type { BlogPost } from "../types";',
  ...files.map(
    (f, i) => `import { post as p${i} } from "./auto/${f.slice(0, -3)}";`,
  ),
  "",
  "/** Avtoblogyoz qo'shgan maqolalar — lib/blog/posts/auto/ dagi har bir fayl. */",
  `export const POSTS_AUTO: BlogPost[] = [${files.map((_, i) => `p${i}`).join(", ")}];`,
  "",
].join("\n");

const prev = existsSync(out) ? readFileSync(out, "utf8") : null;
if (prev !== next) {
  writeFileSync(out, next);
  console.log(
    `auto-index: ${files.length} ta maqola, auto-index.ts yangilandi`,
  );
} else {
  console.log(`auto-index: ${files.length} ta maqola, o'zgarish yo'q`);
}
