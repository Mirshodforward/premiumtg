"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { LANGS } from "@/lib/translations";
import { useLang } from "./LanguageContext";
import { TelegramIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, tr } = useLang();
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog");

  const NAV = [
    { href: isBlog ? "/#imkoniyatlar" : "#imkoniyatlar", label: tr.nav.features },
    { href: isBlog ? "/#qanday" : "#qanday", label: tr.nav.howItWorks },
    { href: isBlog ? "/#narxlar" : "#narxlar", label: tr.nav.pricing },
    { href: isBlog ? "/#tolov" : "#tolov", label: tr.nav.payment },
    { href: isBlog ? "/#bonus" : "#bonus", label: tr.nav.bonus },
    { href: isBlog ? "/#faq" : "#faq", label: tr.nav.faq },
    { href: "/blog", label: tr.nav.blog },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentLang = LANGS.find((l) => l.code === lang);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-900/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-tg-400 to-tg-600 shadow-glow">
            <TelegramIcon className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Premium<span className="gradient-text">tg</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white ${
                  n.href === "/blog" && isBlog
                    ? "text-tg-300"
                    : "text-tg-100/80"
                }`}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 px-3 py-2 text-sm font-medium text-tg-100/80 hover:bg-white/5 hover:text-white"
            >
              <span>{currentLang?.flag}</span>
              <span className="hidden sm:inline">{currentLang?.label}</span>
              <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 min-w-[130px] overflow-hidden rounded-xl border border-white/10 bg-ink-900/95 shadow-lg backdrop-blur-xl">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-white/5 ${
                      lang === l.code ? "text-tg-300 font-semibold" : "text-tg-100/80"
                    }`}
                  >
                    <span>{l.flag}</span>
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={SITE.botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-gradient-to-r from-tg-500 to-tg-400 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 sm:inline-flex"
          >
            {tr.nav.buy}
          </a>

          <button
            type="button"
            aria-label="Menyu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 lg:hidden"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-900/95 backdrop-blur-xl lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-tg-100/90 hover:bg-white/5"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <a
              href={SITE.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              {tr.nav.buyNow}
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
