// Avtoblogyoz yasagan maqola (2026-11-04). Niyat: O‘zbekistondagi Telegram foydalanuvchisi Telegram ichidagi Wallet hamyonini qanday ochish va faollashtirishni hamda buning uchun to‘lov yoki boshlang‘ich summa kerak-kerakmasligini «telegram wallet ochish» kabi so‘zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/blockchain-guidelines
//   https://telegram.org/faq
//   https://telegram.org/blog
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-wallet-hamyon-ochish-faollashtirish",
  date: "2026-11-04",
  reviewed: "2026-11-04",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegram Wallet qanday ochiladi va faollashtirish uchun pul kerakmi?", ru: "Как открыть Telegram Wallet и нужно ли платить за активацию?" },
  excerpt: { uz: `Telegram’ning rasmiy sahifalarida Wallet ochish yoki faollashtirish uchun to‘lov yoki boshlang‘ich summa talabi yozilmagan. Amaldagi shartni faqat ilova ekranida tekshiring.`, ru: `На официальных страницах Telegram не сказано, что за открытие или активацию Wallet нужно платить или вносить стартовую сумму. Актуальное условие проверяйте только на экране приложения.` },
  keywords: ["telegram wallet ochish","telegram wallet faollashtirish","telegram hamyon ochish","wallet telegram nima","telegram wallet to'lov kerakmi","ton hamyon ochish","telegram wallet xavfsizmi","как открыть telegram wallet","активация кошелька telegram wallet","кошелек в телеграм как создать","telegram wallet нужно ли пополнять","ton кошелек телеграм"],
  related: ["ton-orqali-telegram-premium","fragment-telegram-premium","telegram-stars-nima","telegram-nft-sovgalar"],
  sources: [{"url":"https://core.telegram.org/bots/blockchain-guidelines","title":"Blockchain Guidelines"},{"url":"https://telegram.org/faq","title":"Telegram FAQ"},{"url":"https://telegram.org/blog","title":"Telegram Blog"}],
  content: {
    uz: `## Telegram Wallet nima va rasmiy manbalarda u qanday tilga olinadi?

Wallet — TON blokcheynidagi kripto hamyon. Telegram’ning mini ilovalar uchun [blokcheyn qoidalarida](https://core.telegram.org/bots/blockchain-guidelines) u asosan TON aktivlarini boshqaradigan hamyonlarga misol sifatida keltiriladi. Shu qatorda Tonkeeper va MyTonWallet ham tilga olinadi.

Nega aynan TON? Xuddi shu qoidalarga ko‘ra, Telegram’dagi kripto mini ilovalar token va blokcheyn aktivlarini yaratish hamda tarqatish uchun faqat TON blokcheynidan foydalanishi kerak. Ya’ni Telegram ichidagi kripto ekotizimi TON atrofida qurilgan.

Bir savolga rasmiy manbada javob topilmadi: Wallet’da kalitlar foydalanuvchining o‘zida saqlanadimi yoki xizmat tomonida. Bu maqolada ham bu tasdiqlanmagan. Javobni ilovaning o‘z shartlari va ogohlantirishlaridan o‘qing — bu hamyonni qanday tiklash mumkinligiga bevosita ta’sir qiladi.

Wallet’ni Premium yoki Stars bilan adashtirmang:

- **Premium** — muddatli obuna. U akkauntga qo‘shimcha imkoniyatlar beradi.
- **Stars** — Telegram ichidagi raqamli valyuta. Mini ilovalar, botlar va sovg‘alar uchun ishlatiladi.
- **Wallet** — blokcheyndagi kripto hamyon.

Stars haqida batafsil: [Telegram Stars nima va nimaga ishlatiladi](/blog/telegram-stars-nima).

## Wallet ochish yoki faollashtirish uchun to‘lov yoki boshlang‘ich summa kerakmi?

Telegram’ning rasmiy sahifalarida Wallet’ni ochish va faollashtirish bo‘yicha yo‘riqnoma topilmadi. To‘lov yoki boshlang‘ich summa talabi ham u yerda yozilmagan.

Internetda va Telegram kanallarida faollashtirish sharti haqida turli da’volar uchraydi. Ularning rasmiy tasdig‘i yo‘q, shuning uchun bu maqolada ular keltirilmaydi.

> Amaliy qoida: biror summa so‘ralsa, shartni ilovaning o‘z ekranida oxirigacha o‘qing. Ekranda yozilmagan talabga pul yubormang.

Wallet’ni «faollashtirib berish», «tasdiqlash» yoki «limitni ochish» uchun pul so‘ragan begona bot yoki odamga to‘lamang. Haqiqiy shart ilova ichida ko‘rinadi, kimningdir shaxsiy xabarida emas.

## Telegram Wallet’ni qanday xavfsiz ochish mumkin?

Quyidagi qadamlar rasmiy yo‘riqnoma emas, chunki u topilmadi. Bu har qanday kripto hamyonni ochishda qo‘llanadigan umumiy xavfsizlik tartibi.

1. Telegram ilovasini rasmiy do‘kondan oxirgi versiyagacha yangilang.
2. Wallet’ni tasodifiy havola yoki reklama orqali emas, ishonchli manbadan oching. Bot profilida username’ni harfma-harf tekshiring: nomi o‘xshash soxta botlar ko‘p.
3. Ilova ko‘rsatgan shartlar, komissiyalar va ogohlantirishlarni o‘qing. Tushunarsiz summa so‘ralsa, to‘xtang.
4. Ilova tiklash so‘zlari yoki maxfiy kod bersa, ularni qog‘ozga yozib, xavfsiz joyda saqlang. Hech kimga yubormang, skrinshot qilib chatlarda yoki «Saqlangan xabarlar»da qoldirmang.
5. Birinchi operatsiyani kichik summa bilan sinab ko‘ring. Hammasi to‘g‘ri ishlasa, keyin kattaroq summa bilan ishlang.
6. Telegram akkauntida ikki bosqichli parolni yoqing. Hamyonga Telegram orqali kirilsa, uning xavfsizligi akkaunt xavfsizligiga ham bog‘liq.

Hamyon ochilgach, mablag‘ qabul qilishdan oldin ikki narsani tekshiring. Birinchisi — hamyon manzili: uni nusxalab yuborganda boshi va oxiridagi belgilarni asl manzil bilan solishtiring. Ikkinchisi — tarmoq: yuboruvchi aynan TON tarmog‘ida o‘tkazayotganiga ishonch hosil qiling. Boshqa tarmoqdan yuborilgan mablag‘ni qaytarish qiyin yoki imkonsiz bo‘lishi mumkin.

> O‘zbekistonda Click, Payme, Paynet yoki Uzum Bank orqali Wallet’ni to‘ldirish mumkinmi — bu maqolada tekshirilmagan. Bunday imkoniyatni ilova ichida yoki to‘lov tizimining rasmiy sahifasida aniqlang.

## Wallet haqida nima tasdiqlangan, nima tasdiqlanmagan?

Wallet haqida gap ko‘p, lekin rasmiy manbada tasdiqlangani kam. Quyidagi jadval ularni ajratib beradi.

| Da’vo | Holati | Manba |
|---|---|---|
| Wallet TON hamyonlari qatorida Tonkeeper va MyTonWallet bilan birga tilga olinadi | Tasdiqlangan | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| Kripto mini ilovalar token va aktivlar uchun faqat TON’dan foydalanadi | Tasdiqlangan | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| Mini ilovalar hamyon bilan faqat TON Connect orqali ishlaydi | Tasdiqlangan | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| Boshqa blokcheyndagi mini ilovalar 2025-yil 21-fevralgacha TON’ga o‘tishi kerak edi | Tasdiqlangan | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| Wallet’ni ochish bo‘yicha foydalanuvchi uchun yo‘riqnoma | Topilmadi | — |
| Ochish yoki faollashtirish uchun to‘lov talabi | Rasmiy sahifalarda yozilmagan | — |
| Kalitlar kimda saqlanishi | Rasmiy ta’rif topilmadi | — |

Jadvaldagi «topilmadi» degani «yolg‘on» degani emas. Bu faqat shuni bildiradi: rasmiy manbada isbot yo‘q, demak unga tayanib pul yubormaslik kerak.

## Wallet’ni mini ilovalarga qanday ulash kerak va TON Connect nima?

Telegram qoidasiga ko‘ra mini ilovalar faqat TON Connect SDK orqali ulangan hamyonlar bilan ishlashi kerak. TON Connect — mini ilova va hamyonni bog‘laydigan standart ulanish usuli.

Amaliy ma’nosi oddiy. Mini ilova hamyonga ulanishni so‘rasa, standart ulanish oynasi chiqishi kerak. Siz faqat ulanishni tasdiqlaysiz yoki rad etasiz. Agar ilova tiklash so‘zlari yoki maxfiy kalitni maydonga qo‘lda kiritishni so‘rasa, bu jiddiy xavf belgisi. Oynani yoping.

Yana bir belgi — tarmoq. Qoidalarga ko‘ra boshqa blokcheynda ishlagan mini ilovalar 2025-yil 21-fevralgacha TON’ga o‘tishi kerak edi. Telegram ichidagi mini ilova sizdan boshqa tarmoq hamyonini so‘rasa, ehtiyot bo‘ling.

Qoidalar sahifasidagi hamyon bo‘limi foydalanuvchi uchun qo‘llanma emas. U asosan hamyon vazifasini bajaradigan mini ilovalar uchun misollar to‘plami. Shuning uchun Wallet’ni ochish tartibini u yerdan qidirish befoyda.

## Nega Wallet haqidagi raqamlar va yangiliklarni tekshirish kerak?

- Wallet bo‘yicha ko‘p ma’lumot rasmiy sahifalardan emas, Telegram kanallaridan tarqaladi. U yerda statistika va shartlar ko‘pincha manbasiz beriladi.
- Bir kanal boshqasidan iqtibos keltiradi va taxmin tezda «yangilik»ka aylanadi.
- Rasmiy manbalar ham doim yangi emas. [Telegram FAQ](https://telegram.org/faq) sahifasining o‘zida unda eskirgan ma’lumot bo‘lishi mumkinligi yozilgan.

Qoida bitta: raqam, to‘lov sharti yoki «bekor qilindi» degan gapni ilova ekrani yoki rasmiy manba bilan solishtiring. Mos kelmasa, ekrandagi ma’lumotga ishoning.

## Premium yoki Stars olish uchun Wallet shartmi?

Yo‘q, Premium olish uchun Wallet ochish shart emas. Kripto orqali Premium olish yo‘llari ham bor, lekin ular hamyon ochish, so‘mni kriptovalyutaga aylantirish va kurs o‘zgarishi bilan bog‘liq. Batafsil: [TON orqali Telegram Premium](/blog/ton-orqali-telegram-premium) va [Fragment orqali Premium](/blog/fragment-telegram-premium).

| Nima kerak | Premiumtg boti | Kripto yo‘li |
|---|---|---|
| Kripto hamyon | Kerak emas | Kerak |
| To‘lov valyutasi | So‘m | Kriptovalyuta |
| To‘lov usuli | Click, Payme, Paynet, Uzum Bank | So‘mni kriptoga aylantirish |
| Akkaunt ma’lumoti | Faqat username | Hamyon va ulanish |
| Kurs tebranishi | Yo‘q, narx so‘mda | Bo‘lishi mumkin |

Premiumtg’da login kodi yoki parol so‘ralmaydi, username yetarli. Obuna 10 soniyada avtomatik faollashadi. Narxlar: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}. Narx va mavjud to‘lov usulini xariddan oldin [@premiumtg_uzbot](https://t.me/premiumtg_uzbot?start=site_premiumtg_blog) botida tekshiring.

Stars ham Wallet bilan bir narsa emas: Stars — Telegram ichki valyutasi, Wallet — blokcheyn hamyoni.

Hamyon kolleksion sovg‘alar bilan ishlashda kerak bo‘lishi mumkin. [Telegram blogida](https://telegram.org/blog) 2025-yil 24-yanvarda kolleksion sovg‘alarni blokcheynga ko‘chirish haqida post e’lon qilingan. Bu mavzu bo‘yicha: [NFT sovg‘alar nima](/blog/telegram-nft-sovgalar).

## Wallet bilan bog‘liq firibgarlikni qanday tanish mumkin?

Quyidagi belgilardan biri ko‘rinsa, to‘xtang va hech narsa yubormang:

- «Faollashtirish to‘lovi»ni shaxsiy kartaga yoki begona hamyonga o‘tkazishni so‘rash.
- Tiklash so‘zlari, login kodi yoki parolni «tekshirish uchun» so‘rash.
- Wallet nomiga o‘xshash, lekin boshqa username’dagi botlar.
- «Hamyon ochsangiz bonus TON beramiz» kabi va’dalar.
- Mini ilovada standart ulanish oynasi o‘rniga kalitni qo‘lda kiritish talabi.
- Shoshiltirish: «taklif bir soatda tugaydi», «hozir faollashtirmasangiz hamyon yopiladi».

Agar kodni yoki tiklash so‘zlarini allaqachon yuborib qo‘ygan bo‘lsangiz, kechiktirmang: Telegram’da faol seanslarni tekshirib, notanishlarini yoping, ikki bosqichli parolni o‘zgartiring va mablag‘ni yangi, xavfsiz hamyonga o‘tkazing.

Telegram’dagi xaridlarda firibgarlardan himoyalanishning umumiy qoidalari alohida maqolada: [firibgarlikdan qanday himoyalanish kerak](/blog/telegram-premium-firibgarlikdan-himoya).

## Ko‘p so‘raladigan savollar

### Telegram Wallet ochish pullikmi?

Telegram’ning rasmiy sahifalarida Wallet ochish uchun haq olinishi yozilmagan. Agar ilova biror summa so‘rasa, shartlarini ekranda o‘qib, keyin qaror qiling.

### Wallet ochganimdan keyin faollashtirish uchun TON yuborishim kerakmi?

Bunday talab rasmiy manbada tasdiqlanmagan. Amaldagi shartni faqat ilova ichida tekshiring va «faollashtirish» uchun begona odam yoki botga pul yubormang.

### Wallet, Tonkeeper va MyTonWallet’dan qaysi birini tanlash kerak?

Telegram qoidalari uchalasini TON hamyonlariga misol sifatida keltiradi, lekin birortasini tavsiya qilmaydi. Qulaylik, tiklash usuli va ilovadagi xavfsizlik ogohlantirishlarini solishtirib tanlang.

### Wallet’ga Click yoki Payme orqali pul tushirsa bo‘ladimi?

Bu imkoniyat maqolada tekshirilmagan. Uni ilova ichidagi to‘ldirish bo‘limida yoki to‘lov tizimining rasmiy sahifasida aniqlang.

### Telegram Premium olish uchun Wallet ochish shartmi?

Shart emas. Premiumtg botida username kiritib, so‘mda Click, Payme, Paynet yoki Uzum Bank orqali to‘lash mumkin, kripto hamyon kerak bo‘lmaydi.

### Mini ilova hamyonimni ulashni so‘rasa, nimaga e’tibor beray?

Qoidaga ko‘ra ulanish TON Connect orqali bo‘ladi, siz faqat standart oynada tasdiqlaysiz. Tiklash so‘zlari yoki kalitni qo‘lda yozish so‘ralsa, ilovani yoping.

### Wallet’ni yo‘qotib qo‘ysam yoki akkauntdan chiqib ketsam nima bo‘ladi?

Tiklash tartibi hamyonning saqlash modeliga bog‘liq, buning rasmiy ta’rifi topilmadi. Hamyon ochganda ilovaning tiklash bo‘limini o‘qing, berilgan ma’lumotlarni xavfsiz saqlang va ikki bosqichli parolni yoqing.`,
    ru: `## Что такое Telegram Wallet и как он упоминается в официальных источниках?

Wallet — криптокошелёк в блокчейне TON. В [правилах Telegram для блокчейн-мини-приложений](https://core.telegram.org/bots/blockchain-guidelines) он приводится как пример кошелька, который в основном управляет активами TON. В том же ряду названы Tonkeeper и MyTonWallet.

Почему именно TON? По тем же правилам криптовалютные мини-приложения в Telegram должны создавать и распространять токены и блокчейн-активы только в блокчейне TON. Иными словами, криптоэкосистема внутри Telegram построена вокруг TON.

На один вопрос официальные источники не отвечают: хранятся ли ключи от Wallet у самого пользователя или на стороне сервиса. В этой статье это тоже не подтверждено. Ищите ответ в условиях и предупреждениях самого приложения — от этого напрямую зависит, как можно будет восстановить кошелёк.

Не путайте Wallet с Premium и Stars:

- **Premium** — подписка на определённый срок. Она даёт аккаунту дополнительные возможности.
- **Stars** — внутренняя цифровая валюта Telegram. Ею платят в мини-приложениях, ботах и за подарки.
- **Wallet** — криптокошелёк в блокчейне.

Подробнее о Stars: [что такое Telegram Stars и зачем они нужны](/blog/telegram-stars-nima).

## Нужно ли платить или вносить стартовую сумму, чтобы открыть или активировать Wallet?

На официальных страницах Telegram инструкции по открытию и активации Wallet не нашлось. Требования об оплате или стартовой сумме там тоже нет.

В интернете и в Telegram-каналах встречаются разные утверждения об условиях активации. Официального подтверждения у них нет, поэтому в этой статье они не приводятся.

> Практическое правило: если от вас требуют какую-то сумму, дочитайте условие на экране самого приложения до конца. Не отправляйте деньги по требованию, которого на экране нет.

Не платите посторонним ботам или людям, которые просят деньги за «активацию», «подтверждение» или «снятие лимита» Wallet. Настоящее условие видно внутри приложения, а не в чьём-то личном сообщении.

## Как безопасно открыть Telegram Wallet?

Шаги ниже — не официальная инструкция: её найти не удалось. Это общий порядок безопасности, который подходит для открытия любого криптокошелька.

1. Обновите Telegram из официального магазина приложений до последней версии.
2. Открывайте Wallet не по случайной ссылке или рекламе, а из надёжного источника. Сверяйте username бота в профиле буква в букву: поддельных ботов с похожими названиями много.
3. Прочитайте условия, комиссии и предупреждения, которые показывает приложение. Если просят непонятную сумму — остановитесь.
4. Если приложение выдаёт слова для восстановления или секретный код, запишите их на бумаге и храните в надёжном месте. Никому их не отправляйте, не делайте скриншоты и не оставляйте в чатах или в «Избранном».
5. Первую операцию проведите на небольшую сумму. Если всё работает правильно, переходите к суммам побольше.
6. Включите двухэтапную аутентификацию (облачный пароль) в аккаунте Telegram. Если вход в кошелёк идёт через Telegram, его безопасность зависит и от защиты аккаунта.

После открытия кошелька, прежде чем принимать средства, проверьте две вещи. Первая — адрес кошелька: когда копируете и отправляете его, сверьте первые и последние символы с оригиналом. Вторая — сеть: убедитесь, что отправитель переводит именно в сети TON. Средства, отправленные из другой сети, вернуть может быть сложно или невозможно.

> Можно ли в Узбекистане пополнить Wallet через Click, Payme, Paynet или Uzum Bank — в этой статье не проверялось. Уточняйте такую возможность внутри приложения или на официальной странице платёжной системы.

## Что о Wallet подтверждено, а что нет?

О Wallet говорят много, но официально подтверждено немногое. Таблица ниже разделяет одно и другое.

| Утверждение | Статус | Источник |
|---|---|---|
| Wallet упоминается среди кошельков TON вместе с Tonkeeper и MyTonWallet | Подтверждено | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| Криптомини-приложения используют для токенов и активов только TON | Подтверждено | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| Мини-приложения работают с кошельками только через TON Connect | Подтверждено | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| Мини-приложения на других блокчейнах должны были перейти на TON до 21 февраля 2025 года | Подтверждено | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| Инструкция для пользователей по открытию Wallet | Не найдена | — |
| Плата за открытие или активацию | На официальных страницах не указана | — |
| У кого хранятся ключи | Официального описания нет | — |

«Не найдено» в таблице не значит «ложь». Это означает лишь одно: в официальных источниках доказательств нет, а значит, отправлять деньги, опираясь на такое утверждение, не стоит.

## Как подключить Wallet к мини-приложениям и что такое TON Connect?

По правилам Telegram мини-приложения должны работать только с кошельками, подключёнными через TON Connect SDK. TON Connect — стандартный способ связать мини-приложение и кошелёк.

На практике всё просто. Когда мини-приложение запрашивает подключение к кошельку, должно появиться стандартное окно подключения. Вы только подтверждаете или отклоняете его. Если приложение просит вручную ввести в поле слова для восстановления или приватный ключ, это серьёзный признак опасности. Закройте окно.

Ещё один ориентир — сеть. По правилам мини-приложения, работавшие на других блокчейнах, должны были перейти на TON до 21 февраля 2025 года. Если мини-приложение внутри Telegram просит кошелёк в другой сети, будьте осторожны.

Раздел о кошельках на странице правил — не руководство для пользователя. Это в основном набор примеров для мини-приложений, которые сами работают как криптокошелёк. Поэтому искать там порядок открытия Wallet бесполезно.

## Почему цифры и новости о Wallet нужно перепроверять?

- Много информации о Wallet распространяется не с официальных страниц, а из Telegram-каналов. Статистику и условия там часто публикуют без источника.
- Один канал цитирует другой, и догадка быстро превращается в «новость».
- Даже официальные источники не всегда актуальны. На самой странице [Telegram FAQ](https://telegram.org/faq) сказано, что она может содержать устаревшие сведения.

Правило одно: любую цифру, условие оплаты или фразу «это отменили» сверяйте с экраном приложения или официальным источником. Если они расходятся, доверяйте тому, что видите на экране.

## Нужен ли Wallet, чтобы купить Premium или Stars?

Нет, для покупки Premium открывать Wallet не обязательно. Есть и способы получить Premium за криптовалюту, но они требуют открыть кошелёк, обменять сумы на криптовалюту и учитывать колебания курса. Подробнее: [Telegram Premium через TON](/blog/ton-orqali-telegram-premium) и [Premium через Fragment](/blog/fragment-telegram-premium).

| Что нужно | Бот Premiumtg | Криптовалютный способ |
|---|---|---|
| Криптокошелёк | Не нужен | Нужен |
| Валюта оплаты | Сумы | Криптовалюта |
| Способ оплаты | Click, Payme, Paynet, Uzum Bank | Обмен сумов на криптовалюту |
| Данные аккаунта | Только username | Кошелёк и подключение |
| Колебания курса | Нет, цена в сумах | Возможны |

В Premiumtg не запрашивают код входа или пароль — достаточно username. Подписка активируется автоматически за 10 секунд. Цены: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}. Перед покупкой проверьте цену и доступные способы оплаты в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot?start=site_premiumtg_blog).

Stars — тоже не то же самое, что Wallet: Stars — внутренняя валюта Telegram, Wallet — блокчейн-кошелёк.

Кошелёк может понадобиться при работе с коллекционными подарками. В [блоге Telegram](https://telegram.org/blog) 24 января 2025 года вышел пост о переносе коллекционных подарков в блокчейн. По этой теме: [что такое NFT-подарки](/blog/telegram-nft-sovgalar).

## Как распознать мошенничество, связанное с Wallet?

Если заметили хотя бы один из признаков ниже — остановитесь и ничего не отправляйте:

- Просят перевести «плату за активацию» на личную карту или чужой кошелёк.
- Просят слова для восстановления, код входа или пароль «для проверки».
- Боты с названием, похожим на Wallet, но с другим username.
- Обещания вроде «откройте кошелёк — получите бонусные TON».
- Вместо стандартного окна подключения мини-приложение требует ввести ключ вручную.
- Спешка: «предложение действует час», «не активируете сейчас — кошелёк закроют».

Если вы уже отправили код или слова для восстановления, не медлите: проверьте активные сеансы в Telegram и завершите незнакомые, смените облачный пароль и переведите средства на новый, надёжный кошелёк.

Общие правила защиты от мошенников при покупках в Telegram — в отдельной статье: [как защититься от мошенников](/blog/telegram-premium-firibgarlikdan-himoya).

## Часто задаваемые вопросы

### Открыть Telegram Wallet — платно?

На официальных страницах Telegram плата за открытие Wallet не упоминается. Если приложение запрашивает какую-то сумму, сначала прочитайте условия на экране, а потом решайте.

### Нужно ли после открытия Wallet отправить TON для активации?

Официальные источники такое требование не подтверждают. Актуальное условие проверяйте только внутри приложения и не переводите деньги «за активацию» посторонним людям или ботам.

### Что выбрать: Wallet, Tonkeeper или MyTonWallet?

Правила Telegram называют все три примерами кошельков TON, но ни один из них не рекомендуют. Сравните удобство, способ восстановления и предупреждения о безопасности в самих приложениях.

### Можно ли пополнить Wallet через Click или Payme?

В статье эта возможность не проверялась. Уточните её в разделе пополнения внутри приложения или на официальной странице платёжной системы.

### Обязательно ли открывать Wallet, чтобы купить Telegram Premium?

Нет. В боте Premiumtg достаточно указать username и оплатить в сумах через Click, Payme, Paynet или Uzum Bank — криптокошелёк не понадобится.

### На что смотреть, если мини-приложение просит подключить кошелёк?

По правилам подключение идёт через TON Connect, и вы лишь подтверждаете его в стандартном окне. Если просят вручную ввести слова для восстановления или ключ — закройте приложение.

### Что будет, если я потеряю доступ к Wallet или выйду из аккаунта?

Порядок восстановления зависит от того, как хранятся ключи, а официального описания этого нет. При открытии кошелька изучите раздел о восстановлении, надёжно сохраните выданные данные и включите облачный пароль.`,
  },
};
