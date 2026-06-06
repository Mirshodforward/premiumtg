import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE, PREMIUM_PLANS } from "@/lib/site";

const TITLE_DEFAULT = "Premiumtg — Telegram Premium arzon narxda, 10 soniyada avtomatik";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: TITLE_DEFAULT,
    template: "%s | Premiumtg",
  },
  description: SITE.description,
  keywords: [
    "telegram premium",
    "telegram premium sotib olish",
    "telegram premium narxi",
    "telegram premium uzbekiston",
    "telegram premium arzon",
    "premium telegram olish",
    "telegram premium click payme",
    "telegram premium 10 soniya",
    "premiumtg",
    "telegram premium uz",
    "telegram premium humo uzcard",
    "telegram premium bot",
    "premiumtg bot",
    "telegram premium avtomatik",
    "telegram premium online",
    "telegram premium toshkent",
    "telegram premium o'zbekiston",
    "telegram stickers premium",
    "telegram premium reklama",
    "telegram premium 3 oy",
    "telegram premium 6 oy",
    "telegram premium 1 yil",
    "buy telegram premium uzbekistan",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: SITE.name,
  category: "shopping",
  alternates: {
    canonical: SITE.domain,
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE.domain,
    siteName: SITE.name,
    title: "Telegram Premium — 10 soniyada avtomatik, eng arzon narxda",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SITE.channelUsername}`,
    title: "Premiumtg — Telegram Premium 10 soniyada avtomatik",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  width: "device-width",
  initialScale: 1,
};

// AEO / ChatGPT / Google uchun strukturali ma'lumotlar (JSON-LD)
function StructuredData() {
  const cheapest = Math.min(...PREMIUM_PLANS.map((p) => p.price));
  const priciest = Math.max(...PREMIUM_PLANS.map((p) => p.price));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.domain}/#organization`,
        name: SITE.name,
        url: SITE.domain,
        description: SITE.description,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            url: SITE.supportUrl,
            availableLanguage: ["uz", "ru"],
          },
          {
            "@type": "ContactPoint",
            contactType: "sales",
            url: SITE.botUrl,
            availableLanguage: ["uz", "ru"],
          },
        ],
        sameAs: [SITE.supportUrl, SITE.channelUrl, SITE.botUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.domain}/#website`,
        url: SITE.domain,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE.domain}/#organization` },
        inLanguage: "uz",
      },
      {
        "@type": "Product",
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
        offers: PREMIUM_PLANS.map((p) => ({
          "@type": "Offer",
          name: `Telegram Premium ${p.duration}`,
          price: p.price,
          priceCurrency: "UZS",
          availability: "https://schema.org/InStock",
          url: SITE.botUrl,
          seller: { "@type": "Organization", name: SITE.name },
        })),
        lowPrice: cheapest,
        highPrice: priciest,
        priceCurrency: "UZS",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.domain}/#faq`,
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
              text: "3 oy — 172 000 so'm, 6 oy — 232 000 so'm, 12 oy — 422 000 so'm. Bu O'zbekistondagi eng arzon narxlardan biri.",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
