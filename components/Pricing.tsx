"use client";

import { useState } from "react";
import {
  SITE,
  PREMIUM_PLANS,
  LOGIN_PLANS,
  formatSom,
  type Plan,
} from "@/lib/site";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { useLang } from "./LanguageContext";

const COPY: Record<
  string,
  {
    eyebrow: string;
    title: string;
    desc: string;
    perMonth: string;
    som: string;
    buy: string;
    perks: string[];
    loginTitle: string;
    loginDesc: string;
    loginBadge: string;
    order: string;
    support: string;
  }
> = {
  uz: {
    eyebrow: "Narxlar",
    title: "Mos paketni tanlang",
    desc: "Hammasi 10 soniyada avtomatik faollashadi. Akkauntga kirish shart emas — faqat username yetarli.",
    perMonth: "so'm / oy",
    som: "so'm",
    buy: "Sotib olish",
    perks: [
      "10 soniyada avtomatik faollashadi",
      "Faqat username — kod so'ralmaydi",
      "Reklamasiz, 4 GB fayl, transkripsiya",
      "Click, Payme, Uzcard, Humo, Paynet",
    ],
    loginTitle: "Akkauntga kirib berish",
    loginDesc:
      "Aynan 1 oylik obuna kerak bo'lsa yoki jarayonni o'zingiz qilishni istamasangiz — operator sizning roziligingiz bilan qo'lda ulab beradi.",
    loginBadge: "Qo'lda ulash",
    order: "Buyurtma",
    support: "Narx bo'yicha savol bormi?",
  },
  ru: {
    eyebrow: "Цены",
    title: "Выберите пакет",
    desc: "Всё активируется автоматически за 10 секунд. Вход в аккаунт не нужен — достаточно username.",
    perMonth: "сум / мес",
    som: "сум",
    buy: "Купить",
    perks: [
      "Автоматическая активация за 10 секунд",
      "Только username — код не запрашиваем",
      "Без рекламы, файлы 4 ГБ, транскрипция",
      "Click, Payme, Uzcard, Humo, Paynet",
    ],
    loginTitle: "Подключение через вход",
    loginDesc:
      "Если нужна именно месячная подписка или вы не хотите заниматься процессом сами — оператор подключит вручную с вашего согласия.",
    loginBadge: "Вручную",
    order: "Заказать",
    support: "Вопрос по цене?",
  },
  en: {
    eyebrow: "Pricing",
    title: "Pick your plan",
    desc: "Everything activates automatically in 10 seconds. No account access needed — username is enough.",
    perMonth: "UZS / mo",
    som: "UZS",
    buy: "Buy",
    perks: [
      "Automatic activation in 10 seconds",
      "Username only — no code requested",
      "Ad-free, 4 GB files, transcription",
      "Click, Payme, Uzcard, Humo, Paynet",
    ],
    loginTitle: "Manual activation service",
    loginDesc:
      "If you specifically need a 1-month subscription or would rather not handle the process yourself — an operator connects it manually with your consent.",
    loginBadge: "Manual",
    order: "Order",
    support: "Question about pricing?",
  },
};

function PlanCard({
  plan,
  copy,
  index,
}: {
  plan: Plan;
  copy: (typeof COPY)["uz"];
  index: number;
}) {
  return (
    <article
      className={`relative flex h-full flex-col bg-card p-8 ${
        index > 0 ? "border-t-2 border-foreground lg:border-l-2 lg:border-t-0" : ""
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-8 border-2 border-foreground bg-primary px-1.5 py-0.5 font-clash text-[0.6rem] font-black uppercase tracking-wide text-primary-foreground">
          {plan.badge}
        </span>
      )}

      <h3 className="font-clash text-2xl font-black uppercase tracking-tight">
        Premium {plan.duration}
      </h3>

      <div className="mt-6 flex items-end gap-1.5">
        <span className="font-clash text-4xl font-black tabular-nums tracking-tight">
          {formatSom(plan.price).replace(" so'm", "")}
        </span>
        <span className="pb-1 text-sm text-muted-foreground">{copy.som}</span>
      </div>
      {plan.perMonth && (
        <p className="mt-1 text-sm tabular-nums text-muted-foreground">
          ≈ {formatSom(plan.perMonth).replace(" so'm", "")} {copy.perMonth}
        </p>
      )}

      <div className="divider-thick" />

      <ul className="flex-1 space-y-3">
        {copy.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5 text-sm font-medium">
            <CheckIcon
              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              strokeWidth={3}
            />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <a
        href={SITE.botUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 ${plan.popular ? "btn-primary" : "btn-secondary"} w-full`}
      >
        {copy.buy}
        <ArrowUpRightIcon className="h-4 w-4" />
      </a>
    </article>
  );
}

export default function Pricing() {
  const { lang } = useLang();
  const copy = COPY[lang] ?? COPY.uz;
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section
      id="narxlar"
      className="scroll-mt-20 border-b-2 border-foreground bg-background-subtle py-20 sm:py-28"
    >
      <div className="container-x">
        <span className="eyebrow reveal-item">
          <span className="eyebrow-dot" />
          {copy.eyebrow}
        </span>
        <h2 className="h2-section reveal-item mt-6">{copy.title}</h2>
        <p className="reveal-item mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {copy.desc}
        </p>

        {/* Tashqi ramka bitta — ichida uch ustun */}
        <div className="reveal-item mt-10 grid border-2 border-foreground lg:grid-cols-3">
          {PREMIUM_PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} copy={copy} index={i} />
          ))}
        </div>

        {/* Akkauntga kirib berish — akkordeon */}
        <div className="reveal-item mt-10 border-2 border-foreground bg-card">
          <button
            type="button"
            onClick={() => setShowLogin((v) => !v)}
            aria-expanded={showLogin}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted"
          >
            <span className="font-clash text-base font-bold uppercase tracking-tight sm:text-lg">
              {copy.loginTitle}
            </span>
            <span className="inline-flex items-center gap-3">
              <span className="hidden border-2 border-foreground px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] sm:inline-block">
                {copy.loginBadge}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                  showLogin ? "rotate-45" : ""
                }`}
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ease-out ${
              showLogin ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t-2 border-border-soft px-6 py-6">
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {copy.loginDesc}
                </p>
                <div className="mt-6 grid border-l-2 border-t-2 border-foreground sm:grid-cols-2">
                  {LOGIN_PLANS.map((plan) => (
                    <div
                      key={plan.id}
                      className="flex items-center justify-between gap-4 border-b-2 border-r-2 border-foreground p-5"
                    >
                      <div>
                        <p className="font-clash text-base font-bold uppercase tracking-tight">
                          {plan.duration}
                        </p>
                        <p className="mt-1 font-clash text-2xl font-black tabular-nums">
                          {formatSom(plan.price).replace(" so'm", "")}
                          <span className="ml-1 text-xs font-medium text-muted-foreground">
                            {copy.som}
                          </span>
                        </p>
                      </div>
                      <a
                        href={SITE.botUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sm"
                      >
                        {copy.order}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          {copy.support}{" "}
          <a
            href={SITE.supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary underline underline-offset-4"
          >
            @{SITE.supportUsername}
          </a>
        </p>
      </div>
    </section>
  );
}
