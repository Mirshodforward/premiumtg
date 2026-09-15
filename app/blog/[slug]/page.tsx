import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleView from "@/components/blog/ArticleView";
import {
  getAllSlugs,
  getBlogPost,
  getRelatedPosts,
  getCategory,
  summarizePost,
} from "@/lib/blog";
import { SITE } from "@/lib/site";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Maqola topilmadi", robots: { index: false } };
  const url = `${SITE.domain}/blog/${post.slug}`;
  return {
    title: post.title.uz,
    description: post.excerpt.uz,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title.uz,
      description: post.excerpt.uz,
      siteName: SITE.name,
      locale: "uz_UZ",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [`${SITE.domain}/about`],
      section: getCategory(post.category).label.uz,
      images: [
        {
          url: `${url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title.uz,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.uz,
      description: post.excerpt.uz,
      images: [`${url}/opengraph-image`],
    },
  };
}
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const url = `${SITE.domain}/blog/${post.slug}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: post.title.uz,
        description: post.excerpt.uz,
        datePublished: `${post.date}T09:00:00+05:00`,
        dateModified: `${post.updated ?? post.date}T09:00:00+05:00`,
        inLanguage: "uz",
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        image: [`${url}/opengraph-image`],
        author: {
          "@type": "Organization",
          name: "Premiumtg tahririyati",
          url: `${SITE.domain}/about`,
        },
        publisher: { "@id": `${SITE.domain}/#organization` },
        articleSection: getCategory(post.category).label.uz,
        isPartOf: { "@id": `${SITE.domain}/blog#blog` },
        ...(post.sources?.length
          ? { citation: post.sources.map((s) => s.url) }
          : {}),
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
          { "@type": "ListItem", position: 3, name: post.title.uz, item: url },
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
        <ArticleView
          post={post}
          related={getRelatedPosts(post).map(summarizePost)}
        />
      </main>
      <Footer />
    </>
  );
}
