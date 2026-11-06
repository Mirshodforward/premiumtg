// Avtoblogyoz yasagan maqola (2026-11-06). Niyat: Telegram NFT sovg‘asi egasi «sovg‘ani TON hamyonga o‘tkazish» yoki «Fragment’siz hamyonga chiqarish» deb qidirib, buni hozir qanday qilishni va beta’dagi yangi funksiya haqiqatmi ekanini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://core.telegram.org/api/gifts
//   https://core.telegram.org/constructor/savedStarGift
//   https://core.telegram.org/type/payments.StarGiftWithdrawalUrl
//   https://telegram.org/blog/collectible-gifts-and-more
//   https://translations.telegram.org/en/macos/unsorted/Gift.Withdraw.Text
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-nft-sovga-ton-hamyonga-otkazish",
  date: "2026-11-06",
  reviewed: "2026-11-06",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegram sovg‘asini TON hamyonga o‘tkazish: Fragment’siz yo‘l bormi?", ru: "Как перевести подарок Telegram на TON-кошелёк: есть ли способ без Fragment?" },
  excerpt: { uz: `Faqat kolleksion (NFT) sovg‘ani TON hamyonga chiqarish mumkin: Telegram’da 2FA paroli bilan tasdiqlab, Fragment’da import qilasiz. Fragment’siz yo‘l hozircha tasdiqlanmagan beta mish-mishi.`, ru: `На TON-кошелёк выводится только коллекционный (NFT) подарок: вы подтверждаете вывод паролем 2FA в Telegram и импортируете подарок на Fragment. Способ без Fragment пока остаётся неподтверждённым слухом из беты.` },
  keywords: ["telegram sovga ton hamyonga otkazish","telegram nft sovga hamyonga chiqarish","sovgani blokcheynga otkazish","telegram gift ton wallet","fragment sovga import","telegram sovga fragmentsiz","как вывести подарок telegram на ton кошелек","вывод nft подарка telegram","перевести подарок в кошелек минуя fragment","telegram подарки блокчейн ton","send via blockchain telegram"],
  related: ["telegram-nft-sovgalar","telegram-nft-sovga-sotish-marketpleys","telegram-wallet-hamyon-ochish-faollashtirish","fragment-kyc-verifikatsiya-bekor-qilindi"],
  sources: [{"url":"https://telegram.org/blog/wear-gifts-blockchain-and-more","title":"Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More"},{"url":"https://core.telegram.org/api/gifts","title":"Telegram Gifts"},{"url":"https://core.telegram.org/constructor/savedStarGift","title":"savedStarGift"},{"url":"https://core.telegram.org/type/payments.StarGiftWithdrawalUrl","title":"payments.StarGiftWithdrawalUrl"},{"url":"https://telegram.org/blog/collectible-gifts-and-more","title":"Collectible Gifts, Message Search Filters and More"},{"url":"https://translations.telegram.org/en/macos/unsorted/Gift.Withdraw.Text","title":"Translations"}],
  content: {
    uz: `## Telegram sovg‘asini TON hamyonga o‘tkazsa bo‘ladimi?

Ha, lekin faqat **kolleksion (NFT) sovg‘ani**. Telegram blogiga ko‘ra, kolleksion sovg‘alarni kolleksion username va raqamlar kabi TON blokcheyni orqali boshqa egaga o‘tkazish yoki auksionga qo‘yish mumkin ([Telegram blogi](https://telegram.org/blog/wear-gifts-blockchain-and-more)).

Oddiy sovg‘ani to‘g‘ridan-to‘g‘ri blokcheynga chiqarib bo‘lmaydi. Avval uni kolleksion sovg‘aga aylantirish (upgrade) kerak. Telegram yozishicha, upgrade oz miqdordagi Stars turadi va bu Stars blokcheyn to‘lovlarini qoplash uchun ishlatiladi ([Collectible Gifts e’loni](https://telegram.org/blog/collectible-gifts-and-more)). Aniq Stars miqdorini upgrade oynasida ko‘rasiz.

Kolleksion sovg‘aning oddiysidan farqini [NFT sovg‘alar haqidagi maqolada](/blog/telegram-nft-sovgalar) batafsil o‘qing.

## Sovg‘ani blokcheynga chiqarishdan nima foyda?

Sovg‘a Telegram ichida turganda u Telegram akkauntingizga bog‘liq bo‘ladi. TON hamyonga chiqarilgach, vaziyat o‘zgaradi:

- **Doimiy nazorat.** Telegram ma’lumotiga ko‘ra, akkauntga kira olmay qolsangiz yoki uni o‘chirsangiz ham sovg‘a ustidan nazorat sizda qoladi.
- **Tashqi xizmatlar.** TON hamyondagi sovg‘ani tashqi xizmatlarga, masalan, auksion saytlariga ulash mumkin.
- **Profilda ko‘rsatish.** Texnik hujjatga ko‘ra, TON’dagi sovg‘ani Telegram profilida ko‘rsatsangiz ham egalik TON hamyonda qoladi ([Telegram Gifts hujjati](https://core.telegram.org/api/gifts)). Profilda kim nimani ko‘rishini sozlash haqida [bu maqolada](/blog/telegram-nft-sovga-egasi-yashirin) yozilgan.
- **Mas’uliyat ham bor.** Egalik hamyon manzilida qolgani uchun sovg‘a xavfsizligi endi hamyon kalitlariga bog‘liq. Kalit so‘zlarni yo‘qotsangiz, sovg‘aga kirishni ham yo‘qotishingiz mumkin.

Sotish uchun chiqarmoqchi bo‘lsangiz, avval [ichki bozor va tashqi marketpleys farqini](/blog/telegram-nft-sovga-sotish-marketpleys) solishtiring. Har ikki yo‘lning o‘z shartlari bor.

## Telegram ichida saqlash va TON hamyonga chiqarish: farqi nimada?

| Jihat | Telegram ichida | TON hamyonda |
|---|---|---|
| Egalik nimaga bog‘liq | Telegram akkauntiga | TON hamyon manziliga |
| Akkauntga kirish yo‘qolsa | Sovg‘a akkaunt ichida qoladi | Telegram ma’lumotiga ko‘ra, nazorat sizda qoladi |
| Tashqi auksion saytlari | Rasmiy blogda tilga olinmagan | Hamyon orqali ulash mumkin |
| Profilda ko‘rsatish | Mumkin | Mumkin, egalik hamyonda qoladi |
| Xavfsizlik nimaga tayanadi | Telegram akkaunti himoyasi: login kodi va 2FA | Hamyonning kalit so‘zlari (seed) |

Sovg‘ani faqat profilda ko‘rsatish yoki do‘stga sovg‘a qilish niyatingiz bo‘lsa, uni chiqarishga shoshilmang. Chiqarish asosan tashqi xizmatlar bilan ishlash va mustaqil saqlash uchun kerak.

Hamyondagi sovg‘ani qayta Telegram ichiga qaytarish tartibi bu maqolada tasdiqlanmagan. Bu kerak bo‘lsa, shartlarni Fragment’ning o‘zida tekshiring.

## Hozir sovg‘ani TON hamyonga qanday chiqarish mumkin?

Rasmiy manbalarda tasvirlangan yo‘l: chiqarishni Telegram ilovasida boshlaysiz, 2FA paroli bilan tasdiqlaysiz va sovg‘ani Fragment’da hamyoningizga import qilasiz. Texnik hujjatga ko‘ra, chiqarish jarayoni joriy foydalanuvchining 2FA parolini talab qiladi va NFT’ni Fragment’da import qilish uchun havola qaytaradi ([Telegram Gifts](https://core.telegram.org/api/gifts), [StarGiftWithdrawalUrl](https://core.telegram.org/type/payments.StarGiftWithdrawalUrl)).

1. **Ikki bosqichli parolni yoqing.** Telegram sozlamalarida ikki bosqichli tekshiruv (2FA) yoqilganini tekshiring. Parolsiz chiqarish bosqichidan o‘tib bo‘lmaydi.
2. **TON hamyon tayyorlang.** Kalit so‘zlarni (seed) qog‘ozga yozib, xavfsiz joyda saqlang.
3. **Sovg‘ani oching.** Profilingizdagi sovg‘alar bo‘limida kolleksion sovg‘ani tanlang va blokcheyn orqali o‘tkazish variantini toping. Tugma nomi ilova versiyasiga qarab farq qilishi mumkin, shuning uchun ekrandagi yozuvlarga qarang.
4. **2FA parolini kiriting.** Parolni faqat Telegram ilovasining o‘z oynasiga yozing.
5. **Fragment havolasini oching.** Jarayon sizni [Fragment](https://fragment.com) sahifasiga yo‘naltiradi. Brauzerning manzil satrida aynan fragment.com domeni turganini tekshiring.
6. **Hamyonni ulang va import qiling.** Fragment’da TON hamyoningizni ulab, importni tasdiqlang. Agar to‘lov yoki shartlar ko‘rsatilsa, tasdiqlashdan oldin ularni o‘qing.
7. **Natijani tekshiring.** Sovg‘a aynan siz ulagan hamyonda paydo bo‘lganiga ishonch hosil qiling.

> Fragment’ga kirish va verifikatsiya bo‘yicha savollarga [Fragment KYC maqolasida](/blog/fragment-kyc-verifikatsiya-bekor-qilindi) javob bor.

## Chiqarish varianti yo‘q yoki sovg‘a chiqmayapti: sabablari

| Belgi | Ehtimoliy sabab | Nima qilish kerak |
|---|---|---|
| Blokcheyn orqali o‘tkazish varianti umuman yo‘q | Sovg‘a kolleksionga aylantirilmagan | Avval upgrade qiling, so‘ng qayta urinib ko‘ring |
| Sovg‘ani hozircha chiqarib bo‘lmasligi yozilgan | Ayrim sovg‘alarni TON’ga faqat keyinroq chiqarish mumkin | Ko‘rsatilgan vaqtgacha kuting |
| Parol bosqichida jarayon to‘xtaydi | 2FA yoqilmagan yoki parol noto‘g‘ri | 2FA’ni yoqing, parolni tekshiring |
| Fragment’dagi shartlar tushunarsiz | Aniq narx va muddat rasmiy manbada e’lon qilinmagan | Shartlarni Fragment ekranida o‘qing |

Ikkinchi qator texnik hujjatga tayanadi: ba’zi sovg‘alarni TON blokcheyniga hozircha chiqarib bo‘lmaydi, egasi ularni belgilangan vaqtdan keyin chiqara oladi ([savedStarGift](https://core.telegram.org/constructor/savedStarGift)).

Chiqarishning TON’dagi aniq narxi va kutish muddati rasmiy manbalarda topilmadi. Shuning uchun «chiqarish shuncha turadi» degan tayyor raqamlarga ishonmang: yakuniy shartlarni faqat jarayon ekranida ko‘rasiz.

## «Fragment’siz to‘g‘ridan-to‘g‘ri hamyonga» funksiyasi haqiqatmi?

Bu gap beta versiyalarni kuzatuvchi Telegram kanallaridan (TBetaLeak, @villageton) tarqalgan. Ularning yozishicha, ilovaning beta versiyasida sovg‘ani Fragment’ni chetlab o‘tib, to‘g‘ridan-to‘g‘ri hamyonga chiqarish imkoniyati ko‘ringan.

Telegram buni rasman e’lon qilmagan. Texnik hujjatlarda ham hozircha bunday yo‘l yo‘q.

> Fragment’siz chiqarish rasmiy tasdiqlanmagan. Rasmiy hujjatlarda chiqarish Fragment’da import qilish havolasi orqali tasvirlangan.

O‘sha kanallarda profil bilan bog‘liq boshqa o‘zgarishlar ham tilga olingan, ammo ular uchun ham rasmiy manba topilmadi. Beta versiyadagi funksiya ba’zan o‘zgargan holda chiqadi, ba’zan umuman chiqmaydi.

Amaliy xulosa: sovg‘ani hozir chiqarish kerak bo‘lsa, rasmiy yo‘l — Fragment orqali import. Shoshilinch ehtiyoj bo‘lmasa, sovg‘a Telegram ichida qolaveradi. Rasmiy e’lonni [telegram.org blogida](https://telegram.org/blog) kuzatib boring.

## Qaysi hamyonni tanlash va nimaga e’tibor berish kerak?

Sovg‘a TON hamyonga boradi va egalik o‘sha hamyon manzilida qoladi. Demak, hamyon tanlash sovg‘ani saqlash usulini tanlash bilan barobar.

- **Kalit so‘zlar.** Seed iborani yo‘qotish sovg‘ani yo‘qotishga olib kelishi mumkin. Uni skrinshotda yoki bulutli eslatmada emas, oflayn saqlang.
- **Manzil.** Import vaqtida qaysi hamyon ulanganini tekshiring. Boshqa qurilmadagi yoki eski hamyon ulanib qolishi mumkin.
- **Telegram Wallet.** Uni ochish shartlari va to‘lov talabi bor-yo‘qligini [Wallet haqidagi maqolada](/blog/telegram-wallet-hamyon-ochish-faollashtirish) ko‘ring.
- **Tashqi saytlar.** Telegram sovg‘ani auksion saytlariga ulash mumkinligini aytadi, lekin rasmiy manbalarda bu saytlarning ishonchliligi baholanmagan. Har bir saytni alohida tekshiring.

## Sovg‘a chiqarishda firibgarlikdan qanday saqlanish kerak?

NFT sovg‘alar real qiymatga ega bo‘lgani uchun firibgarlarning nishoniga aylanishi mumkin. Beta haqidagi mish-mishlar ular uchun qulay bahona bo‘ladi.

- **2FA paroli** faqat Telegram ilovasining o‘z oynasiga kiritiladi. Uni bot, «yordamchi», admin yoki saytga yozmang.
- **«Beta funksiyani hozir yoqib beramiz»** degan taklif firibgarlik belgisi. Ayniqsa buning uchun kod, parol yoki seed so‘rashsa.
- **Seed ibora** hech kimga yuborilmaydi: na qo‘llab-quvvatlashga, na «tekshiruvchi»ga.
- **Domen.** Faqat fragment.com domenini oching. Harflari o‘xshash nusxa saytlardan ehtiyot bo‘ling.
- **Login kodi.** Telegram’dan kelgan kirish kodini hech kimga bermang. Premiumtg kabi xizmatlar Premium yuborish uchun ham faqat username so‘raydi, kod yoki parol so‘ramaydi.

Notanish havola kelganda nima qilish kerakligini [shubhali havolalar haqidagi maqolada](/blog/telegram-shubhali-havola-akkaunt-bloklanishi) o‘qing.

## Ko‘p so‘raladigan savollar

### Oddiy (kolleksion bo‘lmagan) sovg‘ani TON hamyonga o‘tkazsa bo‘ladimi?

Yo‘q, blokcheynga faqat kolleksion sovg‘a chiqariladi. Oddiy sovg‘ani avval Stars to‘lab upgrade qilish kerak, shundan keyingina blokcheyn orqali o‘tkazish mumkin bo‘ladi.

### Sovg‘ani hamyonga chiqarish uchun nega 2FA paroli so‘raladi?

Telegram texnik hujjatiga ko‘ra, chiqarish jarayoni egasining ikki bosqichli parolini talab qiladi. Amalda bu qo‘shimcha himoya qatlami bo‘lib xizmat qiladi: 2FA yoqilmagan bo‘lsa, chiqarish bosqichidan o‘tolmaysiz.

### Sovg‘a TON hamyonda bo‘lsa, Telegram profilimda ko‘rinadimi?

Ko‘rinishi mumkin: Telegram hujjatida TON’dagi sovg‘ani profilda ko‘rsatish holati tasvirlangan. Bunda ham egalik hamyon manzilida qoladi.

### Telegram akkauntimni o‘chirsam, blokcheyndagi sovg‘a nima bo‘ladi?

Telegram blogiga ko‘ra, akkaunt o‘chirilsa yoki unga kirish yo‘qolsa ham blokcheyndagi sovg‘a ustidan nazorat egasida qoladi. Buning uchun hamyon kalitlari sizda saqlangan bo‘lishi kerak.

### Fragment’siz to‘g‘ridan-to‘g‘ri hamyonga o‘tkazish qachon chiqadi?

Noma’lum. Bu haqda faqat beta versiyalarni kuzatuvchi kanallar yozgan, Telegram esa buni rasman e’lon qilmagan.

### Sovg‘ani chiqarish necha TON yoki Stars turadi?

Upgrade uchun oz miqdorda Stars olinadi va u blokcheyn to‘lovlarini qoplaydi. Chiqarishning TON’dagi narxi rasmiy manbada yo‘q. Agar to‘lov bo‘lsa, uni jarayon ekranida ko‘rasiz.

### «Hozircha chiqarib bo‘lmaydi» degan yozuv nimani anglatadi?

Ayrim sovg‘alarni TON’ga chiqarish belgilangan vaqtgacha yopiq turadi. O‘sha vaqt kelgach, egasi sovg‘ani odatiy tartibda chiqara oladi.`,
    ru: `## Можно ли перевести подарок Telegram на TON-кошелёк?

Да, но только **коллекционный (NFT) подарок**. Блог Telegram сообщает, что коллекционные подарки, как и коллекционные юзернеймы и номера, можно передать другому владельцу или выставить на аукцион через блокчейн TON ([блог Telegram](https://telegram.org/blog/wear-gifts-blockchain-and-more)).

Обычный подарок в блокчейн напрямую не выводится. Сначала его нужно превратить в коллекционный, то есть улучшить (upgrade). По данным Telegram, улучшение стоит небольшое количество Stars, и эти Stars идут на оплату блокчейн-комиссий ([анонс Collectible Gifts](https://telegram.org/blog/collectible-gifts-and-more)). Точную сумму в Stars вы увидите в окне улучшения.

Чем коллекционный подарок отличается от обычного, подробно описано в [статье об NFT-подарках](/blog/telegram-nft-sovgalar).

## Зачем выводить подарок в блокчейн?

Пока подарок лежит внутри Telegram, он привязан к вашему аккаунту. После вывода на TON-кошелёк ситуация меняется:

- **Постоянный контроль.** По словам Telegram, контроль над подарком остаётся у вас, даже если вы потеряете доступ к аккаунту или удалите его.
- **Внешние сервисы.** Подарок на TON-кошельке можно подключить к сторонним сервисам, например к аукционным площадкам.
- **Показ в профиле.** Согласно технической документации, если вы показываете TON-подарок в профиле Telegram, владение всё равно остаётся за TON-кошельком ([документация Telegram Gifts](https://core.telegram.org/api/gifts)). Как настроить, кто видит подарки в профиле, рассказано [в этой статье](/blog/telegram-nft-sovga-egasi-yashirin).
- **Ответственность тоже растёт.** Раз владение закреплено за адресом кошелька, безопасность подарка теперь зависит от ключей кошелька. Потеряете секретную фразу — можете потерять и доступ к подарку.

Если выводите подарок ради продажи, сначала сравните [внутренний рынок и внешние маркетплейсы](/blog/telegram-nft-sovga-sotish-marketpleys). У каждого варианта свои условия.

## Хранение в Telegram и вывод на TON-кошелёк: в чём разница?

| Параметр | Внутри Telegram | На TON-кошельке |
|---|---|---|
| К чему привязано владение | К аккаунту Telegram | К адресу TON-кошелька |
| Если потерян доступ к аккаунту | Подарок остаётся внутри аккаунта | По данным Telegram, контроль остаётся у вас |
| Внешние аукционные площадки | В официальном блоге не упоминаются | Можно подключить через кошелёк |
| Показ в профиле | Возможен | Возможен, владение остаётся за кошельком |
| На чём держится безопасность | Защита аккаунта Telegram: код входа и 2FA | Секретная фраза кошелька (seed) |

Если вы хотите просто показывать подарок в профиле или передарить его другу, с выводом торопиться не стоит. Вывод нужен в первую очередь для работы с внешними сервисами и самостоятельного хранения.

Порядок возврата подарка с кошелька обратно в Telegram в этой статье не подтверждён. Если это понадобится, уточняйте условия на самом Fragment.

## Как сейчас вывести подарок на TON-кошелёк?

Официальные источники описывают такой путь: вы запускаете вывод в приложении Telegram, подтверждаете его паролем 2FA и импортируете подарок на свой кошелёк через Fragment. Согласно технической документации, вывод требует пароль двухэтапной аутентификации текущего пользователя и возвращает ссылку для импорта NFT на Fragment ([Telegram Gifts](https://core.telegram.org/api/gifts), [StarGiftWithdrawalUrl](https://core.telegram.org/type/payments.StarGiftWithdrawalUrl)).

1. **Включите облачный пароль.** Проверьте в настройках Telegram, что двухэтапная аутентификация (2FA) включена. Без пароля этап вывода не пройти.
2. **Подготовьте TON-кошелёк.** Запишите секретную фразу (seed) на бумаге и храните её в надёжном месте.
3. **Откройте подарок.** В разделе подарков своего профиля выберите коллекционный подарок и найдите вариант передачи через блокчейн. Название кнопки может отличаться в зависимости от версии приложения, поэтому ориентируйтесь на надписи на экране.
4. **Введите пароль 2FA.** Вводите его только в окне самого приложения Telegram.
5. **Откройте ссылку на Fragment.** Процесс перенаправит вас на [Fragment](https://fragment.com). Проверьте, что в адресной строке браузера стоит именно домен fragment.com.
6. **Подключите кошелёк и импортируйте.** На Fragment подключите свой TON-кошелёк и подтвердите импорт. Если появятся условия или оплата, прочитайте их до подтверждения.
7. **Проверьте результат.** Убедитесь, что подарок появился именно на том кошельке, который вы подключили.

> Ответы на вопросы о входе на Fragment и верификации — в [статье о KYC на Fragment](/blog/fragment-kyc-verifikatsiya-bekor-qilindi).

## Нет кнопки вывода или подарок не выводится: причины

| Признак | Возможная причина | Что делать |
|---|---|---|
| Варианта передачи через блокчейн нет совсем | Подарок не улучшен до коллекционного | Сначала сделайте upgrade, затем попробуйте снова |
| Написано, что подарок пока нельзя вывести | Некоторые подарки можно вывести в TON только позже | Дождитесь указанного времени |
| Процесс останавливается на этапе пароля | 2FA не включена или пароль неверный | Включите 2FA, проверьте пароль |
| Непонятны условия на Fragment | Точная цена и сроки в официальных источниках не опубликованы | Читайте условия на экране Fragment |

Вторая строка опирается на техническую документацию: некоторые подарки пока нельзя вывести в блокчейн TON, владелец сможет сделать это после указанного времени ([savedStarGift](https://core.telegram.org/constructor/savedStarGift)).

Точная стоимость вывода в TON и время ожидания в официальных источниках не найдены. Поэтому не доверяйте готовым цифрам вроде «вывод стоит столько-то»: окончательные условия вы увидите только на экране процесса.

## Функция «напрямую на кошелёк без Fragment» — правда?

Эта информация разошлась из Telegram-каналов, которые следят за бета-версиями (TBetaLeak, @villageton). По их словам, в бета-версии приложения появилась возможность выводить подарок прямо на кошелёк, минуя Fragment.

Официально Telegram об этом не объявлял. В технической документации такого способа пока тоже нет.

> Вывод без Fragment официально не подтверждён. В официальной документации вывод описан через ссылку для импорта на Fragment.

В тех же каналах упоминались и другие изменения профиля, но официального источника не нашлось и для них. Функции из беты иногда выходят в изменённом виде, а иногда не выходят вовсе.

Практический вывод: если подарок нужно вывести сейчас, официальный путь — импорт через Fragment. Если срочности нет, подарок может спокойно оставаться в Telegram. Следите за официальными анонсами в [блоге telegram.org](https://telegram.org/blog).

## Какой кошелёк выбрать и на что обратить внимание?

Подарок уходит на TON-кошелёк, и владение закрепляется за адресом этого кошелька. Значит, выбор кошелька — это по сути выбор способа хранения подарка.

- **Секретная фраза.** Потеря seed-фразы может обернуться потерей подарка. Храните её офлайн, а не на скриншоте или в облачных заметках.
- **Адрес.** Во время импорта проверьте, какой кошелёк подключён. Может случайно подключиться кошелёк с другого устройства или старый.
- **Telegram Wallet.** Условия открытия и наличие платы смотрите в [статье о Wallet](/blog/telegram-wallet-hamyon-ochish-faollashtirish).
- **Сторонние сайты.** Telegram говорит, что подарок можно подключать к аукционным площадкам, но их надёжность в официальных источниках не оценивается. Проверяйте каждый сайт отдельно.

## Как не попасться мошенникам при выводе подарка?

У NFT-подарков есть реальная стоимость, поэтому они могут стать мишенью мошенников. Слухи о бета-функциях дают им удобный повод.

- **Пароль 2FA** вводится только в окне самого приложения Telegram. Не пишите его боту, «помощнику», админу или на сайте.
- **«Включим бета-функцию прямо сейчас»** — признак мошенничества. Особенно если за это просят код, пароль или seed-фразу.
- **Seed-фразу** никому не отправляют: ни поддержке, ни «проверяющему».
- **Домен.** Открывайте только fragment.com. Остерегайтесь сайтов-двойников с похожими буквами в адресе.
- **Код входа.** Никому не сообщайте код, пришедший от Telegram. Сервисы вроде Premiumtg даже для отправки Premium просят только юзернейм, без кода и пароля.

Что делать, если пришла незнакомая ссылка, читайте в [статье о подозрительных ссылках](/blog/telegram-shubhali-havola-akkaunt-bloklanishi).

## Часто задаваемые вопросы

### Можно ли перевести на TON-кошелёк обычный, не коллекционный подарок?

Нет, в блокчейн выводятся только коллекционные подарки. Обычный подарок сначала нужно улучшить за Stars — только после этого появится возможность передать его через блокчейн.

### Почему для вывода подарка на кошелёк запрашивают пароль 2FA?

Согласно технической документации Telegram, процесс вывода требует облачный пароль владельца. На практике это дополнительный уровень защиты: без включённой 2FA этап вывода не пройти.

### Будет ли подарок на TON-кошельке виден в моём профиле Telegram?

Может быть виден: в документации Telegram описан показ TON-подарка в профиле. Владение при этом всё равно остаётся за адресом кошелька.

### Что будет с подарком в блокчейне, если я удалю аккаунт Telegram?

По данным блога Telegram, контроль над подарком в блокчейне сохраняется за владельцем даже при удалении аккаунта или потере доступа к нему. Главное условие — ключи от кошелька должны остаться у вас.

### Когда появится вывод напрямую на кошелёк без Fragment?

Неизвестно. Об этом писали только каналы, отслеживающие бета-версии, а Telegram официально такую функцию не анонсировал.

### Сколько TON или Stars стоит вывод подарка?

За улучшение берётся небольшое количество Stars, которые покрывают блокчейн-комиссии. Стоимости вывода в TON в официальных источниках нет — если оплата потребуется, вы увидите её на экране процесса.

### Что означает надпись «пока нельзя вывести»?

Для некоторых подарков вывод в TON закрыт до определённого времени. Когда этот срок наступит, владелец сможет вывести подарок в обычном порядке.`,
  },
};
