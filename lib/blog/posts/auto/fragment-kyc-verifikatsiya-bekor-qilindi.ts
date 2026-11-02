// Avtoblogyoz yasagan maqola (2026-11-03). Niyat: Fragment'dan foydalanmoqchi bo'lgan o'zbekistonlik Telegram foydalanuvchisi «Fragment KYC bekor qilindimi, verifikatsiyasiz akkaunt ulasa bo'ladimi» deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/terms
//   https://fragment.com/privacy
//   https://fragment.com/about
//   https://fragment.com/premium
//   https://telegram.org/tos/content-creator-rewards
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "fragment-kyc-verifikatsiya-bekor-qilindi",
  date: "2026-11-03",
  reviewed: "2026-11-03",
  category: "stars",
  priority: 0.7,
  title: { uz: "Fragment KYC bekor qilindimi? Verifikatsiyasiz akkaunt ulash mumkinmi", ru: "Fragment отменил KYC? Можно ли подключить аккаунт без верификации" },
  excerpt: { uz: `Fragment’ning rasmiy sahifalarida KYC talabi ham, uning bekor qilingani ham yozilmagan. Kirish alohida ro‘yxatdan o‘tishsiz, Telegram akkaunti va TON hamyon orqali amalga oshadi.`, ru: `На официальных страницах Fragment нет ни требования KYC, ни сообщения о его отмене. Вход проходит без отдельной регистрации, через аккаунт Telegram и TON-кошелёк.` },
  keywords: ["fragment kyc verifikatsiya","fragment kyc bekor qilindi","fragment verifikatsiyasiz","fragment akkaunt almashtirish","fragment ga telegram ulash","fragment 2fa xatosi","fragment o'zbekistonda","fragment kyc отменили","fragment верификация","fragment без kyc","как сменить аккаунт fragment","fragment привязать telegram и ton кошелек"],
  related: ["fragment-telegram-premium","ton-orqali-telegram-premium","telegram-nft-sovgalar","telegram-premium-sotib-olish-uzbekiston"],
  sources: [{"url":"https://fragment.com/terms","title":"Terms of Service"},{"url":"https://fragment.com/privacy","title":"Privacy"},{"url":"https://fragment.com/about","title":"https://fragment.com/about"},{"url":"https://fragment.com/premium","title":"Buy Telegram Premium"},{"url":"https://telegram.org/tos/content-creator-rewards","title":"Terms of Service for Content Creators"}],
  content: {
    uz: `## Fragment’da KYC haqiqatan bekor qilindimi?

Fragment’ning rasmiy sahifalarida KYC talabi yozilmagan. Uning bekor qilingani ham yozilmagan. Demak, Telegram kanallarida tarqalgan «KYC bekor qilindi, endi hamma uchun ochiq» degan xabarni rasmiy manba tasdiqlamaydi.

Fragment KYC’ni qachondir joriy qilgani haqida ham ma’lumot topilmadi. [Xizmat shartlari](https://fragment.com/terms) va [maxfiylik siyosati](https://fragment.com/privacy) sahifalaridagi o‘zgarishlar qaydida bu mavzuda yozuv yo‘q. Bekor qilish haqidagi rasmiy e’lon ham ko‘rinmaydi.

Shartlarda boshqa narsa yozilgan: platforma istalgan kishiga raqamli kolleksiya obyektlarini xavfsiz va anonim sotib olish imkonini beradi. Shuningdek, Telegram Premium obunasini sotib olish yoki sovg‘a qilish mumkin. Bu xizmatning umumiy tavsifi, KYC haqidagi e’lon emas.

> Amaliy maslahat: [fragment.com](https://fragment.com) saytini ochib, kirish bosqichida nima so‘ralishini o‘zingiz ko‘ring. Hujjat yoki selfi so‘ralmasa, quyidagi talablar bo‘yicha davom eting.

## «Verifikatsiya endi shart emas» degani nimani anglatadi?

Fragment’da alohida ro‘yxatdan o‘tish usuli yo‘q. Maxfiylik siyosatiga ko‘ra, kirish Telegram orqali va/yoki TON hamyon orqali bo‘ladi. Xizmat shartlarida ham platforma Telegram akkaunti va TON hamyonni ulash imkonini berishi yozilgan.

[Fragment haqidagi sahifaning](https://fragment.com/about) 2025-yil 14-noyabrdagi nusxasiga ko‘ra, taklif berish yoki xarid qilish uchun ikkalasini ham ulash so‘raladi. Shundan keyin bosh sahifadagi kerakli bo‘limga o‘tiladi.

Amalda sizga quyidagilar kerak bo‘ladi:

- **Telegram akkaunti** — Fragment’ga ulanadigan akkaunt.
- **TON hamyon** — taklif berish va xarid qilish uchun.
- **2FA paroli** — ayrim hollarda Fragment uning yo‘qligini to‘siq sifatida ko‘rsatadi. Bu haqda pastroqda.

Ro‘yxatda pasport, ID-karta yoki selfi yo‘q, chunki rasmiy matnlarda bunday talab tilga olinmagan. «Verifikatsiya shart emas» degan gapni shu ma’noda tushunish mumkin: kirish uchun hujjat emas, akkaunt va hamyon so‘raladi. Lekin bu «endi bekor qilindi» degani emas, chunki avval KYC bo‘lgani ham tasdiqlanmagan.

To‘lov valyutasi nomi va narxlarni Fragment sahifasining o‘zida tekshiring. Rasmiy sahifalarda bu borada ma’lumotlar bir-biriga to‘liq mos kelmaydi. Shuning uchun ular bu maqolada keltirilmaydi.

## Fragment qanday shaxsiy ma’lumotlarni saqlaydi?

KYC haqidagi savol odatda «ma’lumotlarim qayerga ketadi» degan xavotirdan chiqadi. Fragment bu borada o‘z hujjatlarida aniq bayonotlar beradi.

| Fragment nima deydi | Amalda nimani anglatadi |
|---|---|
| Alohida ro‘yxatdan o‘tish yo‘q, kirish Telegram va/yoki TON hamyon orqali | Anketa to‘ldirish yoki yangi parol yaratish shart emas |
| Ikki kirish usulini IP manzil, brauzer, qurilma, boshqa identifikatsiya ma’lumotiga yoki bir-biriga bog‘laydigan ma’lumot saqlanmaydi | Telegram akkaunt va hamyon Fragment tomonida bir-biriga bog‘lab saqlanmaydi |
| Xizmat uchun qat’iy zarur bo‘lmagan shaxsiy ma’lumot yig‘ilmaydi va qayta ishlanmaydi | Ortiqcha ma’lumot so‘ralishi kutilmaydi |
| Hech qanday shaxsiy ma’lumot saqlanmaydi | Fragment’ga ko‘ra, ma’lumotni o‘chirishni so‘rash zarurati yo‘q |
| TON hamyonga kirish huquqi yo‘q, uni sizga yoki akkauntlaringizga bog‘laydigan ma’lumot saqlanmaydi | Hamyon nazorati sizning qo‘lingizda qoladi |

Bular Fragment’ning o‘z bayonotlari ([maxfiylik siyosati](https://fragment.com/privacy), [xizmat shartlari](https://fragment.com/terms)). Hamyon tarmog‘idagi tranzaksiyalar alohida masala va bu maqolada tahlil qilinmaydi.

## «Istagancha akkauntdan ulaning» degani to‘g‘rimi?

Kanallarda «verifikatsiya yo‘q, istagancha akkauntdan ulaning» degan gaplar uchraydi. Rasmiy sahifada bunday imkoniyat yozilmagan. Fragment faqat bitta tartibni tushuntiradi: Telegram akkauntni saytdan to‘liq uzib, boshqa raqam bilan kirish.

Demak, bir nechta akkaunt bilan ishlash amalda ketma-ket almashtirish orqali bo‘ladi. Bir vaqtda nechta akkaunt ulash mumkinligi rasmiy manbada ko‘rsatilmagan va bu maqolada tasdiqlanmagan.

[Fragment haqidagi sahifaga](https://fragment.com/about) ko‘ra, akkaunt quyidagicha almashtiriladi:

1. Fragment’ga ulangan akkaunt ochiq turgan Telegram ilovasini oching.
2. Sessiyalar bo‘limiga kiring. Android’da: **Settings > Privacy & Security > Bots and websites > Logged in with Telegram**. iOS’da: **Settings > Privacy & Security > Active Websites > Logged in with Telegram**.
3. Ro‘yxatdan Fragment sessiyasini toping va uni o‘chiring.
4. Fragment saytini qayta oching va boshqa Telegram akkaunt bilan kiring.
5. Yangi akkauntda 2FA paroli o‘rnatilganini oldindan tekshiring. Parol bo‘lmasa, Fragment buni to‘siq sifatida ko‘rsatishi mumkin.

Akkaunt almashtirgandan keyin qaysi TON hamyon ulanganini ham ko‘zdan kechiring. Bir nechta akkaunt va hamyon bilan ishlaganda xarid noto‘g‘ri hamyondan qilinishi oson. Har bir xariddan oldin ekrandagi akkaunt nomi va hamyon manzilini solishtirish shunday xatoning oldini oladi.

## KYC bo‘lmasa ham nimalar to‘siq bo‘lishi mumkin?

Hujjat so‘ralmasligi barcha eshiklar ochiq degani emas. Fragment’ning o‘z sahifalarida boshqa cheklovlar yozilgan.

| To‘siq | Kimga tegishli | Nima qilish kerak |
|---|---|---|
| 2FA paroli o‘rnatilmagan yoki juda yaqinda o‘rnatilgan | Fragment shu holatni ko‘rsatgan akkauntlar | Telegram’da 2FA parolini o‘rnating va keyinroq qayta urinib ko‘ring |
| Davlat bo‘yicha cheklov | Fragment xizmatlarini cheklagan davlatlar foydalanuvchilari | Kerakli bo‘lim ochilishini saytda tekshiring |
| Reklama xaridi | Ayrim davlatlar foydalanuvchilari | Telegram siyosatiga ko‘ra cheklangan bo‘lishi mumkin |
| Mualliflar mukofotlari | Kontent mualliflari | Mukofot olish imkoniyatini Fragment’da tekshiring |
| Soliq va mahalliy qonunlar | Barcha foydalanuvchilar | Javobgarlik foydalanuvchining o‘zida |

### 2FA — bu KYC emas

Fragment akkauntda 2FA paroli yo‘qligini yoki u juda yaqinda o‘rnatilganini to‘siq sifatida ko‘rsatadi. Bu shaxsni tasdiqlash emas, akkaunt himoyasiga oid talab. U aynan qaysi xizmatlarga qo‘llanishi to‘liq tasdiqlanmagan. Kutish muddati ham bu maqolada ko‘rsatilmaydi.

### Davlat cheklovlari

Shartlarga ko‘ra, Fragment qaysi davlatlarda ishlashi va qaysi xizmatlari ochiq bo‘lishini istalgan vaqtda ogohlantirishsiz cheklashi mumkin. O‘zbekiston bunday ro‘yxatda bor-yo‘qligi noma’lum.

### Mukofotlar va reklama

Telegram kontent mualliflari mukofotlarini qayta ishlashni Fragment Corp.ga tegishli Fragment platformasiga topshirgan ([mualliflar uchun shartlar](https://telegram.org/tos/content-creator-rewards)). Fragment tartibga solish va boshqa omillar sababli ayrim foydalanuvchi yoki davlatlarga mukofot bera olmasligi mumkin. Reklama xaridi ham ayrim davlatlar uchun cheklangan bo‘lishi mumkin.

## TON hamyonni ulashda qanday xatolarga yo‘l qo‘ymaslik kerak?

«KYC’siz Fragment» kabi shov-shuvli xabarlar firibgarlar uchun qulay bahona bo‘ladi. Quyidagi qoidalarga amal qiling:

- **To‘g‘ri hamyonni ulang.** Fragment ulangan hamyonni qayta tekshirishni tavsiya qiladi. Bir nechta hamyoningiz bo‘lsa, bu ayniqsa muhim.
- **Seed-iborani hech kimga bermang.** Fragment o‘zi hamyoningizga kirish huquqiga ega emasligini aytadi. Demak, seed-ibora so‘rashga asos yo‘q.
- **Faqat asl manzilda ishlang.** «Verifikatsiyasiz Fragment» deb tarqatilgan nusxa saytlar va botlarga ehtiyot bo‘ling.
- **Telegram login kodi va 2FA parolini sir saqlang.** Ularni so‘ragan har qanday «yordamchi» shubhali. Batafsil: [firibgarlardan himoya qoidalari](/blog/telegram-premium-firibgarlikdan-himoya).

## Fragment orqali Premium olish qanday qoidalarga bo‘ysunadi?

Fragment’da Telegram Premium’ni o‘zingiz uchun olish yoki do‘stga sovg‘a qilish mumkin. Ikkala holatda ham Premium sahifasida «Buy Premium for a User» bandi tanlanadi.

[Premium sahifasida](https://fragment.com/premium) obunani kriptohamyon orqali olish taklif qilinadi. Xarid Telegram xizmat shartlari va Telegram Premium shartlariga bo‘ysunadi. Ya’ni Fragment orqali olingan Premium ham Telegram qoidalari doirasida ishlaydi.

Jarayon qanday kechishi va O‘zbekistondan qanchalik qulayligi haqida alohida yozganmiz:

- [Fragment nima va u orqali Premium olish](/blog/fragment-telegram-premium)
- [TON orqali Premium olish](/blog/ton-orqali-telegram-premium)
- Fragment bilan bog‘liq kolleksion sovg‘alar haqida: [NFT sovg‘alar](/blog/telegram-nft-sovgalar)

Valyuta nomi va kursini xariddan oldin Fragment’ning o‘zida tekshiring.

## Kripto hamyonsiz Premium olish mumkinmi?

Ha, Premium’ni so‘mda, kripto hamyonsiz ham olish mumkin. Fragment’dagi KYC savoli sizni faqat Premium uchun qiziqtirsa, quyidagi taqqoslash yordam beradi.

| Mezon | Fragment | Premiumtg |
|---|---|---|
| Kerak bo‘ladigan narsa | Telegram akkaunt va TON hamyon | Faqat username |
| To‘lov | Kriptohamyon orqali | So‘mda: Click, Payme, Paynet, Uzum Bank |
| So‘mda to‘lash | Yo‘q | Ha, xorijiy karta kerak emas |
| Faollashish | Fragment sahifasida tekshiring | 10 soniyada avtomatik |

Premiumtg narxlari: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}. Xariddan oldin narx va mavjud to‘lov usullarini botda tekshiring.

Buyurtmada akkauntga kirish, login kodi yoki parol so‘ralmaydi. Username’ingizni berish nega xavfsiz ekanini [bu maqolada](/blog/username-berish-xavfsizmi) tushuntirganmiz. O‘zbekistondagi barcha usullar bir joyda: [Telegram Premium sotib olish yo‘llari](/blog/telegram-premium-sotib-olish-uzbekiston).

Premiumtg mustaqil xizmat, Premium statusni esa faqat Telegram beradi. Buyurtma boti: [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Savol bo‘lsa: [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport).

## Ko‘p so‘raladigan savollar

### Fragment’ga kirish uchun pasport yoki selfi so‘raladimi?

Fragment’ning xizmat shartlari va maxfiylik siyosatida hujjat yoki selfi talabi tilga olinmagan. Kirish Telegram akkaunti va TON hamyon orqali bo‘ladi. Boshqacha narsa so‘ralsa, sayt manzili asl ekanini tekshiring.

### Fragment’da bir vaqtda bir nechta Telegram akkaunt ulash mumkinmi?

Rasmiy sahifada bu imkoniyat tasdiqlanmagan. Fragment faqat joriy sessiyani Telegram sozlamalarida o‘chirib, boshqa akkaunt bilan qayta kirish tartibini tushuntiradi.

### Fragment nega 2FA paroli yo‘qligini aytib xaridni to‘xtatadi?

Fragment 2FA paroli o‘rnatilmagan yoki juda yaqinda o‘rnatilgan akkauntni to‘siq sifatida ko‘rsatadi. Bu shaxsni tasdiqlash emas, akkaunt himoyasi. Parolni o‘rnating va keyinroq qayta urinib ko‘ring.

### O‘zbekistondan Fragment’dan foydalansa bo‘ladimi?

Fragment davlatlar bo‘yicha xizmatlarni ogohlantirishsiz cheklash huquqini o‘zida saqlaydi. O‘zbekiston bunday ro‘yxatda bor-yo‘qligi esa noma’lum. Kerakli bo‘lim ochilishini saytning o‘zida tekshiring; soliq va mahalliy qonunlarga rioya qilish sizning zimmangizda.

### Fragment’dan TON hamyonni qanday uzish yoki almashtirish mumkin?

Fragment haqidagi rasmiy sahifada Telegram sessiyasini uzish tartibi yozilgan, hamyonni uzish tartibi esa bu maqolada tasdiqlanmagan. Har qanday holatda xarid oldidan to‘g‘ri hamyon ulanganini qayta tekshiring.

### Fragment mening telefon raqamim yoki IP manzilimni saqlaydimi?

Maxfiylik siyosatiga ko‘ra, Fragment kirish usullarini IP manzil, brauzer yoki qurilmaga bog‘laydigan ma’lumot saqlamaydi. Umuman shaxsiy ma’lumot saqlamasligini ham ta’kidlaydi — bu Fragment’ning o‘z bayonoti.

### Fragment’da kanal reklamasi yoki mualliflar mukofoti nega ishlamasligi mumkin?

Telegram siyosatiga ko‘ra, ayrim davlatlar foydalanuvchilari uchun reklama xaridi cheklangan bo‘lishi mumkin. Mualliflar mukofotini esa Fragment tartibga solish va boshqa omillar sababli ayrim foydalanuvchi yoki davlatlarga bera olmasligi mumkin.`,
    ru: `## Действительно ли Fragment отменил KYC?

На официальных страницах Fragment требование KYC не указано. Сообщения о его отмене там тоже нет. Значит, новость «KYC отменили, теперь доступно всем», которая разошлась по Telegram-каналам, официальными источниками не подтверждается.

Данных о том, что Fragment когда-либо вводил KYC, тоже не нашлось. В истории изменений на страницах [условий использования](https://fragment.com/terms) и [политики конфиденциальности](https://fragment.com/privacy) записей на эту тему нет. Официального объявления об отмене тоже не видно.

В условиях сказано другое: платформа позволяет любому человеку безопасно и анонимно покупать цифровые коллекционные объекты. Через неё также можно купить или подарить подписку Telegram Premium. Это общее описание сервиса, а не заявление о KYC.

> Практический совет: откройте [fragment.com](https://fragment.com) и сами посмотрите, что запрашивают на этапе входа. Если документы или селфи не просят, ориентируйтесь на требования, описанные ниже.

## Что на самом деле значит «верификация больше не нужна»?

Отдельной регистрации на Fragment нет. Согласно политике конфиденциальности, вход выполняется через Telegram и/или через TON-кошелёк. В условиях использования тоже сказано, что платформа позволяет подключить аккаунт Telegram и TON-кошелёк.

По версии [страницы о Fragment](https://fragment.com/about) от 14 ноября 2025 года, чтобы сделать ставку или покупку, нужно подключить и то и другое. После этого вы переходите в нужный раздел на главной странице.

На практике понадобится:

- **Аккаунт Telegram** — тот, который вы подключаете к Fragment.
- **TON-кошелёк** — для ставок и покупок.
- **Пароль 2FA** — в некоторых случаях Fragment указывает его отсутствие как препятствие. Подробнее об этом ниже.

Паспорта, ID-карты или селфи в списке нет: официальные тексты такое требование не упоминают. Фразу «верификация не нужна» можно понимать именно так — для входа нужны аккаунт и кошелёк, а не документы. Но это не значит «теперь отменили», ведь то, что KYC был раньше, тоже не подтверждено.

Название валюты для оплаты и цены проверяйте прямо на странице Fragment. Сведения об этом на официальных страницах не полностью совпадают, поэтому в статье они не приводятся.

## Какие личные данные хранит Fragment?

Вопрос о KYC обычно возникает из опасения «куда уйдут мои данные». На этот счёт Fragment делает в своих документах вполне конкретные заявления.

| Что говорит Fragment | Что это значит на практике |
|---|---|
| Отдельной регистрации нет, вход через Telegram и/или TON-кошелёк | Не нужно заполнять анкету или придумывать новый пароль |
| Не хранятся данные, связывающие два способа входа с IP-адресом, браузером, устройством, другой идентифицирующей информацией или друг с другом | Аккаунт Telegram и кошелёк не хранятся на стороне Fragment в связке |
| Не собираются и не обрабатываются личные данные, которые не строго необходимы для работы сервиса | Лишних сведений запрашивать не должны |
| Никакие личные данные не хранятся | По словам Fragment, запрашивать их удаление не нужно |
| Доступа к TON-кошельку нет, данные, связывающие его с вами или вашими аккаунтами, не хранятся | Контроль над кошельком остаётся у вас |

Это собственные заявления Fragment ([политика конфиденциальности](https://fragment.com/privacy), [условия использования](https://fragment.com/terms)). Транзакции в сети кошелька — отдельная тема, в этой статье она не разбирается.

## Правда ли, что можно подключать сколько угодно аккаунтов?

В каналах встречаются обещания вроде «верификации нет, подключайтесь хоть с десятка аккаунтов». На официальной странице такая возможность не описана. Fragment объясняет только один порядок действий: полностью отвязать аккаунт Telegram от сайта и войти с другим номером.

Выходит, работать с несколькими аккаунтами можно лишь поочерёдно, переключаясь между ними. Сколько аккаунтов можно подключить одновременно, официальный источник не говорит, и в этой статье это не подтверждено.

По данным [страницы о Fragment](https://fragment.com/about), аккаунт меняют так:

1. Откройте Telegram с тем аккаунтом, который сейчас подключён к Fragment.
2. Перейдите в раздел сессий. На Android: **Settings > Privacy & Security > Bots and websites > Logged in with Telegram**. На iOS: **Settings > Privacy & Security > Active Websites > Logged in with Telegram**.
3. Найдите в списке сессию Fragment и удалите её.
4. Снова откройте сайт Fragment и войдите с другим аккаунтом Telegram.
5. Заранее проверьте, что на новом аккаунте установлен пароль 2FA. Если пароля нет, Fragment может указать это как препятствие.

После смены аккаунта посмотрите и на то, какой TON-кошелёк подключён. Когда аккаунтов и кошельков несколько, легко случайно оплатить покупку не с того кошелька. Чтобы избежать такой ошибки, перед каждой покупкой сверяйте имя аккаунта и адрес кошелька на экране.

## Что может помешать, даже если KYC нет?

Отсутствие запроса документов не означает, что все двери открыты. На страницах самого Fragment описаны другие ограничения.

| Препятствие | Кого касается | Что делать |
|---|---|---|
| Пароль 2FA не установлен или установлен слишком недавно | Аккаунты, для которых Fragment показал это сообщение | Установите пароль 2FA в Telegram и попробуйте позже |
| Ограничения по странам | Пользователи из стран, где Fragment ограничил свои сервисы | Проверьте на сайте, открывается ли нужный раздел |
| Покупка рекламы | Пользователи из некоторых стран | Может быть ограничена согласно политике Telegram |
| Вознаграждения авторов | Авторы контента | Проверьте возможность получения вознаграждения на Fragment |
| Налоги и местные законы | Все пользователи | Ответственность лежит на самом пользователе |

### 2FA — это не KYC

Fragment указывает как препятствие отсутствие пароля 2FA или то, что он установлен слишком недавно. Это не подтверждение личности, а требование к защите аккаунта. К каким именно сервисам оно применяется, до конца не подтверждено. Срок ожидания в этой статье тоже не указывается.

### Ограничения по странам

По условиям использования Fragment может в любой момент и без предупреждения ограничить, в каких странах он работает и какие сервисы там доступны. Входит ли Узбекистан в такой список, неизвестно.

### Вознаграждения и реклама

Обработку вознаграждений авторов контента Telegram передал платформе Fragment, которая принадлежит Fragment Corp. ([условия для авторов](https://telegram.org/tos/content-creator-rewards)). Из-за требований регулирования и других факторов Fragment может не выплачивать вознаграждения отдельным пользователям или в отдельных странах. Покупка рекламы тоже может быть ограничена для некоторых стран.

## Каких ошибок избегать при подключении TON-кошелька?

Громкие новости вроде «Fragment без KYC» — удобный повод для мошенников. Придерживайтесь простых правил:

- **Подключайте правильный кошелёк.** Fragment советует перепроверить, какой кошелёк подключён. Особенно это важно, если кошельков у вас несколько.
- **Никому не сообщайте seed-фразу.** Fragment заявляет, что сам не имеет доступа к вашему кошельку. Значит, причин спрашивать seed-фразу нет ни у кого.
- **Работайте только на настоящем сайте.** Остерегайтесь сайтов-копий и ботов, которые распространяют под видом «Fragment без верификации».
- **Держите в секрете код входа в Telegram и пароль 2FA.** Любой «помощник», который их просит, вызывает подозрения. Подробнее: [как защититься от мошенников](/blog/telegram-premium-firibgarlikdan-himoya).

## Каким правилам подчиняется покупка Premium через Fragment?

На Fragment можно купить Telegram Premium себе или подарить другу. В обоих случаях на странице Premium выбирают пункт «Buy Premium for a User».

На [странице Premium](https://fragment.com/premium) подписку предлагают оплатить через криптокошелёк. Покупка подчиняется условиям использования Telegram и условиям Telegram Premium. То есть Premium, купленный через Fragment, работает в рамках тех же правил Telegram.

Как проходит процесс и насколько это удобно из Узбекистана, мы разбирали отдельно:

- [Что такое Fragment и как купить через него Premium](/blog/fragment-telegram-premium)
- [Покупка Premium за TON](/blog/ton-orqali-telegram-premium)
- О коллекционных подарках, связанных с Fragment: [NFT-подарки](/blog/telegram-nft-sovgalar)

Название валюты и курс проверяйте перед покупкой прямо на Fragment.

## Можно ли получить Premium без криптокошелька?

Да, Premium можно оплатить в сумах, без криптокошелька. Если вопрос о KYC на Fragment интересует вас только ради Premium, поможет это сравнение.

| Критерий | Fragment | Premiumtg |
|---|---|---|
| Что понадобится | Аккаунт Telegram и TON-кошелёк | Только username |
| Оплата | Через криптокошелёк | В сумах: Click, Payme, Paynet, Uzum Bank |
| Оплата в сумах | Нет | Да, зарубежная карта не нужна |
| Активация | Уточняйте на странице Fragment | Автоматически за 10 секунд |

Цены Premiumtg: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}. Перед покупкой проверьте в боте актуальную цену и доступные способы оплаты.

Для заказа не нужны вход в аккаунт, код подтверждения или пароль. Почему сообщать свой username безопасно, мы объяснили [в этой статье](/blog/username-berish-xavfsizmi). Все способы для Узбекистана собраны здесь: [как купить Telegram Premium в Узбекистане](/blog/telegram-premium-sotib-olish-uzbekiston).

Premiumtg — независимый сервис, а статус Premium выдаёт только Telegram. Бот для заказа: [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Если остались вопросы: [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport).

## Часто задаваемые вопросы

### Fragment просит паспорт или селфи для входа?

В условиях использования и политике конфиденциальности Fragment требование документов или селфи не упоминается. Вход выполняется через аккаунт Telegram и TON-кошелёк. Если от вас требуют что-то иное, убедитесь, что вы на настоящем сайте.

### Можно ли подключить к Fragment сразу несколько аккаунтов Telegram?

На официальной странице такая возможность не подтверждена. Fragment описывает только смену аккаунта: удалить текущую сессию в настройках Telegram и войти заново с другим.

### Почему Fragment не даёт купить из-за отсутствия пароля 2FA?

Аккаунт без пароля 2FA или с паролем, установленным слишком недавно, Fragment считает препятствием. Речь идёт о защите аккаунта, а не о проверке личности. Установите пароль и повторите попытку позже.

### Можно ли пользоваться Fragment из Узбекистана?

Fragment оставляет за собой право без предупреждения ограничивать сервисы в отдельных странах, а есть ли в таком списке Узбекистан — неизвестно. Проверьте, открывается ли нужный раздел на самом сайте; соблюдение налоговых правил и местных законов — ваша ответственность.

### Как отвязать или сменить TON-кошелёк на Fragment?

На официальной странице Fragment описано, как отключить сессию Telegram, а порядок отвязки кошелька в этой статье не подтверждён. В любом случае перед покупкой ещё раз проверьте, что подключён нужный кошелёк.

### Хранит ли Fragment мой номер телефона или IP-адрес?

По политике конфиденциальности, Fragment не хранит данных, связывающих способы входа с IP-адресом, браузером или устройством. Сервис также утверждает, что вообще не хранит личных данных — это его собственное заявление.

### Почему на Fragment может не работать покупка рекламы или выплата авторам?

Для пользователей из некоторых стран покупка рекламы может быть ограничена по политике Telegram. Вознаграждения авторам Fragment может не выплачивать отдельным пользователям или странам из-за требований регулирования и других факторов.`,
  },
};
