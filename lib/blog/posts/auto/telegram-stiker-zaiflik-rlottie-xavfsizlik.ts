// Avtoblogyoz yasagan maqola (2026-11-04). Niyat: O'zbekistondagi Telegram foydalanuvchisi stikerlar orqali telefon buzilishi mumkinligi haqidagi xabarni eshitib, «telegram stiker zaiflik» deb qidiradi: bu rostmi, qanchalik xavfli va o'zini qanday himoya qiladi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/stickers
//   https://bugs.telegram.org/c/65400/7
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-stiker-zaiflik-rlottie-xavfsizlik",
  date: "2026-11-04",
  reviewed: "2026-11-04",
  category: "xavfsizlik",
  priority: 0.7,
  title: { uz: "Telegram stiker zaifligi: stiker orqali telefon buzilishi rostmi?", ru: "Уязвимость стикеров в Telegram: правда ли, что стикер может взломать телефон?" },
  excerpt: { uz: `Qisman rost: rasmiy hisobotda bir stiker iOS’dagi Telegram’ni ishdan chiqargani qayd etilgan, xato 12.9.4 versiyada tuzatilgan. Telefonni buzish haqida rasmiy bayonot topilmadi.`, ru: `Отчасти правда: в официальном отчёте записано, что стикер ронял Telegram на iOS, ошибку исправили в версии 12.9.4. Официальных заявлений о взломе телефона не найдено.` },
  keywords: ["telegram stiker zaiflik","telegram stiker xavfli","telegram stiker virus","rlottie zaiflik","telegram stiker sabab ishdan chiqdi","telegram xavfsizlik stiker","уязвимость telegram стикеры","rlottie уязвимость","telegram стикер взлом телефона","telegram вылетает из-за стикера","tlottie telegram"],
  related: ["telegram-premium-akkaunt-bloklanadimi","telegram-premium-firibgarlikdan-himoya","username-berish-xavfsizmi","telegram-premium-emoji-stiker-status"],
  sources: [{"url":"https://core.telegram.org/api/stickers","title":"Stickers and masks"},{"url":"https://bugs.telegram.org/c/65400/7","title":"Telegram crashes when opening Chats or sending messages"}],
  content: {
    uz: `## Stiker orqali telefon buzilishi haqidagi xabar rostmi?

Qisman. Telegram’ning xatoliklar sahifasida iOS ilovasi qandaydir stiker sababli ishdan chiqqani qayd etilgan. Sahifa maqomiga ko‘ra, xato 12.9.4 versiyasida tuzatilgan.

Stiker orqali telefonga kirish, ma’lumot o‘g‘irlash yoki begona kodni ishga tushirish haqida esa rasmiy bayonot bu maqolani tayyorlashda topilmadi.

Telegram kanallari va guruhlarida tarqaladigan ogohlantirishlar ko‘pincha haqiqiy voqeaga tayanadi, lekin oqibatini bo‘rttirib ko‘rsatadi. Shuning uchun har bir da’voni Telegram’ning o‘z sahifalari bilan alohida solishtirdik. Natija shunday: vahimaga asos yo‘q, lekin ilovani yangilab qo‘yish foydali.

## Telegram’dagi animatsiyali stikerlar qanday ishlaydi?

Telegram hujjatlariga ko‘ra, animatsiyali stikerlar Lottie vektor animatsiyalaridir. Ular uchun maxsus .tgs formati ishlatiladi. Bu gzip bilan siqilgan JSON fayl bo‘lib, rlottie kutubxonasi orqali ijro etiladi. Batafsil ma’lumot Telegram’ning [Stickers and masks](https://core.telegram.org/api/stickers) hujjatida berilgan.

Sodda qilib aytganda, animatsiyali stiker tayyor rasm yoki video emas. U ilova ekranda «chizib» beradigan ko‘rsatmalar to‘plami, chizish ishini esa kutubxona bajaradi. Kutubxonada xato bo‘lsa va fayl shu xatoga duch keladigan tarzda tuzilgan bo‘lsa, ilova to‘xtab qolishi mumkin. Mavzu aynan shu yerdan kelib chiqqan.

Oddiy va Premium stikerlar hamda emoji-status farqi haqida alohida yozganmiz: [Premium emoji, stikerlar va emoji-status](/blog/telegram-premium-emoji-stiker-status).

## Rasmiy manbada aynan nima qayd etilgan?

Telegram’ning xatoliklar platformasida [«Telegram crashes when opening Chats or sending messages»](https://bugs.telegram.org/c/65400/7) nomli hisobot bor. Unda quyidagilar yozilgan:

- Foydalanuvchi xabariga ko‘ra, iOS ilovasi har safar ishdan chiqqan. Xato jurnallarida esa bir xil rlottie/LOTPolystarItem steki SIGABRT bilan tugagan.
- Ilova belgisini bosib odatdagidek ochilganda ham Telegram darhol yopilgan.
- Sayt moderatori (Admin Dog) muammoga qandaydir stiker sabab bo‘lganini va u keyingi yangilanishda tuzatilishini yozgan. Bu moderator Telegram xodimimi yoki ko‘ngillimi — tasdiqlanmagan.
- Sahifa maqomiga ko‘ra, xato oxirgi marta 12.9.3.34622 versiyasida takrorlangan va 12.9.4 versiyasida tuzatilgan.
- Moderator vaqtinchalik yechim sifatida muammoli stikerni Telegram Desktop orqali o‘chirishni taklif qilgan.

Demak, rasmiy manbada qayd etilgan holat — iOS ilovasining stiker sababli ishdan chiqishi. Hisobotda ma’lumot o‘g‘irlanishi yoki telefon boshqaruvi qo‘lga olinishi haqida gap yo‘q.

## Tarqalgan da’volarning qaysi biri tasdiqlangan?

| Da’vo | Rasmiy manbada | Izoh |
|---|---|---|
| Stiker rlottie orqali ijro etiladi | Tasdiqlangan | Telegram API hujjatida yozilgan |
| Stiker ilovani ishdan chiqarishi mumkin | iOS uchun qayd etilgan | Xatoliklar sahifasidagi hisobot |
| Xato tuzatilgan | Ha, 12.9.4 versiyada | Sahifa maqomi bo‘yicha |
| Stiker orqali begona kod ishga tushadi | Topilmadi | Rasmiy xavfsizlik e’loni yo‘q |
| Stiker Telegram serveridagi tekshiruvdan o‘tadi | Topilmadi | Server tekshiruvi tavsifi yo‘q |
| Telegram tlottie kutubxonasiga o‘tmoqda | Topilmadi | Bosqichma-bosqich tarqatish haqida ham ma’lumot yo‘q |
| Boshqa platformalar ham ta’sirlangan | Bu maqolada tekshirilmagan | Hisobot iOS ilovasi haqida |
| Zaiflikka CVE raqami berilgan | Topilmadi | Ruxsat etilgan rasmiy manbalarda ko‘rinmadi |

«Topilmadi» degani «yolg‘on» degani emas. Bu faqat tekshirilgan rasmiy sahifalarda tasdiq yo‘qligini bildiradi.

Tekshiruv to‘liq emas. Telegram blogidagi maqolalarning to‘liq matni hamda Android va Desktop o‘zgarishlar ro‘yxati ko‘rib chiqilmagan.

## Ilovaning ishdan chiqishi bilan telefonning buzilishi farqi nimada?

Bu ikki holat ko‘pincha aralashtiriladi, holbuki xavf darajasi butunlay boshqa.

- **Ishdan chiqish (crash).** Ilova kutilmagan holatga duch kelib, ishini to‘xtatadi. Hisobotdagi holat aynan shu turga kiradi. Bu noqulay: chatlar ochilmaydi, ilova yopilib qoladi. Lekin crash o‘z-o‘zidan ma’lumot o‘g‘irlanganini anglatmaydi.
- **Masofadan kod bajarish.** Begona odam sizning qurilmangizda o‘z buyrug‘ini ishga tushiradi. Bu ancha jiddiy xavf. Stiker holatida bunday imkoniyat haqida rasmiy bayonot topilmadi.

Amalda farq shunday: crash bo‘lsa, ilovani yangilaysiz yoki muammoli xabarni o‘chirasiz. Qurilma haqiqatan buzilgan bo‘lsa, gap parollarni almashtirish va seanslarni tekshirish darajasidagi choralar haqida borardi. Hozirgi rasmiy ma’lumotlar faqat birinchi holatni ko‘rsatadi.

## Bunday ogohlantirishni qanday tekshirish mumkin?

«Hammani ogohlantiring» uslubidagi xabarlar tez tarqaladi. Ularni qayta yuborishdan oldin bir necha daqiqa tekshiruvga sarflang:

1. Xabarni yuborgan odamdan manba havolasini so‘rang. Havola bo‘lmasa, xabarni fakt sifatida qabul qilmang.
2. Telegram’ning rasmiy sahifalarini ko‘ring: [Telegram blogi](https://telegram.org/blog), [dasturchilar hujjatlari](https://core.telegram.org) va xatoliklar platformasi.
3. Xatolik hisoboti topilsa, uning maqomiga qarang. Masalan, «Fixed in» belgisi xato qaysi versiyada tuzatilganini ko‘rsatadi.
4. Postdagi versiya raqami yoki CVE kabi aniq ma’lumotlarni rasmiy manbada alohida qidiring. Raqam borligi da’vo to‘g‘riligini isbotlamaydi.
5. Qo‘rqituvchi ohang, shoshiltirish va «darhol hammaga yuboring» degan chaqiriq — ehtiyot bo‘lishga signal.

> Rasmiy havola bo‘lmasa, xabarni oila va ish guruhlariga tarqatmang. Noto‘g‘ri ogohlantirish keraksiz vahima uyg‘otadi va firibgarlarga qulay vaziyat yaratadi.

## O‘zimni qanday himoya qilaman: amaliy qadamlar

1. Telegram’ni App Store yoki Google Play’dan eng so‘nggi versiyaga yangilang. iOS uchun xato 12.9.4 versiyada tuzatilgan deb belgilangan.
2. O‘rnatilgan versiyani ilova sozlamalarida yoki do‘kon sahifasida tekshiring. Telefonda avtomatik yangilanishni yoqib qo‘ying.
3. Faqat rasmiy Telegram ilovalaridan foydalaning. Noma’lum «mod» versiyalar yangilanishni kechiktirishi va o‘zi xavf manbai bo‘lishi mumkin. Bu haqda [akkaunt bloklanishi va xavflar](/blog/telegram-premium-akkaunt-bloklanadimi) maqolasida yozganmiz.
4. Notanish akkauntlardan kelgan shubhali chatlarni ochishga shoshilmang, spam yuboruvchini bloklang. Bu umumiy ehtiyot qoidasi, aynan shu xato bo‘yicha rasmiy tavsiya emas.
5. Ikki bosqichli tasdiqlash parolini yoqing va SMS-kodni hech kimga bermang. Username bilan kodning farqi haqida: [username berish xavflimi](/blog/username-berish-xavfsizmi).

Bu qadamlar faqat stiker mavzusi uchun emas. Ular akkauntni boshqa ko‘p xavflardan ham asraydi.

## Telegram stiker sababli ochilmay qolsa nima qilish kerak?

Telegram ochilishi bilanoq yopilib qolsa, quyidagicha harakat qiling:

1. App Store yoki Google Play’da yangilanish borligini tekshiring va o‘rnating. Hisobotdagi holatda aynan yangilanish yechim sifatida ko‘rsatilgan.
2. Yangilanish hali chiqmagan bo‘lsa va kompyuterdagi Telegram Desktop’da akkauntingiz ochiq bo‘lsa, vaqtincha undan foydalanib turing.
3. Moderator muammoli stikerni Telegram Desktop orqali o‘chirishni taklif qilgan. Stiker qaysi chatda ekanini bilsangiz, shu yo‘l bilan urinib ko‘ring.
4. Muammo boshlanishidan oldin qaysi chatni ochganingizni eslang. Muammoli xabarni topish shu bilan osonlashadi.

Ilovani o‘chirib, qayta o‘rnatishdan oldin akkauntga qayta kirish uchun telefon raqamingiz va ikki bosqichli parolingiz qo‘lingizda ekanini tekshiring.

Bunday paytda «ilovangizni tuzatib beraman» yoki «akkauntingizni tekshiramiz» deb yozadigan begonalar paydo bo‘lishi mumkin. Ularga SMS-kod yoki parol bermang. Shunga o‘xshash nayranglar haqida: [firibgarlardan qanday himoyalanish](/blog/telegram-premium-firibgarlikdan-himoya).

## Bu xabar Premium yoki Premium stikerlarga aloqadormi?

Rasmiy manbalarda bu xato Premium bilan bog‘lanmagan. Telegram hujjatiga ko‘ra, animatsiyali stikerlar umuman Lottie formatida va rlottie orqali ishlaydi. Hisobotda ham gap «qandaydir stiker» haqida boradi, alohida Premium stiker haqida emas.

Premium statusni faqat Telegram beradi. Premiumtg orqali obuna olishda username yetarli: akkauntga kirish, login kodi yoki parol so‘ralmaydi. Batafsil: [akkauntga kirmasdan Premium olish](/blog/akkauntga-kirmasdan-premium-olish).

Shuning uchun «stiker xavfi tufayli Premium’ingizni tekshirishimiz kerak, kodni yuboring» degan xabar firibgarlik belgisi. Premium uchun bunday kod umuman kerak emas.

## Ko‘p so‘raladigan savollar

### Telegram stikerini ochmasdan ham telefon buzilishi mumkinmi?

Tekshirilgan hisobotda gap telefonni buzish haqida emas. Unda stiker sababli iOS ilovasining ochilishi bilanoq yopilib qolgani yozilgan. Qurilma boshqaruvi qo‘lga olingani yoki begona kod ishga tushgani haqida rasmiy ma’lumot topilmadi.

### Android’dagi Telegram ham bu stiker xatosidan ta’sirlanganmi?

Ko‘rib chiqilgan hisobot faqat iOS ilovasiga tegishli. Android va Desktop bo‘yicha bu maqolada tasdiqlangan ma’lumot yo‘q. Baribir ilovani doim so‘nggi versiyada saqlang.

### Telegram’ning qaysi versiyasida stiker xatosi tuzatilgan?

Hisobot maqomida xato 12.9.4 versiyasida tuzatilgani ko‘rsatilgan. Oxirgi marta u 12.9.3.34622 versiyasida takrorlangan.

### tlottie nima va Telegram unga o‘tganmi?

Ba’zi postlarda Telegram tlottie kutubxonasiga o‘tayotgani aytiladi. Biroq buni tasdiqlaydigan rasmiy manba topilmadi. Telegram hujjatida animatsiyali stikerlar rlottie orqali ijro etilishi yozilgan.

### Shubhali stiker kelsa, uni qanday o‘chiraman?

Ilova normal ishlasa, xabarni odatdagi usulda o‘chiring va kerak bo‘lsa yuboruvchini bloklang. Telefonda ilova ochilmasa, Telegram Desktop orqali o‘chirib ko‘ring va ilovani yangilang.

### Stikerlar orqali akkauntimni o‘g‘irlashlari mumkinmi?

Stiker yordamida akkaunt egallangani haqida rasmiy ma’lumot yo‘q. Akkauntlar odatda SMS-kod yoki ikki bosqichli parol begonaga berilganda yo‘qotiladi. Shu ikkisini hech kimga aytmang.

### Bu zaiflik uchun CVE raqami bormi?

Ruxsat etilgan rasmiy manbalarda bu holat uchun CVE raqami topilmadi. Biror post raqam keltirsa, uni rasmiy manbada alohida tekshirib ko‘ring.`,
    ru: `## Правда ли, что через стикер можно взломать телефон?

Отчасти. На странице ошибок Telegram зафиксировано, что приложение для iOS вылетало из-за некоего стикера. Судя по статусу страницы, ошибку исправили в версии 12.9.4.

Официального заявления о том, что через стикер можно проникнуть в телефон, украсть данные или запустить чужой код, при подготовке этой статьи найти не удалось.

Предупреждения, которые расходятся по каналам и группам Telegram, часто опираются на реальный случай, но преувеличивают последствия. Поэтому мы отдельно сверили каждое утверждение с собственными страницами Telegram. Вывод такой: поводов для паники нет, но обновить приложение стоит.

## Как устроены анимированные стикеры в Telegram?

Согласно документации Telegram, анимированные стикеры — это векторные анимации Lottie. Для них используется специальный формат .tgs: это сжатый gzip JSON-файл, который воспроизводится с помощью библиотеки rlottie. Подробности — в документе Telegram [Stickers and masks](https://core.telegram.org/api/stickers).

Проще говоря, анимированный стикер — это не готовая картинка и не видео. Это набор инструкций, по которым приложение «рисует» изображение на экране, а саму отрисовку выполняет библиотека. Если в библиотеке есть ошибка, а файл составлен так, что на неё наталкивается, приложение может аварийно завершиться. Именно отсюда и выросла вся история.

О разнице между обычными и Premium-стикерами, а также об эмодзи-статусе мы писали отдельно: [Premium-эмодзи, стикеры и эмодзи-статус](/blog/telegram-premium-emoji-stiker-status).

## Что именно зафиксировано в официальном источнике?

На платформе ошибок Telegram есть отчёт [«Telegram crashes when opening Chats or sending messages»](https://bugs.telegram.org/c/65400/7). В нём говорится следующее:

- По словам пользователя, приложение для iOS вылетало каждый раз. В журналах сбоев был один и тот же стек rlottie/LOTPolystarItem, заканчивающийся SIGABRT.
- Даже при обычном запуске нажатием на иконку Telegram сразу закрывался.
- Модератор сайта (Admin Dog) написал, что проблему вызывает некий стикер и что её исправят в следующем обновлении. Является ли этот модератор сотрудником Telegram или волонтёром — не подтверждено.
- Судя по статусу страницы, в последний раз ошибка воспроизводилась в версии 12.9.3.34622 и была исправлена в версии 12.9.4.
- В качестве временного решения модератор предложил удалить проблемный стикер через Telegram Desktop.

Итак, в официальном источнике зафиксирован один случай — вылет приложения для iOS из-за стикера. О краже данных или перехвате управления телефоном в отчёте речи нет.

## Какие из распространённых утверждений подтверждены?

| Утверждение | В официальном источнике | Комментарий |
|---|---|---|
| Стикер воспроизводится через rlottie | Подтверждено | Написано в документации Telegram API |
| Стикер может уронить приложение | Зафиксировано для iOS | Отчёт на странице ошибок |
| Ошибка исправлена | Да, в версии 12.9.4 | По статусу страницы |
| Через стикер запускается чужой код | Не найдено | Официального бюллетеня безопасности нет |
| Стикер проходит проверку на серверах Telegram | Не найдено | Описания серверной проверки нет |
| Telegram переходит на библиотеку tlottie | Не найдено | О поэтапном распространении обновления данных тоже нет |
| Затронуты и другие платформы | В этой статье не проверялось | Отчёт касается приложения для iOS |
| Уязвимости присвоен номер CVE | Не найдено | В разрешённых официальных источниках не встречается |

«Не найдено» не значит «ложь». Это лишь означает, что на проверенных официальных страницах подтверждения нет.

Проверка неполная. Полные тексты статей блога Telegram, а также списки изменений для Android и Desktop не изучались.

## Чем вылет приложения отличается от взлома телефона?

Эти две ситуации часто путают, хотя уровень угрозы у них совершенно разный.

- **Вылет (crash).** Приложение сталкивается с непредвиденной ситуацией и прекращает работу. Случай из отчёта относится именно к этому типу. Это неприятно: чаты не открываются, приложение закрывается. Но сам по себе вылет не означает, что данные украдены.
- **Удалённое выполнение кода.** Посторонний человек запускает свои команды на вашем устройстве. Это куда более серьёзная угроза. Официальных заявлений о такой возможности в случае со стикером не найдено.

На практике разница такая: при вылете вы обновляете приложение или удаляете проблемное сообщение. Если бы устройство действительно взломали, речь шла бы о смене паролей и проверке активных сеансов. Нынешние официальные данные указывают только на первый вариант.

## Как проверить такое предупреждение?

Сообщения в духе «предупредите всех» распространяются быстро. Прежде чем пересылать, потратьте несколько минут на проверку:

1. Попросите у отправителя ссылку на источник. Если ссылки нет, не принимайте сообщение как факт.
2. Загляните на официальные страницы Telegram: [блог Telegram](https://telegram.org/blog), [документацию для разработчиков](https://core.telegram.org) и платформу ошибок.
3. Если нашёлся отчёт об ошибке, посмотрите его статус. Например, отметка «Fixed in» показывает, в какой версии ошибку исправили.
4. Конкретные данные из поста — номер версии или CVE — отдельно ищите в официальном источнике. Само наличие номера не доказывает, что утверждение верно.
5. Пугающий тон, спешка и призыв «срочно разошлите всем» — повод насторожиться.

> Если официальной ссылки нет, не распространяйте сообщение по семейным и рабочим чатам. Ложное предупреждение сеет лишнюю панику и создаёт удобную почву для мошенников.

## Как защититься: практические шаги

1. Обновите Telegram до последней версии через App Store или Google Play. Для iOS ошибка отмечена как исправленная в версии 12.9.4.
2. Проверьте установленную версию в настройках приложения или на странице в магазине. Включите на телефоне автообновление.
3. Пользуйтесь только официальными приложениями Telegram. Неизвестные «моды» могут запаздывать с обновлениями и сами становиться источником угрозы. Об этом мы писали в статье [о блокировке аккаунта и рисках](/blog/telegram-premium-akkaunt-bloklanadimi).
4. Не спешите открывать подозрительные чаты от незнакомых аккаунтов, блокируйте спамеров. Это общее правило осторожности, а не официальная рекомендация именно по этой ошибке.
5. Включите пароль двухэтапной проверки и никому не сообщайте SMS-код. Чем username отличается от кода: [опасно ли давать username](/blog/username-berish-xavfsizmi).

Эти шаги полезны не только в истории со стикерами. Они защищают аккаунт и от многих других угроз.

## Что делать, если Telegram не открывается из-за стикера?

Если Telegram закрывается сразу после запуска, действуйте так:

1. Проверьте, есть ли обновление в App Store или Google Play, и установите его. В случае из отчёта решением было именно обновление.
2. Если обновление ещё не вышло, а на компьютере открыт ваш аккаунт в Telegram Desktop, временно пользуйтесь им.
3. Модератор предложил удалить проблемный стикер через Telegram Desktop. Если знаете, в каком чате он находится, попробуйте этот способ.
4. Вспомните, какой чат вы открывали перед началом сбоя. Так будет проще найти проблемное сообщение.

Прежде чем удалять и заново устанавливать приложение, убедитесь, что у вас под рукой номер телефона и пароль двухэтапной проверки — они понадобятся для повторного входа.

В такие моменты могут объявиться посторонние с предложениями «починить приложение» или «проверить аккаунт». Не давайте им SMS-код и пароль. О похожих уловках: [как защититься от мошенников](/blog/telegram-premium-firibgarlikdan-himoya).

## Связана ли эта история с Premium или Premium-стикерами?

В официальных источниках эта ошибка с Premium не связана. По документации Telegram, анимированные стикеры в целом работают в формате Lottie и воспроизводятся через rlottie. В отчёте тоже говорится о «некоем стикере», а не конкретно о Premium-стикере.

Premium-статус выдаёт только Telegram. Для оформления подписки через Premiumtg достаточно username: вход в аккаунт, код подтверждения или пароль не запрашиваются. Подробнее: [Premium без входа в аккаунт](/blog/akkauntga-kirmasdan-premium-olish).

Поэтому сообщение вроде «из-за угрозы со стикерами нужно проверить ваш Premium, пришлите код» — признак мошенничества. Для Premium такой код не нужен вовсе.

## Часто задаваемые вопросы

### Можно ли взломать телефон, даже не открывая стикер в Telegram?

В проверенном отчёте речь идёт не о взломе телефона, а о том, что приложение на iOS из-за стикера закрывалось сразу после запуска. Официальных данных о перехвате управления устройством или запуске чужого кода не найдено.

### Затронула ли ошибка со стикером Telegram на Android?

Изученный отчёт касается только приложения для iOS. Подтверждённой информации по Android и Desktop в этой статье нет, но держать приложение в актуальной версии стоит в любом случае.

### В какой версии Telegram исправили ошибку со стикером?

В статусе отчёта указано, что ошибка исправлена в версии 12.9.4. Последний раз она воспроизводилась в версии 12.9.3.34622.

### Что такое tlottie и перешёл ли на неё Telegram?

В некоторых постах пишут, что Telegram переходит на библиотеку tlottie, но официального источника, который бы это подтверждал, найти не удалось. В документации Telegram сказано, что анимированные стикеры воспроизводятся через rlottie.

### Как удалить подозрительный стикер?

Если приложение работает нормально, удалите сообщение обычным способом и при необходимости заблокируйте отправителя. Если Telegram на телефоне не запускается, попробуйте удалить стикер через Telegram Desktop и обновите приложение.

### Могут ли украсть мой аккаунт через стикеры?

Официальных данных о захвате аккаунта с помощью стикера нет. Как правило, аккаунты теряют, когда SMS-код или пароль двухэтапной проверки попадает к посторонним, — никому их не сообщайте.

### Есть ли у этой уязвимости номер CVE?

В разрешённых официальных источниках номер CVE для этого случая не найден. Если в каком-то посте приводится номер, проверьте его отдельно по официальному источнику.`,
  },
};
