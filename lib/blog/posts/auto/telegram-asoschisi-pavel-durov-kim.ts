// Avtoblogyoz yasagan maqola (2026-11-08). Niyat: O‘zbekistondagi Telegram foydalanuvchisi Telegram’ni kim yaratganini va Pavel Durov necha yoshda ekanini «telegram asoschisi kim» yoki «pavel durov necha yoshda» so‘zlari bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/faq
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-asoschisi-pavel-durov-kim",
  date: "2026-11-08",
  reviewed: "2026-11-08",
  category: "asoslar",
  priority: 0.7,
  title: { uz: "Telegram asoschisi kim va Pavel Durov necha yoshda? Rasmiy faktlar", ru: "Кто основатель Telegram и сколько лет Павлу Дурову? Официальные факты" },
  excerpt: { uz: `Rasmiy Telegram FAQ’ga ko‘ra, Telegram ortida Pavel Durov va uning akasi Nikolay turadi. Pavelning yoshi esa bu manbada ko‘rsatilmagan, shuning uchun aniq raqam bermaymiz.`, ru: `Согласно официальному FAQ Telegram, за мессенджером стоят Павел Дуров и его брат Николай. Возраст Павла в этом источнике не указан, поэтому точную цифру мы не называем.` },
  keywords: ["telegram asoschisi pavel durov","telegram asoschisi kim","pavel durov kim","pavel durov necha yoshda","telegramni kim yaratgan","nikolay durov","telegram qachon yaratilgan","создатель телеграм","кто создал телеграм","основатель telegram павел дуров","сколько лет павлу дурову","николай дуров telegram"],
  related: ["telegram-premium-nima","telegram-nft-sovgalar","telegram-gifts-sovgalar","telegram-nft-sovga-sotish-marketpleys"],
  sources: [{"url":"https://telegram.org/faq","title":"Telegram FAQ"}],
  content: {
    uz: `## Telegram’ni kim yaratgan: Pavel Durovmi yoki aka-ukalarmi?

Telegram’ning rasmiy FAQ sahifasiga ko‘ra, Telegram ortida Pavel Durov va uning akasi Nikolay Durov turadi. «Telegram asoschisi kim» degan savolga to‘liqroq javob shunday: Telegram aka-uka Durovlarning loyihasi.

Ko‘p kanallar, jumladan tabrik postlari, faqat Pavelni «Telegram yaratuvchisi» deb ataydi. Bu soddalashtirilgan javob. Rasmiy FAQ esa ikkala aka-ukani birga tilga oladi va har birining hissasini alohida ko‘rsatadi.

Manbani o‘zingiz ham ochib ko‘rishingiz mumkin: [Telegram FAQ](https://telegram.org/faq) sahifasida jamoa haqidagi savollarni toping. Bu maqoladagi Telegram tarixiga oid barcha faktlar shu sahifadan olingan.

## Pavel va Nikolay Durov Telegram’da qanday rol o‘ynaydi?

FAQ aka-ukalarning vazifasini aniq ajratadi. Qisqasi: Pavel — g‘oya va moliya, Nikolay — texnologiya.

| Kim | Telegram’dagi roli | Manba |
|---|---|---|
| Pavel Durov | Telegram’ni moliyaviy va g‘oyaviy jihatdan qo‘llab-quvvatlaydi | Telegram FAQ |
| Nikolay Durov | Texnik tomonga hissa qo‘shadi | Telegram FAQ |
| Nikolay Durov | Telegram uchun maxsus ma’lumot almashish protokolini ishlab chiqqan | Telegram FAQ |

FAQ Nikolay yaratgan protokolni uch xususiyat bilan tasvirlaydi: u ochiq, xavfsiz va bir nechta data-markaz bilan ishlashga moslangan. FAQ’dagi ifodaga ko‘ra, Telegram’ni amalga oshirish uchun aynan shu protokol ishlab chiqilgan.

Shuning uchun Telegram’ni bir kishining ishi deb tasavvur qilish to‘liq to‘g‘ri emas. Pavel loyihani moliyalaydi va g‘oyaviy yo‘nalishini belgilaydi. Ilovaning texnik asosi esa Nikolay bilan bog‘liq.

## Telegram qachon paydo bo‘lgan?

Rasmiy FAQ kompaniyaga qachon asos solinganini ko‘rsatmaydi. Unda faqat ilovalar chiqqan sanalar bor. Shuning uchun «Telegram qachon yaratilgan» degan savolga eng ishonchli javob — birinchi versiyalar ishga tushgan kunlar.

| Sana | Voqea | Manba |
|---|---|---|
| 2013-yil 14-avgust | Telegram’ning iOS versiyasi ishga tushdi | Telegram FAQ |
| 2013-yil 20-oktyabr | Android uchun alfa versiyasi rasman ishga tushdi | Telegram FAQ |

Demak, Telegram avval iPhone foydalanuvchilari uchun chiqqan. Android versiyasi taxminan ikki oydan keyin alfa holatida paydo bo‘lgan. Internetda boshqa sanalarni uchratsangiz, ularni FAQ bilan solishtiring. Ba’zi manbalar kompaniya tashkil topgan sanani, ba’zilari ilova chiqqan kunni keltiradi va shu sababli chalkashlik yuzaga keladi.

## Telegram jamoasi qayerda joylashgan?

FAQ jamoaning joylashuvi va tarixi haqida quyidagilarni aytadi:

- Telegram’ning dasturchilar jamoasi Dubayda joylashgan.
- Dasturchilarning ko‘pchiligi asli Sankt-Peterburgdan.
- Jamoa Rossiyadagi mahalliy IT qoidalari sababli mamlakatni tark etishga majbur bo‘lgan.
- Shundan keyin baza sifatida bir nechta shaharni sinab ko‘rgan, jumladan Berlin, London va Singapurni.

O‘zbekistondagi foydalanuvchi uchun amaliy xulosa shunday: ilovaning qoidalari, funksiyalari va Premium statusini faqat Telegram boshqaradi. Mahalliy kanallar, botlar yoki do‘konlar Telegram nomidan qaror chiqara olmaydi.

## Pavel Durov necha yoshda?

> Durovning tug‘ilgan sanasi va yoshi biz tekshirgan rasmiy manbada (Telegram FAQ) ko‘rsatilmagan. Kanallarda tarqalgan raqamlar, jumladan tabrik postlaridagi yosh, bu maqolada tasdiqlanmagan. Shu sababli aniq raqam yozmaymiz.

Bu savolni ko‘pincha kanallardagi tabrik postlarini ko‘rgan foydalanuvchilar qidiradi. Bunday postlarda yosh ham aytiladi. Lekin kanal posti rasmiy manba emas. Undagi raqam xato bo‘lishi yoki boshqa joydan tekshirilmay ko‘chirilgan bo‘lishi mumkin.

Durovning aniq yoshi yoki tug‘ilgan sanasi kerak bo‘lsa, uni Telegram’ning rasmiy sahifalaridan izlang. Rasmiy tasdiq topilmasa, uchratgan raqamingizni taxminiy deb qabul qilgan ma’qul. Bu ayniqsa ish, o‘qish yoki taqdimot uchun ma’lumot yig‘ayotgan bo‘lsangiz muhim.

## Telegram haqidagi keng tarqalgan noto‘g‘ri tasavvurlar

Telegram tarixi haqida eshitilgan gaplarning hammasi ham rasmiy manbaga mos kelmaydi. Quyidagi jadvalda ko‘p uchraydigan fikrlar FAQ bilan solishtirilgan:

| Eshitilgan fikr | FAQ nima deydi |
|---|---|
| «Telegram’ni faqat Pavel Durov qilgan» | Telegram ortida Pavel va akasi Nikolay turadi |
| «Telegram hozir ham Rossiyada ishlaydi» | Jamoa Rossiyani tark etgan, dasturchilar Dubayda joylashgan |
| «Telegram avval Android uchun chiqqan» | Birinchi bo‘lib iOS versiyasi chiqqan, Android alfasi keyinroq paydo bo‘lgan |
| «Texnik qismni tashqi kompaniya yozgan» | Maxsus ma’lumot protokolini Nikolay Durov ishlab chiqqan |

Jadvalda bo‘lmagan da’volarni uchratsangiz, xuddi shunday yo‘l tuting: avval rasmiy sahifada shu haqda yozilganmi, shuni tekshiring.

## Durov haqidagi kanal xabarlarini qanday tekshirish mumkin?

Durov va Telegram haqidagi xabarlar tez tarqaladi, ular orasida mish-mish va reklama ham ko‘p. Quyidagi tartib ko‘p xatodan saqlaydi:

1. Xabarda manba bor-yo‘qligini ko‘ring. Kanal posti, hatto uning obunachilari ko‘p bo‘lsa ham, rasmiy manba hisoblanmaydi.
2. Da’voni [Telegram’ning rasmiy FAQ sahifasi](https://telegram.org/faq) yoki tegishli rasmiy sahifa bilan solishtiring. Sana, rol va joylashuv haqidagi gaplar odatda shu yerda bo‘ladi.
3. Narx, sovg‘a yoki «Durovga sovg‘a qilindi» kabi da’volarni rasmiy tasdiqsiz haqiqat deb qabul qilmang. Masalan, tabrik postlarida tilga olinadigan Lucky Locket #1 sovg‘asining narxi va kimdan kelgani tekshirilmagan.
4. Durov nomidan sovg‘a, Stars yoki Premium va’da qiladigan havola va botlardan ehtiyot bo‘ling. Hech kimga kod yoki parol bermang. Batafsil: [Premium xaridida firibgarlardan himoya](/blog/telegram-premium-firibgarlikdan-himoya).
5. «Wallet hamma uchun to‘liq ochiladi» kabi gaplarni rasmiy e’lon chiqmaguncha tilak yoki mish-mish deb hisoblang. Wallet haqida rasmiy sahifalarda nima yozilganini [Telegram Wallet qanday ochiladi](/blog/telegram-wallet-hamyon-ochish-faollashtirish) maqolasida o‘qing.

Oddiy qoida: xabar sizdan to‘lov, kod yoki botga kirish talab qilsa, avval tekshiring, keyin qaror qiling.

## Durov va NFT sovg‘alar haqidagi postlar

Tabrik postlarida ba’zan Durovga kolleksion (NFT) sovg‘a yuborilgani aytiladi va qimmat sotuv summasi keltiriladi. Sovg‘a haqiqatan yuborilgani ham, uning narxi ham bu maqolada tasdiqlanmagan.

Bunday postlar sovg‘alarga qiziqishni oshiradi. Mavzuga kirib qolgan bo‘lsangiz, avval asosiy tushunchalarni bilib oling:

- Oddiy sovg‘alar nima va ular Stars bilan qanday yuboriladi: [Telegram sovg‘alari (Gifts) haqida](/blog/telegram-gifts-sovgalar).
- Sovg‘a qanday qilib noyob NFT’ga aylanadi: [NFT sovg‘alar nima](/blog/telegram-nft-sovgalar).
- NFT sovg‘ani qayerda sotish mumkin: [NFT sovg‘ani sotish yo‘llari](/blog/telegram-nft-sovga-sotish-marketpleys).

Sovg‘alar atrofida aldash holatlari ham uchraydi. «Sovg‘ani qimmat sotib beraman» yoki «avval Stars yuboring, keyin sovg‘a olasiz» kabi takliflarga shoshilmang. Bitimni faqat Telegram ichidagi funksiyalar orqali qiling.

## Telegram Premium’ni kim beradi va uni qayerdan olish mumkin?

Premium statusini faqat Telegram beradi. Shu sababli «soxta Premium» degan narsa texnik jihatdan mavjud emas: obuna akkauntda yo bor, yo yo‘q. Premium nima berishini [Telegram Premium nima](/blog/telegram-premium-nima) maqolasida o‘qing.

O‘zbekistonda Premium’ni so‘mda olish yo‘llaridan biri — Premiumtg xizmati. Premiumtg mustaqil xizmat va Telegram nomidan ish yuritmaydi. Ishlash tartibi quyidagicha:

- Faqat username kerak. Akkauntga kirish, login kodi yoki parol so‘ralmaydi.
- To‘lov so‘mda: Click, Payme, Paynet yoki Uzum Bank. Xorijiy karta kerak emas.
- Obuna 10 soniyada avtomatik faollashadi.

| Paket | Narx |
|---|---|
| 3 oy | ${narx(3)} |
| 6 oy | ${narx(6)} |
| 12 oy | ${narx(12)} |

Narx va mavjud to‘lov usullarini xariddan oldin [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida tekshiring. Savollar bo‘yicha yordam xizmatiga yozing: [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport).

## Ko‘p so‘raladigan savollar

### Telegram’ni yolg‘iz Pavel Durov yaratganmi?

Yo‘q. Rasmiy FAQ Telegram ortida Pavel bilan birga uning akasi Nikolay ham turishini aytadi. Pavel loyihani moliyalaydi va g‘oyaviy qo‘llab-quvvatlaydi, texnik hissa esa Nikolayga tegishli.

### Nikolay Durov kim va Telegram’da nima qilgan?

Nikolay — Pavel Durovning akasi. U Telegram uchun ochiq, xavfsiz va bir nechta data-markazda ishlay oladigan maxsus ma’lumot almashish protokolini yaratgan.

### Telegram birinchi bo‘lib qaysi platformada chiqqan?

Birinchi bo‘lib iPhone’da: iOS versiyasi 2013-yil 14-avgustda ishga tushgan. Android uchun alfa versiyasi o‘sha yilning 20-oktyabrida rasman chiqqan.

### Pavel Durovning yoshini qayerdan aniq bilsa bo‘ladi?

Telegram FAQ’da uning tug‘ilgan sanasi ham, yoshi ham berilmagan. Kanallardagi raqamlarga tayanmang, kerak bo‘lsa Telegram’ning rasmiy sahifalaridan izlang.

### Telegram hozir qaysi shaharda joylashgan?

FAQ’ga ko‘ra, dasturchilar jamoasi Dubayda ishlaydi. Undan oldin jamoa Berlin, London va Singapur kabi shaharlarni ham baza sifatida sinab ko‘rgan.

### Telegram nega Rossiyadan chiqib ketgan?

Rasmiy FAQ sabab sifatida mahalliy IT qoidalarini ko‘rsatadi: jamoa shular tufayli mamlakatni tark etishga majbur bo‘lgan. Dasturchilarning ko‘pchiligi asli Sankt-Peterburgdan.

### Durov nomidan sovg‘a yoki Premium va’da qilayotgan botlarga ishonsa bo‘ladimi?

Yo‘q, bunday takliflar ko‘pincha akkaunt yoki pulni egallashga urinish bo‘ladi. Login kodi va parolni hech kimga bermang. Premium olish uchun username’ingizning o‘zi yetarli.`,
    ru: `## Кто создал Telegram: Павел Дуров или братья Дуровы?

По данным официальной страницы FAQ Telegram, за мессенджером стоят Павел Дуров и его брат Николай Дуров. Поэтому на вопрос «кто основатель Telegram» точнее ответить так: Telegram — проект братьев Дуровых.

Многие каналы, в том числе в поздравительных постах, называют «создателем Telegram» только Павла. Это упрощённый ответ. Официальный FAQ упоминает обоих братьев и отдельно описывает вклад каждого.

Источник можно открыть самостоятельно: на странице [Telegram FAQ](https://telegram.org/faq) найдите вопросы о команде. Все факты об истории Telegram в этой статье взяты оттуда.

## Какую роль Павел и Николай Дуровы играют в Telegram?

FAQ чётко разделяет их задачи. Коротко: Павел — идеи и финансы, Николай — технологии.

| Кто | Роль в Telegram | Источник |
|---|---|---|
| Павел Дуров | Поддерживает Telegram финансово и идейно | Telegram FAQ |
| Николай Дуров | Отвечает за технологическую часть | Telegram FAQ |
| Николай Дуров | Разработал для Telegram собственный протокол передачи данных | Telegram FAQ |

Протокол Николая FAQ описывает тремя свойствами: он открытый, защищённый и оптимизирован для работы с несколькими дата-центрами. По формулировке FAQ, именно этот протокол был создан, чтобы Telegram вообще стал возможен.

Поэтому представлять Telegram делом одного человека не совсем верно. Павел финансирует проект и задаёт его идейное направление. Технической основой приложения занимается Николай.

## Когда появился Telegram?

Официальный FAQ не указывает, когда была основана компания. В нём есть только даты выхода приложений. Поэтому самый надёжный ответ на вопрос «когда создан Telegram» — дни запуска первых версий.

| Дата | Событие | Источник |
|---|---|---|
| 14 августа 2013 года | Запущена версия Telegram для iOS | Telegram FAQ |
| 20 октября 2013 года | Официально запущена альфа-версия для Android | Telegram FAQ |

Значит, сначала Telegram вышел для пользователей iPhone. Версия для Android появилась примерно через два месяца в статусе альфы. Если встретите в интернете другие даты, сверьте их с FAQ. Одни источники называют дату основания компании, другие — день выхода приложения, отсюда и путаница.

## Где находится команда Telegram?

О расположении и истории команды FAQ сообщает следующее:

- Команда разработчиков Telegram базируется в Дубае.
- Большинство разработчиков родом из Санкт-Петербурга.
- Команде пришлось покинуть Россию из-за местного регулирования в сфере IT.
- После этого она пробовала несколько городов в качестве базы, в том числе Берлин, Лондон и Сингапур.

Практический вывод для пользователя в Узбекистане: правила, функции приложения и статус Premium контролирует только Telegram. Местные каналы, боты или магазины не могут принимать решения от имени Telegram.

## Сколько лет Павлу Дурову?

> Дата рождения и возраст Дурова в проверенном нами официальном источнике (Telegram FAQ) не указаны. Цифры, которые расходятся по каналам, включая возраст из поздравительных постов, в этой статье не подтверждены. Поэтому точную цифру мы не приводим.

Этот вопрос чаще всего ищут те, кто увидел поздравления в каналах. В таких постах обычно называют и возраст. Но пост в канале — не официальный источник. Цифра в нём может быть ошибочной или скопированной откуда-то без проверки.

Если вам нужен точный возраст или дата рождения Дурова, ищите их на официальных страницах Telegram. Если подтверждения нет, лучше считать найденную цифру приблизительной. Особенно это важно, когда вы собираете данные для работы, учёбы или презентации.

## Распространённые заблуждения о Telegram

Не всё, что говорят об истории Telegram, совпадает с официальным источником. В таблице популярные утверждения сверены с FAQ:

| Что говорят | Что сказано в FAQ |
|---|---|
| «Telegram сделал только Павел Дуров» | За Telegram стоят Павел и его брат Николай |
| «Telegram до сих пор работает в России» | Команда покинула Россию, разработчики базируются в Дубае |
| «Telegram сначала вышел на Android» | Первой вышла версия для iOS, альфа для Android появилась позже |
| «Техническую часть написала сторонняя компания» | Собственный протокол передачи данных разработал Николай Дуров |

Если встретите утверждение, которого нет в таблице, действуйте так же: сначала проверьте, написано ли об этом на официальной странице.

## Как проверять новости о Дурове из каналов?

Новости о Дурове и Telegram разлетаются быстро, и среди них много слухов и рекламы. Этот порядок действий убережёт от многих ошибок:

1. Посмотрите, указан ли в сообщении источник. Пост в канале, даже с большим числом подписчиков, официальным источником не считается.
2. Сверьте утверждение с [официальной страницей FAQ Telegram](https://telegram.org/faq) или другой профильной официальной страницей. Даты, роли и местоположение обычно описаны именно там.
3. Не принимайте за правду без официального подтверждения цены, подарки или фразы вроде «подарили Дурову». Например, цена подарка Lucky Locket #1, который упоминают в поздравительных постах, и то, от кого он пришёл, не проверены.
4. Будьте осторожны со ссылками и ботами, которые от имени Дурова обещают подарки, Stars или Premium. Никому не передавайте код или пароль. Подробнее: [как защититься от мошенников при покупке Premium](/blog/telegram-premium-firibgarlikdan-himoya).
5. Фразы вроде «Wallet полностью откроют для всех» считайте пожеланием или слухом, пока нет официального объявления. Что о Wallet написано на официальных страницах, читайте в статье [как открыть Telegram Wallet](/blog/telegram-wallet-hamyon-ochish-faollashtirish).

Простое правило: если сообщение требует оплаты, кода или перехода в бота, сначала проверьте, потом решайте.

## Посты о Дурове и NFT-подарках

В поздравительных постах иногда пишут, что Дурову отправили коллекционный (NFT) подарок, и называют крупную сумму продажи. Ни сам факт отправки, ни цена подарка в этой статье не подтверждены.

Такие посты подогревают интерес к подаркам. Если вы увлеклись темой, сначала разберитесь в основах:

- Что такое обычные подарки и как их отправляют за Stars: [о подарках Telegram (Gifts)](/blog/telegram-gifts-sovgalar).
- Как подарок превращается в уникальный NFT: [что такое NFT-подарки](/blog/telegram-nft-sovgalar).
- Где можно продать NFT-подарок: [способы продажи NFT-подарка](/blog/telegram-nft-sovga-sotish-marketpleys).

Вокруг подарков встречается и обман. Не спешите соглашаться на предложения вроде «продам ваш подарок дорого» или «сначала пришлите Stars, потом получите подарок». Проводите сделки только через встроенные функции Telegram.

## Кто выдаёт Telegram Premium и где его купить?

Статус Premium выдаёт только Telegram. Поэтому «поддельного Premium» технически не существует: подписка на аккаунте либо есть, либо её нет. Что даёт Premium, читайте в статье [что такое Telegram Premium](/blog/telegram-premium-nima).

Один из способов купить Premium в Узбекистане за сумы — сервис Premiumtg. Premiumtg — независимый сервис и не действует от имени Telegram. Как это работает:

- Нужен только username. Вход в аккаунт, код для входа или пароль не запрашиваются.
- Оплата в сумах: Click, Payme, Paynet или Uzum Bank. Зарубежная карта не нужна.
- Подписка активируется автоматически за 10 секунд.

| Пакет | Цена |
|---|---|
| 3 месяца | ${narx(3)} |
| 6 месяцев | ${narx(6)} |
| 12 месяцев | ${narx(12)} |

Перед покупкой проверьте цену и доступные способы оплаты в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). С вопросами пишите в поддержку: [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport).

## Часто задаваемые вопросы

### Telegram создал один Павел Дуров?

Нет. Официальный FAQ говорит, что вместе с Павлом за Telegram стоит его брат Николай. Павел финансирует проект и поддерживает его идейно, а технический вклад принадлежит Николаю.

### Кто такой Николай Дуров и что он сделал для Telegram?

Николай — брат Павла Дурова. Он создал для Telegram собственный протокол обмена данными: открытый, защищённый и рассчитанный на работу с несколькими дата-центрами.

### На какой платформе Telegram вышел первым?

Первым был iPhone: версия для iOS запущена 14 августа 2013 года. Альфа-версия для Android официально вышла 20 октября того же года.

### Где узнать точный возраст Павла Дурова?

В Telegram FAQ нет ни даты его рождения, ни возраста. Не полагайтесь на цифры из каналов — при необходимости ищите данные на официальных страницах Telegram.

### В каком городе сейчас находится Telegram?

По данным FAQ, команда разработчиков работает в Дубае. До этого команда пробовала в качестве базы и другие города — Берлин, Лондон и Сингапур.

### Почему Telegram уехал из России?

Официальный FAQ называет причиной местное IT-регулирование: из-за него команде пришлось покинуть страну. Большинство разработчиков родом из Санкт-Петербурга.

### Можно ли доверять ботам, которые от имени Дурова обещают подарки или Premium?

Нет, чаще всего это попытка завладеть аккаунтом или деньгами. Никому не сообщайте код для входа и пароль. Для покупки Premium достаточно одного вашего username.`,
  },
};
