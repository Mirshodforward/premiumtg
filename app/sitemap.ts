import type { MetadataRoute } from "next";
import { SITE, SITE_UPDATED } from "@/lib/site";
import { BLOG_POSTS, getLastModified } from "@/lib/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastPost = new Date(
    Math.max(...BLOG_POSTS.map((p) => getLastModified(p).getTime())),
  );
  return [
    {
      url: SITE.domain,
      lastModified: new Date(SITE_UPDATED),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.domain}/blog`,
      lastModified: lastPost,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.domain}/about`,
      lastModified: new Date(SITE_UPDATED),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...BLOG_POSTS.map((p) => ({
      url: `${SITE.domain}/blog/${p.slug}`,
      lastModified: getLastModified(p),
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
  ];
}
