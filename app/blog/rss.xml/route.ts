import { BLOG_POSTS, getCategory, getLastModified } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** /blog/rss.xml — agregatorlar va kontent-kuzatuv botlari uchun */
export function GET() {
  const items = BLOG_POSTS.map((post) => {
    const url = `${SITE.domain}/blog/${post.slug}`;
    return `    <item>
      <title>${esc(post.title.uz)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(post.excerpt.uz)}</description>
      <category>${esc(getCategory(post.category).label.uz)}</category>
      <pubDate>${getLastModified(post).toUTCString()}</pubDate>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.name)} — Telegram Premium blogi</title>
    <link>${SITE.domain}/blog</link>
    <atom:link href="${SITE.domain}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Telegram Premium bo'yicha savol-javob maqolalari: narxlar, to'lov, xavfsizlik, imkoniyatlar va Stars.</description>
    <language>uz</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
