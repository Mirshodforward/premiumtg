// Avtoblogyoz yasagan maqola (2026-11-08). Niyat: NFT sovg'alarni Getgems'da sotadigan yoki sotib oladigan o'zbek Telegram foydalanuvchisi VPN yoqilganda chiqadigan «Kirish taqiqlangan» xatosining sababini va xavfsiz yechimini «Getgems VPN bloklash» deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/collectible-gifts-and-more
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "getgems-vpn-ip-bloklash-kirish-taqiqlangan",
  date: "2026-11-08",
  reviewed: "2026-11-08",
  category: "stars",
  priority: 0.7,
  title: { uz: "Getgems VPN bilan «Kirish taqiqlangan» deyapti: sababi va nima qilish kerak", ru: "Getgems пишет «Доступ запрещён» с VPN: почему и что делать" },
  excerpt: { uz: `Getgems VPN bilan «Kirish taqiqlangan» deyishining sababi rasman tushuntirilmagan, bu faqat kanallarda aytilgan. VPN’siz sinang, seed-ibora va kodlarni hech kimga bermang.`, ru: `Почему Getgems с VPN выдаёт «Доступ запрещён», официально не объяснено — об этом пишут только каналы. Зайдите без VPN и никому не давайте seed-фразу и коды.` },
  keywords: ["Getgems VPN kirish taqiqlangan","Getgems VPN bloklash","Getgems ochilmayapti","Getgems IP bloklandi","Getgems NFT sovg'a sotish","Telegram NFT sovg'a marketpleys","Getgems доступ запрещён","Getgems VPN блокировка","Getgems блокировка IP","Getgems не открывается","продать подарок Telegram Getgems"],
  related: ["telegram-nft-sovga-sotish-marketpleys","telegram-nft-sovga-ton-hamyonga-otkazish","telegram-ishlamayapti-nima-qilish-proksi","telegram-nft-sovgalar"],
  sources: [{"url":"https://telegram.org/blog/collectible-gifts-and-more","title":"Collectible Gifts, Message Search Filters and More"},{"url":"https://telegram.org/blog/wear-gifts-blockchain-and-more","title":"Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More"}],
  content: {
    uz: `## Getgems VPN bilan ochilmayapti — bu rasman tasdiqlanganmi?

Getgems’ga VPN orqali kirganda «Kirish taqiqlangan» yozuvi chiqishi haqida hozircha faqat norasmiy Telegram kanallaridagi postlar bor. Getgems yoki Telegram’ning bu borada rasmiy bayonoti topilmadi. Shuning uchun bloklashning aniq sababi ham noma’lum.

Kanallarda yozilishicha, ayrim foydalanuvchilar VPN yoqilgan holda saytni ochganda cheklovga duch kelgan. Sabab nimada ekani rasman tushuntirilmagan. Bu VPN serverining o‘zi, IP manzil yoki mintaqaga oid cheklov bo‘lishi mumkin. Taxminlarni fakt sifatida yozmaymiz.

Yana bir detal: Telegram rasmiy blogi Getgems’ni nomi bilan tilga olmaydi. U faqat kolleksion sovg‘alarni NFT marketpleyslarda auksionga qo‘yish mumkinligini aytadi ([Telegram blogi](https://telegram.org/blog/collectible-gifts-and-more)).

> Getgems’ning foydalanish shartlari, cheklangan mamlakatlar ro‘yxati va VPN’ga munosabati bu maqolada tekshirilmagan. Bu ma’lumotni saytning o‘zidagi hujjatlardan o‘qing.

## Getgems va Telegram NFT sovg‘alari qanday bog‘langan?

Telegram’dagi sovg‘ani kolleksion (NFT) sovg‘aga aylantirish mumkin. Rasmiy blogga ko‘ra, kolleksion sovg‘alarning maxsus atributlari bor. Ularni boshqa foydalanuvchilarga berish yoki NFT marketpleyslarda auksionga qo‘yish mumkin. Kolleksionga aylantirishda oz miqdorda Stars olinadi. Bu Stars blokcheyn to‘lovlarini qoplashga ketadi.

Keyingi yangilanishda Telegram sovg‘alarni TON blokcheyni orqali o‘tkazish va auksionga qo‘yish imkonini e’lon qildi ([Telegram blogi](https://telegram.org/blog/wear-gifts-blockchain-and-more)). Sovg‘a TON hamyonga o‘tkazilgach, uni tashqi xizmatlarga ulash mumkin. Bular auksion saytlari yoki kolleksiyalar uchun qo‘shimcha imtiyoz beradigan platformalar bo‘lishi mumkin.

Getgems foydalanuvchilar orasida shunday tashqi platformalardan biri sifatida tilga olinadi. Lekin u Telegram’ning rasmiy sahifalarida ko‘rsatilmagan. Ya’ni saytdagi qoidalar, cheklovlar va yordam xizmati Telegram’ning o‘z xizmati emas.

Kolleksion sovg‘a nima ekanini [NFT sovg‘alar haqidagi maqolada](/blog/telegram-nft-sovgalar) o‘qishingiz mumkin. Sotish yo‘llari esa [ichki bozor va marketpleys taqqoslamasida](/blog/telegram-nft-sovga-sotish-marketpleys) yozilgan.

## «Kirish taqiqlangan» chiqsa, sovg‘am yoki pulim yo‘qoladimi?

Saytning ochilmasligi aktiv yo‘qolganini anglatmaydi. Blokcheynga o‘tkazilgan sovg‘a marketpleys sahifasiga emas, hamyoningizga bog‘langan.

Telegram buni aniq yozadi: sovg‘a blokcheynga o‘tkazilsa, egasi uning ustidan doimiy nazoratni saqlab qoladi. Egasi Telegram akkauntiga kira olmay qolsa yoki uni o‘chirsa ham shunday bo‘ladi. Demak, asosiy kalit — sayt emas, hamyon.

Bundan amaliy xulosa:

- tiklash so‘zlari (seed-ibora) xavfsiz joyda va faqat sizda saqlansin;
- hamyonning o‘zi bitta saytning ochilish-ochilmasligiga bog‘liq emas;
- tranzaksiyani TON eksplorerda hamyon manzili yoki tranzaksiya xeshi orqali tekshirsa bo‘ladi. Bu haqda [TON eksplorer haqidagi maqolada](/blog/gram-org-ton-eksplorer-rasmiymi) yozilgan.

Sovg‘ani savdoga qo‘ygan bo‘lsangiz va sayt ochilmay qolsa, lot holati marketpleysning o‘z qoidalariga bog‘liq. Bu qoidalar biz tomondan tekshirilmagan. Shoshilib boshqa joyda qayta sotishga urinmang. Avval sayt ochilganda lot holatini ko‘ring.

## Muammo VPN’dami yoki boshqa joydami: qanday farqlash mumkin?

Bir xil «Kirish taqiqlangan» yozuvi turli sabablardan chiqishi mumkin. Shuning uchun yechim izlashdan oldin belgilarga qarang. Quyidagi jadval umumiy tarmoq tajribasiga asoslangan. U Getgems’ning rasmiy tushuntirishi emas.

| Belgi | Ehtimoliy sabab | Nimadan boshlash kerak |
|---|---|---|
| Faqat VPN yoqilganda chiqadi | VPN serverining IP manzili bilan bog‘liq cheklov | VPN’ni o‘chirib yoki serverni almashtirib sinang |
| VPN’siz ham, barcha tarmoqlarda ham chiqadi | Sayt tomonidagi cheklov yoki texnik muammo | Kuting, saytning o‘zidagi e’lonlarni kuzating |
| Faqat bitta brauzerda chiqadi | Kesh, cookie yoki kengaytma ta’siri | Keshni tozalang, boshqa brauzerni sinang |
| Telegram ham sekin ishlayapti | Umumiy internet muammosi | Tarmoqni almashtiring, Telegram holatini tekshiring |

Agar xato faqat bitta holatda takrorlansa, sababni toraytirish osonlashadi. Natijani yozib qo‘ying: yordamga murojaat qilganda bu foydali bo‘ladi.

## Xato chiqqanda qadamma-qadam nima qilish kerak?

Quyidagi qadamlar — umumiy tarmoq va xavfsizlik maslahati. Ular Getgems’ning rasmiy tavsiyasi emas.

1. VPN’ni vaqtincha o‘chiring va sahifani qayta yuklang. Ochilmasa, boshqa tarmoqni sinang: mobil internet yoki Wi-Fi.
2. VPN kerak bo‘lsa, boshqa serverni tanlab ko‘ring. Natija o‘zgarsa, muammo aynan o‘sha server IP’siga bog‘liq bo‘lishi mumkin.
3. Brauzer keshi va cookie’larni tozalang. Boshqa brauzer yoki qurilmada ochib ko‘ring.
4. Manzilni tekshiring. Qidiruvdagi reklama havolasidan yoki kanaldagi referal havoladan kirmang. O‘zingiz avval saqlagan manzildan foydalaning.
5. Hamyonni faqat tanish sahifada ulang. Ulanish so‘rovida ko‘rsatilgan domen nomini o‘qib chiqing.
6. Muammo davom etsa, yordamga faqat saytning o‘zidagi aloqa havolasi orqali murojaat qiling.

Telegram’ning o‘zi ham sekin ishlayotgan bo‘lsa, muammo umumiy internetda bo‘lishi mumkin. Bunday holat uchun [Telegram ishlamaganda nima qilish haqidagi qo‘llanma](/blog/telegram-ishlamayapti-nima-qilish-proksi) foydali.

## Yordam botiga IP manzil yuborish xavflimi?

Kanal postida bloklovni olib tashlash uchun IP manzilni qo‘llab-quvvatlash botiga yuborish taklif qilinayotgani aytiladi. Getgems haqiqatan shunday so‘rashi rasman tasdiqlanmagan.

IP manzilning o‘zi hamyonni ochmaydi va akkauntga kirish imkonini bermaydi. U taxminiy joylashuvingiz va internet provayderingizni ko‘rsatishi mumkin. Asosiy xavf keyingi qadamlarda: soxta «support» botlar suhbatni IP’dan boshlab, keyin boshqa narsalarni so‘rashi mumkin.

Hech qachon hech kimga bermang:

- hamyonning tiklash so‘zlari (seed-ibora);
- hamyon paroli yoki PIN-kodi;
- Telegram login kodi;
- ikki bosqichli tekshiruv (2FA) paroli;
- «tekshiruv uchun» deb so‘ralgan tranzaksiyaga imzo.

Bot username’ini saytning o‘zidagi havola bilan solishtiring. Shaxsiy xabarga o‘zi birinchi yozgan «yordam xizmati»ning firibgar bo‘lish ehtimoli yuqori. Notanish kod so‘rovlari kelsa, [akkauntni himoyalash bo‘yicha qo‘llanma](/blog/888-raqam-login-kodi-sorovlari-himoya)dagi qadamlarni bajaring.

## VPN, bepul proksi yoki boshqa marketpleys: qaysi biri xavfsizroq?

Xatoga duch kelgan foydalanuvchi odatda bir nechta yo‘lni ko‘radi. Ularning har birida o‘z foydasi va xavfi bor.

| Variant | Foydasi | Xavfi |
|---|---|---|
| VPN’siz kirish | Eng sodda yo‘l, IP bilan bog‘liq sababni istisno qiladi | Boshqa tarmoq muammosi bo‘lsa, yordam bermasligi mumkin |
| Boshqa VPN server | Muammo serverda bo‘lsa, hal bo‘lishi mumkin | Natija oldindan ma’lum emas |
| Kanallarda reklama qilingan VPN va proksi botlari | Tez ulanish va’da qilinadi | Trafik noma’lum xizmat orqali o‘tadi, raqam yoki kod so‘ralishi mumkin |
| Boshqa marketpleysga o‘tish | Bitta saytga bog‘lanib qolmaysiz | Yangi saytning qoidalari va xavfsizligini qaytadan tekshirish kerak |
| Telegram ichida o‘tkazish | Tashqi sayt kerak emas | Faqat Telegram imkoniyatlari doirasida ishlaydi |

Kanal postlarida ko‘pincha muallifning o‘z VPN boti va boshqa marketpleysning referal havolasi turadi. Bu mustaqil tavsiya emas, reklama. Bunday havolani bosishdan oldin xizmatni o‘zingiz tekshiring.

Telegram ichida kolleksion sovg‘alarni boshqa foydalanuvchilar bilan darhol almashish mumkin. Maqsad sovg‘ani tanish odamga berish bo‘lsa, tashqi saytga umuman ehtiyoj qolmaydi.

Tashqi marketpleyslar Telegram’ning rasmiy xizmati emas. Telegram ularning xavfsizligiga kafolat bergani ma’lum emas.

## Sovg‘ani Getgems’ga chiqarishdan oldin nimalarni bilish kerak?

Tashqi marketpleysga faqat kolleksion (NFT) sovg‘ani chiqarish mumkin. Oddiy sovg‘a avval kolleksionga aylantirilishi kerak.

Telegram ko‘rsatgan yo‘l:

1. **My Profile > Gifts** bo‘limini oching.
2. Kerakli sovg‘ani tanlang.
3. **Transfer > Send via Blockchain** tugmalarini bosing.
4. Keyingi ko‘rsatmalarni ilova ekranidan diqqat bilan o‘qib, bajaring.

Batafsil jarayon va Fragment bilan bog‘liq qadamlar [sovg‘ani TON hamyonga o‘tkazish maqolasida](/blog/telegram-nft-sovga-ton-hamyonga-otkazish) yozilgan.

O‘tkazishdan oldin hamyon manzilini kamida ikki marta solishtiring. Umumiy qoida sifatida blokcheyndagi o‘tkazmani bekor qilib bo‘lmaydi deb hisoblang.

Saytga kirishda muammo bo‘lib turgan paytda qimmat lotni shoshilib qo‘ymang. Avval hamyon ulanishi va sahifa barqaror ishlashini tekshiring. Shundan keyingina savdoga o‘ting.

## Ko‘p so‘raladigan savollar

### Getgems O‘zbekistonda bloklanganmi?

Buni tasdiqlaydigan rasmiy ma’lumot topilmadi. Cheklangan mamlakatlar ro‘yxatini Getgems’ning foydalanish shartlaridan o‘zingiz o‘qib ko‘ring.

### VPN o‘chirilgandan keyin ham «Kirish taqiqlangan» chiqsa nima qilaman?

Unda sabab VPN’da bo‘lmasligi mumkin. Mobil internet va Wi-Fi’ni almashtirib ko‘ring, keyin boshqa brauzerni sinang. Natija o‘zgarmasa, saytning o‘zidagi aloqa havolasi orqali yozing.

### Getgems support IP manzilimni so‘rasa, berishim kerakmi?

Getgems IP so‘rashi rasman tasdiqlanmagan. Avval botning haqiqiyligini saytdagi havola bilan solishtiring. Suhbatda seed-ibora, parol, kod yoki imzo so‘ralsa, darhol to‘xtating.

### Sayt ochilmasa, Getgems’ga qo‘ygan NFT sovg‘am yo‘qolib qoladimi?

Telegram blogiga ko‘ra, blokcheyndagi sovg‘a ustidan nazorat hamyon egasida qoladi. Savdodagi lot bilan nima bo‘lishini esa marketpleysning o‘z qoidalari belgilaydi.

### NFT sovg‘ani Getgems’siz sotish mumkinmi?

Ha, Telegram’da kolleksion sovg‘ani boshqa foydalanuvchiga o‘tkazish va ichki bozorda sotish yo‘llari bor. Boshqa tashqi marketpleys tanlasangiz, uning shartlarini alohida o‘rganing.

### Kanallarda reklama qilingan VPN botlariga ishonsa bo‘ladimi?

Bunday botlar ko‘pincha post muallifining reklamasi bo‘ladi. Telefon raqami, login kodi yoki parol talab qiladigan VPN va proksi xizmatlariga ulanmang.

### Getgems Telegram’ning rasmiy marketpleysimi?

Telegram’ning rasmiy sahifalarida Getgems nomi uchramaydi. Telegram faqat kolleksion sovg‘alar tashqi NFT marketpleyslarda auksionga qo‘yilishi mumkinligini aytadi.`,
    ru: `## Getgems не открывается с VPN — это официально подтверждено?

О том, что при входе на Getgems через VPN появляется надпись «Доступ запрещён», пока пишут только неофициальные Telegram-каналы. Официального заявления Getgems или Telegram на этот счёт найти не удалось. Поэтому точная причина блокировки тоже неизвестна.

По словам каналов, некоторые пользователи столкнулись с ограничением, когда открывали сайт с включённым VPN. Почему так происходит, официально не объяснено. Причиной может быть сам VPN-сервер, IP-адрес или региональное ограничение. Догадки мы не выдаём за факты.

Ещё одна деталь: официальный блог Telegram не называет Getgems по имени. В нём сказано лишь, что коллекционные подарки можно выставлять на аукцион на NFT-маркетплейсах ([блог Telegram](https://telegram.org/blog/collectible-gifts-and-more)).

> Условия использования Getgems, список стран с ограничениями и отношение площадки к VPN в этой статье не проверялись. Эту информацию читайте в документах на самом сайте.

## Как связаны Getgems и NFT-подарки Telegram?

Обычный подарок в Telegram можно превратить в коллекционный (NFT). Согласно официальному блогу, у коллекционных подарков есть особые атрибуты. Их можно передать другим пользователям или выставить на аукцион на NFT-маркетплейсах. За улучшение подарка списывается небольшое количество Stars — они идут на покрытие комиссий блокчейна.

В следующем обновлении Telegram объявил, что подарки можно передавать и выставлять на аукцион через блокчейн TON ([блог Telegram](https://telegram.org/blog/wear-gifts-blockchain-and-more)). Когда подарок перемещён в TON-кошелёк, его можно подключить к внешним сервисам. Это могут быть аукционные сайты или платформы, которые дают дополнительные бонусы владельцам коллекций.

Getgems пользователи упоминают как одну из таких внешних площадок. Но на официальных страницах Telegram она не указана. Значит, правила, ограничения и поддержка сайта — это не сервис самого Telegram.

Что такое коллекционный подарок, читайте в [статье об NFT-подарках](/blog/telegram-nft-sovgalar). Способы продажи описаны в [сравнении внутреннего рынка и маркетплейсов](/blog/telegram-nft-sovga-sotish-marketpleys).

## Если появилось «Доступ запрещён», пропадёт ли мой подарок или деньги?

То, что сайт не открывается, не означает потерю актива. Подарок, перемещённый в блокчейн, привязан не к странице маркетплейса, а к вашему кошельку.

Telegram пишет об этом прямо: если подарок перемещён в блокчейн, владелец сохраняет над ним постоянный контроль. Даже если он потеряет доступ к аккаунту Telegram или удалит его. Получается, главный ключ — не сайт, а кошелёк.

Практический вывод:

- храните фразу восстановления (seed-фразу) в надёжном месте и только у себя;
- сам кошелёк не зависит от того, открывается ли какой-то один сайт;
- транзакцию можно проверить в TON-эксплорере по адресу кошелька или хешу транзакции. Подробнее — в [статье о TON-эксплорере](/blog/gram-org-ton-eksplorer-rasmiymi).

Если вы выставили подарок на продажу, а сайт перестал открываться, судьба лота зависит от правил самого маркетплейса. Мы эти правила не проверяли. Не спешите перепродавать подарок в другом месте. Сначала посмотрите статус лота, когда сайт снова откроется.

## Проблема в VPN или в чём-то другом: как отличить?

Одна и та же надпись «Доступ запрещён» может появляться по разным причинам. Поэтому прежде чем искать решение, обратите внимание на признаки. Таблица ниже основана на общем сетевом опыте. Это не официальное объяснение Getgems.

| Признак | Возможная причина | С чего начать |
|---|---|---|
| Появляется только с включённым VPN | Ограничение, связанное с IP-адресом VPN-сервера | Отключите VPN или смените сервер |
| Появляется и без VPN, и во всех сетях | Ограничение или техническая проблема на стороне сайта | Подождите, следите за объявлениями на самом сайте |
| Появляется только в одном браузере | Влияние кеша, cookie или расширения | Очистите кеш, попробуйте другой браузер |
| Telegram тоже работает медленно | Общая проблема с интернетом | Смените сеть, проверьте работу Telegram |

Если ошибка повторяется только в одной ситуации, сузить причину проще. Запишите результат: он пригодится при обращении в поддержку.

## Что делать при ошибке: пошагово

Шаги ниже — общие советы по сети и безопасности. Это не официальные рекомендации Getgems.

1. Временно отключите VPN и перезагрузите страницу. Если не открывается, попробуйте другую сеть: мобильный интернет или Wi-Fi.
2. Если VPN нужен, выберите другой сервер. Если результат изменился, проблема, вероятно, связана с IP именно того сервера.
3. Очистите кеш и cookie браузера. Откройте сайт в другом браузере или на другом устройстве.
4. Проверьте адрес. Не заходите по рекламной ссылке из поиска или по реферальной ссылке из канала. Пользуйтесь адресом, который вы сохранили заранее.
5. Подключайте кошелёк только на знакомой странице. Внимательно прочитайте домен, указанный в запросе на подключение.
6. Если проблема не уходит, пишите в поддержку только по контактной ссылке на самом сайте.

Если медленно работает и сам Telegram, дело может быть в интернете в целом. Для такого случая пригодится [инструкция о том, что делать, если Telegram не работает](/blog/telegram-ishlamayapti-nima-qilish-proksi).

## Опасно ли отправлять IP-адрес боту поддержки?

В посте канала говорится, что для снятия блокировки предлагают отправить IP-адрес боту поддержки. Что Getgems действительно так делает, официально не подтверждено.

Сам по себе IP-адрес не открывает кошелёк и не даёт доступа к аккаунту. Он может показать примерное местоположение и вашего интернет-провайдера. Главный риск — в следующих шагах: поддельные боты «поддержки» могут начать разговор с IP, а потом попросить что-то ещё.

Никогда и никому не передавайте:

- фразу восстановления кошелька (seed-фразу);
- пароль или PIN-код кошелька;
- код входа в Telegram;
- пароль двухэтапной проверки (2FA);
- подпись транзакции «для проверки».

Сверяйте username бота со ссылкой на самом сайте. «Служба поддержки», которая первой пишет вам в личные сообщения, с большой вероятностью мошенническая. Если приходят запросы кода, которых вы не делали, выполните шаги из [инструкции по защите аккаунта](/blog/888-raqam-login-kodi-sorovlari-himoya).

## VPN, бесплатный прокси или другой маркетплейс: что безопаснее?

Столкнувшись с ошибкой, пользователь обычно видит несколько вариантов. У каждого свои плюсы и риски.

| Вариант | Плюс | Риск |
|---|---|---|
| Вход без VPN | Самый простой путь, исключает причину, связанную с IP | Не поможет, если проблема в другой сети |
| Другой VPN-сервер | Может помочь, если проблема в сервере | Результат заранее неизвестен |
| VPN- и прокси-боты из рекламы в каналах | Обещают быстрое подключение | Трафик идёт через неизвестный сервис, могут попросить номер или код |
| Переход на другой маркетплейс | Нет привязки к одному сайту | Правила и безопасность нового сайта нужно проверять заново |
| Передача внутри Telegram | Внешний сайт не нужен | Работает только в рамках возможностей Telegram |

В постах каналов часто стоят собственный VPN-бот автора и реферальная ссылка на другой маркетплейс. Это не независимый совет, а реклама. Прежде чем нажимать на такую ссылку, проверьте сервис сами.

Внутри Telegram коллекционными подарками можно мгновенно обмениваться с другими пользователями. Если цель — передать подарок знакомому, внешний сайт вообще не нужен.

Внешние маркетплейсы — не официальный сервис Telegram. О том, что Telegram гарантирует их безопасность, ничего не известно.

## Что нужно знать перед выводом подарка на Getgems?

На внешний маркетплейс можно вывести только коллекционный (NFT) подарок. Обычный подарок сначала нужно улучшить до коллекционного.

Порядок, который указывает Telegram:

1. Откройте раздел **My Profile > Gifts** («Мой профиль > Подарки»).
2. Выберите нужный подарок.
3. Нажмите **Transfer > Send via Blockchain** («Передать > Отправить через блокчейн»).
4. Внимательно прочитайте дальнейшие указания на экране приложения и выполните их.

Подробный процесс и шаги, связанные с Fragment, описаны в [статье о переводе подарка в TON-кошелёк](/blog/telegram-nft-sovga-ton-hamyonga-otkazish).

Перед переводом сверьте адрес кошелька минимум дважды. Как общее правило, считайте, что перевод в блокчейне отменить нельзя.

Пока со входом на сайт есть проблемы, не спешите выставлять дорогой лот. Сначала убедитесь, что кошелёк подключается и страница работает стабильно. Только после этого переходите к торговле.

## Часто задаваемые вопросы

### Getgems заблокирован в Узбекистане?

Официальных данных, которые бы это подтверждали, не нашлось. Список стран с ограничениями ищите в условиях использования Getgems.

### Что делать, если «Доступ запрещён» появляется и после отключения VPN?

Значит, причина может быть не в VPN. Переключитесь между мобильным интернетом и Wi-Fi, затем попробуйте другой браузер. Если ничего не меняется, напишите через контакты на самом сайте.

### Поддержка Getgems просит мой IP-адрес — давать ли его?

То, что Getgems запрашивает IP, официально не подтверждено. Сначала сверьте бота со ссылкой на сайте. Если в переписке просят seed-фразу, пароль, код или подпись — сразу прекращайте общение.

### Если сайт не открывается, пропадёт ли NFT-подарок, выставленный на Getgems?

По данным блога Telegram, контроль над подарком в блокчейне остаётся у владельца кошелька. А что будет с лотом на продаже, определяют правила самого маркетплейса.

### Можно ли продать NFT-подарок без Getgems?

Да, в Telegram коллекционный подарок можно передать другому пользователю или продать на внутреннем рынке. Если выбираете другой внешний маркетплейс, отдельно изучите его условия.

### Можно ли доверять VPN-ботам из рекламы в каналах?

Чаще всего это реклама автора поста. Не подключайтесь к VPN и прокси, которые требуют номер телефона, код входа или пароль.

### Getgems — официальный маркетплейс Telegram?

На официальных страницах Telegram название Getgems не встречается. Telegram лишь сообщает, что коллекционные подарки можно выставлять на аукцион на внешних NFT-маркетплейсах.`,
  },
};
