// Avtoblogyoz yasagan maqola (2026-11-19). Niyat: Fragment'da Stars yoki Premium olmoqchi bo'lgan O'zbekistonlik foydalanuvchi «Fragment USDT bilan to'lov» deb qidiradi. U kanallarda tarqalgan USDT/USDC to'lov usullari qo'shilgani rostmi va undan foydalanish xavfsizmi, shuni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/stars/buy
//   https://fragment.com/premium/gift
//   https://core.telegram.org/api/stars
//   https://telegram.org/tos/third-party-payments
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "fragment-usdt-usdc-tolov-stars-premium",
  date: "2026-11-19",
  reviewed: "2026-11-19",
  category: "stars",
  priority: 0.7,
  title: { uz: "Fragment’da USDT bilan to‘lov: Stars va Premium’ni USDT’da olsa bo‘ladimi?", ru: "Оплата USDT на Fragment: можно ли купить Stars и Premium за USDT?" },
  excerpt: { uz: `Ha. 2026-yil 19-noyabrda Fragment’ning Stars va Premium sahifalarida USDT va USDC bilan to‘lash ko‘rsatilgan. «Test saytda qo‘shilib, qaytarildi» degan gapni esa rasmiy manbalar tasdiqlamaydi.`, ru: `Да. 19 ноября 2026 года на страницах Stars и Premium на Fragment была указана оплата в USDT и USDC. Версию о том, что способ «добавили на тестовом сайте и вернули», официальные источники не подтверждают.` },
  keywords: ["fragment usdt bilan tolov","fragment usdc tolov","fragment stars usdt","fragment premium usdt","fragment usdt qaysi tarmoq","telegram stars usdt bilan sotib olish","фрагмент оплата usdt","fragment usdt оплата stars","купить telegram premium за usdt","fragment usdc base","оплата фрагмент usdt trc20"],
  related: ["fragment-telegram-premium","ton-orqali-telegram-premium","fragment-kyc-verifikatsiya-bekor-qilindi","telegram-premium-sotib-olish-uzbekiston"],
  sources: [{"url":"https://fragment.com/stars/buy","title":"Fragment (Buy Telegram Stars)"},{"url":"https://fragment.com/premium/gift","title":"Buy Telegram Premium"},{"url":"https://core.telegram.org/api/stars","title":"Telegram Stars"},{"url":"https://telegram.org/tos/third-party-payments","title":"Third-Party Payments and Authorized Resellers"}],
  content: {
    uz: `## Fragment’da USDT bilan to‘lash mumkinmi?

Ha. 2026-yil 19-noyabrda Fragment’ning [Stars sotib olish](https://fragment.com/stars/buy) va [Premium sovg‘a qilish](https://fragment.com/premium/gift) sahifalarini tekshirdik. Ikkalasida ham USDT va USDC bilan to‘lash ko‘rsatilgan edi.

Stars sahifasida uchta tanga bor: GRAM (TON), USDT va USDC. Premium sahifasida ham USDT va USDC turibdi.

Bu holat sahifalar tekshirilgan kunga tegishli. To‘lov usullari o‘zgarishi mumkin, shuning uchun xariddan oldin ro‘yxatni Fragment sahifasining o‘zida ko‘ring.

Fragment Telegram uchun begona joy emas. Telegram’ning [Stars bo‘yicha API hujjatida](https://core.telegram.org/api/stars) Fragment Stars uchun to‘lov usullaridan biri sifatida ko‘rsatilgan. Hujjatda aytilishicha, u orqali kattaroq xarid ham qilish mumkin.

## Kanallarda nima deyilgan va qaysi qismi tasdiqlangan?

Telegram kanallarida tarqalgan xabarga ko‘ra, Stars va Premium uchun yangi to‘lov usullari avval Fragment’ning test versiyasida paydo bo‘lgan. Keyin ular deyarli darhol ishga tushirilgan, tezda olib tashlangan va yana qaytarilgan.

Bu da’volarni rasmiy manbalar bilan solishtirdik:

| Da’vo | Holat |
|---|---|
| Fragment’da USDT va USDC bilan to‘lash mumkin | Tasdiqlandi: Stars va Premium sahifalarida ko‘rinadi |
| Usullar avval test saytda paydo bo‘lgan | Rasmiy e’lon topilmadi |
| Usullar olib tashlanib, keyin qayta qo‘shilgan | Rasmiy e’lon topilmadi |
| Usul qachon ishga tushgani | Rasmiy manbalarda ko‘rsatilmagan |

Demak, faqat asosiy fakt tasdiqlandi: Fragment’da stablecoin bilan to‘lash mumkin. Qolgani bir kanal postidagi kuzatuv xolos.

Qaysi tanga va qaysi tarmoq qabul qilinishini post yoki skrinshotdan emas, faqat Fragment sahifasining o‘zidan bilib oling.

## Qaysi tarmoqlarda USDT va USDC qabul qilinadi?

Tekshirilgan kuni Stars sahifasida quyidagi variantlar bor edi:

| Tanga | Ko‘rsatilgan tarmoqlar |
|---|---|
| GRAM | TON |
| USDT | ETH, TON, POL, BSC, TRX |
| USDC | ETH, Base, POL |

Premium sovg‘a sahifasida ham USDT va USDC bilan to‘lash ko‘rsatilgan. Premium olayotganda tarmoqni to‘lov oynasida yana bir bor tekshiring.

GRAM — TON blokcheynining tangasi. Nomi qanday o‘zgargani haqida [alohida maqolada](/blog/toncoin-gram-nomi-ozgardimi-rostmi) yozganmiz.

> Bitta USDT bir nechta tarmoqda alohida yuradi. Hamyoningizdagi USDT qaysi tarmoqda bo‘lsa, Fragment’da ham aynan o‘sha tarmoqni tanlang.

## Fragment’da USDT bilan Stars yoki Premium qanday olinadi?

1. Brauzerda [fragment.com](https://fragment.com) manzilini qo‘lda yozing va Stars yoki Premium bo‘limiga o‘ting.
2. Kimga olayotganingizni tanlang. Ikkala sahifa ham o‘zingizga yoki boshqa odamga olishga ruxsat beradi.
3. Stars miqdorini yoki Premium muddatini tanlang.
4. Kripto hamyonni ulang. So‘ng to‘lov tangasini (USDT yoki USDC) va tarmog‘ini tanlang.
5. Tarmoq to‘lovi va yakuniy summani tekshiring, keyin hamyonda tranzaksiyani tasdiqlang.
6. Telegram’da Stars balansi yoki Premium statusi paydo bo‘lganini tekshiring.

Fragment qanday ishlashi va O‘zbekistondan foydalanish qanchalik qulayligi haqida [Fragment orqali Premium olish](/blog/fragment-telegram-premium) maqolasida batafsil yozganmiz.

## Fragment’da Premium qancha turadi va tarmoq to‘lovi qancha?

Premium sahifasi ochilgan paytda narxlar quyidagicha edi:

| Muddat | Fragment’dagi narx |
|---|---|
| 3 oy | 11,99 $ |
| 6 oy | 15,99 $ |
| 1 yil | 28,99 $ |

Bu narxlar sahifa ochilgan paytga tegishli va o‘zgarishi mumkin.

Stars sahifasida tarmoq to‘lovi (network fee) alohida ko‘rsatiladi. Tekshirgan paytimizda u 2,71 $ edi, lekin bu summa o‘zgarib turadi.

Stars narxi tanlangan miqdorga bog‘liq va tez-tez o‘zgaradi, shuning uchun uni bu yerda yozmadik. Aniq narxni sahifaning o‘zidan ko‘ring. Premium xaridida tarmoq to‘lovi qancha bo‘lishini bu maqolada tekshirmadik. Yakuniy summani hamyonda tasdiqlashdan oldin ko‘ring.

## USDT bilan to‘lashda qanday xatolar va xavflar bor?

- **Noto‘g‘ri tarmoq.** Masalan, USDT hamyonda bir tarmoqda turibdi, siz esa Fragment’da boshqasini tanladingiz. To‘lashdan oldin ikkala tomondagi tarmoqni solishtiring.
- **Rasmiy qo‘llanma yo‘q.** Kripto to‘lovni qaytarish, noto‘g‘ri tarmoqqa yuborish yoki to‘lov qancha vaqtda tushishi bo‘yicha rasmiy qo‘llanma topilmadi. Birinchi marta to‘layotgan bo‘lsangiz, kichik xariddan boshlagan ma’qul.
- **Soxta sahifalar.** Kanal va chatlardagi «Fragment» havolalari soxta saytga olib borishi mumkin. Manzilni har safar qo‘lda yozing.
- **Seed-ibora va kodlar.** Ularni hech kim so‘rashga haqli emas: na sayt, na «yordamchi», na «admin». Hamyonni ulash va kirish tartibi haqida [Fragment KYC maqolasida](/blog/fragment-kyc-verifikatsiya-bekor-qilindi) yozganmiz.
- **Kimdan sotib olyapsiz.** Telegram’ning [uchinchi tomon to‘lovlari qoidalariga](https://telegram.org/tos/third-party-payments) ko‘ra, ba’zi to‘lovlarda sotuvchi Telegram litsenziyasi bilan ishlaydigan vakolatli reseller bo‘lishi mumkin. Bunday bitimda Telegram tomon hisoblanmaydi.
- **Username xatosi.** Boshqa odamga Stars yoki Premium olayotgan bo‘lsangiz, username’ni harfma-harf tekshiring.

## To‘lovdan keyin Stars yoki Premium kelmasa nima qilish kerak?

Fragment’da kripto to‘lov tushish muddati va muammo bo‘lganda qanday harakat qilish rasmiy tushuntirilmagan. Shuning uchun quyidagi oddiy tartibga amal qiling:

- tranzaksiya xeshi va hamyon manzilini saqlab qo‘ying;
- tranzaksiya blokcheynda tasdiqlanganini eksplorerda tekshiring;
- Fragment’da tanlangan username va tarmoq to‘g‘ri bo‘lganini qayta ko‘ring;
- Telegram ilovasini yopib ochib, Stars balansi yoki Premium statusini qayta tekshiring.

Qayta to‘lashga shoshilmang: ikkinchi tranzaksiya muammoni hal qilmaydi, faqat xarajatni ikki barobar oshirishi mumkin. Kanal va chatlarda «pulingizni qaytarib beramiz» deb yozganlarga seed-ibora yoki kod bermang.

## O‘zbekistondan Fragment’da USDT bilan to‘lash qulaymi?

Texnik jihatdan bu yo‘l ishlaydi, lekin oldindan tayyorgarlik talab qiladi:

- kripto hamyon;
- hamyonda USDT yoki USDC;
- Fragment qabul qiladigan to‘g‘ri tarmoq;
- tarmoq to‘lovini qoplaydigan mablag‘.

Avval so‘mni USDT’ga aylantirishingiz kerak. Bu qo‘shimcha qadam, ba’zan esa qo‘shimcha xarajat ham. Bunday xarajatlarni bu maqolada hisoblamadik.

Fragment’da GRAM (TON) bilan to‘lash ham mumkin. Bu yo‘lni [TON orqali Premium olish](/blog/ton-orqali-telegram-premium) maqolasida ko‘rib chiqqanmiz. Qaysi tangani tanlamang, hamyon, tarmoq tanlash va tarmoq to‘lovi bilan bog‘liq qadamlar baribir qoladi.

## Kriptosiz, so‘mda Premium olishning yo‘li bormi?

Bor. Hamyon ochish va tarmoq tanlash bilan shug‘ullanishni istamasangiz, Premium’ni so‘mda ham olish mumkin.

| Mezon | Fragment (USDT/USDC) | Premiumtg |
|---|---|---|
| To‘lov valyutasi | USDT, USDC yoki GRAM | So‘m |
| To‘lov qanday qilinadi | Kripto hamyon orqali | Click, Payme, Paynet, Uzum Bank |
| Nima kerak | Hamyon, to‘g‘ri tarmoqdagi tanga, tarmoq to‘lovi | Faqat username |
| Xorijiy karta | Kerak emas, lekin kripto kerak | Kerak emas |
| Login kodi va parol | So‘ralmaydi, seed-iborani o‘zingiz saqlaysiz | So‘ralmaydi |
| Faollashish | Tranzaksiyadan keyin, muddati bu maqolada tasdiqlanmagan | 10 soniyada avtomatik |

Premiumtg narxlari:

- 3 oy — ${narx(3)}
- 6 oy — ${narx(6)}
- 12 oy — ${narx(12)}

Narx va mavjud to‘lov usullarini xariddan oldin [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida tekshiring.

Premiumtg — mustaqil xizmat, Telegram nomidan ish ko‘rmaydi. Premium statusini faqat Telegram beradi, shuning uchun «soxta Premium» degan narsa texnik jihatdan bo‘lmaydi. Username ochiq ma’lumot, uni berish nega xavfsiz ekanini [bu maqolada](/blog/username-berish-xavfsizmi) tushuntirganmiz.

Boshqa usullar bilan taqqoslash uchun [O‘zbekistonda Premium olishning barcha usullari](/blog/telegram-premium-sotib-olish-uzbekiston) maqolasini o‘qing.

## Ko‘p so‘raladigan savollar

### Fragment’da USDT TRC20 (TRX tarmog‘i) bilan to‘lasa bo‘ladimi?

Tekshirilgan kuni Stars sahifasida USDT uchun TRX tarmog‘i ro‘yxatda bor edi. Premium olayotganda tarmoqni to‘lov oynasida ko‘ring va hamyoningizdagi tarmoq bilan solishtiring.

### Fragment’da USDT bilan boshqa odamga Stars yoki Premium olsa bo‘ladimi?

Ha, Stars sahifasi ham, Premium sahifasi ham do‘st yoki hamkasbga olishga ruxsat beradi. Asosiysi, qabul qiluvchining username’ini xatosiz kiriting.

### USDT’ni noto‘g‘ri tarmoqda yuborsam, pulim qaytadimi?

Fragment’ning rasmiy sahifalarida bunday holatda pul qanday qaytarilishi tushuntirilmagan. Shuning uchun eng ishonchli himoya — tasdiqlashdan oldin tarmoqni tekshirish.

### Fragment’da USDT bilan to‘lash TON’dan arzonmi?

Tanga turiga qarab narx farq qilishi bu maqolada tasdiqlanmagan. Har ikki holatda ham umumiy xarajatga tarmoq to‘lovi, ehtimol so‘mni kriptoga almashtirish xarajati ham qo‘shiladi.

### Fragment’dagi USDT to‘lovi rasmiy funksiyami yoki hali testmi?

19-noyabrda USDT va USDC Fragment’ning asosiy Stars va Premium sahifalarida ko‘rsatilgan edi. Bu usul avval test saytda paydo bo‘lgani haqidagi gap esa faqat kanal postida yozilgan.

### USDT’siz va kriptosiz Telegram Premium qanday olinadi?

@premiumtg_uzbot botida paketni tanlab, username’ni kiritasiz va so‘mda Click, Payme, Paynet yoki Uzum Bank orqali to‘laysiz. Xorijiy karta ham, hamyon ham kerak emas.

### Fragment’dagi tarmoq to‘lovi (network fee) nima?

Bu xarid narxiga qo‘shimcha ravishda tranzaksiya uchun olinadigan to‘lov. Tekshirgan paytimizda Stars sahifasida 2,71 $ edi, lekin bu summa o‘zgarib turadi.`,
    ru: `## Можно ли платить USDT на Fragment?

Да. 19 ноября 2026 года мы проверили на Fragment страницы [покупки Stars](https://fragment.com/stars/buy) и [Premium в подарок](https://fragment.com/premium/gift). На обеих можно было оплатить покупку в USDT и USDC.

Страница Stars принимает три монеты: GRAM (TON), USDT и USDC. Страница Premium тоже принимает USDT и USDC.

Так было в день проверки. Способы оплаты могут меняться, поэтому перед покупкой проверьте список на самой странице Fragment.

Fragment для Telegram — не посторонняя площадка. В [документации Telegram API по Stars](https://core.telegram.org/api/stars) Fragment назван одним из способов оплаты Stars. Там же сказано, что через него можно делать и более крупные покупки.

## Что пишут в каналах и что из этого подтверждено?

По Telegram-каналам разошлась такая история: новые способы оплаты Stars и Premium сначала появились на тестовой версии Fragment. Потом их почти сразу запустили, быстро убрали и вернули снова.

Мы сверили эти утверждения с официальными источниками:

| Утверждение | Статус |
|---|---|
| На Fragment можно платить USDT и USDC | Подтверждено: видно на страницах Stars и Premium |
| Способы оплаты сначала появились на тестовом сайте | Официального объявления не найдено |
| Способы убрали, а потом добавили снова | Официального объявления не найдено |
| Когда способ запустили | В официальных источниках не указано |

Подтверждён только главный факт: на Fragment можно платить стейблкоинами. Остальное — наблюдения из одного поста в канале.

Какие монеты и сети принимаются, смотрите не в постах и не на скриншотах, а на самой странице Fragment.

## В каких сетях принимают USDT и USDC?

В день проверки на странице Stars были такие варианты:

| Монета | Указанные сети |
|---|---|
| GRAM | TON |
| USDT | ETH, TON, POL, BSC, TRX |
| USDC | ETH, Base, POL |

На странице Premium в подарок тоже можно платить USDT и USDC. Когда покупаете Premium, проверьте сеть ещё раз в окне оплаты.

GRAM — монета блокчейна TON. Как она сменила название, мы разбирали в [отдельной статье](/blog/toncoin-gram-nomi-ozgardimi-rostmi).

> USDT в разных сетях — это отдельные токены. В какой сети лежит USDT в вашем кошельке, ту же сеть и выбирайте на Fragment.

## Как купить Stars или Premium за USDT на Fragment?

1. Вручную введите в браузере адрес [fragment.com](https://fragment.com) и откройте раздел Stars или Premium.
2. Укажите, для кого покупаете. Обе страницы позволяют купить для себя или для другого человека.
3. Выберите количество Stars или срок Premium.
4. Подключите криптокошелёк. Затем выберите монету (USDT или USDC) и сеть.
5. Проверьте комиссию сети и итоговую сумму, потом подтвердите транзакцию в кошельке.
6. Проверьте в Telegram, что появился баланс Stars или статус Premium.

Как устроен Fragment и насколько им удобно пользоваться из Узбекистана, мы подробно писали в статье [о покупке Premium через Fragment](/blog/fragment-telegram-premium).

## Сколько стоит Premium на Fragment и какая комиссия сети?

На момент открытия страницы Premium цены были такими:

| Срок | Цена на Fragment |
|---|---|
| 3 месяца | 11,99 $ |
| 6 месяцев | 15,99 $ |
| 1 год | 28,99 $ |

Это цены на момент открытия страницы, они могут меняться.

На странице Stars комиссия сети (network fee) указана отдельно. Когда мы проверяли, она составляла 2,71 $, но сумма меняется.

Цена Stars зависит от выбранного количества и часто меняется, поэтому здесь мы её не приводим. Точную цену смотрите на самой странице. Какая комиссия сети будет при покупке Premium, мы для этой статьи не проверяли. Посмотрите итоговую сумму в кошельке до подтверждения.

## Какие ошибки и риски бывают при оплате USDT?

- **Не та сеть.** Например, USDT в кошельке лежит в одной сети, а на Fragment вы выбрали другую. Перед оплатой сравните сеть с обеих сторон.
- **Нет официальной инструкции.** Мы не нашли официального руководства о возврате криптоплатежа, переводе в неверную сеть и сроках зачисления. Если платите впервые, лучше начать с небольшой покупки.
- **Поддельные страницы.** Ссылки на «Fragment» в каналах и чатах могут вести на фишинговый сайт. Каждый раз вводите адрес вручную.
- **Сид-фраза и коды.** Никто не вправе их запрашивать: ни сайт, ни «помощник», ни «админ». О подключении кошелька и порядке входа мы писали в [статье о KYC на Fragment](/blog/fragment-kyc-verifikatsiya-bekor-qilindi).
- **У кого вы покупаете.** По [правилам Telegram о сторонних платежах](https://telegram.org/tos/third-party-payments), в некоторых платежах продавцом может быть авторизованный реселлер, работающий по лицензии Telegram. В такой сделке Telegram не является стороной.
- **Ошибка в username.** Если покупаете Stars или Premium другому человеку, проверьте username буква за буквой.

## Что делать, если после оплаты Stars или Premium не пришли?

Fragment официально не объясняет, за какой срок зачисляется криптоплатёж и что делать при проблеме. Поэтому действуйте так:

- сохраните хеш транзакции и адрес кошелька;
- проверьте в эксплорере, что транзакция подтверждена в блокчейне;
- ещё раз проверьте, верно ли указаны username и сеть на Fragment;
- закройте и снова откройте Telegram, затем ещё раз проверьте баланс Stars или статус Premium.

Не спешите платить повторно: вторая транзакция проблему не решит, но может удвоить расходы. Тем, кто в каналах и чатах обещает «вернуть ваши деньги», не давайте ни сид-фразу, ни коды.

## Удобно ли платить USDT на Fragment из Узбекистана?

Технически этот способ работает, но к нему нужно подготовиться. Понадобятся:

- криптокошелёк;
- USDT или USDC в кошельке;
- монета в сети, которую принимает Fragment;
- средства на комиссию сети.

Сначала сумы придётся обменять на USDT. Это лишний шаг, а иногда и лишние расходы. Эти расходы в статье мы не считали.

На Fragment можно платить и в GRAM (TON). Этот способ мы разобрали в статье [о покупке Premium через TON](/blog/ton-orqali-telegram-premium). Какую монету ни выберите, кошелёк, выбор сети и комиссия никуда не денутся.

## Можно ли купить Premium в сумах, без криптовалюты?

Можно. Если не хотите открывать кошелёк и разбираться с сетями, Premium можно оплатить в сумах.

| Критерий | Fragment (USDT/USDC) | Premiumtg |
|---|---|---|
| Валюта оплаты | USDT, USDC или GRAM | Сумы |
| Как платить | Через криптокошелёк | Click, Payme, Paynet, Uzum Bank |
| Что нужно | Кошелёк, монета в нужной сети, комиссия сети | Только username |
| Зарубежная карта | Не нужна, но нужна криптовалюта | Не нужна |
| Код входа и пароль | Не запрашиваются, сид-фраза хранится у вас | Не запрашиваются |
| Активация | После транзакции, срок в этой статье не подтверждён | Автоматически за 10 секунд |

Цены Premiumtg:

- 3 месяца — ${narx(3)}
- 6 месяцев — ${narx(6)}
- 12 месяцев — ${narx(12)}

Цены и доступные способы оплаты проверяйте перед покупкой в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot).

Premiumtg — независимый сервис и не действует от имени Telegram. Статус Premium выдаёт только Telegram, поэтому «поддельного Premium» технически не существует. Username — открытая информация. Почему его безопасно сообщать, мы объяснили [в этой статье](/blog/username-berish-xavfsizmi).

Чтобы сравнить с другими способами, прочитайте статью [обо всех способах купить Premium в Узбекистане](/blog/telegram-premium-sotib-olish-uzbekiston).

## Часто задаваемые вопросы

### Можно ли платить на Fragment USDT TRC20 (в сети TRX)?

В день проверки на странице Stars сеть TRX была в списке для USDT. При покупке Premium посмотрите сеть в окне оплаты и сравните её с сетью в вашем кошельке.

### Можно ли за USDT на Fragment купить Stars или Premium другому человеку?

Да, и на странице Stars, и на странице Premium можно оформить покупку для друга или коллеги. Главное — без ошибок ввести username получателя.

### Если я отправлю USDT не в той сети, деньги вернутся?

На официальных страницах Fragment не объясняется, как в таком случае возвращаются средства. Поэтому надёжнее всего проверить сеть до подтверждения платежа.

### Платить на Fragment в USDT дешевле, чем в TON?

Что цена зависит от выбранной монеты, в этой статье не подтверждено. В обоих случаях к общей сумме добавляется комиссия сети, а возможно, и расходы на обмен сумов на криптовалюту.

### Оплата USDT на Fragment — официальная функция или ещё тест?

19 ноября USDT и USDC были указаны на основных страницах Stars и Premium на Fragment. А версия о том, что способ сначала появился на тестовом сайте, встречается только в посте канала.

### Как купить Telegram Premium без USDT и без криптовалюты?

В боте @premiumtg_uzbot выберите пакет, введите username и оплатите в сумах через Click, Payme, Paynet или Uzum Bank. Не нужны ни зарубежная карта, ни кошелёк.

### Что такое комиссия сети (network fee) на Fragment?

Это плата за транзакцию сверх цены покупки. Когда мы проверяли страницу Stars, она составляла 2,71 $, но сумма меняется.`,
  },
};
