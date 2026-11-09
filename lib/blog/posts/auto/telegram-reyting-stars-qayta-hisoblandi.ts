// Avtoblogyoz yasagan maqola (2026-11-09). Niyat: Telegram foydalanuvchisi profilidagi reyting oshganini ko'rib, «Telegram reyting qayta hisoblandi», «Telegram reytingi qanday hisoblanadi» deb qidiradi va Stars sarfi, refund hamda sovg'a sotish reytingga qanday ta'sir qilishini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/post-search-story-albums-and-more
//   https://core.telegram.org/api/stars
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-reyting-stars-qayta-hisoblandi",
  date: "2026-11-09",
  reviewed: "2026-11-09",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegram reyting qayta hisoblandimi? Stars reytingi qanday hisoblanadi", ru: "Рейтинг в Telegram пересчитали? Как считается рейтинг Stars" },
  excerpt: { uz: `Telegram Stars’ni qayta hisoblagani haqida rasmiy e’lon topilmadi. Reyting Stars tranzaksiyalariga asoslanadi: refund va sovg‘ani Stars’ga aylantirish uni kamaytiradi.`, ru: `Официального объявления о пересчёте потраченных Stars в Telegram нет. Рейтинг основан на транзакциях со Stars: возврат покупки и обмен подарка на Stars его снижают.` },
  keywords: ["telegram reyting stars","telegram reyting qayta hisoblandi","telegram reytingi qanday hisoblanadi","telegram profil reyting","stars reyting oshirish","telegram reyting refund","рейтинг телеграм звезды","telegram пересчитал рейтинг","как считается рейтинг в телеграм","рейтинг звёзд в профиле telegram","рефанд звёзд рейтинг","продажа подарков рейтинг telegram"],
  related: ["telegram-stars-nima","telegram-stars-refund-firibgarlik-rostmi","telegram-nft-sovga-sotish-marketpleys","telegram-gifts-sovgalar"],
  sources: [{"url":"https://telegram.org/blog/post-search-story-albums-and-more","title":"Public Post Search, Story Albums, Gift Collections and More"},{"url":"https://core.telegram.org/api/stars","title":"Telegram Stars"}],
  content: {
    uz: `## Telegram reytingi rostdan qayta hisoblandimi?

Bu tasdiqlanmagan. Telegram sarflangan Stars’ni qayta hisoblagani haqida rasmiy e’lon topilmadi. Ko‘p foydalanuvchilarning reytingi bir vaqtda oshgani haqida ham rasmiy xabar yo‘q. Tekshiruv 2026-yil 9-noyabr holatiga ko‘ra o‘tkazildi.

Da’vo Telegram kanallaridagi postlar orqali tarqalgan. Ulardagi savollarga rasmiy manbalarda javob yo‘q. Formula foydalanuvchilar foydasiga o‘zgarganmi yoki refund uchun qo‘yilgan minuslar qayta hisoblanganmi — bu hali noma’lum.

Rasman boshqa narsalar ma’lum. Reyting profilda ko‘rsatiladi va Stars bilan qilingan tranzaksiyalarga asoslanadi. Bundan tashqari, foydalanuvchi o‘zi uchun kutilayotgan (pending) reytingni ko‘ra oladi. Bu reyting belgilangan sanada qo‘llanadi ([Telegram Stars hujjati](https://core.telegram.org/api/stars)).

Reytingning birdan o‘zgarishini shu mexanizm bilan izohlash mumkin. Lekin bu faqat ehtimol. Ommaviy qayta hisoblash bo‘lganini bu mexanizm tasdiqlamaydi.

> Reytingingiz oshgan bo‘lsa, buni profilingizda ko‘rasiz. O‘zgarish sababini Telegram rasman aytmagan.

## Telegram profilidagi reyting nima va u nima uchun kerak?

Telegram blogidagi e’longa ko‘ra, profillarda raqamli reyting nishoni ko‘rsatiladi. U foydalanuvchining Telegram Stars bilan qilgan muvaffaqiyatli tranzaksiyalari umumiy hajmiga asoslanadi ([Telegram blogi](https://telegram.org/blog/post-search-story-albums-and-more)).

Reyting ikki vazifani bajaradi:

- Telegram’dagi darajangizni ko‘rsatadi.
- Kanal egalariga Suggested Posts va boshqa so‘rovlarda sizga ishonish mumkinligini bildiradi.

Ya’ni bu Stars bo‘yicha faollik va ishonch belgisi. Stars nima ekanini va qayerda sarflanishini [Telegram Stars nima](/blog/telegram-stars-nima) maqolasida o‘qing.

Reyting Premium obunasi bilan bir narsa emas:

- Premium — muddatli obuna.
- Stars — ichki valyuta.
- Reyting — Stars tranzaksiyalariga bog‘langan ko‘rsatkich.

Farqni [Stars va Premium farqi](/blog/telegram-stars-va-premium-farqi) maqolasida batafsil yozganmiz.

## Qaysi amallar reytingni oshiradi va qaysilari kamaytiradi?

Rasmiy manbalarda bir nechta amal aniq nomlangan. Qolganlari uchun faqat umumiy qoida bor: reyting muvaffaqiyatli Stars tranzaksiyalari hajmiga asoslanadi.

| Amal | Reytingga ta’siri | Manba |
|---|---|---|
| Sovg‘a sotib olish | Oshiradi | Telegram blogi |
| Pullik xabar (Paid Messages) yuborish | Oshiradi | Telegram blogi |
| Suggested Posts’ni Stars bilan moliyalashtirish | Oshiradi | Telegram blogi |
| Stars xaridini qaytarish (refund) | Kamaytiradi | core.telegram.org |
| Sovg‘ani Stars’ga aylantirish | Kamaytiradi | core.telegram.org |
| Sovg‘ani bozorda sotish | Rasmiy manbada aniq yozilmagan | — |
| Botlar, mini-ilovalar va boshqa Stars sarflari | Alohida sanab o‘tilmagan | — |

Jadvalning oxirgi ikki qatoriga e’tibor bering. «Yozilmagan» degani «ta’sir qilmaydi» degani emas. Bu faqat rasmiy matnda aniq javob yo‘qligini bildiradi.

Sovg‘alar qanday ishlashi va qancha turishi haqida [Telegram sovg‘alari](/blog/telegram-gifts-sovgalar) maqolasida yozganmiz.

## Reyting manfiy bo‘lishi va daraja tushishi mumkinmi?

Ha. Texnik hujjatga ko‘ra, reyting daraja (level) va son qiymati bilan ifodalanadi. Ikkalasi ham manfiy bo‘lishi mumkin. Qiymat ma’lum chegaralarga yetganda daraja oshadi yoki tushadi ([Telegram Stars hujjati](https://core.telegram.org/api/stars)).

Chegaralarning o‘zi rasman e’lon qilinmagan. Tekshirilgan manbalarda quyidagilar topilmadi:

- necha Stars qaysi darajaga mos kelishi;
- 1 Star reytingni qanchaga oshirishi.

Shuning uchun internetda aylanayotgan «formulalar»ga ishonmang.

Misol: kimdir bir necha marta Stars xaridini qaytarsa, uning reytingi kamayadi. Qiymat keyingi chegaradan pastga tushsa, daraja ham pasayishi mumkin. Minuslar yetarlicha ko‘p bo‘lsa, daraja manfiy qiymatga tushishi ham mumkin.

## Refund qilish reytingga qanday ta’sir qiladi?

Rasmiy hujjatda bu aniq yozilgan: Stars xaridini qaytarsangiz, reyting kamayadi.

«Refund uchun minuslar qayta hisoblandi» degan fikr esa taxmin. Uni hech bir rasmiy manba tasdiqlamagan. Kanallarda bu gap tasdiq sifatida emas, savol shaklida yozilgan.

Refund mavzusida kanallarda shov-shuvli xabarlar tez-tez chiqadi. Ulardan biri haqida [Stars refund firibgarligi haqidagi xabar](/blog/telegram-stars-refund-firibgarlik-rostmi) maqolasida yozganmiz.

Amalda nimani bilish kerak:

- Refund reytingni kamaytiradi. Xarid va qaytarish birga reytingga qanday umumiy natija berishini rasmiy manba aytmaydi. Shuning uchun xarid qilib, keyin qaytarish yo‘li bilan reytingni oshirishga urinish ma’nosiz.
- Refund ta’sirining aniq hajmi rasmiy manbada ko‘rsatilmagan.
- Kanal egalari bilan Suggested Posts orqali ishlasangiz, refund qilishdan oldin reyting siz uchun qanchalik muhimligini o‘ylab ko‘ring.

## Sovg‘ani sotsam yoki Stars’ga aylantirsam reytingim tushadimi?

Bu yerda ikki xil amalni ajratish kerak.

**Sovg‘ani Stars’ga aylantirish.** Rasmiy hujjatga ko‘ra, bu reytingni kamaytiradi.

**Sovg‘ani bozorda sotish.** Bu boshqa amal. Uning reytingga ta’siri rasmiy manbada aytilmagan, shuning uchun taxmin qilmaymiz.

> «Siz sovg‘a qilgan sovg‘ani oluvchi sotsa, sizning reytingingiz endi kamaymaydi» degan gap tasdiqlanmagan. Rasmiy manbalarda bunday qoida topilmadi.

Kolleksion sovg‘ani qayerda va qanday sotish mumkinligi haqida [NFT sovg‘ani qanday sotish](/blog/telegram-nft-sovga-sotish-marketpleys) maqolasida yozganmiz.

## Reytingingizni qanday tekshirish mumkin?

1. Telegram ilovasini so‘nggi versiyagacha yangilang.
2. O‘z profilingizni oching.
3. Profilda reyting nishonini toping.
4. Nishon yonida yoki uni bosgandan keyin qanday ma’lumot chiqishini ko‘ring.
5. Kutilayotgan (pending) reyting ko‘rsatilgan bo‘lsa, u qaysi sanada qo‘llanishini tekshiring.

Kutilayotgan reytingni faqat o‘zingiz ko‘rasiz, boshqa foydalanuvchilar uni ko‘rmaydi. U ko‘rsatilgan bo‘lsa, reytingingiz o‘sha sanada yangilanadi.

Tugma va bo‘lim nomlari ilova versiyasi va qurilmaga qarab farq qilishi mumkin. Profilda nima aynan qanday ko‘rinishini ilovaning o‘zida tekshiring.

## Reyting tushib qolsa nimani tekshirish kerak?

Reyting kamaygan bo‘lsa, sababi odatda rasmiy hujjatda sanalgan amallardan biri bo‘ladi. Quyidagilarni eslab ko‘ring:

- Yaqinda Stars xaridini qaytarganmisiz?
- Profilingizdagi sovg‘ani Stars’ga aylantirganmisiz?
- Kutilayotgan reyting qo‘llanadigan sana o‘tdimi?

Bularning hech biri bo‘lmagan bo‘lsa, aniq sababni rasmiy manbalardan topib bo‘lmaydi. Kanallardagi «hammaning reytingi tushdi» yoki «hammaning reytingi oshdi» degan xabarlarni tasdiqlangan fakt deb qabul qilmang.

Reyting sovg‘a qanchaga sotilishiga yoki Premium obunasiga ta’sir qilishi haqida ham rasmiy ma’lumot yo‘q. Rasman u faqat ikki narsa uchun tasvirlangan: profildagi daraja va kanal egalari uchun ishonch belgisi.

## Kanaldagi reyting haqidagi xabarlarga qanchalik ishonish kerak?

Kanal postlari tez tarqaladi, lekin ko‘pincha taxmin bilan keladi. Reyting qayta hisoblangani haqidagi xabarlar ham hozircha shunday: ulardagi asosiy da’volarni rasmiy manbalar tasdiqlamaydi.

Xabarni tekshirish tartibi:

- Telegram’ning [rasmiy blogini](https://telegram.org/blog) qarang.
- Texnik tafsilotlar uchun [Stars hujjatini](https://core.telegram.org/api/stars) oching.
- Bu ikki joyda topilmasa, xabarni tasdiqlanmagan deb hisoblang.
- Postda «noma’lum», «mish-mishlarga ko‘ra» kabi so‘zlar bo‘lsa, muallifning o‘zi ham ishonch hosil qilmagan bo‘ladi.

Reytingni «oshirib beramiz» degan botlar va akkauntlardan ehtiyot bo‘ling. Login kodi, ikki bosqichli parol yoki seed-iborani hech kimga bermang. Qaysi ma’lumot ochiq, qaysi biri maxfiy ekanini [username berish xavfsizmi](/blog/username-berish-xavfsizmi) maqolasida tushuntirganmiz.

## Ko‘p so‘raladigan savollar

### Telegram reytingim o‘zi oshib qoldi, nega?

Telegram bunga rasmiy izoh bermagan. Ehtimollardan biri — o‘zingizga ko‘ringan kutilayotgan reyting o‘z sanasida kuchga kirgan. Biroq ommaviy qayta hisoblash rasman e’lon qilinmagan.

### Reyting formulasi rasman e’lon qilinganmi?

Yo‘q. Rasmiy manbalarda faqat reyting nimaga asoslanishi va qaysi amallar uni o‘zgartirishi aytilgan. Daraja chegaralari va har bir Star qanchaga teng ekani ko‘rsatilmagan.

### Premium sotib olish Stars reytingiga ta’sir qiladimi?

Rasmiy manbalarda Premium xaridi reyting omillari qatorida sanalmagan. Premiumtg orqali Premium so‘mda to‘lanadi, buning uchun o‘z Stars’ingiz sarflanmaydi.

### Boshqalar mening reytingimni ko‘radimi?

Ha, reyting nishoni profilda ochiq ko‘rsatiladi va kanal egalari uni ishonch belgisi sifatida ko‘radi. Kutilayotgan reyting esa faqat sizga ko‘rinadi.

### Reytingni yashirish mumkinmi?

Biz tekshirgan rasmiy sahifalarda nishonni yashirish sozlamasi tilga olinmagan. Bunday imkoniyat bor-yo‘qligini ilovadagi maxfiylik sozlamalaridan qidirib ko‘ring.

### Do‘stimga sovg‘a bersam va u uni Stars’ga aylantirsa, mening reytingim tushadimi?

Rasmiy hujjatda faqat sovg‘ani Stars’ga aylantirish reytingni kamaytirishi aytilgan. Bu sovg‘ani bergan odamga qanday ta’sir qilishi yozilmagan. «Endi kamaymaydi» degan gap ham tasdiqlanmagan.

### Manfiy reyting nimaga olib keladi?

Hujjatda faqat daraja va qiymat noldan pastga tushishi mumkinligi aytilgan, boshqa oqibatlar yozilmagan. Reyting ishonch belgisi bo‘lgani uchun past daraja Suggested Posts so‘rovlarida kanal egalarida shubha uyg‘otishi mumkin.`,
    ru: `## Telegram действительно пересчитал рейтинг?

Это не подтверждено. Официального объявления о том, что Telegram пересчитал потраченные Stars, нет. Нет и официального сообщения о том, что рейтинг вырос сразу у многих пользователей. Проверка проведена по состоянию на 9 ноября 2026 года.

Утверждение разошлось через посты в Telegram-каналах. На вопросы из этих постов официальные источники не отвечают. Изменилась ли формула в пользу пользователей и пересчитали ли минусы за возвраты, пока неизвестно.

Официально известно другое. Рейтинг показывается в профиле и основан на транзакциях со Stars. Кроме того, пользователь может видеть свой ожидаемый (pending) рейтинг. Он применяется в назначенную дату ([документация Telegram Stars](https://core.telegram.org/api/stars)).

Резкое изменение рейтинга можно объяснить этим механизмом. Но это лишь возможное объяснение. Сам механизм не подтверждает, что был массовый пересчёт.

> Если ваш рейтинг вырос, вы увидите это в профиле. Причину изменения Telegram официально не называл.

## Что такое рейтинг в профиле Telegram и зачем он нужен?

Согласно объявлению в блоге Telegram, в профилях показывается значок с числовым рейтингом. Он основан на общем объёме успешных транзакций пользователя с Telegram Stars ([блог Telegram](https://telegram.org/blog/post-search-story-albums-and-more)).

У рейтинга две задачи:

- Показывать ваш уровень в Telegram.
- Давать владельцам каналов понять, что вам можно доверять в Suggested Posts и других запросах.

Проще говоря, это знак активности со Stars и доверия. Что такое Stars и на что их тратят, читайте в статье [Что такое Telegram Stars](/blog/telegram-stars-nima).

Рейтинг — не то же самое, что подписка Premium:

- Premium — подписка на срок.
- Stars — внутренняя валюта.
- Рейтинг — показатель, привязанный к транзакциям со Stars.

Подробнее о разнице — в статье [Чем Stars отличаются от Premium](/blog/telegram-stars-va-premium-farqi).

## Какие действия повышают рейтинг, а какие понижают?

В официальных источниках прямо названо несколько действий. Для остальных есть только общее правило: рейтинг основан на объёме успешных транзакций со Stars.

| Действие | Влияние на рейтинг | Источник |
|---|---|---|
| Покупка подарка | Повышает | Блог Telegram |
| Отправка платного сообщения (Paid Messages) | Повышает | Блог Telegram |
| Оплата Suggested Posts в Stars | Повышает | Блог Telegram |
| Возврат покупки Stars (refund) | Понижает | core.telegram.org |
| Обмен подарка на Stars | Понижает | core.telegram.org |
| Продажа подарка на маркете | В официальном источнике прямо не указано | — |
| Боты, мини-приложения и другие траты Stars | Отдельно не перечислены | — |

Обратите внимание на две последние строки. «Не указано» не значит «не влияет». Это лишь означает, что в официальном тексте нет прямого ответа.

Как устроены подарки и сколько они стоят, мы разобрали в статье [Подарки в Telegram](/blog/telegram-gifts-sovgalar).

## Может ли рейтинг быть отрицательным, а уровень — понижаться?

Да. Согласно технической документации, рейтинг выражается уровнем (level) и числовым значением. Оба могут быть отрицательными. Когда значение достигает определённых порогов, уровень повышается или понижается ([документация Telegram Stars](https://core.telegram.org/api/stars)).

Сами пороги официально не опубликованы. В проверенных источниках не нашлось:

- сколько Stars соответствует какому уровню;
- насколько 1 Star повышает рейтинг.

Поэтому не доверяйте «формулам», которые гуляют по интернету.

Пример: если человек несколько раз вернёт покупку Stars, его рейтинг снизится. Если значение опустится ниже очередного порога, может понизиться и уровень. При достаточно большом количестве минусов уровень может уйти и в отрицательные значения.

## Как возврат (refund) влияет на рейтинг?

В официальной документации это сказано прямо: если вернуть покупку Stars, рейтинг снизится.

А вот мысль «минусы за возвраты пересчитали» — это предположение. Ни один официальный источник его не подтверждает. В каналах это сформулировано как вопрос, а не как подтверждённый факт.

На тему возвратов в каналах регулярно появляются громкие новости. Об одной из них мы писали в статье [Мошенничество с возвратом Stars: правда ли это](/blog/telegram-stars-refund-firibgarlik-rostmi).

Что важно знать на практике:

- Возврат снижает рейтинг. Какой общий итог дают покупка и возврат вместе, официальный источник не говорит. Поэтому пытаться поднять рейтинг схемой «купил — вернул» бессмысленно.
- Точный размер влияния возврата в официальном источнике не указан.
- Если вы работаете с владельцами каналов через Suggested Posts, перед возвратом подумайте, насколько вам важен рейтинг.

## Упадёт ли рейтинг, если продать подарок или обменять его на Stars?

Здесь нужно различать два разных действия.

**Обмен подарка на Stars.** Согласно официальной документации, это снижает рейтинг.

**Продажа подарка на маркете.** Это другое действие. Его влияние на рейтинг в официальном источнике не описано, поэтому гадать не будем.

> Утверждение «если получатель продаст подаренный вами подарок, ваш рейтинг больше не снизится» не подтверждено. В официальных источниках такого правила не нашлось.

Где и как продать коллекционный подарок, мы рассказали в статье [Как продать NFT-подарок](/blog/telegram-nft-sovga-sotish-marketpleys).

## Как проверить свой рейтинг?

1. Обновите Telegram до последней версии.
2. Откройте свой профиль.
3. Найдите в профиле значок рейтинга.
4. Посмотрите, какая информация отображается рядом со значком или после нажатия на него.
5. Если показан ожидаемый (pending) рейтинг, проверьте, в какую дату он будет применён.

Ожидаемый рейтинг видите только вы, другие пользователи его не видят. Если он показан, ваш рейтинг обновится в указанную дату.

Названия кнопок и разделов могут отличаться в зависимости от версии приложения и устройства. Как именно всё выглядит в профиле, проверяйте в самом приложении.

## Что проверить, если рейтинг упал?

Если рейтинг снизился, причина обычно в одном из действий, перечисленных в официальной документации. Вспомните:

- Не возвращали ли вы недавно покупку Stars?
- Не обменивали ли подарок из профиля на Stars?
- Не наступила ли дата применения ожидаемого рейтинга?

Если ничего из этого не было, точную причину по официальным источникам не установить. Не принимайте сообщения каналов вроде «у всех упал рейтинг» или «у всех вырос рейтинг» за подтверждённый факт.

Официальных данных о том, что рейтинг влияет на цену продажи подарка или на подписку Premium, тоже нет. Официально он описан только для двух целей: уровень в профиле и знак доверия для владельцев каналов.

## Насколько можно верить новостям о рейтинге из каналов?

Посты в каналах расходятся быстро, но часто содержат догадки. Новости о пересчёте рейтинга пока из той же категории: их главные утверждения официальные источники не подтверждают.

Как проверить новость:

- Загляните в [официальный блог Telegram](https://telegram.org/blog).
- За техническими деталями откройте [документацию по Stars](https://core.telegram.org/api/stars).
- Если в этих двух местах ничего нет, считайте новость неподтверждённой.
- Если в посте есть слова «неизвестно», «по слухам», значит, автор и сам не уверен.

Остерегайтесь ботов и аккаунтов, которые обещают «поднять рейтинг». Никому не сообщайте код входа, пароль двухэтапной проверки или seed-фразу. Какие данные открытые, а какие секретные, мы объяснили в статье [Безопасно ли сообщать username](/blog/username-berish-xavfsizmi).

## Часто задаваемые вопросы

### Мой рейтинг в Telegram сам вырос — почему?

Официального объяснения Telegram не давал. Один из вариантов — вступил в силу ожидаемый рейтинг, который был виден только вам. Массовый пересчёт официально не объявлялся.

### Формула рейтинга опубликована официально?

Нет. Официальные источники говорят лишь, на чём основан рейтинг и какие действия его меняют. Пороги уровней и вес одного Star не раскрыты.

### Влияет ли покупка Premium на рейтинг Stars?

В официальных источниках покупка Premium не названа среди факторов рейтинга. Через Premiumtg Premium оплачивается в сумах, ваши собственные Stars на это не тратятся.

### Видят ли другие мой рейтинг?

Да, значок рейтинга открыто показывается в профиле, и владельцы каналов воспринимают его как знак доверия. Ожидаемый рейтинг при этом видите только вы.

### Можно ли скрыть рейтинг?

На проверенных нами официальных страницах настройка для скрытия значка не упоминается. Есть ли такая возможность, поищите в настройках конфиденциальности приложения.

### Если я подарю подарок другу, а он обменяет его на Stars, упадёт ли мой рейтинг?

В документации сказано только, что обмен подарка на Stars снижает рейтинг. Как это отражается на том, кто подарил, не описано. Утверждение «теперь больше не снижается» тоже не подтверждено.

### К чему приводит отрицательный рейтинг?

В документации указано лишь, что уровень и значение могут опускаться ниже нуля, других последствий не описано. Поскольку рейтинг — знак доверия, низкий уровень может насторожить владельцев каналов при запросах на Suggested Posts.`,
  },
};
