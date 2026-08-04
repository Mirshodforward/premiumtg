"use client";

import { SITE } from "@/lib/site";
import { ArrowUpRightIcon, TelegramIcon } from "./icons";
import { useLang } from "./LanguageContext";

export default function FloatingButton() {
  const { tr } = useLang();

  return (
    <a
      href={SITE.botUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Telegram bot orqali sotib olish"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2 border-2 border-foreground bg-primary px-4 font-clash text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-hard transition-colors duration-150 hover:bg-foreground hover:text-background"
    >
      <TelegramIcon className="h-4 w-4 shrink-0" />
      <span className="hidden sm:inline">{tr.floating}</span>
      <ArrowUpRightIcon className="h-3.5 w-3.5 animate-arrow-nudge" />
    </a>
  );
}
