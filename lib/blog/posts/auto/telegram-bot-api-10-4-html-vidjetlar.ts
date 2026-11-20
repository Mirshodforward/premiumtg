// Avtoblogyoz yasagan maqola (2026-11-20). Niyat: Telegram foydalanuvchisi yoki bot egasi Bot API 10.4 yangilanishi haqidagi xabarni ko‘rib, «Telegram bot HTML vidjet» yoki «Bot API 10.4 nima yangi» deb qidiradi. U botlar endi Mini App’siz xabar ichida interaktiv vidjet yuborishi rostmi, bu foydalanuvchiga va hamyon xavfsizligiga nima o‘zgartirishini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/api-changelog
//   https://core.telegram.org/bots/widgets
//   https://core.telegram.org/bots/api
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-bot-api-10-4-html-vidjetlar",
  date: "2026-11-20",
  reviewed: "2026-11-20",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram Bot API 10.4: botlar endi xabar ichida HTML-vidjet yuboradimi?", ru: "Telegram Bot API 10.4: боты теперь отправляют HTML-виджеты в сообщениях?" },
  excerpt: { uz: `Ha, rost: 2026-yil 9-noyabrdagi Bot API 10.4 botlarga sendWidget orqali xabar ichida HTML-vidjet yuborishni qo‘shdi. Hozircha faqat shaxsiy chatlarda, bosqichma-bosqich.`, ru: `Да, это правда: Bot API 10.4 от 9 ноября 2026 года добавил метод sendWidget, и боты могут отправлять HTML-виджеты внутри сообщения. Пока только в личных чатах и поэтапно.` },
  keywords: ["telegram bot api 10.4","telegram bot html vidjet","bot api 10.4 nima yangi","telegram vidjet mini app farqi","telegram bot hamyon imzo so‘rovi","telegram vaqtinchalik xabarlar bot","sendWidget telegram","bot api 10.4 что нового","html виджеты telegram бот","telegram виджеты в сообщениях","sendWidget TON кошелек бот"],
  related: ["telegram-bot-api-boy-xabarlar-jadval-slaydshou","telegram-gram-hamyon-non-custodial-rostmi","telegram-hamyon-username-boyicha-otkazma","telegram-bot-tolovlari-faqat-stars-bloklash"],
  sources: [{"url":"https://core.telegram.org/bots/api-changelog","title":"Bot API changelog"},{"url":"https://core.telegram.org/bots/widgets","title":"Telegram Widgets"},{"url":"https://core.telegram.org/bots/api","title":"Telegram Bot API"}],
  content: {
    uz: `## Bot API 10.4 da botlar xabar ichida HTML-vidjet yuborishi rostmi?

Ha, rost. Telegram 2026-yil 9-noyabrda Bot API 10.4 ni chiqardi. Unga sendWidget metodi qo‘shildi va endi botlar HTML-vidjetli xabar yubora oladi. Bu [Bot API changelog](https://core.telegram.org/bots/api-changelog) sahifasida yozilgan.

Vidjet — xabarning o‘zida chiziladigan kichik interaktiv blok. Uni ishlatish uchun alohida oyna ochish shart emas: u chatda oddiy xabar kabi turadi.

Hozircha ikkita cheklov bor:

- production muhitida, ya’ni oddiy foydalanuvchilar ishlatadigan Telegram’da, vidjetlarni hozircha faqat shaxsiy chatlarga yuborish mumkin;
- [Widgets hujjati](https://core.telegram.org/bots/widgets)ga ko‘ra, vidjetlar bosqichma-bosqich joriy qilinmoqda.

Shuning uchun do‘stingizda vidjet chiqib, sizda chiqmasligi mumkin. Bu xato emas, funksiya hamma foydalanuvchiga bir vaqtda chiqarilmayapti.

Mavzu Telegram kanallarida tarqalgan xabardan olingan. Telegram.org blogida 10.4 haqida alohida post topa olmadik. Shuning uchun asosiy manba sifatida core.telegram.org’dagi changelog va dasturchilar hujjatlari olindi.

## Kanal postidagi qaysi gaplar rasmiy hujjatga mos keladi?

Postdagi gaplarning asosiy qismi rasmiy hujjatga mos keladi. Lekin bir nechta detal noaniq yoki tasdiqlanmagan.

| Da’vo | Rasmiy manbada | Izoh |
|---|---|---|
| Botlar xabar ichida HTML-vidjet yuboradi | Tasdiqlangan | sendWidget metodi qo‘shilgan |
| Vidjet botga so‘rov yuboradi va javob oladi | Tasdiqlangan | So‘rov botga keladi, bot answerWidgetQuery bilan javob beradi |
| Vidjet yangi xabar yubormasdan yangilanadi | Tasdiqlangan | editMessageWidgetData metodi |
| Umumiy vidjetlar va ularni bir joydan yangilash | Tasdiqlangan | sendSharedWidget va editSharedWidgetData |
| TON hamyon bilan integratsiya, imzolash va o‘tkazmalar | Tasdiqlangan | WidgetQueryType, TonWalletCard, TonWalletTransfer sinflari |
| Vaqtinchalik xabarlar 10.4 ning yangiligi | Qisman | Ular Bot API 10.2 da kiritilgan, 10.4 da kengaytirilgan |
| Rich xabarlarni iqtibos qilish | Tasdiqlangan | ReplyParameters’ga quote_rich_texts qo‘shilgan |
| Vidjet ichida o‘yinlar | Tasdiqlanmagan | Rasmiy manbada misol sifatida topilmadi |
| Funksiya «beta» maqomida | Tasdiqlanmagan | Changelog’da «beta» so‘zi yo‘q |

Postda hamyon kartasi bilan birga keladigan qo‘shimcha ma’lumotlar ham tilga olingan. Bu maqolada ular tasdiqlanmagan. Quyida faqat Widgets hujjatida aniq yozilgan gaplar keltirilgan.

## Vidjet Mini App’dan nimasi bilan farq qiladi?

Hujjatda asosiy farq bitta gap bilan aytilgan: vidjet xabarning bir qismi, chatni aylantirganda ham ko‘rinib turadi va internetga chiqa olmaydi. Xavfsizlik uchun aynan shu muhim. Quyida vidjetning texnik chegaralari va ular amalda nimani anglatishi berilgan:

| Xususiyat | Vidjetda | Siz uchun ma’nosi |
|---|---|---|
| Joylashuvi | Xabarning bir qismi | Alohida oyna ochilmaydi, xabar chatda qoladi |
| JavaScript | QuickJS dvigatelida ishlaydi, WebView yoki brauzerda emas | Brauzerdagi sayt imkoniyatlari yo‘q |
| Tarmoq | fetch, XMLHttpRequest, WebSocket va boshqa tarmoq API’lari bloklangan | Vidjet o‘zi biror saytga ma’lumot yubora olmaydi |
| Tashqi resurslar | Tashqi skript, uslub, shrift va rasm yuklanmaydi | Begona serverdan kod tortib olinmaydi |
| Navigatsiya | Vidjet boshqa sahifaga o‘ta olmaydi | Sizni boshqa saytga olib ketmaydi |
| Hajm | Ko‘pi bilan 32 768 bayt HTML, server zlib bilan (9-daraja) siqqandan keyin ko‘pi bilan 4 096 bayt | Bu to‘liq ilova emas, yengil interfeys |

Amalda bu shuni anglatadi: vidjet tashqi dunyo bilan faqat bot orqali bog‘lanadi. Vidjetda ko‘rgan ma’lumotingizni bot yuboradi, siz bosgan tugma ham faqat botga boradi.

## Vidjet bot bilan qanday ishlaydi va o‘zi yangilanadimi?

Vidjet xabar ichida bot bilan «suhbatlashadi». [Bot API hujjati](https://core.telegram.org/bots/api) va Widgets sahifasiga ko‘ra, jarayon taxminan shunday:

1. Siz vidjetdagi elementni bosasiz.
2. Vidjet botga so‘rov yuboradi. Bu so‘rov botga yangilanish (Update) sifatida keladi.
3. Bot answerWidgetQuery metodi bilan javob beradi.
4. Kerak bo‘lsa, bot editMessageWidgetData bilan vidjetdagi ma’lumotni yangilaydi. Bunda chatga yangi xabar tushmaydi.

Ikki muhim qoida bor. Birinchisi: so‘rovlar faqat siz bosganingizda ishlaydi, fonda hech qachon ishlamaydi. Ya’ni vidjet sizdan bexabar botga murojaat qilib turmaydi. Ikkinchisi: bot vidjetni yuborganda allow_queries’ni yoqmagan bo‘lsa, unga keladigan har qanday so‘rov hamma joyda rad etiladi.

### Umumiy vidjet nima?

Hujjat umumiy (shared) vidjetni so‘rovnomaga o‘xshatadi: bu bitta obyekt, unga istalgancha xabar bog‘lanishi mumkin. Bot o‘zi yaratgan umumiy vidjetni sendSharedWidget bilan qayta yuboradi va editSharedWidgetData bilan uning ommaviy ma’lumotini bir joydan o‘zgartiradi. Natijada barcha xabarlardagi vidjet bir xil ma’lumotni ko‘rsatadi.

Yana bir detal: vidjetni nusxalab bo‘lmaydi. copyMessage va copyMessages metodlari vidjetli xabarni rad etadi.

## Vidjet hamyonimdan pul yechib olishi mumkinmi?

Hujjat bo‘yicha — sizning tasdig‘ingizsiz yo‘q. Vidjet Telegram’ning ichki hamyoni orqali to‘lov yoki imzo so‘rashi mumkin. Bunda ilovada alohida oyna chiqadi: unda bot, summalar va qabul qiluvchi manzillar ko‘rsatiladi. Tasdiqlaydigan odam — siz.

Agar oynada rad etsangiz, botga REJECTED xatosi qaytadi va o‘tkazma bajarilmaydi.

Hamyon chaqiruvida bot profilingizda ko‘rinadigan TON hamyon kartasini, uning manzili va balansini oladi. Hujjatda yana bir holat yozilgan: hamyoni yo‘q foydalanuvchiga hamyon o‘sha paytda yaratiladi.

> Bu maqolada ikki narsa tasdiqlanmadi: hamyon kartasi ma’lumotini botga berish uchun alohida rozilik so‘ralishi va bot maxfiy kalitlarni hech qachon olmasligi. Tasdiqlash oynasi hujjatda faqat to‘lov va imzo uchun aytilgan. Hamyon funksiyasi guruh chatlarida ishlashi haqida ham ma’lumot topilmadi.

Telegram’ga o‘rnatilgan hamyon qanday ishlashi haqida [Gram hamyon non-custodial rostmi](/blog/telegram-gram-hamyon-non-custodial-rostmi) maqolasida batafsil yozganmiz. Profildagi hamyon kartasi va o‘tkazmalar haqida [username bo‘yicha o‘tkazma](/blog/telegram-hamyon-username-boyicha-otkazma) maqolasida o‘qishingiz mumkin.

## Hamyon so‘rovi kelganda nimani tekshirish kerak?

Vidjetdan to‘lov yoki imzo oynasi chiqsa, tasdiqlashdan oldin quyidagilarni tekshiring:

1. Oynadagi bot nomini o‘zingiz ishlatayotgan bot bilan solishtiring.
2. Summani va qabul qiluvchi manzilni oxirigacha o‘qing.
3. Siz kutmagan yoki tushunmagan so‘rovni rad eting. Rad etsangiz, hech narsa yo‘qotmaysiz.
4. «Imzo» ham tasdiq ekanini unutmang. Hujjatga ko‘ra, imzo «bot» so‘zi va botning ID raqamidan tuzilgan domen uchun qo‘yiladi, ya’ni u aynan o‘sha botga beriladi.
5. Seed-ibora, login kodi va 2FA parolini hech qaysi vidjet, bot yoki chatga yozmang. Tasdiqlash uchun bularning hech biri kerak emas.

Widgets hujjatida bot egalariga ham tavsiya berilgan: imzoni hamyonning public_key’i bilan tekshiring va bu kalitni blokcheyndagi hamyon manziliga bog‘lang. Bundan tashqari, 10.4 da Message sinfiga TON hamyon o‘tkazmasi uchun ton_wallet_transfer maydoni va TonWalletTransfer sinfi qo‘shilgan.

Botlarda raqamli xizmatlar uchun to‘lov qabul qilish qoidalari alohida mavzu. U haqda [botlarda faqat Stars bilan to‘lov](/blog/telegram-bot-tolovlari-faqat-stars-bloklash) maqolasida yozganmiz.

## Vaqtinchalik xabarlar va iqtibos bo‘yicha 10.4 da nima o‘zgardi?

Kanal posti vaqtinchalik xabarlarni 10.4 ning yangiligi deb ko‘rsatgan. Aslida ular Bot API 10.2 da kiritilgan, 10.4 da esa kengaytirilgan.

- **Nima qo‘shildi:** endi botlar tugma bosilganda (callback so‘rovi) istalgan chatda vaqtinchalik javob yubora oladi. Kanalning direct messages chatlari bundan mustasno.
- **Kim ko‘radi:** bunday javobni faqat tugmani bosgan foydalanuvchi ko‘radi. Guruhda boshqa a’zolar botning sizga bergan javobini ko‘rmaydi.
- **Iqtibos:** ReplyParameters’ga quote_rich_texts maydoni qo‘shildi. Endi botlar rich xabarlardan iqtibos keltira oladi.

Rich xabarlarning o‘zi — jadval, slaydshou va boshqa bloklar — oldingi yangilanishda qo‘shilgan. Ular haqida [botlar jadval va slaydshou yuboradimi](/blog/telegram-bot-api-boy-xabarlar-jadval-slaydshou) maqolasida yozganmiz.

## Oddiy foydalanuvchi va Premium egasi uchun bu nimani anglatadi?

Oddiy foydalanuvchi uchun asosiy o‘zgarish — qulaylik. Bot bilan ishlaganda ko‘p narsa bitta xabar ichida bo‘ladi: tugmani bosasiz, bot javob beradi va o‘sha xabardagi ma’lumot yangilanadi. Chat yangi xabarlarga to‘lib ketmaydi.

Vidjet ko‘rinmasa, sababi quyidagilardan biri bo‘lishi mumkin:

- funksiya bosqichma-bosqich chiqarilyapti va sizga hali yetib kelmagan;
- vidjet guruhga yuborilgan, production muhitida esa hozircha faqat shaxsiy chatlar qo‘llab-quvvatlanadi;
- ilovangiz eskirgan bo‘lishi mumkin, Telegram’ni yangilab ko‘ring.

Biz ko‘rgan rasmiy hujjatlarda vidjetlardan foydalanish uchun Telegram Premium kerakligi haqida gap topilmadi.

Premium kerak bo‘lsa, uni Premiumtg botida — [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) — so‘mda olishingiz mumkin. Faqat username kerak: akkauntga kirish, login kodi yoki parol so‘ralmaydi. Narxlar: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}. Narx va to‘lov usullarini xariddan oldin botda tekshiring. Jarayon [username orqali Premium ulash](/blog/username-orqali-premium-ulash) qo‘llanmasida qadamma-qadam yozilgan.

## Ko‘p so‘raladigan savollar

### Bot API 10.4 qachon chiqdi?

Changelog’ga ko‘ra, Bot API 10.4 2026-yil 9-noyabrda chiqqan. Telegram blogida bu versiya haqida alohida post topa olmadik, asosiy manba — core.telegram.org.

### Nega menga botdan vidjet kelmayapti yoki u guruhda ko‘rinmayapti?

Vidjetlar foydalanuvchilarga bosqichma-bosqich chiqarilyapti, shuning uchun sizda hali chiqmagan bo‘lishi mumkin. Oddiy Telegram’da ular hozircha faqat bot bilan shaxsiy yozishmada ishlaydi. Guruhda ko‘rinmasligi shu bilan bog‘liq.

### HTML-vidjet orqali bot telefonimdagi ma’lumotlarni yoki saytlarni ocha oladimi?

Hujjat bo‘yicha vidjet internetga chiqa olmaydi, tashqi fayllarni yuklamaydi va boshqa sahifaga o‘tmaydi. U brauzerda emas, alohida kichik JavaScript dvigatelida ishlaydi.

### Vidjet hamyon balansimni ko‘ra oladimi?

Hamyon chaqiruvida bot profilingizdagi TON hamyon kartasini, uning manzili va balansini oladi. Bunga alohida rozilik so‘ralishi rasmiy hujjatda aniq yozilmagan. Shuning uchun notanish botlarning hamyon so‘rovlariga ehtiyot bo‘ling.

### Hamyonim bo‘lmasa, vidjet to‘lov so‘rasa nima bo‘ladi?

Widgets hujjatiga ko‘ra, hamyoni yo‘q foydalanuvchiga hamyon o‘sha paytda yaratiladi. To‘lovning o‘zi baribir siz oynada tasdiqlaganingizdan keyingina amalga oshadi.

### Vidjetli xabarni boshqa chatga nusxalab yuborsa bo‘ladimi?

Yo‘q, copyMessage va copyMessages metodlari vidjetli xabarni nusxalamaydi. Forward qilish mumkinligi esa bu maqolada tasdiqlanmagan.

### Vidjetlardan foydalanish uchun Telegram Premium kerakmi?

Biz ko‘rgan rasmiy hujjatlarda bunday shart topilmadi. Premium’ni boshqa imkoniyatlari uchun olmoqchi bo‘lsangiz, @premiumtg_uzbot’da username’ingizni kiritib, so‘mda to‘lashingiz mumkin.`,
    ru: `## Правда ли, что в Bot API 10.4 боты отправляют HTML-виджеты внутри сообщения?

Да, это правда. 9 ноября 2026 года Telegram выпустил Bot API 10.4. В нём появился метод sendWidget, и теперь боты могут отправлять сообщения с HTML-виджетами. Это указано на странице [Bot API changelog](https://core.telegram.org/bots/api-changelog).

Виджет — это небольшой интерактивный блок, который отрисовывается прямо в сообщении. Отдельное окно открывать не нужно: виджет остаётся в чате, как обычное сообщение.

Пока действуют два ограничения:

- в production-среде, то есть в обычном Telegram, которым пользуются все, виджеты можно отправлять только в личные чаты;
- согласно [документации по виджетам](https://core.telegram.org/bots/widgets), функцию внедряют поэтапно.

Поэтому у друга виджет может уже отображаться, а у вас — ещё нет. Это не ошибка: функцию просто выпускают не для всех пользователей сразу.

Тема взята из новости, которая разошлась по Telegram-каналам. В блоге telegram.org отдельного поста о версии 10.4 мы не нашли. Поэтому основными источниками стали changelog и документация для разработчиков на core.telegram.org.

## Что из поста в канале совпадает с официальной документацией?

Большая часть утверждений из поста совпадает с официальной документацией. Но некоторые детали неточны или не подтверждены.

| Утверждение | В официальном источнике | Комментарий |
|---|---|---|
| Боты отправляют HTML-виджеты внутри сообщения | Подтверждено | Добавлен метод sendWidget |
| Виджет отправляет запрос боту и получает ответ | Подтверждено | Запрос приходит боту, бот отвечает через answerWidgetQuery |
| Виджет обновляется без отправки нового сообщения | Подтверждено | Метод editMessageWidgetData |
| Общие виджеты и их обновление из одного места | Подтверждено | sendSharedWidget и editSharedWidgetData |
| Интеграция с TON-кошельком, подписи и переводы | Подтверждено | Классы WidgetQueryType, TonWalletCard, TonWalletTransfer |
| Временные сообщения — новинка 10.4 | Частично | Их ввели в Bot API 10.2, а в 10.4 расширили |
| Цитирование rich-сообщений | Подтверждено | В ReplyParameters добавлено поле quote_rich_texts |
| Игры внутри виджета | Не подтверждено | В официальном источнике как пример не найдены |
| Функция в статусе «бета» | Не подтверждено | В changelog слова «beta» нет |

В посте упоминаются и дополнительные данные, которые якобы приходят вместе с карточкой кошелька. В этой статье они не подтверждены. Ниже — только то, что прямо написано в документации по виджетам.

## Чем виджет отличается от Mini App?

В документации главное отличие сформулировано одной фразой: виджет — часть сообщения, он виден и при прокрутке чата, а доступа в интернет у него нет. Для безопасности важно именно это. Ниже — технические рамки виджета и то, что они значат на практике:

| Характеристика | У виджета | Что это значит для вас |
|---|---|---|
| Где находится | Часть сообщения | Отдельное окно не открывается, сообщение остаётся в чате |
| JavaScript | Работает в движке QuickJS, а не в WebView или браузере | Возможностей обычного сайта в браузере нет |
| Сеть | fetch, XMLHttpRequest, WebSocket и другие сетевые API заблокированы | Виджет сам не может отправить данные на какой-либо сайт |
| Внешние ресурсы | Сторонние скрипты, стили, шрифты и картинки не загружаются | Код с чужого сервера не подтягивается |
| Навигация | Виджет не может перейти на другую страницу | Он не уведёт вас на сторонний сайт |
| Размер | Не более 32 768 байт HTML и не более 4 096 байт после сжатия сервером через zlib (уровень 9) | Это не полноценное приложение, а лёгкий интерфейс |

На практике это значит: с внешним миром виджет связан только через бота. Данные, которые вы видите в виджете, присылает бот, и нажатие на кнопку тоже уходит только боту.

## Как виджет работает с ботом и обновляется ли он сам?

Виджет «общается» с ботом внутри сообщения. Согласно [документации Bot API](https://core.telegram.org/bots/api) и странице о виджетах, процесс выглядит примерно так:

1. Вы нажимаете на элемент виджета.
2. Виджет отправляет запрос боту. Он приходит боту как обновление (Update).
3. Бот отвечает методом answerWidgetQuery.
4. При необходимости бот обновляет данные в виджете через editMessageWidgetData. Нового сообщения в чате при этом не появляется.

Есть два важных правила. Первое: запросы срабатывают только по нажатию и никогда не выполняются в фоне. То есть виджет не обращается к боту без вашего ведома. Второе: если бот при отправке виджета не включил allow_queries, любой запрос к этому виджету отклоняется везде.

### Что такое общий виджет?

Документация сравнивает общий (shared) виджет с опросом: это один объект, на который может ссылаться сколько угодно сообщений. Бот повторно отправляет созданный им общий виджет через sendSharedWidget и меняет его публичные данные из одного места через editSharedWidgetData. В итоге во всех сообщениях виджет показывает одно и то же.

Ещё одна деталь: виджет нельзя скопировать. Методы copyMessage и copyMessages отклоняют сообщения с виджетами.

## Может ли виджет списать деньги с моего кошелька?

По документации — без вашего подтверждения нет. Виджет может запросить оплату или подпись через встроенный кошелёк Telegram. При этом в приложении появляется отдельное окно: в нём указаны бот, суммы и адреса получателей. Подтверждаете вы сами.

Если вы отклоните запрос в этом окне, боту вернётся ошибка REJECTED, и перевод не выполнится.

При вызове кошелька бот получает TON-карточку кошелька из вашего профиля, её адрес и баланс. В документации описан ещё один случай: если у пользователя нет кошелька, он создаётся в этот момент.

> В этой статье не подтверждены две вещи: что для передачи боту данных карточки кошелька запрашивается отдельное согласие и что бот никогда не получает секретные ключи. Окно подтверждения в документации упоминается только для оплаты и подписи. Сведений о том, работает ли функция кошелька в групповых чатах, мы тоже не нашли.

Как устроен встроенный в Telegram кошелёк, мы подробно разбирали в статье [правда ли, что кошелёк Gram некастодиальный](/blog/telegram-gram-hamyon-non-custodial-rostmi). О карточке кошелька в профиле и переводах читайте в материале [о переводах по username](/blog/telegram-hamyon-username-boyicha-otkazma).

## Что проверить, если пришёл запрос от кошелька?

Если виджет открыл окно оплаты или подписи, перед подтверждением проверьте:

1. Сравните имя бота в окне с ботом, которым вы пользуетесь.
2. Прочитайте сумму и адрес получателя до конца.
3. Отклоняйте запросы, которых вы не ждали или не понимаете. Отказ ничего вам не стоит.
4. Помните, что подпись — это тоже подтверждение. По документации подпись ставится для домена, составленного из слова «bot» и ID бота, то есть она выдаётся именно этому боту.
5. Никогда не вводите сид-фразу, код входа и пароль 2FA ни в виджет, ни в бота, ни в чат. Для подтверждения ничего из этого не нужно.

В документации по виджетам есть совет и для владельцев ботов: проверять подпись по public_key кошелька и привязывать этот ключ к адресу кошелька в блокчейне. Кроме того, в 10.4 в класс Message добавлено поле ton_wallet_transfer и класс TonWalletTransfer для переводов с TON-кошелька.

Правила приёма оплаты за цифровые услуги в ботах — отдельная тема. О ней мы писали в статье [об оплате в ботах только через Stars](/blog/telegram-bot-tolovlari-faqat-stars-bloklash).

## Что изменилось в 10.4 с временными сообщениями и цитированием?

Пост в канале назвал временные сообщения новинкой 10.4. На самом деле их ввели в Bot API 10.2, а в 10.4 расширили.

- **Что добавили:** теперь боты могут отправлять временный ответ на нажатие кнопки (callback-запрос) в любом чате. Исключение — чаты личных сообщений канала (direct messages).
- **Кто видит:** такой ответ видит только тот, кто нажал кнопку. В группе остальные участники не увидят, что бот ответил вам.
- **Цитирование:** в ReplyParameters добавлено поле quote_rich_texts. Теперь боты могут цитировать rich-сообщения.

Сами rich-сообщения — с таблицами, слайд-шоу и другими блоками — появились в предыдущем обновлении. О них мы рассказывали в статье [отправляют ли боты таблицы и слайд-шоу](/blog/telegram-bot-api-boy-xabarlar-jadval-slaydshou).

## Что это значит для обычного пользователя и владельца Premium?

Для обычного пользователя главное изменение — удобство. При работе с ботом многое происходит внутри одного сообщения: вы нажимаете кнопку, бот отвечает, и данные в том же сообщении обновляются. Чат не забивается новыми сообщениями.

Если виджет не отображается, причина может быть одной из этих:

- функцию выпускают поэтапно, и до вас она ещё не дошла;
- виджет отправлен в группу, а в production-среде пока поддерживаются только личные чаты;
- приложение устарело — попробуйте обновить Telegram.

В официальной документации, которую мы изучили, не сказано, что для виджетов нужен Telegram Premium.

Если Premium вам нужен, его можно оформить в сумах через бот Premiumtg — [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Достаточно username: вход в аккаунт, код входа или пароль не запрашиваются. Цены: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}. Перед покупкой уточните цену и способы оплаты в боте. Весь процесс по шагам описан в инструкции [как подключить Premium по username](/blog/username-orqali-premium-ulash).

## Часто задаваемые вопросы

### Когда вышел Bot API 10.4?

Судя по changelog, Bot API 10.4 вышел 9 ноября 2026 года. Отдельного поста об этой версии в блоге Telegram мы не нашли, основной источник — core.telegram.org.

### Почему бот не присылает мне виджет или он не виден в группе?

Виджеты открывают пользователям постепенно, так что у вас функция может ещё не появиться. В обычном Telegram они пока работают только в личной переписке с ботом — поэтому в группе их и не видно.

### Может ли бот через HTML-виджет получить данные с телефона или открыть сайт?

Согласно документации, виджет не выходит в интернет, не загружает внешние файлы и не переходит на другие страницы. Он выполняется не в браузере, а в отдельном небольшом JavaScript-движке.

### Может ли виджет увидеть баланс моего кошелька?

При вызове кошелька бот получает TON-карточку кошелька из вашего профиля с адресом и балансом. Запрашивается ли на это отдельное согласие, в официальной документации прямо не сказано, поэтому к запросам кошелька от незнакомых ботов стоит относиться осторожно.

### Что будет, если у меня нет кошелька, а виджет просит оплату?

По документации к виджетам, кошелёк в этом случае создаётся сразу. Сама оплата всё равно пройдёт только после того, как вы подтвердите её в окне.

### Можно ли скопировать сообщение с виджетом в другой чат?

Нет, методы copyMessage и copyMessages сообщения с виджетами не копируют. А вот можно ли такое сообщение переслать, в этой статье не подтверждено.

### Нужен ли Telegram Premium, чтобы пользоваться виджетами?

В изученной нами официальной документации такого условия нет. Если Premium нужен вам ради других возможностей, его можно оплатить в сумах в @premiumtg_uzbot, указав свой username.`,
  },
};
