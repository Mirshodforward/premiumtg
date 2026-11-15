// Avtoblogyoz yasagan maqola (2026-11-15). Niyat: TON egasi yoki Telegram foydalanuvchisi «Toncoin GRAM bo‘ldimi» yoki «Toncoin nomi o‘zgardimi» deb qidiradi. U Toncoin GRAM deb qayta nomlangani, @gram kanali rasmiy ekani va bu hamyondagi mablag‘ga ta’sir qilish-qilmasligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://ton.org/
//   https://ton.org/en/toncoin
//   https://ton.org/media
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "toncoin-gram-nomi-ozgardimi-rostmi",
  date: "2026-11-15",
  reviewed: "2026-11-15",
  category: "stars",
  priority: 0.7,
  title: { uz: "Toncoin GRAM bo‘ldimi? Nom o‘zgarishi va @gram kanali haqida faktlar", ru: "Toncoin переименовали в Gram? Факты о смене названия и канале @gram" },
  excerpt: { uz: `Ha, ton.org TON blokcheynining asosiy tangasini endi Gram deb ataydi. Ilgari u Toncoin deb atalgan. @gram kanali rasmiy ekani va uni Durov qayta nomlagani esa tasdiqlanmagan.`, ru: `Да, ton.org теперь называет основную монету блокчейна TON Gram, раньше она называлась Toncoin. Что канал @gram официальный и его переименовал Дуров — не подтверждено.` },
  keywords: ["toncoin gram bo'ldimi","toncoin nomi o'zgardimi","gram toncoin","gram ton tanga","@gram kanali rasmiymi","gram wallet telegram","toncoin переименован в gram","toncoin теперь gram","gram нативный токен ton","канал @gram официальный","toncoin новое название","gram комиссия перевода"],
  related: ["ton-org-telegram-integratsiya-mahsulotlar","telegram-gram-hamyon-non-custodial-rostmi","telegram-wallet-walt-nomi-ozgardimi","gram-org-ton-eksplorer-rasmiymi"],
  sources: [{"url":"https://ton.org/","title":"TON — The Leading L1 Blockchain"},{"url":"https://ton.org/en/toncoin","title":"Explore Toncoin"},{"url":"https://ton.org/media","title":"Media Assets"}],
  content: {
    uz: `## Toncoin rostdan ham Gram deb qayta nomlandimi?

Ha. TON’ning rasmiy sayti [ton.org](https://ton.org/) bosh sahifasida tangani endi shunday tanishtiradi: «Gram is the native coin of the TON blockchain». Ya’ni Gram — TON blokcheynining nativ (asosiy) tangasi.

Eski nom ham rasmiy manbada qayd etilgan. ton.org’ning [Toncoin sahifasida](https://ton.org/en/toncoin) «The coin was also known as Toncoin» deb yozilgan: bu tanga ilgari Toncoin deb ham atalgan.

Nom qachon o‘zgargani rasmiy sahifalarda topilmadi, shuning uchun bu maqolada sana keltirilmaydi. Biror manba aniq kunni aytsa, uni ton.org’da tekshiring.

Blokcheynning nomi o‘zgarmagan. [ton.org media sahifasida](https://ton.org/media) blokcheyn logosi «TON» nomi bilan, tanga belgisi esa alohida, «Gram» nomi bilan berilgan. Bu belgi ko‘k olmos ichidagi oq yulduzdan iborat. Demak, tarmoq hamon TON, uning tangasi esa Gram.

Kanal postidagi «Toncoin — endi yo‘q!» sarlavhasi chalg‘itadi. Tanga yo‘qolmagan. Rasmiy manbalarga ko‘ra, u endi boshqa nom bilan ataladi, xolos.

## Kanal postida nima deyilgan va qaysi qismi tasdiqlangan?

Mavzu Telegram’dagi kanal postidan olingan. Unda aytilishicha, Pavel Durov TON’ning rasmiy kanali nomi va username’ini shaxsan @gram’ga o‘zgartirgan, kanal tavsifi ham yangilangan. Kanal posti rasmiy manba emas, shuning uchun har bir da’voni alohida tekshirdik.

| Da’vo | Holat | Qayerda tekshirildi |
|---|---|---|
| TON tangasi endi Gram deb ataladi | Tasdiqlangan | ton.org bosh sahifasi |
| Tanga ilgari Toncoin deb atalgan | Tasdiqlangan | ton.org’dagi Toncoin sahifasi |
| Blokcheyn nomi TON bo‘lib qolgan | Tasdiqlangan | ton.org media sahifasi |
| Pavel Durov kanalni shaxsan qayta nomlagan | Tasdiqlanmagan | Faqat kanal postida bor |
| @gram — TON’ning rasmiy kanali | Tasdiqlanmagan | Rasmiy sahifalarda topilmadi |
| Kanal tavsifidagi «GRAM — TON’ning nativ tokeni…» matni | Tasdiqlanmagan | Faqat kanal postida bor |
| GRAM — tanganing tikeri | Bu maqolada tasdiqlanmagan | Ochilgan rasmiy sahifalarda topilmadi |

Tiker bo‘yicha aniq javob bermaymiz. Birja yoki hamyonda tanga qaysi qisqa belgi bilan ko‘rsatilayotganini o‘sha xizmatning o‘zida tekshiring.

## @gram kanali rasmiymi?

Bu tasdiqlanmagan. Tekshirilgan rasmiy sahifalarda @gram kanali TON’ning rasmiy kanali ekani haqida yozuv topilmadi.

Kanal nomi yoki username’i o‘zgargani kanal kimga tegishli ekanini isbotlamaydi. Chiroyli username va tavsifdagi «rasmiy» so‘zi ham dalil emas: bunday nomni istalgan odam qo‘ya oladi.

Rasmiy kanalni topishning ishonchliroq yo‘li — [ton.org](https://ton.org/) saytidagi havolalardan o‘tish. Kanalga ton.org’dan havola berilmagan bo‘lsa, uni rasmiy deb hisoblamang.

> Nom o‘zgarishi haqidagi yangiliklar atrofida «Toncoin’ni Gram’ga almashtiring», «tokenni yangilang» yoki «claim qiling» degan kanal va botlar paydo bo‘lishi mumkin. Bunday havolalarni ochmang, hamyon ulamang va hech narsani tasdiqlamang.

## Nom o‘zgarishi hamyondagi mablag‘imga ta’sir qiladimi?

Bu savolga to‘g‘ridan-to‘g‘ri javob beradigan rasmiy iqtibos topilmadi. Shuning uchun «hech narsa qilish shart emas» yoki «almashtirish kerak» degan qat’iy gapni yozmaymiz.

Rasman ma’lum bo‘lgani shu:

- Gram — TON blokcheynining nativ tangasi.
- Toncoin — aynan shu tanganing avvalgi nomi.

Ya’ni ikkala nom bitta tangani bildiradi. Tekshirilgan rasmiy sahifalarda tangani yangi nomga almashtirish yoki «migratsiya» qilish talabi haqida yozuv topilmadi.

Turli hamyon, birja va eksplorerlar yangi nomni har xil vaqtda ko‘rsatishi mumkin. Bir joyda «Toncoin», boshqasida «Gram» yozuvini ko‘rsangiz, faqat shu sababli vahimaga tushmang. Nomga emas, balansga va hamyon manziliga qarang.

Amalda quyidagilarga amal qiling:

- Hech qanday «almashtirish», «migratsiya» yoki «claim» saytiga hamyon ulamang va tranzaksiya tasdiqlamang.
- Seed-ibora (tiklash so‘zlari), 2FA parol va login kodini hech kimga bermang. «Qo‘llab-quvvatlash xizmati» nomidan yozganlarga ham.
- Balansni o‘z hamyon ilovangizda yoki eksplorerda manzil bo‘yicha tekshiring. Qaysi eksplorerga ishonsa bo‘lishini [gram.org eksplorer haqidagi maqolada](/blog/gram-org-ton-eksplorer-rasmiymi) yozganmiz.
- Hamyonga notanish token yoki NFT kelsa, unga bosmang. Bunday holatda nima qilish kerakligini [spam NFT haqidagi maqolada](/blog/ton-hamyonga-spam-nft-keldi-xavflimi) o‘qing.

## «Almashtirish» firibgarligini qanday tanish mumkin?

Nom o‘zgarishi — firibgarlar uchun qulay bahona. Ular odamlarning «eski tangam endi yaroqsizmi?» degan xavotiridan foydalanadi. Quyidagi belgilardan biri bo‘lsa, taklifdan voz keching:

- Sizni shoshiltiradi: «24 soat ichida almashtirmasangiz, tangalar yonib ketadi» kabi gaplar.
- Hamyonni noma’lum saytga ulashni yoki «bepul token olish» uchun tranzaksiyani tasdiqlashni so‘raydi.
- Seed-iborani, login kodini yoki 2FA parolni so‘raydi. Haqiqiy xizmat bularni hech qachon so‘ramaydi.
- Havola ton.org emas, unga o‘xshatilgan domenga olib boradi: bitta harf qo‘shilgan yoki boshqa qo‘shimcha bilan tugaydi.
- Xabar shaxsiy chatga «admin» yoki «TON jamoasi» nomidan keladi.

Shubhali tranzaksiyani tasdiqlab qo‘ygan bo‘lsangiz, hamyondagi ulanishlarni darhol uzing. Seed-iborani kiritib qo‘ygan bo‘lsangiz, mablag‘ni yangi hamyonga o‘tkazish haqida o‘ylab ko‘ring.

## Gram nimaga ishlatiladi?

ton.org Gram’ning vazifalarini quyidagicha sanaydi:

| Ishlatilish joyi | ton.org nima deydi |
|---|---|
| Tarmoq komissiyalari | Gram bilan tarmoq to‘lovlari (fee) to‘lanadi |
| Validatsiya va ovoz berish | Gram validatsiyada, ovoz berishda va boshqa jarayonlarda ishlatiladi |
| Telegram Stars | Stars’ni Gram bilan sotib olish mumkin, ular Telegram ichidagi raqamli tovar, kontent va xizmatlarga sarflanadi |
| Giveaway’lar | Stars va Telegram Premium giveaway’lari uchun Gram bilan oldindan to‘lash mumkin |
| Reklama daromadi | Telegram reklamasidan tushgan daromad Gram’da to‘lanishi mumkin |

Manbalar: [ton.org bosh sahifasi](https://ton.org/) va [Toncoin sahifasi](https://ton.org/en/toncoin).

ton.org Telegram bilan bog‘liq yana qaysi mahsulotlarni ko‘rsatishi haqida [TON Telegram’ga qanday integratsiya qilingani](/blog/ton-org-telegram-integratsiya-mahsulotlar) haqidagi maqolada batafsil yozilgan.

## Gram Wallet nima va u Telegram ichida qanday ishlaydi?

ton.org’ga ko‘ra, Telegram jamoasi yaratgan Gram Wallet hamyoni messenjer interfeysiga o‘rnatilgan va non-custodial hisoblanadi: «The non-custodial Gram Wallet from the Telegram team is natively integrated into the messenger interface».

Non-custodial degani — hamyon kalitlari foydalanuvchining o‘zida saqlanadi. Buning ikki tomoni bor: mablag‘ni o‘zingiz boshqarasiz, lekin kalit va seed-iborani saqlash ham o‘z zimmangizda. Seed-iborani qo‘lga kiritgan odam hamyonni ham boshqara oladi, uni qaytarib beradigan markaziy xizmat yo‘q.

Hamyon komissiyasi va «non-custodial» so‘zining amaldagi ma’nosi haqida [Gram hamyon non-custodial rostmi](/blog/telegram-gram-hamyon-non-custodial-rostmi) maqolasida yozganmiz. Hamyon nomi haqidagi boshqa mish-mishni [Wallet Walt bo‘ldimi](/blog/telegram-wallet-walt-nomi-ozgardimi) maqolasida tekshirganmiz.

## Gram o‘tkazmasi qancha komissiya turadi?

[ton.org](https://ton.org/) bosh sahifasidagi taxminiy raqamlar:

- Gram o‘tkazmasi — taxminan 0,00039 Gram;
- USDt o‘tkazmasi — taxminan 0,001 Gram.

Bu taxminiy qiymat. Aniq komissiyani o‘tkazmani tasdiqlashdan oldin hamyon ekranida ko‘rasiz.

Komissiya Gram’da to‘lanadi, shuning uchun hamyonda doim ozgina Gram qoldiring. Aks holda USDt’ni ham yubora olmay qolishingiz mumkin.

## Nom o‘zgarishidan keyin nima qilish kerak?

1. Yangilikni ton.org’dagi [bosh sahifa](https://ton.org/) va [Toncoin sahifasi](https://ton.org/en/toncoin) bilan solishtiring. Kanal postlariga tayanmang.
2. Hamyon ilovasini faqat App Store yoki Google Play’dan yangilang. Chatda yuborilgan «yangi versiya» fayllarini o‘rnatmang.
3. Balansingizni manzil bo‘yicha eksplorerda tekshiring va hamyondagi raqam bilan solishtiring.
4. «Toncoin’ni Gram’ga almashtiring» degan bot, sayt va kanallarga e’tibor bermang.
5. Seed-ibora, 2FA parol va login kodini hech kimga bermang.
6. Telegram Premium kerak bo‘lsa, buning uchun Gram yoki boshqa kripto shart emas. [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida username’ingizni kiritib, so‘mda Click, Payme, Paynet yoki Uzum Bank orqali to‘lash mumkin. Login kodi va parol so‘ralmaydi. 3 oylik paket ${narx(3)} turadi, lekin narx va mavjud to‘lov usullarini xariddan oldin botda tekshiring. Kripto yo‘li bilan solishtirish uchun [TON orqali Premium olish](/blog/ton-orqali-telegram-premium) maqolasini o‘qing.

## Ko‘p so‘raladigan savollar

### Toncoin va Gram bir xil tangami?

Ha. ton.org Gram’ni TON blokcheynining nativ tangasi deb ataydi va u ilgari Toncoin nomi bilan tanilganini yozadi. Ya’ni bu ikki xil tanga emas, balki bitta tanganing ikki nomi.

### GRAM tikeri rasmiymi?

Biz ochgan rasmiy sahifalarda GRAM tikeri tasdiqlanmadi. Tanga birja yoki hamyonda qaysi belgi bilan chiqishini o‘sha xizmatning o‘zida ko‘ring.

### Toncoin nomi qachon o‘zgardi?

Rasmiy manbalarda aniq sana topilmadi. ton.org hozir tangani Gram deb ataydi, ammo o‘zgarish kunini ko‘rsatmaydi.

### Hamyonimdagi Toncoin’ni Gram’ga almashtirishim kerakmi?

Tekshirilgan rasmiy sahifalarda bunday talab yo‘q. Kimdir «almashtirish» yoki «claim» uchun hamyon ulashni yoki tranzaksiya tasdiqlashni so‘rasa, bu firibgarlik belgisi bo‘lishi mumkin.

### @gram kanaliga ishonsa bo‘ladimi?

U TON’ning rasmiy kanali ekani tasdiqlanmagan. Kanalga ton.org saytidan havola berilganini ko‘rmaguningizcha, undagi havola va takliflarga ehtiyot bo‘ling.

### TON blokcheyni ham nomini o‘zgartirdimi?

Yo‘q. ton.org media sahifasida blokcheyn logosi hamon «TON» nomi bilan berilgan. Yangi nom faqat tangaga tegishli.

### Telegram Premium olish uchun Gram kerakmi?

Shart emas. Premiumtg botida username’ingizni kiritib, so‘mda Click, Payme, Paynet yoki Uzum Bank orqali to‘lashingiz mumkin, login kodi so‘ralmaydi. Narxni xariddan oldin botda tekshiring.`,
    ru: `## Toncoin действительно переименовали в Gram?

Да. Официальный сайт TON [ton.org](https://ton.org/) теперь представляет монету на главной странице так: «Gram is the native coin of the TON blockchain». То есть Gram — нативная, основная монета блокчейна TON.

Старое название тоже упоминается в официальном источнике. На [странице Toncoin](https://ton.org/en/toncoin) сайта ton.org написано: «The coin was also known as Toncoin». Значит, раньше эта монета называлась Toncoin.

Дату смены названия на официальных страницах найти не удалось, поэтому в статье её нет. Если какой-то источник называет точный день, проверьте его на ton.org.

Название блокчейна не изменилось. На [медиастранице ton.org](https://ton.org/media) логотип блокчейна подписан как «TON», а значок монеты дан отдельно, под названием «Gram». Значок — белая звезда в синем ромбе. Сеть по-прежнему называется TON, а её монета — Gram.

Заголовок поста «Toncoin больше нет!» вводит в заблуждение. Монета никуда не исчезла. По официальным источникам, у неё просто другое название.

## Что написано в посте канала и что из этого подтверждено?

Тема пришла из поста в Telegram-канале. В нём говорится, что Павел Дуров лично сменил название и username официального канала TON на @gram, а заодно обновил описание канала. Пост в канале — не официальный источник, поэтому каждое утверждение мы проверили отдельно.

| Утверждение | Статус | Где проверяли |
|---|---|---|
| Монета TON теперь называется Gram | Подтверждено | Главная страница ton.org |
| Раньше монета называлась Toncoin | Подтверждено | Страница Toncoin на ton.org |
| Блокчейн по-прежнему называется TON | Подтверждено | Медиастраница ton.org |
| Павел Дуров лично переименовал канал | Не подтверждено | Есть только в посте канала |
| @gram — официальный канал TON | Не подтверждено | На официальных страницах не найдено |
| Текст описания канала «GRAM — нативный токен TON…» | Не подтверждено | Есть только в посте канала |
| GRAM — тикер монеты | В этой статье не подтверждено | На открытых официальных страницах не найдено |

Однозначно ответить про тикер мы не можем. Каким коротким обозначением монета показана на бирже или в кошельке, смотрите в самом сервисе.

## Канал @gram официальный?

Это не подтверждено. На проверенных официальных страницах нет записи о том, что @gram — официальный канал TON.

Смена названия или username канала не доказывает, кому он принадлежит. Красивый username и слово «официальный» в описании — тоже не доказательство: такое название может поставить кто угодно.

Надёжнее искать официальный канал по ссылкам с сайта [ton.org](https://ton.org/). Если ton.org на канал не ссылается, не считайте его официальным.

> На волне новостей о смене названия могут появиться каналы и боты с призывами «обменяйте Toncoin на Gram», «обновите токен» или «сделайте claim». Не открывайте такие ссылки, не подключайте кошелёк и ничего не подтверждайте.

## Повлияет ли смена названия на средства в кошельке?

Официальной цитаты, которая прямо отвечала бы на этот вопрос, найти не удалось. Поэтому мы не пишем категорично ни «ничего делать не нужно», ни «нужно обменять».

Официально известно вот что:

- Gram — нативная монета блокчейна TON.
- Toncoin — прежнее название этой же монеты.

То есть оба названия обозначают одну монету. На проверенных официальных страницах нет требования обменять монету на новую или провести «миграцию».

Кошельки, биржи и эксплореры могут переходить на новое название в разное время. Если в одном месте написано «Toncoin», а в другом — «Gram», это само по себе не повод для паники. Смотрите не на название, а на баланс и адрес кошелька.

Что делать на практике:

- Не подключайте кошелёк к сайтам «обмена», «миграции» или «claim» и не подтверждайте там транзакции.
- Никому не сообщайте seed-фразу (слова для восстановления), пароль 2FA и код входа. Даже тем, кто пишет от имени «службы поддержки».
- Проверяйте баланс в своём приложении-кошельке или в эксплорере по адресу. Каким эксплорерам можно доверять, мы разбирали в [статье об эксплорере gram.org](/blog/gram-org-ton-eksplorer-rasmiymi).
- Если в кошелёк пришёл незнакомый токен или NFT, не нажимайте на него. Что делать в такой ситуации, читайте в [статье о спам-NFT](/blog/ton-hamyonga-spam-nft-keldi-xavflimi).

## Как распознать мошенничество с «обменом»?

Смена названия — удобный повод для мошенников. Они играют на страхе «а вдруг моя старая монета больше не действует?». Если заметили хотя бы один из этих признаков, откажитесь от предложения:

- Вас торопят: «не обменяете за 24 часа — монеты сгорят».
- Просят подключить кошелёк к незнакомому сайту или подтвердить транзакцию, чтобы «получить токены бесплатно».
- Просят seed-фразу, код входа или пароль 2FA. Настоящий сервис их никогда не запрашивает.
- Ссылка ведёт не на ton.org, а на похожий домен: с лишней буквой или другим окончанием.
- Сообщение приходит в личный чат от имени «админа» или «команды TON».

Если вы уже подтвердили подозрительную транзакцию, сразу отключите подключения в кошельке. Если ввели seed-фразу, подумайте о переводе средств на новый кошелёк.

## Для чего используется Gram?

ton.org перечисляет такие функции Gram:

| Где используется | Что говорит ton.org |
|---|---|
| Комиссии сети | Gram используется для оплаты сетевых комиссий (fee) |
| Валидация и голосование | Gram участвует в валидации, голосовании и других процессах |
| Telegram Stars | Stars можно купить за Gram и тратить на цифровые товары, контент и услуги внутри Telegram |
| Розыгрыши (giveaway) | Розыгрыши Stars и Telegram Premium можно оплатить заранее в Gram |
| Доход от рекламы | Доход от рекламы в Telegram может выплачиваться в Gram |

Источники: [главная страница ton.org](https://ton.org/) и [страница Toncoin](https://ton.org/en/toncoin).

Какие ещё продукты, связанные с Telegram, показывает ton.org, подробно описано в статье о том, [как TON интегрирован в Telegram](/blog/ton-org-telegram-integratsiya-mahsulotlar).

## Что такое Gram Wallet и как он работает внутри Telegram?

По данным ton.org, кошелёк Gram Wallet от команды Telegram встроен в интерфейс мессенджера и является некастодиальным: «The non-custodial Gram Wallet from the Telegram team is natively integrated into the messenger interface».

Некастодиальный — значит, ключи от кошелька хранятся у самого пользователя. У этого две стороны: вы сами распоряжаетесь средствами, но и за сохранность ключей и seed-фразы отвечаете сами. Кто получил вашу seed-фразу, тот получил и кошелёк, а центрального сервиса, который вернёт доступ, нет.

О комиссиях кошелька и о том, что на деле значит «некастодиальный», мы писали в статье [«Gram-кошелёк действительно некастодиальный?»](/blog/telegram-gram-hamyon-non-custodial-rostmi). Ещё один слух о названии кошелька разобран в статье [«Wallet стал Walt?»](/blog/telegram-wallet-walt-nomi-ozgardimi).

## Сколько стоит комиссия за перевод Gram?

Ориентировочные цифры с главной страницы [ton.org](https://ton.org/):

- перевод Gram — около 0,00039 Gram;
- перевод USDt — около 0,001 Gram.

Это примерные значения. Точную комиссию вы увидите на экране кошелька перед подтверждением перевода.

Комиссия списывается в Gram, поэтому всегда оставляйте в кошельке немного Gram. Иначе может не получиться отправить даже USDt.

## Что делать после смены названия?

1. Сверьте новость с [главной страницей](https://ton.org/) и [страницей Toncoin](https://ton.org/en/toncoin) на ton.org. На посты в каналах не опирайтесь.
2. Обновляйте приложение-кошелёк только через App Store или Google Play. Не устанавливайте файлы «новой версии», присланные в чат.
3. Проверьте баланс по адресу в эксплорере и сравните с цифрой в кошельке.
4. Игнорируйте ботов, сайты и каналы с призывом «обменяйте Toncoin на Gram».
5. Никому не сообщайте seed-фразу, пароль 2FA и код входа.
6. Если вам нужен Telegram Premium, Gram и другая криптовалюта для этого не обязательны. В боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) достаточно ввести свой username и оплатить в сумах через Click, Payme, Paynet или Uzum Bank. Код входа и пароль не запрашиваются. Пакет на 3 месяца стоит ${narx(3)}, но цену и доступные способы оплаты проверьте в боте перед покупкой. Для сравнения с криптовалютным вариантом прочитайте статью [о покупке Premium через TON](/blog/ton-orqali-telegram-premium).

## Часто задаваемые вопросы

### Toncoin и Gram — это одна и та же монета?

Да. ton.org называет Gram нативной монетой блокчейна TON и указывает, что раньше она была известна как Toncoin. Это не две разные монеты, а два названия одной.

### Тикер GRAM официальный?

На официальных страницах, которые мы открывали, тикер GRAM не подтвердился. Каким обозначением монета отображается на бирже или в кошельке, смотрите в самом сервисе.

### Когда Toncoin сменил название?

Точной даты в официальных источниках нет. Сейчас ton.org называет монету Gram, но день, когда это произошло, не указывает.

### Нужно ли обменивать Toncoin в кошельке на Gram?

На проверенных официальных страницах такого требования нет. Если вас просят подключить кошелёк или подтвердить транзакцию ради «обмена» или «claim», это может быть признаком мошенничества.

### Можно ли доверять каналу @gram?

Что это официальный канал TON, не подтверждено. Пока не увидите ссылку на него с сайта ton.org, осторожно относитесь к его ссылкам и предложениям.

### Блокчейн TON тоже переименовали?

Нет. На медиастранице ton.org логотип блокчейна по-прежнему подписан как «TON». Новое название относится только к монете.

### Нужен ли Gram, чтобы купить Telegram Premium?

Не нужен. В боте Premiumtg вводите свой username и платите в сумах через Click, Payme, Paynet или Uzum Bank, код входа не запрашивается. Цену уточните в боте перед покупкой.`,
  },
};
