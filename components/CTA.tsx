"use client";

import { SITE } from "@/lib/site";
import { BoltIcon, TelegramIcon } from "./icons";
import { useLang } from "./LanguageContext";

export default function CTA() {
  const { tr } = useLang();

  return (
    <section className="relative py-12 lg:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-tg-400/30 bg-gradient-to-br from-tg-600/30 via-ink-800 to-ink-900 p-10 text-center shadow-glow lg:p-16">
          <div className="absolute inset-0 -z-10 bg-grid-tg bg-[size:36px_36px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {tr.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-tg-100/80">
            {tr.cta.desc}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SITE.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <TelegramIcon className="h-5 w-5" />
              {tr.cta.btnBot}
            </a>
            <a href="#narxlar" className="btn-ghost w-full sm:w-auto">
              <BoltIcon className="h-5 w-5" />
              {tr.cta.btnPricing}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
