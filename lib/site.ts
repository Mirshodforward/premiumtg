// Markaziy konfiguratsiya — narxlar, aloqa va sayt ma'lumotlari shu yerda boshqariladi.

export const SITE = {
  name: "Premiumtg",
  domain: "https://premiumtg.uz",
  tagline: "Telegram Premium — ko‘proq imkoniyat",
  description:
    "O‘zbekistonda Telegram Premium sotib olish: 3, 6, 12 oylik narxlar, username orqali ulash va Click, Payme, Paynet, Uzum Bank to‘lov qo‘llanmalari.",
  supportUsername: "StarsPaymeeSupport",
  supportUrl: "https://t.me/StarsPaymeeSupport",
  botUsername: "premiumtg_uzbot",
  botUrl: "https://t.me/premiumtg_uzbot",
  channelUsername: "StarsPaymee",
  channelUrl: "https://t.me/StarsPaymee",
  ofertaUrl: "https://premiumtg.uz/oferta",
  ogImage: "/opengraph-image",
} as const;

export type Plan = {
  id: string;
  duration: string;
  months: number;
  price: number;
  perMonth?: number;
  badge?: string;
  popular?: boolean;
};

// Username yetarli — akkauntga kirish shart emas, 10 soniyada avtomatik faollashadi.
export const PREMIUM_PLANS: Plan[] = [
  {
    id: "premium-3",
    duration: "3 oy",
    months: 3,
    price: 172000,
    perMonth: Math.round(172000 / 3),
  },
  {
    id: "premium-6",
    duration: "6 oy",
    months: 6,
    price: 232000,
    perMonth: Math.round(232000 / 6),
    badge: "Eng ommabop",
    popular: true,
  },
  {
    id: "premium-12",
    duration: "12 oy",
    months: 12,
    price: 422000,
    perMonth: Math.round(422000 / 12),
    badge: "Eng tejamkor",
  },
];

// Akkauntga kirib berish xizmati — alohida xizmat.
export const LOGIN_PLANS: Plan[] = [
  { id: "login-1", duration: "1 oy", months: 1, price: 50000 },
  {
    id: "login-12",
    duration: "1 yil",
    months: 12,
    price: 300000,
    badge: "Tejamkor",
  },
];

export function formatSom(value: number): string {
  return value.toLocaleString("ru-RU").replace(/,/g, " ") + " so'm";
}

export const SITE_UPDATED = "2026-09-14";
