// Avtoblogyoz yasagan maqola (2026-11-07). Niyat: TON hamyon yoki Fragment ishlatadigan o'zbek Telegram foydalanuvchisi «gram.org TON eksplorer rostmi va unda tranzaksiyani qanday tekshiraman» deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://docs.ton.org/onboarding/explorers
//   https://ton.org/
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "gram-org-ton-eksplorer-rasmiymi",
  date: "2026-11-07",
  reviewed: "2026-11-07",
  category: "stars",
  priority: 0.7,
  title: { uz: "gram.org TON eksplorer rasmiymi va tranzaksiyani qanday tekshiraman?", ru: "gram.org — официальный эксплорер TON? Как проверить транзакцию" },
  excerpt: { uz: `gram.org TON’ning rasmiy eksploreri ekani tasdiqlanmagan: docs.ton.org rasmiy deb faqat Actonscan’ni ataydi. Tranzaksiyani istalgan eksplorerda manzil yoki xesh orqali tekshirasiz.`, ru: `Официальный статус gram.org не подтверждён: docs.ton.org называет официальным только Actonscan. Транзакцию можно проверить в любом эксплорере TON по адресу или хешу.` },
  keywords: ["gram.org TON eksplorer","gram.org rasmiymi","TON eksplorer tranzaksiya tekshirish","TON tranzaksiya xeshi qayerda","Gram Toncoin farqi","Actonscan TON","gram.org обозреватель TON","официальный эксплорер TON","как проверить транзакцию TON","TON explorer транзакция","Toncoin Gram ребрендинг","проверить перевод Gram"],
  related: ["ton-orqali-telegram-premium","fragment-telegram-premium","telegram-nft-sovga-ton-hamyonga-otkazish","telegram-wallet-hamyon-ochish-faollashtirish"],
  sources: [{"url":"https://docs.ton.org/onboarding/explorers","title":"TON blockchain explorers"},{"url":"https://ton.org/","title":"TON — The Leading L1 Blockchain"}],
  content: {
    uz: `## gram.org TON’ning rasmiy eksploreri ekani tasdiqlanganmi?

Yo‘q, rasmiy manbalarda bu tasdiqlanmagan. «gram.org — TON tarmog‘ining rasmiy eksploreri» degan gap Telegram kanallaridagi postlarda aytilmoqda. Kanal posti esa rasmiy manba emas.

TON’ning rasmiy hujjatlarida [eksplorerlar haqida alohida sahifa](https://docs.ton.org/onboarding/explorers) bor. U yerda rasmiy ochiq kodli eksplorer deb faqat Actonscan nomlangan. Hujjatga ko‘ra, u smart-kontrakt ishlab chiquvchilari uchun mo‘ljallangan. gram.org bu sahifada tilga olinmagan.

Postlarda sayt tarixi va egasi haqida ham gaplar bor. Ularni rasmiy manbada topa olmadik, shuning uchun bu maqolada takrorlamaymiz. Oddiy foydalanuvchilar uchun yagona «rasmiy» eksplorer borligi haqida ham aniq rasmiy ma’lumot topilmadi.

> Amaliy qoida: eksplorerning nomiga yoki «rasmiy» yorlig‘iga emas, u ko‘rsatayotgan ma’lumotga qarang. Muhim tranzaksiyani ikkinchi eksplorerda ham solishtiring.

## TON eksplorer nima va unda nimalarni ko‘rish mumkin?

Eksplorer — blokcheyndagi ochiq ma’lumotni o‘qish uchun sayt. U hamyon emas: u orqali pul yuborilmaydi, faqat ma’lumot ko‘riladi.

TON hujjatlariga ko‘ra, eksplorerlar quyidagilarni ko‘rsatadi:

- hisob (manzil) balanslari;
- Gram va token o‘tkazmalari;
- kontrakt kodi va xotirasi;
- tranzaksiyalar va xabarlar.

Ba’zi eksplorerlar qo‘shimcha ma’lumot ham beradi: masterchain va shardchain bloklari, validator faolligi, shuningdek tranzaksiya hajmi, gaz sarfi va komissiyalar kabi tarmoq ko‘rsatkichlari.

Hujjatda eksplorerlar ma’lumotni TON Center API v2 va v3 orqali olishi aytilgan. Ya’ni turli saytlar ko‘pincha bitta manbaga tayanadi, farq asosan dizayn va qo‘shimcha bo‘limlarda bo‘ladi. Shuning uchun bitta saytga bog‘lanib qolish shart emas: kerak bo‘lsa, ma’lumotni boshqa eksplorerda solishtirasiz.

## Gram va Toncoin — bir tangami?

Ha. [ton.org](https://ton.org/) ma’lumotiga ko‘ra, Gram TON blokcheynining asosiy (native) tangasi va u Toncoin nomi bilan ham tanilgan. Demak, ikkala nom bitta tangani bildiradi. Bu yangi token yoki alohida aktiv emas.

Nom almashgan sana rasmiy manbada aniq ko‘rsatilmagan, shuning uchun uni keltirmaymiz. Bir joyda eski nom, boshqa joyda yangisi ko‘rinsa, bu o‘z-o‘zidan xato degani emas.

ton.org’ga ko‘ra, Telegram jamoasining kastodial bo‘lmagan Gram Wallet hamyoni messenjer interfeysiga o‘rnatilgan. Uni ochish tartibi alohida maqolada: [Telegram Wallet qanday ochiladi](/blog/telegram-wallet-hamyon-ochish-faollashtirish).

Komissiya bo‘yicha taxminiy mo‘ljal ham ton.org’da berilgan: Gram o‘tkazmasi taxminan 0,00039 Gram, USDt o‘tkazmasi taxminan 0,001 Gram turadi. Bu aniq tarif emas, balki tartibni tushunish uchun mo‘ljal.

## TON eksplorerda tranzaksiyani qanday topaman?

TON hujjatlarida tavsiya etilgan tartib quyidagicha:

1. Hamyon ilovasida tranzaksiya havolasi bo‘lsa, o‘shani oching. U sizni to‘g‘ridan-to‘g‘ri kerakli sahifaga olib boradi.
2. Havola bo‘lmasa, yuboruvchi yoki qabul qiluvchining manzilini eksplorer qidiruviga kiriting.
3. Natijada manzil va tarmoq to‘g‘ri ekanini tekshiring. Manzilda bitta belgi farq qilsa, siz boshqa hisobni ko‘rayotgan bo‘lasiz.
4. History bo‘limini oching va kerakli yozuvni vaqt, kontragent (ikkinchi tomon) va summa bo‘yicha toping.
5. Ilova logida yoki API javobida tranzaksiya xeshi bo‘lsa, uni to‘g‘ridan-to‘g‘ri qidiruv maydoniga qo‘ying.

Ko‘p uchraydigan xatolar:

- **Manzilni qo‘lda terish.** Manzilni doim nusxalab qo‘ying, boshi va oxirini hamyondagi bilan solishtiring.
- **Tarmoqqa e’tibor bermaslik.** Natija sahifasida tarmoq ko‘rsatilgan bo‘lsa, u siz kutgan tarmoq ekanini tekshiring.
- **Faqat summa bo‘yicha qidirish.** Bir xil summali bir nechta o‘tkazma bo‘lishi mumkin, shuning uchun vaqt va ikkinchi tomon manzilini ham solishtiring.

> Yangi tranzaksiya darhol chiqmasa, vahima qilmang. TON hujjatlariga ko‘ra, yaqindagi faollik eksplorerda paydo bo‘lishi uchun vaqt kerak bo‘lishi mumkin. Biroz kutib, sahifani yangilang.

## Yuboruvchida «muvaffaqiyatli» chiqdi — pul yetib bordimi?

Har doim ham emas. TON hujjatida aytilishicha, yuboruvchi tranzaksiyasi muvaffaqiyatli bo‘lsa, bu faqat xabar jo‘natilganini ko‘rsatadi. Pul yetib borganini bilish uchun qabul qiluvchi tomondagi tranzaksiyani ham tekshirish kerak.

Yana bir qoida: «yetib bordi» degan xulosadan oldin bounce (qaytish) yoki refund yozuvlarini oxirigacha kuzating.

| Eksplorerda ko‘ringan holat | Ma’nosi | Keyingi qadam |
|---|---|---|
| Tranzaksiya hali ko‘rinmayapti | Yaqindagi faollik kechikib chiqishi mumkin | Biroz kuting, manzil va tarmoqni qayta tekshiring |
| Faqat yuboruvchi tranzaksiyasi bor | Xabar jo‘natilgan, qabul qilingani hali aniq emas | Qabul qiluvchi manzilining History bo‘limini oching |
| Bounce yoki refund yozuvi bor | O‘tkazma qaytgan bo‘lishi mumkin | Qaytish yozuvini oxirigacha kuzating, keyin xulosa qiling |
| Qabul qiluvchi tranzaksiyasi bor, qaytish yo‘q | O‘tkazma yetib borgan | Tranzaksiya havolasini saqlab qo‘ying |

Bounce’ning texnik sabablari bu maqola mavzusidan tashqarida. Asosiysi — tekshirish ketma-ketligi: avval yuboruvchi, keyin qabul qiluvchi, so‘ng qaytish yozuvlari.

Muammo bo‘lsa, yordam xizmatiga yozishdan oldin quyidagilarni tayyorlab qo‘ying:

- tranzaksiya havolasi yoki xeshi;
- yuboruvchi va qabul qiluvchi manzillari;
- o‘tkazma vaqti va summasi.

## Token (jetton) va NFT sovg‘ani eksplorerda qanday tekshiraman?

Manzil sahifasida bo‘limlar ajratilgan: jettonlar (TON’dagi tokenlar) Tokens bo‘limida, NFT’lar Collectibles bo‘limida turadi.

Jettonda asosiy qoida — master manzilni tekshirish. TON hujjatlari jetton uchun master manzilni o‘zingiz kutgan token bilan solishtirishni tavsiya qiladi. Nomi va belgisi bir xil bo‘lsa ham, boshqa manzildagi token boshqa aktiv bo‘ladi. Shuning uchun nomga emas, manzilga qarang va master manzilni ishonchli manbadan oling.

Telegram’dagi kolleksion sovg‘ani TON hamyonga chiqargan bo‘lsangiz, uni hamyon manzili sahifasidagi Collectibles bo‘limidan qidiring. Darhol ko‘rinmasa, yuqoridagi kechikish qoidasini eslang. Sovg‘ani chiqarish tartibi: [Telegram sovg‘asini TON hamyonga o‘tkazish](/blog/telegram-nft-sovga-ton-hamyonga-otkazish).

## Eksplorer nomi bilan qanday firibgarlikka duch kelish mumkin?

Eksplorer faqat ma’lumot ko‘rsatadi. Firibgarlar «yangi eksplorer» niqobida soxta sayt tarqatishi mumkin. Quyidagi qoidalar himoya qiladi:

- Ochiq ma’lumotni ko‘rish uchun seed-frazani (maxfiy so‘zlarni) kiritish kerak emas. Sayt seed-fraza yoki hamyonni ulashni so‘rasa, darhol yoping.
- Eksplorer hamyon emas, shuning uchun u «tasdiqlash» uchun pul yuborishni talab qilmasligi kerak.
- Kanallardagi «yangi rasmiy eksplorer» havolalarini ochishda manzilni harfma-harf tekshiring. Qaysi eksplorer rasmiy deb nomlanganini bilish uchun [docs.ton.org’dagi sahifaga](https://docs.ton.org/onboarding/explorers) tayaning.
- Muhim o‘tkazmani ikkinchi eksplorerda ham solishtiring. Natijalar bir-biriga zid bo‘lsa, ehtiyot bo‘ling va xulosa chiqarishga shoshilmang.

Telegram xaridlarida firibgarlikning boshqa turlari haqida: [Premium sotib olishda firibgarlardan himoya](/blog/telegram-premium-firibgarlikdan-himoya).

## Fragment yoki TON orqali Premium olsam, eksplorer nimaga kerak bo‘ladi?

ton.org’da aytilishicha, kriptohamyon orqali o‘zingiz yoki do‘stingiz uchun Telegram Premium olish mumkin. Bu yo‘lda eksplorer nazorat vositasi bo‘ladi: TON to‘lovi qabul qiluvchiga yetib borganini yuqoridagi tartibda tekshirasiz.

Misol uchun, hamyondan to‘lov yubordingiz, lekin natijaga ishonchingiz yo‘q. Avval hamyondagi tranzaksiya havolasini oching. Keyin qabul qiluvchi tomonda kiruvchi yozuv borligini va bounce yo‘qligini tekshiring. Havolani saqlab qo‘ying — savol tug‘ilsa, u asosiy dalil bo‘ladi.

Kripto yo‘lining afzallik va kamchiliklari alohida yozilgan: [TON orqali Telegram Premium](/blog/ton-orqali-telegram-premium) va [Fragment orqali Premium olish](/blog/fragment-telegram-premium).

Kriptosiz yo‘l ham bor. Premiumtg — mustaqil xizmat. Unda to‘lov so‘mda, [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) boti orqali qilinadi:

- to‘lov usullari: Click, Payme, Paynet, Uzum Bank; xorijiy karta kerak emas;
- faqat username kerak, login kodi yoki parol so‘ralmaydi;
- obuna 10 soniyada avtomatik faollashadi;
- hamyon, TON va eksplorer kerak bo‘lmaydi.

Narxlar: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}. Narx va mavjud to‘lov usullarini xariddan oldin botda tekshiring.

## Ko‘p so‘raladigan savollar

### gram.org va Actonscan bir xil eksplorermi?

Buni tasdiqlovchi rasmiy ma’lumot yo‘q. TON hujjatlari rasmiy ochiq kodli eksplorer sifatida Actonscan’ni ko‘rsatadi, gram.org esa u yerda uchramaydi.

### TON eksplorerda tranzaksiya ko‘rinmasa, pul yo‘qolganmi?

Shart emas: yangi faollik eksplorerga kechikib chiqishi mumkin. Biroz kuting, so‘ng to‘g‘ri manzil va tarmoqni qidirayotganingizni tekshiring.

### Tranzaksiya xeshi bo‘lmasa, qanday topaman?

Yuboruvchi yoki qabul qiluvchi manzilini qidiring va History bo‘limidan yozuvni vaqt, ikkinchi tomon va summa bo‘yicha aniqlang. Xesh ilova logida yoki API javobida bo‘lsa, uni qidiruvga qo‘yish tezroq.

### Eksplorerda seed-fraza so‘ralsa nima qilay?

Saytni yoping va hech narsa kiritmang. Ochiq blokcheyn ma’lumotini ko‘rish uchun maxfiy so‘zlar kerak emas.

### Toncoin hamyonimdagi pul endi Gram deb ko‘rinadimi?

ton.org’ga ko‘ra Gram va Toncoin — bitta tanga, balansingiz boshqa aktivga aylanmagan. Qaysi nom ko‘rsatilishini hamyon ilovasining o‘zida tekshiring.

### Token haqiqiy ekanini eksplorerda qanday bilaman?

Tokens bo‘limida jettonning master manzilini toping va uni loyiha ishonchli manbada e’lon qilgan manzil bilan solishtiring. Nomi bir xil, manzili boshqa bo‘lsa, bu boshqa token.

### Bounce chiqsa, pulim qaytadimi?

Bounce o‘tkazma qaytgan bo‘lishi mumkinligini bildiradi. Qaytish yozuvini oxirigacha kuzatib, pul qaysi manzilda turganini aniqlang, shundan keyingina xulosa qiling.`,
    ru: `## Подтверждено ли, что gram.org — официальный эксплорер TON?

Нет, официальные источники этого не подтверждают. Фраза «gram.org — официальный эксплорер сети TON» звучит в постах Telegram-каналов. Но пост в канале — не официальный источник.

В официальной документации TON есть [отдельная страница об эксплорерах](https://docs.ton.org/onboarding/explorers). Официальным эксплорером с открытым кодом там назван только Actonscan. Согласно документации, он предназначен для разработчиков смарт-контрактов. gram.org на этой странице не упоминается.

В постах также рассказывают об истории сайта и его владельце. В официальных источниках мы этого не нашли, поэтому здесь не повторяем. Чётких официальных сведений о том, что для обычных пользователей существует единственный «официальный» эксплорер, тоже нет.

> Практическое правило: смотрите не на название эксплорера и не на ярлык «официальный», а на данные, которые он показывает. Важную транзакцию сверьте ещё в одном эксплорере.

## Что такое эксплорер TON и что в нём можно увидеть?

Эксплорер — сайт для просмотра открытых данных блокчейна. Это не кошелёк: отправить деньги через него нельзя, можно только посмотреть информацию.

По документации TON, эксплореры показывают:

- балансы аккаунтов (адресов);
- переводы Gram и токенов;
- код и хранилище контрактов;
- транзакции и сообщения.

Некоторые эксплореры дают и дополнительные данные: блоки masterchain и shardchain, активность валидаторов, а также сетевые метрики — объём транзакций, расход газа и комиссии.

В документации сказано, что эксплореры получают данные через TON Center API v2 и v3. То есть разные сайты часто опираются на один и тот же источник, а отличаются в основном дизайном и дополнительными разделами. Поэтому привязываться к одному сайту не нужно: при необходимости данные можно сверить в другом эксплорере.

## Gram и Toncoin — одна и та же монета?

Да. По данным [ton.org](https://ton.org/), Gram — нативная монета блокчейна TON, и она также известна под названием Toncoin. Оба названия обозначают одну монету. Это не новый токен и не отдельный актив.

Дата смены названия в официальном источнике точно не указана, поэтому мы её не приводим. Если в одном месте вы видите старое название, а в другом новое, это само по себе не ошибка.

По данным ton.org, некастодиальный кошелёк Gram Wallet от команды Telegram встроен прямо в интерфейс мессенджера. Как его открыть, разобрано в отдельной статье: [как открыть Telegram Wallet](/blog/telegram-wallet-hamyon-ochish-faollashtirish).

На ton.org есть и ориентир по комиссиям: перевод Gram стоит около 0,00039 Gram, перевод USDt — около 0,001 Gram. Это не точный тариф, а ориентир, чтобы понимать порядок сумм.

## Как найти транзакцию в эксплорере TON?

Документация TON рекомендует такой порядок:

1. Если в приложении кошелька есть ссылка на транзакцию, откройте её. Она сразу приведёт на нужную страницу.
2. Если ссылки нет, введите в поиск эксплорера адрес отправителя или получателя.
3. Проверьте в результате, что адрес и сеть верные. Если в адресе отличается хотя бы один символ, вы смотрите чужой аккаунт.
4. Откройте раздел History и найдите нужную запись по времени, контрагенту (второй стороне) и сумме.
5. Если хеш транзакции есть в логах приложения или в ответе API, вставьте его прямо в строку поиска.

Частые ошибки:

- **Ввод адреса вручную.** Всегда копируйте адрес и сверяйте его начало и конец с тем, что в кошельке.
- **Невнимание к сети.** Если на странице результата указана сеть, убедитесь, что это именно та сеть, которую вы ожидаете.
- **Поиск только по сумме.** Переводов с одинаковой суммой может быть несколько, поэтому сверяйте ещё время и адрес второй стороны.

> Если свежая транзакция не появилась сразу, не паникуйте. Согласно документации TON, недавней активности может потребоваться время, чтобы отобразиться в эксплорере. Подождите немного и обновите страницу.

## У отправителя «успешно» — значит, деньги дошли?

Не всегда. В документации TON сказано: успешная транзакция отправителя показывает лишь то, что сообщение было отправлено. Чтобы убедиться, что деньги дошли, нужно проверить и транзакцию на стороне получателя.

Ещё одно правило: прежде чем делать вывод «перевод дошёл», отследите до конца записи bounce (возврат) или refund.

| Что видно в эксплорере | Что это значит | Что делать дальше |
|---|---|---|
| Транзакция пока не видна | Недавняя активность может появляться с задержкой | Подождите, ещё раз проверьте адрес и сеть |
| Есть только транзакция отправителя | Сообщение отправлено, получение пока не подтверждено | Откройте раздел History адреса получателя |
| Есть запись bounce или refund | Перевод мог вернуться | Отследите запись возврата до конца, потом делайте вывод |
| Есть транзакция получателя, возврата нет | Перевод дошёл | Сохраните ссылку на транзакцию |

Технические причины bounce выходят за рамки этой статьи. Главное — последовательность проверки: сначала отправитель, затем получатель, после этого записи о возврате.

Если возникла проблема, перед обращением в поддержку подготовьте:

- ссылку на транзакцию или её хеш;
- адреса отправителя и получателя;
- время и сумму перевода.

## Как проверить токен (жетон) и NFT-подарок в эксплорере?

На странице адреса разделы разнесены: жетоны (токены в TON) находятся в разделе Tokens, NFT — в разделе Collectibles.

Главное правило для жетона — проверять master-адрес. Документация TON советует сравнивать master-адрес жетона с тем токеном, который вы ожидаете получить. Даже при совпадении названия и тикера токен с другим адресом — это другой актив. Поэтому ориентируйтесь не на название, а на адрес, и берите master-адрес из надёжного источника.

Если вы вывели коллекционный подарок из Telegram в TON-кошелёк, ищите его в разделе Collectibles на странице адреса кошелька. Если он не виден сразу, вспомните правило о задержке выше. Порядок вывода подарка описан здесь: [как перевести подарок Telegram в TON-кошелёк](/blog/telegram-nft-sovga-ton-hamyonga-otkazish).

## Какие мошенничества встречаются под видом эксплорера?

Эксплорер только показывает данные. Мошенники могут распространять поддельный сайт под видом «нового эксплорера». Защитят такие правила:

- Для просмотра открытых данных seed-фраза (секретные слова) не нужна. Если сайт просит seed-фразу или подключить кошелёк, сразу закрывайте его.
- Эксплорер — не кошелёк, поэтому он не должен требовать перевести деньги «для подтверждения».
- Открывая ссылки на «новый официальный эксплорер» из каналов, проверяйте адрес буква за буквой. Чтобы узнать, какой эксплорер назван официальным, опирайтесь на [страницу в docs.ton.org](https://docs.ton.org/onboarding/explorers).
- Важный перевод сверьте во втором эксплорере. Если результаты противоречат друг другу, будьте осторожны и не спешите с выводами.

О других видах мошенничества при покупках в Telegram: [как защититься от мошенников при покупке Premium](/blog/telegram-premium-firibgarlikdan-himoya).

## Зачем нужен эксплорер, если покупать Premium через Fragment или TON?

На ton.org сказано, что с помощью криптокошелька можно оформить Telegram Premium для себя или для друзей. На этом пути эксплорер служит инструментом контроля: вы проверяете по порядку выше, дошёл ли платёж в TON до получателя.

Например, вы отправили платёж из кошелька, но не уверены в результате. Сначала откройте ссылку на транзакцию в кошельке. Затем проверьте, что на стороне получателя есть входящая запись и нет bounce. Сохраните ссылку — если возникнут вопросы, она станет главным доказательством.

Плюсы и минусы криптовариантa разобраны отдельно: [Telegram Premium через TON](/blog/ton-orqali-telegram-premium) и [покупка Premium через Fragment](/blog/fragment-telegram-premium).

Есть и путь без криптовалюты. Premiumtg — независимый сервис. Оплата в нём проходит в сумах через бота [@premiumtg_uzbot](https://t.me/premiumtg_uzbot):

- способы оплаты: Click, Payme, Paynet, Uzum Bank; зарубежная карта не нужна;
- нужен только username, код входа и пароль не запрашиваются;
- подписка активируется автоматически за 10 секунд;
- кошелёк, TON и эксплорер не понадобятся.

Цены: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}. Перед покупкой уточните цену и доступные способы оплаты в боте.

## Часто задаваемые вопросы

### gram.org и Actonscan — это один и тот же эксплорер?

Официальных данных, которые бы это подтверждали, нет. В документации TON официальным эксплорером с открытым кодом назван Actonscan, а gram.org там не встречается.

### Транзакции не видно в эксплорере TON — деньги пропали?

Не обязательно: свежие операции могут появляться в эксплорере с опозданием. Подождите немного, а затем убедитесь, что ищете по правильному адресу и в правильной сети.

### Как найти транзакцию, если у меня нет хеша?

Найдите адрес отправителя или получателя и в разделе History определите запись по времени, второй стороне и сумме. Если хеш есть в логе приложения или ответе API, быстрее вставить его в поиск.

### Что делать, если эксплорер просит seed-фразу?

Закройте сайт и ничего не вводите. Чтобы смотреть открытые данные блокчейна, секретные слова не требуются.

### Мои Toncoin теперь будут отображаться как Gram?

По данным ton.org, Gram и Toncoin — одна монета, так что ваш баланс не превратился в другой актив. Какое название показывается, проверьте в самом приложении кошелька.

### Как понять в эксплорере, что токен настоящий?

В разделе Tokens найдите master-адрес жетона и сравните его с адресом, который проект опубликовал в надёжном источнике. Если название совпадает, а адрес другой, — это другой токен.

### Если появился bounce, деньги вернутся?

Bounce говорит о том, что перевод мог вернуться. Проследите запись возврата до конца и выясните, на каком адресе находятся средства, — только после этого делайте вывод.`,
  },
};
