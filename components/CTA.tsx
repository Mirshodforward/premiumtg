"use client";

import { SITE } from "@/lib/site";
import { ArrowUpRightIcon } from "./icons";
import { useLang } from "./LanguageContext";

export default function CTA() {
  const { tr } = useLang();

  return (
    <section className="border-b-2 border-foreground py-20 sm:py-28">
      <div className="container-x">
        <div className="reveal-item border-2 border-foreground bg-card p-8 shadow-hard-lg sm:p-12">
          <h2 className="h2-section max-w-3xl">{tr.cta.title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {tr.cta.desc}
          </p>

          <div className="mt-9 flex flex-col sm:inline-flex sm:flex-row">
            <a
              href={SITE.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {tr.cta.btnBot}
              <ArrowUpRightIcon className="h-4 w-4 animate-arrow-nudge" />
            </a>
            <a
              href="#narxlar"
              className="btn-secondary border-t-0 sm:border-l-0 sm:border-t-2"
            >
              {tr.cta.btnPricing}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
