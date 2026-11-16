// Avtoblogyoz yasagan maqola (2026-11-16). Niyat: Kanalda 200 ta +888 raqam tahdid bilan tortib olingani va ~500 000 $ zarar haqidagi xabarni o‘qigan foydalanuvchi «+888 raqam o‘g‘irlandi rostmi» deb qidiradi. U xabarning rostligini va o‘z anonim raqamini qanday himoya qilishni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/about
//   https://fragment.com/numbers
//   https://telegram.org/blog/ultimate-privacy-topics-2-0
//   https://telegram.org/faq
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "anonim-888-raqamlar-tortib-olindi-rostmi",
  date: "2026-11-16",
  reviewed: "2026-11-16",
  category: "xavfsizlik",
  priority: 0.7,
  title: { uz: "+888 raqam o‘g‘irlandi rostmi? 200 ta raqam haqidagi xabar va himoya", ru: "Украли 200 номеров +888 — правда? Что известно и как защитить номер" },
  excerpt: { uz: `Tasdiqlanmagan: 200 ta +888 raqam tahdid bilan tortib olingani va ~500 000 $ zarar haqida faqat kanal posti yozgan. Fragment va Telegram’ning rasmiy sahifalarida bu voqea yo‘q.`, ru: `Не подтверждено: об изъятии 200 номеров +888 под угрозами и ущербе около 500 000 $ написал только пост в канале. На официальных страницах Fragment и Telegram такого случая нет.` },
  keywords: ["+888 raqam o‘g‘irlandi rostmi","anonim raqam tortib olindi","+888 raqam himoya","Fragment anonim raqam xavfsizlik","+888 raqamni o‘tkazish","Telegram anonim raqam o‘g‘irlash","украли номера +888","анонимные номера +888 угрозы","номер +888 как защитить","Fragment анонимный номер кража","200 номеров +888 500000"],
  related: ["fragment-anonim-raqam-sotish-sotib-olish","888-raqam-login-kodi-sorovlari-himoya","ton-hamyonga-spam-nft-keldi-xavflimi","telegram-nft-sovga-ton-hamyonga-otkazish"],
  sources: [{"url":"https://fragment.com/about","title":"How does Fragment work?"},{"url":"https://fragment.com/numbers","title":"Buy and Sell Collectible Numbers"},{"url":"https://telegram.org/blog/ultimate-privacy-topics-2-0","title":"No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More"},{"url":"https://telegram.org/faq","title":"Telegram FAQ"}],
  content: {
    uz: `## 200 ta +888 raqam tortib olingani rostmi?

Bu xabar tasdiqlanmagan. Telegram kanal postida shunday deyilgan: bir egadan 200 ta anonim +888 raqam tahdid bilan tortib olingan, zarar taxminan 500 000 $ bo‘lgan, raqamlar esa darhol «flordan» arzon sotib yuborilgan. [Fragment](https://fragment.com/about) va [Telegram](https://telegram.org/faq) sahifalarida bunday voqea haqida ma’lumot yo‘q.

Jabrlanuvchi kimligi, qaysi raqamlar olingani va zarar qanday hisoblangani noma’lum. Postda bularni tekshirishga imkon beradigan dalil ko‘rsatilmagan.

Rasmiy manbalardan boshqa narsalarni tekshirsa bo‘ladi: +888 raqam qanday ishlaydi, egalik nimaga bog‘liq va egasi uni qanday himoya qila oladi.

## Kanal posti va rasmiy manbalar: nima tasdiqlangan, nima yo‘q?

| Da’vo | Rasmiy manbada | Holat |
|---|---|---|
| 200 ta raqam tahdid bilan olingan | Yo‘q | Tasdiqlanmagan |
| Zarar taxminan 500 000 $ | Yo‘q | Tasdiqlanmagan |
| Raqamlar «flordan» arzon sotilgan | Rasmiy floor narxi haqida ma’lumot topilmadi | Tasdiqlanmagan |
| Egasi raqamni boshqa odamga o‘tkaza oladi | Ha, TON blokcheyni orqali | Tasdiqlangan |
| Raqam blokcheyndagi hisob orqali Telegram’ga kirish imkonini beradi | Ha | Tasdiqlangan |

Oxirgi ikki qator Fragment’ning [«How does Fragment work?»](https://fragment.com/about) va [Collectible Numbers](https://fragment.com/numbers) sahifalarida yozilgan. Demak, raqamni bir egadan boshqasiga o‘tkazish texnik jihatdan mumkin. Ammo postdagi voqea aynan shunday bo‘lganini birorta rasmiy manba tasdiqlamaydi.

## +888 anonim raqam qanday ishlaydi va nega u hamyonga bog‘liq?

Fragment’ga ko‘ra, Telegram 2022-yil oxirida TON blokcheynida virtual raqamlarni cheklangan miqdorda kolleksiya buyumi sifatida chiqargan. Ularning o‘ziga xos jihatlari:

- Jami 136 566 ta raqam chiqarilgan va ular 2022-yil dekabrida sotilib tugagan.
- Telegram [rasmiy blogida](https://telegram.org/blog/ultimate-privacy-topics-2-0) ular blokcheynga asoslangan anonim raqamlar deb atalgan. Ular bilan SIM-kartasiz akkaunt ochish mumkin.
- Kirish kodi SMS orqali kelmaydi, Fragment saytida ko‘rinadi. Kodni ko‘rish uchun hamyonni Fragment’ga ulash kerak.
- Raqam oddiy SMS va qo‘ng‘iroqlarni qabul qilmaydi, faqat Telegram’da ishlaydi.
- Yangi raqamlar sotuvga chiqmaydi: hozir ularni faqat mavjud egasidan sotib olish mumkin.

Shu sababli +888 raqamning «kaliti» SIM-karta emas, TON hamyon. Raqam qanday sotib olinishi va sotilishi haqida batafsil: [Fragment’da +888 raqam olish va sotish](/blog/fragment-anonim-raqam-sotish-sotib-olish).

## Raqamni «tortib olish» texnik jihatdan qanday bo‘lishi mumkin?

Egalik hamyonda saqlanadi. Fragment’ning yozishicha, kolleksiya buyumining har qanday egasi uni TON blokcheyni orqali boshqa odamga o‘tkaza oladi. Fragment’dagi login kodlarini ham hamyonni ulagan odam ko‘radi.

Shuning uchun xavf ikki joyda bo‘ladi:

- **Hamyonga kirish:** seed-ibora yoki hamyon ilovasi o‘rnatilgan qurilma.
- **Tranzaksiyani tasdiqlash:** egasining o‘zi «Tasdiqlash» tugmasini bosishi.

Birinchi holatda o‘g‘ri seed-iborani qo‘lga kiritib, hamyonni o‘zi boshqaradi. Ikkinchi holatda u egani tahdid, aldov yoki «yordam beraman» degan bahona bilan o‘tkazmani tasdiqlashga majburlaydi. Ikkala holatda ham blokcheynda bu oddiy o‘tkazmadek ko‘rinadi.

Yana bir jihati bor. Fragment’ga ko‘ra, egasi raqamni Telegram akkauntiga istalgan vaqtda qo‘shishi va undan olib tashlashi mumkin. Raqam yangi egaga o‘tsa, kirish kodlari endi uning Fragment sahifasida ko‘rinadi. Shunda shu raqamga bog‘langan akkaunt ham xavf ostida qoladi.

Bu umumiy mexanizm. Kanal postidagi voqeada aynan nima bo‘lgani noma’lum.

Hamyonga kelgan shubhali NFT va havolalar ham shunday aldovning bir qismi bo‘lishi mumkin. Bu haqda: [hamyonga noma’lum NFT keldi](/blog/ton-hamyonga-spam-nft-keldi-xavflimi).

## +888 raqamli akkauntni qanday himoya qilaman?

1. Ikki bosqichli tekshiruvni yoqing: Settings > Privacy and Security > 2-Step Verification. [Telegram FAQ](https://telegram.org/faq) ma’lumotiga ko‘ra, shundan keyin kirish uchun koddan tashqari parol ham kerak bo‘ladi.
2. Parolni tiklash uchun email qo‘shing. Telegram eslatganidek, bu email ham kuchli parol bilan himoyalangan bo‘lishi kerak.
3. Settings > Devices (yoki Privacy and Security > Active Sessions) bo‘limini oching va notanish seanslarni tugating.
4. Login kodi va 2FA parolini hech kimga bermang. Telegram ularni hech qachon so‘ramaydi.
5. Hamyonni Fragment’ga faqat manzili [fragment.com](https://fragment.com) ekanini o‘zingiz tekshirgan sahifada ulang.
6. Har bir tranzaksiyani tasdiqlashdan oldin o‘qing: nima yuborilyapti va kimga.
7. Seed-iborani hech kimga ko‘rsatmang, chatga yoki bulutli eslatmalarga yozmang. Bu har qanday kripto hamyon uchun umumiy xavfsizlik qoidasi.

Agar raqamingizga siz so‘ramagan kodlar kelayotgan bo‘lsa, bu boshqa holat: [+888 raqamga login kodi kelyapti](/blog/888-raqam-login-kodi-sorovlari-himoya).

## Qaysi himoya chorasi nimani himoya qiladi?

Ko‘pchilik 2FA parolini yoqsa, hammasi himoyalangan deb o‘ylaydi. Aslida +888 raqam egasida ikkita alohida narsa bor: Telegram akkaunti va raqam turgan hamyon. Har bir chora ulardan faqat bittasini himoya qiladi.

| Chora | Nimani himoya qiladi | Nimani himoya qilmaydi |
|---|---|---|
| 2FA paroli | Akkauntga faqat kod bilan kirishni to‘sadi | Hamyondagi raqamning o‘zini |
| Tiklash emaili | Parol unutilganda kirishni tiklashga yordam beradi | Email zaif parol bilan himoyalangan bo‘lsa, foydasi kam |
| Seanslarni tugatish | Begona qurilmada ochiq qolgan seansni yopadi | Raqam va hamyonni |
| Seed-iborani sir saqlash | Hamyonni begona boshqarishini to‘sadi | Aldov bilan tranzaksiyani o‘zingiz tasdiqlashingizni |
| Tranzaksiyani o‘qib tasdiqlash | Bilmasdan o‘tkazma qilishdan saqlaydi | Seed-ibora allaqachon o‘g‘irlangan holatni |

Xulosasi oddiy: akkaunt uchun 2FA paroli kerak, raqam uchun esa hamyon xavfsizligi. Biri ikkinchisining o‘rnini bosmaydi.

## Kim tahdid qilsa yoki raqamni o‘tkazishni talab qilsa, nima qilish kerak?

- Bosim ostida hech qanday tranzaksiyani tasdiqlamang va hamyonni tahdid qilayotgan odam yuborgan saytga ulamang.
- Yozishmalar, username’lar, skrinshotlar va sizga yuborilgan hamyon manzillarini saqlang.
- Tahdid jiddiy bo‘lsa, huquqni muhofaza qilish organlariga murojaat qiling.
- Telegram nomidan yozib, kod, parol yoki seed-ibora so‘ragan akkauntga ishonmang: Telegram ularni so‘ramaydi.
- Hamyonga kimdir kirgan deb gumon qilsangiz, avval Telegram akkauntini himoyalang: 2FA parolini yoqing va begona seanslarni tugating.

O‘g‘irlangan raqamni qaytarish yoki shikoyat qilishning rasmiy tartibi Fragment va Telegram sahifalarida topilmadi. Shuning uchun oldindan ehtiyot bo‘lish eng ishonchli himoya.

Notanish havolalarni ochishdan oldin ham o‘ylang. Batafsil: [shubhali havola va akkaunt bloklanishi](/blog/telegram-shubhali-havola-akkaunt-bloklanishi).

## Arzon +888 raqam takliflariga ishonsa bo‘ladimi?

Postda raqamlar «flordan arzon» sotilgani aytilgan. Bu da’vo tasdiqlanmagan, ammo bitta xulosa chiqarish mumkin: kelib chiqishi noma’lum arzon aktiv o‘g‘irlangan bo‘lishi mumkin.

- Raqamni hozir faqat mavjud egasidan olish mumkin, shuning uchun savdo Fragment orqali bo‘lishini tekshiring.
- Shaxsiy xabarda «arzon raqam» taklif qilayotgan sotuvchilardan ehtiyot bo‘ling.
- Rasmiy floor narxi haqida ma’lumot topilmadi, shuning uchun «flordan arzon» iborasi aniq o‘lchov emas. Joriy narxlarni Fragment’ning o‘zida ko‘ring.
- Sotuvchi oldindan pul, seed-ibora yoki hamyonni noma’lum saytga ulashni so‘rasa, savdoni to‘xtating.

> «Oraliq vositachi» va hamyondan tashqaridagi shaxsiy o‘tkazmalardan voz keching. Bunday savdoda pul ketsa, uni qaytarishning rasmiy yo‘li topilmagan.

## Shunga o‘xshash xabarni o‘zingiz qanday tekshirasiz?

Kripto va NFT haqidagi shov-shuvli postlar tez tarqaladi. Ishonishdan oldin to‘rt narsaga qarang:

1. Manba: xabar [Telegram blogida](https://telegram.org/blog), [Fragment](https://fragment.com) saytida bormi yoki faqat kanal postidami?
2. Tafsilotlar: kim jabrlangani, qachon va qaysi raqamlar olingani aniq yozilganmi?
3. Summa: zarar qanday hisoblangani ko‘rsatilganmi yoki «taxminan» deyilganmi?
4. Harakat: post sizdan havolani ochish, hamyon ulash yoki «tekshirish uchun» biror narsa yuborishni so‘rayaptimi? Bu darhol xavf belgisi.

Yuqoridagi xabarda birinchi uch savolga javob yo‘q. Shuning uchun uni mish-mish deb qabul qilib, o‘z hamyon va akkauntingiz xavfsizligini tekshirib qo‘ygan ma’qul.

Hamyonda raqamdan tashqari NFT sovg‘alar ham saqlanishi mumkin. Ularni qanday chiqarish haqida: [sovg‘ani TON hamyonga o‘tkazish](/blog/telegram-nft-sovga-ton-hamyonga-otkazish).

## Ko‘p so‘raladigan savollar

### +888 raqamni kimdir hamyonimga kirmasdan o‘g‘irlay oladimi?

Fragment’ga ko‘ra, raqamni egasi o‘z hamyonidan TON orqali o‘tkazadi. Shuning uchun firibgar odatda seed-iborani qo‘lga kiritishga yoki egani o‘tkazmani o‘zi tasdiqlashga ko‘ndirishga urinadi.

### Raqam boshqa hamyonga o‘tsa, Telegram akkauntim nima bo‘ladi?

Kirish kodlari endi yangi egasining Fragment sahifasida ko‘rinadi. 2FA paroli yoqilgan bo‘lsa, kodning o‘zi yetmaydi: kirish uchun parol ham so‘raladi.

### +888 raqamga SMS kod keladimi?

Yo‘q, bu raqam oddiy SMS va qo‘ng‘iroqlarni qabul qilmaydi. Kod hamyon Fragment’ga ulangandan keyin o‘sha saytda ko‘rinadi.

### O‘g‘irlangan +888 raqamni qaytarish mumkinmi?

Fragment va Telegram sahifalarida qaytarish yoki shikoyat qilishning rasmiy tartibi topilmadi. Dalillarni saqlang, tahdid bo‘lgan bo‘lsa, huquqni muhofaza qilish organlariga murojaat qiling.

### 2FA paroli +888 raqamli akkauntni himoya qiladimi?

Akkauntni himoya qiladi, lekin hamyondagi raqamning o‘zini emas. Raqamni faqat hamyon xavfsizligi saqlaydi.

### Fragment’da +888 raqamlarning floor narxi bormi?

Rasmiy floor narxi haqida ma’lumot topilmadi, joriy narxlarni Fragment’ning o‘zida ko‘rish kerak. Shuning uchun «flordan arzon sotildi» degan gapni aniq tekshirib bo‘lmaydi.

### Telegram qo‘llab-quvvatlash xizmati kod yoki parol so‘rashi mumkinmi?

Yo‘q. Telegram tasdiqlash kodini ham, ikki bosqichli tekshiruv parolini ham hech qachon so‘ramaydi, shuning uchun bunday so‘rovga javob bermang.`,
    ru: `## Правда ли, что под угрозами забрали 200 номеров +888?

Эта новость не подтверждена. В посте одного Telegram-канала говорится, что у владельца под угрозами забрали 200 анонимных номеров +888. Ущерб там оценивают примерно в 500 000 $, а сами номера якобы сразу продали дешевле «флора». На страницах [Fragment](https://fragment.com/about) и [Telegram](https://telegram.org/faq) о таком случае ничего нет.

Неизвестно, кто пострадавший, какие именно номера забрали и как считали ущерб. Доказательств, по которым это можно было бы проверить, в посте нет.

Зато по официальным источникам можно проверить другое: как устроен номер +888, от чего зависит владение им и как владелец может его защитить.

## Пост в канале и официальные источники: что подтверждено, а что нет?

| Утверждение | Есть ли в официальном источнике | Статус |
|---|---|---|
| 200 номеров забрали под угрозами | Нет | Не подтверждено |
| Ущерб — около 500 000 $ | Нет | Не подтверждено |
| Номера продали дешевле «флора» | Сведений об официальной минимальной цене (floor) не найдено | Не подтверждено |
| Владелец может передать номер другому человеку | Да, через блокчейн TON | Подтверждено |
| Номер позволяет входить в Telegram через аккаунт в блокчейне | Да | Подтверждено |

Последние две строки описаны на страницах Fragment [«How does Fragment work?»](https://fragment.com/about) и [Collectible Numbers](https://fragment.com/numbers). То есть технически передать номер от одного владельца другому можно. Но ни один официальный источник не подтверждает, что история из поста произошла именно так.

## Как работает анонимный номер +888 и при чём тут кошелёк?

По данным Fragment, в конце 2022 года Telegram выпустил ограниченную серию виртуальных номеров в блокчейне TON как коллекционные предметы. Вот что их отличает:

- Всего выпустили 136 566 номеров, и в декабре 2022 года их распродали.
- В [официальном блоге](https://telegram.org/blog/ultimate-privacy-topics-2-0) Telegram называет их анонимными номерами на базе блокчейна. С ними можно завести аккаунт без SIM-карты.
- Код для входа приходит не по SMS, а отображается на сайте Fragment. Чтобы его увидеть, нужно подключить кошелёк к Fragment.
- Обычные SMS и звонки на такой номер не приходят — он работает только в Telegram.
- Новые номера в продажу не поступают: сейчас купить номер можно только у его нынешнего владельца.

Поэтому «ключ» от номера +888 — не SIM-карта, а TON-кошелёк. Как покупать и продавать такой номер, подробно описано здесь: [номер +888 на Fragment: покупка и продажа](/blog/fragment-anonim-raqam-sotish-sotib-olish).

## Как технически можно «отобрать» номер?

Владение номером хранится в кошельке. Fragment пишет, что любой владелец коллекционного предмета может передать его другому человеку через блокчейн TON. Коды для входа на Fragment тоже видит тот, кто подключил кошелёк.

Поэтому уязвимых мест два:

- **Доступ к кошельку:** сид-фраза или устройство, на котором установлено приложение кошелька.
- **Подтверждение транзакции:** когда владелец сам нажимает «Подтвердить».

В первом случае злоумышленник получает сид-фразу и сам распоряжается кошельком. Во втором — заставляет владельца подтвердить перевод: угрозами, обманом или под предлогом «я помогу». В обоих случаях в блокчейне это выглядит как обычный перевод.

Есть и ещё один момент. По данным Fragment, владелец может в любой момент привязать номер к своему аккаунту Telegram и отвязать его. Если номер перешёл к новому владельцу, коды для входа будут видны уже на его странице Fragment. Под угрозой оказывается и аккаунт, привязанный к этому номеру.

Это общий механизм. Что именно произошло в истории из поста, неизвестно.

Частью такой схемы могут быть и подозрительные NFT и ссылки, пришедшие на кошелёк. Об этом здесь: [на кошелёк пришёл неизвестный NFT](/blog/ton-hamyonga-spam-nft-keldi-xavflimi).

## Как защитить аккаунт с номером +888?

1. Включите двухэтапную аутентификацию: Settings > Privacy and Security > 2-Step Verification (в русском интерфейсе названия пунктов могут отличаться). Согласно [Telegram FAQ](https://telegram.org/faq), после этого для входа понадобится не только код, но и пароль.
2. Добавьте почту для восстановления пароля. Как напоминает Telegram, эта почта тоже должна быть защищена надёжным паролем.
3. Откройте Settings > Devices (или Privacy and Security > Active Sessions) и завершите незнакомые сеансы.
4. Никому не сообщайте код входа и пароль 2FA. Telegram никогда их не запрашивает.
5. Подключайте кошелёк к Fragment только на странице, адрес которой вы сами проверили: [fragment.com](https://fragment.com).
6. Перед подтверждением каждой транзакции читайте, что именно отправляется и кому.
7. Никому не показывайте сид-фразу, не пишите её в чаты и облачные заметки. Это общее правило безопасности для любого криптокошелька.

Если на ваш номер приходят коды, которые вы не запрашивали, — это другая ситуация: [на номер +888 приходят коды входа](/blog/888-raqam-login-kodi-sorovlari-himoya).

## Какая мера защиты что защищает?

Многие думают, что пароль 2FA защищает всё. На самом деле у владельца номера +888 есть две отдельные вещи: аккаунт Telegram и кошелёк, в котором лежит номер. Каждая мера защищает только одну из них.

| Мера | Что защищает | Чего не защищает |
|---|---|---|
| Пароль 2FA | Не даёт войти в аккаунт по одному лишь коду | Сам номер в кошельке |
| Почта для восстановления | Помогает вернуть доступ, если пароль забыт | Мало пользы, если почта защищена слабым паролем |
| Завершение сеансов | Закрывает сеанс, оставшийся открытым на чужом устройстве | Номер и кошелёк |
| Сид-фраза в секрете | Не даёт чужому человеку управлять кошельком | Ситуацию, когда вас обманом заставили подтвердить транзакцию |
| Внимательное подтверждение транзакций | Защищает от перевода по незнанию | Ситуацию, когда сид-фразу уже украли |

Вывод простой: аккаунту нужен пароль 2FA, а номеру — безопасность кошелька. Одно не заменяет другое.

## Что делать, если вам угрожают или требуют передать номер?

- Не подтверждайте никаких транзакций под давлением и не подключайте кошелёк к сайту, который прислал человек с угрозами.
- Сохраните переписку, юзернеймы, скриншоты и адреса кошельков, которые вам присылали.
- Если угроза серьёзная, обратитесь в правоохранительные органы.
- Не верьте аккаунту, который пишет от имени Telegram и просит код, пароль или сид-фразу: Telegram их не запрашивает.
- Если подозреваете, что кто-то получил доступ к кошельку, сначала защитите аккаунт Telegram: включите пароль 2FA и завершите чужие сеансы.

Официального порядка возврата украденного номера или подачи жалобы на страницах Fragment и Telegram не найдено. Поэтому самая надёжная защита — осторожность заранее.

Думайте и перед тем, как открывать незнакомые ссылки. Подробнее: [подозрительная ссылка и блокировка аккаунта](/blog/telegram-shubhali-havola-akkaunt-bloklanishi).

## Можно ли доверять предложениям дешёвых номеров +888?

В посте говорится, что номера продали дешевле «флора». Это не подтверждено, но один вывод сделать можно: дешёвый актив неизвестного происхождения вполне может оказаться краденым.

- Сейчас номер можно купить только у нынешнего владельца, поэтому проверяйте, что сделка проходит через Fragment.
- Осторожнее с продавцами, которые предлагают «дешёвый номер» в личных сообщениях.
- Сведений об официальной минимальной цене не найдено, поэтому «дешевле флора» — не точная мера. Актуальные цены смотрите на самом Fragment.
- Если продавец просит предоплату, сид-фразу или подключить кошелёк к незнакомому сайту, прекращайте сделку.

> Откажитесь от «посредников» и личных переводов в обход кошелька. Если в такой сделке деньги уйдут, официального способа их вернуть не найдено.

## Как самостоятельно проверить подобную новость?

Громкие посты о криптовалюте и NFT разлетаются быстро. Прежде чем верить, посмотрите на четыре вещи:

1. Источник: есть ли новость в [блоге Telegram](https://telegram.org/blog), на сайте [Fragment](https://fragment.com) — или только в посте канала?
2. Подробности: точно ли указано, кто пострадал, когда и какие номера забрали?
3. Сумма: объяснено ли, как считали ущерб, или просто сказано «примерно»?
4. Действие: просит ли пост открыть ссылку, подключить кошелёк или отправить что-то «для проверки»? Это сразу признак опасности.

В новости, о которой идёт речь, ответов на первые три вопроса нет. Поэтому разумнее считать её слухом и заодно проверить безопасность собственного кошелька и аккаунта.

Кроме номера, в кошельке могут храниться и NFT-подарки. Как их вывести: [перевод подарка на TON-кошелёк](/blog/telegram-nft-sovga-ton-hamyonga-otkazish).

## Часто задаваемые вопросы

### Можно ли украсть номер +888, не получив доступа к моему кошельку?

По данным Fragment, номер переводит со своего кошелька сам владелец через TON. Поэтому мошенники обычно пытаются завладеть сид-фразой или уговорить владельца самому подтвердить перевод.

### Что будет с моим аккаунтом Telegram, если номер уйдёт на другой кошелёк?

Коды для входа станут видны на странице Fragment нового владельца. Если у вас включён пароль 2FA, одного кода не хватит — для входа потребуется ещё и пароль.

### Приходит ли на номер +888 код по SMS?

Нет, обычные SMS и звонки этот номер не принимает. Код появляется на сайте Fragment после того, как вы подключите к нему кошелёк.

### Можно ли вернуть украденный номер +888?

Официального порядка возврата или подачи жалобы на страницах Fragment и Telegram не найдено. Сохраните доказательства, а если были угрозы — обратитесь в правоохранительные органы.

### Защищает ли пароль 2FA аккаунт с номером +888?

Аккаунт защищает, но сам номер в кошельке — нет. Сохранность номера зависит только от безопасности кошелька.

### Есть ли у номеров +888 на Fragment минимальная цена (floor)?

Сведений об официальной минимальной цене не найдено, актуальные цены нужно смотреть на самом Fragment. Поэтому утверждение «продали дешевле флора» точно проверить нельзя.

### Может ли поддержка Telegram попросить код или пароль?

Нет. Telegram никогда не запрашивает ни код подтверждения, ни пароль двухэтапной аутентификации, так что на такие просьбы не отвечайте.`,
  },
};
