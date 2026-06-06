"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { TelegramIcon } from "./icons";
import { useLang } from "./LanguageContext";

export default function Footer() {
  const { lang, tr } = useLang();
  const year = new Date().getFullYear();

  const LINKS = [
    { href: "#imkoniyatlar", label: tr.nav.features },
    { href: "#qanday", label: tr.nav.howItWorks },
    { href: "#narxlar", label: tr.nav.pricing },
    { href: "#tolov", label: tr.nav.payment },
    { href: "#bonus", label: tr.nav.bonus },
    { href: "#faq", label: tr.nav.faq },
    { href: "/blog", label: tr.nav.blog },
  ];

  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-x py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-tg-400 to-tg-600">
                <TelegramIcon className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-extrabold">
                Premium<span className="gradient-text">tg</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-tg-100/65">
              {tr.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{tr.footer.sections}</p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-tg-100/65 transition-colors hover:text-tg-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{tr.footer.contact}</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={SITE.botUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-tg-400/40 bg-tg-500/10 px-4 py-3 transition-colors hover:border-tg-400/60 hover:bg-tg-500/20"
              >
                <TelegramIcon className="h-5 w-5 text-tg-300" />
                <span className="text-sm font-semibold">@{SITE.botUsername}</span>
                <span className="ml-auto rounded-full bg-tg-500/30 px-2 py-0.5 text-[10px] font-bold text-tg-200">
                  Bot
                </span>
              </a>
              <a
                href={SITE.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-tg-400/40"
              >
                <TelegramIcon className="h-5 w-5 text-tg-300" />
                <span className="text-sm font-medium">@{SITE.channelUsername}</span>
                <span className="ml-auto text-[10px] text-tg-100/50">
                  {lang === "ru" ? "Канал" : lang === "en" ? "Channel" : "Kanal"}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-tg-100/55">
            © {year} {SITE.name}. {tr.footer.rights}{" "}
            <a
              href={SITE.ofertaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-tg-300 transition-colors"
            >
              {tr.footer.oferta}
            </a>
          </p>
          <p className="text-xs text-tg-100/45">{tr.footer.trademark}</p>
        </div>
      </div>
    </footer>
  );
}
