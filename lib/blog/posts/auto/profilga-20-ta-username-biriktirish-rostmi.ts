// Avtoblogyoz yasagan maqola (2026-11-16). Niyat: Fragment’dan username sotib oladigan yoki kanal yuritadigan foydalanuvchi «profilga 20 ta username biriktirish rostmi» yoki «Telegram username limiti nechta» deb qidiradi. U nechta qo‘shimcha username biriktirish mumkinligini va limit rostdan oshganini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/fragment
//   https://fragment.com/about
//   https://core.telegram.org/method/account.toggleUsername
//   https://core.telegram.org/method/channels.toggleUsername
//   https://core.telegram.org/api/config
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "profilga-20-ta-username-biriktirish-rostmi",
  date: "2026-11-16",
  reviewed: "2026-11-16",
  category: "stars",
  priority: 0.7,
  title: { uz: "Profilga 20 ta username biriktirish rostmi? Telegram username limiti", ru: "Можно ли привязать 20 username к профилю? Лимит юзернеймов в Telegram" },
  excerpt: { uz: `Limit 10 tadan 20 taga oshgani rasman tasdiqlanmagan, bu faqat kanal postida yozilgan. Bir nechta collectible username biriktirsa bo‘ladi, faollari soni esa cheklangan.`, ru: `Рост лимита с 10 до 20 официально не подтверждён: об этом писал только Telegram-канал. Привязать несколько коллекционных username можно, но число активных ограничено.` },
  keywords: ["telegram username limiti","profilga 20 ta username","telegram bir nechta username","collectible username biriktirish","fragment username kanalga biriktirish","USERNAMES_ACTIVE_TOO_MUCH","лимит юзернеймов telegram","несколько юзернеймов telegram","привязать юзернейм к каналу fragment","коллекционный юзернейм telegram","сколько юзернеймов можно привязать"],
  related: ["fragment-anonim-raqam-sotish-sotib-olish","fragment-telegram-premium","username-berish-xavfsizmi","telegram-premium-1000-kanal-limiti"],
  sources: [{"url":"https://core.telegram.org/api/fragment","title":"Fragment collectibles"},{"url":"https://fragment.com/about","title":"How does Fragment work?"},{"url":"https://core.telegram.org/method/account.toggleUsername","title":"account.toggleUsername"},{"url":"https://core.telegram.org/method/channels.toggleUsername","title":"channels.toggleUsername"},{"url":"https://core.telegram.org/api/config","title":"Client configuration"}],
  content: {
    uz: `## Profil yoki kanalga 20 ta username biriktirish mumkinmi?

Limit 10 tadan 20 taga oshgani rasman tasdiqlanmagan. Bu haqda faqat bitta Telegram kanali yozgan. Telegram ham, Fragment ham bunday e’lon bermagan.

Rasmiy hujjatlarda boshqa narsa yozilgan. Telegram API hujjatiga ko‘ra, Fragment’dan olingan bir nechta collectible username’ni o‘zingizga tegishli akkaunt, superguruh va kanalga biriktirish mumkin ([Fragment collectibles](https://core.telegram.org/api/fragment)).

Faol username’lar soni esa cheklangan. Chegaraga yetganingizda Telegram USERNAMES_ACTIVE_TOO_MUCH xatosini qaytaradi. Bu shaxsiy akkauntga ham ([account.toggleUsername](https://core.telegram.org/method/account.toggleUsername)), kanal va superguruhlarga ham ([channels.toggleUsername](https://core.telegram.org/method/channels.toggleUsername)) tegishli.

Limitning aniq raqami rasmiy manbalarda topilmadi: na mijoz sozlamalari ro‘yxatida, na xato tavsifida ko‘rsatilgan. Limit Premium va oddiy akkauntda yoki profil va kanalda farq qilishi haqida ham ma’lumot yo‘q.

Qisqasi, holat quyidagicha:

| Da’vo | Rasmiy manbada | Holat |
|---|---|---|
| Bir chatga bir nechta collectible username biriktirsa bo‘ladi | Telegram API hujjati | Tasdiqlangan |
| Faol username’lar soni cheklangan | toggleUsername metodlari sahifalari | Tasdiqlangan, raqami yo‘q |
| Limit 10 tadan 20 taga oshdi | Topilmadi | Tasdiqlanmagan, faqat kanal posti |
| Premium username limitini oshiradi | Topilmadi | Tasdiqlanmagan |

Shuning uchun «20 ta» degan raqamga ishonib username sotib olmang. Amaldagi chegarani ilovaning o‘zi ko‘rsatadi: limitdan oshsangiz, username faollashmaydi va ekranda xato chiqadi.

## Rasman bitta profilda qanday username’lar bo‘lishi mumkin?

Telegram’da username ikki turga bo‘linadi: oddiy (basic) va collectible. Collectible username Fragment platformasida sotiladi. Ular ishlash tartibi bo‘yicha farq qiladi:

| Username turi | Qayerga biriktiriladi | Nofaol qilsa bo‘ladimi | Izoh |
|---|---|---|---|
| Oddiy (basic) | Profil, guruh yoki kanal | Yo‘q | Bitta chatda ko‘pi bilan bitta bo‘ladi |
| Collectible (Fragment) | Shaxsiy profil, o‘zingizga tegishli ochiq guruh va kanallar | Ha, keyin qayta yoqsa ham bo‘ladi | Bir chatga bir nechtasini biriktirish mumkin |
| Upgrade qilingan collectible | Bot | Bu maqolada tasdiqlanmagan | Bir martalik to‘lov olinadi, upgrade qaytarilmaydi |

Oddiy username bitta bo‘lishi va botga upgrade shartlari [Fragment’ning «How does Fragment work?»](https://fragment.com/about) sahifasida yozilgan. Oddiy username’ni nofaol qilib bo‘lmasligi esa [Telegram API hujjatida](https://core.telegram.org/api/fragment) aytilgan.

Fragment nima ekanini va u O‘zbekistondan qanchalik qulay ishlatilishini [Fragment haqidagi maqolada](/blog/fragment-telegram-premium) o‘qishingiz mumkin.

## «Biriktirilgan» va «faol» username o‘rtasida qanday farq bor?

Username’ni chatga biriktirishning o‘zi uni ishga tushirmaydi. Hujjatga ko‘ra, Fragment orqali biriktirilgan username dastlab nofaol bo‘ladi va uni alohida faollashtirish kerak.

Limit aynan shu bosqichda ishlaydi. USERNAMES_ACTIVE_TOO_MUCH xatosi biriktirishda emas, faollashtirishda chiqadi. Demak, ikki xil savol bor:

- nechta username’ni chatga **biriktirish** mumkin;
- ulardan nechtasi bir vaqtda **faol** bo‘lib, qidiruvda va havolada ishlaydi.

**Misol.** Kanalingizda oddiy @kanal_uz username’i bor. Fragment’dan yana uchta collectible username olib, shu kanalga biriktirdingiz. To‘rttasi ham kanalga tegishli, lekin collectible’lar o‘zingiz yoqmaguningizcha ishlamaydi. Ulardan birini yoqayotganda xato chiqsa, faol username’lar chegarasiga yetgansiz.

Kanal postida «yuzer biriktirish» deyilgan, ammo bu ikki tushuncha ajratilmagan. Postdagi raqam qaysi biriga tegishli ekani ham noma’lum.

Yana ikki rasmiy qoida bor:

- Ro‘yxatdagi birinchi username interfeysda asosiy username bo‘lib ko‘rinadi. Tartibni o‘zgartirish mumkin.
- Kanal yoki superguruhdagi barcha collectible username’larni birdaniga nofaol qilsa bo‘ladi. Hujjatda misol sifatida chatni yopiq (private) qilish holati keltirilgan.

## Rasmiy hujjatdagi 10 va 20 raqamlari nimani anglatadi?

> Telegram’ning [mijoz sozlamalari](https://core.telegram.org/api/config) hujjatida 10 va 20 raqamlari bor. Ammo ular username soniga emas, **ochiq kanal va superguruhlar yaratish** limitiga tegishli: Premium’siz foydalanuvchida 10 ta, Premium’da 20 ta.

Postdagi «10 → 20» raqamlari aynan shu limitga mos keladi. Biror rasmiy manbada username limiti shu raqamlar bilan bog‘lanmagan. Ularni bir narsa deb hisoblamang.

Premium’ning username soniga ta’siri haqida ham rasmiy ma’lumot yo‘q. Shuning uchun «Premium olsangiz, ko‘proq username faollashtirasiz» deb va’da bermaymiz. Premium qaysi limitlarni oshirishini [kanal va chat limitlari haqidagi maqolada](/blog/telegram-premium-1000-kanal-limiti) ko‘rishingiz mumkin.

## Collectible username qanday biriktiriladi va faollashtiriladi?

1. Username’ni Fragment’da sotib oling. Fragment’da xarid qanday bo‘lishini [+888 raqam misolida](/blog/fragment-anonim-raqam-sotish-sotib-olish) ko‘rish mumkin.
2. Fragment’da username qaysi chatga biriktirilishini tanlang: shaxsiy profil yoki o‘zingizga tegishli ochiq guruh yo kanal.
3. Biriktirilgan username nofaol holatda bo‘ladi. Uni Telegram’da faollashtiring.
4. Asosiy bo‘lib ko‘rinishi kerak bo‘lgan username’ni ro‘yxatda birinchi o‘ringa qo‘ying.
5. USERNAMES_ACTIVE_TOO_MUCH xatosi chiqsa, keraksiz collectible username’lardan birini nofaol qilib, qaytadan urinib ko‘ring.
6. Kerak bo‘lsa, username’ni keyinroq boshqa chatga ko‘chiring. Fragment’ga ko‘ra, tanlov doimiy emas, chatni istalgan vaqtda o‘zgartirsa bo‘ladi.

Tugma va menyu nomlari ilova versiyasiga qarab farq qilishi mumkin. Ularni o‘z ekraningizda tekshiring.

## Faol username’lar limitiga yetsangiz nima qilish kerak?

Xato chiqsa, yangi username sotib olishga shoshilmang. Avval borini qayta taqsimlang:

- **Kam ishlatiladigan collectible username’ni nofaol qiling.** Nofaol qilish uni sotish yoki chatdan uzish degani emas. Kerak bo‘lganda qayta yoqasiz.
- **Oddiy username’ni hisobga oling.** Uni nofaol qilib bo‘lmaydi, shuning uchun u faol bo‘lib turaveradi.
- **Ortiqcha username’ni boshqa chatga o‘tkazing.** Masalan, o‘zingizga tegishli boshqa kanal yoki guruhga biriktiring.
- **Kanalni yopiq qilishdan oldin o‘ylang.** Bunda collectible username’lar birdaniga nofaol qilinishi mumkin.
- **Limitni «20 ta» deb hisoblamang.** Raqam e’lon qilinmagan. Amaldagi chegarani xato xabaridan bilasiz.

## Botga collectible username biriktirishda nima farq qiladi?

Bot uchun qoidalar boshqacha. Fragment’ga ko‘ra, collectible username’ni botga biriktirish uchun uni upgrade qilish va bir martalik to‘lov qilish kerak.

> Upgrade qaytarilmaydi. Shundan keyin username’ni avvalgi holatiga qaytarib bo‘lmaydi.

To‘lov miqdori bu maqolada tasdiqlanmagan. Uni to‘lashdan oldin Fragment’ning o‘zida tekshiring. Username’ni keyin boshqa maqsadda ishlatish niyatingiz bo‘lsa, qaror qabul qilishdan oldin buni ham o‘ylab ko‘ring.

## Username sotib olish yoki sotishdan oldin nimani tekshirish kerak?

- **Mish-mishga qarab narx kutmang.** Limit oshgani haqida rasmiy e’lon yo‘q. Kanal postiga ishonib, username narxi yoki talabi oshadi deb o‘ylamang.
- **Sotuvchining va’dasini tekshiring.** Kimdir «profilga 20 tasini ulaysiz» deb sotsa, bu raqamning rasmiy asosi yo‘qligini biling.
- **Amalda sinab ko‘ring.** Fragment’da qaysi chatga biriktirish mumkinligini, Telegram’da esa faollashtirishda xato chiqish-chiqmasligini tekshiring.
- **Akkaunt xavfsizligini unutmang.** Username ochiq ma’lumot, uni ko‘rsatish akkauntga kirish imkonini bermaydi. Login kodi va ikki bosqichli parolni hech kimga bermang. Batafsil: [username berish xavfsizmi](/blog/username-berish-xavfsizmi).
- **Muammo boshqa limitda emasmi?** Yangi ochiq kanal ochib bo‘lmayotgan bo‘lsa, sabab username’da emas, ochiq kanal va superguruhlar limitida bo‘lishi mumkin. Premium bilan bu limit yuqoriroq.

Premium kerak bo‘lsa, uni so‘mda, faqat username kiritib [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida olishingiz mumkin. Akkauntga kirish yoki login kodi so‘ralmaydi. Narx va mavjud to‘lov usullarini xariddan oldin botda tekshiring.

## Ko‘p so‘raladigan savollar

### Telegram username limiti rasman nechta?

Rasmiy hujjatlarda faol username’lar uchun cheklov borligi aytilgan, lekin raqami ko‘rsatilmagan. Chegaraga yetganingizni faollashtirishda chiqadigan USERNAMES_ACTIVE_TOO_MUCH xatosidan bilasiz.

### Oddiy username’ni o‘chirib, faqat collectible username qoldirsa bo‘ladimi?

Oddiy username’ni nofaol holatga o‘tkazib bo‘lmaydi. Uni butunlay olib tashlash collectible username’larga qanday ta’sir qilishi bu maqolada tasdiqlanmagan, buni ilovada tekshiring.

### Premium olsam, ko‘proq username biriktira olamanmi?

Premium username sonini oshiradi degan rasmiy ma’lumot yo‘q. Rasman ma’lumi shu: Premium yaratish mumkin bo‘lgan ochiq kanal va superguruhlar sonini 10 tadan 20 taga oshiradi.

### USERNAMES_ACTIVE_TOO_MUCH xatosi nimani bildiradi?

Bir vaqtda faol bo‘lishi mumkin bo‘lgan username’lar soni to‘lgan. Yangisini yoqish uchun avval ishlatilmayotgan collectible username’lardan birini nofaol qiling.

### Fragment’da sotib olingan username’ni boshqa kanalga ko‘chirsa bo‘ladimi?

Ha. Fragment’ga ko‘ra, username qaysi chatga biriktirilgani doimiy emas, uni istalgan vaqtda o‘zingizga tegishli boshqa profil, ochiq guruh yoki kanalga o‘tkazish mumkin.

### Kanalni yopiq qilsam, collectible username’larim nima bo‘ladi?

Telegram hujjatiga ko‘ra, kanal yoki superguruhdagi barcha collectible username’larni birdaniga nofaol qilish mumkin va yopiq qilish shunday holatga misol qilib keltirilgan. Keyingi holatni ilovada tekshiring.

### Nega ochiq kanal yarata olmayapman, username limiti sababmi?

Sabab ochiq kanal va superguruhlar yaratish limiti bo‘lishi mumkin. Telegram API’ning mijoz sozlamalari hujjatiga ko‘ra, bu limit Premium’siz foydalanuvchida 10 ta, Premium’da 20 ta.

### Collectible username’ni botga ulasa bo‘ladimi?

Bo‘ladi, lekin buning uchun username bir martalik to‘lov bilan upgrade qilinadi va bu amalni orqaga qaytarib bo‘lmaydi. To‘lov miqdorini Fragment’da ko‘ring.`,
    ru: `## Можно ли привязать 20 username к профилю или каналу?

Рост лимита с 10 до 20 официально не подтверждён. Об этом писал только один Telegram-канал. Ни Telegram, ни Fragment такого не объявляли.

В официальной документации написано другое. Согласно документации Telegram API, к своему аккаунту, супергруппе или каналу можно привязать несколько коллекционных username, купленных на Fragment ([Fragment collectibles](https://core.telegram.org/api/fragment)).

А вот число активных username ограничено. При достижении лимита Telegram возвращает ошибку USERNAMES_ACTIVE_TOO_MUCH. Это касается и личного аккаунта ([account.toggleUsername](https://core.telegram.org/method/account.toggleUsername)), и каналов с супергруппами ([channels.toggleUsername](https://core.telegram.org/method/channels.toggleUsername)).

Точного значения лимита в официальных источниках нет: его не указывают ни в списке клиентских настроек, ни в описании ошибки. Нет данных и о том, отличается ли лимит у Premium и обычного аккаунта или у профиля и канала.

Если коротко, картина такая:

| Утверждение | Официальный источник | Статус |
|---|---|---|
| К одному чату можно привязать несколько коллекционных username | Документация Telegram API | Подтверждено |
| Число активных username ограничено | Страницы методов toggleUsername | Подтверждено, без цифры |
| Лимит вырос с 10 до 20 | Не найден | Не подтверждено, только пост канала |
| Premium увеличивает лимит username | Не найден | Не подтверждено |

Поэтому не покупайте username в расчёте на «20 штук». Реальную границу покажет само приложение: если превысить лимит, username не активируется, а на экране появится ошибка.

## Какие username официально могут быть у одного профиля?

В Telegram есть два типа username: обычный (basic) и коллекционный. Коллекционные продаются на платформе Fragment. Работают они по-разному:

| Тип username | Куда привязывается | Можно ли деактивировать | Примечание |
|---|---|---|---|
| Обычный (basic) | Профиль, группа или канал | Нет | В одном чате — не больше одного |
| Коллекционный (Fragment) | Личный профиль, ваши публичные группы и каналы | Да, потом можно включить снова | К одному чату можно привязать несколько |
| Коллекционный после апгрейда | Бот | В этой статье не подтверждено | Берётся разовая плата, апгрейд необратим |

То, что обычный username может быть только один, и условия апгрейда для ботов описаны на странице [Fragment «How does Fragment work?»](https://fragment.com/about). А то, что обычный username нельзя сделать неактивным, сказано в [документации Telegram API](https://core.telegram.org/api/fragment).

Что такое Fragment и насколько удобно пользоваться им из Узбекистана, читайте в [статье о Fragment](/blog/fragment-telegram-premium).

## Чем «привязанный» username отличается от «активного»?

Сама по себе привязка username к чату его не включает. По документации, username, привязанный через Fragment, изначально неактивен, и его нужно активировать отдельно.

Лимит срабатывает именно на этом этапе. Ошибка USERNAMES_ACTIVE_TOO_MUCH появляется не при привязке, а при активации. Значит, вопросов на самом деле два:

- сколько username можно **привязать** к чату;
- сколько из них могут быть **активными** одновременно и работать в поиске и по ссылке.

**Пример.** У вашего канала есть обычный username @kanal_uz. Вы купили на Fragment ещё три коллекционных и привязали их к этому каналу. Все четыре принадлежат каналу, но коллекционные не работают, пока вы их не включите. Если при включении одного из них появилась ошибка — вы упёрлись в лимит активных username.

В посте канала говорится о «привязке юзернеймов», но эти два понятия не разделены. К чему относится цифра из поста — тоже неизвестно.

Есть ещё два официальных правила:

- Первый username в списке отображается в интерфейсе как основной. Порядок можно менять.
- Все коллекционные username канала или супергруппы можно деактивировать разом. В документации в качестве примера приведён перевод чата в закрытый (private).

## Что означают цифры 10 и 20 в официальной документации?

> В документации Telegram по [клиентским настройкам](https://core.telegram.org/api/config) действительно есть цифры 10 и 20. Но они относятся не к числу username, а к лимиту на **создание публичных каналов и супергрупп**: 10 у пользователя без Premium и 20 у Premium.

Цифры «10 → 20» из поста совпадают именно с этим лимитом. Ни один официальный источник не связывает их с лимитом username. Не путайте одно с другим.

Официальных данных о влиянии Premium на число username тоже нет. Поэтому мы не обещаем, что «с Premium можно активировать больше username». Какие лимиты Premium действительно повышает, смотрите в [статье о лимитах каналов и чатов](/blog/telegram-premium-1000-kanal-limiti).

## Как привязать и активировать коллекционный username?

1. Купите username на Fragment. Как проходит покупка на Fragment, можно посмотреть на [примере номера +888](/blog/fragment-anonim-raqam-sotish-sotib-olish).
2. На Fragment выберите, к какому чату привязать username: к личному профилю или к своей публичной группе либо каналу.
3. Привязанный username будет неактивен. Активируйте его в Telegram.
4. Поставьте на первое место в списке тот username, который должен отображаться как основной.
5. Если появилась ошибка USERNAMES_ACTIVE_TOO_MUCH, деактивируйте один из ненужных коллекционных username и попробуйте снова.
6. При необходимости позже перенесите username в другой чат. По данным Fragment, выбор не окончательный — чат можно сменить в любой момент.

Названия кнопок и меню зависят от версии приложения. Сверяйтесь со своим экраном.

## Что делать, если упёрлись в лимит активных username?

Если появилась ошибка, не спешите покупать новый username. Сначала перераспределите имеющиеся:

- **Отключите редко используемый коллекционный username.** Деактивация — это не продажа и не отвязка от чата. При необходимости вы включите его обратно.
- **Учитывайте обычный username.** Его нельзя деактивировать, поэтому он всегда остаётся активным.
- **Перенесите лишний username в другой чат.** Например, привяжите его к другому своему каналу или группе.
- **Подумайте, прежде чем делать канал закрытым.** В этом случае коллекционные username могут быть деактивированы разом.
- **Не рассчитывайте на «20 штук».** Цифра не объявлена. Реальную границу вы узнаете из сообщения об ошибке.

## Чем отличается привязка коллекционного username к боту?

Для ботов правила другие. По данным Fragment, чтобы привязать коллекционный username к боту, его нужно проапгрейдить и внести разовую плату.

> Апгрейд необратим. После него вернуть username в прежнее состояние нельзя.

Размер платы в этой статье не подтверждён. Проверьте его на самом Fragment перед оплатой. Если планируете потом использовать username для других целей, учтите это заранее.

## Что проверить перед покупкой или продажей username?

- **Не ждите роста цен из-за слухов.** Официального объявления об увеличении лимита нет. Не стоит думать, что из-за поста в канале вырастут цены или спрос на username.
- **Проверяйте обещания продавца.** Если вам продают username со словами «к профилю можно подключить 20 штук», знайте: у этой цифры нет официального основания.
- **Проверьте на практике.** На Fragment посмотрите, к каким чатам можно привязать username, а в Telegram — появляется ли ошибка при активации.
- **Не забывайте о безопасности аккаунта.** Username — открытая информация, и, зная его, никто не войдёт в ваш аккаунт. Код входа и облачный пароль никому не сообщайте. Подробнее: [безопасно ли сообщать username](/blog/username-berish-xavfsizmi).
- **Может, дело в другом лимите?** Если не получается создать новый публичный канал, причина может быть не в username, а в лимите публичных каналов и супергрупп. С Premium он выше.

Если вам нужен Premium, его можно оформить в сумах в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot), указав только username. Входить в аккаунт или сообщать код не нужно. Цену и доступные способы оплаты проверьте в боте перед покупкой.

## Часто задаваемые вопросы

### Какой официальный лимит username в Telegram?

В официальной документации сказано, что ограничение для активных username существует, но число не указано. О том, что лимит достигнут, вы узнаете по ошибке USERNAMES_ACTIVE_TOO_MUCH при активации.

### Можно ли удалить обычный username и оставить только коллекционные?

Перевести обычный username в неактивное состояние нельзя. Как его полное удаление скажется на коллекционных username, в этой статье не подтверждено — проверьте в приложении.

### Если оформлю Premium, смогу привязать больше username?

Официальных данных о том, что Premium увеличивает число username, нет. Официально известно другое: Premium поднимает лимит на создание публичных каналов и супергрупп с 10 до 20.

### Что означает ошибка USERNAMES_ACTIVE_TOO_MUCH?

Достигнуто максимальное число username, которые могут быть активны одновременно. Чтобы включить новый, сначала отключите один из неиспользуемых коллекционных username.

### Можно ли перенести купленный на Fragment username в другой канал?

Да. По данным Fragment, привязка к чату не окончательная: username можно в любой момент перенести на другой свой профиль, публичную группу или канал.

### Что будет с коллекционными username, если сделать канал закрытым?

Согласно документации Telegram, все коллекционные username канала или супергруппы можно деактивировать разом, и перевод в закрытый режим приведён как пример такого случая. Итоговое состояние проверьте в приложении.

### Почему я не могу создать публичный канал — дело в лимите username?

Скорее всего, причина в лимите на создание публичных каналов и супергрупп. По документации клиентских настроек Telegram API, он составляет 10 для пользователей без Premium и 20 для Premium.

### Можно ли привязать коллекционный username к боту?

Можно, но для этого username апгрейдят за разовую плату, и отменить это действие нельзя. Размер платы смотрите на Fragment.`,
  },
};
