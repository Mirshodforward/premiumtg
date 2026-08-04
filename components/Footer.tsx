"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { ArrowUpRightIcon, LogoMark } from "./icons";
import { useLang } from "./LanguageContext";

const BIG: Record<string, string> = {
  uz: "Telegram Premiumni hoziroq ulang",
  ru: "Подключите Telegram Premium прямо сейчас",
  en: "Get Telegram Premium right now",
};

const BLOG_LABEL: Record<string, string> = {
  uz: "Foydali maqolalar",
  ru: "Полезные статьи",
  en: "Useful articles",
};

export default function Footer() {
  const { lang, tr } = useLang();
  const year = new Date().getFullYear();

  const LINKS = [
    { href: "/#imkoniyatlar", label: tr.nav.features },
    { href: "/#qanday", label: tr.nav.howItWorks },
    { href: "/#narxlar", label: tr.nav.pricing },
    { href: "/#tolov", label: tr.nav.payment },
    { href: "/#bonus", label: tr.nav.bonus },
    { href: "/#faq", label: tr.nav.faq },
    { href: "/blog", label: tr.nav.blog },
  ];

  return (
    <footer className="border-t-2 border-foreground bg-background-subtle">
      <div className="container-x py-16 sm:py-20">
        <h2 className="font-clash max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl">
          {BIG[lang] ?? BIG.uz}
        </h2>

        <div className="divider-thick mt-10" />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2.5">
              <LogoMark className="text-primary" />
              <span className="font-clash text-lg font-black uppercase tracking-tight">
                Premiumtg
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {tr.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {tr.footer.sections}
            </p>
            <ul className="mt-5 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-clash text-sm font-bold uppercase tracking-wide transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {BLOG_LABEL[lang] ?? BLOG_LABEL.uz} →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {tr.footer.contact}
            </p>
            <div className="mt-5 grid border-l-2 border-t-2 border-foreground">
              <a
                href={SITE.botUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 border-b-2 border-r-2 border-foreground bg-card px-4 py-3.5 transition-colors hover:bg-foreground hover:text-background"
              >
                <span className="font-clash text-sm font-bold">@{SITE.botUsername}</span>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
              </a>
              <a
                href={SITE.supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 border-b-2 border-r-2 border-foreground bg-card px-4 py-3.5 transition-colors hover:bg-foreground hover:text-background"
              >
                <span className="font-clash text-sm font-bold">@{SITE.supportUsername}</span>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
              </a>
              <a
                href={SITE.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 border-b-2 border-r-2 border-foreground bg-card px-4 py-3.5 transition-colors hover:bg-foreground hover:text-background"
              >
                <span className="font-clash text-sm font-bold">@{SITE.channelUsername}</span>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t-2 border-foreground pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {SITE.name}. {tr.footer.rights}{" "}
            <a
              href={SITE.ofertaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-primary"
            >
              {tr.footer.oferta}
            </a>
          </p>
          <p className="max-w-md text-xs text-muted-foreground/80">
            {tr.footer.trademark}
          </p>
        </div>
      </div>
    </footer>
  );
}
