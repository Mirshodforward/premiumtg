"use client";

import { useLang } from "./LanguageContext";

const ITEMS: Record<string, string[]> = {
  uz: [
    "10 soniyada avtomatik",
    "Faqat username",
    "Click / Payme / Paynet",
    "Uzcard va Humo",
    "Kod so'ralmaydi",
    "24/7 qo'llab-quvvatlash",
    "Referal bonus",
  ],
  ru: [
    "Автоматически за 10 секунд",
    "Только username",
    "Click / Payme / Paynet",
    "Uzcard и Humo",
    "Код не запрашиваем",
    "Поддержка 24/7",
    "Реферальный бонус",
  ],
  en: [
    "Automatic in 10 seconds",
    "Username only",
    "Click / Payme / Paynet",
    "Uzcard and Humo",
    "No code required",
    "24/7 support",
    "Referral bonus",
  ],
};

export default function Marquee() {
  const { lang } = useLang();
  const items = ITEMS[lang] ?? ITEMS.uz;
  // Ro'yxat ikki marta takrorlanadi, -50% ga suriladi — uzluksiz halqa
  const strip = (
    <span className="flex items-center gap-8">
      {items.map((t) => (
        <span key={t} className="flex items-center gap-8 whitespace-nowrap">
          {t}
          <span className="text-primary-foreground/60">✸</span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className="overflow-hidden border-b-2 border-border-strong bg-primary py-3 text-primary-foreground"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center gap-8 font-clash text-sm font-bold uppercase tracking-widest">
        {strip}
        {strip}
      </div>
    </div>
  );
}
