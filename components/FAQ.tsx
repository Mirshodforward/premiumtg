"use client";

import { useState } from "react";
import { ChevronIcon } from "./icons";

const FAQS = [
  {
    q: "Telegram Premium qancha vaqtda faollashadi?",
    a: "To‘lov amalga oshirilgandan so‘ng obuna atigi 10 soniyada avtomatik faollashadi. Hech qanday kutish yoki operator bilan yozishish shart emas.",
  },
  {
    q: "Akkauntimga kirish (login/parol) berishim kerakmi?",
    a: "Yo‘q. Premium paketlar uchun faqat Telegram username yetarli. Parol, kod yoki akkauntga kirishni umuman so‘ramaymiz — bu eng xavfsiz usul. Faqat “akkauntga kirib berish” xizmatini tanlasangizgina operator yordam beradi.",
  },
  {
    q: "Qaysi to‘lov usullari qabul qilinadi?",
    a: "Click, Payme, Paynet, Uzcard, Humo va istalgan O‘zbekiston bank kartasi orqali to‘lov qilishingiz mumkin.",
  },
  {
    q: "Telegram Premium narxlari qancha?",
    a: "3 oy — 172 000 so‘m, 6 oy — 232 000 so‘m, 12 oy — 422 000 so‘m. Akkauntga kirib berish xizmati: 1 oy — 50 000 so‘m, 1 yil — 300 000 so‘m.",
  },
  {
    q: "Do‘stlarni taklif qilib bonus olsa bo‘ladimi?",
    a: "Ha. Do‘stlaringizni taklif qiling — har bir sotib olgan do‘stingiz uchun bonus va chegirmalar olasiz. Cheklov yo‘q.",
  },
  {
    q: "Obuna haqiqiy va rasmiymi?",
    a: "Ha, siz to‘liq rasmiy Telegram Premium obunasini olasiz: reklamasiz, 2 GB gacha fayl, tezkor yuklash, premium stikerlar va barcha imkoniyatlar.",
  },
  {
    q: "Muammo chiqsa kimga murojaat qilaman?",
    a: "Istalgan vaqtda @StarsPaymeeSupport orqali yozing — qo‘llab-quvvatlash xizmati 24/7 yordam beradi.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip mx-auto">Savol-javob</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ko‘p so‘raladigan savollar
          </h2>
          <p className="mt-3 text-tg-100/75">
            Javobini topmadingizmi? @StarsPaymeeSupport bizga yozing.
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
      </div>
    </section>
  );
}
