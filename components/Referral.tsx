"use client";

import { SITE } from "@/lib/site";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { useLang } from "./LanguageContext";

const COPY: Record<
  string,
  { eyebrow: string; title: string; desc: string; perks: string[]; btn: string; big: string; bigLabel: string }
> = {
  uz: {
    eyebrow: "Bonus",
    title: "Taklif qiling — bonus oling",
    desc: "Shaxsiy taklif havolangizni do'stlaringiz, guruhingiz yoki kanalingizda ulashing. Havola orqali kelgan har bir xarid uchun bonus yoziladi.",
    perks: [
      "Har bir do'st sotib olganda — bonus",
      "Bonusni keyingi xaridda chegirma sifatida ishlatasiz",
      "Cheklov yo'q — qancha taklif, shuncha bonus",
    ],
    btn: "Taklif havolasini olish",
    big: "∞",
    bigLabel: "Taklif soni cheklanmagan",
  },
  ru: {
    eyebrow: "Бонус",
    title: "Приглашайте — получайте бонус",
    desc: "Делитесь личной реферальной ссылкой с друзьями, в группе или на канале. За каждую покупку по ссылке начисляется бонус.",
    perks: [
      "Бонус за каждую покупку друга",
      "Бонус используется как скидка на следующую покупку",
      "Без ограничений — чем больше приглашений, тем больше бонусов",
    ],
    btn: "Получить ссылку",
    big: "∞",
    bigLabel: "Количество приглашений не ограничено",
  },
  en: {
    eyebrow: "Bonus",
    title: "Invite — earn a bonus",
    desc: "Share your personal referral link with friends, your group or your channel. Every purchase through it earns you a bonus.",
    perks: [
      "A bonus for every friend who buys",
      "Spend the bonus as a discount on your next purchase",
      "No cap — the more invites, the more bonuses",
    ],
    btn: "Get invite link",
    big: "∞",
    bigLabel: "Unlimited invites",
  },
};

export default function Referral() {
  const { lang } = useLang();
  const copy = COPY[lang] ?? COPY.uz;

  return (
    <section
      id="bonus"
      className="scroll-mt-20 border-b-2 border-foreground bg-background-subtle py-20 sm:py-28"
    >
      <div className="container-x">
        <div className="grid border-2 border-foreground bg-card lg:grid-cols-[1.3fr_0.7fr]">
          <div className="p-8 sm:p-10">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              {copy.eyebrow}
            </span>
            <h2 className="font-clash mt-6 text-3xl font-black uppercase leading-[0.98] tracking-tight sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {copy.desc}
            </p>

            <ul className="mt-7 space-y-3">
              {copy.perks.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm font-medium">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <a
              href={SITE.supportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              {copy.btn}
              <ArrowUpRightIcon className="h-4 w-4 animate-arrow-nudge" />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center border-t-2 border-foreground bg-primary p-10 text-center text-primary-foreground lg:border-l-2 lg:border-t-0">
            <span className="font-clash text-[6rem] font-black leading-none">
              {copy.big}
            </span>
            <p className="mt-4 max-w-[14rem] text-xs font-bold uppercase tracking-[0.18em]">
              {copy.bigLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
