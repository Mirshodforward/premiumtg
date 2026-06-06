"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { TelegramIcon } from "./icons";

const NAV = [
  { href: "#imkoniyatlar", label: "Imkoniyatlar" },
  { href: "#qanday", label: "Qanday ishlaydi" },
  { href: "#narxlar", label: "Narxlar" },
  { href: "#tolov", label: "To'lov" },
  { href: "#bonus", label: "Bonus" },
  { href: "#faq", label: "Savol-javob" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-900/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-tg-400 to-tg-600 shadow-glow">
            <TelegramIcon className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Premium<span className="gradient-text">tg</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-tg-100/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={SITE.botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-gradient-to-r from-tg-500 to-tg-400 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 sm:inline-flex"
          >
            Sotib olish
          </a>
          <button
            type="button"
            aria-label="Menyu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 lg:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-900/95 backdrop-blur-xl lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-tg-100/90 hover:bg-white/5"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <a
              href={SITE.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              Hozir sotib olish
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
