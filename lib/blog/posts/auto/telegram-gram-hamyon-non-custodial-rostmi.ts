// Avtoblogyoz yasagan maqola (2026-11-12). Niyat: Kanallarda «Telegram’ga o‘rnatilgan non-custodial Gram hamyon» haqida o‘qigan O‘zbekistondagi Telegram foydalanuvchisi «Telegram Gram hamyon non-custodial rostmi, komissiyasizmi» deb qidiradi. U bu rasmiy e’lonmi, non-custodial nimani anglatadi va mablag‘i uchun nima o‘zgarishini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://ton.org/
//   https://core.telegram.org/bots/widgets
//   https://core.telegram.org/bots/api-changelog
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-gram-hamyon-non-custodial-rostmi",
  date: "2026-11-12",
  reviewed: "2026-11-12",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegram Gram hamyon non-custodial rostmi va komissiyasizmi?", ru: "Gram-кошелёк в Telegram: правда ли он некастодиальный и без комиссии?" },
  excerpt: { uz: `Qisman rost: ton.org Telegram’ga o‘rnatilgan non-custodial Gram hamyon borligini yozadi. Lekin «komissiyasiz» degan gap tasdiqlanmagan, chunki TON’da o‘tkazmaning qat’iy komissiyasi bor.`, ru: `Отчасти правда: ton.org пишет о встроенном в Telegram некастодиальном Gram-кошельке. А вот «без комиссии» не подтверждается: у переводов в TON есть фиксированная комиссия.` },
  keywords: ["telegram gram hamyon non-custodial","gram hamyon telegram","telegram ichidagi kripto hamyon","gram wallet komissiya","non-custodial hamyon nima","telegram gram wallet o'zbekistonda","некастодиальный кошелек gram telegram","кошелек gram в телеграм","gram wallet комиссия","встроенный кошелек telegram","telegram gram кошелек без комиссии"],
  related: ["telegram-wallet-walt-nomi-ozgardimi","telegram-wallet-hamyon-ochish-faollashtirish","telegram-hamyon-username-boyicha-otkazma","telegram-wallet-ulanishlar-sinxronlash-xavfsizlik"],
  sources: [{"url":"https://ton.org/","title":"TON — The Leading L1 Blockchain"},{"url":"https://core.telegram.org/bots/widgets","title":"Telegram Widgets"},{"url":"https://core.telegram.org/bots/api-changelog","title":"Bot API changelog"}],
  content: {
    uz: `## Telegram’da non-custodial Gram hamyon borligi rostmi?

Qisman rost. TON’ning rasmiy saytida Telegram jamoasining non-custodial Gram hamyoni messenger interfeysiga o‘rnatilgani yozilgan ([ton.org](https://ton.org/)).

Telegram’ning dasturchilar uchun hujjatida ham o‘rnatilgan hamyon tilga olinadi. Unga ko‘ra, vidjet foydalanuvchidan shu hamyon orqali to‘lov yoki imzo so‘rashi mumkin ([Telegram Widgets](https://core.telegram.org/bots/widgets)).

Lekin telegram.org blogida bu haqda alohida e’lon topilmadi. Kanallarda yozilgan «bu yoz» degan muddat ham, «insoniyat tarixidagi eng yirik» degan baho ham rasmiy manbalarda yo‘q.

Mavzu Telegram kanallarida tarqalgan postdan chiqqan. Kanal posti rasmiy manba emas, shuning uchun undagi da’volarni quyida birma-bir rasmiy sahifalar bilan solishtirdik.

## Kanal posti nima deydi va rasmiy manbalar nima deydi?

Postdagi da’volarning bir qismi tasdiqlanadi, bir qismi esa rasmiy ma’lumotga zid.

| Postdagi da’vo | Rasmiy manbada | Holat |
|---|---|---|
| Non-custodial Gram hamyon | ton.org: Telegram jamoasining non-custodial Gram hamyoni | Tasdiqlangan |
| Telegram ichiga o‘rnatilgan | ton.org va core.telegram.org | Tasdiqlangan |
| Komissiyasiz o‘tkazmalar | ton.org o‘tkazmalarning qat’iy komissiyasi borligini yozadi | Mos kelmaydi |
| Har bir foydalanuvchi uchun, milliarddan ortiq odamga | Telegram hujjatiga ko‘ra, hamyon ba’zi mamlakatlarda mavjud emas | Mos kelmaydi |
| «Bu yoz», «tarixdagi eng yirik» | Rasmiy manbalarda topilmadi | Tasdiqlanmagan |

Jadvaldan bitta qoida chiqadi: kanal postini o‘qigach, undagi raqam va va’dalarni rasmiy sahifadan tekshiring. Hamyon nomi bo‘yicha ham shunday mish-mish tarqalgan edi, u haqda [Telegram Wallet Walt bo‘ldimi](/blog/telegram-wallet-walt-nomi-ozgardimi) maqolasida yozganmiz.

## Non-custodial hamyon nimani anglatadi?

Farq hamyon kalitini kim saqlashida. Hamyonni ochish kaliti o‘tkazmani tasdiqlash huquqini beradi.

| | Custodial hamyon | Non-custodial hamyon |
|---|---|---|
| Kalit kimda | Xizmatda (birja, bot) | Foydalanuvchining qurilmasida |
| O‘tkazmani kim tasdiqlaydi | Amalda xizmat | Foydalanuvchining o‘zi |
| Kalit yo‘qolsa | Xizmat orqali tiklash mumkin bo‘lishi mumkin | Javobgarlik foydalanuvchida |

Telegram hujjati bu farqni amalda ko‘rsatadi:

- To‘lovni foydalanuvchi qurilmasidagi hamyon amalga oshiradi. U profilda ko‘rinadigan hamyon kartasidan farq qilishi mumkin.
- Hamyonning zaxira nusxasi o‘chiq bo‘lsa, har bir qurilmada alohida kalit va alohida hamyon bo‘ladi. Ya’ni telefon va kompyuterdagi hamyon ikki xil bo‘lishi mumkin.

Bulut zaxirasi qanday ishlashi va u non-custodial tamoyiliga qanday ta’sir qilishi rasman tushuntirilmagan. Buni ilovaning o‘zida tekshiring.

Amalda bu shuni anglatadi: kalit sizda bo‘lsa, javobgarlik ham sizda. Pul qo‘yishdan oldin hamyonni qanday tiklash mumkinligini aniqlang. Seed-ibora, tiklash so‘zlari va Telegram kodlarini hech kimga bermang. Hamyonni saytlar va qurilmalarga ulash xavfi haqida [ulanishlar va sinxronlash](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik) maqolasida batafsil yozilgan.

## Gram hamyonda o‘tkazma rostdan komissiyasizmi?

Yo‘q, rasmiy manbada «komissiyasiz» deyilmagan. Aksincha, komissiya aniq ko‘rsatilgan.

> Gram — TON blokcheynining asosiy tangasi, tarmoqda komissiya aynan Gram bilan to‘lanadi. ton.org ma’lumotiga ko‘ra, Gram o‘tkazmasi taxminan 0,00039 Gram, USDt o‘tkazmasi esa taxminan 0,001 Gram turadi. Komissiyalar qat’iy belgilangan va tarmoq yuklamasiga bog‘liq emas.

Bu summa juda kichik, shuning uchun ba’zi kanallar uni «nol» deb yozadi. Lekin kichik komissiya komissiya yo‘qligini anglatmaydi. Hamyondagi butun qoldiqni yubormoqchi bo‘lsangiz, komissiyaga ham Gram kerak bo‘ladi. Hamyonda umuman Gram bo‘lmasa, USDt o‘tkazmasi ham bajarilmasligi mumkin.

Telegram komissiyani o‘zi qoplashi haqidagi gaplar bu maqolada tasdiqlanmagan. Yakuniy summani har safar yuborishdan oldin tasdiqlash oynasida ko‘ring.

## Hamyon qanday paydo bo‘ladi va to‘lov qanday tasdiqlanadi?

Quyidagi qadamlar Telegram hujjati (vidjetlar bo‘yicha) va ton.org (mini-ilovalar bo‘yicha) asosida tuzilgan. Har qadamda nimaga e’tibor berish kerakligini ham yozdik.

1. Hamyoni yo‘q foydalanuvchiga hamyon birinchi marta kerak bo‘lganda yaratiladi.
2. Vidjet o‘rnatilgan hamyon orqali to‘lov yoki imzo so‘raydi. Mini-ilovalar esa hamyonga TON Connect yoki deeplink orqali ulanadi.
3. Ilova oynasida bot, summa va qabul qiluvchilar ko‘rsatiladi. Uchalasini ham o‘qing: bot nomi siz ochgan bot bilan bir xilmi, summa kutganingizdekmi, qabul qiluvchi tanishmi.
4. Tasdiqni faqat foydalanuvchining o‘zi beradi. Notanish bot to‘lov yoki imzo so‘rasa, bekor qiling.
5. Pul qurilmangizdagi hamyondan yechiladi, profildagi kartadan emas. Qurilmalaringiz ko‘p bo‘lsa, qaysi hamyondan to‘layotganingizni tekshiring.

Imzo so‘rovi ham to‘lov kabi jiddiy. Ekranda summa ko‘rinmasa ham, imzo orqali biror amalga rozilik berasiz. Nimaga imzo qo‘yayotganingiz tushunarsiz bo‘lsa, tasdiqlamang.

## Gram hamyon bilan Telegram ichida nima qilish mumkin?

Rasmiy manbalarda quyidagi imkoniyatlar sanalgan:

- **Stars sotib olish.** ton.org’ga ko‘ra, Telegram Stars’ni Gram bilan olib, Telegram ichidagi raqamli tovar, kontent va xizmatlarga ishlatish mumkin. Stars nima ekanini [Telegram Stars nima](/blog/telegram-stars-nima) maqolasida tushuntirganmiz.
- **Reklama daromadini olish.** Telegram reklama daromadi Gram’da to‘lanishi mumkin. Bu kanal egalariga tegishli.
- **Mini-ilovalarda to‘lash.** Mini-ilovalar hamyonga TON Connect va deeplink orqali ulanadi.
- **Profilda hamyon ko‘rsatish.** [Bot API o‘zgarishlar ro‘yxatiga](https://core.telegram.org/bots/api-changelog) ko‘ra, TON hamyon kartasi, NFT va ularning atributlari uchun yangi klasslar, shuningdek TON hamyon o‘tkazmalari haqidagi xizmat xabarlari qo‘shilgan.

Username bo‘yicha pul yuborish kabi boshqa da’volar hali rasman tasdiqlanmagan. Bu haqda [username orqali o‘tkazma](/blog/telegram-hamyon-username-boyicha-otkazma) maqolasini o‘qing.

## O‘zbekistonda Gram hamyon ishlaydimi?

Rasmiy manbalarda O‘zbekiston bo‘yicha alohida ma’lumot yo‘q.

Telegram hujjatiga ko‘ra, hamyon ikki holatda bo‘lmaydi: ilovaning eski versiyasida va hamyon mavjud bo‘lmagan mamlakatlarda. Bu mamlakatlar qaysilar ekani ko‘rsatilmagan.

O‘zingiz shunday tekshirasiz:

- Telegram’ni rasmiy do‘kondan oxirgi versiyagacha yangilang.
- Sozlamalarda hamyon bo‘limi bor-yo‘qligini qarang. Bo‘limning aniq nomi rasman tasdiqlanmagan, shuning uchun «hamyon» yoki «wallet» so‘zlarini izlang.
- Bo‘lim bo‘lmasa, uni «ochib beramiz» degan begona bot yoki odamlarga ishonmang.

Gram’ni Click, Payme, Paynet yoki Uzum Bank orqali to‘ldirish bo‘yicha rasmiy ma’lumot topilmadi. Shunday xizmat taklif qilinsa, sotuvchini alohida tekshiring. Hamyonni ochish va boshlang‘ich to‘lov masalasi [Telegram Wallet qanday ochiladi](/blog/telegram-wallet-hamyon-ochish-faollashtirish) maqolasida yoritilgan.

## Telegram Premium olish uchun Gram hamyon kerakmi?

Yo‘q. Premiumtg orqali Telegram Premium faqat username bilan, so‘mda olinadi. Akkauntga kirish, login kodi yoki parol so‘ralmaydi, obuna 10 soniyada avtomatik faollashadi.

To‘lov Click, Payme, Paynet yoki Uzum Bank orqali qilinadi. Xorijiy karta ham, kripto hamyon ham kerak emas.

| Paket | Narx |
|---|---|
| 3 oy | ${narx(3)} |
| 6 oy | ${narx(6)} |
| 12 oy | ${narx(12)} |

Narx va mavjud to‘lov usullarini xariddan oldin [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida tekshiring. Premiumtg mustaqil xizmat, Premium statusni esa faqat Telegram beradi.

Kripto yo‘lini ham ko‘rib chiqmoqchi bo‘lsangiz, [TON orqali Telegram Premium](/blog/ton-orqali-telegram-premium) maqolasida qadamlar va xarajatlar solishtirilgan.

## Ko‘p so‘raladigan savollar

### Gram va TON bir narsami?

Yo‘q. TON — blokcheyn nomi, Gram esa ton.org’ga ko‘ra shu blokcheynning asosiy tangasi. Tarmoqdagi komissiya ham Gram bilan to‘lanadi.

### Telegram’dagi Gram hamyon Wallet botidan farq qiladimi?

Rasmiy manbalarda ularni to‘g‘ridan-to‘g‘ri solishtirgan yozuv yo‘q. Gram hamyon messenger ichiga o‘rnatilgan va non-custodial deb ta’riflangan. Boshqa hamyon yoki botning shartlarini uning o‘z sahifasidan o‘qing.

### Telefon va kompyuterdagi Gram hamyonim nega har xil ko‘rinadi?

Zaxira nusxasi yoqilmagan bo‘lsa, Telegram hujjatiga ko‘ra har bir qurilmada o‘z kaliti bilan alohida hamyon bo‘ladi. Shuning uchun manzil ham, qoldiq ham qurilmaga qarab farq qilishi mumkin.

### Gram o‘tkazmasi uchun qancha komissiya to‘lanadi?

ton.org ma’lumotiga ko‘ra, Gram yuborish taxminan 0,00039 Gram, USDt yuborish esa taxminan 0,001 Gram turadi va tarmoq band bo‘lganda ham o‘zgarmaydi. Aniq summani yuborishdan oldin tasdiqlash oynasida ko‘rasiz.

### Hamyonni yo‘qotsam, Telegram mablag‘imni qaytarib bera oladimi?

Rasmiy manbalarda bunday va’da yo‘q. Non-custodial hamyonda kalit sizning qurilmangizda turadi, shuning uchun tiklash usulini pul qo‘yishdan oldin ilovada aniqlab qo‘ying.

### Kanalda «Gram airdrop» yoki tekin Gram tarqatish e’lon qilinsa, ishonsa bo‘ladimi?

Rasmiy manbalarda bunday tarqatish haqida ma’lumot topilmadi. Seed-ibora yoki login kodini so‘rash, «oldin ozgina yuboring» degan shart — firibgarlik belgisi.

### Gram bilan Telegram Stars sotib olsa bo‘ladimi?

Ha, ton.org’da Stars’ni Gram evaziga olish mumkinligi yozilgan. Bu usul sizning ilovangizda chiqadimi, buni xarid oynasida tekshiring.

### Sozlamalarda hamyon yo‘q, uni ochib beraman degan botga murojaat qilsam bo‘ladimi?

Yo‘q. Telegram hujjatiga ko‘ra, eski versiyada yoki hamyon mavjud bo‘lmagan mamlakatda u ko‘rinmaydi. Avval ilovani yangilang, begona botga kod yoki kalit bermang.`,
    ru: `## Правда ли, что в Telegram есть некастодиальный Gram-кошелёк?

Отчасти правда. На официальном сайте TON сказано, что некастодиальный Gram-кошелёк от команды Telegram встроен в интерфейс мессенджера ([ton.org](https://ton.org/)).

Встроенный кошелёк упоминается и в документации Telegram для разработчиков. По ней виджет может попросить пользователя оплатить что-то или поставить подпись через этот кошелёк ([Telegram Widgets](https://core.telegram.org/bots/widgets)).

При этом отдельного анонса в блоге telegram.org мы не нашли. Срока «этим летом», который называют в каналах, и оценки «крупнейший в истории человечества» в официальных источниках тоже нет.

Тема пошла от поста, который разошёлся по Telegram-каналам. Пост в канале — не официальный источник, поэтому ниже мы сверили каждое его утверждение с официальными страницами.

## Что пишет пост в канале и что говорят официальные источники?

Часть утверждений из поста подтверждается, часть противоречит официальным данным.

| Утверждение из поста | Что в официальном источнике | Статус |
|---|---|---|
| Некастодиальный Gram-кошелёк | ton.org: некастодиальный Gram-кошелёк от команды Telegram | Подтверждено |
| Встроен в Telegram | ton.org и core.telegram.org | Подтверждено |
| Переводы без комиссии | ton.org пишет, что у переводов есть фиксированная комиссия | Не совпадает |
| Для каждого пользователя, для миллиарда с лишним людей | По документации Telegram, в некоторых странах кошелёк недоступен | Не совпадает |
| «Этим летом», «крупнейший в истории» | В официальных источниках не найдено | Не подтверждено |

Отсюда простое правило: прочитали пост в канале — проверьте цифры и обещания на официальной странице. Похожий слух ходил и про название кошелька, о нём мы писали в статье [Telegram Wallet стал Walt?](/blog/telegram-wallet-walt-nomi-ozgardimi)

## Что значит «некастодиальный кошелёк»?

Всё упирается в то, у кого хранится ключ. Ключ от кошелька даёт право подтверждать переводы.

| | Кастодиальный кошелёк | Некастодиальный кошелёк |
|---|---|---|
| У кого ключ | У сервиса (биржа, бот) | На устройстве пользователя |
| Кто подтверждает перевод | Фактически сервис | Сам пользователь |
| Если ключ потерян | Возможно, восстановят через сервис | Ответственность на пользователе |

На практике эту разницу видно по документации Telegram:

- Платёж проводит кошелёк на устройстве пользователя. Он может отличаться от карточки кошелька, которая видна в профиле.
- Если резервная копия кошелька выключена, на каждом устройстве свой ключ и свой кошелёк. То есть кошельки на телефоне и на компьютере могут оказаться разными.

Как работает облачная резервная копия и как она соотносится с принципом некастодиальности, официально не объяснено. Проверьте это в самом приложении.

Проще говоря: если ключ у вас, то и ответственность на вас. Прежде чем класть деньги, выясните, как восстановить кошелёк. Seed-фразу, слова для восстановления и коды Telegram никому не передавайте. О рисках подключения кошелька к сайтам и устройствам подробно рассказано в статье [о подключениях и синхронизации](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik).

## Переводы в Gram-кошельке действительно без комиссии?

Нет. В официальном источнике не сказано «без комиссии», наоборот, комиссия там указана.

> Gram — основная монета блокчейна TON, комиссии в сети платятся именно в Gram. По данным ton.org, перевод Gram стоит примерно 0,00039 Gram, перевод USDt — примерно 0,001 Gram. Комиссии фиксированные и не зависят от нагрузки на сеть.

Сумма очень маленькая, поэтому некоторые каналы называют её «нулевой». Но маленькая комиссия — это всё равно комиссия. Если хотите отправить весь остаток, часть Gram уйдёт на комиссию. Если Gram в кошельке нет совсем, перевод USDt тоже может не пройти.

Разговоры о том, что Telegram сам покрывает комиссию, в этой статье не подтверждены. Итоговую сумму каждый раз смотрите в окне подтверждения перед отправкой.

## Как появляется кошелёк и как подтверждается платёж?

Шаги ниже составлены по документации Telegram (про виджеты) и ton.org (про мини-приложения). На каждом шаге указано, на что смотреть.

1. Если кошелька у пользователя нет, он создаётся в тот момент, когда понадобится впервые.
2. Виджет запрашивает оплату или подпись через встроенный кошелёк. Мини-приложения подключаются к кошельку через TON Connect или deeplink.
3. В окне приложения показаны бот, сумма и получатели. Прочитайте все три пункта: совпадает ли бот с тем, который вы открыли, та ли сумма, знаком ли получатель.
4. Подтверждение даёт только сам пользователь. Если оплату или подпись просит незнакомый бот, отмените.
5. Деньги списываются с кошелька на вашем устройстве, а не с карточки в профиле. Если устройств несколько, проверьте, с какого кошелька вы платите.

Запрос подписи так же серьёзен, как платёж. Даже если сумма на экране не видна, подписью вы даёте согласие на какое-то действие. Если непонятно, что именно вы подписываете, не подтверждайте.

## Что можно делать с Gram-кошельком внутри Telegram?

В официальных источниках перечислены такие возможности:

- **Покупать Stars.** По ton.org, Telegram Stars можно купить за Gram и тратить на цифровые товары, контент и услуги внутри Telegram. Что такое Stars, мы объясняли в статье [Что такое Telegram Stars](/blog/telegram-stars-nima).
- **Получать доход от рекламы.** Доход от рекламы в Telegram может выплачиваться в Gram. Это касается владельцев каналов.
- **Платить в мини-приложениях.** Мини-приложения подключаются к кошельку через TON Connect и deeplink.
- **Показывать кошелёк в профиле.** Согласно [списку изменений Bot API](https://core.telegram.org/bots/api-changelog), появились новые классы для карточки TON-кошелька, NFT и их атрибутов, а также служебные сообщения о переводах из TON-кошелька.

Другие утверждения, например про отправку денег по username, официально пока не подтверждены. Об этом — в статье [о переводе по username](/blog/telegram-hamyon-username-boyicha-otkazma).

## Работает ли Gram-кошелёк в Узбекистане?

Отдельных данных по Узбекистану в официальных источниках нет.

По документации Telegram, кошелька нет в двух случаях: в старой версии приложения и в странах, где кошелёк недоступен. Какие это страны, не указано.

Проверить можно самому:

- Обновите Telegram до последней версии из официального магазина приложений.
- Посмотрите, есть ли в настройках раздел кошелька. Точное название раздела официально не подтверждено, поэтому ищите слова «кошелёк» или «wallet».
- Если раздела нет, не доверяйте посторонним ботам и людям, которые обещают его «открыть».

Официальной информации о пополнении Gram через Click, Payme, Paynet или Uzum Bank мы не нашли. Если вам предлагают такую услугу, проверяйте продавца отдельно. Как открыть кошелёк и нужен ли стартовый платёж, разобрано в статье [Как открыть Telegram Wallet](/blog/telegram-wallet-hamyon-ochish-faollashtirish).

## Нужен ли Gram-кошелёк, чтобы купить Telegram Premium?

Нет. Через Premiumtg Telegram Premium покупается в сумах, нужен только username. Вход в аккаунт, код входа или пароль не запрашиваются, подписка активируется автоматически за 10 секунд.

Оплата — через Click, Payme, Paynet или Uzum Bank. Ни зарубежная карта, ни криптокошелёк не нужны.

| Пакет | Цена |
|---|---|
| 3 месяца | ${narx(3)} |
| 6 месяцев | ${narx(6)} |
| 12 месяцев | ${narx(12)} |

Цену и доступные способы оплаты проверьте перед покупкой в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Premiumtg — независимый сервис, а статус Premium выдаёт только Telegram.

Если хотите рассмотреть и крипто-вариант, в статье [Telegram Premium через TON](/blog/ton-orqali-telegram-premium) сравнены шаги и расходы.

## Часто задаваемые вопросы

### Gram и TON — это одно и то же?

Нет. TON — это название блокчейна, а Gram, по данным ton.org, его основная монета. Комиссии в сети тоже платятся в Gram.

### Gram-кошелёк в Telegram отличается от бота Wallet?

Прямого сравнения в официальных источниках нет. Gram-кошелёк описан как встроенный в мессенджер и некастодиальный. Условия другого кошелька или бота читайте на его собственной странице.

### Почему мой Gram-кошелёк на телефоне и на компьютере выглядит по-разному?

По документации Telegram, если резервная копия не включена, на каждом устройстве свой кошелёк со своим ключом. Поэтому и адрес, и баланс могут различаться в зависимости от устройства.

### Какая комиссия за перевод Gram?

По данным ton.org, отправка Gram обходится примерно в 0,00039 Gram, отправка USDt — примерно в 0,001 Gram, и даже при загруженной сети сумма не меняется. Точную цифру вы увидите в окне подтверждения перед отправкой.

### Если я потеряю кошелёк, Telegram вернёт мои деньги?

Такого обещания в официальных источниках нет. В некастодиальном кошельке ключ лежит на вашем устройстве, так что способ восстановления лучше выяснить в приложении до того, как класть туда деньги.

### В канале объявили «Gram airdrop» или раздачу Gram — можно верить?

В официальных источниках о такой раздаче ничего не найдено. Просьба прислать seed-фразу или код входа, условие «сначала отправьте немного» — признаки мошенничества.

### Можно ли купить Telegram Stars за Gram?

Да, на ton.org сказано, что Stars можно приобрести за Gram. Появится ли этот способ в вашем приложении, проверьте в окне покупки.

### В настройках нет кошелька — можно обратиться к боту, который обещает его открыть?

Нет. По документации Telegram, в старой версии приложения или в стране, где кошелёк недоступен, он не отображается. Сначала обновите приложение и не передавайте посторонним ботам коды и ключи.`,
  },
};
