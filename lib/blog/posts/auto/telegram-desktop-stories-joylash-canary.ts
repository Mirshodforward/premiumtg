// Avtoblogyoz yasagan maqola (2026-11-20). Niyat: Kompyuterda Telegram ishlatadigan o‘zbek foydalanuvchisi «Telegram Desktop’da stories joylash mumkinmi» deb, kompyuterdan hikoya qo‘shish mumkinligini va Canary yangilanishi haqidagi xabar rostligini qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/tour/stories
//   https://telegram.org/faq
//   https://telegram.org/blog/stories
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-desktop-stories-joylash-canary",
  date: "2026-11-20",
  reviewed: "2026-11-20",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram Desktop’da stories joylash mumkinmi? Canary yangilanishi rostmi", ru: "Можно ли публиковать истории в Telegram Desktop? Правда ли про Canary" },
  excerpt: { uz: `Rasmiy tasdiq yo‘q: Telegram Desktop Canary #113 da story joylash qo‘shilgani haqida faqat kanal posti yozgan. Rasmiy yo‘riqnoma story yaratishni faqat iOS va Android uchun ko‘rsatadi.`, ru: `Официального подтверждения нет: о публикации историй в Telegram Desktop Canary #113 написал только пост в канале. Официальная инструкция описывает создание историй лишь для iOS и Android.` },
  keywords: ["telegram desktop stories joylash","kompyuterdan telegram story qo‘yish","telegram desktop canary","telegram desktop hikoya qo‘shish","telegram kompyuterda istoriya joylash","telegram stories kompyuter","как выложить историю в telegram desktop","telegram desktop истории с компьютера","telegram desktop canary stories","как опубликовать сторис в телеграм на пк","телеграм истории на компьютере"],
  related: ["telegram-stories-premium","telegram-premium-kompyuterda-ishlaydimi","telegram-desktop-wallet-havolasi-ichki-hamyon","telegram-kanal-boost"],
  sources: [{"url":"https://telegram.org/tour/stories","title":"Telegram Stories"},{"url":"https://telegram.org/faq","title":"Telegram FAQ"},{"url":"https://telegram.org/blog/stories","title":"Stories and 10 Years of Telegram"}],
  content: {
    uz: `Telegram Desktop’ga, jumladan Canary #113 deb atalgan versiyaga, story joylash qo‘shilgani rasmiy manbalarda tasdiqlanmagan. Hozircha bu haqda faqat Telegram kanallarida tarqalgan xabar yozgan. Telegram’ning rasmiy yo‘riqnomasi esa story yaratishni faqat iOS va Android uchun tushuntiradi.

## Telegram Desktop’da story joylash rasman qo‘shildimi?

Telegram kanallarida tarqalgan xabarga ko‘ra, Telegram Desktop’ning Canary #113 versiyasiga story joylash imkoniyati qo‘shilgan. Xabarda yana Desktop avval story’larni faqat ko‘rsatgani, joylashga esa imkon bermagani aytiladi.

Bu da’voni Telegram’ning rasmiy sahifalari bilan solishtirdik:

- [Stories tur sahifasida](https://telegram.org/tour/stories) har qanday Telegram foydalanuvchisi story ko‘rishi, joylashi va ularga munosabat bildirishi mumkinligi yozilgan. Lekin bu umumiy gap, qurilmalar alohida ko‘rsatilmagan.
- «Canary #113» raqamli versiya rasmiy manbalarda topilmadi.
- Desktop ilgari story’larni faqat ko‘rsatgani haqidagi gap ham rasmiy manbada tasdiqlanmadi.
- Telegram Desktop versiyalaridagi o‘zgarishlar ro‘yxatida bunday yozuv bor-yo‘qligini bu maqolada tasdiqlay olmadik. Uni o‘zingiz tekshirib ko‘rishingiz mumkin.

Demak, xabar keyinchalik to‘g‘ri bo‘lib chiqishi mumkin, ammo hozir uni tasdiqlaydigan rasmiy e’lon yo‘q. Eng ishonchli tekshiruv — o‘z ilovangizda story joylash tugmasi bor-yo‘qligini ko‘rish. Kanallarda Desktop haqida yozilgan, lekin rasman tasdiqlanmagan yana bir holatni [@wallet havolasi bo‘yicha maqolada](/blog/telegram-desktop-wallet-havolasi-ichki-hamyon) ko‘rib chiqqanmiz.

## Rasmiy manbalar qaysi qurilmalarda story yaratishni ko‘rsatadi?

Telegram’ning tur sahifasida story yaratish ikki platforma uchun tushuntirilgan. Kompyuter versiyasi umuman tilga olinmagan.

| Qurilma | Story yaratish yo‘li (rasmiy sahifaga ko‘ra) | Holat |
|---|---|---|
| iPhone, iPad (iOS) | Chatlar ro‘yxatidagi «+» tugmasi | Rasman tasvirlangan |
| Android | Chatlar ro‘yxatidagi kamera belgisi | Rasman tasvirlangan |
| Telegram Desktop | Tur sahifasida tilga olinmagan | Tasdiqlanmagan |
| Telegram Web (brauzer) | Tur sahifasida tilga olinmagan | Tasdiqlanmagan |

Bu yerda bitta nomuvofiqlik bor. Bir tomondan, Telegram story’ni istalgan foydalanuvchi joylay olishini yozadi. Boshqa tomondan, yaratish qadamlari faqat mobil ilovalar uchun berilgan. Shuning uchun rasmiy matnga tayanib «Desktop’da ham bo‘ladi» yoki «Desktop’da bo‘lmaydi» deb aytib bo‘lmaydi: rasmiy manbalarda bu haqda ma’lumot yo‘q.

## Canary versiya nima va undagi funksiyaga tayanish mumkinmi?

Dasturlarda «Canary» deb odatda hamma foydalanuvchilarga chiqishidan oldin sinov uchun tarqatiladigan erta versiyalar ataladi. Yangi funksiyalar ularda oldinroq paydo bo‘ladi, lekin hali sinovda bo‘ladi.

Bu amalda quyidagini anglatadi:

- Sinov versiyasidagi funksiya asosiy versiyaga o‘zgarishsiz o‘tishi shart emas.
- Funksiya keyin o‘zgarishi, kechikishi yoki olib tashlanishi mumkin.
- Sinov versiyalarida xatolar ko‘proq uchraydi, shuning uchun muhim ishni ularga ishonib topshirmagan ma’qul.

Canary’da biror funksiya borligi uning hamma uchun chiqqanini bildirmaydi. Story joylash Telegram Desktop’ning rasmiy o‘zgarishlar ro‘yxatida yozilgan bo‘lsa, shunda uni tasdiqlangan deb hisoblash mumkin.

> Noma’lum saytlar, kanallar yoki botlar tarqatayotgan «Canary», «mod» yoki «yangi versiya» o‘rnatish fayllarini yuklab olmang. Telegram’ni [telegram.org’dagi rasmiy ilovalar sahifasidan](https://telegram.org/apps) o‘rnating. Begona fayl akkauntingiz va kompyuteringiz uchun xavfli bo‘lishi mumkin.

## Kompyuterda story joylash tugmasi bor-yo‘qligini qanday tekshirasiz?

Kanal xabariga emas, ilovangizda ko‘rgan narsaga tayaning. Tekshirish bir necha daqiqa oladi:

1. Telegram Desktop’ni rasmiy manbadan eng so‘nggi versiyaga yangilang.
2. Sozlamalarda ilova versiyasi raqamini toping va skrinshot oling.
3. Chatlar ro‘yxatining tepasiga qarang: u yerda story’lar qatori, o‘z profilingiz yoki qo‘shish belgisi bormi?
4. O‘z profilingiz yoki qo‘shish belgisini bosing: story yaratish oynasi ochilsa, funksiya sizning versiyangizda bor.
5. Hech qanday tugma bo‘lmasa, versiyangizda bu imkoniyat yo‘q. Story’ni telefondan joylang.

Tanishingizda tugma chiqib, sizda chiqmasligi mumkin. Bu akkauntingizdagi muammo emas: imkoniyatlar ilova versiyasiga qarab farq qiladi.

Agar tugma chiqsa va story’ni kompyuterdan joylasangiz, bir qoidani yodda tuting: story faqat u joylangan qurilmada tahrirlanadi. Ya’ni keyin uni telefondan emas, aynan shu kompyuterdan tahrirlay olasiz.

## Hozir kompyuterdagi rasm yoki videoni story qilib qanday joylash mumkin?

Desktop’da tugma bo‘lmasa, oddiy aylanma yo‘l bor. Unda faqat rasmiy ilovalar ishlatiladi:

1. Telegram Desktop’da «Saqlangan xabarlar» (Saved Messages) chatini oching.
2. Kompyuterdagi rasm yoki videoni shu chatga yuboring.
3. Telefonda Telegram’ni ochib, «Saqlangan xabarlar»dan faylni telefon xotirasiga saqlang.
4. Chatlar ro‘yxatida «+» tugmasini (iOS) yoki kamera belgisini (Android) bosing.
5. Story yaratish oynasida saqlangan faylni tanlang. Bu oyna ilova versiyasiga qarab biroz farq qilishi mumkin.
6. Joylashdan oldin story’ni kim ko‘rishini tanlang: hamma, kontaktlar, yaqin do‘stlar yoki o‘zingiz tanlagan odamlar ([Telegram FAQ](https://telegram.org/faq)).
7. Story’ni joylang.

Story telefondan joylangani uchun keyin uni faqat telefondan tahrirlay olasiz. Kim ko‘rishini esa kompyuterdan ham o‘zgartirish mumkin — bu haqda keyingi bo‘limda.

## Story’ni kompyuterdan tahrirlab yoki kim ko‘rishini o‘zgartirib bo‘ladimi?

Telegram’da bu ikki amal uchun ikki xil qoida bor:

- **Tahrirlash** — faqat story joylangan qurilmada. Rasmiy sahifada story’ni tahrirlash uchun uni joylagan qurilmangizda ochish kerakligi yozilgan.
- **Kim ko‘rishini o‘zgartirish** — istalgan qurilmadan. Story faol bo‘lib turganda kim ko‘ra olishini istalgan qurilmangizdan o‘zgartirsa bo‘ladi ([Telegram Stories](https://telegram.org/tour/stories)).

Masalan, story’ni telefondan joylab, keyin uni faqat yaqin do‘stlarga ko‘rinadigan qilmoqchi bo‘lsangiz, buni kompyuterdan ham qilishingiz mumkin. Matn yoki rasmni o‘zgartirish uchun esa telefonni olishingiz kerak.

Desktop’da boshqalarning story’larini ko‘rish qanday ishlashini ilovangizda tekshiring. Rasmiy tur sahifasida Desktop alohida tilga olinmagan, shuning uchun bu borada aniq da’vo qilmaymiz.

## Kanal yoki guruh nomidan story joylash uchun nima kerak?

Kanal va guruhlar ham story joylay oladi, lekin buning uchun yetarlicha «boost» to‘plashi kerak. Bu [Telegram FAQ’da](https://telegram.org/faq) va Stories e’lon qilingan [rasmiy blog postida](https://telegram.org/blog/stories) yozilgan.

Boost — obunachilarning kanalni qo‘llab-quvvatlash usuli. U qanday ishlashi va kim bera olishi [kanal boost haqidagi maqolada](/blog/telegram-kanal-boost) tushuntirilgan.

Kerakli boost soni bu maqoladagi rasmiy manbalarda ko‘rsatilmagan, shuning uchun aniq raqam yozmaymiz. Kanalingizda story tugmasi chiqmasa, ikki sababni tekshiring: boost yetarlimi va story yaratish ilovaning shu versiyasida bormi. Kompyuterda ikkinchi sabab ehtimoli yuqoriroq, shuning uchun avval telefondan urinib ko‘ring.

## Premium stories’da nimani o‘zgartiradi va u kompyuterda ishlaydimi?

Story joylash uchun Premium shart emas: rasmiy sahifaga ko‘ra, story’ni istalgan Telegram foydalanuvchisi joylay oladi. Premium’ning stories bilan bog‘liq qo‘shimchalari [Stories’dagi Premium afzalliklari haqidagi maqolada](/blog/telegram-stories-premium), barcha imkoniyatlar esa [Premium imkoniyatlarining to‘liq ro‘yxatida](/blog/telegram-premium-imkoniyatlari) jamlangan.

Premium Desktop’da story joylash tugmasini paydo qilmaydi: bu imkoniyat obunaga emas, ilova versiyasiga bog‘liq. Premium’ning kompyuter, telefon va planshetda qanday ishlashi [Premium bir nechta qurilmada ishlashi haqidagi maqolada](/blog/telegram-premium-kompyuterda-ishlaydimi) yozilgan.

Premium’ni O‘zbekistonda so‘mda olmoqchi bo‘lsangiz, Premiumtg’da faqat username’ingiz kerak. Akkauntga kirish, login kodi yoki parol so‘ralmaydi. To‘lov Click, Payme, Paynet yoki Uzum Bank orqali so‘mda qilinadi, xorijiy karta kerak emas. Obuna 10 soniyada avtomatik faollashadi.

| Paket | Narx |
|---|---|
| 3 oy | ${narx(3)} |
| 6 oy | ${narx(6)} |
| 12 oy | ${narx(12)} |

Xariddan oldin narx va mavjud to‘lov usullarini [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida tekshiring. Premiumtg — mustaqil xizmat, Premium statusni esa faqat Telegram beradi.

## Ko‘p so‘raladigan savollar

### Telegram Desktop Canary #113 da story joylash rostdan bormi?

Buni tasdiqlaydigan rasmiy e’lon yo‘q, «Canary #113» raqami ham rasmiy manbalarda uchramaydi. Kompyuteringizdagi ilovada story qo‘shish tugmasi bor-yo‘qligini o‘zingiz ko‘ring.

### Telegram Web orqali story joylasa bo‘ladimi?

Rasmiy yo‘riqnomada brauzer versiyasi tilga olinmagan, unda faqat iOS va Android qadamlari bor. Brauzerda tugma topilmasa, story’ni telefondan joylang.

### Kompyuterdan joylangan story’ni telefondan tahrirlay olamanmi?

Yo‘q, Telegram story’ni faqat u joylangan qurilmada tahrirlashga ruxsat beradi. Lekin kim ko‘rishini telefondan ham o‘zgartira olasiz.

### Story joylash uchun Telegram Premium kerakmi?

Kerak emas. Telegram’ning tur sahifasiga ko‘ra, story joylash har qanday foydalanuvchiga ochiq.

### Canary versiyasini o‘rnatish xavfsizmi?

Sinov versiyalarida xatolar ko‘proq bo‘ladi, funksiyalar o‘zgarishi yoki yo‘qolishi mumkin. Kanal yoki botlar tashlagan o‘rnatish fayllarini ochmang, ilovani rasmiy manbadan oling.

### Kanalim uchun story tugmasi nega chiqmayapti?

Kanal story joylay olishi uchun yetarlicha boost to‘plagan bo‘lishi kerak. Kompyuterda esa bu imkoniyat ilova versiyangizda umuman bo‘lmasligi mumkin, shuning uchun telefondan ham tekshiring.

### Story’ni kim ko‘rishini kompyuterdan o‘zgartirsa bo‘ladimi?

Ha, story faol bo‘lib turganda ko‘rish ruxsatini istalgan qurilmangizdan o‘zgartira olasiz. Bu story qaysi qurilmadan joylanganiga bog‘liq emas.`,
    ru: `Официальные источники не подтверждают, что в Telegram Desktop, в том числе в версии под названием Canary #113, появилась публикация историй. Пока об этом пишут только в сообщениях, которые расходятся по Telegram-каналам. Официальная инструкция Telegram описывает создание историй только для iOS и Android.

## Появилась ли официально публикация историй в Telegram Desktop?

По сообщению из Telegram-каналов, в версию Telegram Desktop Canary #113 добавили возможность публиковать истории. Там же говорится, что раньше Desktop умел только показывать истории, а публиковать их не позволял.

Мы сверили это утверждение с официальными страницами Telegram:

- На [странице о Stories](https://telegram.org/tour/stories) написано, что любой пользователь Telegram может смотреть истории, публиковать их и реагировать на них. Но это общая фраза: устройства отдельно не перечислены.
- Версию с номером «Canary #113» в официальных источниках найти не удалось.
- Слова о том, что раньше Desktop только показывал истории, официальный источник тоже не подтверждает.
- Есть ли такая запись в списке изменений версий Telegram Desktop, в этой статье подтвердить не удалось. Это можно проверить самостоятельно.

Иначе говоря, со временем сообщение может оказаться правдой, но сейчас официального анонса нет. Самая надёжная проверка — посмотреть, есть ли кнопка публикации истории в вашем приложении. Ещё один случай, когда в каналах писали о Desktop, а официально это не подтвердилось, мы разобрали в [статье о ссылке @wallet](/blog/telegram-desktop-wallet-havolasi-ichki-hamyon).

## На каких устройствах официальные источники описывают создание историй?

На странице Telegram о Stories создание истории описано для двух платформ. Версия для компьютера там вообще не упоминается.

| Устройство | Как создать историю (по официальной странице) | Статус |
|---|---|---|
| iPhone, iPad (iOS) | Кнопка «+» в списке чатов | Описано официально |
| Android | Значок камеры в списке чатов | Описано официально |
| Telegram Desktop | На странице не упоминается | Не подтверждено |
| Telegram Web (браузер) | На странице не упоминается | Не подтверждено |

Здесь есть одно несоответствие. С одной стороны, Telegram пишет, что публиковать истории может любой пользователь. С другой — шаги по созданию даны только для мобильных приложений. Поэтому по официальному тексту нельзя сказать ни «в Desktop тоже можно», ни «в Desktop нельзя»: в официальных источниках этой информации нет.

## Что такое версия Canary и можно ли полагаться на её функции?

«Canary» в программах обычно называют ранние версии, которые раздают для тестирования до выхода у всех пользователей. Новые функции появляются в них раньше, но ещё находятся на испытаниях.

На практике это значит:

- Функция из тестовой версии не обязательно перейдёт в основную без изменений.
- Её могут доработать, отложить или убрать совсем.
- В тестовых версиях чаще встречаются ошибки, поэтому важные дела им лучше не доверять.

То, что функция есть в Canary, ещё не значит, что она вышла для всех. Считать публикацию историй подтверждённой можно тогда, когда она появится в официальном списке изменений Telegram Desktop.

> Не скачивайте установочные файлы «Canary», «мод» или «новой версии» с неизвестных сайтов, каналов и ботов. Устанавливайте Telegram со [страницы официальных приложений на telegram.org](https://telegram.org/apps). Посторонний файл может быть опасен для вашего аккаунта и компьютера.

## Как проверить, есть ли на компьютере кнопка публикации истории?

Опирайтесь не на сообщение в канале, а на то, что видите в своём приложении. Проверка займёт несколько минут:

1. Обновите Telegram Desktop до последней версии из официального источника.
2. Найдите в настройках номер версии приложения и сделайте скриншот.
3. Посмотрите на верх списка чатов: есть ли там ряд историй, ваш профиль или значок добавления?
4. Нажмите на свой профиль или значок добавления: если откроется окно создания истории, функция в вашей версии есть.
5. Если никакой кнопки нет, в вашей версии такой возможности нет. Публикуйте историю с телефона.

У знакомого кнопка может появиться, а у вас — нет. Это не проблема вашего аккаунта: возможности зависят от версии приложения.

Если кнопка появилась и вы опубликовали историю с компьютера, помните одно правило: редактировать историю можно только на том устройстве, с которого её опубликовали. То есть править её потом получится именно с этого компьютера, а не с телефона.

## Как сейчас опубликовать в истории фото или видео с компьютера?

Если в Desktop кнопки нет, есть простой обходной путь. В нём используются только официальные приложения:

1. Откройте в Telegram Desktop чат «Избранное» (Saved Messages).
2. Отправьте туда фото или видео с компьютера.
3. Откройте Telegram на телефоне и сохраните файл из «Избранного» в память телефона.
4. В списке чатов нажмите кнопку «+» (iOS) или значок камеры (Android).
5. В окне создания истории выберите сохранённый файл. Это окно может немного отличаться в зависимости от версии приложения.
6. Перед публикацией выберите, кто увидит историю: все, контакты, близкие друзья или люди, которых вы выбрали сами ([Telegram FAQ](https://telegram.org/faq)).
7. Опубликуйте историю.

Поскольку история опубликована с телефона, редактировать её потом можно будет только с телефона. А вот круг зрителей можно поменять и с компьютера — об этом в следующем разделе.

## Можно ли с компьютера отредактировать историю или изменить, кто её видит?

Для этих двух действий в Telegram действуют разные правила:

- **Редактирование** — только на устройстве, с которого история опубликована. На официальной странице сказано, что для редактирования историю нужно открыть на том устройстве, с которого вы её выложили.
- **Изменение круга зрителей** — с любого устройства. Пока история активна, менять, кто может её видеть, можно с любого вашего устройства ([Telegram Stories](https://telegram.org/tour/stories)).

Например, если вы выложили историю с телефона, а потом решили показывать её только близким друзьям, это можно сделать и с компьютера. А чтобы поменять текст или картинку, придётся взять телефон.

Как в Desktop работает просмотр чужих историй, проверьте в своём приложении. На официальной странице Desktop отдельно не упоминается, поэтому точных утверждений здесь мы не делаем.

## Что нужно, чтобы публиковать истории от имени канала или группы?

Каналы и группы тоже могут публиковать истории, но для этого им нужно набрать достаточно бустов. Об этом написано в [Telegram FAQ](https://telegram.org/faq) и в [официальном посте в блоге](https://telegram.org/blog/stories), где анонсировали Stories.

Бусты — это способ, которым подписчики поддерживают канал. Как они работают и кто может их давать, объясняется в [статье о бустах каналов](/blog/telegram-kanal-boost).

Сколько именно бустов нужно, в официальных источниках этой статьи не указано, поэтому точное число мы не приводим. Если у вашего канала не появляется кнопка истории, проверьте две причины: хватает ли бустов и есть ли создание историй в этой версии приложения. На компьютере вторая причина вероятнее, поэтому сначала попробуйте с телефона.

## Что Premium меняет в историях и работает ли он на компьютере?

Для публикации историй Premium не нужен: по официальной странице, выкладывать истории может любой пользователь Telegram. Дополнительные возможности Premium для историй собраны в [статье о преимуществах Premium в Stories](/blog/telegram-stories-premium), а все функции — в [полном списке возможностей Premium](/blog/telegram-premium-imkoniyatlari).

Premium не добавляет кнопку публикации историй в Desktop: эта возможность зависит не от подписки, а от версии приложения. Как Premium работает на компьютере, телефоне и планшете, описано в [статье о Premium на нескольких устройствах](/blog/telegram-premium-kompyuterda-ishlaydimi).

Если хотите оформить Premium в Узбекистане за сумы, в Premiumtg нужен только ваш username. Вход в аккаунт, код для входа или пароль не запрашиваются. Оплата в сумах через Click, Payme, Paynet или Uzum Bank, зарубежная карта не нужна. Подписка активируется автоматически за 10 секунд.

| Пакет | Цена |
|---|---|
| 3 месяца | ${narx(3)} |
| 6 месяцев | ${narx(6)} |
| 12 месяцев | ${narx(12)} |

Перед покупкой проверьте цену и доступные способы оплаты в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Premiumtg — независимый сервис, а статус Premium выдаёт только Telegram.

## Часто задаваемые вопросы

### В Telegram Desktop Canary #113 правда можно публиковать истории?

Официального анонса, который бы это подтверждал, нет, а номер «Canary #113» в официальных источниках не встречается. Сами посмотрите, есть ли в приложении на вашем компьютере кнопка добавления истории.

### Можно ли опубликовать историю через Telegram Web?

Браузерная версия в официальной инструкции не упоминается, там есть только шаги для iOS и Android. Если в браузере кнопки нет, выкладывайте историю с телефона.

### Смогу ли я с телефона отредактировать историю, опубликованную с компьютера?

Нет, Telegram разрешает редактировать историю только на том устройстве, с которого её выложили. Но поменять, кто её видит, можно и с телефона.

### Нужен ли Telegram Premium, чтобы публиковать истории?

Не нужен. По официальной странице Telegram, публиковать истории может любой пользователь.

### Безопасно ли устанавливать версию Canary?

В тестовых версиях больше ошибок, а функции могут меняться или пропадать. Не открывайте установочные файлы из каналов и ботов — скачивайте приложение только из официального источника.

### Почему у моего канала не появляется кнопка истории?

Чтобы канал мог публиковать истории, ему нужно набрать достаточно бустов. На компьютере этой возможности может просто не быть в вашей версии приложения, поэтому проверьте и с телефона.

### Можно ли с компьютера изменить, кто видит мою историю?

Да, пока история активна, настройки просмотра можно менять с любого вашего устройства. Неважно, с какого устройства историю опубликовали.`,
  },
};
