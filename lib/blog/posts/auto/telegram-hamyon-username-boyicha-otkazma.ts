// Avtoblogyoz yasagan maqola (2026-11-12). Niyat: Hamyondan foydalanadigan Telegram foydalanuvchisi «telegram hamyon username orqali o'tkazma» deb qidiradi. U yangi betada Gram hamyon manzilini akkauntga bog'lab, username bo'yicha pul yuborish rostmi, bu ixtiyoriymi va anonimlikka qanday ta'sir qilishini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/api
//   https://fragment.com/about
//   https://fragment.com/username/resolved
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-hamyon-username-boyicha-otkazma",
  date: "2026-11-12",
  reviewed: "2026-11-12",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegram hamyonda username orqali o‘tkazma: rostmi va ixtiyoriymi?", ru: "Перевод по username в кошельке Telegram: правда? Обязательна ли привязка" },
  excerpt: { uz: `Hozircha tasdiqlanmagan: username bo‘yicha pul yuborish haqida faqat kanal posti yozgan. Rasman bitta narsa ma’lum: Bot API profilda ko‘rinadigan TON hamyon kartasini qo‘shgan.`, ru: `Пока не подтверждено: о переводах по username написал только пост в канале. Официально известно одно: в Bot API появилась карточка TON-кошелька, которая видна в профиле.` },
  keywords: ["telegram hamyon username orqali o'tkazma","telegram wallet username bo'yicha pul yuborish","gram hamyon akkauntga bog'lash","telegram ton hamyon kartasi profil","telegram hamyon anonimlik","ton manzil username","перевод по юзернейму telegram кошелек","привязать кошелек к аккаунту telegram","ton wallet card telegram","перевод TON по username","telegram кошелек анонимность"],
  related: ["telegram-wallet-ulanishlar-sinxronlash-xavfsizlik","telegram-macos-ton-manzil-chatda-bosish","telegram-wallet-walt-nomi-ozgardimi","username-berish-xavfsizmi"],
  sources: [{"url":"https://core.telegram.org/bots/api","title":"Telegram Bot API"},{"url":"https://fragment.com/about","title":"How does Fragment work?"},{"url":"https://fragment.com/username/resolved","title":"resolved (Fragment)"}],
  content: {
    uz: `## Telegram hamyonga username orqali pul yuborish rostmi?

Bu hozircha rasmiy manbalarda tasdiqlanmagan. Telegram hamyonga @username yozib pul yuborish mumkinligi haqida Telegram kanalidagi bir post yozgan. Telegram’ning rasmiy hujjatlarida bunday jarayon tasvirlanmagan.

Postda quyidagilar aytilgan:

- yangi beta-versiyada Gram hamyon manzilini Telegram akkauntiga bog‘lash mumkin bo‘ladi;
- shunda uzun manzilni qo‘lda kiritmasdan, username bo‘yicha pul yuborsa bo‘ladi;
- hamyon manzilini uzoq bossangiz, amallar ro‘yxati chiqadi.

Bu gaplarning birortasi ham rasman tasdiqlanmagan. Beta-versiya, uzoq bosish menyusi yoki telegram.org blogidagi e’lon haqida ma’lumot topilmadi. Bog‘lash ixtiyoriy bo‘ladimi yoki majburiymi, bu ham noma’lum.

Rasman boshqa narsa ma’lum. [Telegram Bot API](https://core.telegram.org/bots/api)’ning 10.4 versiyasida foydalanuvchining profil sahifasida ko‘rinadigan TON hamyon kartasi qo‘shilgan. TON hamyon bilan qilingan o‘tkazma esa chatda xizmat xabari bo‘lib chiqadi. Demak, hujjatlarga ko‘ra hamyon bilan profil bir-biriga yaqinlashyapti. Lekin «username yozdim, pul ketdi» degan jarayon u yerda tasvirlanmagan.

## Rasmiy hujjatlarda hamyon va akkaunt haqida nima yozilgan?

Jadvalda kanalda aytilgan gaplar hujjatlardagi ma’lumot bilan solishtirilgan.

| Da’vo yoki element | Rasmiy holat | Manba |
|---|---|---|
| Profil sahifasida TON hamyon kartasi (ChatFullInfo.ton_wallet_card) | Tasdiqlangan | Bot API 10.4 |
| TonWalletCard, TonWalletCardSticker, TonNft va TonNftAttribute klasslari | Tasdiqlangan | Bot API 10.4 o‘zgarishlar ro‘yxati |
| Hamyon kartasidagi stikerlar joylashuvi (AreaPosition) | Tasdiqlangan | Bot API 10.4 |
| Chatda TON hamyon o‘tkazmasi haqida xizmat xabari (Message.ton_wallet_transfer) | Tasdiqlangan | Bot API |
| Xabar ichidagi TON manzil alohida element sifatida (RichTextTonAddress) | Tasdiqlangan | Bot API 10.4 |
| Username bo‘yicha pul yuborish | Tasdiqlanmagan | Faqat kanal posti |
| Bog‘lash ixtiyoriy yoki majburiy ekani | Tasdiqlanmagan | Rasmiy gap topilmadi |
| Manzil uzoq bosilganda chiqadigan amallar menyusi | Tasdiqlanmagan | Faqat kanal posti |

AreaPosition avval StoryAreaPosition deb atalgan. Endi u TON hamyon kartalaridagi stikerlar joylashuvini ham tavsiflagani uchun nomi o‘zgartirilgan.

> Bot API — bot yaratuvchilar uchun hujjat. Unda Telegram ilovasidagi tugma va ekranlar tasvirlanmaydi. Hujjatda biror maydon borligi funksiya hamma uchun ishga tushganini bildirmaydi. TonWalletCard’ning to‘liq ta’rifi bu maqola uchun ko‘rib chiqilmagan.

## Hamyon kartasi profilda ko‘rinsa, bu nimani anglatadi?

Bot API’ga ko‘ra, TON hamyon kartasi foydalanuvchining profil sahifasida ko‘rinadi. Profilingizni esa boshqalar ham ochadi. Demak, kartani boshqa odamlar ham ko‘rishi mumkin.

Kartada aniq nima chiqishi (manzilmi, NFT’larmi yoki boshqa ma’lumotmi) bu maqolada tasdiqlanmagan. Kartani kim ko‘rishini sozlash mumkinmi, bu ham noma’lum. Funksiya chiqqanda buni ilovadagi profil va maxfiylik sozlamalarida tekshiring.

Kartaga oid klasslar orasida stikerlar (TonWalletCardSticker) va NFT (TonNft, TonNftAttribute) ham bor. Bundan karta bezak va kolleksiya ko‘rsatish uchun ham ishlatilishi mumkin degan xulosa chiqadi. Lekin aniq tafsilotlar hujjatda emas, ilovaning o‘zida ko‘rinadi.

Hamyonni sovg‘alar bilan bezash haqidagi mish-mishlarni [hamyonni sovg‘alar bilan bezash rostmi](/blog/telegram-hamyon-sovgalar-bilan-bezash-konsept) maqolasida tahlil qilganmiz.

## Hamyonni akkauntga bog‘lash anonimlikka qanday ta’sir qiladi?

Qulaylik oshadi, anonimlik esa kamayishi mumkin. Bu borada quyidagilarni hisobga oling:

- **Manzil va shaxs bog‘lanadi.** Tranzaksiyalarni eksplorerda manzil bo‘yicha ko‘rish mumkin. Manzil username bilan bog‘lansa, uning kimga tegishli ekanini bilish osonlashishi mumkin. Bu umumiy mantiq, Telegram’ning rasmiy bayonoti emas.
- **Ixtiyoriymi, majburiymi — noma’lum.** Bu haqda rasmiy gap topilmadi.
- **Fragment boshqa xizmat.** [Fragment](https://fragment.com/about) hamyoningizni Telegram akkauntingiz bilan bog‘laydigan hech qanday ma’lumotni saqlamaydi. Lekin Fragment’da taklifni qaysi TON hamyon bergani hammaga ko‘rinadi.
- **Fragment’da bog‘lanishning boshqa turi bor.** U yerda username sotib olsangiz, uning egaligi xarid uchun ishlatilgan TON hamyonga o‘tadi.
- **Username o‘zi ochiq ma’lumot.** U profilda hammaga ko‘rinib turadi. Batafsil: [username berish xavflimi](/blog/username-berish-xavfsizmi).

Fragment qoidalari bilan Telegram ilovasidagi hamyon kartasini aralashtirmang. Ular alohida xizmatlar. Birining qoidasi ikkinchisiga avtomatik tarzda o‘tmaydi.

### Bog‘lash taklifi chiqsa, nimani tekshirish kerak

- Ekranda «keyinroq» yoki «rad etish» varianti bormi.
- Bog‘langan manzilni keyin sozlamalarda uzish mumkinmi.
- Profilingizda manzil, kartaning o‘zi yoki NFT’lar ko‘rinadimi va buni kim ko‘radi.
- Bog‘lanadigan hamyonda nimalar bor. Shaxsiy jamg‘arma va ochiq to‘lovlar uchun alohida hamyon ishlatish oddiy ehtiyot chorasi.

Bu savollarga ilovaning o‘zida aniq javob ko‘rmaguningizcha, asosiy hamyoningizni bog‘lashga shoshilmang.

## Username, .t.me manzil va hamyon manzili farqi nimada?

Bu uch narsani ko‘pincha adashtirishadi:

- **Telegram username** — profilingiz nomi, masalan @ism. U orqali sizni Telegram’da topishadi. Uni bilgan odam akkauntingizga kira olmaydi va hamyoningizni boshqara olmaydi.
- **TON hamyon manzili** — blokcheyndagi uzun belgilar qatori. Pul aynan shu manzilga boradi.
- **.t.me manzil** — Fragment’dagi username sahifasida ko‘rsatiladigan TON Web 3.0 manzil. Masalan, [@resolved sahifasida](https://fragment.com/username/resolved) u resolved.t.me deb yozilgan.

Bunday .t.me manzilga hamyondan to‘g‘ridan-to‘g‘ri pul yuborsa bo‘ladimi, bu maqolada tasdiqlanmagan. Hozircha eng xavfsiz yo‘l — oluvchidan to‘liq hamyon manzilini olish, uni nusxalab qo‘yish va qo‘lda qayta yozmaslik.

Bot API 10.4 da xabar ichidagi TON manzil alohida element sifatida ajratiladi. Uni bosganda ilovada nima bo‘lishi haqida: [chatdagi TON manzilni bossam nima bo‘ladi](/blog/telegram-macos-ton-manzil-chatda-bosish).

## Funksiya chiqsa, pulni xavfsiz yuborish uchun nimani tekshirish kerak?

Username bo‘yicha o‘tkazma rasman chiqsa ham, xato va firibgarlik xavfi qolaveradi. Noto‘g‘ri manzilga ketgan pulni qaytarish oson bo‘lmasligi mumkin. Shuning uchun quyidagi tartibga amal qiling:

1. Funksiyani faqat rasmiy ilova do‘koni yoki telegram.org orqali kelgan yangilanishda kuting. «Beta havola» yoki APK fayl yuboradiganlarga ishonmang.
2. Oluvchining username’ini harfma-harf tekshiring. Bitta harfi farq qiladigan o‘xshash username firibgarlar ishlatishi mumkin bo‘lgan usul.
3. Ekranda chiqqan hamyon manzilining boshi va oxirini oluvchi bilan boshqa yo‘l orqali, masalan qo‘ng‘iroq qilib, solishtiring.
4. Avval kichik summa yuboring. Chatda o‘tkazma haqida xizmat xabari chiqqanini va tranzaksiya eksplorerda ko‘rinishini tekshiring.
5. Oluvchi pul kelganini tasdiqlasa, keyin asosiy summani yuboring.
6. Seed-ibora, Telegram login kodi va ikki bosqichli parolni hech kimga bermang, «yordam xizmati» deb yozgan odamga ham.

Tranzaksiyani qaysi eksplorerda tekshirish haqida: [gram.org eksplorer rasmiymi](/blog/gram-org-ton-eksplorer-rasmiymi).

## Telegram hamyoni haqida yana qanday mish-mishlar bor?

Username bo‘yicha o‘tkazma — Telegram hamyoni haqida kanallarda tarqalgan tasdiqlanmagan xabarlardan biri. Ulanishlarni qurilmalar o‘rtasida sinxronlash va hamyon nomining o‘zgarishi ham hali rasman e’lon qilinmagan:

- [Telegram Wallet ulanishlarni sinxronlaydimi](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik)
- [Telegram Wallet Walt bo‘ldimi](/blog/telegram-wallet-walt-nomi-ozgardimi)

> Oddiy qoida: kanal posti faqat mavzu beradi, fakt emas. Funksiya telegram.org yoki core.telegram.org’da tasdiqlanmaguncha, uni bor deb hisoblamang.

## Premium olish uchun hamyon kerakmi?

Yo‘q. Telegram Premium olish uchun TON hamyon, kripto yoki xorijiy karta shart emas. Premiumtg botida ([@premiumtg_uzbot](https://t.me/premiumtg_uzbot)) faqat username kiritiladi, to‘lov so‘mda qilinadi: Click, Payme, Paynet yoki Uzum Bank orqali. Akkauntga kirish, login kodi yoki parol so‘ralmaydi, obuna 10 soniyada avtomatik faollashadi.

| Paket | Narx |
|---|---|
| 3 oy | ${narx(3)} |
| 6 oy | ${narx(6)} |
| 12 oy | ${narx(12)} |

Narx va mavjud to‘lov usullari xariddan oldin botda tekshiriladi. Premiumtg — mustaqil xizmat, Telegram bilan bog‘liq emas. Premium statusni esa faqat Telegram beradi.

## Ko‘p so‘raladigan savollar

### Telegram hamyonga username yozib TON yuborsa bo‘ladimi?

Hozircha buni hech qaysi rasmiy hujjat tasdiqlamagan, gap faqat kanal postidan chiqqan. Shuning uchun pulni oluvchidan olingan to‘liq manzilga yuborgan ma’qul.

### Hamyonni Telegram akkauntiga bog‘lash majburiymi?

Telegram bu haqda hech narsa e’lon qilmagan, shuning uchun javob noma’lum. Bunday taklif chiqsa, rad etish va keyin uzish varianti bor-yo‘qligiga qarang.

### Profilimdagi TON hamyon kartasini boshqalar ko‘radimi?

Bot API kartani profil sahifasining bir qismi deb ta’riflaydi, demak profilingizni ochgan odam uni ko‘rishi mumkin. Kartada nima aks etishi va ko‘rinishini cheklash mumkinmi, hali aniq emas.

### Fragment hamyonimni akkauntim bilan bog‘lab saqlaydimi?

Fragment’ning o‘z tavsifiga ko‘ra, yo‘q. Ammo u yerdagi takliflar ochiq: qaysi hamyon taklif berganini hamma ko‘radi.

### Username’imni bilgan odam hamyonimdan pul yecha oladimi?

Yo‘q, username faqat ochiq profil nomi. Hamyonga seed-ibora bilan, akkauntga login kodi va 2FA paroli bilan kiriladi, ularni hech kimga aytmang.

### Anonimligim muhim bo‘lsa, nima qilay?

Shaxsiy jamg‘armani saqlaydigan hamyonni profilga bog‘lamang. Ochiq to‘lovlar uchun alohida hamyon ishlating va funksiya chiqqanda maxfiylik sozlamalarini ko‘zdan kechiring.

### Chatda «TON hamyon o‘tkazmasi» xabari chiqsa, pul keldi deganimi?

Bunday xizmat xabari Bot API’da haqiqatan bor, lekin eng ishonchli dalil — eksplorerdagi tranzaksiya. Skrinshot yoki oddiy matnli xabarga ishonmang.`,
    ru: `## Правда ли, что в кошельке Telegram можно отправить деньги по username?

Официальные источники это пока не подтверждают. О том, что в кошельке Telegram можно отправить деньги, просто указав @username, написал один пост в Telegram-канале. В официальной документации Telegram такой процесс не описан.

Вот что утверждается в посте:

- в новой бета-версии адрес кошелька Gram можно будет привязать к аккаунту Telegram;
- после этого деньги можно будет отправлять по username, без ручного ввода длинного адреса;
- если долго нажать на адрес кошелька, откроется список действий.

Официально не подтверждён ни один из этих пунктов. Сведений о бета-версии, меню по долгому нажатию или анонсе в блоге telegram.org найти не удалось. Неизвестно и то, будет ли привязка добровольной или обязательной.

Официально известно другое. В версии 10.4 [Telegram Bot API](https://core.telegram.org/bots/api) появилась карточка TON-кошелька, которая показывается на странице профиля пользователя. Перевод через TON-кошелёк отображается в чате как служебное сообщение. Выходит, по документации кошелёк и профиль сближаются. Но сценарий «ввёл username — деньги ушли» там не описан.

## Что официальная документация говорит о кошельке и аккаунте?

В таблице заявления из канала сверены с тем, что написано в документации.

| Заявление или элемент | Официальный статус | Источник |
|---|---|---|
| Карточка TON-кошелька на странице профиля (ChatFullInfo.ton_wallet_card) | Подтверждено | Bot API 10.4 |
| Классы TonWalletCard, TonWalletCardSticker, TonNft и TonNftAttribute | Подтверждено | Список изменений Bot API 10.4 |
| Расположение стикеров на карточке кошелька (AreaPosition) | Подтверждено | Bot API 10.4 |
| Служебное сообщение в чате о переводе через TON-кошелёк (Message.ton_wallet_transfer) | Подтверждено | Bot API |
| TON-адрес внутри сообщения как отдельный элемент (RichTextTonAddress) | Подтверждено | Bot API 10.4 |
| Отправка денег по username | Не подтверждено | Только пост в канале |
| Добровольна ли привязка или обязательна | Не подтверждено | Официальных данных нет |
| Меню действий при долгом нажатии на адрес | Не подтверждено | Только пост в канале |

Раньше AreaPosition назывался StoryAreaPosition. Класс переименовали, потому что теперь он описывает и расположение стикеров на карточках TON-кошельков.

> Bot API — это документация для разработчиков ботов. Кнопки и экраны приложения Telegram в ней не описываются. Если поле есть в документации, это ещё не значит, что функция заработала у всех. Полное описание TonWalletCard для этой статьи не изучалось.

## Что значит карточка кошелька в профиле?

Согласно Bot API, карточка TON-кошелька показывается на странице профиля пользователя. А профиль открывают и другие люди. Значит, карточку могут увидеть и посторонние.

Что именно будет на карточке — адрес, NFT или что-то ещё, — в этой статье не подтверждено. Неизвестно и то, можно ли будет настроить, кто её видит. Когда функция появится, проверьте это в профиле и в настройках конфиденциальности приложения.

Среди классов, связанных с карточкой, есть стикеры (TonWalletCardSticker) и NFT (TonNft, TonNftAttribute). Отсюда можно предположить, что карточка будет служить и для оформления, и для показа коллекции. Но точные детали будут видны в самом приложении, а не в документации.

Слухи об оформлении кошелька подарками мы разбирали в статье [правда ли, что кошелёк можно украсить подарками](/blog/telegram-hamyon-sovgalar-bilan-bezash-konsept).

## Как привязка кошелька к аккаунту влияет на анонимность?

Удобство растёт, а анонимность может снизиться. Вот что стоит учитывать:

- **Адрес связывается с человеком.** Транзакции можно посмотреть в эксплорере по адресу. Если адрес связан с username, выяснить, кому он принадлежит, может стать проще. Это общая логика, а не официальное заявление Telegram.
- **Добровольно или обязательно — неизвестно.** Официальной информации об этом нет.
- **Fragment — отдельный сервис.** [Fragment](https://fragment.com/about) не хранит никаких данных, которые связывали бы ваш кошелёк с аккаунтом Telegram. Но на Fragment всем видно, с какого TON-кошелька сделано предложение.
- **На Fragment есть другой вид связи.** Если вы покупаете там username, право владения им переходит к TON-кошельку, с которого была оплачена покупка.
- **Сам username — открытые данные.** Он виден всем в профиле. Подробнее: [опасно ли сообщать username](/blog/username-berish-xavfsizmi).

Не путайте правила Fragment и карточку кошелька в приложении Telegram. Это разные сервисы. Правила одного автоматически не распространяются на другой.

### Что проверить, если появится предложение привязать кошелёк

- Есть ли на экране вариант «позже» или «отказаться».
- Можно ли потом отвязать адрес в настройках.
- Что будет видно в профиле — адрес, сама карточка или NFT — и кто это увидит.
- Что хранится на привязываемом кошельке. Отдельный кошелёк для личных сбережений и отдельный для открытых платежей — простая мера предосторожности.

Пока в самом приложении нет чётких ответов на эти вопросы, не спешите привязывать основной кошелёк.

## Чем отличаются username, адрес .t.me и адрес кошелька?

Эти три вещи часто путают:

- **Username в Telegram** — имя вашего профиля, например @imya. По нему вас находят в Telegram. Человек, который его знает, не может войти в ваш аккаунт или управлять кошельком.
- **Адрес TON-кошелька** — длинная строка символов в блокчейне. Деньги приходят именно на этот адрес.
- **Адрес .t.me** — адрес TON Web 3.0, который показывается на странице username во Fragment. Например, на [странице @resolved](https://fragment.com/username/resolved) он указан как resolved.t.me.

Можно ли отправить деньги из кошелька напрямую на такой адрес .t.me, в этой статье не подтверждено. Пока самый безопасный путь — получить у получателя полный адрес кошелька, скопировать его и не перепечатывать вручную.

В Bot API 10.4 TON-адрес внутри сообщения выделяется как отдельный элемент. Что происходит в приложении при нажатии на него, читайте здесь: [что будет, если нажать на TON-адрес в чате](/blog/telegram-macos-ton-manzil-chatda-bosish).

## Если функция выйдет, что проверить для безопасного перевода?

Даже если перевод по username официально появится, риск ошибки и мошенничества никуда не денется. Деньги, ушедшие на неверный адрес, вернуть может быть непросто. Поэтому действуйте так:

1. Ждите функцию только в обновлении из официального магазина приложений или с telegram.org. Не доверяйте тем, кто присылает «бета-ссылку» или APK-файл.
2. Проверьте username получателя буква за буквой. Похожий username, отличающийся одной буквой, — приём, которым могут пользоваться мошенники.
3. Сверьте начало и конец адреса кошелька на экране с получателем по другому каналу, например по телефону.
4. Сначала отправьте небольшую сумму. Убедитесь, что в чате появилось служебное сообщение о переводе, а транзакция видна в эксплорере.
5. Когда получатель подтвердит, что деньги пришли, отправляйте основную сумму.
6. Никому не сообщайте seed-фразу, код входа в Telegram и пароль двухэтапной проверки — даже тому, кто называет себя «службой поддержки».

В каком эксплорере проверять транзакцию: [официальный ли эксплорер gram.org](/blog/gram-org-ton-eksplorer-rasmiymi).

## Какие ещё слухи ходят о кошельке Telegram?

Перевод по username — лишь одна из неподтверждённых новостей о кошельке Telegram, которые расходятся по каналам. Синхронизация подключений между устройствами и смена названия кошелька тоже пока официально не объявлены:

- [Синхронизирует ли Telegram Wallet подключения](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik)
- [Стал ли Telegram Wallet называться Walt](/blog/telegram-wallet-walt-nomi-ozgardimi)

> Простое правило: пост в канале — это повод для темы, а не факт. Пока функцию не подтвердили на telegram.org или core.telegram.org, не считайте, что она существует.

## Нужен ли кошелёк, чтобы купить Premium?

Нет. Для покупки Telegram Premium не нужны ни TON-кошелёк, ни криптовалюта, ни зарубежная карта. В боте Premiumtg ([@premiumtg_uzbot](https://t.me/premiumtg_uzbot)) достаточно ввести username, а оплата проходит в сумах — через Click, Payme, Paynet или Uzum Bank. Вход в аккаунт, код или пароль не запрашиваются, подписка активируется автоматически за 10 секунд.

| Пакет | Цена |
|---|---|
| 3 месяца | ${narx(3)} |
| 6 месяцев | ${narx(6)} |
| 12 месяцев | ${narx(12)} |

Цену и доступные способы оплаты проверяйте в боте перед покупкой. Premiumtg — независимый сервис, не связанный с Telegram. Статус Premium выдаёт только сам Telegram.

## Часто задаваемые вопросы

### Можно ли отправить TON в кошельке Telegram, просто указав username?

Пока ни один официальный документ этого не подтверждает — информация взялась только из поста в канале. Поэтому деньги лучше отправлять на полный адрес, полученный от самого получателя.

### Обязательно ли привязывать кошелёк к аккаунту Telegram?

Telegram об этом ничего не объявлял, так что ответ неизвестен. Если появится такое предложение, посмотрите, можно ли отказаться и потом отвязать кошелёк.

### Увидят ли другие карточку TON-кошелька в моём профиле?

Bot API описывает карточку как часть страницы профиля, поэтому её, скорее всего, увидит любой, кто откроет ваш профиль. Что на ней будет показано и можно ли ограничить её видимость, пока неясно.

### Хранит ли Fragment связь моего кошелька с аккаунтом?

По собственному описанию Fragment — нет. Но предложения там открытые: любой видит, с какого кошелька оно сделано.

### Может ли человек, знающий мой username, вывести деньги с моего кошелька?

Нет, username — это лишь открытое имя профиля. В кошелёк входят по seed-фразе, а в аккаунт — по коду входа и паролю 2FA, их нельзя сообщать никому.

### Что делать, если мне важна анонимность?

Не привязывайте к профилю кошелёк, на котором лежат личные сбережения. Для открытых платежей заведите отдельный кошелёк, а когда функция выйдет, изучите настройки конфиденциальности.

### Если в чате появилось сообщение о переводе с TON-кошелька, значит, деньги пришли?

Такое служебное сообщение в Bot API действительно есть, но самое надёжное подтверждение — транзакция в эксплорере. Скриншотам и обычным текстовым сообщениям не верьте.`,
  },
};
