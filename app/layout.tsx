import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE } from "@/lib/site";
import { LanguageProvider } from "@/components/LanguageContext";
import { ThemeProvider } from "@/components/ThemeContext";
import { themeInitScript } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Telegram Premium sotib olish — narxlar va to‘lov | Premiumtg.uz",
    template: "%s | Premiumtg.uz",
  },
  description: SITE.description,
  keywords: [
    "telegram premium sotib olish",
    "telegram premium narxi",
    "tg premium uzbekistonda",
    "telegram premium click payme",
    "telegram premium paynet",
    "telegram premium uzum bank",
  ],
  authors: [{ name: "Premiumtg tahririyati", url: `${SITE.domain}/about` }],
  publisher: SITE.name,
  applicationName: SITE.name,
  alternates: {
    canonical: SITE.domain,
    types: { "application/rss+xml": `${SITE.domain}/blog/rss.xml` },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE.domain,
    siteName: SITE.name,
    title: "Telegram Premium — ko‘proq imkoniyat",
    description: SITE.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Premiumtg — Telegram Premium O‘zbekistonda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegram Premium sotib olish | Premiumtg",
    description: SITE.description,
    images: ["/opengraph-image"],
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
  // Ikonkalar fayl konventsiyasidan: app/favicon.ico, app/icon.png, app/apple-icon.png
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};
export const viewport: Viewport = {
  themeColor: "#fcfcff",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.domain}/#organization`,
        name: SITE.name,
        url: SITE.domain,
        description: SITE.description,
        logo: `${SITE.domain}/icons/icon-512.png`,
        areaServed: { "@type": "Country", name: "Uzbekistan" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: SITE.supportUrl,
          availableLanguage: ["uz", "ru"],
        },
        sameAs: [SITE.botUrl, SITE.channelUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.domain}/#website`,
        name: SITE.name,
        url: SITE.domain,
        inLanguage: "uz",
        publisher: { "@id": `${SITE.domain}/#organization` },
      },
    ],
  };
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Asosiy mazmunga o‘tish
        </a>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
