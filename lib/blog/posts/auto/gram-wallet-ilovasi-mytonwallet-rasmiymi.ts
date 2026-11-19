// Avtoblogyoz yasagan maqola (2026-11-19). Niyat: TON hamyon ishlatadigan foydalanuvchi App Store’da «Gram Wallet» ilovasini ko‘rib, «Gram Wallet nima, MyTonWallet’nikimi va rasmiymi» deb qidiradi; uni Telegram ichidagi Gram hamyondan farqlamoqchi.
// Faktlar tekshirilgan manbalar:
//   (faqat brend faktlari)
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "gram-wallet-ilovasi-mytonwallet-rasmiymi",
  date: "2026-11-19",
  reviewed: "2026-11-19",
  category: "stars",
  priority: 0.7,
  title: { uz: "Gram Wallet ilovasi nima: MyTonWallet’nikimi va u rasmiymi?", ru: "Приложение Gram Wallet: оно от MyTonWallet и официальное ли?" },
  excerpt: { uz: `App Store’dagi Gram Wallet ilovasini MyTonWallet jamoasi chiqargani ham, uning Telegram bilan rasmiy aloqasi ham tasdiqlanmagan. Bu haqda faqat Telegram kanalidagi post yozgan.`, ru: `Не подтверждено ни то, что Gram Wallet в App Store выпустила команда MyTonWallet, ни его официальная связь с Telegram. Об этом писал только пост в Telegram-канале.` },
  keywords: ["gram wallet ilovasi","gram wallet nima","gram wallet rasmiymi","gram wallet mytonwallet","gram hamyon app store","telegram gram hamyon farqi","gram wallet что это","gram wallet mytonwallet","gram wallet официальный","кошелёк gram app store","mytonwallet ребрендинг","gram wallet двухфакторная аутентификация telegram"],
  related: ["telegram-gram-hamyon-non-custodial-rostmi","toncoin-gram-nomi-ozgardimi-rostmi","telegram-wallet-walt-nomi-ozgardimi","fragment-ton-connect-telegram-messenger-hamyon"],
  sources: [],
  content: {
    uz: `## Gram Wallet ilovasi kimniki va u rasmiymi?

Bu hali tasdiqlanmagan. Telegram kanallarida tarqalgan bir postga ko‘ra, App Store’da «Gram Wallet» nomli yangi hamyon ilovasi paydo bo‘lgan. Post uni MyTonWallet hamyoni jamoasiga bog‘laydi va unda Telegram orqali ikki bosqichli himoya borligini yozadi.

Bu gaplar hozircha faqat shu postda bor. Telegram va TON’ning rasmiy sahifalarida bu ilova, uning ishlab chiquvchisi yoki MyTonWallet bilan aloqasi haqida tasdiqlangan ma’lumot topilmadi.

Shuning uchun ilovaning ishlab chiquvchisi, chiqqan sanasi va funksiyalari haqida aniq gap aytmaymiz. Buning o‘rniga quyidagilarni ko‘rsatamiz:

- ilovaning haqiqiy egasini App Store’ning o‘zida qanday tekshirish;
- uni Telegram ichidagi hamyondan qanday farqlash;
- seed-iborani shoshib kiritib qo‘ygan bo‘lsangiz, nima qilish kerak.

Ilovaga havola bermaymiz. Uni App Store’da nomi bo‘yicha toping, keyin quyidagi qadamlar bilan tekshiring.

## Kanal postidagi qaysi gap tasdiqlangan, qaysi biri yo‘q?

Postda bir nechta da’vo bor. Ularning bir qismini muallif o‘zi taxmin sifatida yozgan, qolganlarini rasmiy manbalar tasdiqlamagan.

| Da’vo | Holati | O‘quvchi nima qiladi |
|---|---|---|
| Gram Wallet — MyTonWallet jamoasining yangi hamyoni | Rasmiy e’lon topilmadi | App Store’da ishlab chiquvchi nomini tekshiring |
| Asosiy hamyon nomi yaqinda o‘zgaradi (rebrending) | Muallif taxmini, rasmiy reja topilmadi | Mablag‘ni shoshib boshqa joyga o‘tkazmang |
| Gram Wallet faqat TON ekotizimi uchun bo‘ladi | Taxmin, tasdiqlanmagan | Ilova tavsifida qaysi tarmoqlar ko‘rsatilganini o‘qing |
| Telegram orqali ikki bosqichli himoya qo‘shilgan | Rasmiy manbada topilmadi | Ilova ichida va tavsifida o‘zingiz tekshiring |
| Ilovaning Telegram bilan rasmiy aloqasi bor | telegram.org’da bu ilova haqida sahifa topilmadi | Nomdagi «Gram» so‘ziga ishonib qolmang |

Jadvaldagi da’volarning birortasi tasdiqlanmagan. Bu ilova albatta xavfli degani emas. Lekin egasi aniq bo‘lmaguncha, unga asosiy mablag‘ingizni ishonib topshirmang.

## App Store’dagi Gram Wallet va Telegram ichidagi hamyon bir narsami?

Nomlari o‘xshagani uchun ularni ko‘pchilik adashtiradi. Ammo App Store’dagi alohida ilova Telegram ichidagi hamyonning o‘zi ekani tasdiqlanmagan.

Amalda ularni shunday ajratasiz:

- **Telegram ichidagi hamyon** — Telegram ilovasi ichida ochiladigan hamyon. Unga Telegram’ning o‘zidan kirasiz.
- **App Store’dagi alohida ilova** — o‘z ishlab chiquvchisi, maxfiylik siyosati va serverlari bo‘lgan mustaqil dastur. Uning egasini alohida tekshirish kerak.

Telegram ichidagi hamyonning aniq nomi, zaxira usuli va komissiyasi bu maqolada tasdiqlanmagan, shuning uchun ular haqida raqam va va’da bermaymiz. Bu hamyon haqidagi boshqa da’volar alohida maqolalarda ko‘rib chiqilgan: [Telegram Gram hamyon non-custodial rostmi](/blog/telegram-gram-hamyon-non-custodial-rostmi) va [Telegram Wallet nomi o‘zgargani haqidagi xabar](/blog/telegram-wallet-walt-nomi-ozgardimi).

«Gram» nomi qayerdan kelgani haqida [Toncoin GRAM bo‘ldimi](/blog/toncoin-gram-nomi-ozgardimi-rostmi) maqolasida yozganmiz. Bitta qoidani eslab qoling: ilova nomida «Gram», «TON» yoki «Telegram» so‘zi borligi uni rasmiy qilmaydi. Do‘konda nomi va belgisi o‘xshash, lekin turli egalarga tegishli ilovalar uchrashi mumkin.

## Ilovaning haqiqiy ishlab chiquvchisini qanday tekshiraman?

Buni bir necha daqiqada o‘zingiz qilasiz. Kerakli ma’lumot App Store sahifasining o‘zida turadi.

1. App Store’da ilova sahifasini oching va nom ostidagi ishlab chiquvchi (developer) nomini o‘qing.
2. Ishlab chiquvchi nomini bosib, uning boshqa ilovalarini ko‘ring. Sizga tanish hamyon ilovasi ham shu ro‘yxatdami, tekshiring.
3. Sahifa pastidagi ma’lumot bo‘limida sotuvchi (seller), ishlab chiquvchi sayti va maxfiylik siyosati havolalarini ko‘zdan kechiring. Sayt manzili tanish hamyon saytiga mos kelishi kerak.
4. Hamyon jamoasining o‘z sayti yoki kanalida bu ilova haqida e’lon bormi, qarang. Saytga qidiruvdagi reklama orqali emas, manzilni o‘zingiz yozib kiring.
5. Versiyalar tarixi, birinchi chiqqan sana va sharhlarni ko‘ring. Yangi, sharhi kam ilovaga katta summa ishonmang.
6. Biror ma’lumot mos kelmasa yoki shubha uyg‘otsa, ilovaga seed-ibora kiritmang va undan foydalanmang.

Ishlab chiquvchi tanish hamyon bilan bir xil bo‘lsa, bu yaxshi belgi. Lekin u ham ilovaning maqsadi va funksiyalari haqidagi rasmiy e’lon o‘rnini bosmaydi.

## Telegram orqali ikki bosqichli himoya haqidagi gap rostmi?

Gram Wallet ilovasida Telegram orqali ikki bosqichli himoya borligi rasmiy manbada topilmadi. Bu faqat kanal postidagi gap.

Ilova ichida shunday sozlamani ko‘rsangiz ham, qoida o‘zgarmaydi: Telegram login kodini va Telegram’ning ikki bosqichli tekshiruv parolini hech qanday hamyon ilovasiga, botga yoki saytga kiritmang. Ular faqat Telegram ilovasining o‘ziga kiritiladi.

Firibgarlar aynan shu chalkashlikdan foydalanadi: «hamyonni Telegram bilan himoyalash uchun kodni kiriting» degan oyna chiqarib, akkauntga kirib oladi. O‘zingiz so‘ramagan login kodi kelsa, [login kodi so‘rovlaridan himoya](/blog/888-raqam-login-kodi-sorovlari-himoya) maqolasidagi qadamlarni bajaring: kodni hech kimga bermang, notanish seanslarni yoping.

## MyTonWallet nomi o‘zgarsa, mablag‘imga nima bo‘ladi?

MyTonWallet nomini o‘zgartirishi haqida rasmiy e’lon topilmadi. Bu post muallifining taxmini xolos.

Hamyondagi mablag‘ ilova nomiga emas, seed-ibora va hamyon manzilingizga bog‘liq. Shuning uchun:

- seed-iborangiz xavfsiz joyda, oflayn saqlanganiga ishonch hosil qiling;
- hamyon manzilingizni yozib qo‘ying, uni eksplorerda tekshirish mumkin;
- ilova nomi haqidagi mish-mishga qarab pulni boshqa hamyonga ko‘chirmang.

Nom haqiqatan o‘zgarsa, buni ilovaning o‘zidagi yangilanishdan va jamoaning rasmiy kanalidan bilasiz. Begona havola bilan kelgan «yangi versiyani o‘rnating» yoki «hamyonni ko‘chiring» degan xabarga ergashmang: bunday xabarlar ko‘pincha seed-iborani o‘g‘irlash uchun yuboriladi.

## Yangi hamyon ilovasini o‘rnatishdan oldin nimalarni tekshirish kerak?

Gram Wallet bo‘ladimi yoki boshqa yangi hamyon, qoidalar bir xil:

- **Asosiy seed-iborani import qilmang.** Ilovani sinamoqchi bo‘lsangiz, unda yangi hamyon oching va kichik summa bilan tekshiring.
- **Nusxalarni farqlang.** Nomi va belgisi o‘xshash ilovalar bo‘lishi mumkin, ishlab chiquvchini har safar solishtiring.
- **Maxfiy ma’lumotni bermang.** Ilova yoki «yordam xodimi» seed-ibora, PIN yoki Telegram kodini so‘rasa, bu firibgarlik belgisi.
- **Tasdiqlash oynasini o‘qing.** Saytga hamyon ulashda va tranzaksiyani tasdiqlashda ekrandagi summa va manzilni tekshiring. Ulanish oynasida qaysi hamyonni tanlash haqida [Fragment’dagi «Telegram Messenger» va Wallet in Telegram](/blog/fragment-ton-connect-telegram-messenger-hamyon) maqolasida yozilgan.
- **Notanish NFT va havolalarga tegmang.** Hamyonga noma’lum NFT kelsa, undagi havolani ochmang va hamyonni u ko‘rsatgan saytga ulamang.

## Seed-iborani notanish ilovaga kiritib qo‘ygan bo‘lsam nima qilaman?

Asosiy seed-iborani egasi aniq bo‘lmagan ilovaga kiritgan bo‘lsangiz, o‘sha hamyonni xavf ostida deb hisoblang. Seed-ibora kimning qo‘lida bo‘lsa, mablag‘ni ham o‘sha boshqara oladi. Pul hali joyida bo‘lsa, kechiktirmang:

1. Egasi aniq, o‘zingiz tekshirgan hamyon ilovasida yangi hamyon oching. Yangi seed-iborani qog‘ozga yozib, oflayn saqlang.
2. Eski hamyondagi mablag‘ni yangi manzilga o‘tkazing. Yuborishdan oldin manzilning boshi va oxirini solishtiring. O‘tkazma uchun tarmoq to‘lovi yechilishini hisobga oling.
3. Eski hamyonda NFT yoki boshqa aktivlar bo‘lsa, ularni ham yangi manzilga ko‘chiring.
4. Shubhali ilovani telefondan o‘chiring va eski hamyondan boshqa foydalanmang.
5. Telegram login kodini ham kiritgan bo‘lsangiz, Telegram sozlamalaridagi qurilmalar bo‘limida notanish seanslarni yoping va ikki bosqichli parolni almashtiring.

Eski seed-ibora qayta xavfsiz bo‘lib qolmaydi: uni yangi parol yoki PIN bilan «tuzatib» bo‘lmaydi, faqat mablag‘ni yangi hamyonga ko‘chirish yordam beradi.

## Telegram Premium olish uchun Gram hamyon kerakmi?

Yo‘q. Premiumtg.uz orqali Premium olish uchun hamyon ham, kripto ham kerak emas. To‘lov so‘mda Click, Payme, Paynet yoki Uzum Bank orqali qilinadi, xorijiy karta talab qilinmaydi.

Buyurtma uchun username’ingiz yetarli: login kodi ham, parol ham so‘ralmaydi. Obuna 10 soniyada avtomatik faollashadi. Buyurtma [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) orqali beriladi.

| Paket | Narx |
|---|---|
| 3 oy | ${narx(3)} |
| 6 oy | ${narx(6)} |
| 12 oy | ${narx(12)} |

> Xariddan oldin narx va mavjud to‘lov usullarini botda tekshiring. Premiumtg — mustaqil xizmat, Premium statusni esa faqat Telegram beradi.

Kripto bilan olish yo‘li bilan solishtirmoqchi bo‘lsangiz, [TON orqali Telegram Premium olish](/blog/ton-orqali-telegram-premium) maqolasini o‘qing: unda hamyon ochish, kurs tebranishi va komissiyalar haqida yozilgan.

## Ko‘p so‘raladigan savollar

### App Store’dagi Gram Wallet Telegram’ning rasmiy ilovasimi?

Buni tasdiqlaydigan rasmiy ma’lumot topilmadi: telegram.org’da bu ilova haqida sahifa yo‘q. Nomida «Gram» so‘zi borligi uni Telegram’niki qilmaydi.

### MyTonWallet seed-iborasini Gram Wallet ilovasiga kiritsam xavfsizmi?

Ilova egasi aniq bo‘lmaguncha bunday qilmang. Sinab ko‘rmoqchi bo‘lsangiz, unda alohida hamyon ochib, oz miqdordagi pul bilan tekshiring.

### Telegram ichidagi hamyonni ishlatish uchun alohida ilova yuklab olish kerakmi?

Telegram ichidagi hamyonga Telegram ilovasining o‘zidan kirasiz. Uning App Store’da alohida ilovasi borligi rasman tasdiqlanmagan, shuning uchun do‘kondagi o‘xshash nomli ilovalarni u bilan bir narsa deb o‘ylamang.

### Gram Wallet’da Telegram orqali ikki bosqichli himoya bormi?

Bu gap faqat kanal postida bor, rasmiy manbada topilmadi. Har qanday holatda Telegram login kodi va 2FA parolini faqat Telegram ilovasiga kiriting.

### MyTonWallet nomini o‘zgartiradimi, pulimni boshqa hamyonga o‘tkazishim kerakmi?

Nom o‘zgarishi haqida rasmiy e’lon yo‘q, bu post muallifining taxmini. Mablag‘ seed-ibora va manzilga bog‘liq, mish-mish tufayli pulni ko‘chirish shart emas.

### Hamyon ilovasi soxta nusxa ekanini qanday bilaman?

App Store’da ishlab chiquvchi nomi, uning boshqa ilovalari, sayt manzili va sharhlarni solishtiring. Ilova «yordam» bahonasida seed-ibora yoki Telegram kodini so‘rasa, undan darhol voz keching.

### Telegram Premium sotib olish uchun Gram yoki TON hamyon kerakmi?

Premiumtg.uz orqali olsangiz kerak emas: so‘mda Click, Payme, Paynet yoki Uzum Bank bilan to‘laysiz. Buyurtmaga faqat username kerak.`,
    ru: `## Чьё приложение Gram Wallet и официальное ли оно?

Это пока не подтверждено. По Telegram-каналам разошёлся пост о том, что в App Store появилось новое приложение-кошелёк «Gram Wallet». Автор поста связывает его с командой кошелька MyTonWallet и утверждает, что в приложении есть двухэтапная защита через Telegram.

Пока эти утверждения есть только в этом посте. На официальных страницах Telegram и TON нет подтверждённых сведений ни о самом приложении, ни о его разработчике, ни о связи с MyTonWallet.

Поэтому мы не называем разработчика, дату выхода и функции приложения. Вместо этого покажем:

- как проверить настоящего владельца приложения прямо в App Store;
- как отличить его от кошелька внутри Telegram;
- что делать, если вы поторопились и уже ввели сид-фразу.

Ссылку на приложение мы не даём. Найдите его в App Store по названию и проверьте по шагам ниже.

## Что в посте подтверждено, а что нет?

В посте несколько утверждений. Часть из них автор сам подаёт как догадку, остальные официальные источники не подтверждают.

| Утверждение | Статус | Что делать читателю |
|---|---|---|
| Gram Wallet — новый кошелёк от команды MyTonWallet | Официального анонса не нашлось | Проверьте имя разработчика в App Store |
| Основной кошелёк скоро сменит название (ребрендинг) | Догадка автора, официальных планов не нашлось | Не переводите средства в спешке |
| Gram Wallet будет работать только с экосистемой TON | Догадка, не подтверждено | Посмотрите в описании приложения, какие сети указаны |
| Добавлена двухэтапная защита через Telegram | В официальных источниках не нашлось | Проверьте сами в приложении и его описании |
| Приложение официально связано с Telegram | На telegram.org страницы об этом приложении нет | Не доверяйте только слову «Gram» в названии |

Ни одно из утверждений в таблице не подтверждено. Это не значит, что приложение обязательно опасное. Но пока владелец неизвестен, не доверяйте ему основные деньги.

## Gram Wallet в App Store и кошелёк внутри Telegram — одно и то же?

Названия похожи, поэтому их часто путают. Но то, что отдельное приложение в App Store и есть кошелёк внутри Telegram, не подтверждено.

На практике их различают так:

- **Кошелёк внутри Telegram** открывается в самом приложении Telegram. Вход в него — из Telegram.
- **Отдельное приложение в App Store** — самостоятельная программа со своим разработчиком, политикой конфиденциальности и серверами. Её владельца нужно проверять отдельно.

Точное название кошелька внутри Telegram, способ резервного копирования и комиссии в этой статье не подтверждены, поэтому цифр и обещаний на этот счёт мы не даём. Другие утверждения об этом кошельке разобраны в отдельных статьях: [правда ли, что Gram-кошелёк в Telegram некастодиальный](/blog/telegram-gram-hamyon-non-custodial-rostmi) и [новость о переименовании Telegram Wallet](/blog/telegram-wallet-walt-nomi-ozgardimi).

Откуда взялось название «Gram», мы писали в статье [стал ли Toncoin называться GRAM](/blog/toncoin-gram-nomi-ozgardimi-rostmi). Запомните одно правило: слова «Gram», «TON» или «Telegram» в названии не делают приложение официальным. В магазине могут быть приложения с похожими названиями и иконками, но разными владельцами.

## Как проверить настоящего разработчика приложения?

Это можно сделать самому за пару минут. Всё нужное есть на странице приложения в App Store.

1. Откройте страницу приложения в App Store и посмотрите имя разработчика под названием.
2. Нажмите на имя разработчика и посмотрите его другие приложения. Проверьте, есть ли в списке знакомый вам кошелёк.
3. В разделе информации внизу страницы изучите продавца (seller), сайт разработчика и ссылку на политику конфиденциальности. Адрес сайта должен совпадать с сайтом знакомого кошелька.
4. Посмотрите, есть ли анонс этого приложения на сайте или в канале команды кошелька. Адрес сайта вводите вручную, а не переходите по рекламе в поиске.
5. Изучите историю версий, дату первого выпуска и отзывы. Новому приложению с малым числом отзывов крупную сумму не доверяйте.
6. Если что-то не сходится или вызывает сомнения, не вводите в приложение сид-фразу и не пользуйтесь им.

Если разработчик совпадает со знакомым кошельком, это хороший знак. Но и это не заменяет официального анонса о назначении и функциях приложения.

## Правда ли, что в Gram Wallet есть двухэтапная защита через Telegram?

В официальных источниках сведений о двухэтапной защите через Telegram в приложении Gram Wallet не нашлось. Об этом пишет только пост в канале.

Даже если вы увидите такую настройку в приложении, правило не меняется: не вводите код входа в Telegram и пароль двухэтапной проверки Telegram ни в какие кошельки, боты или сайты. Их вводят только в самом приложении Telegram.

Мошенники используют именно эту путаницу: показывают окно «введите код, чтобы защитить кошелёк через Telegram» и получают доступ к аккаунту. Если вам пришёл код входа, который вы не запрашивали, выполните шаги из статьи о [защите от запросов кода входа](/blog/888-raqam-login-kodi-sorovlari-himoya): никому не сообщайте код и завершите незнакомые сеансы.

## Что будет с моими деньгами, если MyTonWallet сменит название?

Официального анонса о переименовании MyTonWallet не нашлось. Это лишь догадка автора поста.

Средства в кошельке зависят не от названия приложения, а от вашей сид-фразы и адреса кошелька. Поэтому:

- убедитесь, что сид-фраза хранится в надёжном месте офлайн;
- запишите адрес кошелька — его можно проверить в эксплорере;
- не переводите деньги в другой кошелёк из-за слухов о названии.

Если название действительно поменяется, вы узнаете об этом из обновления самого приложения и из официального канала команды. Не переходите по чужим ссылкам из сообщений вроде «установите новую версию» или «перенесите кошелёк»: такие сообщения часто рассылают, чтобы украсть сид-фразу.

## Что проверить перед установкой нового кошелька?

Будь то Gram Wallet или любой другой новый кошелёк, правила одинаковые:

- **Не импортируйте основную сид-фразу.** Если хотите попробовать приложение, создайте в нём новый кошелёк и проверьте его на небольшой сумме.
- **Отличайте копии.** Бывают приложения с похожими названиями и иконками — каждый раз сверяйте разработчика.
- **Не сообщайте секретные данные.** Если приложение или «сотрудник поддержки» просит сид-фразу, PIN-код или код из Telegram — это признак мошенничества.
- **Читайте окно подтверждения.** При подключении кошелька к сайту и подтверждении транзакции проверяйте сумму и адрес на экране. Какой кошелёк выбирать в окне подключения, мы разбирали в статье [«Telegram Messenger» и Wallet in Telegram на Fragment](/blog/fragment-ton-connect-telegram-messenger-hamyon).
- **Не трогайте незнакомые NFT и ссылки.** Если в кошелёк пришёл неизвестный NFT, не открывайте ссылку из него и не подключайте кошелёк к указанному сайту.

## Что делать, если я ввёл сид-фразу в незнакомое приложение?

Если вы ввели основную сид-фразу в приложение с неизвестным владельцем, считайте этот кошелёк скомпрометированным. У кого сид-фраза, тот и распоряжается средствами. Если деньги ещё на месте, не медлите:

1. Создайте новый кошелёк в проверенном приложении с известным владельцем. Запишите новую сид-фразу на бумаге и храните офлайн.
2. Переведите средства со старого кошелька на новый адрес. Перед отправкой сверьте начало и конец адреса. Учтите, что за перевод спишется сетевая комиссия.
3. Если в старом кошельке есть NFT или другие активы, перенесите и их на новый адрес.
4. Удалите подозрительное приложение с телефона и больше не пользуйтесь старым кошельком.
5. Если вы вводили и код входа в Telegram, завершите незнакомые сеансы в разделе устройств в настройках Telegram и смените пароль двухэтапной проверки.

Старая сид-фраза уже не станет снова безопасной: её не «исправить» новым паролем или PIN-кодом. Помогает только перенос средств в новый кошелёк.

## Нужен ли Gram-кошелёк, чтобы купить Telegram Premium?

Нет. Чтобы купить Premium через Premiumtg.uz, не нужны ни кошелёк, ни криптовалюта. Оплата проходит в сумах через Click, Payme, Paynet или Uzum Bank, зарубежная карта не нужна.

Для заказа достаточно вашего username: ни код входа, ни пароль не запрашиваются. Подписка активируется автоматически за 10 секунд. Заказ оформляется через [@premiumtg_uzbot](https://t.me/premiumtg_uzbot).

| Пакет | Цена |
|---|---|
| 3 месяца | ${narx(3)} |
| 6 месяцев | ${narx(6)} |
| 12 месяцев | ${narx(12)} |

> Перед покупкой проверьте в боте цену и доступные способы оплаты. Premiumtg — независимый сервис, а статус Premium выдаёт только Telegram.

Если хотите сравнить с покупкой за криптовалюту, прочитайте статью [как купить Telegram Premium за TON](/blog/ton-orqali-telegram-premium): там разобраны открытие кошелька, колебания курса и комиссии.

## Часто задаваемые вопросы

### Gram Wallet в App Store — официальное приложение Telegram?

Официальных данных, которые бы это подтверждали, нет: на telegram.org страницы об этом приложении не нашлось. Слово «Gram» в названии ещё не значит, что приложение принадлежит Telegram.

### Безопасно ли вводить сид-фразу от MyTonWallet в Gram Wallet?

Пока владелец приложения неизвестен, лучше этого не делать. Если хотите попробовать, заведите в нём отдельный кошелёк и проверьте на небольшой сумме.

### Нужно ли скачивать отдельное приложение, чтобы пользоваться кошельком внутри Telegram?

В кошелёк внутри Telegram вы заходите из самого Telegram. Официально не подтверждено, что у него есть отдельное приложение в App Store, так что не принимайте похожие по названию приложения из магазина за него.

### Есть ли в Gram Wallet двухэтапная защита через Telegram?

Об этом говорится только в посте канала, в официальных источниках подтверждения нет. В любом случае код входа и пароль 2FA от Telegram вводите только в приложении Telegram.

### MyTonWallet будет переименован? Нужно ли переводить деньги в другой кошелёк?

Официального анонса о смене названия нет — это догадка автора поста. Средства привязаны к сид-фразе и адресу, поэтому переводить их из-за слухов не нужно.

### Как понять, что приложение кошелька — поддельная копия?

Сверьте в App Store имя разработчика, его другие приложения, адрес сайта и отзывы. Если приложение под предлогом «поддержки» просит сид-фразу или код из Telegram, сразу откажитесь от него.

### Нужен ли Gram- или TON-кошелёк для покупки Telegram Premium?

При покупке через Premiumtg.uz — нет: вы платите в сумах через Click, Payme, Paynet или Uzum Bank. Для заказа нужен только username.`,
  },
};
