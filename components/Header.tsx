"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
import { LANGS, type Lang } from "@/lib/translations";
import { SITE } from "@/lib/site";
import { ArrowUpRightIcon, MoonIcon, SunIcon } from "./icons";

export default function Header() {
  const { lang, setLang, tr } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const nav = [
    { href: "/#imkoniyatlar", label: tr.nav.features },
    { href: "/#narxlar", label: tr.nav.pricing },
    { href: "/#tolov", label: tr.nav.payment },
    { href: "/blog", label: tr.nav.blog },
    { href: "/#faq", label: tr.nav.faq },
  ];
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="site-header">
      <div className="container-wide header-inner">
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Premiumtg — bosh sahifa"
        >
          <span className="brand-mark">
            <img src="/brand/star-128.png" alt="" width={34} height={34} />
          </span>
          premium<span className="brand-light">tg</span>
          <span className="brand-dot">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={n.href === pathname ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <label className="language-select">
            <span className="sr-only">Til / Language</span>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
            >
              {LANGS.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.code.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
          <button
            className="icon-button theme-button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Yorug‘ rejim" : "Qorong‘i rejim"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            className="button button-dark header-buy"
            href={SITE.botUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tr.nav.buy}
            <ArrowUpRightIcon />
          </a>
          <button
            ref={menuButton}
            className="icon-button mobile-menu-button"
            aria-label="Menyu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              "×"
            ) : (
              <span className="hamburger">
                <i />
                <i />
              </span>
            )}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobil navigatsiya"
        >
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
              <ArrowUpRightIcon />
            </Link>
          ))}
          <a
            href={SITE.botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            {tr.nav.buy}
          </a>
        </nav>
      )}
    </header>
  );
}
