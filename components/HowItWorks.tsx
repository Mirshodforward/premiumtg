"use client";

import { useLang } from "./LanguageContext";

type Step = { title: string; text: string };

const STEPS: Record<string, Step[]> = {
  uz: [
    { title: "Username", text: "Telegram sozlamalaridan username'ingizni oling (masalan @mirshod). Yo'q bo'lsa — bir soniyada yaratasiz." },
    { title: "Paket", text: "3, 6 yoki 12 oylik paketni tanlang. Muddat uzun bo'lgani sari oylik narx arzonlashadi." },
    { title: "To'lov", text: "Click, Payme, Paynet, Uzcard yoki Humo orqali to'lang. Karta ma'lumotlari bizga ko'rinmaydi." },
    { title: "10 soniya", text: "Tizim to'lovni ko'rgan zahoti Premiumni yuboradi — ismingiz yonida yulduzcha paydo bo'ladi." },
  ],
  ru: [
    { title: "Username", text: "Возьмите username в настройках Telegram (например @mirshod). Если его нет — создаётся за секунду." },
    { title: "Пакет", text: "Выберите пакет на 3, 6 или 12 месяцев. Чем длиннее срок, тем ниже цена за месяц." },
    { title: "Оплата", text: "Оплатите через Click, Payme, Paynet, Uzcard или Humo. Данные карты нам не видны." },
    { title: "10 секунд", text: "Как только платёж получен, система отправляет Premium — рядом с именем появляется звёздочка." },
  ],
  en: [
    { title: "Username", text: "Grab your username in Telegram settings (e.g. @mirshod). Don't have one? It takes a second to create." },
    { title: "Plan", text: "Pick the 3, 6 or 12-month plan. The longer the term, the lower the monthly price." },
    { title: "Payment", text: "Pay via Click, Payme, Paynet, Uzcard or Humo. We never see your card details." },
    { title: "10 seconds", text: "The moment payment lands, the system sends Premium — a star appears next to your name." },
  ],
};

const HEADING: Record<string, { eyebrow: string; title: string; desc: string }> = {
  uz: {
    eyebrow: "Qanday ishlaydi",
    title: "To'rt qadam — tamom",
    desc: "Ro'yxatdan o'tish ham, ilova o'rnatish ham, kod berish ham shart emas.",
  },
  ru: {
    eyebrow: "Как это работает",
    title: "Четыре шага — и всё",
    desc: "Не нужно ни регистрации, ни установки приложения, ни кода.",
  },
  en: {
    eyebrow: "How it works",
    title: "Four steps — done",
    desc: "No registration, no app install, no verification code.",
  },
};

export default function HowItWorks() {
  const { lang } = useLang();
  const steps = STEPS[lang] ?? STEPS.uz;
  const h = HEADING[lang] ?? HEADING.uz;

  return (
    <section id="qanday" className="scroll-mt-20 border-b-2 border-foreground py-20 sm:py-28">
      <div className="container-wide">
        <span className="eyebrow reveal-item">
          <span className="eyebrow-dot" />
          {h.eyebrow}
        </span>
        <h2 className="h2-section reveal-item mt-6 max-w-3xl">{h.title}</h2>
        <p className="reveal-item mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {h.desc}
        </p>

        <div className="mt-12 grid border-l-2 border-t-2 border-border-strong sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <article
              key={s.title}
              className="reveal-item h-full border-b-2 border-r-2 border-border-strong p-7 transition-colors duration-300 hover:bg-foreground hover:text-background"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-clash text-6xl font-black tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="h3-card mt-6">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-80">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
