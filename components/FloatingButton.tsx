import { SITE } from "@/lib/site";
import { TelegramIcon } from "./icons";

export default function FloatingButton() {
  return (
    <a
      href={SITE.supportUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Telegram orqali bog‘lanish"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-tg-500 to-tg-400 py-3 pl-3 pr-4 shadow-glow transition-all hover:scale-105 active:scale-95"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/15">
        <span className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-white/50" />
        <TelegramIcon className="h-5 w-5 text-white" />
      </span>
      <span className="text-sm font-semibold text-white">Yozish</span>
    </a>
  );
}
