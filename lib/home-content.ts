import type { Lang } from "./translations";
export const HOME_FAQ: Record<Lang, { question: string; answer: string }[]> = {
  uz: [
    {
      question: "O‘zbekistonda Telegram Premium qanday olinadi?",
      answer:
        "Premiumtg botini oching, 3, 6 yoki 12 oylik paketni va qabul qiluvchining username’ini tanlang. Botda mavjud to‘lov usulida hisobni to‘lang va buyurtma holatini tekshiring. Yakuniy narx va yetkazish muddati botda ko‘rsatiladi.",
    },
    {
      question: "Telegram Premium qancha turadi?",
      answer:
        "Saytdagi tariflar: 3 oy — 172 000 so‘m, 6 oy — 232 000 so‘m, 12 oy — 422 000 so‘m. 12 oylik paket oyiga taxminan 35 167 so‘mga teng; to‘lov butun muddat uchun qilinadi. Xariddan oldin botdagi yakuniy summani tekshiring.",
    },
    {
      question: "Click, Payme, Paynet yoki Uzum Bank bilan to‘lasa bo‘ladimi?",
      answer:
        "Bu buyurtma uchun botda taklif qilingan usullarga bog‘liq. Click yoki Payme hisobi, Paynet xizmati va Uzum Bank kartasi bir xil to‘lov yo‘li emas. Botdagi joriy ko‘rsatmaga amal qiling; kerakli usul ko‘rinmasa, to‘lovdan oldin yordam xizmatiga yozing.",
    },
    {
      question: "Premium olish uchun Telegram parolini berish kerakmi?",
      answer:
        "Username orqali sovg‘a obunasini olishda Telegram paroli, login SMS-kodi yoki QR orqali akkauntga kirish talab qilinmaydi. Qabul qiluvchining username’ini diqqat bilan tekshiring.",
    },
    {
      question: "Pul yechildi, Premium kelmadi. Nima qilaman?",
      answer:
        "Avval to‘lov va botdagi buyurtma holatini tekshiring. Qayta to‘lashga shoshilmang. Chek, buyurtma raqami va username bilan @StarsPaymeeSupport yordam xizmatiga murojaat qiling; maxfiy kodlarni yubormang.",
    },
    {
      question: "Boshqa odamga Telegram Premium sovg‘a qilsam bo‘ladimi?",
      answer:
        "Ha, buyurtmada Premium oladigan odamning username’ini kiriting. Telegram sovg‘a obunalari 3, 6 va 12 oylik variantlarda mavjud. To‘lashdan oldin qabul qiluvchi va muddatni tekshiring.",
    },
  ],
  ru: [
    {
      question: "Как купить Telegram Premium в Узбекистане?",
      answer:
        "Откройте бот Premiumtg, выберите срок 3, 6 или 12 месяцев и username получателя. Используйте доступный в боте способ оплаты. Итоговая цена и срок доставки указаны в заказе.",
    },
    {
      question: "Сколько стоит Premium?",
      answer:
        "Цены на сайте: 3 месяца — 172 000 сум, 6 месяцев — 232 000 сум, 12 месяцев — 422 000 сум. Оплата производится за весь срок. Перед покупкой проверьте итоговую сумму в боте.",
    },
    {
      question: "Можно оплатить через Click, Payme, Paynet или Uzum Bank?",
      answer:
        "Доступность зависит от способов оплаты в текущем заказе. Счёт Click/Payme, сервис Paynet и карта Uzum Bank — разные способы. Если нужный вариант отсутствует, обратитесь в поддержку до оплаты.",
    },
    {
      question: "Нужен пароль Telegram?",
      answer:
        "Для подарочной подписки по username пароль, код входа и QR-авторизация не нужны. Внимательно проверьте username получателя.",
    },
    {
      question: "Деньги списаны, Premium не пришёл. Что делать?",
      answer:
        "Проверьте статус платежа и заказа. Не спешите платить повторно. Отправьте чек, номер заказа и username в @StarsPaymeeSupport, без секретных кодов.",
    },
    {
      question: "Можно подарить Premium?",
      answer:
        "Да. Укажите username получателя и проверьте срок перед оплатой. Подарочные подписки Telegram доступны на 3, 6 и 12 месяцев.",
    },
  ],
  en: [
    {
      question: "How do I buy Telegram Premium in Uzbekistan?",
      answer:
        "Open the Premiumtg bot, choose 3, 6 or 12 months and the recipient’s username. Pay using an available method in your order. Confirm the final price and delivery time in the bot.",
    },
    {
      question: "How much does Premium cost?",
      answer:
        "Listed prices: 3 months — UZS 172,000, 6 months — UZS 232,000, 12 months — UZS 422,000. The full term is paid upfront. Check the final price in the bot before paying.",
    },
    {
      question: "Can I use Click, Payme, Paynet or Uzum Bank?",
      answer:
        "Availability depends on your order. Click/Payme invoices, Paynet services and Uzum Bank cards are different payment routes. Contact support before paying if your preferred method is missing.",
    },
    {
      question: "Do I need to share my Telegram password?",
      answer:
        "A gift subscription sent to a username does not require your Telegram password, login code or QR sign-in. Check the recipient carefully.",
    },
    {
      question: "I paid but Premium has not arrived. What now?",
      answer:
        "Check the payment and order status before paying again. Contact @StarsPaymeeSupport with the receipt, order number and username. Never send secret codes.",
    },
    {
      question: "Can I gift Premium to someone else?",
      answer:
        "Yes. Enter the recipient’s username and check the subscription term before paying. Telegram gift subscriptions are available for 3, 6 or 12 months.",
    },
  ],
};
