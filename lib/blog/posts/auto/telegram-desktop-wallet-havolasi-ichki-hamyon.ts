// Avtoblogyoz yasagan maqola (2026-11-09). Niyat: Telegram Desktop foydalanuvchisi @wallet havolasini bosganda nega bot o‘rniga ichki hamyon ochilayotganini va bu rostmi ekanini «telegram desktop wallet» so‘zi bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://desktop.telegram.org/changelog
//   https://telegram.org/blog
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-desktop-wallet-havolasi-ichki-hamyon",
  date: "2026-11-09",
  reviewed: "2026-11-09",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram Desktop wallet: @wallet havolasi ichki hamyonni ochyaptimi?", ru: "Telegram Desktop и @wallet: ссылка открывает встроенный кошелёк?" },
  excerpt: { uz: `Rasman tasdiqlanmagan: Telegram Desktop’da @wallet havolasi bot o‘rniga ichki hamyonni ochishi haqida rasmiy blog va versiyalar sahifasida yozuv topilmadi.`, ru: `Официально не подтверждено: в блоге Telegram и на странице версий Telegram Desktop нет записи о том, что ссылка @wallet открывает встроенный кошелёк вместо бота.` },
  keywords: ["telegram desktop wallet","telegram desktop @wallet havolasi","telegram ichki hamyon","telegram wallet bot ochilmayapti","telegram hamyon desktop","@wallet havolasi o‘zgardi","telegram desktop кошелек","встроенный кошелек telegram","ссылка @wallet telegram desktop","wallet бот telegram не открывается","telegram desktop changelog"],
  related: ["telegram-wallet-hamyon-ochish-faollashtirish","telegram-hamyon-sovgalar-bilan-bezash-konsept","gram-org-ton-eksplorer-rasmiymi","telegram-nft-sovga-ton-hamyonga-otkazish"],
  sources: [{"url":"https://desktop.telegram.org/changelog","title":"Version history"},{"url":"https://telegram.org/blog","title":"Telegram Blog"}],
  content: {
    uz: `## @wallet havolasi Telegram Desktop’da ichki hamyonni ochishi rostmi?

Bu da’vo Telegram kanal postidan chiqqan. Telegram’ning rasmiy e’loni yoki Telegram Desktop o‘zgarishlar yozuvida bu haqda ma’lumot topilmadi.

Telegram’ning [rasmiy blogi](https://telegram.org/blog)dagi eng so‘nggi post 2026-yil 25-avgustda chiqqan. U «Welcome Messages, Buttons in Messages and Signed Gifts» deb nomlangan va unda hamyon haqida gap yo‘q. Bu yangilanishda nimalar e’lon qilinganini [avgust yangiliklari haqidagi maqolada](/blog/telegram-2026-avgust-yangiliklari) o‘qishingiz mumkin.

Demak, sizda @wallet bosilganda haqiqatan boshqacha oyna ochilayotgan bo‘lsa ham, bu o‘zgarish Telegram tomonidan rasman tushuntirilmagan. Ma’lumotlar 2026-yil 9-noyabr holatiga ko‘ra tekshirildi.

## Kanal postida aynan nima deyilgan?

Postdagi asosiy fikrlar quyidagicha:

- Telegram Desktop’da @wallet bosilganda foydalanuvchi avvalgi Wallet boti o‘rniga Telegram’ning ichki hamyoniga yo‘naltiriladi.
- Kelajakda bunday yo‘naltirish boshqa qurilmalarda ham paydo bo‘lishi «ehtimol» deb aytilgan. Bu muallifning taxmini, rasmiy ma’lumot emas.

Post oddiy Telegram kanalida chiqqan, u rasmiy manba emas. Shuning uchun bu maqolada undan faqat mavzu olindi, faktlar esa rasmiy sahifalar bilan solishtirildi.

Kanal kuzatuvi bitta foydalanuvchi yoki bitta qurilmadagi holatni aks ettirishi mumkin. Uni hammada bir xil ishlaydigan yangi funksiya deb qabul qilish erta.

## Rasmiy manbalarda nima tasdiqlandi, nima tasdiqlanmadi?

Quyidagi jadvalda postdagi har bir da’vo va unga rasmiy manbalarda topilgan holat ko‘rsatilgan.

| Da’vo yoki savol | Rasmiy holat | Qayerda qaraldi |
|---|---|---|
| Desktop’da @wallet bot o‘rniga ichki hamyonni ochadi | Rasmiy yozuv topilmadi | Telegram blogi, Desktop versiyalar sahifasi |
| Telegram ichida o‘rnatilgan hamyon bor, uning nomi va ishlashi | Rasmiy ta’rif topilmadi | Ko‘rilgan rasmiy sahifalar |
| Yo‘naltirish boshqa qurilmalarga ham keladi | Rasmiy ma’lumot yo‘q, faqat taxmin | Kanal posti |
| @wallet botining Telegram bilan aloqasi | Rasmiy sahifa topilmadi | Ko‘rilgan rasmiy sahifalar |
| Desktop versiyalar sahifasida o‘zgarishlar ro‘yxati | To‘liq berilmagan, faqat to‘liq tarixga havola bor | [desktop.telegram.org/changelog](https://desktop.telegram.org/changelog) |
| Blogdagi so‘nggi post | 25-avgust posti, hamyon haqida emas | [telegram.org/blog](https://telegram.org/blog) |

Tekshiruv faqat ko‘rilgan sahifalarga tegishli. Telegram Desktop’ning to‘liq o‘zgarishlar tarixi bu maqolada ko‘rilmagan. Shuning uchun «hech qayerda yozilmagan» demaymiz, balki «rasmiy blog va versiyalar sahifasida topilmadi» deymiz.

## Telegram Desktop o‘zgarishlarini o‘zim qanday tekshiraman?

Kanal postiga ishonishdan oldin o‘zingiz bir necha daqiqada tekshirib ko‘rishingiz mumkin.

1. Telegram Desktop’ni so‘nggi versiyagacha yangilang.
2. Sozlamalarda ilovaning versiya raqamini toping va yozib qo‘ying.
3. [Telegram Desktop versiyalar sahifasini](https://desktop.telegram.org/changelog) oching.
4. Sahifada o‘zgarishlarning to‘liq ro‘yxati yo‘qligini hisobga oling: u yerda «View full changelog history here ›» degan havola bor.
5. [Telegram blogi](https://telegram.org/blog)dagi so‘nggi postlarni ko‘ring.
6. Versiyangiz va ko‘rgan o‘zgarishingizni rasmiy yozuvlar bilan solishtiring.

Rasmiy yozuv topilmasa, bir nechta izoh bo‘lishi mumkin: sinov, bosqichma-bosqich joriy etish yoki kanal kuzatuvidagi xato. Bular faqat taxminlar. Qaysi biri to‘g‘riligini faqat Telegram tushuntira oladi.

> Do‘stingizda bir xil versiyada boshqacha natija chiqsa, hayron bo‘lmang. Rasmiy tushuntirish yo‘q ekan, xatti-harakat hammada bir xil bo‘lishi kafolatlanmagan.

## Havolani bosganda nima ochilganini qanday farqlayman?

@wallet havolasini bosganingizda ochilgan oynaga diqqat bilan qarang. Bir necha belgi yordam beradi:

- **Bot chati ochilsa**, odatdagi chat oynasi va bot nomi ko‘rinadi. Telegram botlarni chatda qanday belgilashi [bot username’lari haqidagi maqolada](/blog/telegram-bot-username-agent-ai-qoshimchalari) yozilgan.
- **Boshqa oyna ochilsa**, uning sarlavhasi va manzilini o‘qing. Ichki hamyon qanday ko‘rinishi rasman ta’riflanmagan, shuning uchun «haqiqiy» ko‘rinishni tasvirlab bera olmaymiz.
- **Shubhali so‘rov chiqsa** — seed-ibora, login kodi yoki parol so‘ralsa — oynani darhol yoping.

Hamyonni ochish uchun pul yoki boshlang‘ich summa kerakmi degan savolga [Telegram Wallet’ni ochish haqidagi maqolada](/blog/telegram-wallet-hamyon-ochish-faollashtirish) javob berilgan.

## Kutilmagan oyna ochilsa, nima qilish kerak?

Agar @wallet bosilganda siz kutgan bot emas, boshqa narsa ochilsa, vahimaga tushmang. Quyidagi tartibda harakat qiling:

1. Oynada hech narsa kiritmang va tasdiqlash tugmalarini bosmang.
2. Havolani qayerdan bosganingizni eslang: rasmiy kanalmi, notanish odamning xabarimi, guruhdagi postmi.
3. Xuddi shu havolani telefoningizdagi Telegram’da ham ochib ko‘ring va natijani solishtiring.
4. Natija farq qilsa, buni bir qurilmadagi holat sifatida qayd eting, lekin undan umumiy xulosa chiqarmang.
5. Rasmiy blog va versiyalar sahifasini bir necha kundan keyin qayta ko‘ring: rasmiy izoh keyinroq chiqishi mumkin.

Ko‘p uchraydigan xato — havola notanish xabardan kelgan bo‘lsa ham, uni rasmiy deb o‘ylash. Matnda «@wallet» yozilgan bo‘lishi uning haqiqatan shu manzilga olib borishini anglatmaydi. Bunday holatda havolani bosmasdan oldin uning qayerga olib borishini tekshiring.

## Hamyon bilan ishlaganda nimalarga ehtiyot bo‘lish kerak?

Rasman tushuntirilmagan o‘zgarishlar firibgarlar uchun qulay bahona bo‘ladi. «Hamyon ko‘chdi», «yangi hamyonga o‘ting», «mablag‘ingizni saqlab qolish uchun qayta ulang» kabi xabarlar paydo bo‘lishi mumkin.

> Seed-ibora, Telegram login kodi va ikki bosqichli tasdiq parolini hech kimga bermang — Telegram, bot yoki «qo‘llab-quvvatlash xizmati» nomidan so‘ralsa ham.

Amaliy qoidalar:

- Hamyon nomi bilan kelgan notanish havola va botlarga shoshilib ulanmang.
- Mablag‘ni «yangi hamyonga ko‘chirish» taklifiga rozi bo‘lmang, ayniqsa u shaxsiy xabarda kelgan bo‘lsa.
- Tranzaksiya o‘tgan-o‘tmaganini eksplorerda manzil yoki xesh orqali o‘zingiz tekshiring. Qaysi eksplorerga ishonish mumkinligi [gram.org haqidagi maqolada](/blog/gram-org-ton-eksplorer-rasmiymi) tushuntirilgan.
- NFT sovg‘ani hamyonga chiqarmoqchi bo‘lsangiz, faqat tasdiqlangan yo‘lni ishlating. Bu jarayon [NFT sovg‘ani TON hamyonga o‘tkazish maqolasida](/blog/telegram-nft-sovga-ton-hamyonga-otkazish) bosqichma-bosqich yozilgan.

## Hamyon atrofidagi boshqa mish-mishlar qanday ajratiladi?

Kanal postlari ko‘pincha bir foydalanuvchining kuzatuvi yoki muallifning taxminiga asoslanadi. Ular tez tarqaladi, lekin har doim ham tasdiqlanmaydi. Shuning uchun har bir yangi da’voni ikki joy bilan solishtiring: [Telegram blogi](https://telegram.org/blog) va [Desktop versiyalar sahifasi](https://desktop.telegram.org/changelog).

Yaqin misol bor. Telegram hamyonini sovg‘alar bilan bezash haqidagi xabar ham kanallarda tarqalgan edi, lekin u eskiz bo‘lib chiqdi. Bu holat [hamyonni sovg‘alar bilan bezash haqidagi maqolada](/blog/telegram-hamyon-sovgalar-bilan-bezash-konsept) tahlil qilingan.

Mish-mishni ajratish uchun uchta savol bering:

1. Da’voda Telegram’ning bayonoti yoki rasmiy sahifasiga havola bormi?
2. Matnda «ehtimol», «aytishlaricha», «kutilmoqda» kabi so‘zlar bormi?
3. Funksiya sizdan pul, kod yoki seed-ibora talab qilyaptimi?

Birinchi savolga javob «yo‘q», qolganlariga «ha» bo‘lsa, ehtiyot bo‘ling. Rasmiy manbada yo‘q funksiyaga tayanib pul yoki shaxsiy ma’lumot bilan bog‘liq qaror qabul qilmang.

## Ko‘p so‘raladigan savollar

### Telegram Desktop’da @wallet bossam, nega bot ochilmayapti?

Telegram buning sababini rasman tushuntirmagan. Kanal postida bu ichki hamyonga yo‘naltirish deb atalgan, ammo rasmiy blog va Desktop versiyalar sahifasida bunday yozuv yo‘q.

### Telegram’da ichki hamyon rasman e’lon qilinganmi?

Ko‘rilgan rasmiy sahifalarda Telegram ichiga o‘rnatilgan hamyonning nomi ham, ishlash tartibi ham ta’riflanmagan. Blogdagi 25-avgust posti boshqa yangiliklarga bag‘ishlangan.

### Bu o‘zgarish telefondagi Telegram’ga ham keladimi?

Rasmiy ma’lumot yo‘q. Postdagi «ehtimol boshqa qurilmalarga ham keladi» degan gap muallifning taxmini xolos.

### Wallet botidagi mablag‘larim yo‘qolib qolmaydimi?

Havola o‘zgarishining mablag‘larga ta’siri haqida rasmiy bayonot topilmadi. Tranzaksiyalarni eksplorerda o‘zingiz tekshiring va «mablag‘ni ko‘chiring» degan notanish takliflarga javob bermang.

### Telegram Desktop changelog’ini qayerdan ko‘raman?

Rasmiy versiyalar sahifasi desktop.telegram.org/changelog manzilida. U yerda to‘liq ro‘yxat o‘rniga to‘liq tarixga olib boradigan havola berilgan.

### Hamyon nomidan seed-ibora so‘rashsa nima qilaman?

Hech qanday holatda bermang va oynani yoping. Seed-ibora, login kodi yoki 2FA parolini so‘rash — firibgarlikning aniq belgisi.`,
    ru: `## Правда ли, что ссылка @wallet в Telegram Desktop открывает встроенный кошелёк?

Это утверждение появилось в посте одного из Telegram-каналов. Ни официального объявления Telegram, ни записи в списке изменений Telegram Desktop на эту тему найти не удалось.

Последний пост в [официальном блоге](https://telegram.org/blog) Telegram вышел 25 августа 2026 года. Он называется «Welcome Messages, Buttons in Messages and Signed Gifts», и о кошельке в нём ничего нет. Что именно объявили в этом обновлении, можно прочитать в [статье об августовских новинках](/blog/telegram-2026-avgust-yangiliklari).

Даже если у вас при нажатии на @wallet действительно открывается другое окно, Telegram это изменение официально не объяснял. Данные проверены по состоянию на 9 ноября 2026 года.

## Что именно написано в посте канала?

Основные тезисы поста:

- В Telegram Desktop при нажатии на @wallet пользователя перенаправляют не в прежний бот Wallet, а во встроенный кошелёк Telegram.
- Автор пишет, что в будущем такое перенаправление «возможно» появится и на других устройствах. Это его предположение, а не официальная информация.

Пост вышел в обычном Telegram-канале и официальным источником не является. Поэтому из него взята только тема, а факты сверены с официальными страницами.

Наблюдение канала может отражать ситуацию у одного пользователя или на одном устройстве. Считать это новой функцией, которая у всех работает одинаково, пока рано.

## Что подтвердили официальные источники, а что нет?

В таблице — каждое утверждение из поста и то, что по нему удалось найти в официальных источниках.

| Утверждение или вопрос | Официальный статус | Где проверяли |
|---|---|---|
| В Desktop @wallet открывает встроенный кошелёк вместо бота | Официальной записи не найдено | Блог Telegram, страница версий Desktop |
| В Telegram есть встроенный кошелёк, его название и принцип работы | Официального описания не найдено | Просмотренные официальные страницы |
| Перенаправление появится и на других устройствах | Официальных данных нет, только предположение | Пост канала |
| Связь бота @wallet с Telegram | Официальной страницы не найдено | Просмотренные официальные страницы |
| Список изменений на странице версий Desktop | Приведён не полностью, есть только ссылка на полную историю | [desktop.telegram.org/changelog](https://desktop.telegram.org/changelog) |
| Последний пост в блоге | Пост от 25 августа, не про кошелёк | [telegram.org/blog](https://telegram.org/blog) |

Проверка касается только просмотренных страниц. Полную историю изменений Telegram Desktop в рамках этой статьи не изучали. Поэтому мы не говорим «нигде не написано», а говорим «не найдено в официальном блоге и на странице версий».

## Как самому проверить изменения в Telegram Desktop?

Прежде чем верить посту канала, можно за несколько минут проверить всё самостоятельно.

1. Обновите Telegram Desktop до последней версии.
2. Найдите в настройках номер версии приложения и запишите его.
3. Откройте [страницу версий Telegram Desktop](https://desktop.telegram.org/changelog).
4. Учтите, что полного списка изменений там нет: на странице есть ссылка «View full changelog history here ›».
5. Посмотрите последние посты в [блоге Telegram](https://telegram.org/blog).
6. Сопоставьте свою версию и замеченное изменение с официальными записями.

Если официальной записи нет, объяснений может быть несколько: тестирование, постепенное внедрение или ошибка в наблюдении канала. Всё это лишь догадки. Какая из них верна, может объяснить только Telegram.

> Не удивляйтесь, если у друга на той же версии результат другой. Раз официального объяснения нет, одинаковое поведение у всех не гарантировано.

## Как понять, что открылось после нажатия на ссылку?

Нажав на ссылку @wallet, внимательно посмотрите на открывшееся окно. Помогут несколько признаков:

- **Если открылся чат с ботом**, вы увидите обычное окно чата и имя бота. Как Telegram помечает ботов в чате, описано в [статье о username ботов](/blog/telegram-bot-username-agent-ai-qoshimchalari).
- **Если открылось другое окно**, прочитайте его заголовок и адрес. Как выглядит встроенный кошелёк, официально не описано, поэтому описать «настоящий» вид мы не можем.
- **Если появился подозрительный запрос** — у вас просят сид-фразу, код входа или пароль, — сразу закройте окно.

Нужны ли деньги или стартовая сумма, чтобы открыть кошелёк, разобрано в [статье о том, как открыть Telegram Wallet](/blog/telegram-wallet-hamyon-ochish-faollashtirish).

## Что делать, если открылось неожиданное окно?

Если при нажатии на @wallet открылся не тот бот, которого вы ждали, не паникуйте. Действуйте так:

1. Ничего не вводите в окне и не нажимайте кнопки подтверждения.
2. Вспомните, где вы нажали ссылку: в официальном канале, в сообщении от незнакомца или в посте в группе.
3. Откройте ту же ссылку в Telegram на телефоне и сравните результат.
4. Если результат отличается, отметьте это как ситуацию на одном устройстве, но не делайте общих выводов.
5. Загляните в официальный блог и на страницу версий через несколько дней: официальное пояснение может появиться позже.

Частая ошибка — считать ссылку официальной, даже если она пришла от незнакомого человека. То, что в тексте написано «@wallet», ещё не значит, что ссылка ведёт именно туда. В такой ситуации проверьте, куда ведёт ссылка, прежде чем на неё нажимать.

## Чего опасаться при работе с кошельком?

Необъяснённые официально изменения — удобный повод для мошенников. Могут появиться сообщения вроде «кошелёк переехал», «перейдите на новый кошелёк» или «подключитесь заново, чтобы сохранить средства».

> Никому не сообщайте сид-фразу, код входа в Telegram и пароль двухэтапной проверки — даже если их просят от имени Telegram, бота или «службы поддержки».

Практические правила:

- Не спешите переходить по незнакомым ссылкам и в боты, которые представляются кошельком.
- Не соглашайтесь «перенести средства в новый кошелёк», особенно если предложение пришло в личные сообщения.
- Проверяйте, прошла ли транзакция, сами — в эксплорере по адресу или хешу. Каким эксплорерам можно доверять, объясняется в [статье о gram.org](/blog/gram-org-ton-eksplorer-rasmiymi).
- Если хотите вывести NFT-подарок в кошелёк, используйте только подтверждённый способ. Он пошагово описан в [статье о переводе NFT-подарка в TON-кошелёк](/blog/telegram-nft-sovga-ton-hamyonga-otkazish).

## Как отличить другие слухи о кошельке?

Посты каналов часто основаны на наблюдении одного пользователя или на догадке автора. Они быстро расходятся, но подтверждаются не всегда. Поэтому сверяйте каждое новое утверждение с двумя источниками: [блогом Telegram](https://telegram.org/blog) и [страницей версий Desktop](https://desktop.telegram.org/changelog).

Есть свежий пример. Новость о том, что кошелёк Telegram можно украсить подарками, тоже разошлась по каналам, но оказалась эскизом. Этот случай разобран в [статье об оформлении кошелька подарками](/blog/telegram-hamyon-sovgalar-bilan-bezash-konsept).

Чтобы распознать слух, задайте три вопроса:

1. Есть ли в утверждении ссылка на заявление Telegram или его официальную страницу?
2. Встречаются ли в тексте слова «возможно», «говорят», «ожидается»?
3. Требует ли функция от вас денег, кода или сид-фразы?

Если на первый вопрос ответ «нет», а на остальные — «да», будьте осторожны. Не принимайте решений, связанных с деньгами или личными данными, опираясь на функцию, которой нет в официальных источниках.

## Часто задаваемые вопросы

### Почему в Telegram Desktop при нажатии на @wallet не открывается бот?

Официально Telegram причину не объяснял. В посте канала это назвали перенаправлением во встроенный кошелёк, но ни в блоге, ни на странице версий Desktop такой записи нет.

### Встроенный кошелёк в Telegram официально анонсирован?

На просмотренных официальных страницах не описаны ни название встроенного в Telegram кошелька, ни то, как он работает. Пост в блоге от 25 августа посвящён другим новинкам.

### Появится ли это изменение в Telegram на телефоне?

Официальных данных нет. Фраза из поста о том, что это «возможно» появится на других устройствах, — всего лишь предположение автора.

### Не пропадут ли мои средства в боте Wallet?

Официального заявления о том, как смена ссылки влияет на средства, не найдено. Проверяйте транзакции в эксплорере сами и не отвечайте на незнакомые предложения «перенести средства».

### Где посмотреть changelog Telegram Desktop?

Официальная страница версий находится по адресу desktop.telegram.org/changelog. Полного списка там нет — вместо него дана ссылка на полную историю изменений.

### Что делать, если от имени кошелька просят сид-фразу?

Ни в коем случае не сообщайте её и закройте окно. Просьба назвать сид-фразу, код входа или пароль 2FA — явный признак мошенничества.`,
  },
};
