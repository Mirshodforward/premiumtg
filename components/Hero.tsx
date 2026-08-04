"use client";

import { SITE, PREMIUM_PLANS, formatSom } from "@/lib/site";
import { ArrowUpRightIcon, TelegramIcon } from "./icons";
import { useLang } from "./LanguageContext";

const STEPS_LABEL: Record<string, string[]> = {
  uz: ["Username", "To'lov", "10 soniya"],
  ru: ["Username", "Оплата", "10 секунд"],
  en: ["Username", "Payment", "10 seconds"],
};

export default function Hero() {
  const { lang, tr } = useLang();
  const cheapest = PREMIUM_PLANS.reduce((a, b) =>
    (a.perMonth ?? a.price) < (b.perMonth ?? b.price) ? a : b
  );
  const steps = STEPS_LABEL[lang] ?? STEPS_LABEL.uz;

  const tiles = [
    { value: "10s", label: lang === "ru" ? "Доставка" : lang === "en" ? "Delivery" : "Yetkazish" },
    { value: "15 000+", label: lang === "ru" ? "Подписок" : lang === "en" ? "Subscriptions" : "Obuna" },
    { value: "4.9", label: lang === "ru" ? "Оценка" : lang === "en" ? "Rating" : "Baho" },
    {
      value: formatSom(cheapest.perMonth ?? 0).replace(" so'm", ""),
      label: lang === "ru" ? "сум / мес от" : lang === "en" ? "UZS / mo from" : "so'm / oy dan",
    },
  ];

  return (
    <section className="border-b-2 border-border-strong">
      <div className="container-wide animate-page-in pb-14 pt-12 sm:pt-16">
        {/* 01 · 02 · 03 — qadamlar lentasi */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {steps.map((s, i) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 font-clash text-xs font-bold uppercase tracking-[0.18em]"
            >
              <span className="tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s}
            </span>
          ))}
        </div>

        <h1 className="h1-display mt-6 max-w-5xl">
          <span className="block">{tr.hero.title}</span>
          <span className="block text-primary">{tr.hero.highlight}</span>
          <span className="block">{tr.hero.titleEnd}</span>
          <span className="hero-sticker mt-5 inline-block -rotate-2 animate-badge-pop border-2 border-foreground bg-primary px-3 py-1.5 text-[0.44em] font-semibold normal-case leading-snug tracking-normal text-primary-foreground shadow-hard sm:text-[0.3em]">
            {tr.hero.badge}
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {tr.hero.desc}
        </p>

        {/* Ikki tugma yonma-yon, gap-0 — chegaralari qo'shilib bitta blok bo'ladi */}
        <div className="mt-8 flex flex-col sm:inline-flex sm:flex-row">
          <a
            href={SITE.botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {tr.hero.btnBot}
            <ArrowUpRightIcon className="h-4 w-4 animate-arrow-nudge" />
          </a>
          <a
            href="#narxlar"
            className="btn-secondary border-t-0 sm:border-l-0 sm:border-t-2"
          >
            {tr.hero.btnPricing}
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          {tr.hero.trust.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 text-sm font-medium"
            >
              <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Statistika plitkalari — umumiy chegarali to'r, gap yo'q */}
      <div className="grid grid-cols-2 border-t-2 border-border-strong lg:grid-cols-4">
        {tiles.map((t, i) => (
          <div
            key={t.label}
            className={`p-6 sm:p-7 ${
              i % 2 === 1 ? "border-l-2 border-border-strong" : ""
            } ${i < 2 ? "border-b-2 border-border-strong lg:border-b-0" : ""} ${
              i === 2 ? "lg:border-l-2 lg:border-border-strong" : ""
            }`}
          >
            <p className="font-clash text-4xl font-black tabular-nums tracking-tight sm:text-5xl">
              {t.value}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {t.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
