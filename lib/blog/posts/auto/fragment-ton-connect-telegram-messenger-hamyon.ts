// Avtoblogyoz yasagan maqola (2026-11-15). Niyat: Fragment’da TON Connect orqali hamyon ulayotgan O‘zbekistondagi foydalanuvchi ro‘yxatda ikkita Telegram yozuvini ko‘radi va «Fragment TON Connect Telegram Messenger hamyon» yoki «Wallet in Telegram farqi» deb qidirib, ular nimasi bilan farq qilishini, qaysi birini tanlashni va bu xavfsizmi-yo‘qligini bilmoqchi bo‘ladi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/about
//   https://core.telegram.org/bots/blockchain-guidelines
//   https://core.telegram.org/bots/api-changelog
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "fragment-ton-connect-telegram-messenger-hamyon",
  date: "2026-11-15",
  reviewed: "2026-11-15",
  category: "stars",
  priority: 0.7,
  title: { uz: "Fragment’da «Telegram Messenger» va Wallet in Telegram: farqi nima?", ru: "«Telegram Messenger» и Wallet in Telegram на Fragment: в чём разница?" },
  excerpt: { uz: `Ikki yozuvning farqini na Telegram, na Fragment rasman tushuntirgan: alohida «Telegram Messenger» haqida faqat kanal posti yozgan. Pulingiz turgan hamyonni tanlang va manzilini tekshiring.`, ru: `Ни Telegram, ни Fragment официально не объясняли разницу: об отдельной записи «Telegram Messenger» писал лишь пост в канале. Выбирайте кошелёк, где лежат деньги, и сверяйте адрес.` },
  keywords: ["Fragment TON Connect Telegram hamyon","Telegram Messenger hamyon Fragment","Wallet in Telegram farqi","Fragment hamyon ulash","Fragment Connect TON","Telegram hamyon xavfsizmi","Fragment TON Connect Telegram Messenger кошелёк","Wallet in Telegram и Telegram Messenger разница","как подключить кошелёк к Fragment","TON Connect Fragment новый кошелёк Telegram","кошелёк Telegram TON Connect"],
  related: ["telegram-gram-hamyon-non-custodial-rostmi","telegram-wallet-ulanishlar-sinxronlash-xavfsizlik","telegram-desktop-wallet-havolasi-ichki-hamyon","fragment-telegram-premium"],
  sources: [{"url":"https://fragment.com/about","title":"How does Fragment work?"},{"url":"https://core.telegram.org/bots/blockchain-guidelines","title":"Blockchain Guidelines"},{"url":"https://core.telegram.org/bots/api-changelog","title":"Bot API changelog"}],
  content: {
    uz: `## Fragment’dagi TON Connect ro‘yxatida rostdan ikkita Telegram hamyoni bormi?

Rasman tasdiqlanmagan. «Telegram Messenger» va «Wallet in Telegram» ikki xil hamyon ekani haqida Fragment’ning ham, Telegram’ning ham rasmiy sahifalarida hech narsa topilmadi. Bu haqda faqat bitta Telegram kanal posti yozgan.

Postda yozilishicha, Fragment’dagi hamyonlarning to‘liq ro‘yxatida «Telegram Messenger» degan yangi yozuv paydo bo‘lgan. Uning ikonkasi va ro‘yxatdagi o‘rni eski «Wallet in Telegram»dan farq qiladi, bosilganda esa hozircha @wallet’ni ochadi. Post muallifi TON Connect hamyonlar reyestrida ham ikki xil yozuv borligini aytadi.

Bu gaplarning birortasi bu maqolada tasdiqlanmagan. Ro‘yxat o‘zgarib turishi mumkin, shuning uchun hozirgi holatni faqat o‘z ekraningizda ko‘rasiz.

## Rasman nima ma’lum va nima faqat mish-mish?

Quyidagi jadvalda rasmiy manbada tasdiqlangan gaplar tasdiqlanmaganlaridan ajratilgan.

| Da’vo | Holat | Manba |
|---|---|---|
| Fragment’da hamyon «Connect TON» tugmasi orqali ulanadi | Tasdiqlangan | [Fragment](https://fragment.com/about) |
| Fragment to‘g‘ri hamyon ulanganini qayta tekshirishni tavsiya qiladi | Tasdiqlangan | [Fragment](https://fragment.com/about) |
| Fragment maxfiy kalitlarni saqlamaydi va ularga tegmaydi | Tasdiqlangan | [Fragment](https://fragment.com/about) |
| Mini App’lar kripto hamyonlar bilan faqat TON Connect SDK orqali ishlaydi | Tasdiqlangan | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| TON Connect’da hamyon tanlovini cheklash taqiqlangan (funksiya yo‘qligi bundan mustasno) | Tasdiqlangan | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| Bot API’ga TON hamyon kartasi va o‘tkazma klasslari qo‘shilgan | Tasdiqlangan | [Bot API changelog](https://core.telegram.org/bots/api-changelog) |
| Ro‘yxatda alohida «Telegram Messenger» yozuvi bor | Tasdiqlanmagan | Kanal posti |
| Yangi yozuv @wallet’ni ochadi, o‘z havolasi va ko‘prigi bor | Tasdiqlanmagan | Kanal posti |
| Qaysi biri custodial, qaysi biri self-custodial | Rasmiy ma’lumot topilmadi | — |

## Fragment’da hamyonni qanday ulash kerak?

Ro‘yxatda qaysi nomlar ko‘rinishidan qat’i nazar, xavfsiz ulanish tartibi bir xil:

1. fragment.com manzilini brauzerning manzil satriga o‘zingiz yozib oching. Chatda yoki reklamada kelgan havolani bosmang.
2. Yuqori o‘ng burchakdagi «Connect TON» tugmasini bosing. Fragment’ning [qo‘llanmasida](https://fragment.com/about) ham shunday yozilgan.
3. Ro‘yxatdan o‘zingiz ishlatadigan hamyonni tanlang. Tanish bo‘lmagan nomni «nima bo‘larkin» deb sinab ko‘rmang.
4. Ochilgan hamyon ilovasida ulanish so‘rovini o‘qing: qaysi sayt ulanmoqchi ekanini tekshiring.
5. Ulangandan keyin Fragment’da ko‘ringan manzil o‘z hamyoningizniki ekanini solishtiring. Fragment ham ishni boshlashdan oldin to‘g‘ri hamyon ulanganini qayta tekshirishni tavsiya qiladi.
6. Boshqa hamyon ulanib qolgan bo‘lsa, uni uzing va kerakligini qayta ulang. To‘lovni faqat shundan keyin qiling.

### Ulanish so‘rovida nimaga qarash kerak

- **Sayt nomi.** So‘rovda fragment.com ko‘rinishi kerak. Boshqa nom yoki unga o‘xshatib yozilgan domen chiqsa, rad eting.
- **So‘rov turi.** Ulanish va tranzaksiya — ikki xil narsa. Ulanish paytida pul o‘tkazish so‘ralsa, to‘xtang.
- **Summa va oluvchi.** Tranzaksiya so‘rovida summa siz kutgan xaridga mos kelishini tekshiring.

### Xato holatlar

- **Notanish ilova ochildi.** Hech narsani tasdiqlamang, oynani yoping va ro‘yxatdan boshqa yozuvni tanlang.
- **Bo‘sh hamyon ulandi.** Ehtimol boshqa hamyon tanlangan. Uzing va pulingiz turgan hamyonni ulang.
- **Kerakli hamyon ro‘yxatda yo‘q.** Sahifani yangilang va to‘liq ro‘yxatni oching.

## TON Connect nima va Telegram uni qanday qoidalar bilan boshqaradi?

TON Connect — sayt yoki Mini App’ni hamyonga ulash usuli. Telegram’ning [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) qoidalari ilova ichida tranzaksiyani TON Connect orqali imzolashga ruxsat beradi.

Shu qoidalarda yana ikkita gap bor:

- Mini App’lar kripto hamyonlar bilan faqat TON Connect SDK orqali ishlashi mumkin.
- Hamyonlar tanlovini cheklash taqiqlangan. Faqat hamyonda kerakli funksiya bo‘lmasa, uni chiqarishga ruxsat bor.

Guidelines’da TON hamyonlariga misol qilib Wallet, Tonkeeper va MyTonWallet keltirilgan. Lekin u yerdagi «Wallet» aynan Telegram’ning hamyoni ekani sahifada yozilmagan, shuning uchun buni taxmin qilmaymiz.

> Bu qoidalar Telegram Mini App’lari uchun yozilgan. Fragment esa veb-sayt, lekin u ham hamyonni «Connect TON» tugmasi orqali ulaydi.

## «Telegram Messenger» va «Wallet in Telegram»dan qaysi birini tanlash kerak?

Qaysi yozuvni tanlash haqida na Telegram, na Fragment rasmiy tavsiya bergan. Shuning uchun amaliy qoidalarga tayaning:

- **Pulingiz qaysi hamyonda tursa, o‘shani tanlang.** Yozuvni faqat «yangi» bo‘lgani uchun tanlash shart emas.
- **Nima ochilganini kuzating.** Postga ko‘ra yangi yozuv hozircha @wallet’ni ochadi, lekin bu tasdiqlanmagan. Bosganingizda qaysi ilova ochilganini o‘zingiz ko‘ring.
- **Manzilni solishtiring.** Ikkala yozuv bitta hamyonni ochsa ham, ulangan manzil siz kutgan manzil ekanini tekshiring.
- **Alohida hamyon ham bo‘ladi.** Telegram ichidagi hamyonni ishlatmasangiz, Fragment misol qilgan Tonkeeper yoki MyTonWallet kabi alohida hamyon bilan ulanishingiz mumkin.

Telegram ichki hamyoni haqida batafsil: [Gram hamyon rostdan non-custodialmi](/blog/telegram-gram-hamyon-non-custodial-rostmi) va [Desktop’da @wallet havolasi ichki hamyonni ochyaptimi](/blog/telegram-desktop-wallet-havolasi-ichki-hamyon).

## Fragment’ga Telegram hamyonini ulash xavfsizmi?

Asosiy xavf soxta sayt va o‘qimasdan tasdiqlangan tranzaksiyada. Shuning uchun yuqoridagi tekshiruvlarni o‘tkazib yubormang.

Fragment o‘z [sahifasida](https://fragment.com/about) maxfiy kalitlarni hech qachon saqlamasligini va ularga tegmasligini yozadi. Shu sababli u hamyonni tiklab bera olmaydi. Fragment’ning so‘ziga ko‘ra, mablag‘ kalitlari faqat egasining qo‘lida bo‘ladi. Demak, seed-iborani yo‘qotsangiz, Fragment yordam bera olmaydi.

Telegram ichki hamyonida kalitlar qayerda saqlanishi bu maqolada tasdiqlanmagan, shuning uchun bu savolga aniq javob bermaymiz.

> Seed-ibora, Telegram login kodi va ikki bosqichli parolni hech qaysi saytga, botga yoki «yordamchi»ga bermang. Hamyonni ulash uchun ularning hech biri kerak emas.

Ulanishlarni ko‘rish va uzish haqida: [Telegram Wallet ulanishlarni sinxronlaydimi](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik). Hamyonga notanish NFT kelgan bo‘lsa: [spam NFT xavflimi](/blog/ton-hamyonga-spam-nft-keldi-xavflimi).

## Telegram’ning TON hamyon integratsiyasida rasman nima o‘zgardi?

Rasmiy manbada ko‘rinadigan o‘zgarishlar Fragment’da emas, Bot API’da. [Bot API changelog](https://core.telegram.org/bots/api-changelog)’ida quyidagilar qo‘shilgani yozilgan:

- TON hamyon kartasi uchun TonWalletCard, TonWalletCardSticker, TonNft va TonNftAttribute klasslari hamda ton_wallet_card maydoni.
- Xabarlar uchun TonWalletTransfer klassi va ton_wallet_transfer maydoni.
- Botga keladigan so‘rovda foydalanuvchining TON hamyon kartasi va uning hamyonida imzolangan ma’lumot bo‘lishi mumkin.

Bu o‘zgarishlar botlar uchun. Ular Fragment ro‘yxatida yangi yozuv paydo bo‘lganini isbotlamaydi. Changelog yozuvining sanasi va versiyasini keltirmaymiz, chunki ularni tekshirmadik.

## Telegram Premium olish uchun Fragment va TON hamyon shartmi?

Yo‘q, shart emas. Fragment bilan ishlash uchun TON hamyon ulash kerak. Bu yo‘lning afzallik va kamchiliklari haqida: [Fragment orqali Premium olish](/blog/fragment-telegram-premium).

Boshqa yo‘l — so‘mda to‘lash. Premiumtg botida ([@premiumtg_uzbot](https://t.me/premiumtg_uzbot)) faqat username kiritasiz va Click, Payme, Paynet yoki Uzum Bank bilan to‘laysiz. Xorijiy karta kerak emas, akkauntga kirish, login kodi va parol so‘ralmaydi. Obuna 10 soniyada avtomatik faollashadi.

| Muddat | Narx |
|---|---|
| 3 oy | ${narx(3)} |
| 6 oy | ${narx(6)} |
| 12 oy | ${narx(12)} |

Narx va mavjud to‘lov usullarini xariddan oldin botda tekshiring. Premiumtg mustaqil xizmat, Telegram bilan hamkorlikni da’vo qilmaydi. Premium statusni esa faqat Telegram beradi.

## Ko‘p so‘raladigan savollar

### Fragment’dagi «Telegram Messenger» yozuvi rasmiy Telegram hamyonimi?

Buni Telegram ham, Fragment ham e’lon qilmagan, yozuv haqida faqat kanal posti yozgan. Bosishdan oldin qaysi ilova ochilishi va qaysi manzil ulanishini o‘zingiz kuzating.

### Yangi yozuvni bossam, @wallet ochilyapti — bu xatomi?

Bu xato degani emas: kanal postida ham yangi yozuv hozircha @wallet’ni ochishi aytilgan, lekin rasman tasdiqlanmagan. Asosiysi, ulanish so‘rovidagi sayt nomini va ulangan manzilni tekshiring.

### Fragment’ga noto‘g‘ri hamyon ulab qo‘ysam nima qilaman?

Hech narsa to‘lamasdan ulanishni uzing va kerakli hamyonni qayta ulang. Fragment ham ish boshlashdan oldin ulangan hamyonni qayta tekshirishni maslahat beradi.

### Fragment hamyonimning kalitlarini oladimi?

Yo‘q: Fragment o‘z sahifasida maxfiy kalitlarni saqlamasligi va ularga tegmasligini yozadi. Shu sababli seed-ibora yo‘qolsa, hamyonni u tiklab bera olmaydi.

### Telegram ichki hamyoni O‘zbekistonda ishlaydimi?

Bu haqda rasmiy ma’lumot topilmadi. Telegram ilovangizda hamyon bo‘limi ochiladimi-yo‘qmi, o‘zingiz tekshirib ko‘ring.

### Fragment’da Telegram hamyoni o‘rniga Tonkeeper ulasam bo‘ladimi?

Ha, Fragment o‘z qo‘llanmasida TON hamyoniga misol qilib Tonkeeper va MyTonWallet’ni keltiradi. Pulingiz qaysi hamyonda bo‘lsa, ro‘yxatdan o‘shani tanlang.

### TON Connect ro‘yxatida hamyonim ko‘rinmasa nima qilish kerak?

Sahifani va hamyon ilovasini yangilab, «Connect TON» oynasida to‘liq ro‘yxatni oching. Telegram qoidalari Mini App’larga hamyonni faqat kerakli funksiya bo‘lmasa chiqarishga ruxsat beradi, Fragment sayti uchun esa bunday qoida rasman yozilmagan.`,
    ru: `## Правда ли, что в списке TON Connect на Fragment два кошелька Telegram?

Официально это не подтверждено. На официальных страницах Fragment и Telegram нет ни слова о том, что «Telegram Messenger» и «Wallet in Telegram» — два разных кошелька. Об этом написал только один пост в Telegram-канале.

По словам автора поста, в полном списке кошельков на Fragment появилась новая запись — «Telegram Messenger». У неё другая иконка и другое место в списке, чем у прежней «Wallet in Telegram», а при нажатии она пока открывает @wallet. Автор также утверждает, что в реестре кошельков TON Connect есть две разные записи.

Ни одно из этих утверждений в этой статье не подтверждено. Список может меняться, поэтому актуальное состояние вы увидите только на своём экране.

## Что известно официально, а что — только слухи?

В таблице подтверждённые официальными источниками утверждения отделены от неподтверждённых.

| Утверждение | Статус | Источник |
|---|---|---|
| На Fragment кошелёк подключается кнопкой «Connect TON» | Подтверждено | [Fragment](https://fragment.com/about) |
| Fragment советует перепроверить, что подключён нужный кошелёк | Подтверждено | [Fragment](https://fragment.com/about) |
| Fragment не хранит приватные ключи и не имеет к ним доступа | Подтверждено | [Fragment](https://fragment.com/about) |
| Mini App работают с криптокошельками только через TON Connect SDK | Подтверждено | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| Ограничивать выбор кошелька в TON Connect запрещено (кроме случаев, когда у кошелька нет нужной функции) | Подтверждено | [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) |
| В Bot API добавлены классы для карточки TON-кошелька и переводов | Подтверждено | [Bot API changelog](https://core.telegram.org/bots/api-changelog) |
| В списке есть отдельная запись «Telegram Messenger» | Не подтверждено | Пост в канале |
| Новая запись открывает @wallet, у неё своя ссылка и свой мост | Не подтверждено | Пост в канале |
| Какой из кошельков custodial, а какой self-custodial | Официальных данных нет | — |

## Как подключить кошелёк на Fragment?

Какие бы названия ни стояли в списке, безопасный порядок подключения один и тот же:

1. Откройте fragment.com, сами набрав адрес в адресной строке браузера. Не переходите по ссылкам из чатов и рекламы.
2. Нажмите кнопку «Connect TON» в правом верхнем углу. Так же написано в [инструкции Fragment](https://fragment.com/about).
3. Выберите в списке тот кошелёк, которым пользуетесь сами. Не нажимайте на незнакомое название из любопытства.
4. В открывшемся приложении кошелька прочитайте запрос на подключение: проверьте, какой сайт хочет подключиться.
5. После подключения сверьте адрес, который показывает Fragment, с адресом своего кошелька. Fragment и сам советует перед началом работы перепроверить, что подключён нужный кошелёк.
6. Если подключился не тот кошелёк, отключите его и подключите нужный. Платите только после этого.

### На что смотреть в запросе на подключение

- **Название сайта.** В запросе должен быть fragment.com. Если видите другое название или похожий на него домен — отклоните.
- **Тип запроса.** Подключение и транзакция — разные вещи. Если при подключении просят перевести деньги, остановитесь.
- **Сумма и получатель.** В запросе на транзакцию убедитесь, что сумма соответствует покупке, которую вы ожидаете.

### Ошибки и нестандартные ситуации

- **Открылось незнакомое приложение.** Ничего не подтверждайте, закройте окно и выберите в списке другую запись.
- **Подключился пустой кошелёк.** Вероятно, выбран не тот кошелёк. Отключите его и подключите тот, где лежат ваши деньги.
- **Нужного кошелька нет в списке.** Обновите страницу и откройте полный список.

## Что такое TON Connect и какие правила для него задаёт Telegram?

TON Connect — способ подключить сайт или Mini App к кошельку. Правила Telegram [Blockchain Guidelines](https://core.telegram.org/bots/blockchain-guidelines) разрешают подписывать транзакции внутри приложения через TON Connect.

В тех же правилах есть ещё два пункта:

- Mini App могут работать с криптокошельками только через TON Connect SDK.
- Ограничивать выбор кошельков запрещено. Убрать кошелёк можно только в том случае, если в нём нет нужной функции.

В Guidelines в качестве примеров TON-кошельков названы Wallet, Tonkeeper и MyTonWallet. Но на странице не сказано, что «Wallet» — это именно кошелёк Telegram, поэтому строить догадки не будем.

> Эти правила написаны для Mini App в Telegram. Fragment — это сайт, но кошелёк он тоже подключает через кнопку «Connect TON».

## Что выбрать: «Telegram Messenger» или «Wallet in Telegram»?

Официальных рекомендаций о том, какую запись выбирать, не дали ни Telegram, ни Fragment. Поэтому опирайтесь на практические правила:

- **Выбирайте тот кошелёк, где лежат ваши деньги.** Брать запись только потому, что она «новая», не нужно.
- **Следите, что открывается.** По словам автора поста, новая запись пока открывает @wallet, но это не подтверждено. Посмотрите сами, какое приложение откроется после нажатия.
- **Сверяйте адрес.** Даже если обе записи открывают один и тот же кошелёк, проверьте, что подключился именно ожидаемый адрес.
- **Подойдёт и отдельный кошелёк.** Если вы не пользуетесь кошельком внутри Telegram, можно подключиться через отдельный кошелёк — например, Tonkeeper или MyTonWallet, которые приводит в пример Fragment.

Подробнее о встроенном кошельке Telegram: [действительно ли Gram-кошелёк non-custodial](/blog/telegram-gram-hamyon-non-custodial-rostmi) и [открывает ли ссылка @wallet в Desktop встроенный кошелёк](/blog/telegram-desktop-wallet-havolasi-ichki-hamyon).

## Безопасно ли подключать кошелёк Telegram к Fragment?

Главные риски — поддельный сайт и транзакция, подтверждённая не глядя. Поэтому не пропускайте проверки, описанные выше.

Fragment на своей [странице](https://fragment.com/about) пишет, что никогда не хранит приватные ключи и не имеет к ним доступа. По этой же причине он не может восстановить кошелёк. По словам Fragment, ключи от средств есть только у их владельца. Значит, если вы потеряете seed-фразу, Fragment помочь не сможет.

Где хранятся ключи во встроенном кошельке Telegram, в этой статье не подтверждено, поэтому точного ответа на этот вопрос не даём.

> Не сообщайте seed-фразу, код входа в Telegram и пароль двухэтапной аутентификации ни сайтам, ни ботам, ни «помощникам». Для подключения кошелька ничего из этого не нужно.

Как просматривать и отключать подключения: [синхронизирует ли Telegram Wallet подключения](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik). Если на кошелёк пришёл незнакомый NFT: [опасен ли спам-NFT](/blog/ton-hamyonga-spam-nft-keldi-xavflimi).

## Что официально изменилось в интеграции TON-кошелька в Telegram?

Изменения, которые видны в официальных источниках, касаются не Fragment, а Bot API. В [Bot API changelog](https://core.telegram.org/bots/api-changelog) указано, что добавлены:

- классы TonWalletCard, TonWalletCardSticker, TonNft и TonNftAttribute, а также поле ton_wallet_card — для карточки TON-кошелька;
- класс TonWalletTransfer и поле ton_wallet_transfer — для сообщений;
- возможность передавать в запросе к боту карточку TON-кошелька пользователя и данные, подписанные его кошельком.

Эти изменения сделаны для ботов. Они не доказывают, что в списке Fragment появилась новая запись. Дату и версию этой записи в changelog мы не приводим, потому что не проверили их.

## Нужны ли Fragment и TON-кошелёк, чтобы купить Telegram Premium?

Нет, не обязательно. Для работы с Fragment нужно подключить TON-кошелёк. О плюсах и минусах этого пути: [покупка Premium через Fragment](/blog/fragment-telegram-premium).

Другой вариант — оплата в сумах. В боте Premiumtg ([@premiumtg_uzbot](https://t.me/premiumtg_uzbot)) достаточно указать username и оплатить через Click, Payme, Paynet или Uzum Bank. Иностранная карта не нужна, вход в аккаунт, код входа и пароль не запрашиваются. Подписка активируется автоматически за 10 секунд.

| Срок | Цена |
|---|---|
| 3 месяца | ${narx(3)} |
| 6 месяцев | ${narx(6)} |
| 12 месяцев | ${narx(12)} |

Цену и доступные способы оплаты проверяйте в боте перед покупкой. Premiumtg — независимый сервис и не заявляет о партнёрстве с Telegram. Сам статус Premium выдаёт только Telegram.

## Часто задаваемые вопросы

### Запись «Telegram Messenger» на Fragment — это официальный кошелёк Telegram?

Ни Telegram, ни Fragment об этом не объявляли — о записи написал только пост в канале. Прежде чем подтверждать что-либо, посмотрите сами, какое приложение откроется и какой адрес подключится.

### Нажимаю на новую запись, а открывается @wallet — это ошибка?

Не обязательно: в посте канала тоже сказано, что новая запись пока открывает @wallet, хотя официально это не подтверждено. Главное — проверить название сайта в запросе на подключение и подключённый адрес.

### Что делать, если я подключил к Fragment не тот кошелёк?

Ничего не оплачивайте, отключите кошелёк и подключите нужный. Fragment и сам советует перед началом работы убедиться, что подключён правильный кошелёк.

### Получает ли Fragment ключи от моего кошелька?

Нет: на своей странице Fragment пишет, что не хранит приватные ключи и не имеет к ним доступа. Поэтому при потере seed-фразы восстановить кошелёк он не сможет.

### Работает ли встроенный кошелёк Telegram в Узбекистане?

Официальной информации об этом найти не удалось. Проверьте сами, открывается ли раздел кошелька в вашем приложении Telegram.

### Можно ли подключить к Fragment Tonkeeper вместо кошелька Telegram?

Да, в своей инструкции Fragment приводит Tonkeeper и MyTonWallet как примеры TON-кошельков. Выбирайте в списке тот кошелёк, на котором лежат ваши деньги.

### Что делать, если моего кошелька нет в списке TON Connect?

Обновите страницу и приложение кошелька, затем откройте полный список в окне «Connect TON». Правила Telegram разрешают Mini App убирать кошелёк только при отсутствии нужной функции, а для сайта Fragment такое правило официально не прописано.`,
  },
};
