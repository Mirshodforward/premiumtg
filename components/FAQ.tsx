"use client";

import { useState } from "react";
import { ChevronIcon, TelegramIcon } from "./icons";
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
    a: "3 oy — 172 000 so'm, 6 oy — 232 000 so'm, 12 oy — 422 000 so'm.",
  },
  {
    q: "Do'stlarni taklif qilib bonus olsa bo'ladimi?",
    a: "Ha. Do'stlaringizni taklif qiling — har bir sotib olgan do'stingiz uchun bonus va chegirmalar olasiz. Cheklov yo'q.",
  },
  {
    q: "Obuna haqiqiy va rasmiymi?",
    a: "Ha, siz to'liq rasmiy Telegram Premium obunasini olasiz: reklamasiz, 4 GB gacha fayl, tezkor yuklash, premium stikerlar va barcha imkoniyatlar.",
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
    a: "3 месяца — 172 000 сум, 6 месяцев — 232 000 сум, 12 месяцев — 422 000 сум.",
  },
  {
    q: "Можно ли получить бонус за приглашение друзей?",
    a: "Да. Приглашайте друзей — за каждого купившего друга вы получаете бонусы и скидки. Без ограничений.",
  },
  {
    q: "Подписка настоящая и официальная?",
    a: "Да, вы получаете полноценную официальную подписку Telegram Premium: без рекламы, файлы до 4 ГБ, быстрая загрузка, Premium-стикеры и все возможности.",
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
    a: "3 months — 172,000 UZS, 6 months — 232,000 UZS, 12 months — 422,000 UZS.",
  },
  {
    q: "Can I get a bonus for inviting friends?",
    a: "Yes. Invite friends — for every friend who makes a purchase, you get bonuses and discounts. No limits.",
  },
  {
    q: "Is the subscription real and official?",
    a: "Yes, you receive a full official Telegram Premium subscription: no ads, files up to 4 GB, fast downloads, Premium stickers and all features.",
  },
];

const FAQS_MAP = { uz: FAQS_UZ, ru: FAQS_RU, en: FAQS_EN };

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { lang, tr } = useLang();
  const FAQS = FAQS_MAP[lang];

  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip mx-auto">{tr.nav.faq}</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {lang === "ru"
              ? "Часто задаваемые вопросы"
              : lang === "en"
              ? "Frequently Asked Questions"
              : "Ko'p so'raladigan savollar"}
          </h2>
          <p className="mt-3 text-tg-100/75">
            {tr.faq.noAnswer}{" "}
            <a
              href={SITE.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tg-300 hover:text-tg-200 underline underline-offset-2"
            >
              {tr.faq.writeBot}
            </a>
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`card overflow-hidden transition-colors ${
                  isOpen ? "border-tg-400/40 bg-white/[0.05]" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-tg-50">{item.q}</span>
                  <ChevronIcon
                    className={`h-5 w-5 shrink-0 text-tg-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-tg-100/75">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-8 flex justify-center">
          <a
            href={SITE.botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-tg-400/30 bg-tg-500/10 px-5 py-3 text-sm font-semibold text-tg-200 transition-colors hover:border-tg-400/50 hover:bg-tg-500/20"
          >
            <TelegramIcon className="h-4 w-4" />
            {tr.faq.writeBot} @{SITE.botUsername}
          </a>
        </div>
      </div>
    </section>
  );
}
