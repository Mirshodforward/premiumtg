// Avtoblogyoz yasagan maqola (2026-11-12). Niyat: macOS’da Telegram ishlatadigan odam chatdagi TON manzilni bosganda hamyon egasini ko‘rish, Tonscan’ni ochish va pul yuborish oynasi chiqishi rostmi, buni «Telegram macOS TON manzil bosish hamyon» kabi so‘zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/api-changelog
//   https://core.telegram.org/bots/api
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-macos-ton-manzil-chatda-bosish",
  date: "2026-11-12",
  reviewed: "2026-11-12",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram macOS’da chatdagi TON manzilni bossam hamyon oynasi ochiladimi?", ru: "Telegram на macOS: открывается ли окно кошелька при нажатии на TON-адрес?" },
  excerpt: { uz: `Rasman tasdiqlanmagan. Oyna, hamyon egasi, Tonscan va pul yuborish haqida faqat kanal posti yozgan. Rasman bitta narsa ma’lum: Bot API xabardagi TON manzilni alohida tur sifatida ajratadi.`, ru: `Официально не подтверждено: об окне, владельце кошелька, Tonscan и отправке денег писал только пост в канале. Известно одно: Bot API выделяет TON-адрес в сообщении в отдельный тип.` },
  keywords: ["telegram macos ton manzil","telegram ton manzil bosish hamyon","telegram chatda ton manzil","telegram macos hamyon beta","telegram ton hamyon egasi","ton_address telegram","telegram macos ton адрес","тон адрес в чате телеграм","кошелек telegram macos бета","telegram ton адрес нажать окно","tonscan telegram"],
  related: ["telegram-desktop-wallet-havolasi-ichki-hamyon","telegram-wallet-hamyon-ochish-faollashtirish","gram-org-ton-eksplorer-rasmiymi","telegram-wallet-ulanishlar-sinxronlash-xavfsizlik"],
  sources: [{"url":"https://core.telegram.org/bots/api-changelog","title":"Bot API changelog"},{"url":"https://core.telegram.org/bots/api","title":"Telegram Bot API"}],
  content: {
    uz: `## macOS’da TON manzilni bosganda hamyon oynasi chiqishi rostmi?

Hozircha bu rasman tasdiqlanmagan. Bu haqda Telegram kanallaridan biridagi post yozgan. Postga ko‘ra, chatdagi TON manzil bosilsa yangi oyna ochiladi. Unda hamyon egasini ko‘rish, Tonscan’ni ochish va pul yuborish imkoni bo‘ladi. Post macOS uchun Telegram’ning beta versiyasi haqida.

Rasmiy manbada bundan boshqa narsa tasdiqlangan. [Bot API o‘zgarishlar ro‘yxatiga](https://core.telegram.org/bots/api-changelog) ko‘ra, 10.4 versiyada MessageEntity klassiga TON blokcheynidagi manzillar uchun «ton_address» turi qo‘shilgan. Asosiy [Bot API hujjati](https://core.telegram.org/bots/api) ham bu turni «TON blokcheynidagi manzil» deb ta’riflaydi.

Demak, Telegram xabar ichidagi TON manzilni oddiy matndan ajrata boshlagan. Lekin bundan macOS ilovasida manzil bosilganda qanday oyna chiqishi haqida xulosa chiqarib bo‘lmaydi. Funksiya qaysi macOS versiyasida va qachon paydo bo‘lgani ham rasmiy manbalarda topilmadi.

## Kanal postida aniq nima deyilgan?

Post qisqa. Unda aytilishicha, macOS beta versiyasidagi yangi hamyon bilan istalgan chatda TON manzilni bossangiz, yangi oyna ochiladi. Postga ko‘ra, oynada uch imkoniyat bor:

- hamyon kimga tegishli ekanini ko‘rish — rasmiy manbada tasdiqlanmagan;
- Tonscan eksplorerini ochish — rasmiy manbada tasdiqlanmagan;
- o‘rnatilgan hamyondan shu manzilga «dublon» yuborish — rasmiy manbada tasdiqlanmagan.

«Dublon» qaysi valyuta ekanini aniqlay olmadik. Uni TON deb ham, boshqa token deb ham taxmin qilmaymiz.

Yana ikki narsani yodda tuting:

- kanal posti rasmiy manba emas, u faqat mavzuni ko‘taradi;
- beta versiyadagi funksiya barqaror versiyaga o‘zgargan holda chiqishi yoki umuman chiqmasligi mumkin.

Yana bir aniqlik kerak. Mac kompyuterlarda Telegram’ning macOS uchun alohida ilovasidan ham, Telegram Desktop’dan ham foydalanish mumkin. Post macOS ilovasi haqida, shuning uchun Telegram Desktop’da ham shunday oyna bo‘lishi alohida tasdiqlanmagan.

## Rasmiy manbalarda TON manzil haqida nima bor?

Quyidagi jadvalda postdagi da’volar Telegram hujjatlari bilan solishtirilgan.

| Funksiya yoki da’vo | Rasmiy manbada | Holat |
|---|---|---|
| Xabardagi TON manzil alohida tur sifatida ajratiladi | Bot API 10.4: MessageEntity’ga «ton_address» turi qo‘shilgan | Tasdiqlangan (Bot API darajasida) |
| Foydalanuvchining TON hamyon kartasi | TonWalletCard klassi qo‘shilgan; shaxsiy chatlarda karta profil sahifasida ko‘rsatiladi | Tasdiqlangan |
| Hamyon o‘tkazmasi haqida xizmat xabari | Message klassiga TonWalletTransfer klassi va ton_wallet_transfer maydoni qo‘shilgan | Tasdiqlangan |
| Boy matnli xabar (RichMessage) ichidagi TON manzil | RichTextTonAddress klassi qo‘shilgan | Tasdiqlangan |
| macOS’da manzil bosilganda yangi oyna | Topilmadi | Tasdiqlanmagan |
| Oynada hamyon egasini ko‘rish | Topilmadi | Tasdiqlanmagan |
| Oynadan Tonscan’ni ochish | Topilmadi | Tasdiqlanmagan |
| Oynadan ichki hamyon orqali pul yuborish | Topilmadi | Tasdiqlanmagan |

Shu versiyada TonWalletCardSticker, TonNft va TonNftAttribute klasslari ham qo‘shilgan. Ular hamyon kartasi va NFT’larni tasvirlash bilan bog‘liq, lekin ilovada qanday ko‘rinishi hujjatda yozilmagan.

## Bot API yangilanishi oddiy foydalanuvchi uchun nimani anglatadi?

Bot API — bot yozadigan dasturchilar uchun hujjat. U ilova interfeysini tasvirlamaydi: qaysi tugma qayerda turishi va qanday oyna ochilishi unda yozilmaydi.

Shunga qaramay, hujjatga qo‘shilgan turlardan bir narsa aniq bo‘ladi. Telegram endi TON bilan bog‘liq uch xil ma’lumotni alohida ajratadi:

- xabar ichidagi TON manzil;
- foydalanuvchining TON hamyon kartasi;
- hamyon o‘tkazmalari haqidagi xizmat xabarlari.

«Bu manzil kimniki?» degan savolga eng yaqin tasdiqlangan fakt — hamyon kartasi. Hujjatga ko‘ra, shaxsiy chatlarda foydalanuvchining TON hamyon kartasi uning profil sahifasida ko‘rsatiladi. Ammo chatdagi manzilni bosganda shu karta ochilishi hujjatda yozilmagan.

Tugmalar qanday ko‘rinishini faqat ilovaning o‘zida ko‘rasiz. Kompyuterdagi ichki hamyon haqidagi shunga o‘xshash da’voni [Telegram Desktop’dagi @wallet havolasi haqidagi maqolada](/blog/telegram-desktop-wallet-havolasi-ichki-hamyon) tekshirganmiz. Hamyon ochish shartlari [Telegram Wallet qanday ochiladi](/blog/telegram-wallet-hamyon-ochish-faollashtirish) maqolasida yozilgan.

## O‘zingizda bu funksiya bor-yo‘qligini qanday tekshirasiz?

Postga ishonish-ishonmaslik o‘rniga ilovangizni o‘zingiz tekshirib ko‘ring. Buning uchun pul yuborish shart emas.

1. Telegram’ni faqat rasmiy manbadan — [telegram.org](https://telegram.org) yoki App Store’dan o‘rnating va eng so‘nggi versiyaga yangilang.
2. «Saqlangan xabarlar» chatiga o‘zingizning TON manzilingizni yuboring. Begonaning manzili bilan sinamang.
3. Manzil havola yoki alohida belgilangan matn bo‘lib ko‘rinyaptimi, tekshiring.
4. Manzil ustiga bosing va qanday oyna yoki menyu chiqqanini kuzating. Hech qanday summa kiritmang va hech narsani tasdiqlamang.
5. Oyna chiqmasa, funksiya sizning versiyangizda hali yo‘q yoki faqat beta versiyada bo‘lishi mumkin.
6. Yangiliklarni [Telegram blogi](https://telegram.org/blog) va versiya tavsiflarida kuzatib boring.

Sinov paytida uchraydigan holatlar:

- **Manzil oddiy matn bo‘lib qoldi.** Ilova bu turni hali qo‘llamayapti yoki manzil noto‘g‘ri nusxalangan bo‘lishi mumkin: bo‘sh joy, qator uzilishi yoki ortiqcha belgi bor-yo‘qligini tekshiring.
- **Faqat nusxalash menyusi chiqdi.** Bu ham ilovada maxsus oyna yo‘qligini bildirishi mumkin.
- **Oyna chiqdi, lekin tugmalar boshqacha.** Hujjatga emas, ilovadagi yozuvlarga qarang va har bir tugmani bosishdan oldin uning matnini o‘qing.

## Chatdagi TON manzilga pul yuborishdan oldin nimani tekshirish kerak?

Funksiya bor bo‘lsin-yo‘q bo‘lsin, chatda yozilgan manzilga pul yuborishda ehtiyot choralari bir xil:

- **Manzilni to‘liq solishtiring.** Faqat boshi va oxirini emas, butun satrni tekshiring: bir belgi farqi ham boshqa hamyonni bildiradi.
- **Yuboruvchini boshqa yo‘l bilan tasdiqlang.** Do‘stingiz manzil yuborgan bo‘lsa, qo‘ng‘iroq qiling yoki ovozli xabar so‘rang. Uning akkaunti buzilgan bo‘lishi mumkin.
- **Avval kichik summa yuboring.** Katta o‘tkazmadan oldin pul to‘g‘ri yetib borganiga ishonch hosil qiling.
- **Eksplorerda manzilni ko‘ring.** Qaysi eksplorer rasmiy ekani va tranzaksiyani qanday tekshirish haqida [gram.org eksplorer haqidagi maqolada](/blog/gram-org-ton-eksplorer-rasmiymi) yozganmiz.
- **Xatoni tuzatishga ishonmang.** Blokcheyndagi o‘tkazmada bank ilovasidagidek «bekor qilish» tugmasi bor deb hisoblamang. Shuning uchun tekshirishni yuborishdan oldin qiling.

> Manzil bosilganda ochilgan oyna yoki bot sizdan seed-ibora, login kodi, parol yoki «tasdiqlash uchun» oldindan pul so‘rasa, bu firibgarlik belgisi. Oynani yoping va hech narsa kiritmang.

Telegram login kodini hech qachon hech kimga bermang. Username esa ochiq ma’lumot, u bilan akkauntga kirib bo‘lmaydi — bu farq [username berish xavfsizligi haqidagi maqolada](/blog/username-berish-xavfsizmi) tushuntirilgan.

## Hamyon egasini ko‘rsatish xavfsizmi va maxfiylik nima bo‘ladi?

Rasman faqat shu ma’lum: shaxsiy chatlarda foydalanuvchining TON hamyon kartasi uning profil sahifasida ko‘rsatiladi. Bunday karta Telegram profilingizni hamyoningiz bilan bog‘lashi mumkin.

Bu bog‘lanishni kimlar ko‘ra olishi va uni qanday yashirish mumkinligi rasmiy manbalarda tasdiqlanmagan. Shuning uchun maxfiylik sozlamalarini ilovaning o‘zida tekshiring.

Yana bir jihat: eksplorerlarda manzil bo‘yicha tranzaksiyalarni ko‘rish mumkin. Manzilingiz profilingizga bog‘lansa, bu ma’lumotlar sizga nisbatan aniqroq bo‘lib qoladi. Manzilni ochiq guruh va kanallarda tarqatishdan oldin buni o‘ylab ko‘ring.

Hamyonga ulangan ilova va saytlarni nazorat qilish va ulanishni uzish haqida [Telegram Wallet ulanishlari haqidagi maqolada](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik) yozganmiz.

## Bu Telegram Premium bilan bog‘liqmi?

Rasmiy manbalarda TON manzil va hamyon kartasi funksiyalari Premium obunasiga bog‘langani yozilmagan. Shuning uchun ularni faqat Premium foydalanuvchilarga ochiq deb aytmaymiz.

Premium’ni TON bilan to‘lab olish mumkin, lekin bu ko‘p bosqichli jarayon. Uning afzallik va kamchiliklarini [TON orqali Telegram Premium](/blog/ton-orqali-telegram-premium) maqolasida ko‘rib chiqqanmiz.

So‘mda to‘lash qulayroq bo‘lsa, Premium’ni [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) orqali olish mumkin. Faqat username kerak: login kodi va parol so‘ralmaydi. To‘lov so‘mda Click, Payme, Paynet yoki Uzum Bank orqali qilinadi, obuna 10 soniyada avtomatik faollashadi.

| Paket | Narx |
|---|---|
| 3 oy | ${narx(3)} |
| 6 oy | ${narx(6)} |
| 12 oy | ${narx(12)} |

Narx va mavjud to‘lov usullarini xariddan oldin botda tekshiring.

## Ko‘p so‘raladigan savollar

### Windows’dagi Telegram Desktop’da ham TON manzilni bossam oyna ochiladimi?

Bunga rasmiy tasdiq topilmadi. Da’vo faqat macOS beta versiyasi haqida aytilgan. O‘z kompyuteringizda bilish uchun ilovani yangilang va o‘z manzilingizni «Saqlangan xabarlar»ga yuborib bosib ko‘ring.

### «Dublon» nima va u TON bilan bir narsami?

Bu nom kanal postida uchraydi, rasmiy manbalarda esa qaysi valyuta ekani tushuntirilmagan. Aniq ma’lumot chiqmaguncha uni TON bilan bir narsa deb hisoblamang.

### Tonscan Telegram’ning rasmiy eksploreri hisoblanadimi?

Biz ko‘rgan Telegram hujjatlarida Tonscan rasmiy eksplorer deb atalmagan, chatdagi oynada chiqishi ham tasdiqlanmagan. Qaysi eksplorerdan foydalansangiz ham, manzil va tranzaksiya xeshini o‘zingiz solishtiring.

### Telegram chatda yozilgan TON manzilni avtomatik taniydimi?

Bot API’da xabar ichidagi TON manzil uchun alohida «ton_address» turi bor. Ammo ilova bunday manzilni qanday ko‘rsatishi va bosilganda nima qilishi rasmiy hujjatda tasvirlanmagan.

### TON manzilim profilimda boshqalarga ko‘rinib qoladimi?

Hujjatda shaxsiy chatlarda foydalanuvchining TON hamyon kartasi profil sahifasida ko‘rsatilishi aytilgan. Uni kimlar ko‘rishi va yashirish mumkinmi, bu tasdiqlanmagan, shuning uchun ilovadagi maxfiylik sozlamalarini tekshiring.

### Beta versiyani o‘rnatib bu funksiyani sinash xavfsizmi?

Beta versiyada xatolar bo‘lishi va funksiyalar keyinroq o‘zgarishi mumkin. Ilovani faqat rasmiy manbadan o‘rnating, sinovni esa pul yubormasdan, o‘z manzilingiz bilan qiling.

### Noto‘g‘ri TON manzilga yuborilgan pulni qaytarish mumkinmi?

Pulni qaytara olishingizga ishonmang: blokcheyndagi o‘tkazmada bank ilovasidagidek bekor qilish tugmasi bor deb hisoblamang. Xatoning oldini olish uchun manzilni oxirigacha solishtiring va katta summadan oldin kichik summa yuborib ko‘ring.`,
    ru: `## Правда ли, что на macOS при нажатии на TON-адрес открывается окно кошелька?

Пока официального подтверждения нет. Об этом написал пост в одном из Telegram-каналов. По его словам, если нажать на TON-адрес в чате, откроется новое окно. В нём можно увидеть владельца кошелька, открыть Tonscan и отправить деньги. Пост касается бета-версии Telegram для macOS.

Официальные источники подтверждают другое. Согласно [списку изменений Bot API](https://core.telegram.org/bots/api-changelog), в версии 10.4 в класс MessageEntity добавили тип «ton_address» для адресов в блокчейне TON. Основная [документация Bot API](https://core.telegram.org/bots/api) тоже описывает этот тип как «адрес в блокчейне TON».

Получается, Telegram начал отличать TON-адрес в сообщении от обычного текста. Но какое окно появится в приложении для macOS при нажатии на адрес, из этого понять нельзя. В какой версии macOS и когда появилась функция, официальные источники тоже не сообщают.

## Что именно сказано в посте канала?

Пост короткий. В нём говорится, что в бета-версии для macOS с новым кошельком можно нажать на TON-адрес в любом чате, и откроется новое окно. По словам автора, в окне есть три возможности:

- посмотреть, кому принадлежит кошелёк, — официально не подтверждено;
- открыть обозреватель Tonscan — официально не подтверждено;
- отправить на этот адрес «дублоны» из встроенного кошелька — официально не подтверждено.

Что такое «дублон», мы выяснить не смогли. Гадать, TON это или другой токен, не будем.

Учтите ещё две вещи:

- пост в канале не является официальным источником, он только поднимает тему;
- функция из бета-версии может выйти в стабильной версии в изменённом виде или не выйти совсем.

И одно уточнение. На Mac можно пользоваться и отдельным приложением Telegram для macOS, и Telegram Desktop. Пост говорит о приложении для macOS, поэтому появится ли такое окно в Telegram Desktop, тоже не подтверждено.

## Что официальные источники говорят о TON-адресах?

В таблице заявления из поста сопоставлены с документацией Telegram.

| Функция или заявление | В официальном источнике | Статус |
|---|---|---|
| TON-адрес в сообщении выделяется в отдельный тип | Bot API 10.4: в MessageEntity добавлен тип «ton_address» | Подтверждено (на уровне Bot API) |
| Карточка TON-кошелька пользователя | Добавлен класс TonWalletCard; в личных чатах карточка показывается на странице профиля | Подтверждено |
| Служебное сообщение о переводе из кошелька | В класс Message добавлены класс TonWalletTransfer и поле ton_wallet_transfer | Подтверждено |
| TON-адрес внутри сообщения с форматированием (RichMessage) | Добавлен класс RichTextTonAddress | Подтверждено |
| Новое окно при нажатии на адрес в macOS | Не найдено | Не подтверждено |
| Просмотр владельца кошелька в окне | Не найдено | Не подтверждено |
| Открытие Tonscan из окна | Не найдено | Не подтверждено |
| Отправка денег из окна через встроенный кошелёк | Не найдено | Не подтверждено |

В той же версии добавили классы TonWalletCardSticker, TonNft и TonNftAttribute. Они связаны с описанием карточки кошелька и NFT, но как это выглядит в приложении, в документации не сказано.

## Что обновление Bot API значит для обычного пользователя?

Bot API — документация для разработчиков ботов. Интерфейс приложения она не описывает: где стоит кнопка и какое окно открывается, там не пишут.

И всё же из новых типов кое-что ясно. Теперь Telegram отдельно выделяет три вида данных, связанных с TON:

- TON-адрес внутри сообщения;
- карточку TON-кошелька пользователя;
- служебные сообщения о переводах из кошелька.

Ближе всего к вопросу «чей это адрес?» подходит подтверждённый факт о карточке кошелька. Согласно документации, в личных чатах карточка TON-кошелька пользователя показывается на странице его профиля. Но о том, что эта карточка открывается при нажатии на адрес в чате, в документации не сказано.

Как выглядят кнопки, можно увидеть только в самом приложении. Похожее заявление о встроенном кошельке на компьютере мы разбирали в [статье о ссылке @wallet в Telegram Desktop](/blog/telegram-desktop-wallet-havolasi-ichki-hamyon). Условия открытия кошелька описаны в статье [«Как открыть Telegram Wallet»](/blog/telegram-wallet-hamyon-ochish-faollashtirish).

## Как проверить, есть ли эта функция у вас?

Вместо того чтобы верить или не верить посту, проверьте своё приложение сами. Отправлять деньги для этого не нужно.

1. Установите Telegram только из официального источника — с [telegram.org](https://telegram.org) или из App Store — и обновите до последней версии.
2. Отправьте в чат «Избранное» свой собственный TON-адрес. Не проверяйте на чужом адресе.
3. Посмотрите, отображается ли адрес как ссылка или выделенный текст.
4. Нажмите на адрес и посмотрите, какое окно или меню появится. Не вводите сумму и ничего не подтверждайте.
5. Если окна нет, функции в вашей версии, возможно, ещё нет или она доступна только в бете.
6. Следите за новостями в [блоге Telegram](https://telegram.org/blog) и в описаниях версий.

Что может произойти во время проверки:

- **Адрес остался обычным текстом.** Возможно, приложение ещё не поддерживает этот тип или адрес скопирован с ошибкой: проверьте, нет ли пробела, переноса строки или лишнего символа.
- **Появилось только меню копирования.** Это тоже может значить, что специального окна в приложении нет.
- **Окно появилось, но кнопки другие.** Ориентируйтесь не на документацию, а на надписи в приложении и читайте текст каждой кнопки, прежде чем нажать.

## Что проверить перед отправкой денег на TON-адрес из чата?

Есть функция или нет, меры предосторожности при переводе на адрес из чата одинаковы:

- **Сверяйте адрес целиком.** Не только начало и конец, а всю строку: даже один отличающийся символ означает другой кошелёк.
- **Подтвердите отправителя другим способом.** Если адрес прислал друг, позвоните ему или попросите голосовое сообщение. Его аккаунт могли взломать.
- **Сначала отправьте небольшую сумму.** Перед крупным переводом убедитесь, что деньги дошли правильно.
- **Посмотрите адрес в обозревателе.** Какой обозреватель официальный и как проверить транзакцию, мы писали в [статье об обозревателе gram.org](/blog/gram-org-ton-eksplorer-rasmiymi).
- **Не рассчитывайте исправить ошибку.** Не думайте, что у перевода в блокчейне есть кнопка «отменить», как в банковском приложении. Поэтому проверяйте всё до отправки.

> Если окно или бот, открывшийся после нажатия на адрес, просит seed-фразу, код входа, пароль или предоплату «для подтверждения», это признак мошенничества. Закройте окно и ничего не вводите.

Никогда никому не сообщайте код входа в Telegram. А username — открытая информация, по нему войти в аккаунт нельзя. Разницу мы объяснили в [статье о безопасности передачи username](/blog/username-berish-xavfsizmi).

## Безопасно ли показывать владельца кошелька и что с приватностью?

Официально известно только одно: в личных чатах карточка TON-кошелька пользователя показывается на странице его профиля. Такая карточка может связать ваш профиль в Telegram с вашим кошельком.

Кто может видеть эту связь и как её скрыть, официальные источники не подтверждают. Поэтому проверьте настройки конфиденциальности в самом приложении.

Ещё один момент: в обозревателях по адресу можно посмотреть транзакции. Если адрес привязан к вашему профилю, эти данные становятся гораздо точнее связаны именно с вами. Подумайте об этом, прежде чем публиковать адрес в открытых группах и каналах.

Как контролировать приложения и сайты, подключённые к кошельку, и как отключать их, мы писали в [статье о подключениях Telegram Wallet](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik).

## Связано ли это с Telegram Premium?

В официальных источниках не сказано, что функции TON-адреса и карточки кошелька привязаны к подписке Premium. Поэтому мы не утверждаем, что они доступны только пользователям Premium.

Premium можно оплатить в TON, но это многошаговый процесс. Его плюсы и минусы мы разобрали в статье [«Telegram Premium через TON»](/blog/ton-orqali-telegram-premium).

Если удобнее платить в сумах, Premium можно оформить через [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Нужен только username: код входа и пароль не запрашиваются. Оплата в сумах через Click, Payme, Paynet или Uzum Bank, подписка активируется автоматически за 10 секунд.

| Пакет | Цена |
|---|---|
| 3 месяца | ${narx(3)} |
| 6 месяцев | ${narx(6)} |
| 12 месяцев | ${narx(12)} |

Перед покупкой проверьте в боте цену и доступные способы оплаты.

## Часто задаваемые вопросы

### Откроется ли такое окно в Telegram Desktop на Windows, если нажать на TON-адрес?

Официального подтверждения этому нет: заявление касалось только бета-версии для macOS. Чтобы проверить у себя, обновите приложение, отправьте свой адрес в «Избранное» и нажмите на него.

### Что такое «дублон» и это то же самое, что TON?

Это название встречается в посте канала, а в официальных источниках не объясняется, что это за валюта. Пока нет точных данных, не считайте его тем же, что TON.

### Tonscan — официальный обозреватель Telegram?

В документации Telegram, которую мы изучили, Tonscan официальным обозревателем не назван, а его появление в окне чата не подтверждено. Каким бы обозревателем вы ни пользовались, сверяйте адрес и хеш транзакции сами.

### Распознаёт ли Telegram TON-адрес в чате автоматически?

В Bot API есть отдельный тип «ton_address» для TON-адреса внутри сообщения. Однако как приложение показывает такой адрес и что происходит при нажатии, в официальной документации не описано.

### Будет ли мой TON-адрес виден другим в профиле?

По документации, в личных чатах карточка TON-кошелька пользователя показывается на странице профиля. Кто её видит и можно ли её скрыть, не подтверждено, поэтому загляните в настройки конфиденциальности приложения.

### Безопасно ли ставить бета-версию, чтобы попробовать эту функцию?

В бете бывают ошибки, а функции позже могут измениться. Устанавливайте приложение только из официального источника и проверяйте функцию на своём адресе, ничего не отправляя.

### Можно ли вернуть деньги, отправленные на неверный TON-адрес?

На возврат лучше не рассчитывать: не думайте, что у перевода в блокчейне есть кнопка отмены, как в банковском приложении. Чтобы избежать ошибки, сверяйте адрес до последнего символа и перед крупным переводом отправляйте пробную небольшую сумму.`,
  },
};
