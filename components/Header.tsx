"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { LANGS } from "@/lib/translations";
import { useLang } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
import { ArrowUpRightIcon, LogoMark, MoonIcon, SunIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, tr } = useLang();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog");

  const NAV = [
    { href: isBlog ? "/#imkoniyatlar" : "#imkoniyatlar", label: tr.nav.features },
    { href: isBlog ? "/#qanday" : "#qanday", label: tr.nav.howItWorks },
    { href: isBlog ? "/#narxlar" : "#narxlar", label: tr.nav.pricing },
    { href: isBlog ? "/#tolov" : "#tolov", label: tr.nav.payment },
    { href: isBlog ? "/#faq" : "#faq", label: tr.nav.faq },
    { href: "/blog", label: tr.nav.blog },
  ];

  // Mobil menyu ochiqligida sahifa skrolini to'xtatamiz
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="text-primary" />
          <span className="font-clash text-lg font-black uppercase tracking-tight">
            Premiumtg
          </span>
        </Link>

        <nav className="hidden items-center lg:flex">
          {NAV.map((n) => {
            const active = n.href === "/blog" && isBlog;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`border-l-2 border-transparent px-4 py-2 font-clash text-sm font-bold uppercase tracking-wide transition-colors hover:text-primary ${
                  active ? "text-primary" : "text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Til almashtirgich — aktiv holat inversiya bilan */}
          <div className="hidden border-2 border-foreground sm:inline-flex">
            {LANGS.map((l, i) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`px-2.5 py-1.5 font-clash text-xs font-bold uppercase transition-colors ${
                  i > 0 ? "border-l-2 border-foreground" : ""
                } ${
                  lang === l.code
                    ? "bg-foreground text-background"
                    : "hover:bg-muted"
                }`}
              >
                {l.code}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Yorug' rejim" : "Qorong'i rejim"}
            className="grid h-9 w-9 place-items-center border-2 border-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {theme === "dark" ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button>

          <a
            href={SITE.botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-1.5 border-2 border-border-strong bg-primary px-4 font-clash text-xs font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-foreground hover:text-background sm:inline-flex"
          >
            {tr.nav.buy}
            <ArrowUpRightIcon className="h-3.5 w-3.5 animate-arrow-nudge" />
          </a>

          <button
            type="button"
            aria-label="Menyu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center border-2 border-foreground transition-colors hover:bg-foreground hover:text-background lg:hidden"
          >
            <span className="space-y-1">
              <span
                className={`block h-0.5 w-4 bg-current transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-current transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t-2 border-foreground bg-background lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b-2 border-border-soft px-5 py-4 font-clash text-base font-bold uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-stretch border-b-2 border-foreground">
            {LANGS.map((l, i) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`flex-1 py-3 font-clash text-sm font-bold uppercase transition-colors ${
                  i > 0 ? "border-l-2 border-foreground" : ""
                } ${lang === l.code ? "bg-foreground text-background" : ""}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="p-5">
            <a
              href={SITE.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              {tr.nav.buyNow}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
