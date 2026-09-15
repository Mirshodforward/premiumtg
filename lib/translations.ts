export type Lang = "uz" | "ru" | "en";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export const t = {
  uz: {
    nav: {
      features: "Imkoniyatlar",
      howItWorks: "Qanday ishlaydi",
      pricing: "Narxlar",
      payment: "To'lov",
      bonus: "Bonus",
      faq: "Savol-javob",
      blog: "Blog",
      buy: "Sotib olish",
      buyNow: "Hozir sotib olish",
    },
    hero: {
      badge: "O'zbekistondagi eng tezkor xizmat",
      title: "Telegram Premium",
      highlight: "10 soniyada",
      titleEnd: "avtomatik",
      desc: "Premiumtg — Telegram Premium obunasini eng arzon narxda sotib oling. To'lovdan so'ng obuna avtomatik 10 soniyada faollashadi. Click, Payme, Paynet, Uzcard, Humo — istalgan bank kartasidan to'lang.",
      btnPricing: "Narxlarni ko'rish",
      btnBot: "Botdan sotib olish",
      trust: [
        "Akkauntga kirish shart emas",
        "Faqat username yetarli",
        "10 soniyada faollashadi",
      ],
    },
    cta: {
      title: "Telegram Premiumni hozir ulang",
      desc: "Eng arzon narx, 10 soniyada avtomatik yetkazish. Username yuboring — qolganini biz hal qilamiz.",
      btnPricing: "Paketni tanlash",
      btnBot: "Botdan sotib olish",
    },
    footer: {
      tagline:
        "O'zbekistonda Telegram Premium sotib olishning eng tez, arzon va ishonchli yo'li. To'lovdan so'ng 10 soniyada avtomatik faollashadi.",
      sections: "Bo'limlar",
      contact: "Bog'lanish",
      rights: "Barcha huquqlar himoyalangan.",
      oferta: "Ommaviy oferta",
      trademark:
        "Telegram va Telegram Premium — Telegram FZ-LLC tovar belgilari. Premiumtg mustaqil sotuvchi xizmatidir.",
    },
    blog: {
      title: "Blog",
      subtitle: "Telegram Premium haqida foydali maqolalar",
      readMore: "To'liq o'qish →",
      backToBlog: "← Blogga qaytish",
      btnBot: "Botdan sotib olish",
      minRead: "daq o'qish",
    },
    floating: "Bot orqali olish",
    faq: {
      noAnswer: "Javobini topmadingizmi?",
      writeBot: "Botga yozing",
    },
  },
  ru: {
    nav: {
      features: "Возможности",
      howItWorks: "Как работает",
      pricing: "Цены",
      payment: "Оплата",
      bonus: "Бонус",
      faq: "FAQ",
      blog: "Блог",
      buy: "Купить",
      buyNow: "Купить сейчас",
    },
    hero: {
      badge: "Самый быстрый сервис в Узбекистане",
      title: "Telegram Premium",
      highlight: "за 10 секунд",
      titleEnd: "автоматически",
      desc: "Premiumtg — купите подписку Telegram Premium по самой низкой цене. После оплаты подписка активируется автоматически за 10 секунд. Click, Payme, Paynet, Uzcard, Humo — любая банковская карта.",
      btnPricing: "Смотреть цены",
      btnBot: "Купить через бот",
      trust: ["Без входа в аккаунт", "Только username", "Активация за 10 сек"],
    },
    cta: {
      title: "Подключите Telegram Premium сейчас",
      desc: "Самая низкая цена, автоматическая доставка за 10 секунд. Отправьте username — остальное мы сделаем сами.",
      btnPricing: "Выбрать пакет",
      btnBot: "Купить через бот",
    },
    footer: {
      tagline:
        "Самый быстрый, дешёвый и надёжный способ купить Telegram Premium в Узбекистане. Активация за 10 секунд после оплаты.",
      sections: "Разделы",
      contact: "Контакты",
      rights: "Все права защищены.",
      oferta: "Публичная оферта",
      trademark:
        "Telegram и Telegram Premium — товарные знаки Telegram FZ-LLC. Premiumtg — независимый продавец.",
    },
    blog: {
      title: "Блог",
      subtitle: "Полезные статьи о Telegram Premium",
      readMore: "Читать полностью →",
      backToBlog: "← Назад к блогу",
      btnBot: "Купить через бот",
      minRead: "мин чтения",
    },
    floating: "Купить в боте",
    faq: {
      noAnswer: "Не нашли ответ?",
      writeBot: "Напишите в бот",
    },
  },
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      pricing: "Pricing",
      payment: "Payment",
      bonus: "Bonus",
      faq: "FAQ",
      blog: "Blog",
      buy: "Buy Now",
      buyNow: "Buy Now",
    },
    hero: {
      badge: "Fastest service in Uzbekistan",
      title: "Telegram Premium",
      highlight: "in 10 seconds",
      titleEnd: "automatically",
      desc: "Premiumtg — buy Telegram Premium at the lowest price. After payment, your subscription activates automatically in 10 seconds. Click, Payme, Paynet, Uzcard, Humo — any bank card accepted.",
      btnPricing: "View Pricing",
      btnBot: "Buy via Bot",
      trust: [
        "No account login needed",
        "Username only",
        "Activates in 10 seconds",
      ],
    },
    cta: {
      title: "Get Telegram Premium Right Now",
      desc: "Lowest price, automatic delivery in 10 seconds. Send your username — we'll handle the rest.",
      btnPricing: "Choose a Plan",
      btnBot: "Buy via Bot",
    },
    footer: {
      tagline:
        "The fastest, cheapest and most reliable way to buy Telegram Premium in Uzbekistan. Activates in 10 seconds after payment.",
      sections: "Sections",
      contact: "Contact",
      rights: "All rights reserved.",
      oferta: "Public Offer",
      trademark:
        "Telegram and Telegram Premium are trademarks of Telegram FZ-LLC. Premiumtg is an independent seller.",
    },
    blog: {
      title: "Blog",
      subtitle: "Useful articles about Telegram Premium",
      readMore: "Read More →",
      backToBlog: "← Back to Blog",
      btnBot: "Buy via Bot",
      minRead: "min read",
    },
    floating: "Get via Bot",
    faq: {
      noAnswer: "Didn't find an answer?",
      writeBot: "Write to Bot",
    },
  },
} as const;
