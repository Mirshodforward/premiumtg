"use client";

import { SITE, PREMIUM_PLANS, formatSom } from "@/lib/site";
import { BoltIcon, CheckIcon, StarIcon, TelegramIcon } from "./icons";
import { useLang } from "./LanguageContext";

export default function Hero() {
  const { tr } = useLang();
  const cheapest = PREMIUM_PLANS.reduce((a, b) => (a.price < b.price ? a : b));

  return (
    <section className="relative overflow-hidden pb-12 pt-28 sm:pt-32 lg:pb-20">
      <div className="aurora" />
      <div className="absolute inset-0 -z-10 bg-grid-tg bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="chip mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {tr.hero.badge}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {tr.hero.title}{" "}
            <span className="gradient-text">{tr.hero.highlight}</span>{" "}
            {tr.hero.titleEnd}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-tg-100/80 sm:text-lg lg:mx-0">
            {tr.hero.desc}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <a href="#narxlar" className="btn-primary w-full sm:w-auto">
              <BoltIcon className="h-5 w-5" />
              {tr.hero.btnPricing}
            </a>
            <a
              href={SITE.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto"
            >
              <TelegramIcon className="h-5 w-5" />
              {tr.hero.btnBot}
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
            {tr.hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-tg-100/80">
                <CheckIcon className="h-4 w-4 text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-tg-500/20 blur-2xl" />

            <div className="card relative overflow-hidden p-6 shadow-card">
              <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-tg-400 to-tg-600">
                    <StarIcon className="h-6 w-6 text-white" />
                  </span>
                  <div>
                    <p className="text-sm text-tg-100/70">Telegram</p>
                    <p className="text-lg font-bold">Premium</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Faol
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-ink-900/60 p-4">
                <p className="text-sm text-tg-100/70">Eng arzon paket</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">
                    {formatSom(cheapest.perMonth ?? 0).replace(" so'm", "")}
                  </span>
                  <span className="text-sm text-tg-100/70">so'm / oy</span>
                </div>
                <p className="mt-1 text-xs text-tg-100/60">
                  {cheapest.duration} — jami {formatSom(cheapest.price)}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {["Reklama yo'q", "4 GB fayl", "Tezkor yuklash"].map((f) => (
                  <div
                    key={f}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-[11px] font-medium text-tg-100/80"
                  >
                    {f}
                  </div>
                ))}
              </div>

              <a
                href={SITE.botUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-between rounded-2xl bg-gradient-to-r from-tg-600/30 to-tg-400/20 px-4 py-3 transition-colors hover:from-tg-600/40 hover:to-tg-400/30"
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative grid h-9 w-9 place-items-center rounded-full bg-tg-500/30">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full border border-tg-300/60" />
                    <BoltIcon className="h-4 w-4 text-tg-100" />
                  </span>
                  <span className="text-sm font-medium text-tg-50">
                    Avtomatik yetkazish
                  </span>
                </div>
                <span className="text-xl font-extrabold gradient-text">10s</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
