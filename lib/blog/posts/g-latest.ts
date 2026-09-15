import type { BlogPost } from "../types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";
const reviewed = "2026-09-14";
export const PAYMENT_SOURCES = [
  {
    title: "Telegram Premium FAQ — obuna va to‘lov usullari",
    url: "https://telegram.org/faq_premium",
  },
  {
    title: "Click — xizmatlar uchun tariflar",
    url: "https://click.uz/uz/tarifs",
  },
  {
    title: "Payme — to‘lovlar, kartalar va cheklar",
    url: "https://help.payme.uz/uz/",
  },
  {
    title: "Paynet — xizmatlar va ofertalar",
    url: "https://paynet.uz/uz/service-offers",
  },
  {
    title: "Uzum Bank — rasmiy hujjatlar va tariflar",
    url: "https://www.uzumbank.uz/en/documents/",
  },
];
const priceTable = PREMIUM_PLANS.map(
  (p) =>
    `| ${p.months} oy | ${formatSom(p.price)} | ≈ ${formatSom(p.perMonth!)} |`,
).join("\n");
export const POSTS_LATEST: BlogPost[] = [
  {
    slug: "telegram-premium-ozbekistonda-tolov-usullari",
    date: reviewed,
    reviewed,
    category: "xarid",
    priority: 0.9,
    featured: true,
    title: {
      uz: "O‘zbekistonda Telegram Premium: Click, Payme, Paynet va Uzum Bank orqali to‘lov",
      ru: "Telegram Premium в Узбекистане: оплата через Click, Payme, Paynet и Uzum Bank",
    },
    excerpt: {
      uz: "Premium uchun avval botda buyurtma yarating, so‘ng unda mavjud to‘lov usulini tanlang. Click, Payme, Paynet va Uzum Bank bo‘yicha qadamlar, komissiya va chekni tekshirish.",
      ru: "Создайте заказ в боте и выберите доступный способ оплаты. Разбираем Click, Payme, Paynet и Uzum Bank, итоговую сумму, комиссию и проверку чека.",
    },
    keywords: [
      "telegram premium sotib olish",
      "telegram premium ozbekistonda",
      "telegram premium click orqali",
      "telegram premium payme orqali",
      "telegram premium paynet",
      "telegram premium uzum bank",
      "tg premium uzcard humo",
      "телеграм премиум купить узбекистан",
    ],
    related: [
      "telegram-premium-uzum-bank-orqali",
      "telegram-premium-tolov-xatolari",
      "telegram-premium-3-6-12-oy-qaysi-paket",
    ],
    sources: PAYMENT_SOURCES,
    content: {
      uz: `## Premium xaridi qayerda boshlanadi?

Premiumtg sayti tariflar va qo‘llanmalarni ko‘rsatadi. Buyurtma [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) orqali davom etadi. Saytning o‘zida karta rekvizitlarini kiritish yoki Telegram akkauntiga kirish formasi yo‘q. Botni ochgach, uning username’ini tekshiring: o‘xshash yozilgan boshqa botga adashmang.

Muhim farq bor: Telegram Premium — obuna, Click, Payme, Paynet va Uzum Bank esa to‘lash uchun foydalaniladigan xizmat yoki bank. Ilovaning o‘zida «Premium» nomli tarif borligi Telegram obunasi ham kirishini anglatmaydi. Xarid hujjatida aynan Telegram Premium, uning muddati va qabul qiluvchi yozilgan bo‘lishi kerak.

## Xariddan oldin 5 narsani tayyorlang

1. Premium oladigan akkauntning aniq @username manzili. Uni profil sozlamalaridan nusxalang.
2. Kerakli muddat: 3, 6 yoki 12 oy. Bir martalik to‘lov butun muddatni qoplaydi.
3. To‘lov ilovasi yoki mos karta. Kartada yakuniy summa uchun yetarli mablag‘ bo‘lsin.
4. Botdagi buyurtma raqami va ko‘rsatilgan yetkazish sharti.
5. Muammo bo‘lsa murojaat qilinadigan yordam manzili: [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport).

Username orqali sovg‘a obunasida Telegram login kodi va paroli kerak bo‘lmaydi. Bank to‘lovini tasdiqlash kodi esa faqat bank yoki to‘lov xizmatining tekshirilgan oynasiga kiritiladi; operatorga yuborilmaydi.

## To‘lov usullarining farqi

| Usul | Qachon foydalaniladi? | Tasdiqlashdan oldin nima tekshiriladi? |
| --- | --- | --- |
| Click | Buyurtmada Click hisobi yoki ushbu usul ko‘rsatilsa | Qabul qiluvchi, buyurtma va yakuniy summa |
| Payme | Botdagi buyurtma Payme orqali to‘lashni taklif qilsa | Hisob ma’lumoti, tanlangan karta va chek |
| Paynet | Kerakli xizmat, hisob yoki rekvizit ko‘rsatilsa | Xizmat nomi, identifikator va komissiya |
| Uzum Bank | Buyurtmada Uzum Bank yo‘li yoki mos karta to‘lovi mavjud bo‘lsa | Operatsiya turi, karta mosligi, oluvchi va jami summa |

Bu jadval barcha usullar har doim ishlashiga kafolat bermaydi. Premiumtg botining joriy to‘lov menyusi bu loyiha ichidan boshqarilmaydi. Kerakli variant yo‘q bo‘lsa, buyurtmani boshqa hisobga o‘zboshimchalik bilan to‘lamang; avval yordam xizmatidan aniqlashtiring.

## Click orqali Telegram Premium olish

Botda paket va username tanlang. Agar buyurtmada Click taklif qilinsa, shu buyurtmaning to‘lov havolasi yoki ko‘rsatmasidan foydalaning. Click oynasida ko‘rsatilgan xizmat nomi va summani botdagi ma’lumot bilan solishtiring. Muddati o‘tgan hisobni qayta ishlatish o‘rniga buyurtma holatini tekshiring.

Click tariflarida odatiy mahsulot va xizmat to‘lovi bilan kartadan kartaga o‘tkazma alohida ko‘rsatilgan. Masalan, odatiy xizmat to‘lovlari uchun 0% ko‘rsatilishi mumkin, ammo istisnolar bor; karta o‘tkazmasiga esa boshqa tarif qo‘llanadi. Shuning uchun «Click orqali» degan jumlani «albatta komissiyasiz» deb tushunmang. Tasdiqlash oynasidagi jami summani o‘qing. [Click tariflari](https://click.uz/uz/tarifs).

To‘lovdan keyin chekni saqlang va botga qayting. Batafsil: [Click orqali Premium yo‘riqnomasi](/blog/telegram-premium-click-orqali).

## Payme orqali Telegram Premium olish

Buyurtmada Payme mavjud bo‘lsa, shu hisobni oching va to‘lov uchun kartani tanlang. Agar bir nechta karta ulangan bo‘lsa, keraklisini tanlaganingizga ishonch hosil qiling. Faqat ekranda muvaffaqiyatli to‘lov qayd etilgandan keyin chekni saqlang.

Payme yordam markazida to‘lov cheklari monitoringda saqlanishi va ularni alohida saqlab olish mumkinligi tushuntiriladi. Premium bo‘yicha murojaat qilganingizda chekdagi tranzaksiya ma’lumoti buyurtmani aniqlashga yordam beradi. [Payme yordam markazi](https://help.payme.uz/uz/).

Payme ochilgani to‘lov bajarilganini anglatmaydi. Ilova tasdiqlashni kutayotgan bo‘lsa, buyurtma hali to‘lanmagan bo‘lishi mumkin. Batafsil: [Payme orqali Premium](/blog/telegram-premium-payme-orqali).

## Paynet orqali Telegram Premium olish

Paynet ilovasi, to‘lov punkti va elektron hamyon bir xil xizmat emas. Avval bot ko‘rsatmasida aynan qaysi xizmat yoki hisob orqali to‘lash kerakligini aniqlang. Xizmat identifikatori va qabul qiluvchi tushunarli bo‘lmasa, pul kiritmang.

Paynet punktida to‘lashni rejalashtirsangiz, operatorga kerakli xizmat rekvizitlarini ko‘rsating va ushbu to‘lov aynan o‘sha punktda qabul qilinishini so‘rang. Naqd pul bilan istalgan hamyonni to‘ldirish avtomatik ravishda Premium buyurtmasini to‘lamaydi. Chekda sizga kerakli operatsiya qayd etilganini tekshiring.

Bu qo‘llanma «barcha Paynet kassalari Premium sotadi» yoki «karta umuman kerak emas» degan da’voni bermaydi. Mavjud yo‘lni sotuvchi hamda Paynet shartlari belgilaydi. [Paynet ofertalari](https://paynet.uz/uz/service-offers). Batafsil: [Paynet bo‘yicha qo‘llanma](/blog/telegram-premium-paynet).

## Uzum Bank orqali Telegram Premium olish

Uzum Bank ilovasi orqali o‘tkazma qilish va Uzum Bank chiqargan kartani onlayn to‘lov formasida ishlatish — ikki xil holat. Botdagi buyurtmada qaysi yo‘l berilgan bo‘lsa, o‘sha tartibga amal qiling. Karta raqami orqali to‘lash ko‘rsatilgan bo‘lsa, karta turi va onlayn to‘lovga ruxsat mosligini bankdan tekshirish kerak bo‘lishi mumkin.

Agar bot faqat boshqa xizmat hisobini ko‘rsatsa, Uzum Bank ilovasidagi oddiy o‘tkazma uni avtomatik yopadi deb hisoblamang. Botda Uzum Bank tugmasi borligi yoki bank ichida tayyor Telegram Premium xizmati mavjudligi bu maqolada tasdiqlanmagan. [Uzum Bank hujjatlari](https://www.uzumbank.uz/en/documents/) orqali amaldagi karta shartlarini tekshiring.

Uzum Bank kartasi bilan barcha xalqaro to‘lovlar albatta o‘tadi degan xulosa ham to‘g‘ri emas. Mavjud usulni tanlashdan oldin [Uzum Bank orqali Premium qo‘llanmasini](/blog/telegram-premium-uzum-bank-orqali) o‘qing.

## Premium qancha turadi?

Quyidagi narxlar Premiumtg saytining tarif konfiguratsiyasidan olinadi. Ular botning jonli narxi tekshirilganini anglatmaydi. Xarid paytidagi yakuniy summani botdan tasdiqlang.

| Muddat | To‘liq narx | Oyiga hisoblaganda |
| --- | --- | --- |
${priceTable}

Oyiga hisoblangan raqam taqqoslash uchun: bu alohida oylik yechim yoki bo‘lib to‘lash emas. 12 oylik paketni olsangiz, jami 422 000 so‘m bir marta to‘lanadi. Uch oylik paketni to‘rt marta olish bilan solishtirganda farq 266 000 so‘m; bu amaldagi sayt narxlaridan hisoblangan, doimiy chegirma va’dasi emas.

## To‘lov o‘tdi, lekin Premium yoqilmadi

1. To‘lov ilovasida operatsiya muvaffaqiyatli ekanini tekshiring. «Kutilmoqda» va «Bajarildi» bir xil holat emas.
2. Botdagi buyurtma va chek summasi mosligini solishtiring.
3. Qabul qiluvchining username’ini qayta tekshiring.
4. Telegram sozlamalaridagi Premium bo‘limini oching. Faqat profil bezagiga qarab xulosa qilmang.
5. Botda ko‘rsatilgan muddat o‘tgan bo‘lsa, chek va buyurtma raqami bilan yordamga yozing.

Bir xil buyurtma uchun qayta pul yuborishga shoshilmang. Ikkinchi to‘lov muammoni bartaraf etmasdan, ikki operatsiya hosil qilishi mumkin. Batafsil: [to‘lov xatolarini tekshirish](/blog/telegram-premium-tolov-xatolari).

## Ko‘p so‘raladigan savollar

### Visa kartasiz Premium olsa bo‘ladimi?

Sotuvchi mahalliy to‘lovni taklif qilsa, mos mahalliy usuldan foydalanish mumkin. Bu Telegram’ning har bir rasmiy to‘lov oynasi barcha mahalliy kartalarni qabul qiladi degani emas.

### To‘lov qiluvchi va Premium oluvchi bir odam bo‘lishi shartmi?

Sovg‘a buyurtmasida Premium boshqa username’ga yuborilishi mumkin. To‘lovdan oldin aynan kim olishini tekshiring.

### Click yoki Payme obunasi Telegram Premiumni ham beradimi?

Bunday xulosani faqat mahsulot nomiga qarab chiqarmang. Paket shartlarida Telegram Premium alohida ko‘rsatilgan bo‘lishi kerak.

### Pulni qaytarish sharti qanday?

Bu sotuvchi shartlari, buyurtma holati va to‘lov turiga bog‘liq. Xariddan oldin shartlarni o‘qing; muammo bo‘lsa buyurtma tafsilotlari bilan yordamga murojaat qiling. Avtomatik yoki darhol qaytarish bu maqolada va’da qilinmaydi.`,
      ru: `## Где начать покупку?

Откройте [бот Premiumtg](https://t.me/premiumtg_uzbot), выберите срок подписки и username получателя. Сайт показывает тарифы и инструкции; заказ оформляется в боте. Для подарочной подписки не нужны пароль Telegram, код входа или QR-авторизация.

## Как выбрать способ оплаты?

| Способ | Что проверить |
| --- | --- |
| Click | Доступен ли счёт Click в заказе, совпадают ли получатель и сумма |
| Payme | Правильный ли счёт, карта и статус платежа |
| Paynet | Точный сервис, идентификатор и возможность оплаты в приложении или пункте |
| Uzum Bank | Предлагается ли этот способ, идёт ли речь о карте или переводе |

Используйте только способ, указанный в вашем заказе. Прямой перевод на карту не обязательно закрывает счёт другого платёжного сервиса. Если нужного варианта нет, сначала уточните его у [поддержки](https://t.me/StarsPaymeeSupport).

## Комиссия и чек

Перед подтверждением сравните срок, username, получателя и итоговую сумму. Сохраните чек и номер заказа. Тарифы оплаты услуг и перевода между картами могут различаться; нулевая комиссия не гарантируется.

## Uzum Bank и Paynet

Карта Uzum Bank и перевод через приложение банка — разные операции. Наличие карты не гарантирует, что любой международный платёж пройдёт. Наличие пункта Paynet также не означает, что он принимает именно ваш заказ Premium. Не пополняйте произвольный кошелёк без инструкции продавца.

## Если Premium не пришёл

Проверьте статус платежа и заказа, username и подписку в настройках Telegram. Не платите повторно, пока не выяснили судьбу первой операции. Направьте чек и номер заказа в поддержку без секретных кодов. Подробности: [ошибки оплаты](/blog/telegram-premium-tolov-xatolari) и [Uzum Bank](/blog/telegram-premium-uzum-bank-orqali).

## Цены

На сайте: 3 месяца — 172 000 сум, 6 месяцев — 232 000 сум, 12 месяцев — 422 000 сум. Оплата за весь срок. Эти данные взяты из конфигурации сайта, а не из проверки живого бота. Перед оплатой подтвердите актуальную сумму и условия доставки в заказе.`,
    },
  },
  {
    slug: "telegram-premium-uzum-bank-orqali",
    date: reviewed,
    reviewed,
    category: "xarid",
    priority: 0.85,
    featured: true,
    title: {
      uz: "Uzum Bank orqali Telegram Premium olish: karta va to‘lov yo‘riqnomasi",
      ru: "Telegram Premium через Uzum Bank: карта, перевод и проверка оплаты",
    },
    excerpt: {
      uz: "Uzum Bank kartasi va ilovadagi o‘tkazma farq qiladi. Premium buyurtmasida mos usul mavjudligini, oluvchi va yakuniy summani tekshiring; qadamlar shu qo‘llanmada.",
      ru: "Карта Uzum Bank и перевод через приложение — разные способы. Проверьте доступность в заказе, получателя, сумму и статус платежа.",
    },
    keywords: [
      "telegram premium uzum bank",
      "uzum bank orqali premium olish",
      "uzum karta telegram premium",
      "uzum visa premium",
      "купить telegram premium uzum bank",
    ],
    related: [
      "telegram-premium-ozbekistonda-tolov-usullari",
      "telegram-premium-tolov-xatolari",
      "telegram-premium-uzcard-humo",
    ],
    sources: [PAYMENT_SOURCES[4]],
    content: {
      uz: `## Uzum Bank bilan Premium sotib olish mumkinmi?

Bu savolning javobi kartangiz borligiga emas, **buyurtmadagi to‘lov yo‘liga** bog‘liq. Premiumtg botida Uzum Bank orqali to‘lash ko‘rsatilsa, o‘sha ko‘rsatmadan foydalaning. Aks holda mos karta to‘lovi mavjudligini yoki boshqa mahalliy usulni yordam xizmatidan aniqlang.

Uzum Bank nomi yozilgan karta istalgan saytda ishlaydi deb bo‘lmaydi. Karta turi, tanlangan provayder, limit va onlayn to‘lov ruxsatlari natijaga ta’sir qilishi mumkin. Bankning [rasmiy hujjatlari](https://www.uzumbank.uz/en/documents/) amaldagi shartlarni tekshirish uchun manbadir. Bu manba Premiumtg bilan bank integratsiyasini tasdiqlamaydi.

## Uch xil holatni ajrating

| Holat | Amal |
| --- | --- |
| Botda Uzum Bank usuli bor | Joriy buyurtmaga tegishli ko‘rsatmani oching |
| Karta orqali to‘lov formasi bor | Karta turi qo‘llab-quvvatlanishini tekshiring |
| Faqat boshqa servis hisobi bor | Uni oddiy Uzum o‘tkazmasi bilan almashtirmang |

## Xarid qilish ketma-ketligi

1. [Premiumtg botini](https://t.me/premiumtg_uzbot) oching va username’ini tekshiring.
2. Premium muddati va qabul qiluvchining @username manzilini tanlang.
3. Mavjud to‘lov usullarini ko‘ring. Uzum Bank yo‘li berilgan bo‘lsa, buyurtmadagi rekvizitlarga amal qiling.
4. Qabul qiluvchi, summa va mumkin bo‘lgan komissiyani tekshiring.
5. Bankning tekshirilgan to‘lov oynasida operatsiyani tasdiqlang. Telegram login kodini bermang.
6. Chekni saqlang, botga qayting va buyurtma holatini kuzating.

## Uzum Bank ilovasida tayyor Premium tugmasi bormi?

Ushbu qo‘llanma bank ilovasida alohida Telegram Premium tugmasi mavjudligini tasdiqlamaydi. Ilova bo‘limlari o‘zgarishi mumkin. Bankdagi xizmatni sotuvchining botidagi usul bilan adashtirmang. Aniq yo‘l ko‘rsatilmagan bo‘lsa, [Premiumtg yordamiga](https://t.me/StarsPaymeeSupport) yozing.

## To‘lov rad etilsa nima qilinadi?

Avval operatsiya haqiqatan rad etilganmi yoki hali kutilmoqdami, tekshiring. Balans, limit va karta mosligini ko‘rib chiqing. Pul yechilgan bo‘lsa, yana to‘lashdan oldin chek va buyurtma raqami bilan yordamga murojaat qiling.

SMS kelmasligi har doim Premium xizmatidagi nosozlik emas: to‘lov tasdiqlashi bank tomonida ham bo‘lishi mumkin. Bankning rasmiy yordam kanalidan foydalaning. Shaxsiy yozishmada karta PIN-kodi yoki Telegram parolini yubormang.

## Narx va boshqa usullar

Saytdagi 3, 6 va 12 oylik [tariflarni](/#narxlar) solishtiring. Bank komissiyasi bo‘lsa, uni paket narxidan alohida ko‘ring. Click, Payme yoki Paynet mosroq bo‘lsa, [to‘lov usullarini taqqoslash](/blog/telegram-premium-ozbekistonda-tolov-usullari) maqolasini oching.`,
      ru: `## Карта и перевод — разные способы

Наличие карты Uzum Bank не гарантирует оплату любого счёта. Проверьте, какой путь предлагается в заказе Premium: отдельный способ Uzum Bank, карточная форма или другой сервис.

## Порядок покупки

1. Откройте [Premiumtg](https://t.me/premiumtg_uzbot), выберите срок и username.
2. Используйте доступный в заказе способ. Если подходящего нет, уточните его у поддержки.
3. Проверьте получателя, итоговую сумму и комиссию.
4. Подтвердите платёж в проверенном окне банка и сохраните чек.
5. Проверьте заказ и подписку в Telegram.

## Ограничения

Мы не подтверждаем наличие отдельной кнопки Telegram Premium внутри приложения Uzum Bank. Обычный перевод не обязательно оплачивает счёт другого провайдера. Совместимость карты и условия операций уточняйте у банка; [официальные документы](https://www.uzumbank.uz/en/documents/) не подтверждают интеграцию с Premiumtg.

## Если платёж не прошёл

Проверьте статус, баланс и лимиты. Если деньги списаны, не спешите платить снова: обратитесь в поддержку с чеком и номером заказа. [Сравнение способов оплаты](/blog/telegram-premium-ozbekistonda-tolov-usullari).`,
    },
  },
  {
    slug: "telegram-premium-tolov-xatolari",
    date: reviewed,
    reviewed,
    category: "amaliy",
    priority: 0.8,
    title: {
      uz: "Premium to‘lovida xatolik: pul yechildi, chek bor, obuna kelmadi",
      ru: "Ошибка оплаты Premium: деньги списаны, а подписки нет",
    },
    excerpt: {
      uz: "Qayta to‘lashdan oldin chek, buyurtma holati va username’ni solishtiring. Click, Payme, Paynet yoki Uzum Bank to‘lovidagi muammoni tekshirish tartibi.",
      ru: "Перед повторной оплатой сравните чек, статус заказа и username. Порядок проверки проблем при оплате через Click, Payme, Paynet или Uzum Bank.",
    },
    keywords: [
      "telegram premium tolov xatosi",
      "premium pul yechildi kelmadi",
      "click premium xatolik",
      "payme premium tolov",
      "uzum premium otmayapti",
    ],
    related: [
      "telegram-premium-ozbekistonda-tolov-usullari",
      "telegram-premium-kelmadi-nima-qilish",
      "telegram-premium-uzum-bank-orqali",
    ],
    content: {
      uz: `## Avval pul qayerga ketganini aniqlang

«Pul yechildi» va «Premium buyurtmasi to‘landi» ikki alohida holat bo‘lishi mumkin. Masalan, siz hamyonni to‘ldirgan bo‘lishingiz, boshqa hisobni to‘lagan bo‘lishingiz yoki buyurtma hali to‘lov tasdig‘ini kutayotgan bo‘lishi mumkin. Birinchi qadam — chekni ochish.

## 4 ta ma’lumotni solishtiring

| Tekshiruv | Nimani qidirasiz? |
| --- | --- |
| Operatsiya holati | Muvaffaqiyatli, kutilmoqda yoki rad etilgan |
| Qabul qiluvchi | Bot ko‘rsatgan xizmat yoki hisob bilan moslik |
| Summa | Buyurtma narxi va alohida komissiya |
| Username | Premium olishi kerak bo‘lgan akkaunt |

Premium sovg‘asi boshqa odamga bo‘lsa, o‘z akkauntingizda yulduzcha izlash natija bermaydi. Aynan oluvchidan Telegram sozlamalaridagi obuna holatini tekshirishni so‘rang.

## To‘lov hali kutilayotgan bo‘lsa

Bank yoki to‘lov ilovasi «kutilmoqda» holatini ko‘rsatsa, operatsiyani yakunlangan deb hisoblamang. Botdagi yetkazish muddati va to‘lov shartini o‘qing. Bir nechta yangi buyurtma ochib, hammasini ketma-ket to‘lash vaziyatni chalkashtirishi mumkin.

## To‘lov muvaffaqiyatli, buyurtma esa to‘lanmagan

Chekdagi xizmat nomi va buyurtma raqamini tekshiring. Bot ko‘rsatmagan kartaga oddiy o‘tkazma qilgan bo‘lsangiz, bunday operatsiya avtomatik ravishda buyurtma bilan bog‘lanmasligi mumkin. Buni yordam xizmatiga aniq yozing.

## Yordamga nima yuboriladi?

- Buyurtma raqami va Premium muddati.
- Qabul qiluvchining username’i.
- To‘lov sanasi, vaqti va summasi.
- To‘lov usuli hamda chekdagi tranzaksiya raqami.
- Botdagi xatolik matni, agar mavjud bo‘lsa.

Xabarning namunasi: «6 oylik Premium buyurtmam uchun Payme orqali to‘ladim. Buyurtma: …, username: …, summa: …, vaqt: …. Chekda muvaffaqiyatli, botda esa kutilmoqda. Tekshirib bera olasizmi?»

[Premiumtg yordam xizmati](https://t.me/StarsPaymeeSupport) bilan bog‘laning. Karta PIN-kodi, CVV, Telegram login kodi yoki 2FA parolini xabarga qo‘shmang. Chekdagi keraksiz shaxsiy ma’lumotlarni yopishingiz mumkin, lekin operatsiyani topish uchun zarur raqamlar ko‘rinsin.

## Pulni qaytarish yoki qayta buyurtma

Yordam xizmati birinchi operatsiya holatini aniqlamaguncha qayta to‘lashga shoshilmang. Qaytarish imkoniyati sotuvchi shartlari va buyurtma bajarilganiga bog‘liq. Ushbu yo‘riqnoma pulni avtomatik qaytarish va’dasi emas; u muammoni aniqlash tartibidir.

Keyingi xarid uchun [mahalliy to‘lov qo‘llanmasini](/blog/telegram-premium-ozbekistonda-tolov-usullari) o‘qing.`,
      ru: `## Сначала проверьте чек

Списание денег не всегда означает оплату нужного заказа: это может быть пополнение кошелька, другой счёт или ожидающая операция. Сравните статус, получателя, сумму и username с заказом в боте.

## Что сообщить поддержке?

Укажите номер заказа, срок Premium, username, дату, время, сумму, способ оплаты и номер транзакции. Приложите чек. Не отправляйте PIN, CVV, код входа Telegram или пароль 2FA.

Если подписка предназначалась другому человеку, попросите его проверить Premium в настройках. При несовпадении статусов платежа и заказа обратитесь в [поддержку](https://t.me/StarsPaymeeSupport).

## Не торопитесь платить повторно

Дождитесь выяснения статуса первой операции. Возможность возврата зависит от условий продавца и выполнения заказа. Это инструкция по проверке, а не обещание автоматического возврата. [Способы оплаты](/blog/telegram-premium-ozbekistonda-tolov-usullari).`,
    },
  },
  {
    slug: "telegram-2026-avgust-yangiliklari",
    date: reviewed,
    eventDate: "2026-08-25",
    reviewed,
    category: "yangiliklar",
    priority: 0.8,
    featured: true,
    title: {
      uz: "Telegram 2026-yil avgust: kutib olish xabarlari va matn ichidagi tugmalar",
      ru: "Telegram в августе 2026: приветствия и кнопки внутри сообщений",
    },
    excerpt: {
      uz: "25-avgust yangilanishida yangi a’zolar uchun kutib olish xabarlari, matn ichidagi tugmalar, hujjatlar va izohli sovg‘alar e’lon qilindi.",
      ru: "Обновление от 25 августа добавило приветствия для новых участников, кнопки и документы внутри текста, а также подписи к подаркам.",
    },
    keywords: [
      "telegram yangiliklari 2026",
      "telegram avgust yangilanish",
      "telegram welcome messages",
      "telegram xabarda tugma",
    ],
    related: [
      "telegram-premium-rich-text-editor-2026",
      "telegram-ai-editor-2026",
      "telegram-premium-kanal-adminlari-uchun",
    ],
    sources: [
      {
        title:
          "Telegram — Welcome Messages, Buttons in Messages and Signed Gifts, 25 August 2026",
        url: "https://telegram.org/blog/welcome-messages-buttons-TG-13",
      },
    ],
    content: {
      uz: `## Nima yangilandi?

Telegram’ning 25-avgust e’loniga ko‘ra, guruh yoki kanalga qo‘shilgan odamga faqat o‘zi ko‘radigan kutib olish xabari berish mumkin. Matn ichiga tugma va hujjat joylash, marketplace sovg‘asiga izoh qo‘shish ham taqdim etildi.

## Kanal egasi uchun amaliy g‘oya

Kutib olish xabariga qoidalar, muhim bo‘limlar va yordam manzilini kiriting. Yangi a’zoga hammasini bitta uzun postda berish o‘rniga avval boshlash uchun kerakli ma’lumotni yozish qulay.

## Premium kerakmi?

E’londagi barcha yangiliklarni faqat Premium uchun deb hisoblamang. Funksiya shartini rasmiy e’lon va ilovangizdan tekshiring. Boy matn muharriri haqida [alohida sharh](/blog/telegram-premium-rich-text-editor-2026) bor.

Manba: [Telegram’ning avgust e’loni](https://telegram.org/blog/welcome-messages-buttons-TG-13).`,
      ru: `## Кратко об обновлении

Новые участники могут получать персональные приветствия. В сообщения добавляются кнопки и документы, а к подаркам из маркетплейса — подписи.

## Идея для администратора

Разместите в приветствии правила и контакты поддержки. Не считайте все функции исключительно Premium: проверьте условия в [официальном анонсе](https://telegram.org/blog/welcome-messages-buttons-TG-13).`,
    },
  },
  {
    slug: "telegram-premium-rich-text-editor-2026",
    date: reviewed,
    eventDate: "2026-07-14",
    reviewed,
    category: "yangiliklar",
    priority: 0.8,
    featured: true,
    title: {
      uz: "Telegram Premium’da Rich Text Editor: jadval va uzun postlar",
      ru: "Rich Text Editor в Telegram Premium: таблицы и длинные посты",
    },
    excerpt: {
      uz: "14-iyul e’lonida Premium uchun boy matn muharriri taqdim etildi: sarlavha, jadval, ro‘yxat va matn orasidagi media bilan uzun xabarlar tayyorlash mumkin.",
      ru: "В анонсе от 14 июля представлен редактор для Premium: заголовки, таблицы, списки и медиа внутри длинных сообщений.",
    },
    keywords: [
      "telegram premium rich text editor",
      "telegram jadval yuborish",
      "telegram uzun post 2026",
      "telegram communities",
    ],
    related: [
      "telegram-2026-avgust-yangiliklari",
      "telegram-ai-editor-2026",
      "telegram-premium-biznes-uchun",
    ],
    sources: [
      {
        title:
          "Telegram — Rich Text Editor, Communities, Ephemeral Messages, 14 July 2026",
        url: "https://telegram.org/blog/communities-editor-invisible-messages",
      },
    ],
    content: {
      uz: `## Muharrir nima beradi?

Telegram 14-iyulda sarlavha, jadval, ro‘yxat, iqtibos va xabar orasiga media qo‘yishni qo‘llaydigan muharrirni e’lon qildi. E’londa u Premium foydalanuvchilari uchun ekani va bitta xabarda 32 768 tagacha belgi yuborish ko‘rsatilgan.

## Qayerda foydali?

Masalan, kurs dasturini sarlavhalar, dars jadvali va namuna video bilan bitta postga yig‘ish mumkin. Bu bizning foydalanish misolimiz; katta post yuborishdan oldin mobil ekrandagi o‘qilishini tekshiring.

## Communities ham yangilandi

Bir mavzudagi kanal, guruh va botlarni hamjamiyatga birlashtirish ham shu e’londa taqdim etilgan. Bu imkoniyatni muharrirning Premium talabi bilan aralashtirmang.

Manba: [Telegram’ning iyul e’loni](https://telegram.org/blog/communities-editor-invisible-messages).`,
      ru: `## Что появилось?

Редактор поддерживает заголовки, таблицы, списки и медиа внутри текста. В июльском анонсе он доступен пользователям Premium, лимит сообщения — 32 768 символов.

## Пример применения

Оформите программу курса с расписанием и видео в одном посте. Отдельная функция Communities объединяет тематические чаты. Условия смотрите в [анонсе Telegram](https://telegram.org/blog/communities-editor-invisible-messages).`,
    },
  },
  {
    slug: "telegram-ai-editor-2026",
    date: reviewed,
    eventDate: "2026-03-31",
    reviewed,
    category: "yangiliklar",
    priority: 0.75,
    featured: true,
    title: {
      uz: "Telegram AI Editor: xabarni tahrirlash va tarjima qilish",
      ru: "Telegram AI Editor: редактирование и перевод сообщений",
    },
    excerpt: {
      uz: "31-martdagi Telegram yangilanishi AI Editor’ni tanishtirdi. U matnni tuzatish, tarjima va uslubini o‘zgartirishga yordam beradi; yuborishdan oldin natijani o‘qing.",
      ru: "Обновление от 31 марта представило AI Editor для исправления, перевода и изменения стиля текста. Перед отправкой проверяйте результат.",
    },
    keywords: [
      "telegram ai editor",
      "telegram ai tarjima",
      "telegram yangiliklar 2026",
      "telegram xabar tahrirlash",
    ],
    related: [
      "telegram-premium-rich-text-editor-2026",
      "telegram-chat-tarjima-qilish",
      "telegram-2026-avgust-yangiliklari",
    ],
    sources: [
      {
        title: "Telegram — AI Editor, Mighty Polls, Live Photos, 31 March 2026",
        url: "https://telegram.org/blog/ai-editor-mighty-polls-and-more",
      },
    ],
    content: {
      uz: `## AI Editor nima?

Telegram’ning 31-mart e’lonida xabarni tuzatish, tarjima qilish va boshqa uslubda yozishga yordam beruvchi AI Editor taqdim etilgan. Bu tayyor javobni tekshirmasdan yuborish kerak degani emas.

## Ishda qanday qo‘llash mumkin?

Masalan, mijozga yozayotgan qisqa javobingizni tayyorlab, uning imlosini yaxshilang. So‘ng ism, narx, sana va ma’no saqlanganini o‘zingiz tekshiring. Bu tahririyat tavsiyasi: AI natijasi xato bo‘lishi mumkin.

## Funksiya ko‘rinmasa

Telegram’ni rasmiy manbadan yangilang. Ilova versiyasi va foydalanish shartlarini [Telegram e’lonidan](https://telegram.org/blog/ai-editor-mighty-polls-and-more) tekshiring. Premium sotib olish barcha AI limitlari cheksiz bo‘lishini anglatmaydi.

Uzun postlarni bezash uchun [Rich Text Editor sharhini](/blog/telegram-premium-rich-text-editor-2026) o‘qing.`,
      ru: `## Для чего нужен AI Editor?

Он помогает исправлять, переводить и менять стиль сообщений. Перед отправкой проверьте имена, суммы и смысл: AI может ошибаться.

## Если функции нет

Обновите приложение и проверьте условия в [анонсе Telegram](https://telegram.org/blog/ai-editor-mighty-polls-and-more). Premium не следует считать обещанием безлимитного доступа ко всем AI-функциям.`,
    },
  },
];
