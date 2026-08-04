"use client";

import { ShieldIcon } from "./icons";
import { useLang } from "./LanguageContext";

const METHODS = ["Click", "Payme", "Paynet", "Uzcard", "Humo", "Bank kartasi"];

const COPY: Record<
  string,
  { eyebrow: string; title: string; desc: string; note: string; noteBold: string; last: string }
> = {
  uz: {
    eyebrow: "To'lov",
    title: "Istalgan karta bilan to'lang",
    desc: "O'zbekistondagi barcha ommabop to'lov tizimlari qabul qilinadi. Xorijiy karta, dollar hisobi yoki kripto hamyon kerak emas.",
    noteBold: "Karta ma'lumotlari bizga ko'rinmaydi.",
    note: "To'lov Click/Payme kabi litsenziyalangan tizimlarning himoyalangan kanallari orqali o'tadi va saytda saqlanmaydi.",
    last: "Bank kartasi",
  },
  ru: {
    eyebrow: "Оплата",
    title: "Платите любой картой",
    desc: "Принимаются все популярные платёжные системы Узбекистана. Иностранная карта, долларовый счёт или крипто-кошелёк не нужны.",
    noteBold: "Данные карты нам не видны.",
    note: "Платёж проходит по защищённым каналам лицензированных систем вроде Click/Payme и на сайте не сохраняется.",
    last: "Банковская карта",
  },
  en: {
    eyebrow: "Payment",
    title: "Pay with any card",
    desc: "All popular Uzbek payment systems are accepted. No foreign card, dollar account or crypto wallet required.",
    noteBold: "We never see your card details.",
    note: "Payments run through the secured channels of licensed providers like Click/Payme and are not stored on the site.",
    last: "Bank card",
  },
};

export default function Payments() {
  const { lang } = useLang();
  const copy = COPY[lang] ?? COPY.uz;
  const methods = [...METHODS.slice(0, 5), copy.last];

  return (
    <section id="tolov" className="scroll-mt-20 border-b-2 border-foreground py-20 sm:py-28">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow reveal-item">
              <span className="eyebrow-dot" />
              {copy.eyebrow}
            </span>
            <h2 className="h2-section reveal-item mt-6">{copy.title}</h2>
            <p className="reveal-item mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {copy.desc}
            </p>

            <div className="reveal-item mt-8 flex items-start gap-3 border-2 border-foreground bg-primary-soft p-5 shadow-hard-sm">
              <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed">
                <strong className="font-bold">{copy.noteBold}</strong> {copy.note}
              </p>
            </div>
          </div>

          <div className="reveal-item grid border-l-2 border-t-2 border-border-strong sm:grid-cols-3">
            {methods.map((m) => (
              <div
                key={m}
                className="flex h-28 items-center justify-center border-b-2 border-r-2 border-border-strong bg-card px-4 text-center font-clash text-base font-bold uppercase tracking-tight transition-colors duration-300 hover:bg-foreground hover:text-background sm:h-32"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
