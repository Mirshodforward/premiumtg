import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogIndex from "@/components/blog/BlogIndex";
import { BLOG_POSTS, summarizePost } from "@/lib/blog";
import { SITE } from "@/lib/site";
const title = "Telegram Premium blogi — yangiliklar va to‘lov qo‘llanmalari";
const description =
  "Telegram yangiliklari, Premium narxlari, Click, Payme, Paynet va Uzum Bank orqali to‘lov bo‘yicha o‘zbekcha qo‘llanmalar va savol-javoblar.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE.domain}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE.domain}/blog`,
    title,
    description,
    locale: "uz_UZ",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};
export default function BlogPage() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${SITE.domain}/blog#blog`,
        name: title,
        url: `${SITE.domain}/blog`,
        description,
        inLanguage: "uz",
        publisher: { "@id": `${SITE.domain}/#organization` },
      },
      {
        "@type": "ItemList",
        numberOfItems: BLOG_POSTS.length,
        itemListElement: BLOG_POSTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE.domain}/blog/${p.slug}`,
          name: p.title.uz,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Bosh sahifa",
            item: SITE.domain,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE.domain}/blog`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="main-content">
        <BlogIndex posts={BLOG_POSTS.map(summarizePost)} />
      </main>
      <Footer />
    </>
  );
}
