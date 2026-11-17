// Avtoblogyoz yasagan maqola (2026-11-17). Niyat: Kanalda «yirik kit qaytdi, u 100 dan ortiq Plush Pepe va 300 dan ortiq Heart Locket olgan» degan postni ko‘rgan Telegram foydalanuvchisi «NFT sovg‘a kitlari kim» deb qidiradi. U bunday da’voni va kolleksionerning qancha sovg‘aga egaligini Fragment yoki Telegram’da o‘zi qanday tekshirishni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/faq
//   https://telegram.org/blog/gift-marketplace-and-more
//   https://core.telegram.org/api/gifts
//   https://fragment.com/about
//   https://fragment.com/gifts/plushpepe
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "nft-sovga-kitlari-egalikni-tekshirish",
  date: "2026-11-17",
  reviewed: "2026-11-17",
  category: "stars",
  priority: 0.7,
  title: { uz: "NFT sovg‘a kitlari kim va ularning kolleksiyasini qanday tekshirasiz?", ru: "Кто такие «киты» NFT-подарков в Telegram и как проверить их коллекцию" },
  excerpt: { uz: `NFT sovg‘a kiti — bitta kolleksiyadan juda ko‘p kolleksion sovg‘a yig‘gan ega, bu norasmiy so‘z. 100+ Plush Pepe haqidagi da’vo tasdiqlanmagan, uni profil va Fragment’da qisman tekshirasiz.`, ru: `«Кит» — неофициальное название владельца, собравшего много коллекционных подарков одной коллекции. Слух о 100+ Plush Pepe не подтверждён, частично его проверяют в профиле и на Fragment.` },
  keywords: ["nft sovg'a kitlari","telegram sovg'a kitlari kim","plush pepe egasi kim","nft sovg'a egasini tekshirish","telegram gifts kolleksioner","fragment plush pepe nechta","heart locket nft sovg'a","киты nft подарков telegram","как проверить владельца подарка telegram","сколько plush pepe у владельца","telegram gifts киты кто это"],
  related: ["telegram-nft-sovga-egasi-yashirin","plush-pepe-nft-sovga-narxi-qora-fon","pavel-durov-plush-pepe-sovga-rostmi","telegram-nft-sovgalar"],
  sources: [{"url":"https://telegram.org/faq","title":"Telegram FAQ"},{"url":"https://telegram.org/blog/gift-marketplace-and-more","title":"Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels"},{"url":"https://core.telegram.org/api/gifts","title":"Telegram Gifts"},{"url":"https://fragment.com/about","title":"How does Fragment work?"},{"url":"https://fragment.com/gifts/plushpepe","title":"Plush Pepes"}],
  content: {
    uz: `«Kit» deb bitta kolleksiyadan juda ko‘p kolleksion sovg‘a yig‘gan egani atashadi. Bu so‘z kolleksionerlar jargoni. Telegram hujjatlarida bunday atama yo‘q, kimni kit deyish uchun rasmiy chegara ham belgilanmagan.

## NFT sovg‘a kiti deb kimni aytishadi?

Kripto jamoalarida katta mablag‘ bilan ish ko‘radigan, bir xaridi bilan boshqalarning e’tiborini tortadigan odamni odatda «kit» deyishadi. Telegram sovg‘alari atrofida ham bu so‘z shu ma’noda ishlatiladi.

Kit paydo bo‘lishi uchun avval kolleksion sovg‘a kerak. U quyidagicha yuzaga keladi:

- Oddiy sovg‘a — foydalanuvchiga yoki kanalga xabar bilan yuboriladigan animatsion narsa. Uning puli Telegram Stars bilan to‘lanadi ([Telegram FAQ](https://telegram.org/faq)).
- Olingan sovg‘ani oz miqdordagi Stars evaziga kolleksion sovg‘aga aylantirish mumkin.
- Shunda sovg‘a model, fon va belgidan iborat noyob ko‘rinish hamda raqam oladi. Ba’zi birikmalar boshqalaridan noyobroq.

Yangi cheklangan kolleksiyalar auksion orqali chiqariladi. Nusxalar soni chegaralangani uchun bitta odamda o‘nlab nusxa yig‘ilsa, bu darhol ko‘zga tashlanadi. Kanallarda kitlar haqidagi postlar ham shuning uchun tez tarqaladi. Kolleksion sovg‘aning oddiysidan farqi haqida: [NFT sovg‘alar nima](/blog/telegram-nft-sovgalar).

## «100 dan ortiq Plush Pepe va 300 dan ortiq Heart Locket» degan gap tasdiqlanganmi?

Yo‘q. Telegram kanallarida tarqalgan xabarda mashhur kolleksioner yana faollashgani, 100 dan ortiq Plush Pepe va 300 dan ortiq Heart Locket sotib olgani yozilgan. Shu postda «xitoylik kitlar» ham Plush Pepe xarid qilayotgani aytilgan.

> Bu gaplarning birortasi Telegram yoki Fragment’ning rasmiy sahifalarida tasdiqlanmagan. Sovg‘alar qimmatlashi haqida ham rasmiy bashorat yo‘q: bu post muallifining fikri.

Solishtirish uchun bitta tekshirilgan raqam bor. 2026-yil 14-noyabrda Fragment’dagi [Plush Pepe kolleksiyasi sahifasida](https://fragment.com/gifts/plushpepe) 2 485 dona ko‘rsatilgan edi. Bu son vaqt o‘tishi bilan o‘zgarishi mumkin. Demak, 100 dona kolleksiyaning taxminan 25 tadan biriga to‘g‘ri keladi. Bunday ulush bitta odamda bo‘lishi mumkin. Lekin postdagi so‘zning o‘zi buni isbotlamaydi.

Plush Pepe atrofidagi boshqa tasdiqlanmagan xabarlar: [Durov #834 ni sovg‘a qildimi](/blog/pavel-durov-plush-pepe-sovga-rostmi) va [qora fonli Plush Pepe’ning $55 000 lik sotuvi](/blog/plush-pepe-nft-sovga-narxi-qora-fon).

## Bir kishining sovg‘alari qaysi manbalarda ko‘rinadi?

Ochiq ma’lumot to‘rt joyda bor. Ularning hech biri bitta egalining butun kolleksiyasini to‘liq ko‘rsatmaydi.

| Manba | Nima ko‘rinadi | Nimani bilib bo‘lmaydi |
|---|---|---|
| Profildagi «Gifts» bo‘limi | Egasi ko‘rsatishni tanlagan sovg‘alar | Yashirilgan yoki Stars’ga aylantirilgan sovg‘alar |
| Telegram ichidagi sovg‘alar bozori | Stars evaziga sotuvga qo‘yilgan sovg‘alar | Sotuvchining qolgan kolleksiyasi |
| Fragment’dagi kolleksiya sahifasi | Kolleksiyadagi donalar soni va sotuv yozuvlari | Bitta odamda nechta nusxa borligi (bu maqolada tasdiqlanmagan) |
| TON blokcheyni | Blokcheynga chiqarilgan sovg‘a turgan hamyon manzili | Hamyon kimga tegishli ekani |

Telegram ichidagi bozor 2025-yil 8-mayda [e’lon qilingan](https://telegram.org/blog/gift-marketplace-and-more). Unda boshqa foydalanuvchilardan Stars evaziga minglab noyob sovg‘alarni sotib olish mumkin. Fragment o‘zini foydalanuvchilar o‘rtasida kolleksion buyumlar savdosini ta’minlaydigan platforma deb ataydi ([Fragment haqida](https://fragment.com/about)).

Kolleksion sovg‘ani TON blokcheynida NFT’ga aylantirish mumkin ([Telegram Gifts API](https://core.telegram.org/api/gifts)). Shundan keyin u hamyon manziliga bog‘lanadi. Manzil ortida kim turgani esa o‘z-o‘zidan ko‘rinmaydi.

## Kolleksioner qancha sovg‘aga egaligini qadamma-qadam qanday tekshirasiz?

Bu tartib to‘liq javob bermaydi. Lekin postdagi raqam profilda ko‘rinadigan holatga to‘g‘ri kelishi yoki kelmasligini bilib olasiz.

1. Da’voni aniq yozib oling: qaysi kolleksiya, nechta dona, qaysi profil haqida gap ketyapti.
2. Telegram’da shu profilni oching va «Gifts» bo‘limiga o‘ting. Kerakli kolleksiyadagi sovg‘alarni sanang.
3. Har bir sovg‘ani bosib, raqami, modeli, foni va belgisini ko‘ring. Bir raqamni ikki marta sanab qo‘ymang.
4. «Value» maydoniga qarang. U aniq narx emas, sovg‘aning taxminiy qayta sotish narxi.
5. Fragment’dagi kolleksiya sahifasini oching. Sanagan soningizni kolleksiyadagi umumiy donalar soni bilan solishtiring, so‘nggi sotuv yozuvlarini ham ko‘zdan kechiring.
6. Natijani to‘g‘ri baholang. Profilda da’vodagidan kam sovg‘a chiqsa, post yolg‘on bo‘lib chiqmaydi, faqat «tasdiqlanmagan» bo‘lib qoladi. Sababi keyingi bo‘limda.

Profilda ko‘p sovg‘a ko‘rinsa ham, ular yaqinda sotib olingani yoki «kit qaytgani» isbotlanmaydi. Profil sovg‘alarning hozirgi holatini ko‘rsatadi, qachon olinganini emas.

## Nega profildagi son kolleksionerning hamma sovg‘alarini ko‘rsatmasligi mumkin?

Sovg‘ani profilda ko‘rsatish majburiy emas, buni egasining o‘zi hal qiladi. Shuning uchun sanaganingiz ko‘pincha haqiqiy sondan kam chiqadi. Sabablari:

- **Yashirilgan.** Egasi sovg‘ani «Gifts» bo‘limida ko‘rsatmaslikni tanlagan. Sozlamasi haqida: [NFT sovg‘a egasi nega yashirin](/blog/telegram-nft-sovga-egasi-yashirin).
- **Stars’ga aylantirilgan.** Olingan sovg‘ani qaytadan Stars’ga aylantirish mumkin.
- **Boshqa akkauntga o‘tkazilgan.** Kolleksion sovg‘ani boshqa foydalanuvchiga o‘tkazsa bo‘ladi. Bitta odam sovg‘alarini bir nechta akkauntda saqlashi mumkin.
- **Blokcheynga chiqarilgan.** TON’ga ko‘chirilgan sovg‘a Telegram akkaunti o‘chirilsa ham egasida qoladi. Uni hamyon manzili orqali kuzatish kerak bo‘ladi.
- **Sotuvga qo‘yilgan yoki sotilgan.** Sotuvdagi sovg‘ada «Sale» belgisi turadi, sotilgani esa yangi egaga o‘tadi.

Bir kishining umumiy kolleksiyasini tashqaridan to‘liq sanashning ishonchli yo‘li ochiq manbalarda ko‘rsatilmagan. Kanaldagi raqamni tasdiqlab ham, rad etib ham bo‘lmasa, uni gumon deb qabul qilish to‘g‘ri bo‘ladi.

## Fragment’dagi 88 888 va 48 000 raqamlari kit haqida nimani aytadi?

Fragment’dagi Plush Pepe sahifasida #1821 88 888 ga, #1515 esa 2025-yil 18-avgustda 48 000 ga sotilgani yozilgan. Valyuta sahifada ko‘rsatilmagan. Shuning uchun bu raqamlarni o‘zingizcha TON yoki dollarga aylantirmang.

Kit haqidagi postni tekshirishda bu yozuvlardan foyda kam. Mana nega:

- **Yozuv bitta nusxaga tegishli.** U kim sotib olganini va o‘sha xaridorda yana nechta nusxa borligini aytmaydi. 100 ta xaridni ketma-ket sotuv yozuvlaridan yig‘ib chiqishning ishonchli yo‘li rasmiy manbalarda ko‘rsatilmagan.
- **Narx noyoblikka bog‘liq.** Birikmalarning noyobligi turlicha, shuning uchun qimmat sotuv butun kolleksiya qimmatlaganini anglatmaydi.
- **Ikki xil komissiya.** Fragment har bir kolleksion sotuvdan 5% platforma to‘lovi oladi. Telegram ichki bozorida sotuvchi narxning komissiya parametriga bog‘liq qismini oladi, bu foiz hujjatda raqam bilan yozilmagan. Ularni aralashtirmang.
- **Sotuvga chiqish sanasi.** API hujjatiga ko‘ra, sovg‘ani sotuvga qo‘yish yoki blokcheynga eksport qilishga belgilangan sanadan boshlab ruxsat berilishi mumkin. Yangi olingan sovg‘a darhol bozorda chiqmasligi mumkin.

Plush Pepe’ning hozirgi eng past narxi (floor) va sotuvdagi donalar soni bu maqolada tasdiqlanmagan. Ularni Fragment yoki Telegram ilovasining o‘zida ko‘ring.

## Kolleksion sovg‘angiz bo‘lsa, kit haqidagi xabardan keyin nimaga qarash kerak?

Bitta yirik xaridorning qaytgani narx o‘sishini kafolatlamaydi, rasmiy manbalarda bunday bashorat yo‘q. Kanaldagi raqamlar o‘rniga ilovadagi aniq ma’lumotlarga tayaning:

- **«Value» maydoni.** U sovg‘angizning taxminiy qayta sotish narxini ko‘rsatadi.
- **Kelgan taklif.** Hujjatga ko‘ra, ilova taklif summasi sovg‘aning taxminiy qiymatiga qanchalik yaqinligini ko‘rsatishi kerak. Taklif paytida xaridorning to‘lovi band qilinadi. Rad etsangiz yoki muddat o‘tsa, pul unga avtomatik qaytadi.
- **Rasmiy sotish yo‘li.** Profilda sovg‘ani oching, «Sell»ni bosing va narxni Stars’da belgilang. Fikringiz o‘zgarsa, «Unlist» bilan sotuvni bekor qilasiz.

Ichki bozor va tashqi marketpleyslar farqi haqida: [NFT sovg‘ani qanday sotish mumkin](/blog/telegram-nft-sovga-sotish-marketpleys).

## Kit nomidan yozganlar qanday aldaydi?

Kitlar haqida gap ko‘paygan kunlari mashhur kolleksioner nomini ishlatadigan firibgarlar ham faollashadi. Belgilari:

- **Soxta profil.** Ismi va rasmi kolleksionernikiga o‘xshagan akkaunt shaxsiy xabarda «kolleksiyamdan arzonga beraman» deb oldindan pul so‘raydi. Username’ni harfma-harf solishtiring. Telegram ichki bozoridan tashqarida oldindan pul o‘tkazmang: bozorda xarid Stars bilan amalga oshadi.
- **Kod, parol, seed-ibora so‘rash.** Bu akkaunt yoki hamyonni egallashga urinish. Ularni hech kimga bermang.
- **Hamyonni ulash talabi.** «Kitlar ro‘yxatiga qo‘shilish» yoki «yashirin kolleksiyani ko‘rish» uchun hamyonni notanish saytga ulashni so‘raydigan havolalar.
- **Shoshiltirish.** «Faqat bugun», «ertaga ikki baravar qimmat» kabi gaplar o‘ylashga vaqt qoldirmaslik uchun yoziladi.

Rasmiy FAQ’ga ko‘ra, ba’zi cheklangan sovg‘a to‘plamlari faqat Premium foydalanuvchilar uchun. Shunday auksionda qatnashmoqchi bo‘lsangiz, Premium’ni [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida so‘mda, faqat username bilan olasiz. Login kodi va parol so‘ralmaydi, obuna 10 soniyada avtomatik faollashadi. Narxlar: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}. Narx va to‘lov usullarini (Click, Payme, Paynet, Uzum Bank) xariddan oldin botda tekshiring. Premiumtg mustaqil xizmat va Telegram bilan hamkorlik da’vo qilmaydi. Premium statusni faqat Telegram’ning o‘zi beradi.

## Ko‘p so‘raladigan savollar

### Necha dona sovg‘asi bor odamni kit deyishadi?

Aniq son yo‘q, chunki «kit» rasmiy atama emas. Kolleksionerlar bu so‘zni bir kolleksiyadan boshqalarga qaraganda ancha ko‘p nusxa yig‘gan egaga nisbatan ishlatishadi.

### Boshqa odamning yashirin sovg‘alarini ko‘rish mumkinmi?

Rasmiy hujjatlarda bunday imkoniyat ko‘rsatilmagan: profilda faqat egasi ochiq qoldirgan sovg‘alar chiqadi. Yashirin kolleksiyani ochib berishni va’da qilgan bot yoki sayt — xavf belgisi.

### Fragment’da Plush Pepe egasining ismi ko‘rinadimi?

Kolleksiya sahifasida donalar soni va sotuv yozuvlari bor. Egasining Telegram ismi u yerda ko‘rinishi bu maqolada tasdiqlanmagan. Blokcheyndagi sovg‘a esa hamyon manzili bilan ko‘rsatiladi, manzil egasi kimligi undan bilinmaydi.

### Sovg‘a TON’ga chiqarilsa, egasi uni yo‘qotib qo‘yadimi?

Yo‘q, rasmiy FAQ’ga ko‘ra blokcheynga ko‘chirilgan sovg‘a Telegram akkaunti o‘chirilsa ham egasida qoladi. Shuning uchun profilda ko‘rinmasligi egalik tugaganini bildirmaydi.

### Kimdir ko‘p Plush Pepe olsa, mening sovg‘amning «Value»si ko‘tariladimi?

Bunga kafolat yo‘q, «Value» qanday hisoblanishi ham rasman ochiqlanmagan. Bu maydon faqat taxminiy qayta sotish narxini ko‘rsatadi, uni ilovada o‘zingiz kuzatib boring.

### Postda aytilgan kolleksioner profilida sovg‘alar kam bo‘lsa, demak post yolg‘onmi?

Shunday deb bo‘lmaydi: sovg‘alar yashirilgan, sotilgan, boshqa akkauntga o‘tkazilgan yoki blokcheynga chiqarilgan bo‘lishi mumkin. Bunday da’voni tasdiqlanmagan deb qabul qiling.

### Sovg‘a auksionida qatnashish uchun Premium shartmi?

Rasmiy FAQ’ga ko‘ra, ba’zi cheklangan to‘plamlar faqat Premium foydalanuvchilarga ochiq. Har bir auksion shartini ilovada tekshiring. Premium kerak bo‘lsa, @premiumtg_uzbot’da username bilan so‘mda olasiz.`,
    ru: `«Китом» называют владельца, который собрал очень много коллекционных подарков из одной коллекции. Это жаргон коллекционеров. В документации Telegram такого термина нет, и официального порога, после которого человека можно считать китом, тоже нет.

## Кого называют китом NFT-подарков?

В криптосообществах китом обычно называют человека, который работает с крупными суммами и одной покупкой привлекает внимание остальных. Вокруг подарков Telegram это слово используют в том же смысле.

Чтобы появился кит, сначала нужен коллекционный подарок. Вот откуда он берётся:

- Обычный подарок — это анимированный предмет, который отправляют пользователю или каналу вместе с сообщением. Он оплачивается в Telegram Stars ([Telegram FAQ](https://telegram.org/faq)).
- Полученный подарок можно улучшить до коллекционного за небольшое количество Stars.
- После этого подарок получает уникальный облик из модели, фона и символа, а также номер. Одни сочетания встречаются реже других.

Новые лимитированные коллекции выпускаются через аукционы. Число экземпляров ограничено, поэтому если у одного человека набираются десятки копий, это сразу бросается в глаза. По той же причине посты о китах быстро расходятся по каналам. Чем коллекционный подарок отличается от обычного, читайте здесь: [что такое NFT-подарки](/blog/telegram-nft-sovgalar).

## Подтверждено ли, что кто-то купил больше 100 Plush Pepe и 300 Heart Locket?

Нет. В сообщении, которое разошлось по Telegram-каналам, говорилось, что известный коллекционер снова активизировался и купил больше 100 Plush Pepe и больше 300 Heart Locket. В том же посте утверждалось, что Plush Pepe скупают и «китайские киты».

> Ни одно из этих утверждений не подтверждено на официальных страницах Telegram или Fragment. Официальных прогнозов роста цен на подарки тоже нет: это мнение автора поста.

Для сравнения есть одна проверенная цифра. 14 ноября 2026 года на [странице коллекции Plush Pepe](https://fragment.com/gifts/plushpepe) на Fragment было указано 2 485 штук. Со временем это число может меняться. Получается, 100 штук — примерно каждый 25-й экземпляр коллекции. Такая доля у одного человека теоретически возможна. Но слова из поста сами по себе этого не доказывают.

Другие неподтверждённые новости вокруг Plush Pepe: [дарил ли Дуров #834](/blog/pavel-durov-plush-pepe-sovga-rostmi) и [продажа Plush Pepe с чёрным фоном за $55 000](/blog/plush-pepe-nft-sovga-narxi-qora-fon).

## Где можно увидеть подарки конкретного человека?

Открытые данные есть в четырёх местах. Ни одно из них не показывает всю коллекцию одного владельца целиком.

| Источник | Что видно | Чего не узнать |
|---|---|---|
| Раздел «Gifts» в профиле | Подарки, которые владелец решил показывать | Скрытые подарки и подарки, обменянные на Stars |
| Маркетплейс подарков внутри Telegram | Подарки, выставленные на продажу за Stars | Остальную коллекцию продавца |
| Страница коллекции на Fragment | Число экземпляров в коллекции и записи о продажах | Сколько экземпляров у одного человека (в этой статье не подтверждено) |
| Блокчейн TON | Адрес кошелька, где лежит выведенный в блокчейн подарок | Кому принадлежит кошелёк |

Маркетплейс внутри Telegram [анонсировали](https://telegram.org/blog/gift-marketplace-and-more) 8 мая 2025 года. На нём можно купить у других пользователей тысячи редких подарков за Stars. Fragment описывает себя как платформу, которая обеспечивает сделки с коллекционными предметами между пользователями ([о Fragment](https://fragment.com/about)).

Коллекционный подарок можно превратить в NFT в блокчейне TON ([Telegram Gifts API](https://core.telegram.org/api/gifts)). После этого он привязан к адресу кошелька. А вот кто стоит за адресом, само по себе не видно.

## Как пошагово проверить, сколько подарков у коллекционера?

Полного ответа этот порядок не даст. Зато вы поймёте, совпадает ли цифра из поста с тем, что видно в профиле.

1. Точно сформулируйте утверждение: о какой коллекции, скольких штуках и каком профиле идёт речь.
2. Откройте этот профиль в Telegram и перейдите в раздел «Gifts». Посчитайте подарки из нужной коллекции.
3. Нажмите на каждый подарок и посмотрите номер, модель, фон и символ. Не считайте один номер дважды.
4. Посмотрите на поле «Value». Это не точная цена, а примерная стоимость перепродажи подарка.
5. Откройте страницу коллекции на Fragment. Сравните свой подсчёт с общим числом экземпляров и просмотрите последние записи о продажах.
6. Правильно оцените результат. Если в профиле подарков меньше, чем заявлено, пост ещё не становится ложью — он остаётся «неподтверждённым». Почему так, объясняет следующий раздел.

Даже если в профиле видно много подарков, это не доказывает, что они куплены недавно или что «кит вернулся». Профиль показывает текущее состояние, а не дату получения.

## Почему число в профиле может не отражать всю коллекцию?

Показывать подарки в профиле не обязательно — это решает сам владелец. Поэтому ваш подсчёт часто оказывается меньше реального. Причины:

- **Подарок скрыт.** Владелец решил не показывать его в разделе «Gifts». Как это настраивается: [почему владелец NFT-подарка скрыт](/blog/telegram-nft-sovga-egasi-yashirin).
- **Обменян на Stars.** Полученный подарок можно снова превратить в Stars.
- **Передан на другой аккаунт.** Коллекционный подарок можно передать другому пользователю. Один человек может хранить подарки на нескольких аккаунтах.
- **Выведен в блокчейн.** Подарок, перенесённый в TON, остаётся у владельца, даже если удалить Telegram-аккаунт. Отслеживать его придётся по адресу кошелька.
- **Выставлен на продажу или продан.** У подарка в продаже стоит метка «Sale», а проданный переходит к новому владельцу.

Надёжного способа со стороны полностью пересчитать общую коллекцию одного человека открытые источники не описывают. Если цифру из канала нельзя ни подтвердить, ни опровергнуть, правильнее считать её предположением.

## Что говорят о китах цифры 88 888 и 48 000 на Fragment?

На странице Plush Pepe на Fragment указано, что #1821 продан за 88 888, а #1515 — 18 августа 2025 года за 48 000. Валюта на странице не указана. Поэтому не пересчитывайте эти цифры в TON или доллары самостоятельно.

Для проверки поста о ките от этих записей мало толку. Вот почему:

- **Запись относится к одному экземпляру.** Она не говорит, кто купил подарок и сколько ещё копий у этого покупателя. Надёжного способа собрать 100 покупок из записей о продажах официальные источники не описывают.
- **Цена зависит от редкости.** Сочетания редки по-разному, поэтому одна дорогая продажа не значит, что подорожала вся коллекция.
- **Две разные комиссии.** Fragment берёт 5% платформенного сбора с каждой продажи коллекционного предмета. На маркетплейсе Telegram продавец получает часть цены, которая зависит от параметра комиссии, и этот процент в документации числом не указан. Не путайте их.
- **Дата выхода в продажу.** Согласно документации API, выставить подарок на продажу или экспортировать в блокчейн могут разрешить только с определённой даты. Свежеполученный подарок может появиться на рынке не сразу.

Текущая минимальная цена (floor) Plush Pepe и число экземпляров в продаже в этой статье не подтверждены. Смотрите их на Fragment или в самом приложении Telegram.

## На что смотреть владельцу коллекционного подарка после новостей о китах?

Возвращение одного крупного покупателя не гарантирует роста цен, и официальных прогнозов на этот счёт нет. Вместо цифр из каналов опирайтесь на конкретные данные в приложении:

- **Поле «Value».** Оно показывает примерную стоимость перепродажи вашего подарка.
- **Поступившее предложение.** Согласно документации, приложение должно показывать, насколько сумма предложения близка к оценочной стоимости подарка. Когда покупатель делает предложение, его платёж резервируется. Если вы откажете или срок истечёт, деньги вернутся ему автоматически.
- **Официальный способ продажи.** Откройте подарок в профиле, нажмите «Sell» и укажите цену в Stars. Если передумаете, снимите подарок с продажи кнопкой «Unlist».

Чем внутренний маркетплейс отличается от внешних площадок: [как продать NFT-подарок](/blog/telegram-nft-sovga-sotish-marketpleys).

## Как обманывают от имени китов?

Когда о китах говорят много, активизируются и мошенники, которые используют имя известного коллекционера. Признаки:

- **Поддельный профиль.** Аккаунт с похожими именем и аватаркой пишет в личку «отдам из своей коллекции дешевле» и просит предоплату. Сверяйте username побуквенно. Не переводите предоплату вне маркетплейса Telegram: там покупка проходит за Stars.
- **Просьба прислать код, пароль или seed-фразу.** Это попытка захватить аккаунт или кошелёк. Никому их не сообщайте.
- **Требование подключить кошелёк.** Ссылки, где для «попадания в список китов» или «просмотра скрытой коллекции» нужно подключить кошелёк к незнакомому сайту.
- **Давление.** Фразы вроде «только сегодня» или «завтра будет вдвое дороже» пишут, чтобы не оставить вам времени подумать.

Согласно официальному FAQ, некоторые лимитированные наборы подарков доступны только пользователям Premium. Если хотите участвовать в таком аукционе, Premium можно оформить в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) в сумах, указав только username. Код входа и пароль не нужны, подписка активируется автоматически за 10 секунд. Цены: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}. Цену и способы оплаты (Click, Payme, Paynet, Uzum Bank) проверьте в боте перед покупкой. Premiumtg — независимый сервис и не заявляет о партнёрстве с Telegram. Статус Premium выдаёт только сам Telegram.

## Часто задаваемые вопросы

### Сколько подарков должно быть у человека, чтобы его называли китом?

Точного числа нет: «кит» — неофициальный термин. Коллекционеры так называют владельца, у которого экземпляров одной коллекции заметно больше, чем у остальных.

### Можно ли посмотреть чужие скрытые подарки?

Официальная документация такой возможности не описывает: в профиле видны только подарки, которые владелец оставил открытыми. Бот или сайт, обещающий раскрыть скрытую коллекцию, — повод насторожиться.

### Видно ли на Fragment имя владельца Plush Pepe?

На странице коллекции есть число экземпляров и записи о продажах. Видно ли там имя владельца в Telegram, в этой статье не подтверждено. Подарок в блокчейне отображается по адресу кошелька, а по адресу не понять, чей он.

### Теряет ли владелец подарок, если вывести его в TON?

Нет. По официальному FAQ подарок, перенесённый в блокчейн, остаётся у владельца даже после удаления Telegram-аккаунта. Поэтому если подарка нет в профиле, это ещё не значит, что владение закончилось.

### Если кто-то скупит много Plush Pepe, вырастет ли «Value» моего подарка?

Гарантий нет, а как именно рассчитывается «Value», официально не раскрыто. Поле показывает лишь примерную цену перепродажи — следите за ним в приложении сами.

### В профиле коллекционера из поста мало подарков — значит, пост ложный?

Так сказать нельзя: подарки могут быть скрыты, проданы, переданы на другой аккаунт или выведены в блокчейн. Считайте такое утверждение неподтверждённым.

### Нужен ли Premium, чтобы участвовать в аукционе подарков?

По официальному FAQ некоторые лимитированные наборы открыты только пользователям Premium. Условия каждого аукциона проверяйте в приложении. Если Premium нужен, его можно оформить в @premiumtg_uzbot в сумах по username.`,
  },
};
