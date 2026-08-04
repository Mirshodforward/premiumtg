import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import ArticleView from "@/components/blog/ArticleView";
import {
  getAllSlugs,
  getBlogPost,
  getCategory,
  getRelatedPosts,
  type BlogPost,
} from "@/lib/blog";
import { stripMarkdown } from "@/lib/markdown";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Maqola topilmadi", robots: { index: false, follow: true } };
  }

  const url = `${SITE.domain}/blog/${post.slug}`;

  return {
    title: post.title.uz,
    description: post.excerpt.uz,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: SITE.name,
      title: post.title.uz,
      description: post.excerpt.uz,
      locale: "uz_UZ",
      alternateLocale: ["ru_RU"],
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      section: getCategory(post.category).label.uz,
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.uz,
      description: post.excerpt.uz,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    },
  };
}

function ArticleStructuredData({ post }: { post: BlogPost }) {
  const url = `${SITE.domain}/blog/${post.slug}`;
  const category = getCategory(post.category);
  const related = getRelatedPosts(post, 3);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: post.title.uz,
        alternativeHeadline: post.title.ru,
        description: post.excerpt.uz,
        articleSection: category.label.uz,
        keywords: post.keywords.join(", "),
        inLanguage: "uz",
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@id": `${SITE.domain}/#organization` },
        publisher: { "@id": `${SITE.domain}/#organization` },
        isPartOf: { "@id": `${SITE.domain}/blog#blog` },
        about: { "@type": "Thing", name: "Telegram Premium" },
      },
      {
        // AEO: savol → javob. AI qidiruv tizimlari aynan shu bloklarni sitata qiladi.
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: "uz",
        mainEntity: [
          {
            "@type": "Question",
            name: post.title.uz,
            acceptedAnswer: { "@type": "Answer", text: post.excerpt.uz },
          },
          {
            "@type": "Question",
            name: post.title.ru,
            acceptedAnswer: { "@type": "Answer", text: post.excerpt.ru },
          },
          ...related.map((r) => ({
            "@type": "Question",
            name: r.title.uz,
            acceptedAnswer: {
              "@type": "Answer",
              text: r.excerpt.uz,
              url: `${SITE.domain}/blog/${r.slug}`,
            },
          })),
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE.domain },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.domain}/blog` },
          { "@type": "ListItem", position: 3, name: post.title.uz, item: url },
        ],
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <ArticleStructuredData post={post} />
      <Header />
      <main>
        <ArticleView slug={slug} />

        {/*
          AEO: maqolaning ruscha varianti serverdan HTML sifatida beriladi.
          Til almashtirgich klient tomonda ishlagani uchun bu blok bo'lmasa,
          qidiruv botlari faqat o'zbekcha matnni ko'rardi.
        */}
        <section className="sr-only" aria-hidden="true" lang="ru">
          <h2>{post.title.ru}</h2>
          <p>{post.excerpt.ru}</p>
          <div>{stripMarkdown(post.content.ru)}</div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
