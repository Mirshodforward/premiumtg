// Avtoblogyoz yasagan maqola (2026-11-19). Niyat: TON tangasi bor o‘zbekistonlik Telegram foydalanuvchisi «TON’ni GRAM’ga almashtirish kerakmi» yoki «TON GRAM migratsiya» deb qidiradi. U balansiga nima bo‘lishini va almashtirishni taklif qilgan xabar firibgarlik emasligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://ton.org/
//   https://ton.org/media
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "ton-gram-almashtirish-migratsiya-firibgarlik",
  date: "2026-11-19",
  reviewed: "2026-11-19",
  category: "xavfsizlik",
  priority: 0.7,
  title: { uz: "TON’ni GRAM’ga almashtirish kerakmi? «Migratsiya» xabarlari va firibgarlik", ru: "Нужно ли менять TON на GRAM? Сообщения о «миграции» и мошенничество" },
  excerpt: { uz: `Rasmiy ton.org’da TON’ni GRAM’ga almashtirish yoki migratsiya talabi topilmadi: tanga endi Gram (GRAM) deb ataladi, ilgari Toncoin bo‘lgan. «Almashtiring» degan xabarga tanga yubormang.`, ru: `На официальном ton.org нет требования менять TON на GRAM или проходить миграцию: монета теперь называется Gram (GRAM), раньше — Toncoin. На просьбы «обменять» монеты не отправляйте.` },
  keywords: ["TON GRAM almashtirish","TON GRAM migratsiya","Toncoin Gram bo‘ldi","TON’ni GRAM’ga almashtirish kerakmi","GRAM tiker","Gram tanga firibgarlik","TON migratsiya scam","обменять TON на GRAM","миграция TON в GRAM","Toncoin переименован в Gram","GRAM тикер TON","скам миграция TON"],
  related: ["toncoin-gram-nomi-ozgardimi-rostmi","ton-hamyonga-spam-nft-keldi-xavflimi","telegram-gram-hamyon-non-custodial-rostmi","ton-org-telegram-integratsiya-mahsulotlar"],
  sources: [{"url":"https://ton.org/","title":"TON — The Leading L1 Blockchain"},{"url":"https://ton.org/media","title":"Media Assets"}],
  content: {
    uz: `## TON’ni GRAM’ga almashtirish kerakmi?

Rasmiy [ton.org](https://ton.org/) sayti TON blokcheynining ichki tangasini endi Gram deb ataydi. Sayt bu tanga ilgari Toncoin deb ham atalganini yozadi. Lekin unda foydalanuvchi tangasini «yangi GRAM»ga almashtirishi yoki migratsiyadan o‘tishi kerakligi haqida yozuv topilmadi.

Ochig‘ini aytamiz: «almashtirish shart emas» degan gap ham rasmiy iqtibos bilan tasdiqlanmagan. Shuning uchun amaliy xulosa bitta: rasmiy manbada tasdiqlanmagan «almashtirish» sayti yoki botiga tanga yubormang va hamyoningizni ularga ulamang.

Mavzu Telegram kanallarida tarqalgan xabardan olingan. Unda nom o‘zgarishi, ovoz berish va firibgarlarning «migratsiya» xabarlari haqida gap boradi. Kanal posti rasmiy manba emas, shuning uchun quyida faqat ton.org’da tekshirilgan faktlarga tayanamiz. Nom o‘zgarishining o‘zi haqida alohida maqolamiz bor: [Toncoin GRAM bo‘ldimi?](/blog/toncoin-gram-nomi-ozgardimi-rostmi)

## Nima o‘zgardi: tanga, tiker va blokcheyn nomi

ton.org va uning brend materiallari sahifasida hozir shunday yozilgan:

| Nima | Hozirgi rasmiy holat | Manba |
|---|---|---|
| Tanga nomi | Gram — TON blokcheynining ichki (native) tangasi | [ton.org](https://ton.org/) |
| Ilgarigi nomi | Toncoin | [ton.org](https://ton.org/) |
| Tiker | GRAM | [ton.org](https://ton.org/) |
| Blokcheyn nomi | ton.org uni hamon TON blokcheyni deb ataydi | [ton.org](https://ton.org/) |
| Logotiplar | Gram va TON uchun alohida logotiplar berilgan, TON blokcheynining o‘z standart logotipi bor | [ton.org/media](https://ton.org/media) |
| Gram belgisi | Ko‘k rombdagi oq yulduz | [ton.org/media](https://ton.org/media) |
| Tanga vazifasi | Tarmoq komissiyasini to‘lash, validatsiya, ovoz berish va boshqalar | [ton.org](https://ton.org/) |

Hamyoningizda tanga nomi va belgisi yangicha ko‘rinsa, bu sizga yangi tanga kelganini bildirmaydi. ton.org Gram’ni TON blokcheynining o‘z tangasi deb ataydi, ya’ni gap o‘sha tanganing nomi va tikeri haqida ketyapti.

Ovoz berish sanalari, uning natijalari va o‘zgarish qachon kuchga kirgani jadvalga kiritilmadi. Bu ma’lumotlar bu maqolada tasdiqlanmagan.

## Balansim va hamyonimga nima bo‘ladi?

> Balanslar, hamyonlar va smart-kontraktlar o‘zgarmasligi rasmiy iqtibos bilan tasdiqlanmadi. Shuning uchun biz buni va’da qilmaymiz.

Bizning kuzatuvimiz (bu fakt emas): ton.org tanganing nomi va tikerini yangilagan, blokcheynni esa hamon TON deb ataydi. Rasmiy sahifalarda yangi tarmoqqa o‘tish yoki tangani qayta chiqarish haqida yozuv ko‘rinmadi.

Taxmin qilib o‘tirmang, balansingizni o‘zingiz tekshiring:

- **Rasmiy hamyonda.** ton.org ma’lumoticha, Telegram ichida Telegram jamoasi yaratgan non-custodial Gram hamyoni bor. Bu nimani anglatishini [Gram hamyon non-custodial rostmi](/blog/telegram-gram-hamyon-non-custodial-rostmi) maqolasida tushuntirganmiz.
- **Eksplorerda.** Hamyon manzilingizni eksplorerga kiritib, balans va tranzaksiyalarni ko‘ring. Buni qanday qilish [gram.org eksplorer haqidagi maqolada](/blog/gram-org-ton-eksplorer-rasmiymi) yozilgan.

Hamyon ilovasi bilan eksplorer bir xil balansni ko‘rsatsa, balansingiz joyida. Uni «saqlab qolish» uchun begona saytga kirish ham, biror narsani tasdiqlash ham kerak emas.

Birjada saqlanayotgan tangalar boshqacha holat. Ularni birja o‘zi boshqaradi, birjalardagi tartib esa bu maqolada tekshirilmagan. Bunday holatda birjaning rasmiy ilovasi ichidagi e’lonlarga qarang.

## Qaysi holat normal, qaysi biri xavfli?

Bir xil «GRAM» so‘zi turli vaziyatlarda chiqishi mumkin. Ularni farqlash uchun jadval:

| Vaziyat | Bu nimani anglatishi mumkin | Nima qilish kerak |
|---|---|---|
| Hamyon ilovasida asosiy tanga GRAM deb ko‘rinyapti | ton.org’dagi yangi nomga mos keladi | Balansni eksplorerda solishtiring, boshqa hech narsa qilmang |
| Hamyonga GRAM nomli alohida token yoki NFT kelgan | Asosiy tanga emas, nomi o‘xshash boshqa aktiv | Ichidagi havolani ochmang, hech narsa tasdiqlamang |
| Bot yoki shaxsiy xabarda «almashtiring» deyilgan | Rasmiy sahifalarda bunday talab topilmadi | Havolaga kirmang, shikoyat qiling va bloklang |
| Sayt seed-ibora yoki maxfiy kalit so‘rayapti | Hamyonni egallashga urinish belgisi | Hech narsa kiritmang, sahifani yoping |
| Sayt hamyonni ulab, tranzaksiyani tasdiqlashni so‘rayapti | Tangani boshqa manzilga yuborish xavfi | Ulamang, ulangan bo‘lsa ulanishni uzing |

Firibgar xabari odatda shunday yoziladi (bu namuna, haqiqiy xabardan olinmagan): «Diqqat! Toncoin GRAM’ga o‘zgardi. Balansingiz yo‘qolmasligi uchun 48 soat ichida hamyoningizni ulang». Shoshiltirish, rasmiy ko‘rinish va havola bitta xabarda bo‘lsa — ehtiyot bo‘ling.

## «Almashtirish» xabarlari qanday ko‘rinadi?

Nom o‘zgarishiga bog‘liq firibgarlik haqida rasmiy ogohlantirish topilmadi. Quyidagi belgilar rasmiy bayonotdan emas, kriptodagi umumiy xavfsizlik qoidalaridan olingan.

- **Muddatli tahdid.** «TON’ni GRAM’ga almashtiring», «yangi tokenlarni oling», «migratsiyadan o‘ting, aks holda balansingiz yo‘qoladi».
- **Maxfiy ma’lumot so‘rash.** Seed-ibora (hamyonni tiklash so‘zlari), maxfiy kalit, Telegram login kodi yoki 2FA paroli. Bularni so‘ragan xabar — eng aniq xavf belgisi.
- **Hamyonni ulash va tasdiqlash.** Saytga hamyonni ulab, noma’lum tranzaksiyani tasdiqlashni so‘rashadi. Tasdiqlangan tranzaksiya tangani firibgar manziliga yuborishi mumkin.
- **Tanga yuborishni so‘rash.** «Bizga TON yuboring, GRAM qaytaramiz». Blokcheyndagi o‘tkazmani esa qaytarib bo‘lmaydi.
- **Hamyonga kelgan «sovg‘a».** Hamyonga GRAM nomli noma’lum token yoki NFT kelib, ichida «almashtirish» havolasi bo‘lishi mumkin. Bunday holatda nima qilish kerakligini [Hamyonga noma’lum NFT keldi](/blog/ton-hamyonga-spam-nft-keldi-xavflimi) maqolasida yozganmiz.
- **Rasmiy ko‘rinish.** Ko‘k rombdagi yulduz belgisi yoki «Telegram», «TON» nomli profil ishonchlilik isboti emas: logotipni istalgan kishi nusxalashi mumkin.

## Shubhali migratsiya xabari kelsa, nima qilish kerak?

1. Havolani ochmang va hamyoningizni hech qaysi saytga ulamang.
2. Nom o‘zgarishini faqat [ton.org](https://ton.org/) sahifasida solishtiring: u yerda tanga Gram, tiker GRAM deb yozilgan.
3. Balansni rasmiy hamyon ilovasida yoki eksplorerda manzil bo‘yicha tekshiring.
4. Ilgari biror shubhali saytga hamyon ulagan bo‘lsangiz, hamyon sozlamalaridagi ulanishlar ro‘yxatidan uni uzing. Bu haqda batafsil: [Telegram Wallet ulanishlari va ularni uzish](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik).
5. Seed-iborani biror joyga kiritib qo‘ygan bo‘lsangiz, yangi hamyon yarating va qolgan mablag‘ni darhol o‘sha yerga o‘tkazing. Bu umumiy maslahat, u yo‘qotilgan mablag‘ni qaytarmaydi.
6. Xabar yuborgan akkauntdan Telegram’da shikoyat qiling va uni bloklang.

Shoshilmang. «24 soat ichida» yoki «oxirgi imkoniyat» degan bosim — firibgarning asosiy quroli. Rasmiy o‘zgarish bo‘lsa, ton.org’da yozilgan bo‘ladi va bir kunda yo‘qolib qolmaydi.

Ko‘p uchraydigan xato — «faqat bir marta ulab ko‘ray» deb hamyonni saytga ulash. Ulanishning o‘zi tangani yechmasligi mumkin, lekin keyingi tasdiqlash oynasi haqiqiy tranzaksiya bo‘lishi mumkin. Oynada nima yozilganini o‘qimay turib hech narsani tasdiqlamang.

## Nom o‘zgarishini qayerdan tekshirish kerak?

Bu maqoladagi faktlar ikki sahifadan olingan:

- [ton.org](https://ton.org/) — tanga nomi Gram, ilgarigi nomi Toncoin, tiker GRAM va tanganing vazifalari.
- [ton.org/media](https://ton.org/media) — Gram va TON logotiplari, Gram tokenining standart belgisi.

Quyidagilar bu maqolada tekshirilmagan, shuning uchun ularni yagona manba deb bilmang:

- kanal postlari, skrinshotlar va taniqli shaxslarga nisbat berilgan iqtiboslar;
- ovoz berish platformasi, uning muddati va yakunlangan sanasi;
- Click, Payme, Paynet, Uzum Bank va Fragment’da nom o‘zgarishi bilan bog‘liq biror o‘zgarish bor-yo‘qligi.

Skrinshotga emas, sahifaning o‘ziga qarang. Brauzerda manzilni o‘zingiz yozing: qidiruvdagi reklama yoki xabardagi havola o‘xshash nomli soxta saytga olib borishi mumkin.

## Gram Telegram’da nimaga kerak va Premium uchun kripto kerakmi?

ton.org ma’lumoticha, Telegram Stars’ni Gram bilan sotib olish mumkin. Stars esa Telegram ichidagi raqamli tovarlar, kontent va xizmatlarga sarflanadi. Telegram ichida rasmiy Gram hamyoni ham bor. Stars bilan Premium farqi haqida: [Telegram Stars va Premium farqi](/blog/telegram-stars-va-premium-farqi).

Telegram Premium uchun Gram yoki boshqa kripto shart emas. Premiumtg.uz orqali so‘mda to‘laysiz: Click, Payme, Paynet yoki Uzum Bank. Xorijiy karta kerak emas.

- Faqat username kerak: login kodi, parol yoki akkauntga kirish so‘ralmaydi.
- Obuna 10 soniyada avtomatik faollashadi.
- Paketlar: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}.

Narx va mavjud to‘lov usullarini xariddan oldin [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida tekshiring. Premium statusni faqat Telegram beradi. Premiumtg — mustaqil xizmat, Telegram nomidan ish ko‘rmaydi.

## Ko‘p so‘raladigan savollar

### Toncoin bilan Gram bitta tangami yoki boshqa-boshqa?

ton.org’ga ko‘ra bitta tanga: TON blokcheynining ichki tangasi hozir Gram deb ataladi, avval esa Toncoin nomi bilan tanilgan. O‘zgargani nom va tiker.

### Hamyonimda TON o‘rniga GRAM yozilib qoldi — bu xavflimi?

Asosiy tanga nomi GRAM bo‘lib ko‘rinsa, bu ton.org’dagi yangi nomga mos keladi. Xavotirga sabab — nomi o‘xshash alohida token yoki NFT kelib, ichida havola bo‘lishi. Bunday havolaga kirmang.

### «Migratsiya» uchun bot tanga yuborishimni so‘rayapti, nima qilay?

Yubormang: rasmiy sahifalarda bunday talab topilmadi, blokcheyndagi o‘tkazmani esa qaytarib bo‘lmaydi. Botdan Telegram’da shikoyat qiling va uni bloklang.

### TON blokcheyni ham qayta nomlandimi?

ton.org blokcheynni hamon TON deb ataydi va uning uchun alohida logotip beradi. Yangi nom — Gram — tanganing o‘ziga tegishli.

### Seed-iborani firibgarlar saytiga kiritib qo‘ydim, endi nima qilish kerak?

Darhol yangi hamyon yarating va qolgan mablag‘ni unga o‘tkazing. Eski hamyondan endi foydalanmang: tiklash so‘zlari kimning qo‘lida bo‘lsa, hamyonni o‘sha boshqaradi.

### Gram bilan Telegram Stars sotib olsa bo‘ladimi?

Ha, ton.org Stars’ni Gram bilan sotib olish mumkinligini yozadi. Qaysi usul hozir mavjudligini Telegram ilovasining o‘zida tekshiring.

### Birjada yoki hamyonda GRAM’ni qo‘lda almashtirish kerakmi?

ton.org’da foydalanuvchiga bunday talab topilmadi, birjalardagi tartib esa bu maqolada tekshirilmagan. Telegram’dagi tasodifiy xabarlarga emas, birjangizning rasmiy ilovasi ichidagi e’lonlarga qarang.

### Telegram Premium olish uchun Gram kerakmi?

Yo‘q. @premiumtg_uzbot orqali so‘mda, faqat username bilan to‘laysiz. Kripto hamyon ham, xorijiy karta ham kerak emas.`,
    ru: `## Нужно ли менять TON на GRAM?

Официальный сайт [ton.org](https://ton.org/) теперь называет нативную монету блокчейна TON словом Gram. Там же сказано, что раньше эта монета была известна и как Toncoin. Но требования менять монеты на «новый GRAM» или проходить миграцию на сайте нет.

Скажем честно: обратное утверждение — «менять ничего не нужно» — официальной цитатой тоже не подтверждено. Поэтому практический вывод один: не отправляйте монеты на сайты и в боты для «обмена», которые не подтверждены официальным источником, и не подключайте к ним кошелёк.

Тема взята из сообщения, которое распространялось в Telegram-каналах. В нём говорится о смене названия, голосовании и мошеннических сообщениях о «миграции». Пост в канале — не официальный источник, поэтому ниже опираемся только на факты, проверенные на ton.org. О самой смене названия у нас есть отдельная статья: [Toncoin стал GRAM?](/blog/toncoin-gram-nomi-ozgardimi-rostmi)

## Что изменилось: монета, тикер и название блокчейна

Вот что сейчас написано на ton.org и на странице с его бренд-материалами:

| Что | Текущее официальное состояние | Источник |
|---|---|---|
| Название монеты | Gram — нативная монета блокчейна TON | [ton.org](https://ton.org/) |
| Прежнее название | Toncoin | [ton.org](https://ton.org/) |
| Тикер | GRAM | [ton.org](https://ton.org/) |
| Название блокчейна | ton.org по-прежнему называет его блокчейном TON | [ton.org](https://ton.org/) |
| Логотипы | Для Gram и TON даны отдельные логотипы, у блокчейна TON свой стандартный логотип | [ton.org/media](https://ton.org/media) |
| Иконка Gram | Белая звезда на синем ромбе | [ton.org/media](https://ton.org/media) |
| Назначение монеты | Оплата комиссий сети, участие в валидации, голосовании и не только | [ton.org](https://ton.org/) |

Если в кошельке название и иконка монеты выглядят по-новому, это не значит, что вам пришла новая монета. ton.org называет Gram собственной монетой блокчейна TON — то есть речь о названии и тикере той же монеты.

Даты голосования, его итоги и момент, когда изменение вступило в силу, в таблицу не вошли. Эти данные в статье не подтверждены.

## Что будет с моим балансом и кошельком?

> То, что балансы, кошельки и смарт-контракты не меняются, официальной цитатой не подтверждено. Поэтому мы этого не обещаем.

Наше наблюдение (не факт): ton.org обновил название и тикер монеты, а блокчейн по-прежнему называет TON. Записей о переходе на новую сеть или перевыпуске монеты на официальных страницах мы не увидели.

Не гадайте — проверьте баланс сами:

- **В официальном кошельке.** По данным ton.org, внутри Telegram есть некастодиальный кошелёк Gram от команды Telegram. Что это значит, мы разобрали в статье [Правда ли, что кошелёк Gram некастодиальный](/blog/telegram-gram-hamyon-non-custodial-rostmi).
- **В эксплорере.** Введите адрес кошелька в эксплорер и посмотрите баланс и транзакции. Как это сделать, описано в [статье про эксплорер gram.org](/blog/gram-org-ton-eksplorer-rasmiymi).

Если приложение кошелька и эксплорер показывают одинаковый баланс, с ним всё в порядке. Чтобы его «сохранить», не нужно заходить на сторонние сайты и что-либо подтверждать.

С монетами на бирже ситуация другая. Ими управляет сама биржа, а порядок на биржах в этой статье не проверялся. В таком случае смотрите объявления внутри официального приложения биржи.

## Какая ситуация нормальная, а какая опасная?

Одно и то же слово «GRAM» может появиться в разных ситуациях. Таблица поможет их различить:

| Ситуация | Что это может значить | Что делать |
|---|---|---|
| В приложении кошелька основная монета отображается как GRAM | Соответствует новому названию на ton.org | Сверьте баланс в эксплорере, больше ничего не делайте |
| В кошелёк пришёл отдельный токен или NFT с названием GRAM | Не основная монета, а другой актив с похожим названием | Не открывайте ссылку внутри, ничего не подтверждайте |
| Бот или личное сообщение просит «обменять» | На официальных страницах такого требования нет | Не переходите по ссылке, пожалуйтесь и заблокируйте |
| Сайт просит seed-фразу или приватный ключ | Признак попытки захватить кошелёк | Ничего не вводите, закройте страницу |
| Сайт просит подключить кошелёк и подтвердить транзакцию | Риск отправить монеты на чужой адрес | Не подключайте, а если уже подключили — отключите |

Мошенническое сообщение обычно выглядит примерно так (это пример, а не реальный текст): «Внимание! Toncoin сменился на GRAM. Чтобы не потерять баланс, подключите кошелёк в течение 48 часов». Если в одном сообщении есть спешка, официальный вид и ссылка — будьте осторожны.

## Как выглядят сообщения об «обмене»?

Официального предупреждения о мошенничестве, связанном со сменой названия, мы не нашли. Признаки ниже взяты не из официального заявления, а из общих правил безопасности в крипте.

- **Угроза со сроком.** «Обменяйте TON на GRAM», «получите новые токены», «пройдите миграцию, иначе баланс пропадёт».
- **Запрос секретных данных.** Seed-фраза (слова для восстановления кошелька), приватный ключ, код входа в Telegram или пароль 2FA. Сообщение с таким запросом — самый явный признак опасности.
- **Подключение кошелька и подтверждение.** Просят подключить кошелёк к сайту и подтвердить непонятную транзакцию. Подтверждённая транзакция может отправить монеты на адрес мошенника.
- **Просьба отправить монеты.** «Пришлите нам TON, вернём GRAM». Перевод в блокчейне отменить нельзя.
- **«Подарок» в кошельке.** В кошелёк может прийти неизвестный токен или NFT с названием GRAM и ссылкой на «обмен» внутри. Что делать в таком случае, мы написали в статье [В кошелёк пришёл неизвестный NFT](/blog/ton-hamyonga-spam-nft-keldi-xavflimi).
- **Официальный вид.** Иконка звезды на синем ромбе или профиль с названием «Telegram» или «TON» — не доказательство надёжности: логотип может скопировать кто угодно.

## Пришло подозрительное сообщение о миграции: что делать?

1. Не открывайте ссылку и не подключайте кошелёк ни к какому сайту.
2. Сверяйте смену названия только на странице [ton.org](https://ton.org/): там монета названа Gram, тикер — GRAM.
3. Проверьте баланс в официальном приложении кошелька или в эксплорере по адресу.
4. Если раньше подключали кошелёк к подозрительному сайту, отключите его в списке подключений в настройках кошелька. Подробнее: [Подключения в Telegram Wallet и как их отключить](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik).
5. Если вы уже где-то ввели seed-фразу, создайте новый кошелёк и сразу переведите туда оставшиеся средства. Это общий совет, и потерянные деньги он не вернёт.
6. Пожалуйтесь на аккаунт, приславший сообщение, в Telegram и заблокируйте его.

Не торопитесь. Давление в духе «в течение 24 часов» или «последний шанс» — главный инструмент мошенника. Если изменение официальное, оно будет описано на ton.org и не исчезнет за один день.

Частая ошибка — подключить кошелёк к сайту «всего разок, посмотреть». Само подключение может и не списать монеты, но следующее окно подтверждения может оказаться настоящей транзакцией. Ничего не подтверждайте, пока не прочитали, что написано в окне.

## Где проверять смену названия?

Факты в этой статье взяты с двух страниц:

- [ton.org](https://ton.org/) — название монеты Gram, прежнее название Toncoin, тикер GRAM и функции монеты.
- [ton.org/media](https://ton.org/media) — логотипы Gram и TON, стандартная иконка токена Gram.

Следующее в статье не проверялось, поэтому не считайте это единственным источником:

- посты в каналах, скриншоты и цитаты, приписываемые известным людям;
- платформа голосования, его сроки и дата завершения;
- есть ли какие-то изменения, связанные со сменой названия, в Click, Payme, Paynet, Uzum Bank и на Fragment.

Смотрите не на скриншот, а на саму страницу. Вводите адрес в браузере вручную: реклама в поиске или ссылка в сообщении может привести на поддельный сайт с похожим названием.

## Зачем Gram в Telegram и нужна ли крипта для Premium?

По данным ton.org, Telegram Stars можно купить за Gram. Stars тратятся на цифровые товары, контент и услуги внутри Telegram. Внутри Telegram есть и официальный кошелёк Gram. О разнице между Stars и Premium: [Чем Telegram Stars отличаются от Premium](/blog/telegram-stars-va-premium-farqi).

Для Telegram Premium не нужны ни Gram, ни другая криптовалюта. Через Premiumtg.uz вы платите в сумах: Click, Payme, Paynet или Uzum Bank. Зарубежная карта не нужна.

- Нужен только username: код входа, пароль или доступ к аккаунту не запрашиваются.
- Подписка активируется автоматически за 10 секунд.
- Пакеты: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}.

Цену и доступные способы оплаты перед покупкой проверьте в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Статус Premium выдаёт только Telegram. Premiumtg — независимый сервис и не действует от имени Telegram.

## Часто задаваемые вопросы

### Toncoin и Gram — это одна монета или разные?

Согласно ton.org, одна: нативная монета блокчейна TON сейчас называется Gram, а раньше была известна как Toncoin. Изменились название и тикер.

### В кошельке вместо TON теперь написано GRAM — это опасно?

Если так отображается основная монета, это соответствует новому названию на ton.org. Повод насторожиться — отдельный токен или NFT с похожим названием и ссылкой внутри. По такой ссылке не переходите.

### Бот просит прислать монеты для «миграции». Что делать?

Не отправляйте: на официальных страницах такого требования нет, а перевод в блокчейне не отменить. Пожалуйтесь на бота в Telegram и заблокируйте его.

### Блокчейн TON тоже переименовали?

Нет, ton.org по-прежнему называет блокчейн TON и даёт для него отдельный логотип. Новое имя Gram относится к самой монете.

### Я ввёл seed-фразу на сайте мошенников. Что теперь делать?

Сразу создайте новый кошелёк и переведите на него оставшиеся средства. Старым кошельком больше не пользуйтесь: кто знает слова восстановления, тот им и управляет.

### Можно ли купить Telegram Stars за Gram?

Да, на ton.org сказано, что Stars можно купить за Gram. Какой способ доступен сейчас, проверьте в самом приложении Telegram.

### Нужно ли вручную обменивать GRAM на бирже или в кошельке?

На ton.org такого требования к пользователям нет, а порядок на биржах в статье не проверялся. Ориентируйтесь на объявления внутри официального приложения вашей биржи, а не на случайные сообщения в Telegram.

### Нужен ли Gram, чтобы купить Telegram Premium?

Нет. Через @premiumtg_uzbot вы платите в сумах, указав только username. Ни криптокошелёк, ни зарубежная карта не нужны.`,
  },
};
