// Markaziy konfiguratsiya — narxlar, aloqa va sayt ma'lumotlari shu yerda boshqariladi.

export const SITE = {
  name: "Premiumtg",
  domain: "https://premiumtg.uz",
  tagline: "Telegram Premium — 10 soniyada avtomatik",
  description:
    "Premiumtg orqali Telegram Premium obunasini eng arzon narxda sotib oling. To'lovdan so'ng 10 soniyada avtomatik faollashadi. Click, Payme, Paynet, Uzcard, Humo va istalgan bank kartasi qabul qilinadi.",
  supportUsername: "StarsPaymeeSupport",
  supportUrl: "https://t.me/StarsPaymeeSupport",
  botUrl: "https://t.me/StarsPaymeeSupport",
  ogImage: "/og.png",
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
  { id: "login-12", duration: "1 yil", months: 12, price: 300000, badge: "Tejamkor" },
];

export function formatSom(value: number): string {
  return value.toLocaleString("ru-RU").replace(/,/g, " ") + " so'm";
}
