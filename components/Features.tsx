"use client";

import {
  BoltIcon,
  ShieldIcon,
  TagIcon,
  CardIcon,
  UserIcon,
  HeadsetIcon,
  GiftIcon,
  ClockIcon,
  StarIcon,
} from "./icons";
import { useLang } from "./LanguageContext";

type Feature = { icon: typeof BoltIcon; title: string; text: string };

const FEATURES: Record<string, Feature[]> = {
  uz: [
    { icon: BoltIcon, title: "10 soniyada", text: "To'lovdan so'ng obuna avtomatik faollashadi. Operator kutish yoki qo'lda tasdiqlash yo'q." },
    { icon: TagIcon, title: "Eng arzon narx", text: "Yillik paketda oyiga ≈35 000 so'm. App Store narxidan qariyb ikki barobar past." },
    { icon: ShieldIcon, title: "Kod so'ralmaydi", text: "Faqat username yetarli. Parol, SMS-kod yoki akkauntga kirish umuman kerak emas." },
    { icon: CardIcon, title: "Lokal to'lov", text: "Click, Payme, Paynet, Uzcard, Humo va istalgan O'zbekiston bank kartasi." },
    { icon: UserIcon, title: "Ro'yxatsiz", text: "Akkaunt yaratish, ilova o'rnatish yoki uzun forma to'ldirish shart emas." },
    { icon: HeadsetIcon, title: "24/7 support", text: "@StarsPaymeeSupport kunu-tun aloqada — har bir to'lov tranzaksiya raqami bilan kuzatiladi." },
    { icon: GiftIcon, title: "Sovg'a qilish", text: "Do'stingiz username'ini kiriting — Premium to'g'ridan-to'g'ri unga boradi." },
    { icon: StarIcon, title: "Referal bonus", text: "Taklif havolangiz orqali kelgan har bir xarid uchun bonus yig'asiz." },
    { icon: ClockIcon, title: "Rasmiy obuna", text: "Telegram'ning sovg'a mexanizmi orqali — to'liq rasmiy, bloklanish xavfi yo'q." },
  ],
  ru: [
    { icon: BoltIcon, title: "За 10 секунд", text: "После оплаты подписка активируется автоматически. Без ожидания оператора." },
    { icon: TagIcon, title: "Лучшая цена", text: "В годовом пакете ≈35 000 сум в месяц — почти вдвое дешевле App Store." },
    { icon: ShieldIcon, title: "Без кода", text: "Достаточно username. Пароль, SMS-код или вход в аккаунт не нужны." },
    { icon: CardIcon, title: "Местная оплата", text: "Click, Payme, Paynet, Uzcard, Humo и любая карта Узбекистана." },
    { icon: UserIcon, title: "Без регистрации", text: "Не нужно создавать аккаунт, ставить приложение или заполнять формы." },
    { icon: HeadsetIcon, title: "Поддержка 24/7", text: "@StarsPaymeeSupport на связи круглосуточно — каждый платёж отслеживается." },
    { icon: GiftIcon, title: "Подарок другу", text: "Введите username друга — Premium придёт напрямую ему." },
    { icon: StarIcon, title: "Реферальный бонус", text: "За каждую покупку по вашей ссылке начисляется бонус." },
    { icon: ClockIcon, title: "Официальная подписка", text: "Через механизм подарков Telegram — полностью официально, без риска блокировки." },
  ],
  en: [
    { icon: BoltIcon, title: "10 seconds", text: "The subscription activates automatically after payment. No operator, no manual step." },
    { icon: TagIcon, title: "Lowest price", text: "≈35,000 UZS per month on the annual plan — nearly half the App Store price." },
    { icon: ShieldIcon, title: "No code asked", text: "Username is enough. No password, SMS code or account access required." },
    { icon: CardIcon, title: "Local payments", text: "Click, Payme, Paynet, Uzcard, Humo and any Uzbekistan bank card." },
    { icon: UserIcon, title: "No sign-up", text: "No account to create, no app to install, no long form to fill in." },
    { icon: HeadsetIcon, title: "24/7 support", text: "@StarsPaymeeSupport is online around the clock — every payment is tracked." },
    { icon: GiftIcon, title: "Gift it", text: "Enter a friend's username — Premium is delivered straight to them." },
    { icon: StarIcon, title: "Referral bonus", text: "Earn a bonus for every purchase made through your invite link." },
    { icon: ClockIcon, title: "Official subscription", text: "Delivered via Telegram's gift mechanism — fully official, no ban risk." },
  ],
};

const HEADING: Record<string, { eyebrow: string; title: string; desc: string }> = {
  uz: {
    eyebrow: "Imkoniyatlar",
    title: "Nega Premiumtg?",
    desc: "O'zbekistonda Telegram Premium olishning eng tez va eng tushunarli yo'li.",
  },
  ru: {
    eyebrow: "Возможности",
    title: "Почему Premiumtg?",
    desc: "Самый быстрый и понятный способ получить Telegram Premium в Узбекистане.",
  },
  en: {
    eyebrow: "Features",
    title: "Why Premiumtg?",
    desc: "The fastest and clearest way to get Telegram Premium in Uzbekistan.",
  },
};

export default function Features() {
  const { lang } = useLang();
  const items = FEATURES[lang] ?? FEATURES.uz;
  const h = HEADING[lang] ?? HEADING.uz;

  return (
    <section
      id="imkoniyatlar"
      className="scroll-mt-20 border-b-2 border-foreground bg-background-subtle py-20 sm:py-28"
    >
      <div className="container-wide">
        <span className="eyebrow reveal-item">
          <span className="eyebrow-dot" />
          {h.eyebrow}
        </span>
        <h2 className="h2-section reveal-item mt-6 max-w-3xl">{h.title}</h2>
        <p className="reveal-item mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {h.desc}
        </p>

        {/* Umumiy chegarali 3×3 to'r — gap yo'q, kataklar chiziqni bo'lishadi */}
        <div className="mt-12 grid border-l-2 border-t-2 border-border-strong bg-card sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <article
              key={f.title}
              className="reveal-item group h-full border-b-2 border-r-2 border-border-strong p-7 transition-colors duration-300 hover:bg-foreground hover:text-background"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-clash text-5xl font-black tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <f.icon className="h-14 w-14 shrink-0 opacity-35" strokeWidth={1.75} />
              </div>
              <h3 className="h3-card mt-6">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-80">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
