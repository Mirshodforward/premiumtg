// Avtoblogyoz yasagan maqola (2026-11-23). Niyat: O‘zbekistondagi Telegram kanal admini «kanaldan qanday pul ishlayman, buning uchun Premium yoki boost kerakmi» deb qidiradi. U har bir rasmiy monetizatsiya vositasining talablari, qaysi kanal hajmiga mosligi va ishlangan Stars’ni qanday yechishni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/monetization-for-channels
//   https://core.telegram.org/api/revenue
//   https://core.telegram.org/api/stars
//   https://telegram.org/blog/checklists-suggested-posts
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "kanaldan-daromad-premium-boost-kerakmi",
  date: "2026-11-23",
  reviewed: "2026-11-23",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegram kanaldan daromad olish uchun Premium yoki boost kerakmi?", ru: "Нужен ли Premium или буст, чтобы зарабатывать на Telegram-канале?" },
  excerpt: { uz: `Yo‘q. Rasmiy Telegram sahifalarida admin Premium olmasa kanaldan daromad ololmaydi degan shart yo‘q. Boost esa rasman faqat reklamani hamma uchun o‘chirishda tilga olingan.`, ru: `Нет. В официальных материалах Telegram нет условия, что без Premium админ не сможет зарабатывать на канале. Буст упоминается только для отключения рекламы для всех.` },
  keywords: ["telegram kanaldan daromad olish","telegram kanal monetizatsiya","telegram kanaldan pul ishlash","kanal reklama daromadi 50 foiz","star reaksiya kanal","telegram pullik media","taklif qilingan post telegram","stars yechish fragment","монетизация телеграм канала","как заработать на телеграм канале","заработок на канале telegram stars","нужен ли премиум для монетизации канала"],
  related: ["telegram-kanal-boost","telegram-premium-kanal-adminlari-uchun","gram-earnings-balans-yechish-tonnel-cash-out","telegram-stars-nima"],
  sources: [{"url":"https://telegram.org/blog/monetization-for-channels","title":"Sharing Revenue with Channel Owners"},{"url":"https://core.telegram.org/api/revenue","title":"Channel and bot ad revenue"},{"url":"https://core.telegram.org/api/stars","title":"Telegram Stars"},{"url":"https://telegram.org/blog/checklists-suggested-posts","title":"Checklists, Suggested Posts and More Monetization Options for Channels"}],
  content: {
    uz: `## Kanaldan pul ishlash uchun Premium yoki boost kerakmi?

Premium shart emas. Biz ko‘rib chiqqan rasmiy sahifalarning birortasida daromad vositalaridan foydalanish uchun adminda Premium bo‘lishi kerakligi yozilmagan. Bular: [kanal monetizatsiyasi haqidagi blog](https://telegram.org/blog/monetization-for-channels), [Telegram Stars hujjati](https://core.telegram.org/api/stars) va [reklama daromadi sahifasi](https://core.telegram.org/api/revenue).

Boost bo‘yicha rasman tasdiqlangan holat bitta. Kanal egasi kanaldagi reklamani barcha foydalanuvchilar uchun o‘chira oladi, lekin buning uchun kanal ma’lum boost darajasiga yetgan bo‘lishi kerak. Daraja raqami sahifada ko‘rsatilmagan. Bu pul ishlash sharti emas, aksincha reklama daromadidan voz kechish sharti.

Boshqa vositalar uchun boost yoki kanal darajasi talabi rasmiy sahifalarda iqtibos bilan berilmagan, shuning uchun bu maqolada ular tasdiqlanmagan deb belgilangan. Kanalingizda qaysi vosita ochiqligini kanal sozlamalari va statistika bo‘limida tekshiring. Boost nima ekani [kanal boost haqidagi maqolada](/blog/telegram-kanal-boost) batafsil yozilgan.

## Qaysi vosita qanday talab bilan ishlaydi? Umumiy jadval

Jadvalga faqat rasmiy manbada tasdiqlangan shartlar kiritilgan. «Yozilmagan» degani ko‘rib chiqilgan sahifalarda bunday shart topilmadi degani. Ilovadagi amaldagi shart boshqacha bo‘lishi mumkin.

| Vosita | Rasman tasdiqlangan | Obunachi soni, ommaviylik | Boost yoki daraja | Admin uchun Premium |
|---|---|---|---|---|
| Reklama daromadi ulushi | Daromadning 50 foizi egaga tushadi, yechish Fragment orqali | Shartni monetizatsiya bo‘limida tekshiring | Yozilmagan | Yozilmagan |
| Star reaksiyalar | Stars’ning 100 foizi kanal egasiga tushadi | Yozilmagan | Yozilmagan | Yozilmagan |
| Pullik media | Xarid qilinganda Stars kanal balansiga o‘tadi | Yozilmagan | Yozilmagan | Yozilmagan |
| Stars obunasi | Kanal davriy haq oladigan obuna yarata oladi | Yozilmagan | Yozilmagan | Yozilmagan |
| Taklif qilingan postlar | Stars yoki TON kriptovalyutasi taklif qilinadi, mukofot 24 soatdan keyin tushadi | Yozilmagan | Yozilmagan | Yozilmagan |
| Pullik xabarlar | Pullik xabar sozlangan kanalga yozish Stars bilan to‘lanadi | Yozilmagan | Yozilmagan | Yozilmagan |
| Reklamani hamma uchun o‘chirish | Kanal egasi reklamani o‘chira oladi | Yozilmagan | Kerak, darajasi berilmagan | Yozilmagan |

## Reklama daromadi ulushi: qanday ishlaydi va pul qayerga tushadi?

Kanalingizda Telegram’ning rasmiy homiylik reklamasi ko‘rsatilsa, daromadning 50 foizi kanal egasiga beriladi. Buni [texnik sahifa](https://core.telegram.org/api/revenue) ham, [blog e’loni](https://telegram.org/blog/monetization-for-channels) ham aytadi.

Reklama beruvchilar reklamani TON blokcheynidagi kriptovalyuta bilan sotib oladi. Kanal egasining ulushi Fragment orqali yechib beriladi.

Kanalingiz bu dasturga mos kelishini monetizatsiya bo‘limida tekshiring. Daromad hajmi kanal mavzusiga, auditoriyaga va ko‘rishlar soniga bog‘liq. Aniq summani hech kim oldindan va’da qila olmaydi.

Bir nozik jihat bor. Reklamani hamma uchun o‘chirsangiz, bu manbadan keladigan daromad ham to‘xtaydi. Avval boshqa vositalar qancha daromad berayotganini ko‘rib, keyin qaror qiling.

## Star reaksiya, pullik media va Stars obunasi: farqi nimada?

Uchala vosita ham Telegram Stars bilan ishlaydi. Stars nima ekanini bilmasangiz, avval [Telegram Stars haqidagi maqolani](/blog/telegram-stars-nima) o‘qing.

- **Star reaksiya.** Obunachi postga oddiy emoji o‘rniga Stars bilan reaksiya qoldiradi. [Stars hujjatiga](https://core.telegram.org/api/stars) ko‘ra, bunday Stars’ning 100 foizi kanal egasiga tushadi. Alohida kontent tayyorlash kerak emas. Misol: yangiliklar kanalida muhim xabarni birinchi bo‘lib bergan postga obunachilar Star reaksiya bilan «rahmat» aytadi.
- **Pullik media.** Rasm yoki videoni yopiq holda joylaysiz, obunachi uni Stars evaziga ochadi va Stars kanal balansiga o‘tadi. Narx oralig‘i va boshqa texnik tafsilotlar bu maqolada tasdiqlanmagan. Misol: dizayn kanali tayyor maketni yoki to‘liq sifatli fotoni pullik qilib qo‘yadi.
- **Stars obunasi.** Kanal foydalanuvchidan davriy ravishda haq oladigan obuna yarata oladi. Obuna davrining uzunligi bu maqolada tasdiqlanmagan, uni obuna yaratayotganda ilova ko‘rsatadi. Misol: kurs muallifi darslarini faqat obuna bo‘lganlar ko‘radigan kanalda chiqaradi.

Asosiy farq — sarflanadigan mehnatda. Reaksiya deyarli qo‘shimcha ish talab qilmaydi. Pullik media uchun alohida kontent tayyorlash kerak. Obuna esa muntazam va sifatli kontent bo‘lgandagina ishlaydi: obunachi pulini qaytarib olmasa ham, keyingi davrga to‘lamay qo‘yishi mumkin.

## Taklif qilingan postlar va pullik xabarlar qanday pul keltiradi?

[Telegram blogiga](https://telegram.org/blog/checklists-suggested-posts) ko‘ra, obunachilar kanalga o‘z kontentini taklif qilingan post sifatida yubora oladi. Takliflar kanalga direct messages orqali keladi.

Taklif bilan birga kanal egasiga postni joylagani uchun Stars yoki TON kriptovalyutasi taklif qilinadi. Admin postni joylasa, mukofotni joylangandan 24 soat o‘tib oladi. Post muddatidan oldin o‘chirilsa, Telegram summani taklif qilgan tomonga avtomatik ravishda to‘liq qaytaradi. Demak, xato bo‘lib qolgan postni shoshib o‘chirishdan oldin bu mukofotdan voz kechish ekanini hisobga oling.

Pullik xabarlar boshqacha ishlaydi. Kanal pullik xabarlarni sozlasa, unga xabar yozish uchun Stars bilan to‘lanadi. Narx chegaralari bu maqolada tasdiqlanmagan, ularni sozlamaning o‘zida ko‘rasiz.

Bu ikki vosita reklama so‘rovlari va murojaatlar ko‘p keladigan kanallarga mos. Ularning asosiy mehnati — har bir taklifni o‘qib, kanal qoidalariga va auditoriyaga mosligini tekshirish.

## Sovg‘alar, jonli efir xayriyasi va affiliate: nimasi rasman tasdiqlangan?

Bu vositalar haqida ko‘p gapiriladi, lekin rasmiy manbalarda hammasi ham tasdiqlanmagan.

> **Kanalga sovg‘alar.** Kanallarga Star sovg‘alari yuborish mumkinligi bu maqolada rasmiy manba bilan tasdiqlanmagan. Ilovada bunday tugma ko‘rinsa, shartlarini o‘sha yerda tekshiring.

> **Jonli efirdagi Star xayriyalari.** Ko‘rib chiqilgan rasmiy sahifalarda bu haqda ma’lumot topilmadi. Telegram kanallarida tarqalgan shartlarga tayanmang.

> **Affiliate dasturlari.** Rasman tasdiqlangani shu: mini ilova ishlab chiquvchilari o‘z mini ilovasi uchun affiliate dastur ocha oladi. Komissiya foizi berilmagan, kanal egasining ishtirok shartlari ham bu maqolada tasdiqlanmagan.

## Premium obunachilar kanalga nima beradi?

Rasman tasdiqlangan bitta fakt bor: Telegram Premium’ga obuna bo‘lgan har kim reklamani o‘chira oladi. Ya’ni Premium obunachilaringiz kanaldagi homiylik reklamasini ko‘rmasligi mumkin. Bundan boshqa ta’siri, masalan daromadga qanday qo‘shilishi, rasmiy manbalarda tekshirilmadi, shuning uchun bu haqda taxmin qilmaymiz.

Boost va Premium o‘rtasidagi bog‘liqlik hamda admin uchun Premium beradigan qulayliklar [kanal adminlari uchun Premium haqidagi maqolada](/blog/telegram-premium-kanal-adminlari-uchun) yozilgan.

Premium’ni o‘zingiz uchun olmoqchi bo‘lsangiz, bu daromad sharti emas, shaxsiy qulaylik ekanini yodda tuting. Premiumtg botida [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) faqat username’ingizni kiritasiz va so‘mda Click, Payme, Paynet yoki Uzum Bank orqali to‘laysiz. Akkauntga kirish va login kodi so‘ralmaydi, obuna 10 soniyada avtomatik faollashadi. Narxlar: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}. Narx va to‘lov usullarini xariddan oldin botda tekshiring.

## Kichik va katta kanal uchun qaysi vositadan boshlash kerak?

### Kichik kanal

Yangi kanalda auditoriya soni hali kam bo‘ladi, shuning uchun kontentning qiymatiga tayaning. Star reaksiyalar, pullik media va Stars obunasi shu yerda o‘rinli: kam, lekin sodiq obunachilar ham foydali materialga to‘lashga tayyor bo‘lishi mumkin.

### O‘rta kanal

Yuqoridagilarga taklif qilingan postlar va pullik xabarlarni qo‘shing. Reklama yoki hamkorlik so‘rovlari muntazam kela boshlasa, ularni tartibli qabul qilishning rasmiy yo‘li shu.

### Katta ommaviy kanal

Reklama daromadi ulushi katta auditoriyada sezilarli bo‘ladi. Kirish shartini monetizatsiya bo‘limida ko‘ring, lekin faqat shu manbaga tayanmang.

Umuman olganda, bitta vositaga bog‘lanib qolmang. Masalan, foto kanali har kungi postlarda Star reaksiyalarni yoqadi, haftada bir marta pullik to‘plam chiqaradi va brendlardan taklif qilingan postlarni qabul qiladi. Bir manba pasaysa, qolganlari ishlashda davom etadi.

## Ishlangan Stars bilan nima qilish mumkin va ular qanday yechiladi?

Rasmiy manbalar bir nechta yo‘lni ko‘rsatadi:

- Star reaksiyalardan kelgan Stars’ni kriptovalyutadagi mukofotga almashtirish yoki subsidiyalangan reklamaga sarflash.
- O‘z kanalingiz uchun Telegram Ad platformasida reklama joylash.
- Reklama daromadini Telegram reklamasi, kolleksion username yoki Premium give-away’ga qayta sarflash. Give-away qanday o‘tkazilishi [konkurs g‘oliblariga Premium sovg‘a qilish haqidagi maqolada](/blog/premium-konkurs-goliblari-xodimlarga-kop-sovga) yozilgan.

[Stars hujjatiga](https://core.telegram.org/api/stars) ko‘ra, Stars’ni yechish tartibi:

1. Balansni tekshiring. Yechishni faqat kanal egasi qila oladi va balans belgilangan minimumdan kam bo‘lmasligi kerak. Minimum raqami rasmiy sahifada berilmagan.
2. Yechish so‘rovini yuboring. Javobda Fragment sahifasining noyob havolasi keladi.
3. Fragment sahifasini oching va so‘ralgan ma’lumotlarni kiriting.
4. Tasdiqlashdan oldin hamyon manzili va summani yana bir bor solishtiring.

Yechishdan keyin qancha kutish kerakligi va Fragment komissiyasi bu maqolada tasdiqlanmagan. Yechish bo‘yicha amaliy tafsilotlar [Gram Earnings balansini yechish haqidagi maqolada](/blog/gram-earnings-balans-yechish-tonnel-cash-out) bor.

## Qaytarish (refund) xavfi: Stars daromadini qanday himoya qilasiz?

Stars Apple kabi uchinchi tomon provayderlari orqali sotib olinadi. [Telegram blogiga](https://telegram.org/blog/checklists-suggested-posts) ko‘ra, bu provayderlar xaridorga 21 kun ichida pulini qaytarishi mumkin. Bunday holatda Stars balansingizdan yechilishi mumkin.

> 21 kun — provayderning pul qaytarish muddati. Uni taklif qilingan post mukofotining 24 soati bilan aralashtirmang.

Taklif qilingan postlar uchun to‘lovni TON kriptovalyutasida olish xavfsizroq, chunki bunday to‘lovni xaridor qaytarib ololmaydi. Refund bilan bog‘liq xabarlar va firibgarlik sxemalari haqida [Stars refund firibgarligi haqidagi maqolani](/blog/telegram-stars-refund-firibgarlik-rostmi) o‘qing.

## Ko‘p so‘raladigan savollar

### Kanaldan daromad olish uchun admin Telegram Premium sotib olishi shartmi?

Ko‘rib chiqilgan rasmiy sahifalarda bunday shart yozilmagan. Premium admin uchun pul ishlash vositasi emas, shaxsiy qulaylik.

### Reklama daromadidan kanal egasiga necha foiz tushadi?

Telegram’ning blogi ham, texnik sahifasi ham 50 foiz deydi. Bu ulush Fragment orqali yechiladi.

### Star reaksiyadan kelgan Stars’ning qancha qismi menga qoladi?

Hammasi: Stars hujjatiga ko‘ra, reaksiyadagi Stars’ning 100 foizi kanal egasiga o‘tadi.

### Taklif qilingan post uchun pulni qachon olaman va post o‘chirilsa nima bo‘ladi?

Mukofot joylangandan bir sutka o‘tib tushadi. Undan oldin o‘chirilgan post uchun pul taklif qilgan odamga to‘liq qaytariladi.

### Stars’ni qanday yechib olaman va minimal summa qancha?

Yechish so‘rovini faqat kanal egasi yuboradi, so‘ng Fragment sahifasida jarayonni yakunlaydi. Minimum mavjud, lekin uning raqamini rasmiy sahifa ko‘rsatmaydi.

### Kanalimda reklamani butunlay o‘chirib qo‘ysam bo‘ladimi?

Bo‘ladi, lekin buning uchun kanal yetarli boost to‘plagan bo‘lishi kerak. Qaysi daraja kerakligini rasmiy sahifa aytmaydi.

### Obunachilarim Premium olsa, reklama daromadim kamayadimi?

Premium egalari reklamani o‘chira olishi rasman ma’lum. Lekin bu daromadingizga aniq qanchalik ta’sir qilishini rasmiy manbalar hisoblab bermagan.

### Kanalga sovg‘a yuborish yoki jonli efirda Star xayriya qilish mumkinmi?

Biz ko‘rib chiqqan rasmiy manbalarda ikkalasi ham tasdiqlanmagan. Ilovada shunday imkoniyatni ko‘rsangiz, shartlarini o‘sha yerda tekshiring.`,
    ru: `## Нужен ли Premium или буст, чтобы зарабатывать на канале?

Premium не нужен. Ни на одной из официальных страниц, которые мы изучили, не сказано, что для доступа к инструментам монетизации у админа должен быть Premium. Это [блог о монетизации каналов](https://telegram.org/blog/monetization-for-channels), [документация по Telegram Stars](https://core.telegram.org/api/stars) и [страница о доходе от рекламы](https://core.telegram.org/api/revenue).

С бустами официально подтверждён только один случай. Владелец канала может отключить рекламу для всех пользователей, но для этого канал должен достичь определённого уровня бустов. Номер уровня на странице не указан. Это не условие заработка, а наоборот — условие отказа от рекламного дохода.

Для остальных инструментов требования к бустам или уровню канала на официальных страницах с цитатой не приведены, поэтому в этой статье они считаются неподтверждёнными. Какие инструменты доступны именно вашему каналу, смотрите в настройках канала и в разделе статистики. Что такое буст, подробно разобрано в [статье о бустах канала](/blog/telegram-kanal-boost).

## Какие требования у каждого инструмента? Сводная таблица

В таблицу внесены только условия, подтверждённые официальными источниками. «Не указано» значит, что на изученных страницах такого условия не нашлось. В приложении актуальные условия могут отличаться.

| Инструмент | Официально подтверждено | Число подписчиков, публичность | Буст или уровень | Premium для админа |
|---|---|---|---|---|
| Доля от рекламы | Владелец получает 50 % дохода, вывод через Fragment | Проверьте условие в разделе монетизации | Не указано | Не указано |
| Звёздные реакции | 100 % Stars достаётся владельцу канала | Не указано | Не указано | Не указано |
| Платный контент | При покупке Stars переходят на баланс канала | Не указано | Не указано | Не указано |
| Подписка за Stars | Канал может создать подписку с периодической оплатой | Не указано | Не указано | Не указано |
| Предложенные посты | Предлагают Stars или криптовалюту TON, награда приходит через 24 часа | Не указано | Не указано | Не указано |
| Платные сообщения | Написать каналу с платными сообщениями можно за Stars | Не указано | Не указано | Не указано |
| Отключение рекламы для всех | Владелец канала может отключить рекламу | Не указано | Нужен, уровень не указан | Не указано |

## Доля от рекламы: как это работает и куда приходят деньги?

Если в вашем канале показывается официальная спонсорская реклама Telegram, владельцу канала достаётся 50 % дохода. Об этом говорят и [техническая страница](https://core.telegram.org/api/revenue), и [анонс в блоге](https://telegram.org/blog/monetization-for-channels).

Рекламодатели покупают рекламу за криптовалюту блокчейна TON. Долю владельца канала выводят через Fragment.

Подходит ли ваш канал под программу, проверьте в разделе монетизации. Сумма дохода зависит от тематики, аудитории и количества просмотров. Конкретную цифру заранее не пообещает никто.

Есть тонкий момент. Если отключить рекламу для всех, доход из этого источника тоже прекратится. Сначала посмотрите, сколько приносят другие инструменты, и только потом решайте.

## Звёздные реакции, платный контент и подписка за Stars: в чём разница?

Все три инструмента работают на Telegram Stars. Если вы пока не знаете, что это такое, начните со [статьи о Telegram Stars](/blog/telegram-stars-nima).

- **Звёздная реакция.** Подписчик ставит под постом реакцию не обычным эмодзи, а звёздами. По [документации Stars](https://core.telegram.org/api/stars), 100 % таких Stars получает владелец канала. Готовить отдельный контент не нужно. Пример: в новостном канале подписчики «благодарят» звёздами за пост, где важная новость вышла первой.
- **Платный контент.** Вы публикуете фото или видео в закрытом виде, подписчик открывает его за Stars, и звёзды переходят на баланс канала. Диапазон цен и другие технические детали в этой статье не подтверждены. Пример: дизайнерский канал выкладывает за плату готовый макет или фото в полном качестве.
- **Подписка за Stars.** Канал может создать подписку с периодическим списанием платы. Длительность периода в этой статье не подтверждена — её покажет приложение при создании подписки. Пример: автор курса публикует уроки в канале, который видят только подписчики.

Главная разница — в объёме работы. Реакции почти не требуют лишних усилий. Для платного контента нужно готовить отдельные материалы. Подписка работает только при регулярном и качественном контенте: даже если подписчик не просит деньги назад, он может просто не оплатить следующий период.

## Как приносят деньги предложенные посты и платные сообщения?

По данным [блога Telegram](https://telegram.org/blog/checklists-suggested-posts), подписчики могут присылать в канал свой контент как предложенный пост. Предложения приходят в канал через личные сообщения (direct messages).

Вместе с предложением владельцу канала предлагают Stars или криптовалюту TON за публикацию. Если админ публикует пост, награда приходит через 24 часа после публикации. Если пост удалить раньше срока, Telegram автоматически вернёт всю сумму тому, кто её предлагал. Поэтому, прежде чем в спешке удалять пост с ошибкой, учтите: это отказ от награды.

Платные сообщения устроены иначе. Если канал настроил платные сообщения, написать ему можно только за Stars. Границы цены в этой статье не подтверждены — вы увидите их в самой настройке.

Оба инструмента подходят каналам, куда часто приходят рекламные запросы и обращения. Основная работа здесь — читать каждое предложение и проверять, подходит ли оно правилам канала и аудитории.

## Подарки, донаты в эфире и партнёрская программа: что подтверждено официально?

Об этих инструментах говорят много, но в официальных источниках подтверждено далеко не всё.

> **Подарки каналу.** Возможность отправлять каналам подарки за Stars в этой статье официальным источником не подтверждена. Если увидите такую кнопку в приложении, проверьте условия прямо там.

> **Донаты звёздами в прямом эфире.** На изученных официальных страницах информации об этом не нашлось. Не полагайтесь на условия, которые расходятся по Telegram-каналам.

> **Партнёрские (affiliate) программы.** Официально подтверждено только то, что разработчики мини-приложений могут открыть партнёрскую программу для своего мини-приложения. Процент комиссии не указан, условия участия для владельцев каналов в этой статье тоже не подтверждены.

## Что дают каналу подписчики с Premium?

Официально подтверждён один факт: любой, кто оформил Telegram Premium, может отключить рекламу. То есть ваши подписчики с Premium могут не видеть спонсорскую рекламу в канале. Другие последствия — например, как это сказывается на доходе — по официальным источникам не проверялись, поэтому гадать не будем.

Связь бустов и Premium, а также удобства, которые Premium даёт самому админу, описаны в [статье о Premium для админов каналов](/blog/telegram-premium-kanal-adminlari-uchun).

Если хотите оформить Premium себе, помните: это личное удобство, а не условие заработка. В боте Premiumtg [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) достаточно указать ваш username и оплатить в сумах через Click, Payme, Paynet или Uzum Bank. Вход в аккаунт и код для входа не запрашиваются, подписка активируется автоматически за 10 секунд. Цены: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}. Перед покупкой проверьте цену и способы оплаты в боте.

## С какого инструмента начать маленькому и большому каналу?

### Маленький канал

У нового канала аудитория ещё небольшая, поэтому опирайтесь на ценность контента. Здесь уместны звёздные реакции, платный контент и подписка за Stars: даже немногочисленные, но лояльные подписчики могут быть готовы платить за полезные материалы.

### Средний канал

К перечисленному добавьте предложенные посты и платные сообщения. Если запросы на рекламу или сотрудничество начали приходить регулярно, это официальный способ принимать их упорядоченно.

### Крупный публичный канал

Доля от рекламы становится заметной именно при большой аудитории. Условия участия смотрите в разделе монетизации, но не делайте ставку только на этот источник.

В целом не привязывайтесь к одному инструменту. Например, фотоканал включает звёздные реакции под ежедневными постами, раз в неделю выпускает платную подборку и принимает предложенные посты от брендов. Если один источник просядет, остальные продолжат работать.

## Что можно сделать с заработанными Stars и как их вывести?

Официальные источники называют несколько вариантов:

- Stars от звёздных реакций можно обменять на вознаграждение в криптовалюте или потратить на субсидированную рекламу.
- Разместить рекламу своего канала на платформе Telegram Ad.
- Реинвестировать доход от рекламы в рекламу Telegram, коллекционные username или розыгрыши Premium. Как провести розыгрыш, рассказано в [статье о том, как подарить Premium победителям конкурса](/blog/premium-konkurs-goliblari-xodimlarga-kop-sovga).

По [документации Stars](https://core.telegram.org/api/stars), вывод Stars выглядит так:

1. Проверьте баланс. Вывести звёзды может только владелец канала, и баланс должен быть не меньше установленного минимума. Сам минимум на официальной странице не указан.
2. Отправьте запрос на вывод. В ответ придёт уникальная ссылка на страницу Fragment.
3. Откройте страницу Fragment и введите запрошенные данные.
4. Перед подтверждением ещё раз сверьте адрес кошелька и сумму.

Сколько ждать после вывода и есть ли комиссия Fragment, в этой статье не подтверждено. Практические детали вывода — в [статье о выводе баланса Gram Earnings](/blog/gram-earnings-balans-yechish-tonnel-cash-out).

## Риск возврата (refund): как защитить доход в Stars?

Stars покупают через сторонних провайдеров, например Apple. По данным [блога Telegram](https://telegram.org/blog/checklists-suggested-posts), такие провайдеры могут вернуть покупателю деньги в течение 21 дня. В этом случае Stars могут списать с вашего баланса.

> 21 день — это срок возврата у провайдера. Не путайте его с 24 часами, через которые приходит награда за предложенный пост.

Оплату за предложенные посты надёжнее принимать в криптовалюте TON: такой платёж покупатель вернуть не может. О сообщениях про возвраты и мошеннических схемах читайте в [статье о мошенничестве с возвратом Stars](/blog/telegram-stars-refund-firibgarlik-rostmi).

## Часто задаваемые вопросы

### Обязательно ли админу покупать Telegram Premium, чтобы зарабатывать на канале?

На изученных официальных страницах такого условия нет. Для админа Premium — это личное удобство, а не инструмент заработка.

### Какой процент дохода от рекламы получает владелец канала?

И блог Telegram, и техническая страница называют 50 %. Эту долю выводят через Fragment.

### Сколько Stars от звёздных реакций остаётся мне?

Все: по документации Stars, владелец канала получает 100 % звёзд из реакций.

### Когда приходят деньги за предложенный пост и что будет, если пост удалить?

Награда начисляется через сутки после публикации. Если удалить пост раньше, оплата полностью вернётся тому, кто её предлагал.

### Как вывести Stars и какая минимальная сумма вывода?

Запрос на вывод может отправить только владелец канала, а завершается вывод на странице Fragment. Минимум существует, но официальная страница не называет конкретную цифру.

### Можно ли полностью отключить рекламу в своём канале?

Можно, но для этого каналу нужно набрать достаточно бустов. Какой именно уровень требуется, официальная страница не уточняет.

### Если подписчики купят Premium, мой доход от рекламы уменьшится?

Официально известно, что пользователи Premium могут отключить рекламу. Но насколько это скажется на вашем доходе, официальные источники не подсчитывали.

### Можно ли отправить каналу подарок или задонатить звёздами в прямом эфире?

В изученных официальных источниках ни то ни другое не подтверждено. Если увидите такую возможность в приложении, проверьте условия там же.`,
  },
};
