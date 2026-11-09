// Avtoblogyoz yasagan maqola (2026-11-09). Niyat: Telegram sozlamalarida Wallet yo'qolganini ko'rgan o'zbek foydalanuvchi «Telegram Wallet Walt bo'ldimi» deb qidirib, nomi o'zgarishi rostligi va mablag'lari xavfsizligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://docs.ton.org/onboarding/wallet-apps/telegram
//   https://docs.ton.org/contracts/standard/wallets/telegram/overview
//   https://docs.ton.org/onboarding/wallet-apps/deep-links
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-wallet-walt-nomi-ozgardimi",
  date: "2026-11-09",
  reviewed: "2026-11-09",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram Wallet Walt bo‘ldimi? Nom o‘zgarishi va mablag‘lar haqida faktlar", ru: "Telegram Wallet стал Walt? Что известно о смене названия и средствах" },
  excerpt: { uz: `Hozircha tasdiqlanmagan: «Wallet becomes Walt» haqidagi xabar Telegram kanal postiga asoslangan. Telegram’ning rasmiy blogi va hujjatlarida Walt haqida e’lon topilmadi.`, ru: `Пока не подтверждено: новость «Wallet becomes Walt» основана на посте в Telegram-канале. В официальном блоге и документации Telegram объявлений о Walt не найдено.` },
  keywords: ["telegram wallet walt","wallet walt telegram","telegram wallet nomi o‘zgardimi","telegram wallet yo‘qoldi","telegram money hamyon","telegram hamyon sozlamalarda yo‘q","wallet becomes walt","телеграм кошелек walt","wallet стал walt","кошелек телеграм пропал из настроек","telegram money кошелек"],
  related: ["telegram-wallet-hamyon-ochish-faollashtirish","telegram-desktop-wallet-havolasi-ichki-hamyon","telegram-hamyon-sovgalar-bilan-bezash-konsept","gram-org-ton-eksplorer-rasmiymi"],
  sources: [{"url":"https://docs.ton.org/onboarding/wallet-apps/telegram","title":"Telegram Money — the native Gram wallet"},{"url":"https://docs.ton.org/contracts/standard/wallets/telegram/overview","title":"WalletTg: Telegram wallet contract"},{"url":"https://docs.ton.org/onboarding/wallet-apps/deep-links","title":"Deep links"}],
  content: {
    uz: `## Telegram Wallet rostdan Walt’ga aylandimi?

Wallet nomi Walt’ga o‘zgargani rasmiy manbalarda tasdiqlanmagan. Bu xabar bitta Telegram kanal postidan tarqalgan. Postda Wallet sozlamalardan yo‘qolgani va o‘rniga yangi nom paydo bo‘layotgani aytilgan.

Tekshirilgan Telegram blogi va core.telegram.org sahifalarida Walt haqida e’lon topilmadi. Postda tilga olingan wallet.tg sayti biz tayanadigan rasmiy manbalar qatoriga kirmaydi. Shuning uchun undagi yozuvni Telegram bayonoti deb qabul qilmaymiz.

TON hujjatlarida Telegram ichidagi hamyon boshqa nom bilan atalgan: [Telegram Money](https://docs.ton.org/onboarding/wallet-apps/telegram). Hujjat uni Gram uchun mo‘ljallangan ichki hamyon deb ta’riflaydi. «Walt» so‘zi u yerda uchramaydi.

Rasmiy e’lon chiqmaguncha nom o‘zgarishini tasdiqlanmagan xabar deb hisoblang. Mablag‘ bo‘yicha qaror qabul qilishdan oldin rasmiy manbani kuting.

## Kanal postida aynan nima deyilgan?

Post qisqa va uchta da’vodan iborat:

- Wallet Telegram sozlamalaridan g‘oyib bo‘lgan.
- wallet.tg saytida «Wallet becomes Walt» yozuvi paydo bo‘lgan.
- Saytda yangi logotip va yangilangan ekran ko‘rinmoqda.

> Manba — kanal posti, rasmiy bayonot emas. Skrinshot yoki sayt ko‘rinishi Telegram e’loni o‘rnini bosmaydi.

Postda o‘zgarish qachon va nima sababdan bo‘lgani aytilmagan. Walt e’lon qilingan rasmiy sana topilmadi. Telegram Money qachon chiqqani ham bu maqolada tasdiqlanmagan.

## Da’volar va rasmiy manbalar: jadvalda solishtirish

Jadvalda postdagi da’volar va Telegram hamyoni haqidagi asosiy faktlar rasmiy hujjatlar bilan solishtirilgan.

| Da’vo | Rasmiy manbada | Holat |
|---|---|---|
| Wallet nomi Walt bo‘ldi | Rasmiy manbalarda yo‘q | Tasdiqlanmagan |
| Wallet sozlamalardan olib tashlandi | Tekshirilgan telegram.org sahifalarida e’lon topilmadi | Tasdiqlanmagan |
| Telegram’da ichki hamyon bor | Ha, «Telegram Money» nomi bilan, Gram uchun | Tasdiqlangan |
| Hamyon TON tarmog‘ida ishlaydi | Ha, asosiy tarmoqda; dApp’larga TON Connect orqali ulanadi | Tasdiqlangan |
| Desktop’da hamyon menyuda turadi | Ha, «Money» bandi, faqat hamyon yoqilgan akkauntda | Tasdiqlangan |

Tasdiqlangan qatorlar [TON hujjatlaridagi Telegram Money sahifasiga](https://docs.ton.org/onboarding/wallet-apps/telegram) tayanadi. Tasdiqlanmagan qatorlar faqat kanal postida bor.

## @wallet va Telegram Money — bitta narsami?

Bu savolga rasmiy javob topilmadi. Shuning uchun ularni bitta mahsulot deb yozmaymiz.

Rasman ma’lum bo‘lgani: Telegram Money — Telegram’ning ichki Gram hamyoni. U [WalletTg smart-kontraktidan](https://docs.ton.org/contracts/standard/wallets/telegram/overview) foydalanadi. Hujjatda bu kontrakt «Telegram Wallet» deb ham ataladi, shu sabab nomlar oson chalkashadi.

Postdagi da’volar esa @wallet boti va wallet.tg saytiga tegishli. Bu alohida mahsulot bo‘lishi mumkin, lekin buni ham, aksini ham rasmiy manba tasdiqlamagan.

Telegram Money uchun yozilgan xavfsizlik faktlarini avtomatik ravishda @wallet’ga ko‘chirmang. Qaysi hamyondan foydalanayotganingizni aniq bilib oling.

Desktop’dagi @wallet havolasi qayerga olib borishi haqida alohida maqola bor: [Telegram Desktop wallet: @wallet havolasi ichki hamyonni ochyaptimi?](/blog/telegram-desktop-wallet-havolasi-ichki-hamyon)

## Telegram ichidagi uchta «hamyon»ni qanday farqlash mumkin?

Telegram atrofida kamida uchta tushuncha bor va ularni bir-biriga aralashtirish oson. Quyidagi jadval faqat hujjatlarda yozilgan va postda aytilgan narsalarga tayanadi.

| Nima | Qayerda tilga olingan | Nima ma’lum |
|---|---|---|
| Telegram Money | docs.ton.org | Ichki Gram hamyoni, WalletTg kontrakti, Desktop’da «Money» bandi |
| @wallet boti va wallet.tg | Kanal posti | Walt’ga aylanishi haqida da’vo; rasman tasdiqlanmagan |
| tg://ton orqali ochiladigan TON balansi | docs.ton.org | Kanal monetizatsiyasi bilan bog‘liq alohida ekran, Telegram Money emas |

Ko‘p uchraydigan xatolar:

- Kanal monetizatsiyasidagi TON balansini ichki hamyon deb o‘ylash. Hujjatga ko‘ra bular alohida ekranlar.
- @wallet botidagi o‘zgarish haqidagi mish-mishni Telegram Money’ga ham tegishli deb hisoblash.
- Bitta hamyonning tiklash iborasini boshqa hamyonda «tekshirib ko‘rish» uchun kiritish.
- Mablag‘ yo‘qolgandek tuyulganda, eksplorerda tekshirmasdan notanish «yordam» botiga yozish.

Kanal daromadini yechish masalasi bilan shug‘ullanayotgan bo‘lsangiz, bu alohida mavzu: [Gram Earnings balansini qanday yechish mumkin?](/blog/gram-earnings-balans-yechish-tonnel-cash-out)

## Sozlamalarda Wallet ko‘rinmayapti: qayerdan qidirish kerak?

Rasmiy hujjatda hamyonga kirish yo‘li Telegram Desktop uchun aniq yozilgan. Quyidagi tartibda tekshiring:

1. Telegram ilovasini rasmiy do‘kon yoki saytdan oxirgi versiyagacha yangilang.
2. Telegram Desktop’da asosiy menyuni oching va «Money» bandini qidiring.
3. Band ko‘rinmasa, hamyon akkauntingiz uchun hali yoqilmagan bo‘lishi mumkin: hujjatga ko‘ra u faqat Telegram ruxsat berganda chiqadi.
4. @wallet botidan foydalangan bo‘lsangiz, uni kanal yoki xabardagi havola orqali emas, Telegram qidiruvi orqali o‘zingiz toping.
5. Mablag‘ joyida ekanini bilish uchun hamyon manzilini eksplorerga kiritib, tranzaksiyalarni tekshiring.

> tg://ton havolasi Telegram Money’ni ochmaydi. [Hujjatga ko‘ra](https://docs.ton.org/onboarding/wallet-apps/deep-links), u kanal monetizatsiyasi bilan bog‘liq alohida TON balansi ekranini ochadi.

Telefondagi menyu joylashuvi rasmiy hujjatda alohida ko‘rsatilmagan, shuning uchun uni bu yerda taxmin qilmaymiz. Hamyon ochish shartlari haqida batafsil: [Telegram Wallet qanday ochiladi va faollashtirish uchun pul kerakmi?](/blog/telegram-wallet-hamyon-ochish-faollashtirish). Qaysi eksplorerga ishonish mumkinligi haqida: [gram.org TON eksplorer rasmiymi?](/blog/gram-org-ton-eksplorer-rasmiymi)

## Nom o‘zgarsa, mablag‘larim nima bo‘ladi?

Nom o‘zgarganda @wallet foydalanuvchilarining mablag‘iga nima bo‘lishi haqida rasmiy ma’lumot yo‘q.

Telegram Money haqida esa [rasmiy hujjatda](https://docs.ton.org/onboarding/wallet-apps/telegram) quyidagilar yozilgan:

- **Tiklash iborasi** hamyon va mablag‘ ustidan nazorat beradi. Uni xavfsiz joyda saqlash va ochiq matnda hech kimga yubormaslik kerak.
- **Ko‘chirish imkoni:** joriy tiklash iborasi bilan hamyonni boshqa mos hamyon ilovasiga import qilish mumkin.
- **Kalitlarni boshqarish:** bulutli zaxirani o‘chirish yoki hamyon manzilini o‘zgartirmasdan imzo kalitini almashtirish mumkin.
- **Shifrlangan zaxira:** hamyon kaliti uch qismga bo‘linadi va uch qit’adagi ma’lumot markazlarida saqlanadi.

Kontrakt darajasidagi qoidalar [WalletTg sahifasida](https://docs.ton.org/contracts/standard/wallets/telegram/overview) va Telegram Money hujjatida berilgan:

- Hamyon kontraktini yangilash uchun validatorlar umumiy vaznining 75% dan ortig‘i tasdiqlashi kerak. Telegram ham, boshqa hech kim ham bu tasdiqni chetlab o‘ta olmaydi.
- Hamyon egasi kontrakt implementatsiyasini o‘zgartira olmaydi va yangilanishlardan voz kecha olmaydi.

Bu faktlar faqat Telegram Money va WalletTg uchun yozilgan. Ilova nomi o‘zgarsa, hamyon manziliga nima bo‘lishi haqida hujjatlarda alohida gap yo‘q. Shuning uchun asosiy tekshiruv bitta: manzilingiz eksplorerda qanday balans va tranzaksiyalarni ko‘rsatayotgani.

## Bu xabardan firibgarlar qanday foydalanishi mumkin?

Rebrending haqidagi har qanday mish-mish firibgarlar uchun qulay bahona bo‘ladi. «Hamyoningizni yangi Walt’ga ko‘chiring» yoki «mablag‘ni migratsiya qiling» degan bot va saytlar paydo bo‘lishi mumkin.

> Tiklash iborasini hech qanday «migratsiya» yoki «yangilash» sahifasiga kiritmang. Rasmiy hujjatga ko‘ra, ibora kimning qo‘lida bo‘lsa, mablag‘ ustidan nazorat ham o‘shanda bo‘ladi.

Yana bir nozik joy — to‘lov havolalari. [Hujjatga ko‘ra](https://docs.ton.org/onboarding/wallet-apps/deep-links), t.me domenidagi sendgrams havolasi tg://sendgrams deep link bilan bir xil parametrlarni qabul qiladi. Ya’ni oddiy ko‘rinadigan t.me havolasi ham to‘lov ekranini parametrlar bilan ochishi mumkin.

Shuning uchun:

- Yuborishdan oldin summa va oluvchi manzilini ekranda o‘zingiz tekshiring.
- «Shoshilinch ko‘chiring, aks holda mablag‘ yo‘qoladi» degan xabarlarga ishonmang.
- Kanal postidagi havola orqali hamyonga kirmang, botni qidiruvdan o‘zingiz toping.

Notanish havolalarni ochish akkauntga qanday ta’sir qilishi haqida: [Telegramda havola ochsam bloklanadimi?](/blog/telegram-shubhali-havola-akkaunt-bloklanishi)

## Rasmiy yangilikni qayerdan kutish kerak?

Telegram hamyoni bo‘yicha ishonchli ma’lumotni quyidagi joylardan kuting:

- [Telegram blogi](https://telegram.org/blog) — yangi funksiyalar haqidagi e’lonlar.
- [core.telegram.org](https://core.telegram.org) — texnik hujjatlar.
- [docs.ton.org](https://docs.ton.org/onboarding/wallet-apps/telegram) — Telegram Money va WalletTg hujjatlari.

Kanal postlari, skrinshotlar va mustaqil saytlarni faqat signal deb qabul qiling va rasmiy e’lon bilan solishtiring.

Shunga o‘xshash holat avval ham bo‘lgan: hamyonni sovg‘alar bilan bezash g‘oyasi kanalda tarqalgan eskiz bo‘lib chiqdi. Batafsil: [Telegram hamyonni sovg‘alar bilan bezash rostmi yoki faqat konsept?](/blog/telegram-hamyon-sovgalar-bilan-bezash-konsept)

Rasmiy e’lon chiqsa, bu maqola yangilanadi. Hozircha Walt nomi bo‘yicha Telegram’dan tasdiq yo‘q.

## Ko‘p so‘raladigan savollar

### Walt — Telegram’ning yangi rasmiy hamyonimi?

Buni tasdiqlaydigan rasmiy e’lon topilmadi. TON hujjatlarida Telegram’ning ichki hamyoni Telegram Money deb ataladi, Walt nomi esa faqat kanal postida uchraydi.

### wallet.tg sayti rasmiy manba hisoblanadimi?

Biz uni rasmiy manba sifatida qabul qilmaymiz, chunki u biz tekshiradigan manbalar ro‘yxatiga kirmaydi. Telegram yangiliklarini telegram.org blogi va core.telegram.org orqali solishtiring.

### Telegram Desktop’da «Money» bandi nega chiqmaydi?

Hujjatga ko‘ra bu band faqat Telegram akkauntingiz uchun hamyonni yoqqanda ko‘rinadi. Ilovani yangilang. Band baribir chiqmasa, hamyon sizda hali ochilmagan bo‘lishi mumkin.

### @wallet’dagi pulimni boshqa hamyonga ko‘chirishim kerakmi?

Nom o‘zgarishi sababli ko‘chirish talabi haqida rasmiy ma’lumot yo‘q. Kimdir shoshilinch ko‘chirishni talab qilsa, bu firibgarlik belgisi bo‘lishi mumkin.

### Tiklash iborasini kim so‘rashi mumkin?

Hech kim: na bot, na sayt, na «yordam xizmati». Ibora mablag‘ ustidan nazorat beradi, shuning uchun uni yozib yubormang va notanish sahifaga kiritmang.

### tg://ton havolasi Telegram Money’ni ochadimi?

Yo‘q. TON hujjatlariga ko‘ra bu havola kanal monetizatsiyasi bilan bog‘liq boshqa ekranni — alohida TON balansini ochadi.

### Kanal daromadi turgan TON balansi va ichki hamyon bir narsami?

Hujjatlarda ular alohida ekranlar sifatida ko‘rsatilgan. Mablag‘ingizni qidirayotganda qaysi biriga qarayotganingizga e’tibor bering.

### Telegram hamyon kontraktini o‘zi o‘zgartira oladimi?

WalletTg hujjatiga ko‘ra, kontraktni yangilash uchun validatorlar umumiy vaznining 75% dan ortig‘i tasdiqlashi kerak va Telegram bu tasdiqni chetlab o‘ta olmaydi. Hamyon egasi esa yangilanishdan voz kecha olmaydi.`,
    ru: `## Telegram Wallet действительно стал Walt?

Переименование Wallet в Walt официальными источниками не подтверждено. Новость разошлась из одного поста в Telegram-канале. В нём говорится, что Wallet пропал из настроек, а вместо него появляется новое название.

На проверенных страницах блога Telegram и core.telegram.org объявлений о Walt нет. Сайт wallet.tg, упомянутый в посте, не входит в официальные источники, на которые мы опираемся. Поэтому надпись на нём мы не считаем заявлением Telegram.

В документации TON встроенный кошелёк Telegram называется иначе: [Telegram Money](https://docs.ton.org/onboarding/wallet-apps/telegram). Документ описывает его как встроенный кошелёк для Gram. Слова «Walt» там нет.

Пока нет официального объявления, считайте смену названия неподтверждённой новостью. Прежде чем что-то делать со средствами, дождитесь официального источника.

## Что именно сказано в посте канала?

Пост короткий и сводится к трём утверждениям:

- Wallet исчез из настроек Telegram.
- На сайте wallet.tg появилась надпись «Wallet becomes Walt».
- На сайте виден новый логотип и обновлённый экран.

> Источник — пост канала, а не официальное заявление. Скриншот или вид сайта не заменяют объявление Telegram.

В посте не сказано, когда и почему произошло изменение. Официальная дата объявления Walt не найдена. Когда вышел Telegram Money, в этой статье тоже не подтверждено.

## Утверждения и официальные источники: сравнение в таблице

В таблице утверждения из поста и основные факты о кошельке Telegram сопоставлены с официальной документацией.

| Утверждение | В официальном источнике | Статус |
|---|---|---|
| Wallet переименован в Walt | В официальных источниках нет | Не подтверждено |
| Wallet убран из настроек | На проверенных страницах telegram.org объявления нет | Не подтверждено |
| В Telegram есть встроенный кошелёк | Да, под названием «Telegram Money», для Gram | Подтверждено |
| Кошелёк работает в сети TON | Да, в основной сети; к dApp подключается через TON Connect | Подтверждено |
| В Desktop кошелёк находится в меню | Да, пункт «Money», только если кошелёк включён для аккаунта | Подтверждено |

Подтверждённые строки опираются на [страницу Telegram Money в документации TON](https://docs.ton.org/onboarding/wallet-apps/telegram). Неподтверждённые встречаются только в посте канала.

## @wallet и Telegram Money — одно и то же?

Официального ответа на этот вопрос нет. Поэтому мы не называем их одним продуктом.

Официально известно вот что: Telegram Money — встроенный Gram-кошелёк Telegram. Он использует [смарт-контракт WalletTg](https://docs.ton.org/contracts/standard/wallets/telegram/overview). В документации этот контракт называется в том числе «Telegram Wallet», поэтому названия легко перепутать.

Утверждения из поста касаются бота @wallet и сайта wallet.tg. Возможно, это отдельный продукт, но ни это, ни обратное официальные источники не подтверждают.

Не переносите автоматически факты о безопасности Telegram Money на @wallet. Точно выясните, каким кошельком вы пользуетесь.

Куда ведёт ссылка @wallet в Desktop, разобрано в отдельной статье: [Telegram Desktop wallet: открывает ли ссылка @wallet встроенный кошелёк?](/blog/telegram-desktop-wallet-havolasi-ichki-hamyon)

## Как различать три «кошелька» в Telegram?

Вокруг Telegram есть минимум три понятия, и их легко смешать. Таблица ниже опирается только на то, что написано в документации и сказано в посте.

| Что это | Где упоминается | Что известно |
|---|---|---|
| Telegram Money | docs.ton.org | Встроенный Gram-кошелёк, контракт WalletTg, пункт «Money» в Desktop |
| Бот @wallet и wallet.tg | Пост канала | Утверждение о переименовании в Walt; официально не подтверждено |
| Баланс TON, который открывается через tg://ton | docs.ton.org | Отдельный экран, связанный с монетизацией каналов, — не Telegram Money |

Частые ошибки:

- Принимать баланс TON из монетизации канала за встроенный кошелёк. По документации это разные экраны.
- Считать, что слухи об изменениях в боте @wallet касаются и Telegram Money.
- Вводить фразу восстановления одного кошелька в другом, чтобы «проверить».
- Писать незнакомому боту «поддержки», когда кажется, что средства пропали, не проверив адрес в эксплорере.

Если вас интересует вывод дохода канала, это отдельная тема: [Как вывести баланс Gram Earnings?](/blog/gram-earnings-balans-yechish-tonnel-cash-out)

## Wallet не видно в настройках: где искать?

В официальной документации путь к кошельку чётко описан для Telegram Desktop. Проверьте по порядку:

1. Обновите Telegram до последней версии из официального магазина или с сайта.
2. В Telegram Desktop откройте главное меню и найдите пункт «Money».
3. Если пункта нет, возможно, кошелёк для вашего аккаунта ещё не включён: по документации он появляется, только когда доступ открывает Telegram.
4. Если вы пользовались ботом @wallet, найдите его сами через поиск Telegram, а не по ссылке из канала или сообщения.
5. Чтобы убедиться, что средства на месте, введите адрес кошелька в эксплорер и проверьте транзакции.

> Ссылка tg://ton не открывает Telegram Money. [По документации](https://docs.ton.org/onboarding/wallet-apps/deep-links) она открывает отдельный экран баланса TON, связанный с монетизацией каналов.

Где кошелёк находится в мобильном приложении, официальная документация отдельно не указывает, поэтому гадать здесь мы не будем. Подробнее об условиях открытия кошелька: [Как открыть Telegram Wallet и нужны ли деньги для активации?](/blog/telegram-wallet-hamyon-ochish-faollashtirish). О том, каким эксплорерам можно доверять: [Официальный ли эксплорер TON gram.org?](/blog/gram-org-ton-eksplorer-rasmiymi)

## Что будет с моими средствами, если название изменится?

Официальной информации о том, что произойдёт со средствами пользователей @wallet при смене названия, нет.

О Telegram Money в [официальной документации](https://docs.ton.org/onboarding/wallet-apps/telegram) написано следующее:

- **Фраза восстановления** даёт контроль над кошельком и средствами. Её нужно хранить в надёжном месте и никому не пересылать открытым текстом.
- **Перенос:** с текущей фразой восстановления кошелёк можно импортировать в другое совместимое приложение.
- **Управление ключами:** можно отключить облачную резервную копию или сменить ключ подписи, не меняя адрес кошелька.
- **Зашифрованная копия:** ключ кошелька делится на три части, которые хранятся в дата-центрах на трёх континентах.

Правила на уровне контракта описаны на [странице WalletTg](https://docs.ton.org/contracts/standard/wallets/telegram/overview) и в документации Telegram Money:

- Для обновления контракта кошелька нужно одобрение более 75% от общего веса валидаторов. Ни Telegram, ни кто-либо другой не может обойти это одобрение.
- Владелец кошелька не может изменить реализацию контракта и отказаться от обновлений.

Эти факты относятся только к Telegram Money и WalletTg. Что станет с адресом кошелька при переименовании приложения, в документации отдельно не сказано. Поэтому главная проверка одна: какой баланс и какие транзакции показывает ваш адрес в эксплорере.

## Как этой новостью могут воспользоваться мошенники?

Любые слухи о ребрендинге — удобный повод для мошенников. Могут появиться боты и сайты с призывами «перенесите кошелёк в новый Walt» или «проведите миграцию средств».

> Не вводите фразу восстановления ни на каких страницах «миграции» или «обновления». По официальной документации, у кого фраза — у того и контроль над средствами.

Ещё одно тонкое место — платёжные ссылки. [Согласно документации](https://docs.ton.org/onboarding/wallet-apps/deep-links), ссылка sendgrams на домене t.me принимает те же параметры, что и deep link tg://sendgrams. То есть обычная на вид ссылка t.me тоже может открыть экран перевода с заполненными параметрами.

Поэтому:

- Перед отправкой сами проверьте на экране сумму и адрес получателя.
- Не верьте сообщениям вроде «срочно переведите, иначе средства пропадут».
- Не заходите в кошелёк по ссылке из поста канала — находите бота через поиск сами.

Как открытие незнакомых ссылок влияет на аккаунт: [Заблокируют ли аккаунт, если открыть ссылку в Telegram?](/blog/telegram-shubhali-havola-akkaunt-bloklanishi)

## Где ждать официальных новостей?

Надёжную информацию о кошельке Telegram ищите здесь:

- [Блог Telegram](https://telegram.org/blog) — объявления о новых функциях.
- [core.telegram.org](https://core.telegram.org) — техническая документация.
- [docs.ton.org](https://docs.ton.org/onboarding/wallet-apps/telegram) — документация Telegram Money и WalletTg.

Посты каналов, скриншоты и сторонние сайты воспринимайте лишь как сигнал и сверяйте с официальными объявлениями.

Похожая история уже была: идея украсить кошелёк подарками оказалась эскизом, разошедшимся по каналам. Подробнее: [Украшение кошелька Telegram подарками — правда или только концепт?](/blog/telegram-hamyon-sovgalar-bilan-bezash-konsept)

Если выйдет официальное объявление, статья будет обновлена. Пока подтверждения названия Walt от Telegram нет.

## Часто задаваемые вопросы

### Walt — это новый официальный кошелёк Telegram?

Официального объявления, которое бы это подтверждало, нет. В документации TON встроенный кошелёк Telegram называется Telegram Money, а название Walt встречается только в посте канала.

### Считается ли сайт wallet.tg официальным источником?

Мы не рассматриваем его как официальный источник: он не входит в список ресурсов, по которым мы проверяем факты. Новости Telegram сверяйте с блогом telegram.org и core.telegram.org.

### Почему в Telegram Desktop нет пункта «Money»?

По документации этот пункт появляется только после того, как Telegram включит кошелёк для вашего аккаунта. Обновите приложение; если пункта всё равно нет, кошелёк у вас, скорее всего, ещё не открыт.

### Нужно ли переводить деньги из @wallet в другой кошелёк?

Официальных требований о переносе средств из-за смены названия нет. Если кто-то настаивает на срочном переводе, это может быть признаком мошенничества.

### Кто может попросить фразу восстановления?

Никто — ни бот, ни сайт, ни «служба поддержки». Фраза даёт контроль над средствами, поэтому не пересылайте её и не вводите на незнакомых страницах.

### Открывает ли ссылка tg://ton Telegram Money?

Нет. По документации TON эта ссылка ведёт на другой экран — отдельный баланс TON, связанный с монетизацией каналов.

### Баланс TON с доходом канала и встроенный кошелёк — одно и то же?

В документации это разные экраны. Когда ищете свои средства, обращайте внимание, какой из них вы открыли.

### Может ли Telegram сам изменить контракт кошелька?

Согласно документации WalletTg, для обновления контракта нужно одобрение более 75% от общего веса валидаторов, и Telegram не может его обойти. Владелец кошелька при этом не может отказаться от обновлений.`,
  },
};
