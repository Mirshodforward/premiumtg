import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";
import { LanguageProvider } from "@/components/LanguageContext";
import { ThemeProvider } from "@/components/ThemeContext";
import { themeInitScript } from "@/lib/theme";
import Reveal from "@/components/Reveal";
import { Analytics } from "@vercel/analytics/next";

const TITLE_DEFAULT =
  "Telegram Premium sotib olish — 10 soniyada avtomatik | Premiumtg.uz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: TITLE_DEFAULT,
    template: "%s | Premiumtg.uz",
  },
  description: SITE.description,
  keywords: [
    // Tranzaksion
    "telegram premium sotib olish",
    "telegram premium olish",
    "telegram premium ulash",
    "tg premium sotib olish",
    "telegram premium uzbekistonda sotib olish",
    // Narx
    "telegram premium narxi",
    "telegram premium narxi 2026",
    "telegram premium qancha turadi",
    "telegram premium arzon",
    "eng arzon telegram premium",
    "telegram premium yillik narxi",
    // To'lov usuli
    "telegram premium click orqali",
    "telegram premium payme orqali",
    "telegram premium uzcard",
    "telegram premium humo",
    "telegram premium paynet",
    // Savol shakli
    "telegram premium nima",
    "telegram premium qanday olinadi",
    "telegram premium qanday ulanadi",
    // Ishonch
    "telegram premium ishonchli sayt",
    "akkauntga kirmasdan premium olish",
    "username orqali premium olish",
    // Brend
    "premiumtg",
    "premiumtg uz",
    "premiumtg.uz",
    // Ruscha
    "телеграм премиум купить узбекистан",
    "телеграм премиум цена узбекистан",
    "купить telegram premium дешево",
    "как купить телеграм премиум в узбекистане",
    // Aloqador
    "telegram stars sotib olish",
    "telegram premium sovg'a qilish",
    "buy telegram premium uzbekistan",
  ],
  authors: [{ name: SITE.name, url: SITE.domain }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: SITE.name,
  category: "shopping",
  alternates: {
    canonical: SITE.domain,
    types: {
      "application/rss+xml": `${SITE.domain}/blog/rss.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
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
    apple: "/premium.png",
  },
  other: {
    // AEO: AI qidiruv tizimlari uchun mashinaga o'qiladigan kontent indeksi
    "ai-content-index": `${SITE.domain}/llms.txt`,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

/**
 * Sayt darajasidagi strukturali ma'lumotlar (JSON-LD) — har bir sahifada.
 * Faqat Organization va WebSite: bular butun saytga tegishli.
 * Product va FAQPage bosh sahifaning o'zida beriladi (app/page.tsx),
 * chunki ular aynan o'sha sahifadagi kontentni tavsiflaydi.
 */
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.domain}/#organization`,
        name: SITE.name,
        alternateName: ["PremiumTG", "Premiumtg.uz", "Премиум ТГ"],
        url: SITE.domain,
        description: SITE.description,
        areaServed: { "@type": "Country", name: "Uzbekistan" },
        knowsLanguage: ["uz", "ru", "en"],
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
        inLanguage: ["uz", "ru", "en"],
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
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <StructuredData />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Reveal />
        <Analytics />
      </body>
    </html>
  );
}
