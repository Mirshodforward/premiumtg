#!/usr/bin/env node
// Statik eksportni (out/) lokal ko'rsatadi: `npm run start`. Saytda buni nginx bajaradi, qoidalar bir xil:
// toza manzillar (/blog → blog.html), oxirgi slash va .html → 308, topilmagan sahifa → 404.html.
//   npm run start -- --hostname 127.0.0.1 --port 3100
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const host = opt("hostname", "127.0.0.1");
const port = Number(opt("port", process.env.PORT ?? 3000));
const root = resolve("out");

const HTML = "text/html; charset=utf-8";
const TYPES = {
  ".html": HTML,
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "text/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};
// Kengaytmasiz yoki turi nomidan bilinmaydigan fayllar (nginx'dagi alohida qoidalar)
function typeOf(path) {
  if (path.endsWith("/opengraph-image")) return "image/png";
  if (path === "/blog/rss.xml") return "application/rss+xml; charset=utf-8";
  return TYPES[extname(path)] ?? "application/octet-stream";
}
const SECURITY = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};
const isFile = (file) => stat(file).then((s) => s.isFile(), () => false);

createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  const path = decodeURIComponent(url.pathname);
  const redirect = (to) => res.writeHead(308, { Location: to + url.search }).end();
  const send = async (status, file, type) => {
    res.writeHead(status, { "Content-Type": type, ...SECURITY });
    res.end(req.method === "HEAD" ? undefined : await readFile(file));
  };

  if (path !== "/" && path.endsWith("/")) return redirect(path.replace(/\/+$/, "") || "/");
  if (path === "/index.html") return redirect("/");
  if (path.endsWith(".html")) return redirect(path.slice(0, -".html".length));

  const base = join(root, normalize(path));
  if (base !== root && !base.startsWith(root + sep)) return res.writeHead(403).end();
  for (const [file, type] of [
    [base, typeOf(path)],
    [`${base}.html`, HTML],
    [join(base, "index.html"), HTML],
  ]) {
    if (await isFile(file)) return send(200, file, type);
  }
  return send(404, join(root, "404.html"), HTML);
}).listen(port, host, () => console.log(`out/ → http://${host}:${port}`));
