import { SITE, PREMIUM_PLANS } from "@/lib/site";
import { getBlogPost, summarizePost } from "@/lib/blog";
import { HOME_FAQ } from "@/lib/home-content";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";

export default function HomePage() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${SITE.domain}/#product`,
        name: "Telegram Premium obunasi",
        description:
          "O‘zbekistonda Telegram Premium: 3, 6 yoki 12 oylik sovg‘a obunasi, username orqali xarid.",
        image: `${SITE.domain}/opengraph-image`,
        brand: { "@type": "Brand", name: "Telegram" },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: Math.min(...PREMIUM_PLANS.map((p) => p.price)),
          highPrice: Math.max(...PREMIUM_PLANS.map((p) => p.price)),
          priceCurrency: "UZS",
          offerCount: PREMIUM_PLANS.length,
          offers: PREMIUM_PLANS.map((p) => ({
            "@type": "Offer",
            name: `Telegram Premium ${p.months} oy`,
            price: p.price,
            priceCurrency: "UZS",
            url: `${SITE.domain}/#narxlar`,
            seller: { "@id": `${SITE.domain}/#organization` },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.domain}/#faq`,
        inLanguage: "uz",
        mainEntity: HOME_FAQ.uz.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
  const featured = [
    "telegram-premium-ozbekistonda-tolov-usullari",
    "telegram-2026-avgust-yangiliklari",
    "telegram-premium-rich-text-editor-2026",
  ].map((slug) => summarizePost(getBlogPost(slug)!));
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
        <Landing posts={featured} />
      </main>
      <Footer />
    </>
  );
}
