import type { Lang } from "@/lib/translations";

/**
 * Ko'p tilli matn. `en` ixtiyoriy — bo'lmasa `uz` fallback bo'ladi
 * (tx() yordamchisi orqali).
 */
export type LocaleText = {
  uz: string;
  ru: string;
  en?: string;
};

export function tx(text: LocaleText, lang: Lang): string {
  return text[lang] ?? text.uz;
}

export type CategoryId =
  | "asoslar"
  | "xarid"
  | "xavfsizlik"
  | "imkoniyatlar"
  | "stars"
  | "amaliy"
  | "yangiliklar";

export type BlogPost = {
  sources?: { title: string; url: string }[];
  reviewed?: string;
  eventDate?: string;
  /** URL segmenti — kalit so'zdan yasalgan, o'zgartirilmaydi */
  slug: string;
  /** Nashr sanasi (ISO) */
  date: string;
  /** Oxirgi yangilanish (ISO) — sitemap lastModified uchun */
  updated?: string;
  category: CategoryId;
  /** Meta keywords + ichki qidiruv uchun (uz + ru aralash) */
  keywords: string[];
  /** Sitemap priority: 0.5 – 0.9 */
  priority: number;
  /** Blog bosh sahifasida ajratib ko'rsatiladi */
  featured?: boolean;
  /** Sarlavha = qidiruv savoli (H1) */
  title: LocaleText;
  /**
   * Savolga to'g'ridan-to'g'ri javob, 1–3 jumla.
   * Uch joyda ishlatiladi: meta description, "Tezkor javob" bloki va
   * FAQPage/llms.txt uchun mashinaga o'qiladigan javob.
   */
  excerpt: LocaleText;
  /** Maqola matni (soddalashtirilgan markdown) */
  content: LocaleText;
  /** Aloqador maqolalar slug'lari (ichki havolalar uchun) */
  related: string[];
};

export const CATEGORIES: {
  id: CategoryId;
  label: LocaleText;
  description: LocaleText;
}[] = [
  {
    id: "yangiliklar",
    label: { uz: "Yangiliklar", ru: "Новости", en: "News" },
    description: {
      uz: "Telegram yangilanishlari — rasmiy manbalar bilan",
      ru: "Обновления Telegram с официальными источниками",
      en: "Telegram updates with official sources",
    },
  },
  {
    id: "asoslar",
    label: { uz: "Asoslar", ru: "Основы", en: "Basics" },
    description: {
      uz: "Telegram Premium nima, nima beradi va qancha turadi",
      ru: "Что такое Telegram Premium, что даёт и сколько стоит",
      en: "What Telegram Premium is, what it offers and what it costs",
    },
  },
  {
    id: "xarid",
    label: { uz: "Xarid", ru: "Покупка", en: "Buying" },
    description: {
      uz: "Sotib olish jarayoni, to'lov usullari va faollashtirish",
      ru: "Процесс покупки, способы оплаты и активация",
      en: "The purchase flow, payment methods and activation",
    },
  },
  {
    id: "xavfsizlik",
    label: { uz: "Xavfsizlik", ru: "Безопасность", en: "Safety" },
    description: {
      uz: "Firibgarlikdan himoya, ishonchlilik va akkaunt xavfsizligi",
      ru: "Защита от мошенничества, надёжность и безопасность аккаунта",
      en: "Fraud protection, trust and account security",
    },
  },
  {
    id: "imkoniyatlar",
    label: { uz: "Imkoniyatlar", ru: "Возможности", en: "Features" },
    description: {
      uz: "Premium funksiyalari batafsil: reklamasiz, 4 GB, transkripsiya va boshqalar",
      ru: "Возможности Premium подробно: без рекламы, 4 ГБ, транскрипция и другое",
      en: "Premium features in depth: ad-free, 4 GB, transcription and more",
    },
  },
  {
    id: "stars",
    label: {
      uz: "Stars va sovg'alar",
      ru: "Stars и подарки",
      en: "Stars & gifts",
    },
    description: {
      uz: "Telegram Stars, Gifts, NFT sovg'alar, Fragment va TON",
      ru: "Telegram Stars, Gifts, NFT-подарки, Fragment и TON",
      en: "Telegram Stars, Gifts, NFT gifts, Fragment and TON",
    },
  },
  {
    id: "amaliy",
    label: { uz: "Amaliy savollar", ru: "Практика", en: "Practical" },
    description: {
      uz: "Uzaytirish, qurilmalar, kimlarga foydali va yakuniy taqqoslash",
      ru: "Продление, устройства, кому полезно и итоговое сравнение",
      en: "Renewal, devices, who benefits and the final comparison",
    },
  },
];

export function getCategory(id: CategoryId) {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0];
}

/** Matn hajmidan o'qish vaqtini hisoblaydi (≈200 so'z/daqiqa) */
export function readingMinutes(markdown: string): number {
  const words = markdown
    .replace(/[#*>|`\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}

export type BlogSummary = Omit<BlogPost, "content" | "related" | "sources"> & {
  readMin: number;
};
