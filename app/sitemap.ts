import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS, CATEGORIES, getLastModified } from "@/lib/blog";

/**
 * Sitemap: bosh sahifa + blog indeksi + har bir maqola.
 * priority har maqolaning o'z qiymatidan olinadi (lib/blog/posts/*),
 * lastModified esa `updated` maydonidan — narx o'zgarganda faqat
 * tegishli maqolalarning sanasi yangilanadi va Google shuni qayta indekslaydi.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE.domain,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.domain}/blog`,
      lastModified: BLOG_POSTS.reduce<Date>((latest, p) => {
        const d = getLastModified(p);
        return d > latest ? d : latest;
      }, new Date(0)),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.domain}/#narxlar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.domain}/#qanday`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.domain}/#tolov`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.domain}/#bonus`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.domain}/#faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.domain}/blog/${post.slug}`,
    lastModified: getLastModified(post),
    // Narx va xarid maqolalari tez-tez yangilanadi, tushuntirish maqolalari kamroq
    changeFrequency:
      post.category === "asoslar" || post.category === "xarid"
        ? ("monthly" as const)
        : ("yearly" as const),
    priority: post.priority,
  }));

  // Kategoriya bo'limlari blog sahifasidagi filtr orqali ochiladi — ular
  // alohida URL emas, shuning uchun sitemap'ga qo'shilmaydi. CATEGORIES
  // faqat maqolalar to'liq qamrab olinganini tekshirish uchun ishlatiladi.
  const covered = new Set(BLOG_POSTS.map((p) => p.category));
  if (covered.size !== CATEGORIES.length && process.env.NODE_ENV !== "production") {
    console.warn("[sitemap] Ba'zi kategoriyalarda maqola yo'q");
  }

  return [...staticPages, ...posts];
}
