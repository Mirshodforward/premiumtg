// Avtoblogyoz yasagan maqola (2026-11-14). Niyat: TON va sovg'alarga qiziqadigan Telegram foydalanuvchisi «ton.org yangilandi» xabarini ko'rib, «TON Telegram'ga qanday integratsiya qilingan» deb qidiradi: qaysi mahsulotlar rasman Telegram ichida ishlaydi va 1 mlrd foydalanuvchi degan raqam nimani anglatadi.
// Faktlar tekshirilgan manbalar:
//   https://ton.org/
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://core.telegram.org/api/gifts
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "ton-org-telegram-integratsiya-mahsulotlar",
  date: "2026-11-14",
  reviewed: "2026-11-14",
  category: "stars",
  priority: 0.7,
  title: { uz: "TON Telegram’ga qanday integratsiya qilingan: ton.org nimani ko‘rsatadi?", ru: "Как TON интегрирован в Telegram: что на самом деле показывает ton.org" },
  excerpt: { uz: `ton.org TON’ni Telegram ichiga qurilgan ekotizim deb ataydi: Gram Wallet, mini-ilovalar, NFT sovg‘alar, username, Stars va Premium. «1B+» raqami esa TON’ni emas, Telegram auditoriyasini bildiradi.`, ru: `ton.org называет TON экосистемой внутри Telegram: Gram Wallet, мини-приложения, NFT-подарки, юзернеймы, Stars и Premium. А цифра «1B+» — это аудитория Telegram, а не TON.` },
  keywords: ["TON Telegram integratsiyasi","ton.org Telegram mahsulotlari","TON Telegram ichida qanday ishlaydi","Gram Toncoin farqi","Telegram Gram Wallet","Telegram sovg'a NFT TON","TON 1 mlrd foydalanuvchi","интеграция TON в Telegram","ton.org интегрировано в Telegram","Gram Toncoin что это","TON 1 млрд пользователей","подарки Telegram NFT TON"],
  related: ["telegram-gram-hamyon-non-custodial-rostmi","telegram-nft-sovga-ton-hamyonga-otkazish","fragment-telegram-premium","telegram-wallet-hamyon-ochish-faollashtirish"],
  sources: [{"url":"https://ton.org/","title":"TON — The Leading L1 Blockchain"},{"url":"https://telegram.org/blog/wear-gifts-blockchain-and-more","title":"Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More"},{"url":"https://core.telegram.org/api/gifts","title":"Telegram Gifts"}],
  content: {
    uz: `## ton.org TON’ni Telegram bilan qanday bog‘laydi?

[ton.org](https://ton.org/) TON’ni «Telegram ichiga qurilgan» blokcheyn ekotizimi deb ta’riflaydi. Bu ekotizim to‘lovlar, raqamli aktivlar va mini-ilovalarni bog‘laydi. Amalda hamyon, sovg‘alar, username, anonim raqamlar, Stars va Premium bilan bog‘liq bir qator amallar Telegram ichida TON orqali bajariladi.

Kanallarda «ton.org yangilandi» degan xabarlar tarqaldi. Saytning yangilanish sanasi rasmiy manbada topilmadi, shuning uchun uni yozmaymiz. Quyida sayt hozir nima deyotgani tahlil qilinadi.

Faktlar ton.org bosh sahifasi, Telegram blogi va core.telegram.org hujjatlaridan olindi (2026-yil 14-noyabr holati). Sayt matni o‘zgarib turadi. Muhim qaror qilishdan oldin sahifaning o‘zini ochib ko‘ring.

## ton.org’da qaysi mahsulotlar «Telegram’ga integratsiya qilingan» deb ko‘rsatilgan?

Jadvaldagi ta’riflar [ton.org](https://ton.org/) bosh sahifasidan olindi. Uchinchi ustunda mahsulot kimga foydali bo‘lishi mumkinligi yozilgan. Bu ustun muharrir izohi, saytdagi matn emas.

| Mahsulot | ton.org’dagi ta’rif | Kimga kerak bo‘lishi mumkin |
|---|---|---|
| Gram Wallet | Telegram jamoasining non-custodial hamyoni, messenjer interfeysiga o‘rnatilgan | Tanga saqlash va yuborish uchun |
| Botlar va mini-ilovalar | Dasturchilar Telegram’ga o‘rnatilgan bot va veb mini-ilovalar yaratadi | Dasturchilar va ilova foydalanuvchilari |
| Sovg‘alar | Telegram sovg‘alarini TON asosidagi NFT’ga aylantirish mumkin | Kolleksion sovg‘a egalari |
| Username | TON orqali band qilinadi va shaxsiy hisob, kanal yoki guruh havolasi sifatida ishlatiladi | Qisqa va noyob nom istaganlar |
| Anonim raqamlar | SIM-kartaga bog‘lanmagan raqam bilan TON hisobi orqali Telegram’ga kiriladi | Telefon raqamini oshkor qilishni istamaganlar |
| Stars | Gram bilan sotib olinadi, Telegram ichidagi raqamli tovar, kontent va xizmatlarga sarflanadi | Bot va mini-ilovalarda xarid qiluvchilar |
| Premium | Kripto hamyon orqali o‘zingizga yoki do‘stingizga obuna olinadi | Kriptoda to‘lashni afzal ko‘rganlar |
| Giveaway’lar | Stars va Premium giveaway’lari Gram bilan oldindan to‘lanadi | Kanal egalari |
| Reklama daromadi | Telegram reklamasidan tushgan daromad Gram’da to‘lanishi mumkin | Kanal mualliflari |
| TON saytlari | Telegram brauzeri barcha mobil va rasmiy desktop ilovalarda TON tarmog‘idagi markazlashmagan saytlarni qo‘llab-quvvatlaydi | Web3 saytlaridan foydalanuvchilar |

Ro‘yxatdagi mahsulotlarning hech biri majburiy emas. Oddiy yozishma, kanal va guruhlar TON’siz ham ishlaydi.

Anonim raqamlar qanday olinishi va sotilishi haqida alohida maqola bor: [+888 raqam Fragment’da qanday olinadi](/blog/fragment-anonim-raqam-sotish-sotib-olish).

## «1 mlrd dan ortiq foydalanuvchi» raqami nimani anglatadi?

Ba’zi kanallar buni «TON’da 1 mlrd foydalanuvchi bor» deb talqin qiladi. Saytdagi gap boshqa ma’noda: ton.org Telegram integratsiyasi blokcheynga **Telegram’ning 1B+ faol foydalanuvchisi** orasida keng yetib borish imkonini beradi, deb yozadi. Demak, bu TON’dan foydalanayotganlar soni emas, Telegram auditoriyasi.

Shu sahifada TON’ning o‘z ko‘rsatkichi ham bor. Uni 1B+ bilan solishtirsangiz, farq yaqqol ko‘rinadi.

| Raqam | ton.org’da nimani bildiradi |
|---|---|
| 1B+ | Telegram’ning faol foydalanuvchilari, ya’ni TON yetib borishi mumkin bo‘lgan auditoriya |
| 3,3 mln | TON tarmog‘idagi oylik faol hamyonlar soni |
| «milliard foydalanuvchi uchun» | Jetton va NFT’lar shuncha odamga tiqilinchsiz xizmat qila olishi haqidagi gap, joriy son emas |

Oddiy misol: Telegram’dan foydalanadigan har bir odamda TON hamyon ochilgan emas. Hamyonni ochish va undan foydalanish har kimning o‘z tanlovi.

> «1B+» qaysi sanaga tegishli ekani bu maqolada tasdiqlanmagan. Uni Telegram auditoriyasining taxminiy ko‘rsatkichi deb qabul qiling.

## Gram va Toncoin: bu bitta tangami?

Ha. ton.org’ga ko‘ra, TON blokcheynining asosiy tangasi **Gram** deb ataladi va u **Toncoin** nomi bilan ham tanilgan. Shuning uchun turli ilova va maqolalarda bitta tanga ikki xil nom bilan uchrashi mumkin.

Amaliy maslahat: birja, hamyon yoki botda «TON», «Toncoin» yoki «Gram» yozuvini ko‘rsangiz, ekrandagi tarmoq nomini tekshiring. Pul yuborishdan oldin tarmoq TON ekaniga ishonch hosil qiling. Boshqa tarmoqdagi o‘xshash nomli token boshqa aktiv bo‘lishi mumkin.

Telegram ichidagi hamyon haqida savollar ko‘p. Ularga alohida maqolalarda javob berilgan: [Gram hamyon non-custodial rostmi](/blog/telegram-gram-hamyon-non-custodial-rostmi) va [Telegram Wallet qanday ochiladi](/blog/telegram-wallet-hamyon-ochish-faollashtirish).

## Telegram sovg‘alari TON bilan qanday bog‘langan?

[Telegram blogiga](https://telegram.org/blog/wear-gifts-blockchain-and-more) ko‘ra, kolleksion sovg‘alarni ham kolleksion username va raqamlar kabi TON blokcheyni orqali o‘tkazish yoki auksionga qo‘yish mumkin.

Blokcheynga chiqarishning asosiy foydasi shu: Telegram hisobingizga kirolmay qolsangiz yoki hisobni o‘chirsangiz ham sovg‘a ustidan nazorat sizda qoladi. Har bir kolleksion sovg‘aning t.me/nft ko‘rinishidagi noyob havolasi bor.

[core.telegram.org hujjatlari](https://core.telegram.org/api/gifts)ga ko‘ra umumiy tartib quyidagicha. Tugma nomlari ilova versiyasiga qarab farq qilishi mumkin.

1. Telegram’da kolleksion sovg‘ani oching. TON blokcheynida NFT’ga faqat kolleksion sovg‘a aylanadi.
2. Sovg‘a menyusidan uni blokcheynga chiqarish amalini tanlang.
3. Ikki bosqichli tasdiqlash (2FA) parolingizni kiriting. Usiz chiqarib bo‘lmaydi.
4. Telegram qaytargan havola orqali NFT’ni Fragment’da import qiling.

Istisno ham bor: ba’zan sovg‘ani blokcheynga faqat belgilangan sanadan boshlab chiqarish mumkin. Bunday holatda o‘sha sanagacha kutishga to‘g‘ri keladi.

Batafsil yo‘riqnoma va Fragment’siz yo‘l haqidagi mish-mishlar tahlili: [NFT sovg‘ani TON hamyonga o‘tkazish](/blog/telegram-nft-sovga-ton-hamyonga-otkazish).

## Kanal egalari uchun TON nima beradi?

ton.org ro‘yxatida ikki band to‘g‘ridan-to‘g‘ri kanal egalariga tegishli.

- **Giveaway’lar.** Stars va Premium giveaway’larini Gram bilan oldindan to‘lash mumkin. Bu kriptoda mablag‘i bor va obunachilar uchun tanlov o‘tkazmoqchi bo‘lgan adminlarga qulay.
- **Reklama daromadi.** Telegram reklamasidan tushgan daromad Gram’da to‘lanishi mumkin. ton.org buni muallif monetizatsiyasini TON ekotizimiga bog‘laydigan yo‘l deb ataydi.

Daromadni yechish shartlari va muddatlari bu maqolada tasdiqlanmagan. Ularni kanalingiz statistikasidagi daromad bo‘limida tekshiring. Daromadni yechish va uchinchi tomon takliflari haqida: [Gram Earnings balansini yechish](/blog/gram-earnings-balans-yechish-tonnel-cash-out).

## ton.org ro‘yxatida nima yo‘q: stikerlar

Stikerlar ton.org ro‘yxatida yo‘q. Stikerlarni TON’ga integratsiya qilish rejasi rasmiy manbalarda ham topilmadi. Shuning uchun stiker-NFT haqida hech qanday muddat yoki va’da yozmaymiz.

> «Stiker NFT» yoki «TON stikerlari» deb sotilayotgan takliflarni rasmiy Telegram funksiyasi deb qabul qilmang. Loyiha uchinchi tomonniki bo‘lsa, xarid xavfi xaridor zimmasida qoladi.

## TON’siz ham Telegram’dan to‘liq foydalanish mumkinmi?

Ha. TON integratsiyasi majburiy shart emas, u qo‘shimcha yo‘l. Ro‘yxatdagi mahsulotlar kripto orqali to‘lash imkonini beradi, lekin Telegram’ning asosiy funksiyalari hamyonsiz ham ishlaydi.

- **Stars va Premium Gram bilan.** ton.org’ga ko‘ra Stars’ni Gram bilan sotib olish va Premium’ni kripto hamyon orqali olish mumkin. Buning uchun hamyon ochish, tanga sotib olish va kurs o‘zgarishini kuzatish kerak bo‘ladi. Fragment yo‘lining qulay va noqulay tomonlari: [Fragment orqali Premium](/blog/fragment-telegram-premium).
- **So‘mda olish.** Premiumtg botida ([@premiumtg_uzbot](https://t.me/premiumtg_uzbot)) username’ingizni kiritasiz va Click, Payme, Paynet yoki Uzum Bank orqali so‘mda to‘laysiz. Login kodi ham, parol ham so‘ralmaydi, xorijiy karta kerak emas. Obuna 10 soniyada avtomatik faollashadi.
- **Narxlar.** 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}. Narx va mavjud to‘lov usullarini xariddan oldin botda tekshiring.
- **Status bir xil.** Premium statusni faqat Telegram beradi. Qaysi usulda to‘lashingiz obuna imkoniyatlarini o‘zgartirmaydi.

## TON mahsulotlaridan foydalanganda qanday xavfsizlik qoidalariga amal qilish kerak?

TON mahsulotlari Telegram ichida bo‘lgani uchun firibgarlar ham ularni niqob sifatida ishlatadi. Quyidagi qoidalar ko‘p xatoning oldini oladi:

- **Kod va parollarni hech kimga bermang.** Bunga hamyonni tiklash ma’lumotlari, 2FA paroli va login kodi kiradi. 2FA parolini faqat Telegram ilovasining o‘zida kiriting, bot yoki tashqi saytga yozmang.
- **Hamyonni tiklash tartibini oldindan biling.** ton.org Gram Wallet’ni non-custodial deb ataydi. Uni tiklash tartibi bu maqolada tasdiqlanmagan, shuning uchun hamyon ilovasidagi ko‘rsatmalarni oldindan o‘qib chiqing.
- **Sovg‘a havolasini tekshiring.** Kolleksion sovg‘aning havolasi t.me/nft ko‘rinishida bo‘ladi. Boshqa domendagi «sovg‘a sotuvi» sahifalariga ehtiyot bo‘ling.
- **Kanal xabarini rasmiy saytda tekshiring.** «ton.org yangilandi», «yangi integratsiya» kabi xabarlarni [ton.org](https://ton.org/), [telegram.org](https://telegram.org/) va [core.telegram.org](https://core.telegram.org/) sahifalarida solishtiring.
- **Haddan tashqari yaxshi taklifga ishonmang.** Kafolatlangan daromad yoki «ikki barobar qaytarish» va’da qiladigan TON loyihalari ton.org’ning integratsiya ro‘yxatida yo‘q.

## Ko‘p so‘raladigan savollar

### ton.org’dagi 1 mlrd foydalanuvchining hammasida TON hamyoni bormi?

Yo‘q. ton.org bu raqamni Telegram’ning faol auditoriyasi sifatida keltiradi. TON’ning o‘z ko‘rsatkichi ancha kichik: saytda oylik faol hamyonlar soni 3,3 mln deb berilgan.

### Gram va Toncoin o‘rtasida farq bormi?

Yo‘q. ton.org’ga ko‘ra bu bitta tanga: TON blokcheynining asosiy tangasi Gram deb ataladi, u Toncoin nomi bilan ham tanilgan. Pul yuborishda nomdan ko‘ra tarmoq TON ekanini tekshirish muhimroq.

### Telegram sovg‘asini NFT’ga aylantirish uchun nima kerak?

Sovg‘a kolleksion bo‘lishi va hisobingizda 2FA paroli o‘rnatilgan bo‘lishi kerak. Blokcheynga chiqarilgan NFT Fragment’da import qilinadi, ayrim sovg‘alarni esa faqat belgilangan sanadan keyin chiqarish mumkin.

### Hisobimni o‘chirsam, blokcheyndagi sovg‘am yo‘qoladimi?

Telegram blogiga ko‘ra, yo‘qolmaydi. Blokcheynga chiqarilgan sovg‘a ustidan nazorat hisob o‘chirilganda yoki unga kirish yo‘qolganda ham egasida qoladi.

### Telegram Stars’ni TON bilan sotib olsa bo‘ladimi?

Ha, ton.org Stars’ni Gram bilan sotib olish mumkinligini yozadi. Olingan Stars Telegram ichidagi raqamli tovar, kontent va xizmatlarga sarflanadi.

### Kanal reklama daromadini qaysi valyutada olish mumkin?

ton.org’ga ko‘ra, Telegram reklama daromadi Gram’da to‘lanishi mumkin. Yechish shartlarini kanalingiz statistikasidagi daromad bo‘limida tekshiring.

### Telegram stikerlari ham TON’ga integratsiya qilinadimi?

Bunday reja rasmiy manbalarda topilmadi, ton.org ro‘yxatida ham stikerlar yo‘q. «Stiker NFT» deb sotilayotgan narsani rasmiy funksiya deb hisoblamang.

### Premium olish uchun TON hamyon ochishim shartmi?

Shart emas, kripto yo‘li ixtiyoriy. Premium’ni Premiumtg botida faqat username bilan olib, Click, Payme, Paynet yoki Uzum Bank orqali so‘mda to‘lash mumkin.`,
    ru: `## Как ton.org связывает TON с Telegram?

На [ton.org](https://ton.org/) TON описан как блокчейн-экосистема, «встроенная в Telegram». Она связывает платежи, цифровые активы и мини-приложения. На практике через TON внутри Telegram работают кошелёк, подарки, юзернеймы, анонимные номера, Stars и Premium.

В каналах писали, что «ton.org обновился». Дату обновления сайта в официальных источниках мы не нашли, поэтому не указываем её. Ниже разбираем, что сайт сообщает сейчас.

Факты взяты с главной страницы ton.org, из блога Telegram и документации core.telegram.org (по состоянию на 14 ноября 2026 года). Текст сайта может меняться. Перед важным решением откройте саму страницу и проверьте.

## Какие продукты ton.org называет «интегрированными в Telegram»?

Описания в таблице взяты с главной страницы [ton.org](https://ton.org/). В третьем столбце указано, кому продукт может пригодиться. Это комментарий редакции, а не текст сайта.

| Продукт | Описание на ton.org | Кому может пригодиться |
|---|---|---|
| Gram Wallet | Некастодиальный кошелёк от команды Telegram, встроенный в интерфейс мессенджера | Тем, кто хранит и отправляет монеты |
| Боты и мини-приложения | Разработчики создают ботов и веб-мини-приложения, встроенные в Telegram | Разработчикам и пользователям приложений |
| Подарки | Подарки Telegram можно превратить в NFT на базе TON | Владельцам коллекционных подарков |
| Юзернеймы | Закрепляются через TON и служат ссылкой на личный аккаунт, канал или группу | Тем, кому нужно короткое и уникальное имя |
| Анонимные номера | Номер без привязки к SIM-карте, вход в Telegram через аккаунт TON | Тем, кто не хочет раскрывать свой телефон |
| Stars | Покупаются за Gram и тратятся на цифровые товары, контент и услуги внутри Telegram | Тем, кто платит в ботах и мини-приложениях |
| Premium | Подписка для себя или друга через криптокошелёк | Тем, кто предпочитает платить криптой |
| Розыгрыши | Розыгрыши Stars и Premium можно оплатить Gram заранее | Владельцам каналов |
| Доход от рекламы | Доход от рекламы Telegram может выплачиваться в Gram | Авторам каналов |
| Сайты TON | Браузер Telegram открывает децентрализованные сайты сети TON во всех мобильных и официальных десктопных приложениях | Пользователям Web3-сайтов |

Ни один продукт из списка не обязателен. Обычные переписки, каналы и группы работают и без TON.

Как покупать и продавать анонимные номера, мы разобрали отдельно: [как получить номер +888 на Fragment](/blog/fragment-anonim-raqam-sotish-sotib-olish).

## Что означает цифра «более 1 млрд пользователей»?

Некоторые каналы поняли это как «в TON 1 млрд пользователей». На сайте смысл другой: ton.org пишет, что интеграция с Telegram даёт блокчейну широкий охват среди **более чем 1 млрд активных пользователей Telegram**. То есть это аудитория Telegram, а не число людей, которые пользуются TON.

На той же странице есть и собственный показатель TON. Сравните его с 1B+, и разница станет очевидной.

| Цифра | Что она означает на ton.org |
|---|---|
| 1B+ | Активные пользователи Telegram, то есть аудитория, которую TON потенциально может охватить |
| 3,3 млн | Число активных кошельков в сети TON за месяц |
| «для миллиарда пользователей» | Заявление о том, что Jetton и NFT могут без перегрузок обслуживать столько людей. Это не текущее число пользователей |

Простой пример: далеко не у каждого пользователя Telegram открыт TON-кошелёк. Открывать его и пользоваться им — личный выбор каждого.

> К какой дате относится цифра «1B+», в этой статье не подтверждено. Считайте её примерным размером аудитории Telegram.

## Gram и Toncoin — это одна и та же монета?

Да. По данным ton.org, основная монета блокчейна TON называется **Gram**, а ещё она известна как **Toncoin**. Поэтому в разных приложениях и статьях одну монету могут называть по-разному.

Практический совет: если на бирже, в кошельке или боте вы видите «TON», «Toncoin» или «Gram», проверьте название сети на экране. Прежде чем отправлять деньги, убедитесь, что выбрана сеть TON. Токен с похожим названием в другой сети может оказаться другим активом.

Про встроенный кошелёк в Telegram вопросов много, и мы ответили на них в отдельных статьях: [правда ли, что кошелёк Gram некастодиальный](/blog/telegram-gram-hamyon-non-custodial-rostmi) и [как открыть Telegram Wallet](/blog/telegram-wallet-hamyon-ochish-faollashtirish).

## Как подарки Telegram связаны с TON?

По данным [блога Telegram](https://telegram.org/blog/wear-gifts-blockchain-and-more), коллекционные подарки можно передавать или выставлять на аукцион через блокчейн TON, как коллекционные юзернеймы и номера.

Главная польза вывода в блокчейн в том, что подарок остаётся под вашим контролем, даже если вы потеряли доступ к аккаунту Telegram или удалили его. У каждого коллекционного подарка есть уникальная ссылка вида t.me/nft.

Общий порядок по [документации core.telegram.org](https://core.telegram.org/api/gifts) приведён ниже. Названия кнопок зависят от версии приложения.

1. Откройте коллекционный подарок в Telegram. В NFT на блокчейне TON можно превратить только коллекционный подарок.
2. В меню подарка выберите вывод в блокчейн.
3. Введите пароль двухэтапной аутентификации (2FA). Без него вывести подарок нельзя.
4. По ссылке, которую вернёт Telegram, импортируйте NFT на Fragment.

Есть и исключение: иногда вывести подарок в блокчейн можно только начиная с указанной даты. Тогда придётся подождать.

Подробная инструкция и разбор слухов о способе «без Fragment»: [как перевести NFT-подарок на TON-кошелёк](/blog/telegram-nft-sovga-ton-hamyonga-otkazish).

## Что TON даёт владельцам каналов?

В списке ton.org два пункта касаются владельцев каналов напрямую.

- **Розыгрыши.** Розыгрыши Stars и Premium можно оплатить в Gram заранее. Это удобно админам, у которых есть средства в крипте и которые хотят провести конкурс для подписчиков.
- **Доход от рекламы.** Доход от рекламы Telegram может выплачиваться в Gram. ton.org называет это способом напрямую связать монетизацию авторов с экосистемой TON.

Условия и сроки вывода дохода в этой статье не подтверждены. Проверьте их в разделе доходов в статистике канала. О выводе дохода и сторонних предложениях: [как вывести баланс Gram Earnings](/blog/gram-earnings-balans-yechish-tonnel-cash-out).

## Чего нет в списке ton.org: стикеры

Стикеров в списке ton.org нет. Планов интегрировать стикеры в TON мы не нашли и в других официальных источниках. Поэтому никаких сроков и обещаний насчёт стикеров-NFT не приводим.

> Не принимайте предложения «стикеров-NFT» или «стикеров TON» за официальную функцию Telegram. Если проект сторонний, риск покупки лежит на покупателе.

## Можно ли полноценно пользоваться Telegram без TON?

Да. Интеграция с TON не обязательна, это дополнительный путь. Продукты из списка позволяют платить криптой, но основные функции Telegram работают и без кошелька.

- **Stars и Premium за Gram.** По данным ton.org, Stars можно купить за Gram, а Premium оформить через криптокошелёк. Для этого придётся открыть кошелёк, купить монеты и следить за курсом. Плюсы и минусы пути через Fragment: [Premium через Fragment](/blog/fragment-telegram-premium).
- **Оплата в сумах.** В боте Premiumtg ([@premiumtg_uzbot](https://t.me/premiumtg_uzbot)) вы вводите свой юзернейм и платите в сумах через Click, Payme, Paynet или Uzum Bank. Ни код входа, ни пароль не нужны, зарубежная карта тоже. Подписка активируется автоматически за 10 секунд.
- **Цены.** 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}. Цену и доступные способы оплаты проверяйте в боте перед покупкой.
- **Статус одинаковый.** Статус Premium выдаёт только Telegram. Способ оплаты не меняет возможностей подписки.

## Каких правил безопасности держаться при работе с продуктами TON?

Продукты TON встроены в Telegram, поэтому мошенники тоже прикрываются ими. Эти правила помогут избежать многих ошибок:

- **Никому не сообщайте коды и пароли.** Это касается данных для восстановления кошелька, пароля 2FA и кода входа. Пароль 2FA вводите только в самом приложении Telegram, а не в боте и не на стороннем сайте.
- **Заранее узнайте, как восстановить кошелёк.** ton.org называет Gram Wallet некастодиальным. Порядок восстановления в этой статье не подтверждён, поэтому заранее прочитайте инструкции в самом кошельке.
- **Проверяйте ссылку на подарок.** Ссылка коллекционного подарка имеет вид t.me/nft. Осторожнее со страницами «продажи подарков» на других доменах.
- **Сверяйте новости из каналов с официальными сайтами.** Сообщения вроде «ton.org обновился» или «новая интеграция» проверяйте на [ton.org](https://ton.org/), [telegram.org](https://telegram.org/) и [core.telegram.org](https://core.telegram.org/).
- **Не верьте слишком выгодным предложениям.** TON-проектов, которые обещают гарантированный доход или «вернём вдвое», в списке интеграций ton.org нет.

## Часто задаваемые вопросы

### У всех ли из 1 млрд пользователей, о которых пишет ton.org, есть TON-кошелёк?

Нет. ton.org приводит эту цифру как активную аудиторию Telegram. Собственный показатель TON намного меньше: по данным сайта, в месяц активны 3,3 млн кошельков.

### Есть ли разница между Gram и Toncoin?

Нет. По данным ton.org, это одна монета: основная монета блокчейна TON называется Gram, её знают и как Toncoin. При переводе важнее не название, а то, что выбрана сеть TON.

### Что нужно, чтобы превратить подарок Telegram в NFT?

Подарок должен быть коллекционным, а в аккаунте должен быть установлен пароль 2FA. Выведенный NFT импортируется на Fragment, а некоторые подарки можно вывести только после указанной даты.

### Пропадёт ли подарок в блокчейне, если я удалю аккаунт?

По данным блога Telegram, не пропадёт. Подарок, выведенный в блокчейн, остаётся под контролем владельца, даже если аккаунт удалён или доступ к нему потерян.

### Можно ли купить Telegram Stars за TON?

Да, ton.org пишет, что Stars можно купить за Gram. Купленные Stars тратятся на цифровые товары, контент и услуги внутри Telegram.

### В какой валюте можно получать доход от рекламы в канале?

По данным ton.org, доход от рекламы Telegram может выплачиваться в Gram. Условия вывода смотрите в разделе доходов в статистике канала.

### Будут ли стикеры Telegram интегрированы в TON?

Таких планов в официальных источниках мы не нашли, в списке ton.org стикеров тоже нет. Не считайте «стикеры-NFT» официальной функцией.

### Нужно ли открывать TON-кошелёк, чтобы получить Premium?

Нет, путь через крипту необязателен. Premium можно оформить в боте Premiumtg по одному юзернейму и оплатить в сумах через Click, Payme, Paynet или Uzum Bank.`,
  },
};
