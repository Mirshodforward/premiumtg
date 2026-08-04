import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import BlogIndex from "@/components/blog/BlogIndex";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blog";
import { SITE } from "@/lib/site";

const TITLE = `Telegram Premium blogi — ${BLOG_POSTS.length} ta savolga aniq javob`;
const DESCRIPTION =
  "Telegram Premium haqida O'zbekistondagi eng to'liq savol-javob to'plami: 2026-yil narxlari, Click/Payme/Uzcard orqali to'lov, xavfsizlik, barcha imkoniyatlar, Stars va sovg'alar. Har bir maqola — bitta aniq savolga batafsil javob.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "telegram premium blog",
    "telegram premium savol javob",
    "telegram premium haqida",
    "telegram premium narxi 2026",
    "telegram premium qanday olinadi",
    "telegram premium click payme",
    "telegram premium xavfsizmi",
    "telegram stars nima",
    "телеграм премиум вопросы ответы",
    "telegram premium узбекистан блог",
  ],
  alternates: { canonical: `${SITE.domain}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE.domain}/blog`,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: "uz_UZ",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

function BlogStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${SITE.domain}/blog#blog`,
        url: `${SITE.domain}/blog`,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: ["uz", "ru"],
        publisher: { "@id": `${SITE.domain}/#organization` },
        about: CATEGORIES.map((c) => ({ "@type": "Thing", name: c.label.uz })),
      },
      {
        "@type": "ItemList",
        "@id": `${SITE.domain}/blog#list`,
        name: TITLE,
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
      {
        // AEO: har bir maqola — savol va unga to'g'ridan-to'g'ri javob
        "@type": "FAQPage",
        "@id": `${SITE.domain}/blog#faq`,
        mainEntity: BLOG_POSTS.map((p) => ({
          "@type": "Question",
          name: p.title.uz,
          url: `${SITE.domain}/blog/${p.slug}`,
          acceptedAnswer: { "@type": "Answer", text: p.excerpt.uz },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function BlogPage() {
  return (
    <>
      <BlogStructuredData />
      <Header />
      <main>
        <BlogIndex />

        {/* AEO: qidiruv va AI botlari uchun to'liq ro'yxat (ekranda yashirin) */}
        <section className="sr-only" aria-hidden="true">
          <h2>Telegram Premium bo&apos;yicha barcha savol-javoblar</h2>
          <dl>
            {BLOG_POSTS.map((p) => (
              <div key={p.slug}>
                <dt>{p.title.uz}</dt>
                <dd>{p.excerpt.uz}</dd>
                <dt>{p.title.ru}</dt>
                <dd>{p.excerpt.ru}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
