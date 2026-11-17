// Avtoblogyoz yasagan maqola (2026-11-17). Niyat: O‘zbekistondagi Telegram foydalanuvchisi «Durov xalqaro qidiruvga qo‘yildi» degan xabarni ko‘rib, uning rostligini va Telegram ishlashi yoki akkaunti xavfsizligiga ta’sir qilish-qilmasligini «Durov xalqaro qidiruv rostmi» so‘rovi bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/moderation
//   https://telegram.org/press
//   https://telegram.org/faq
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "durov-xalqaro-qidiruv-fsb-rostmi",
  date: "2026-11-17",
  reviewed: "2026-11-17",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Durov xalqaro qidiruvga qo‘yildimi? FSB haqidagi xabar rostmi", ru: "Дурова объявили в международный розыск? Правда ли новость про ФСБ" },
  excerpt: { uz: `Rasman tasdiqlanmagan: FSB Durovni «terrorizmga yordam berish»da ayblab xalqaro qidiruvga qo‘ygani haqida faqat kanal posti yozgan. Telegram’ning rasmiy sahifalarida bunga javob yo‘q.`, ru: `Официально не подтверждено: о том, что ФСБ объявила Дурова в международный розыск за «содействие терроризму», написал только пост в канале. Ответа на официальных страницах Telegram нет.` },
  keywords: ["Durov xalqaro qidiruv","Durov xalqaro qidiruvga qo'yildi rostmi","FSB Durov qidiruv","Pavel Durov terrorizm ayblovi","Durov qidiruvda","Telegram yopiladimi","Дуров международный розыск","ФСБ объявила Дурова в розыск","Дуров обвинение в терроризме","Дуров в розыске правда","Telegram заблокируют"],
  related: ["telegram-asoschisi-pavel-durov-kim","telegram-ishlamayapti-nima-qilish-proksi","telegram-shubhali-havola-akkaunt-bloklanishi","pavel-durov-plush-pepe-sovga-rostmi"],
  sources: [{"url":"https://telegram.org/moderation","title":"Telegram Moderation Overview"},{"url":"https://telegram.org/press","title":"Telegram Press Info"},{"url":"https://telegram.org/faq","title":"Telegram FAQ"}],
  content: {
    uz: `## Durov rostdan xalqaro qidiruvga qo‘yildimi?

Bu da’vo biz tekshirgan rasmiy manbalarda tasdiqlanmadi, lekin rad ham etilmadi. Rossiya FSB’si Pavel Durovni «terrorizmga yordam berish»da ayblab, xalqaro qidiruv ro‘yxatiga kiritgani haqidagi xabar Telegram kanallarida tarqalgan bitta postga asoslangan.

Bunday da’voni faqat davlat organining o‘z rasmiy e’loni yoki qidiruv bazasi tasdiqlay oladi. Bu maqola tayangan manbalar orasida bunday hujjat yo‘q. Shuning uchun xabarni fakt sifatida yozmaymiz.

Telegram’ning rasmiy sahifalarida ham bu ayblovga javob topilmadi. Biz Telegram’ning [press sahifasi](https://telegram.org/press), [FAQ sahifasi](https://telegram.org/faq) va [moderatsiya sahifasini](https://telegram.org/moderation) ko‘rib chiqdik.

Quyida siyosiy baho emas, faqat nima tekshirilgani va oddiy foydalanuvchi uchun amaliy xulosa berilgan.

## Postdagi qaysi da’volar tasdiqlangan, qaysilari yo‘q?

Postda bir nechta alohida da’vo bor. Ularni birma-bir ajratsak, manzara aniqroq bo‘ladi.

| Da’vo | Holat | Izoh |
|---|---|---|
| Durov xalqaro qidiruv ro‘yxatiga kiritilgan | Tasdiqlanmagan | Rasmiy davlat manbasi tekshirilmadi |
| Ayblov — «terrorizmga yordam berish» | Tasdiqlanmagan | Faqat kanal postida yozilgan |
| Ukraina razvedkasining botlari va kanallari bloklanmagan | Tekshirilmagan | Bu bir tomonning da’vosi |
| Durov ayblovga X’da surat bilan javob bergan | Tasdiqlanmagan | Telegram yoki Durovning rasmiy javobi topilmadi |
| Fransiyadagi jarayon davom etmoqda | Tasdiqlanmagan | 2026-yildagi holati rasmiy manbalarda topilmadi |
| Telegram terrorchilik kontentini bloklaydi | Telegram’ning o‘z bayonoti | Raqamlar keyingi bo‘limda |

> «Tasdiqlanmagan» degani «yolg‘on» degani emas. Bu faqat biz tekshirgan manbalarda isbot topilmaganini bildiradi.

Fransiyadagi jarayon haqida ham shuni aytish kerak: uning hozirgi bosqichi bo‘yicha ishonchli rasmiy ma’lumot topilmadi. Shuning uchun postdagi bu qism ham taxmin sifatida qoladi.

## Telegram terrorchilik kontenti bo‘yicha o‘zi nima deydi?

FSB’ning da’vosi moderatsiya bilan bog‘liq. Shuning uchun Telegram bu mavzuda rasman nima deyishini bilish foydali. Quyidagilar [Telegram moderatsiya sahifasidan](https://telegram.org/moderation) olingan:

- Telegram qoidasiga ko‘ra, zo‘ravonlikka chaqiriq va terrorchilik targ‘ibotiga platformada joy yo‘q.
- 2026-yilda 30 403 376 ta guruh va kanal bloklangan.
- Ulardan 199 452 tasi terrorizmga aloqador jamoalar.
- Terrorchilik kontentini o‘chirish bo‘yicha kunlik hisobotlar 2016-yildan beri e’lon qilinadi.
- ETIDAL bilan hamkorlikda 200 milliondan ortiq terrorchilik kontenti o‘chirilgan.
- Telegram bu sohadagi ishi Europol tomonidan e’tirof etilganini aytadi.

Bu raqamlarni Telegram’ning o‘zi e’lon qilgan. Ular muayyan bot yoki kanallar haqidagi FSB da’vosini na tasdiqlaydi, na rad etadi. Ular faqat kompaniyaning moderatsiya bo‘yicha umumiy pozitsiyasini ko‘rsatadi.

## Durov va Telegram jamoasi qayerda joylashgan?

Telegram’ning [press sahifasiga](https://telegram.org/press) ko‘ra, Pavel Durov ikki davlat — BAA va Fransiya fuqaroligiga ega. [Telegram FAQ sahifasiga](https://telegram.org/faq) ko‘ra, ishlab chiqish jamoasi Dubayda joylashgan.

Bu ma’lumot vaziyatni tushunishga yordam beradi. Lekin qidiruv rostdan e’lon qilingan bo‘lsa, uning huquqiy oqibati qanday bo‘lishi haqida xulosa chiqarishga asos bermaydi. Bunday baholarni huquqshunoslar va rasmiy organlar beradi, biz taxmin qilmaymiz.

Durovning tarjimai holi va Telegram’ni kim asos solgani haqida rasmiy faktlar alohida maqolada: [Telegram asoschisi kim va Pavel Durov necha yoshda](/blog/telegram-asoschisi-pavel-durov-kim).

## Bu yangilik Telegram’ning O‘zbekistonda ishlashiga ta’sir qiladimi?

Bu ayblov Telegram’ning O‘zbekistonda ishlashiga ta’sir qilishi haqida rasmiy bayonot topilmadi.

Telegram sekin ishlasa yoki ochilmasa, buni darhol shu yangilikka bog‘lashga shoshilmang. Ko‘pincha sabab oddiyroq bo‘ladi: internet uzilishi, qurilmadagi muammo yoki Telegram tomonidagi qisqa nosozlik. Boshqa ilova va saytlar ochilyaptimi, Wi-Fi’dan mobil internetga o‘tganda farq bormi — shundan boshlang. Batafsil tartib bu yerda: [Telegram ishlamayapti: nima qilish kerak](/blog/telegram-ishlamayapti-nima-qilish-proksi).

> «Telegram yopiladi, tezda bu proksini ulang» degan xabarlarga ishonmang. Login kodi, telefon raqami yoki parol so‘raydigan «proksi» botlari akkauntni o‘g‘irlash uchun ishlatilishi mumkin.

## Akkauntim va xabarlarim xavfsizmi?

Telegram FAQ sahifasida kompaniya hozirgacha foydalanuvchi xabarlaridan 0 bayt ham uchinchi tomonlarga, jumladan hukumatlarga oshkor qilinmaganini aytadi. Bu Telegram’ning o‘z bayonoti, uni mustaqil tekshirib bo‘lmaydi.

O‘sha sahifaga ko‘ra, bulutdagi chatlar dunyoning bir nechta ma’lumot markazida saqlanadi. Ularni ochadigan shifr kalitlari esa qismlarga bo‘lingan.

Ayblov akkauntlar xavfsizligiga ta’sir qilishi haqida rasmiy bayonot topilmadi. Amalda akkaunt uchun xavfliroq narsa — login kodini begonaga berib qo‘yish. Shuning uchun ikki bosqichli tekshiruvni yoqing: FAQ’ga ko‘ra, u yoqilgach, kirish uchun SMS kod ham, parol ham kerak bo‘ladi. Kodni bilib olgan odam parolsiz kira olmaydi.

Uni yoqish uchun Telegram’da «Sozlamalar» → «Maxfiylik va xavfsizlik» → «Ikki bosqichli tekshiruv» bo‘limiga kiring. Parolni boshqa joyda ishlatmagan bo‘lishi kerak. Tiklash uchun o‘zingizga tegishli e-pochtani kiriting.

Agar kodni kimgadir yuborib qo‘ygan bo‘lsangiz, kutmang: «Qurilmalar» bo‘limida notanish seanslarni darhol yoping va parolni almashtiring. So‘ralmagan kodlar kelayotgan bo‘lsa, bu maqola yordam beradi: [Login kodi so‘rovlaridan akkauntni himoya qilish](/blog/888-raqam-login-kodi-sorovlari-himoya).

## Shov-shuvli yangilik fonida qanday firibgarlikdan ehtiyot bo‘lish kerak?

Katta yangiliklar chiqqanda firibgarlar odatda vahimadan foydalanadi. Quyidagi xabarlarga ayniqsa ehtiyot bo‘ling:

- «Telegram bloklanadi, chatlaringizni saqlab qoling» degan havolalar va soxta login sahifalari.
- Kod, telefon raqami yoki ikki bosqichli parolni so‘raydigan «proksi» va «VPN» botlari.
- Durov nomidan «kompensatsiya», «sovg‘a» yoki «yutuq» va’da qiladigan xabarlar. Durov haqida tarqalgan tasdiqlanmagan xabarga yana bir misol: [Pavel Durov Plush Pepe sovg‘a qildimi](/blog/pavel-durov-plush-pepe-sovga-rostmi).
- Pul o‘tkazishni yoki kripto hamyonni ulashni talab qiladigan «yordam» takliflari.

Notanish havolani ochishdan oldin manzilini tekshiring. Havola ochish va bloklanish haqidagi mish-mishlar bu yerda tahlil qilingan: [Telegramda havola ochsam bloklanadimi](/blog/telegram-shubhali-havola-akkaunt-bloklanishi).

## Bunday xabarni o‘zim qanday tekshiraman?

Keyingi safar shov-shuvli post ko‘rsangiz, quyidagi tartibda tekshiring:

1. Xabarning asl manbasini toping. Kanal posti yoki skrinshot rasmiy manba hisoblanmaydi.
2. Telegram’ning rasmiy sahifalarini ko‘ring: [press sahifasi](https://telegram.org/press), [FAQ](https://telegram.org/faq), [moderatsiya sahifasi](https://telegram.org/moderation) va [Telegram blogi](https://telegram.org/blog).
3. Davlat organi haqidagi da’voni o‘sha organning o‘z rasmiy saytidagi e’lon bilan solishtiring. Boshqa kanallarning qayta aytgani tasdiq emas.
4. Bir nechta mustaqil manba aynan bir xil faktni aytayotganini tekshiring. Bitta post o‘nlab kanalda qayta chiqsa ham, u baribir bitta manba.
5. Xabarda havola, kod so‘rovi yoki pul talabi bo‘lsa, uni ochmang va hech narsa yubormang.
6. Ikki bosqichli parolni yoqing va «Qurilmalar» bo‘limida notanish seanslarni yoping.

## Premium obunam yoki xaridim bunga bog‘liqmi?

Premium ishlashi yoki narxi bu yangilik sababli o‘zgarishi haqida rasmiy bayonot topilmadi. Premium statusni faqat Telegram beradi, «soxta Premium» degan narsa texnik jihatdan yo‘q.

Premiumtg obunani username orqali yuboradi: akkauntga kirish, login kodi yoki parol so‘ralmaydi. Bu yuqoridagi xavfsizlik qoidasiga ham mos — kodingizni hech kimga bermaysiz. Nima uchun username yetarli ekani bu yerda tushuntirilgan: [Premium olish uchun akkauntga kirish kerakmi](/blog/akkauntga-kirmasdan-premium-olish). To‘lovdan so‘ng obuna 10 soniyada avtomatik faollashadi. Premiumtg mustaqil xizmat va Telegram nomidan ish yuritmaydi.

Hozirgi paketlar: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}. To‘lov so‘mda: Click, Payme, Paynet yoki Uzum Bank, xorijiy karta kerak emas. Narx va mavjud to‘lov usullarini xariddan oldin [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida tekshiring.

## Ko‘p so‘raladigan savollar

### Durov qidiruvga qo‘yilgani haqida rasmiy tasdiq bormi?

Biz ko‘rgan rasmiy manbalarda yo‘q. Bunday da’voni faqat tegishli davlat organining o‘z e’loni yoki Durovning rasmiy bayonoti aniq tasdiqlay oladi.

### Telegram Durovga qo‘yilgan ayblovga javob berdimi?

Telegram’ning press, FAQ va moderatsiya sahifalarida javob topilmadi. Durovning X’da surat bilan javob bergani haqidagi gap ham faqat kanal postiga asoslangan.

### Bu yangilik sababli Telegram O‘zbekistonda bloklanishi mumkinmi?

Bunday rasmiy bayonot topilmadi. Ilova ochilmasa, sababini avval internet va qurilmangizdan qidiring, kod so‘raydigan proksi botlariga ulanmang.

### Telegram xabarlarimni hukumatlarga beradimi?

Telegram o‘z FAQ sahifasida hozirgacha foydalanuvchi xabarlarini hech qaysi hukumatga bermaganini aytadi. Bu kompaniyaning o‘z da’vosi, uni mustaqil tekshirish imkoni yo‘q.

### Durov qaysi davlat fuqarosi va Telegram qayerda joylashgan?

Press sahifasiga ko‘ra, Durov BAA va Fransiya fuqarosi. Telegram’ning ishlab chiqish jamoasi Dubayda.

### «Telegram yopiladi» degan xabarni olsam nima qilishim kerak?

Havolani ochmang, hech kimga kod yoki parol yubormang. Xabarni Telegram’ning rasmiy sahifalari bilan solishtiring va ikki bosqichli parolni yoqib qo‘ying.

### Telegram terrorchilik kanallarini rostdan bloklaydimi?

Telegram o‘z moderatsiya statistikasida bunday jamoalarni bloklashini va kunlik hisobot chiqarishini aytadi. Lekin bu umumiy raqamlar FSB tilga olgan aniq bot va kanallar haqida hech narsa demaydi.`,
    ru: `## Правда ли, что Дурова объявили в международный розыск?

Официальные источники, которые мы проверили, это утверждение не подтверждают, но и не опровергают. Сообщение о том, что ФСБ России обвинила Павла Дурова в «содействии терроризму» и объявила его в международный розыск, опирается на один пост. Его разошлось по Telegram-каналам.

Подтвердить такое может только официальное заявление самого госоргана или запись в базе розыска. Среди источников этой статьи такого документа нет. Поэтому мы не подаём новость как факт.

На официальных страницах Telegram ответа на это обвинение тоже не нашлось. Мы просмотрели [страницу для прессы](https://telegram.org/press), [FAQ](https://telegram.org/faq) и [страницу о модерации](https://telegram.org/moderation).

Ниже нет политических оценок. Здесь только то, что удалось проверить, и практические выводы для обычного пользователя.

## Какие утверждения из поста подтверждены, а какие нет?

В посте несколько отдельных утверждений. Если разобрать их по одному, картина становится яснее.

| Утверждение | Статус | Комментарий |
|---|---|---|
| Дуров внесён в список международного розыска | Не подтверждено | Официальный государственный источник не проверен |
| Обвинение — «содействие терроризму» | Не подтверждено | Написано только в посте канала |
| Боты и каналы украинской разведки не блокируются | Не проверено | Это утверждение одной стороны |
| Дуров ответил на обвинение картинкой в X | Не подтверждено | Официальный ответ Telegram или Дурова не найден |
| Процесс во Франции продолжается | Не подтверждено | Данных о его состоянии в 2026 году в официальных источниках нет |
| Telegram блокирует террористический контент | Заявление самого Telegram | Цифры — в следующем разделе |

> «Не подтверждено» не означает «ложь». Это значит лишь, что в проверенных нами источниках доказательств не нашлось.

То же касается и процесса во Франции: надёжной официальной информации о его текущей стадии мы не нашли. Поэтому эта часть поста тоже остаётся предположением.

## Что сам Telegram говорит о террористическом контенте?

Утверждение ФСБ касается модерации. Поэтому полезно знать, что Telegram официально говорит на эту тему. Всё ниже взято со [страницы о модерации Telegram](https://telegram.org/moderation):

- По правилам Telegram, призывам к насилию и террористической пропаганде на платформе не место.
- В 2026 году заблокировано 30 403 376 групп и каналов.
- Из них 199 452 — сообщества, связанные с терроризмом.
- Ежедневные отчёты об удалении террористического контента публикуются с 2016 года.
- Совместно с ETIDAL удалено более 200 миллионов единиц террористического контента.
- Telegram сообщает, что его работу в этой области признал Европол.

Эти цифры опубликовал сам Telegram. Утверждение ФСБ о конкретных ботах и каналах они не подтверждают и не опровергают. Они лишь показывают общую позицию компании по модерации.

## Где находятся Дуров и команда Telegram?

Согласно [странице для прессы](https://telegram.org/press), у Павла Дурова двойное гражданство — ОАЭ и Франции. Согласно [FAQ Telegram](https://telegram.org/faq), команда разработчиков находится в Дубае.

Это помогает понять контекст. Но делать выводы о юридических последствиях, если розыск действительно объявлен, на этом основании нельзя. Такие оценки дают юристы и официальные органы, мы не гадаем.

Официальные факты о биографии Дурова и о том, кто основал Telegram, собраны в отдельной статье: [кто основатель Telegram и сколько лет Павлу Дурову](/blog/telegram-asoschisi-pavel-durov-kim).

## Повлияет ли эта новость на работу Telegram в Узбекистане?

Официального заявления о том, что обвинение повлияет на работу Telegram в Узбекистане, мы не нашли.

Если Telegram тормозит или не открывается, не спешите сразу связывать это с новостью. Чаще причина проще: перебои с интернетом, проблема с устройством или кратковременный сбой на стороне Telegram. Начните с простого: открываются ли другие приложения и сайты, меняется ли что-то при переключении с Wi-Fi на мобильный интернет. Подробный порядок действий — здесь: [Telegram не работает: что делать](/blog/telegram-ishlamayapti-nima-qilish-proksi).

> Не верьте сообщениям вроде «Telegram закроют, срочно подключите этот прокси». Боты с «прокси», которые просят код входа, номер телефона или пароль, могут использоваться для угона аккаунта.

## Безопасны ли мой аккаунт и переписка?

В FAQ Telegram компания заявляет, что до сих пор не раскрыла третьим сторонам, включая правительства, ни одного байта пользовательских сообщений. Это заявление самого Telegram, независимо проверить его нельзя.

Там же сказано, что облачные чаты хранятся в нескольких дата-центрах по всему миру. А ключи для их расшифровки разделены на части.

Официального заявления о том, что обвинение как-то влияет на безопасность аккаунтов, нет. На практике куда опаснее для аккаунта — отдать код входа постороннему. Поэтому включите двухэтапную аутентификацию: по данным FAQ, после её включения для входа нужны и SMS-код, и пароль. Тот, кто узнал код, без пароля не войдёт.

Чтобы включить её, откройте в Telegram «Настройки» → «Конфиденциальность» → «Облачный пароль». Пароль не должен использоваться где-то ещё. Для восстановления укажите почту, к которой есть доступ только у вас.

Если вы уже кому-то отправили код, не ждите: сразу завершите незнакомые сеансы в разделе «Устройства» и смените пароль. Если приходят коды, которые вы не запрашивали, поможет эта статья: [как защитить аккаунт от запросов кода входа](/blog/888-raqam-login-kodi-sorovlari-himoya).

## Каких мошенников остерегаться на фоне громкой новости?

Когда выходят громкие новости, мошенники обычно играют на панике. Будьте особенно осторожны с такими сообщениями:

- Ссылки в духе «Telegram заблокируют, сохраните свои чаты» и поддельные страницы входа.
- Боты «прокси» и «VPN», которые просят код, номер телефона или облачный пароль.
- Сообщения от имени Дурова с обещаниями «компенсации», «подарка» или «выигрыша». Ещё один пример неподтверждённой новости о Дурове: [дарил ли Павел Дуров Plush Pepe](/blog/pavel-durov-plush-pepe-sovga-rostmi).
- Предложения «помощи», где требуют перевести деньги или подключить криптокошелёк.

Перед тем как открыть незнакомую ссылку, проверьте адрес. Слухи о том, что за открытие ссылки блокируют, разобраны здесь: [заблокируют ли за открытие ссылки в Telegram](/blog/telegram-shubhali-havola-akkaunt-bloklanishi).

## Как самому проверить такую новость?

В следующий раз, увидев громкий пост, проверьте его по шагам:

1. Найдите первоисточник. Пост в канале или скриншот официальным источником не считаются.
2. Посмотрите официальные страницы Telegram: [для прессы](https://telegram.org/press), [FAQ](https://telegram.org/faq), [о модерации](https://telegram.org/moderation) и [блог Telegram](https://telegram.org/blog).
3. Сверьте утверждение о госоргане с заявлением на официальном сайте этого органа. Пересказ в других каналах подтверждением не является.
4. Убедитесь, что один и тот же факт сообщают несколько независимых источников. Даже если один пост перепечатали десятки каналов, источник всё равно один.
5. Если в сообщении есть ссылка, просьба прислать код или требование денег — не открывайте и ничего не отправляйте.
6. Включите облачный пароль и завершите незнакомые сеансы в разделе «Устройства».

## Связана ли с этим моя подписка Premium или покупка?

Официальных заявлений о том, что из-за этой новости изменится работа или цена Premium, нет. Статус Premium выдаёт только Telegram, «поддельного Premium» технически не существует.

Premiumtg отправляет подписку по username: вход в аккаунт, код входа или пароль не нужны. Это совпадает с правилом безопасности выше — свой код вы никому не передаёте. Почему username достаточно, объясняется здесь: [нужен ли вход в аккаунт, чтобы получить Premium](/blog/akkauntga-kirmasdan-premium-olish). После оплаты подписка активируется автоматически за 10 секунд. Premiumtg — независимый сервис и не действует от имени Telegram.

Текущие пакеты: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}. Оплата в сумах: Click, Payme, Paynet или Uzum Bank, зарубежная карта не нужна. Цену и доступные способы оплаты перед покупкой уточняйте в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot).

## Часто задаваемые вопросы

### Есть ли официальное подтверждение, что Дурова объявили в розыск?

В официальных источниках, которые мы изучили, его нет. Однозначно подтвердить такое может только заявление соответствующего госоргана или официальное заявление самого Дурова.

### Ответил ли Telegram на обвинение против Дурова?

На страницах Telegram для прессы, в FAQ и в разделе о модерации ответа нет. История о том, что Дуров ответил картинкой в X, тоже держится только на посте в канале.

### Могут ли из-за этой новости заблокировать Telegram в Узбекистане?

Официальных заявлений об этом нет. Если приложение не открывается, сначала проверьте интернет и устройство и не подключайтесь к прокси-ботам, которые просят код.

### Передаёт ли Telegram мои сообщения правительствам?

В своём FAQ Telegram утверждает, что до сих пор не передавал сообщения пользователей ни одному правительству. Это слова самой компании, проверить их независимо невозможно.

### Гражданином какой страны является Дуров и где находится Telegram?

По данным страницы для прессы, у Дурова гражданство ОАЭ и Франции. Команда разработчиков Telegram работает в Дубае.

### Что делать, если пришло сообщение «Telegram закроют»?

Не переходите по ссылке и никому не отправляйте код или пароль. Сверьте сообщение с официальными страницами Telegram и заранее включите облачный пароль.

### Telegram действительно блокирует террористические каналы?

В своей статистике модерации Telegram сообщает, что блокирует такие сообщества и каждый день публикует отчёты. Но эти общие цифры ничего не говорят о конкретных ботах и каналах, которые упоминает ФСБ.`,
  },
};
