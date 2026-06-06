import { SITE } from "@/lib/site";
import { TelegramIcon, HeadsetIcon } from "./icons";

const LINKS = [
  { href: "#imkoniyatlar", label: "Imkoniyatlar" },
  { href: "#qanday", label: "Qanday ishlaydi" },
  { href: "#narxlar", label: "Narxlar" },
  { href: "#tolov", label: "To‘lov" },
  { href: "#bonus", label: "Bonus" },
  { href: "#faq", label: "Savol-javob" },
];

export default function Footer() {
  const year = new Date().getFullYear();
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
              O‘zbekistonda Telegram Premium sotib olishning eng tez, arzon va
              ishonchli yo‘li. To‘lovdan so‘ng 10 soniyada avtomatik faollashadi.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Bo‘limlar</p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-tg-100/65 transition-colors hover:text-tg-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Bog’lanish</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={SITE.botUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-tg-400/40 bg-tg-500/10 px-4 py-3 transition-colors hover:border-tg-400/60 hover:bg-tg-500/20"
              >
                <TelegramIcon className="h-5 w-5 text-tg-300" />
                <span className="text-sm font-semibold">@{SITE.botUsername}</span>
                <span className="ml-auto rounded-full bg-tg-500/30 px-2 py-0.5 text-[10px] font-bold text-tg-200">Bot</span>
              </a>
              <a
                href={SITE.supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-tg-400/40"
              >
                <HeadsetIcon className="h-5 w-5 text-tg-300" />
                <span className="text-sm font-medium">@{SITE.supportUsername}</span>
              </a>
              <a
                href={SITE.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-tg-400/40"
              >
                <TelegramIcon className="h-5 w-5 text-tg-300" />
                <span className="text-sm font-medium">@{SITE.channelUsername}</span>
                <span className="ml-auto text-[10px] text-tg-100/50">Kanal</span>
              </a>
            </div>
            <p className="mt-3 text-xs text-tg-100/55">
              Qo’llab-quvvatlash 24/7 — istalgan vaqtda yozing.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-tg-100/55">
            © {year} {SITE.name}. Barcha huquqlar himoyalangan.{" "}
            <a
              href={SITE.ofertaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-tg-300 transition-colors"
            >
              Ommaviy oferta
            </a>
          </p>
          <p className="text-xs text-tg-100/45">
            Telegram va Telegram Premium — Telegram FZ-LLC tovar belgilari.
            Premiumtg mustaqil sotuvchi xizmatidir.
          </p>
        </div>
      </div>
    </footer>
  );
}
