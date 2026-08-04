import { SITE, PREMIUM_PLANS } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Payments from "@/components/Payments";
import Referral from "@/components/Referral";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

/**
 * Bosh sahifaga xos strukturali ma'lumotlar: Product (narxlar bilan) va
 * FAQPage. Ular aynan shu sahifadagi kontentni tavsiflaydi, shuning uchun
 * root layout'da emas, shu yerda beriladi — aks holda har bir blog
 * maqolasida ham noto'g'ri FAQPage paydo bo'lardi.
 */
function HomeStructuredData() {
  const cheapest = Math.min(...PREMIUM_PLANS.map((p) => p.price));
  const priciest = Math.max(...PREMIUM_PLANS.map((p) => p.price));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${SITE.domain}/#product`,
        name: "Telegram Premium obuna",
        description:
          "Telegram Premium obunasi — to'lovdan so'ng 10 soniyada avtomatik faollashadi. Akkauntga kirish shart emas, faqat username yetarli.",
        brand: { "@type": "Brand", name: "Telegram" },
        category: "Digital subscription",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "1280",
        },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: cheapest,
          highPrice: priciest,
          priceCurrency: "UZS",
          offerCount: PREMIUM_PLANS.length,
          availability: "https://schema.org/InStock",
          offers: PREMIUM_PLANS.map((p) => ({
            "@type": "Offer",
            name: `Telegram Premium ${p.duration}`,
            price: p.price,
            priceCurrency: "UZS",
            availability: "https://schema.org/InStock",
            url: SITE.botUrl,
            seller: { "@id": `${SITE.domain}/#organization` },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.domain}/#faq`,
        inLanguage: "uz",
        mainEntity: [
          {
            "@type": "Question",
            name: "Telegram Premium qancha vaqtda faollashadi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To'lov amalga oshirilgandan so'ng Telegram Premium atigi 10 soniyada avtomatik faollashadi. Hech qanday kutish yoki operator bilan yozishish shart emas.",
            },
          },
          {
            "@type": "Question",
            name: "Akkauntga kirish (login/parol) berish kerakmi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yo'q. Premium paketlar uchun faqat Telegram username yetarli. Akkauntingizga kirish, parol yoki kodni berish umuman shart emas — bu eng xavfsiz usul.",
            },
          },
          {
            "@type": "Question",
            name: "Qaysi to'lov usullari qabul qilinadi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Click, Payme, Paynet, Uzcard, Humo va istalgan O'zbekiston bank kartasi orqali to'lov qilish mumkin.",
            },
          },
          {
            "@type": "Question",
            name: "Telegram Premium narxlari qancha?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "3 oy — 172 000 so'm, 6 oy — 232 000 so'm, 12 oy — 422 000 so'm. Yillik paketda oylik narx ≈35 167 so'mga tushadi.",
            },
          },
          {
            "@type": "Question",
            name: "Do'stlarni taklif qilib bonus olsa bo'ladimi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ha. Do'stlaringizni taklif qiling — har bir sotib olgan do'stingiz uchun bonus va chegirmalar olasiz.",
            },
          },
          {
            "@type": "Question",
            name: "Obuna haqiqiy va rasmiymi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ha. Obuna Telegram'ning rasmiy sovg'a mexanizmi orqali yuboriladi, ya'ni akkauntga to'liq rasmiy Premium status beriladi: reklamasiz kanallar, 4 GB fayl, transkripsiya va barcha imkoniyatlar ishlaydi.",
            },
          },
        ],
      },
      {
        // Xarid jarayoni — Google va AI tizimlari uchun bosqichli ko'rsatma
        "@type": "HowTo",
        "@id": `${SITE.domain}/#howto`,
        name: "Telegram Premiumni O'zbekistonda qanday sotib olish kerak",
        inLanguage: "uz",
        totalTime: "PT1M",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "UZS",
          value: cheapest,
        },
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Username",
            text: "Telegram sozlamalaridan username'ingizni oling (masalan @mirshod). Username yo'q bo'lsa, o'sha yerda bir soniyada yaratasiz.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Paketni tanlash",
            text: "3, 6 yoki 12 oylik paketni tanlang. Muddat uzun bo'lgani sari oylik narx arzonlashadi.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "To'lov",
            text: "Click, Payme, Paynet, Uzcard yoki Humo orqali to'lang. Karta ma'lumotlari to'lov tizimining himoyalangan kanalida qoladi.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Faollashuv",
            text: "Tizim to'lovni ko'rgan zahoti Premiumni yuboradi — o'rtacha 10 soniyada ismingiz yonida yulduzcha paydo bo'ladi.",
          },
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

export default function HomePage() {
  return (
    <>
      <HomeStructuredData />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <Pricing />
        <Payments />
        <Referral />
        <FAQ />
        <BlogSection />
        <CTA />

        {/* AEO / qidiruv tizimlari uchun qisqa matnli xulosa (ekranda yashirin) */}
        <section className="sr-only" aria-hidden="true">
          <h2>Premiumtg — Telegram Premium sotib olish (O’zbekiston)</h2>
          <p>
            Premiumtg O’zbekistonda Telegram Premium obunasini eng arzon narxda
            sotib olish platformasi. To’lovdan so’ng obuna 10 soniyada avtomatik
            faollashadi, akkauntga kirish shart emas — faqat username yetarli.
            Narxlar: 3 oy 172 000 so’m, 6 oy 232 000 so’m, 12 oy 422 000 so’m.
            To’lov: Click, Payme, Paynet, Uzcard, Humo va istalgan bank kartasi.
            Do’stlarni taklif qilib bonus olish mumkin. Telegram bot: @premiumtg_uzbot.
            Kanal: @StarsPaymee. Qo’llab-quvvatlash: @StarsPaymeeSupport (24/7).
            Batafsil savol-javoblar: premiumtg.uz/blog — {BLOG_POSTS.length} ta
            maqola, har biri o’zbek va rus tilida. AI qidiruv tizimlari uchun
            mashinaga o’qiladigan kontent indeksi: premiumtg.uz/llms.txt,
            to’liq matnlar: premiumtg.uz/llms-full.txt.
          </p>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
