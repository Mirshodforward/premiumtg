import type { Lang } from "@/lib/translations";
import { POSTS_ASOSLAR } from "./posts/a-asoslar";
import { POSTS_XARID } from "./posts/b-xarid";
import { POSTS_XAVFSIZLIK } from "./posts/c-xavfsizlik";
import { POSTS_IMKONIYATLAR } from "./posts/d-imkoniyatlar";
import { POSTS_STARS } from "./posts/e-stars";
import { POSTS_AMALIY } from "./posts/f-amaliy";
import {
  type BlogPost,
  type CategoryId,
  type LocaleText,
  CATEGORIES,
  getCategory,
  readingMinutes,
  tx,
} from "./types";

export type { BlogPost, CategoryId, LocaleText };
export { CATEGORIES, getCategory, tx };

/** Barcha maqolalar — sana bo'yicha yangidan eskiga */
export const BLOG_POSTS: BlogPost[] = [
  ...POSTS_ASOSLAR,
  ...POSTS_XARID,
  ...POSTS_XAVFSIZLIK,
  ...POSTS_IMKONIYATLAR,
  ...POSTS_STARS,
  ...POSTS_AMALIY,
].sort((a, b) => (a.date < b.date ? 1 : -1));

const BY_SLUG = new Map(BLOG_POSTS.map((p) => [p.slug, p]));

export function getBlogPost(slug: string): BlogPost | undefined {
  return BY_SLUG.get(slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getPostsByCategory(id: CategoryId): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === id);
}

export function getFeaturedPosts(limit = 6): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.featured).slice(0, limit);
}

/**
 * Aloqador maqolalar. `related` da ko'rsatilganlar birinchi, yetmasa
 * bir xil kategoriyadagilar bilan to'ldiriladi.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const out: BlogPost[] = [];
  const seen = new Set([post.slug]);

  for (const slug of post.related) {
    const found = BY_SLUG.get(slug);
    if (found && !seen.has(found.slug)) {
      out.push(found);
      seen.add(found.slug);
    }
  }

  if (out.length < limit) {
    for (const p of BLOG_POSTS) {
      if (out.length >= limit) break;
      if (p.category === post.category && !seen.has(p.slug)) {
        out.push(p);
        seen.add(p.slug);
      }
    }
  }

  return out.slice(0, limit);
}

/** Maqolaning o'qish vaqti (uz matni asosida, barcha tillar uchun yaqin) */
export function getReadMin(post: BlogPost): number {
  return readingMinutes(post.content.uz);
}

/** Sitemap uchun oxirgi o'zgarish sanasi */
export function getLastModified(post: BlogPost): Date {
  return new Date(post.updated ?? post.date);
}

const LOCALES: Record<Lang, string> = {
  uz: "uz-UZ",
  ru: "ru-RU",
  en: "en-US",
};

export function formatDate(dateStr: string, lang: Lang): string {
  return new Date(dateStr).toLocaleDateString(LOCALES[lang] ?? "uz-UZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Ichki qidiruv — sarlavha, izoh va kalit so'zlar bo'yicha */
export function searchPosts(query: string, lang: Lang): BlogPost[] {
  const q = query.trim().toLowerCase();
  if (!q) return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => {
    const haystack = [
      tx(p.title, lang),
      tx(p.excerpt, lang),
      p.title.uz,
      p.title.ru,
      ...p.keywords,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
