import type { BlogPost } from "../types";
import { PAYMENT_SOURCES } from "./g-latest";

/** Preserve established URLs while replacing outdated payment instructions. */
export const POST_UPDATES: Record<string, Partial<BlogPost>> = {};
const methods = [
  {
    slug: "telegram-premium-click-orqali",
    name: "Click",
    source: PAYMENT_SOURCES[1],
    detail:
      "Click hisobi va kartadan kartaga o‘tkazma tariflari bir xil emas. Buyurtmada Click to‘lovi berilgan bo‘lsa, o‘sha hisobdan foydalaning; odatiy karta o‘tkazmasi uni avtomatik yopmasligi mumkin.",
    ru: "Счёт Click и перевод между картами — разные операции. Используйте способ, указанный в заказе; обычный перевод не обязательно закрывает счёт.",
  },
  {
    slug: "telegram-premium-payme-orqali",
    name: "Payme",
    source: PAYMENT_SOURCES[2],
    detail:
      "Payme ochilgani to‘lov bajarilganini anglatmaydi. Hisob va kartani tekshirib, operatsiya muvaffaqiyatli bo‘lganidan keyin chekni saqlang. Muammo bo‘lsa shu chekdagi ma’lumot bilan murojaat qiling.",
    ru: "Открытие Payme ещё не означает успешный платёж. Проверьте счёт и карту, после оплаты сохраните чек. Он поможет найти операцию при обращении в поддержку.",
  },
  {
    slug: "telegram-premium-paynet",
    name: "Paynet",
    source: PAYMENT_SOURCES[3],
    detail:
      "Paynet ilovasi, hamyoni va to‘lov punkti turli xizmatlardir. Naqd pul bilan har qanday balansni to‘ldirish Premium xaridi bo‘lib qolmaydi. Punktda to‘lashdan avval aniq xizmat, rekvizit va komissiyani tekshiring.",
    ru: "Приложение, кошелёк и пункт Paynet — разные сервисы. Пополнение произвольного баланса не является покупкой Premium. Перед оплатой уточните точный сервис, реквизиты и комиссию.",
  },
  {
    slug: "telegram-premium-uzcard-humo",
    name: "Uzcard va Humo",
    source: PAYMENT_SOURCES[2],
    detail:
      "Uzcard va Humo kartasining o‘zi barcha to‘lov oynalariga mos kelishini anglatmaydi. Buyurtmada mahalliy kartaga mos provayderni tanlang. Karta qabul qilinishini tasdiqlashdan oldin tekshiring.",
    ru: "Карта Uzcard или Humo поддерживается не каждым платёжным окном. Выберите доступного в заказе провайдера для местных карт и проверьте совместимость.",
  },
];
for (const m of methods) {
  POST_UPDATES[m.slug] = {
    updated: "2026-09-14",
    reviewed: "2026-09-14",
    sources: [m.source],
    excerpt: {
      uz: `${m.name} bilan to‘lash uchun Premium buyurtmasida shu usul mavjudligini tekshiring. Paket, username va yakuniy summani solishtirib to‘lang, so‘ng chekni saqlang.`,
      ru: `Для оплаты через ${m.name} проверьте доступность способа в заказе. Сравните срок, username и итоговую сумму, затем оплатите и сохраните чек.`,
    },
    content: {
      uz: `## ${m.name} orqali to‘lov qayerda qilinadi?

[Premiumtg botida](https://t.me/premiumtg_uzbot?start=site_premiumtg_blog) buyurtma yarating. Sayt tarif va yo‘riqnomalarni beradi; unda karta yoki Telegram login formasi yo‘q. Botning joriy menyusi bu landing kodidan tekshirilmaydi, shuning uchun kerakli to‘lov usuli ko‘rsatilganiga ishonch hosil qiling.

## Qadamlar

1. 3, 6 yoki 12 oylik muddatni tanlang.
2. Premium oluvchining aniq username’ini kiriting.
3. Buyurtmada ${m.name} usuli mavjud bo‘lsa, uning joriy ko‘rsatmasini oching.
4. To‘lov oluvchi, buyurtma summasi va komissiyani tekshiring.
5. To‘lov xizmatining tekshirilgan oynasida tasdiqlang va chekni saqlang.
6. Botga qaytib buyurtma, Telegram sozlamalarida esa obuna holatini tekshiring.

## Usulning muhim jihati

${m.detail}

To‘lov usullari va tariflar o‘zgarishi mumkin. Tasdiqlash oynasidagi summani asos qiling; 0% komissiya yoki aniq soniyada faollashish bu maqolada va’da qilinmaydi.

## Usul ko‘rinmasa yoki pul yechilib qolsa

Boshqa hisobga mustaqil o‘tkazma qilmang. [Yordam xizmatidan](https://t.me/StarsPaymeeSupport) mos usulni so‘rang. Pul allaqachon yechilgan bo‘lsa, chek va buyurtma raqamini yuboring. Telegram login kodi, QR-kirish yoki parolni berish sovg‘a obunasi uchun kerak emas.

[Click, Payme, Paynet va Uzum Bank taqqoslanishi](/blog/telegram-premium-ozbekistonda-tolov-usullari) hamda [to‘lov xatolari bo‘yicha qo‘llanma](/blog/telegram-premium-tolov-xatolari) qo‘shimcha savollarga yordam beradi.`,
      ru: `## Оплата через ${m.name}

Создайте заказ в [боте Premiumtg](https://t.me/premiumtg_uzbot?start=site_premiumtg_blog), выберите срок и username получателя. На сайте нет формы оплаты или входа в Telegram. Доступность способа проверяйте в текущем заказе.

## Порядок действий

1. Выберите срок 3, 6 или 12 месяцев.
2. Проверьте username.
3. Откройте доступный способ ${m.name} в заказе.
4. Сравните получателя, сумму и комиссию.
5. Подтвердите платёж в проверенном окне сервиса, сохраните чек.
6. Проверьте статус заказа и подписку в настройках Telegram.

## Особенность способа

${m.ru}

Нулевая комиссия и активация за определённое число секунд не гарантируются. Если способ отсутствует, сначала уточните его у поддержки. Если деньги списаны, не спешите платить повторно. Пароль Telegram и код входа для подарочной подписки не нужны.

[Сравнение способов](/blog/telegram-premium-ozbekistonda-tolov-usullari).`,
    },
    related: [
      "telegram-premium-ozbekistonda-tolov-usullari",
      "telegram-premium-tolov-xatolari",
      "telegram-premium-uzum-bank-orqali",
    ],
  };
}
POST_UPDATES["username-orqali-premium-ulash"] = {
  updated: "2026-09-14",
  reviewed: "2026-09-14",
  excerpt: {
    uz: "Premiumtg botida paket va qabul qiluvchining username’ini tanlang, mavjud usulda to‘lang va buyurtma holatini tekshiring. Sovg‘a obunasida Telegram login kodi talab qilinmaydi.",
    ru: "Выберите срок и username в боте Premiumtg, оплатите доступным способом и проверьте заказ. Код входа Telegram для подарочной подписки не требуется.",
  },
  content: {
    uz: `## Username orqali Premium olish tartibi

1. Telegram sozlamalaridan username’ni nusxalang. U profil nomidan farq qiladi.
2. [Premiumtg botini](https://t.me/premiumtg_uzbot?start=site_premiumtg_blog) ochib kerakli muddatni tanlang.
3. Obuna oladigan username va paketni qayta tekshiring.
4. Botdagi mavjud to‘lov usulidan foydalaning.
5. Chekni saqlang va ko‘rsatilgan yetkazish muddati ichida buyurtma holatini kuzating.

## Kod kerakmi?

Sovg‘a obunasini qabul qilish uchun Telegram akkauntiga boshqa odam kirishi kerak emas. Login kodi, parol yoki QR orqali kirishni bermang. To‘lovning tasdiqlash kodi faqat to‘lov xizmatining tekshirilgan oynasiga kiritiladi.

## Nima tekshiriladi?

Saytda ko‘rsatilgan narxlarni botdagi joriy narx bilan solishtiring. Username xato bo‘lsa, to‘lovdan oldin tuzating. Muammo bo‘lsa [yordam xizmatiga](https://t.me/StarsPaymeeSupport) yozing.

[Mahalliy to‘lov yo‘llari](/blog/telegram-premium-ozbekistonda-tolov-usullari).`,
    ru: `## Подключение по username

Скопируйте username в настройках Telegram, откройте [бот](https://t.me/premiumtg_uzbot?start=site_premiumtg_blog), выберите срок и проверьте получателя. Оплатите доступным способом, сохраните чек и проверьте заказ.

Для подарочной подписки не передавайте пароль, код входа или QR-авторизацию. Итоговую цену и срок доставки смотрите в заказе. [Способы оплаты](/blog/telegram-premium-ozbekistonda-tolov-usullari).`,
  },
};
POST_UPDATES["telegram-premium-qachon-faollashadi"] = {
  updated: "2026-09-14",
  reviewed: "2026-09-14",
  excerpt: {
    uz: "Premium yetkazish muddati to‘lov tasdig‘i va buyurtma shartlariga bog‘liq. Aniq muddatni botda tekshiring; to‘lov o‘tgan bo‘lsa-yu, obuna kelmasa, chek bilan yordamga yozing.",
    ru: "Срок зависит от подтверждения платежа и условий заказа. Проверьте его в боте; если оплата прошла, а подписки нет, обратитесь в поддержку с чеком.",
  },
  content: {
    uz: `## Premium qachon keladi?

To‘lovni tasdiqlash va obunani yetkazish alohida bosqichlar. Botdagi buyurtma shartini o‘qing. Bu landing jonli buyurtma holatini ko‘rmaydi va aniq soniyani tasdiqlamaydi.

## Kechiksa nima qilinadi?

Chek, buyurtma raqami va username’ni tekshiring. Ko‘rsatilgan muddat o‘tgan bo‘lsa, [yordam xizmatiga](https://t.me/StarsPaymeeSupport) yozing. Qayta pul yuborishdan oldin birinchi to‘lovni aniqlashtiring.

[To‘lov muammolarini tekshirish](/blog/telegram-premium-tolov-xatolari).`,
    ru: `## Когда придёт Premium?

Подтверждение платежа и доставка — разные этапы. Смотрите срок в заказе: сайт не видит его живой статус и не гарантирует конкретное число секунд.

При задержке проверьте чек, номер заказа и username. Обратитесь в [поддержку](https://t.me/StarsPaymeeSupport), не оплачивая повторно до выяснения статуса.`,
  },
};
POST_UPDATES["premiumtg-uz-ishonchlimi"] = {
  updated: "2026-09-14",
  reviewed: "2026-09-14",
  excerpt: {
    uz: "Xizmatni baholashda tekshiriladigan buyurtma shartlari, to‘lov cheki, yordam manzili va mustaqil fikrlarga qarang. Saytdagi raqamlar o‘z-o‘zidan ishonchlilik isboti emas.",
    ru: "Оценивайте условия заказа, платёжный чек, доступность поддержки и независимые отзывы. Цифры на сайте сами по себе не доказывают надёжность.",
  },
  content: {
    uz: `## Premiumtg haqida nima ma’lum?

Premiumtg — Telegram Premium xaridi uchun botga yo‘naltiradigan mustaqil xizmat. Telegram bilan rasmiy hamkorlik da’vo qilinmaydi. [Tahririyat va manbalar](/about) sahifasi kontent qanday tayyorlanishini tushuntiradi.

## To‘lovdan oldin nimaga qarash kerak?

- Bot username’i sayt ko‘rsatgan @premiumtg_uzbot bilan mos bo‘lsin.
- Muddat, qabul qiluvchi va jami summa buyurtmada aniq yozilsin.
- Yetkazish va qaytarish shartini oldindan o‘qing.
- To‘lov cheki va buyurtma raqamini saqlash imkoni bo‘lsin.
- Mustaqil sharhlarni va ular qachon yozilganini tekshiring.

## Login kodi kerakmi?

Username orqali sovg‘a obunasi uchun akkauntga kirish kerak emas. Telegram login kodi yoki parol so‘ralsa, jarayonni aniqlashtirmasdan davom etmang.

## Qaysi raqamlarga tayanmaslik kerak?

Bu sahifa tasdiqlanmagan mijozlar soni yoki yulduzli reytingni dalil sifatida bermaydi. Xizmatni amaldagi shartlar va tekshirish mumkin bo‘lgan ma’lumotlar bilan baholang.

[To‘lov qo‘llanmasi](/blog/telegram-premium-ozbekistonda-tolov-usullari) · [Yordam](https://t.me/StarsPaymeeSupport).`,
    ru: `## Как оценить сервис?

Premiumtg — независимый сервис. Официальное партнёрство с Telegram не заявляется. Проверьте username бота, срок, получателя, цену, условия доставки и возврата. Сохраните чек и номер заказа, изучите независимые отзывы.

Для подарочной подписки по username не нужен вход в аккаунт. Эта страница не использует неподтверждённые рейтинги или число клиентов как доказательство надёжности.

[О редакции](/about) · [Оплата](/blog/telegram-premium-ozbekistonda-tolov-usullari) · [Поддержка](https://t.me/StarsPaymeeSupport).`,
  },
};
