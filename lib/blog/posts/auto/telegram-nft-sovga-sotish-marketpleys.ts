// Avtoblogyoz yasagan maqola (2026-11-06). Niyat: NFT sovg‘asi bor Telegram foydalanuvchisi «telegram nft sovga sotish» deb qidiradi: sovg‘ani Telegram ichidagi bozorda yoki tashqi marketpleysda qanday sotish mumkinligini va sovg‘ani uchinchi tomon marketpleysga topshirish xavfsizmi yoki yo‘qligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/gift-marketplace-and-more
//   https://telegram.org/blog/profile-music-gift-themes
//   https://core.telegram.org/api/gifts
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://telegram.org/blog/collectible-gifts-and-more
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-nft-sovga-sotish-marketpleys",
  date: "2026-11-06",
  reviewed: "2026-11-06",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegram NFT sovg‘asini qanday sotish mumkin: ichki bozor yoki marketpleys?", ru: "Как продать NFT-подарок в Telegram: внутренний рынок или маркетплейс?" },
  excerpt: { uz: `Kolleksion (NFT) sovg‘ani Telegram ichidagi bozorda «Sell» tugmasi bilan Stars evaziga sotasiz. TON hamyon orqali tashqi marketpleysga qo‘yish mumkin, lekin uning xavfsizligi kafolatlanmagan.`, ru: `Коллекционный (NFT) подарок продаётся за Stars на внутреннем рынке Telegram кнопкой «Sell». Через TON-кошелёк можно выйти на внешний маркетплейс, но его безопасность не гарантирована.` },
  keywords: ["telegram nft sovga sotish","telegram sovgani sotish","nft sovga marketpleys","telegram gift marketplace","telegram sovga bozori stars","nft sovgani ton hamyonga otkazish","как продать подарок в telegram","продать nft подарок телеграм","маркетплейс подарков telegram","telegram подарки продажа за звезды","вывести подарок в ton кошелек"],
  related: ["telegram-nft-sovgalar","telegram-gifts-sovgalar","telegram-nft-sovga-imzosini-ochirish","telegram-stars-nima"],
  sources: [{"url":"https://telegram.org/blog/gift-marketplace-and-more","title":"Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels"},{"url":"https://telegram.org/blog/profile-music-gift-themes","title":"Music on Profiles, Stickers Mini App, New Profiles, and More"},{"url":"https://core.telegram.org/api/gifts","title":"Telegram Gifts"},{"url":"https://telegram.org/blog/wear-gifts-blockchain-and-more","title":"Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More"},{"url":"https://telegram.org/blog/collectible-gifts-and-more","title":"Collectible Gifts, Message Search Filters and More"}],
  content: {
    uz: `## Telegram NFT sovg‘asini sotish mumkinmi va qayerda?

Ha, mumkin. Kolleksion (NFT) sovg‘ani Telegram ichidagi sovg‘alar bozorida Stars evaziga sotsa bo‘ladi. Telegram bu bozorni [rasmiy blogida](https://telegram.org/blog/gift-marketplace-and-more) xavfsiz va foydalanish oson deb ta’riflaydi. Bozorda boshqa foydalanuvchilardan noyob sovg‘alar sotib olasiz yoki o‘zingiznikini sotib, yangi sovg‘alar uchun Stars ishlab olasiz.

Ikkinchi yo‘l sovg‘ani TON blokcheyniga o‘tkazishdan boshlanadi. Telegram e’lonlariga ko‘ra, kolleksion sovg‘alarni kolleksion username va raqamlar kabi TON orqali boshqa egaga o‘tkazish yoki NFT marketpleyslarida auksionga qo‘yish mumkin.

Gap faqat kolleksion, ya’ni upgrade qilingan sovg‘alar haqida. Oddiy sovg‘a bilan NFT sovg‘aning farqi [NFT sovg‘alar haqidagi maqolada](/blog/telegram-nft-sovgalar) tushuntirilgan.

> Telegram kanallarida chiqarilgan sovg‘alarning umumiy soni, marketpleyslarga topshirilgan sovg‘alar soni va ularning umumiy qiymati haqida raqamlar tarqalyapti. Bu raqamlar rasmiy manbalarda topilmadi, shuning uchun ularni keltirmaymiz.

## Ichki bozor va tashqi marketpleys: qanday farq bor?

Asosiy farq ikkita: sizni kim himoya qiladi va sovg‘a kimning nazoratida qoladi.

| Mezon | Telegram ichki bozori | Tashqi NFT marketpleys |
|---|---|---|
| Qayerda sotiladi | Telegram ilovasining o‘zida | Uchinchi tomon sayti yoki ilovasida, TON hamyon orqali |
| To‘lov | Rasmiy e’longa ko‘ra Stars; amaldagi variantni ilovada tekshiring | Marketpleys shartlariga bog‘liq, o‘sha yerda tekshiring |
| Telegram himoyasi | Rasman xavfsiz deb e’lon qilingan | Rasmiy xavfsizlik bahosi topilmadi |
| Sovg‘a qayerda turadi | Profilingizda, sotuvda «Sale» belgisi bilan | Egalik TON hamyonda, profil uni faqat ko‘rsatishi mumkin |
| Kimga mos | Tez va sodda sotmoqchi bo‘lganlarga | Kripto hamyon bilan ishlashni biladiganlarga |

Blokcheyndagi sovg‘a bo‘yicha muhim tafsilot Telegram’ning [texnik hujjatida](https://core.telegram.org/api/gifts) keltirilgan. Sovg‘a profilga bog‘langan holda ko‘rinishi mumkin, lekin egalik TON hamyonda qoladi. Amalda bu shuni anglatadi: sovg‘a TON’ga chiqqach, uning xavfsizligi hamyoningiz xavfsizligiga bog‘liq bo‘ladi.

Tashqi servislar haqida Telegram faqat bitta narsani aytadi: sovg‘ani TON hamyonga o‘tkazsangiz, auksion saytlari kabi tashqi servislarga ulanishingiz mumkin. Bu servislar qanchalik ishonchli ekani haqida rasmiy baho yo‘q.

## Telegram ichidagi bozorda sovg‘ani qanday sotuvga qo‘yaman?

Rasmiy tartib qisqa. Quyidagi qadamlar [Gift Marketplace e’loni](https://telegram.org/blog/gift-marketplace-and-more) asosida tuzilgan.

1. Telegram’da profilingizni oching va sotmoqchi bo‘lgan kolleksion sovg‘ani bosing.
2. «Sell» tugmasini bosing. Ilova tili boshqa bo‘lsa, tugma nomi tarjimada biroz farq qilishi mumkin.
3. Narxni kiriting. E’longa ko‘ra narx Stars’da belgilanadi, ilova ko‘rsatgan valyutaga e’tibor bering.
4. Ilova ko‘rsatgan summani tekshirib, sovg‘ani sotuvga qo‘ying.
5. Sovg‘a bozorda paydo bo‘ladi, profilingizda esa unga «Sale» belgisi qo‘yiladi.

Xaridor topilgunga qadar sovg‘a sizda qoladi. Fikringiz o‘zgarsa, sotuvni bekor qilishingiz mumkin. Buning tartibi pastroqda yozilgan.

Stars nima ekani va u yana nimalarga ishlatilishini bilmasangiz, [Telegram Stars haqidagi qo‘llanmani](/blog/telegram-stars-nima) o‘qing.

## Qanday narx qo‘yish kerak va «Value» maydoni nimani ko‘rsatadi?

Sovg‘a atributlarida «Value» maydoni bor. Telegram [e’loniga ko‘ra](https://telegram.org/blog/profile-music-gift-themes), u sovg‘aning taxminiy qayta sotish narxini ko‘rsatadi. Bu faqat mo‘ljal, sotilish kafolati emas.

Narxni belgilashda quyidagilarga qarang:

- «Value»ni boshlang‘ich nuqta sifatida oling, lekin unga ko‘r-ko‘rona tayanmang.
- Bozorda shu kolleksiyadagi o‘xshash model, fon va naqshli sovg‘alar qancha turganini solishtiring.
- Juda baland narxda sovg‘a uzoq sotilmay turib qolishi mumkin. Juda past narx esa zarar keltiradi.
- Shoshilmasangiz, o‘rtacha narxdan boshlang va kerak bo‘lsa keyin tuzating.

Texnik hujjatda narx uchun minimal va maksimal chegaralar borligi aytilgan. Aniq raqamlar bu maqolada tasdiqlanmagan. Chegaradan chiqadigan narx qabul qilinmasa, ilova buni kiritish vaqtida ko‘rsatadi.

## Sotuvdan qancha olaman: komissiya bormi?

Ha, qo‘ygan narxingizning hammasi sizga tushmaydi. [Texnik hujjatga](https://core.telegram.org/api/gifts) ko‘ra, sovg‘a sotilganda sotuvchi narxning komissiya koeffitsienti bilan hisoblangan ulushini oladi. Koeffitsient Telegram mijoz sozlamalarida beriladi.

> Komissiyaning aniq foizi rasmiy manbada topilmadi. Sotuvga qo‘yishdan oldin ilova sizga qancha tushishini ko‘rsatsa, aynan shu yakuniy summaga qarang.

Telegram sotuvdan tushgan Stars’ni boshqa noyob sovg‘alar olishga ishlatishni taklif qiladi. Sovg‘alar turlari va ularning Stars’dagi narxi haqida [Telegram Gifts maqolasida](/blog/telegram-gifts-sovgalar) yozilgan.

## Nega sovg‘ani hali sotuvga qo‘ya olmayapman yoki sotuvni qanday bekor qilaman?

Sotuvga qo‘yishda yoki uni bekor qilishda quyidagi holatlar uchraydi:

- **Sana cheklovi.** Ba’zi sovg‘alarni faqat ma’lum sanadan boshlab sotuvga qo‘yish mumkin. Texnik hujjatda bu alohida belgi bilan ko‘rsatilgan. Bunday holda o‘sha sanani kutasiz.
- **Sovg‘a kolleksion emas.** Rasmiy tartibda sotish faqat kolleksion sovg‘alar uchun tasvirlangan. Oddiy sovg‘ada «Sell» tugmasini topmasangiz, sabab shu bo‘lishi mumkin.
- **Sotuvni bekor qilish.** Fikringiz o‘zgarsa, sovg‘ani ochib «Unlist» tugmasini bosing. Shunda sovg‘a bozordan olinadi.
- **Texnik usul.** Hujjatga ko‘ra, narx 0 qilib yuborilsa ham sovg‘a bozordan olib tashlanadi. Bu dasturchilar uchun tafsilot, oddiy foydalanuvchiga «Unlist» tugmasi yetarli.

Sovg‘adagi imzo yoki asl ma’lumotlarni sotishdan oldin o‘chirish alohida jarayon. U haqda [NFT sovg‘a imzosini o‘chirish](/blog/telegram-nft-sovga-imzosini-ochirish) maqolasida yozilgan.

## Sovg‘ani uchinchi tomon marketpleysga topshirish xavfsizmi?

Bu bo‘yicha rasmiy kafolat yo‘q. Telegram xavfsiz deb faqat o‘z mexanizmlarini ataydi. Ichki bozor rasman xavfsiz deb e’lon qilingan. Texnik hujjatda esa sovg‘a takliflari (offers) Telegram himoyalagan to‘g‘ridan-to‘g‘ri sotuv usuli deb ta’riflanadi. Bu usul xaridorni ham, sovg‘a egasini ham firibgarlikdan saqlaydi.

Portals kabi tashqi marketpleyslar xavfsizligi haqida Telegram yoki TON’ning rasmiy bahosi topilmadi. Bu ularni avtomatik ravishda firibgar qilmaydi. Biroq muammo chiqsa, Telegram himoyasiga tayana olmaysiz.

Tashqi servisga TON hamyon orqali ulanasiz, egalik ham hamyonda turadi. Shuning uchun asosiy xavf hamyon kalitlari va siz tasdiqlaydigan tranzaksiyalarda.

Amaliy qoidalar:

- Hamyoningizning seed-iborasini (tiklash so‘zlarini) hech kimga bermang va hech qanday saytga kiritmang.
- Telegram login kodi, SMS-kod yoki ikki bosqichli parolni so‘ragan bot va saytlarga ishonmang.
- Hamyonda tranzaksiyani tasdiqlashdan oldin nimani va kimga yuborayotganingizni o‘qing.
- Marketpleys bot yoki sayt nomini harfma-harf tekshiring. O‘xshash nomli soxta nusxalar bo‘lishi mumkin.
- Referal havola bilan reklama qilinayotgan postlarni mustaqil tavsiya deb qabul qilmang. Muallif har bir ro‘yxatdan o‘tishdan foyda olishi mumkin.
- Qimmat sovg‘ani tashqariga chiqarishdan oldin ichki bozordagi narxlar bilan solishtiring.

Firibgarlikning umumiy belgilari [firibgarlikdan himoya haqidagi maqolada](/blog/telegram-premium-firibgarlikdan-himoya) jamlangan.

## Sovg‘ani TON blokcheyniga chiqarish haqida nimalar ma’lum?

Rasmiy manbalarda quyidagilar aytilgan:

- Sovg‘alarni kolleksion username va raqamlar kabi TON blokcheyni orqali o‘tkazish yoki auksionga qo‘yish mumkin ([Telegram e’loni](https://telegram.org/blog/wear-gifts-blockchain-and-more)).
- Sovg‘ani TON hamyonga ko‘chirsangiz, auksion saytlari va kolleksiyalar uchun qo‘shimcha imtiyoz beruvchi platformalarga ulanishingiz mumkin.
- Kolleksion sovg‘alarni boshqa foydalanuvchilarga o‘tkazish yoki NFT marketpleyslarida auksionga qo‘yish mumkin ([kolleksion sovg‘alar e’loni](https://telegram.org/blog/collectible-gifts-and-more)).
- Hamyondagi sovg‘a profilda ko‘rinishi mumkin, ammo uning egasi hamyon hisoblanadi.

Eksportning aniq qadamlari, narxi va kutish muddati rasmiy manbalarda topilmadi. Sovg‘ani eksport qilmoqchi bo‘lsangiz, Telegram ilovasidagi ko‘rsatmaga tayaning va har bir ekrandagi shartni o‘qib chiqing. Kolleksion username va raqamlar savdo qilinadigan Fragment haqida umumiy ma’lumot [Fragment haqidagi maqolada](/blog/fragment-telegram-premium) bor.

Maqsadingiz sovg‘ani shunchaki Stars’ga aylantirish bo‘lsa, ichki bozor soddaroq yo‘l. Unda hamyon, blokcheyn tranzaksiyalari va uchinchi tomon shartlari kerak bo‘lmaydi.

## Sotuvga qo‘yishdan oldin nimalarni tekshirish kerak?

Quyidagi ro‘yxat keyinchalik ortga qaytarish qiyin bo‘lgan xatolardan saqlaydi:

- **Sovg‘a turi.** Sovg‘a kolleksion ekanini tekshiring. Oddiy sovg‘a uchun bozorda sotish tartibi tasvirlanmagan.
- **Sana.** Sovg‘ada sotuvga qo‘yish sanasi bo‘yicha cheklov yo‘qligiga ishonch hosil qiling.
- **Narx.** «Value» maydonini va bozordagi o‘xshash sovg‘alar narxini solishtiring.
- **Yakuniy summa.** Komissiyadan keyin qancha tushishini ilovada ko‘ring.
- **Imzo va ma’lumotlar.** Sovg‘adagi asl ma’lumotlar xaridorga ko‘rinishini xohlamasangiz, ularni oldindan hal qiling.
- **Yo‘l tanlovi.** Tashqi marketpleysni tanlasangiz, hamyon xavfsizligi va servis shartlari uchun javobgarlik sizda qolishini hisobga oling.

Shu oltita narsani tekshirsangiz, sotuv jarayonida kutilmagan holatlar kamayadi.

## Ko‘p so‘raladigan savollar

### Oddiy, NFT bo‘lmagan Telegram sovg‘asini bozorda sotsa bo‘ladimi?

Rasmiy manbalarda bozorda sotish faqat kolleksion sovg‘alar uchun tasvirlangan. Oddiy sovg‘ada «Sell» tugmasi ko‘rinmasa, sabab odatda shu.

### Sotuvga qo‘ygan sovg‘am profilda ko‘rinib turadimi?

Ha. Sovg‘a bozorda paydo bo‘lishi bilan birga profilingizda ham qoladi, faqat unga «Sale» belgisi qo‘shiladi.

### Sovg‘ani sotganimda qancha Stars olaman?

Sizga narxning komissiya chegirilgandan keyingi qismi tushadi. Aniq foiz rasmiy manbada ko‘rsatilmagan, shuning uchun ilova ko‘rsatgan yakuniy summaga qarang.

### «Value»da ko‘rsatilganidan qimmatroq narx qo‘ysam bo‘ladimi?

«Value» majburiy narx emas, u faqat taxminiy qayta sotish qiymatini ko‘rsatadi. Narx uchun chegaralar bor, lekin aniq raqamlar tasdiqlanmagan. Chegaradan chiqsangiz, ilova buni narx kiritish vaqtida ko‘rsatadi.

### Sotuvga qo‘ygandan keyin narxni o‘zgartirsam bo‘ladimi?

Eng ishonchli yo‘l: «Unlist» bilan sovg‘ani bozordan oling va yangi narx bilan qayta sotuvga qo‘ying. Narxni to‘g‘ridan-to‘g‘ri tahrirlash imkoni bor-yo‘qligini ilovada tekshiring.

### Portals kabi marketpleyslar Telegram’ning rasmiy xizmatimi?

Telegram yoki TON’ning bunday servislar haqidagi rasmiy bahosi topilmadi. Telegram xavfsiz deb faqat o‘z ichki bozori va sovg‘a takliflarini ataydi.

### Sovg‘ani TON hamyonga o‘tkazsam, u profilimdan yo‘qoladimi?

Texnik hujjatga ko‘ra, sovg‘a profilda ko‘rinishda qolishi mumkin, lekin egalik TON hamyonga o‘tadi. Shu sababli hamyon kalitlarini ishonchli saqlang.`,
    ru: `## Можно ли продать NFT-подарок в Telegram и где?

Да, можно. Коллекционный (NFT) подарок продаётся за Stars на рынке подарков внутри Telegram. В [официальном блоге](https://telegram.org/blog/gift-marketplace-and-more) Telegram называет этот рынок безопасным и простым в использовании. На нём можно купить редкие подарки у других пользователей или продать свои и получить Stars на новые.

Второй путь начинается с переноса подарка в блокчейн TON. Согласно анонсам Telegram, коллекционные подарки, как и коллекционные юзернеймы и номера, можно передавать через TON другому владельцу или выставлять на аукцион на NFT-маркетплейсах.

Речь идёт только о коллекционных, то есть улучшенных подарках. Чем обычный подарок отличается от NFT, объясняется в [статье об NFT-подарках](/blog/telegram-nft-sovgalar).

> В Telegram-каналах ходят цифры об общем числе выпущенных подарков, о том, сколько из них выставлено на маркетплейсы, и об их суммарной стоимости. В официальных источниках эти данные не найдены, поэтому мы их не приводим.

## Внутренний рынок и внешний маркетплейс: в чём разница?

Главных различий два: кто вас защищает и под чьим контролем остаётся подарок.

| Критерий | Внутренний рынок Telegram | Внешний NFT-маркетплейс |
|---|---|---|
| Где продаётся | Прямо в приложении Telegram | На стороннем сайте или в приложении, через TON-кошелёк |
| Оплата | По официальному анонсу — Stars; актуальный вариант проверьте в приложении | Зависит от условий маркетплейса, уточняйте там |
| Защита Telegram | Официально заявлен как безопасный | Официальная оценка безопасности не найдена |
| Где находится подарок | В вашем профиле, при продаже — с меткой «Sale» | Владение — в TON-кошельке, профиль может лишь отображать подарок |
| Кому подходит | Тем, кто хочет продать быстро и просто | Тем, кто умеет работать с криптокошельком |

Важная деталь о подарке в блокчейне есть в [технической документации](https://core.telegram.org/api/gifts) Telegram. Подарок может отображаться в профиле, но владение остаётся за TON-кошельком. На практике это значит: после выхода в TON безопасность подарка зависит от безопасности вашего кошелька.

О внешних сервисах Telegram говорит лишь одно: перенеся подарок в TON-кошелёк, вы сможете подключаться к сторонним сервисам, например аукционным площадкам. Официальной оценки их надёжности нет.

## Как выставить подарок на продажу на внутреннем рынке Telegram?

Официальный порядок короткий. Шаги ниже составлены по [анонсу Gift Marketplace](https://telegram.org/blog/gift-marketplace-and-more).

1. Откройте свой профиль в Telegram и нажмите на коллекционный подарок, который хотите продать.
2. Нажмите кнопку «Sell». В русском интерфейсе название кнопки может отличаться в переводе.
3. Укажите цену. Согласно анонсу, цена задаётся в Stars — обратите внимание, какую валюту показывает приложение.
4. Проверьте сумму, которую показывает приложение, и выставьте подарок на продажу.
5. Подарок появится на рынке, а в вашем профиле получит метку «Sale».

Пока покупатель не найден, подарок остаётся у вас. Если передумаете, продажу можно отменить — как это сделать, написано ниже.

Если не знаете, что такое Stars и на что ещё они тратятся, прочитайте [руководство по Telegram Stars](/blog/telegram-stars-nima).

## Какую цену поставить и что показывает поле «Value»?

В атрибутах подарка есть поле «Value». По [анонсу Telegram](https://telegram.org/blog/profile-music-gift-themes), оно показывает примерную цену перепродажи. Это ориентир, а не гарантия продажи.

При выборе цены учитывайте:

- «Value» — отправная точка, но не стоит полагаться на неё вслепую.
- Сравните, сколько на рынке стоят подарки из той же коллекции с похожими моделью, фоном и узором.
- При слишком высокой цене подарок может долго висеть без покупателя. Слишком низкая цена — это прямой убыток.
- Если не торопитесь, начните со средней цены и при необходимости скорректируйте её.

В технической документации сказано, что у цены есть минимальный и максимальный пределы. Точные значения в этой статье не подтверждены. Если цена выходит за допустимые рамки, приложение сообщит об этом при вводе.

## Сколько я получу с продажи: есть ли комиссия?

Да, вся указанная цена вам не достанется. По [технической документации](https://core.telegram.org/api/gifts), при продаже подарка продавец получает долю цены, рассчитанную по коэффициенту комиссии. Коэффициент задаётся в клиентских настройках Telegram.

> Точный процент комиссии в официальных источниках не найден. Если перед размещением приложение показывает, сколько вы получите, ориентируйтесь именно на эту итоговую сумму.

Telegram предлагает тратить вырученные Stars на другие редкие подарки. О видах подарков и их цене в Stars рассказано в [статье о Telegram Gifts](/blog/telegram-gifts-sovgalar).

## Почему я пока не могу выставить подарок и как отменить продажу?

При размещении или отмене продажи встречаются такие ситуации:

- **Ограничение по дате.** Некоторые подарки можно выставить на продажу только начиная с определённой даты. В технической документации это обозначено отдельным флагом. В этом случае остаётся дождаться нужного дня.
- **Подарок не коллекционный.** Официальный порядок продажи описан только для коллекционных подарков. Если у обычного подарка нет кнопки «Sell», причина, скорее всего, в этом.
- **Отмена продажи.** Если передумали, откройте подарок и нажмите «Unlist». Подарок будет снят с рынка.
- **Технический способ.** По документации, подарок снимается с рынка и при передаче цены 0. Это деталь для разработчиков, обычному пользователю достаточно кнопки «Unlist».

Удаление подписи или исходных данных подарка перед продажей — отдельный процесс. О нём рассказано в статье [об удалении подписи NFT-подарка](/blog/telegram-nft-sovga-imzosini-ochirish).

## Безопасно ли выставлять подарок на сторонний маркетплейс?

Официальных гарантий на этот счёт нет. Безопасными Telegram называет только собственные механизмы. Внутренний рынок официально заявлен как безопасный. А в технической документации предложения о покупке подарков (offers) описаны как защищённый Telegram способ прямых продаж, который оберегает от мошенников и покупателя, и владельца подарка.

Официальной оценки безопасности внешних маркетплейсов вроде Portals от Telegram или TON не найдено. Это не делает их автоматически мошенническими. Но если возникнет проблема, на защиту Telegram рассчитывать не получится.

К внешнему сервису вы подключаетесь через TON-кошелёк, и владение тоже остаётся в кошельке. Поэтому главный риск — в ключах кошелька и транзакциях, которые вы подтверждаете.

Практические правила:

- Никому не сообщайте seed-фразу (слова восстановления) кошелька и не вводите её ни на каких сайтах.
- Не доверяйте ботам и сайтам, которые просят код входа в Telegram, SMS-код или пароль двухэтапной проверки.
- Перед подтверждением транзакции в кошельке прочитайте, что и кому вы отправляете.
- Проверяйте название бота или сайта маркетплейса буква за буквой — встречаются поддельные копии с похожими именами.
- Не воспринимайте посты с реферальными ссылками как независимую рекомендацию: автор может зарабатывать на каждой регистрации.
- Прежде чем выводить дорогой подарок наружу, сравните цены на внутреннем рынке.

Общие признаки мошенничества собраны в [статье о защите от мошенников](/blog/telegram-premium-firibgarlikdan-himoya).

## Что известно о выводе подарка в блокчейн TON?

В официальных источниках сказано следующее:

- Подарки, как и коллекционные юзернеймы и номера, можно передавать или выставлять на аукцион через блокчейн TON ([анонс Telegram](https://telegram.org/blog/wear-gifts-blockchain-and-more)).
- Перенеся подарок в TON-кошелёк, можно подключаться к аукционным площадкам и платформам, которые дают дополнительные привилегии владельцам коллекционных предметов.
- Коллекционные подарки можно передавать другим пользователям или выставлять на аукцион на NFT-маркетплейсах ([анонс коллекционных подарков](https://telegram.org/blog/collectible-gifts-and-more)).
- Подарок в кошельке может отображаться в профиле, но его владельцем считается кошелёк.

Точные шаги экспорта, стоимость и срок ожидания в официальных источниках не найдены. Если решите экспортировать подарок, опирайтесь на инструкции в приложении Telegram и читайте условия на каждом экране. Общие сведения о Fragment, где торгуют коллекционными юзернеймами и номерами, есть в [статье о Fragment](/blog/fragment-telegram-premium).

Если цель — просто превратить подарок в Stars, внутренний рынок проще. Там не нужны кошелёк, блокчейн-транзакции и условия сторонних сервисов.

## Что проверить перед тем, как выставить подарок на продажу?

Этот список убережёт от ошибок, которые потом трудно исправить:

- **Тип подарка.** Убедитесь, что подарок коллекционный. Для обычных подарков порядок продажи на рынке не описан.
- **Дата.** Проверьте, что на подарке нет ограничения по дате выставления на продажу.
- **Цена.** Сравните поле «Value» с ценами похожих подарков на рынке.
- **Итоговая сумма.** Посмотрите в приложении, сколько вы получите после комиссии.
- **Подпись и данные.** Если не хотите, чтобы покупатель видел исходные данные подарка, решите этот вопрос заранее.
- **Выбор пути.** Выбирая внешний маркетплейс, учитывайте, что ответственность за безопасность кошелька и условия сервиса ложится на вас.

Проверив эти шесть пунктов, вы снизите риск неожиданностей при продаже.

## Часто задаваемые вопросы

### Можно ли продать на рынке обычный, не NFT-подарок Telegram?

В официальных источниках продажа на рынке описана только для коллекционных подарков. Если у обычного подарка нет кнопки «Sell», дело, как правило, именно в этом.

### Будет ли выставленный на продажу подарок виден в профиле?

Да. Подарок появляется на рынке и одновременно остаётся в вашем профиле — к нему просто добавляется метка «Sale».

### Сколько Stars я получу за проданный подарок?

Вам достанется часть цены за вычетом комиссии. Точный процент в официальных источниках не указан, поэтому смотрите на итоговую сумму, которую показывает приложение.

### Можно ли поставить цену выше, чем в поле «Value»?

«Value» — не обязательная цена, а лишь ориентир примерной стоимости перепродажи. Пределы цены существуют, но точные значения не подтверждены; при выходе за рамки приложение предупредит при вводе.

### Можно ли изменить цену после выставления подарка?

Надёжнее всего снять подарок кнопкой «Unlist» и выставить заново с новой ценой. Есть ли возможность редактировать цену напрямую, проверьте в приложении.

### Маркетплейсы вроде Portals — это официальные сервисы Telegram?

Официальной оценки таких сервисов от Telegram или TON не найдено. Безопасными Telegram называет только свой внутренний рынок и предложения о покупке подарков.

### Если перенести подарок в TON-кошелёк, он исчезнет из профиля?

По технической документации подарок может продолжать отображаться в профиле, но владение переходит к TON-кошельку. Поэтому храните ключи кошелька в надёжном месте.`,
  },
};
