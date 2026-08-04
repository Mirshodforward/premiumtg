"use client";

import { useState } from "react";
import { ArrowUpRightIcon, PlusIcon } from "./icons";
import { SITE } from "@/lib/site";
import { useLang } from "./LanguageContext";

const FAQS_UZ = [
  {
    q: "Telegram Premium qancha vaqtda faollashadi?",
    a: "To'lov amalga oshirilgandan so'ng obuna atigi 10 soniyada avtomatik faollashadi. Hech qanday kutish yoki operator bilan yozishish shart emas.",
  },
  {
    q: "Akkauntimga kirish (login/parol) berishim kerakmi?",
    a: "Yo'q. Premium paketlar uchun faqat Telegram username yetarli. Parol, kod yoki akkauntga kirishni umuman so'ramaymiz — bu eng xavfsiz usul.",
  },
  {
    q: "Qaysi to'lov usullari qabul qilinadi?",
    a: "Click, Payme, Paynet, Uzcard, Humo va istalgan O'zbekiston bank kartasi orqali to'lov qilishingiz mumkin.",
  },
  {
    q: "Telegram Premium narxlari qancha?",
    a: "3 oy — 172 000 so'm, 6 oy — 232 000 so'm, 12 oy — 422 000 so'm. Yillik paketda oylik narx ≈35 167 so'mga tushadi.",
  },
  {
    q: "Do'stlarni taklif qilib bonus olsa bo'ladimi?",
    a: "Ha. Do'stlaringizni taklif qiling — har bir sotib olgan do'stingiz uchun bonus va chegirmalar olasiz. Cheklov yo'q.",
  },
  {
    q: "Obuna haqiqiy va rasmiymi?",
    a: "Ha, siz to'liq rasmiy Telegram Premium obunasini olasiz: reklamasiz, 4 GB gacha fayl, tezkor yuklash, transkripsiya, premium stikerlar va barcha imkoniyatlar.",
  },
];

const FAQS_RU = [
  {
    q: "Как быстро активируется Telegram Premium?",
    a: "После оплаты подписка активируется автоматически за 10 секунд. Никакого ожидания или переписки с оператором не требуется.",
  },
  {
    q: "Нужно ли давать доступ к аккаунту (логин/пароль)?",
    a: "Нет. Для Premium-пакетов достаточно только Telegram username. Мы никогда не запрашиваем пароль или код входа — это самый безопасный способ.",
  },
  {
    q: "Какие способы оплаты принимаются?",
    a: "Click, Payme, Paynet, Uzcard, Humo и любая банковская карта Узбекистана.",
  },
  {
    q: "Сколько стоит Telegram Premium?",
    a: "3 месяца — 172 000 сум, 6 месяцев — 232 000 сум, 12 месяцев — 422 000 сум. В годовом пакете выходит ≈35 167 сум в месяц.",
  },
  {
    q: "Можно ли получить бонус за приглашение друзей?",
    a: "Да. Приглашайте друзей — за каждого купившего друга вы получаете бонусы и скидки. Без ограничений.",
  },
  {
    q: "Подписка настоящая и официальная?",
    a: "Да, вы получаете полноценную официальную подписку Telegram Premium: без рекламы, файлы до 4 ГБ, быстрая загрузка, транскрипция, Premium-стикеры и все возможности.",
  },
];

const FAQS_EN = [
  {
    q: "How quickly does Telegram Premium activate?",
    a: "After payment, the subscription activates automatically in 10 seconds. No waiting or writing to an operator needed.",
  },
  {
    q: "Do I need to provide account access (login/password)?",
    a: "No. For Premium packages, only your Telegram username is required. We never ask for passwords or login codes — this is the safest method.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Click, Payme, Paynet, Uzcard, Humo and any Uzbekistan bank card.",
  },
  {
    q: "How much does Telegram Premium cost?",
    a: "3 months — 172,000 UZS, 6 months — 232,000 UZS, 12 months — 422,000 UZS. The annual plan works out at ≈35,167 UZS per month.",
  },
  {
    q: "Can I get a bonus for inviting friends?",
    a: "Yes. Invite friends — for every friend who makes a purchase, you get bonuses and discounts. No limits.",
  },
  {
    q: "Is the subscription real and official?",
    a: "Yes, you receive a full official Telegram Premium subscription: no ads, files up to 4 GB, fast downloads, transcription, Premium stickers and all features.",
  },
];

const FAQS_MAP = { uz: FAQS_UZ, ru: FAQS_RU, en: FAQS_EN };

const TITLE: Record<string, string> = {
  uz: "So'raladigan savollar",
  ru: "Частые вопросы",
  en: "Frequently asked questions",
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { lang, tr } = useLang();
  const FAQS = FAQS_MAP[lang] ?? FAQS_UZ;

  return (
    <section id="faq" className="scroll-mt-20 border-b-2 border-foreground py-20 sm:py-28">
      <div className="container-x">
        <span className="eyebrow reveal-item">
          <span className="eyebrow-dot" />
          {tr.nav.faq}
        </span>
        <h2 className="h2-section reveal-item mt-6">{TITLE[lang] ?? TITLE.uz}</h2>

        <div className="reveal-item mt-12 border-2 border-foreground bg-card">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={i > 0 ? "border-t-2 border-foreground" : ""}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-muted sm:px-6"
                >
                  <span className="font-clash text-base font-bold uppercase tracking-tight sm:text-lg">
                    {item.q}
                  </span>
                  {/* + ikonkasi rotate-45 bilan × ga aylanadi */}
                  <PlusIcon
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {/* grid-rows-[0fr] → [1fr]: balandlikni JS bilan o'lchamasdan silliq ochilish */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t-2 border-border-soft px-5 py-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          {tr.faq.noAnswer}{" "}
          <a
            href={SITE.botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-primary underline underline-offset-4"
          >
            {tr.faq.writeBot} @{SITE.botUsername}
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
