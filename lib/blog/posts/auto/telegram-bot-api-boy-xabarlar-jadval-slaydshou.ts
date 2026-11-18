// Avtoblogyoz yasagan maqola (2026-11-18). Niyat: Telegram foydalanuvchisi yoki bot egasi botlar endi chatda jadval, rasm, video va slaydshou bilan bezatilgan xabar yubora oladimi, bu yangilanish nimani o'zgartirganini «telegram botlar yangilanishi jadval» kabi so'zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/api-changelog
//   https://core.telegram.org/bots/api
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-bot-api-boy-xabarlar-jadval-slaydshou",
  date: "2026-11-18",
  reviewed: "2026-11-18",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram botlar yangilanishi: botlar endi jadval va slaydshou yuboradimi?", ru: "Боты Telegram теперь отправляют таблицы и слайд-шоу? Что дал Bot API 10.1" },
  excerpt: { uz: `Asosan rost: 2026-yil 11-iyundagi Bot API 10.1 botlarga Rich Messages’ni qo‘shdi. Unda jadval, slaydshou, rasm va xarita bloklari bor, video bloki esa bu maqolada tasdiqlanmadi.`, ru: `В основном да: Bot API 10.1 от 11 июня 2026 года добавил ботам Rich Messages с блоками таблиц, слайд-шоу, фото и карт. Отдельный видеоблок в этой статье не подтверждён.` },
  keywords: ["telegram botlar yangilanishi","telegram bot jadval yuborish","bot api 10.1","telegram rich messages","sendRichMessage","telegram bot slaydshou","telegram bot ai javob oqim","обновление ботов telegram","bot api 10.1 rich messages","телеграм бот таблицы в сообщениях","sendRichMessageDraft telegram","телеграм боты слайдшоу"],
  related: ["telegram-premium-rich-text-editor-2026","telegram-bot-username-agent-ai-qoshimchalari","telegram-guruhga-kirish-testi-ai-bot-admin","telegram-2026-avgust-yangiliklari"],
  sources: [{"url":"https://core.telegram.org/bots/api-changelog","title":"Bot API changelog — June 11, 2026, Bot API 10.1"},{"url":"https://core.telegram.org/bots/api","title":"Telegram Bot API (Message → rich_message)"}],
  content: {
    uz: `## Rostmi: Telegram botlari endi jadval va slaydshou bilan xabar yubora oladimi?

Asosan rost. 2026-yil 11-iyunda chiqqan Bot API 10.1 botlarga **Rich Messages** qo‘llab-quvvatlashini qo‘shdi. Rasmiy matnga ko‘ra, botlar endi yuqori darajada tuzilgan matn yubora oladi va AI yaratgan javoblarni oqim tarzida ko‘rsata oladi ([Bot API changelog](https://core.telegram.org/bots/api-changelog)).

Telegram kanallarida tarqalgan xabarda botlar jadval, rasm, video va slaydshou bilan xabar yuborishi aytilgan edi. Changelog’dagi ro‘yxatda jadval, slaydshou, rasm, animatsiya va audio bloklari haqiqatan bor. **Video** uchun alohida blok borligi esa bu maqolada tasdiqlanmadi, shuning uchun bu qismni rost deb yozmaymiz.

Yangilanish faqat bezak bilan cheklanmaydi. Uning ikkinchi yarmi AI javoblarini yozilayotgan holda, bosqichma-bosqich ko‘rsatishga mo‘ljallangan.

> Barcha o‘zgarishlar sana bo‘yicha [Bot API changelog](https://core.telegram.org/bots/api-changelog) sahifasida saqlanadi. 11-iyun yozuvini o‘sha yerdan qidiring.

## Rich xabarlarda qaysi bloklar paydo bo‘ldi?

Botlar avval ham matnni qalin yoki kursiv qilib yubora olardi. Lekin u oddiy matn ichidagi bezak edi. Changelog’dagi klass nomlariga qaraganda, rich xabar alohida bloklardan yig‘iladi: jadval, rasm, slaydshou va boshqalar bitta xabar ichida joylashadi.

Changelog’da quyidagi bloklar va klasslar sanab o‘tilgan. Har birining to‘liq tavsifi va cheklovlari bu maqolada tekshirilmadi. Shuning uchun jadvalda faqat nomi va umumiy vazifasi berilgan.

| Blok yoki klass | Oddiy tilda | Izoh |
|---|---|---|
| RichBlockTable | Jadval | Kataklari RichBlockTableCell klassi bilan ifodalanadi |
| RichBlockSlideshow | Slaydshou | Nomiga ko‘ra, ketma-ket ko‘rsatiladigan media |
| RichBlockPhoto | Rasm | Nomiga ko‘ra, xabar ichidagi rasm |
| RichBlockAnimation | Animatsiya | Nomiga ko‘ra, xabar ichidagi animatsiya |
| RichBlockAudio | Audio | Nomiga ko‘ra, xabar ichidagi audio |
| RichBlockMap | Xarita | Nomiga ko‘ra, joylashuvni ko‘rsatadi |
| RichBlockDetails | Details bloki | Vazifasi hujjatda batafsil tekshirilmadi |
| RichBlockCaption | Izoh (caption) | Bezatilgan matnning izohi |
| RichText | Bezatilgan matn | Asosiy matn klassi |

Matn uslublari uchun ham alohida klasslar qo‘shilgan: RichTextBold (qalin), RichTextItalic (kursiv), RichTextUnderline (tagiga chizilgan), RichTextStrikethrough (o‘chirilgan) va RichTextSpoiler (spoyler).

## AI javoblarini «oqim tarzida» yuborish nimani anglatadi?

Changelog’da Rich Messages bilan birga AI yaratgan javoblarni **stream**, ya’ni oqim tarzida yuborish ham tilga olingan.

Buning uchun **sendRichMessageDraft** metodi qo‘shildi. U botga qisman tayyor rich xabarni bosqichma-bosqich yuborish imkonini beradi. Amalda bu shuni anglatadi: foydalanuvchi uzun javob to‘liq tayyor bo‘lishini kutib o‘tirmaydi, matn yozilayotgan paytdayoq ko‘rina boshlaydi.

Bu metod qaysi chat turlarida ishlashi, masalan faqat shaxsiy chatdami yoki guruhda ham ishlaydimi, bu maqolada tasdiqlanmagan. Bot yaratayotgan bo‘lsangiz, buni o‘z test chatingizda tekshiring.

Guruhlarda AI botlardan qanday foydalanish haqida alohida yozganmiz: [Telegram guruhga kirish testi va AI bot admin](/blog/telegram-guruhga-kirish-testi-ai-bot-admin).

## Bot egasi uchun texnik jihatdan nima o‘zgardi?

Bot API 10.1’dagi asosiy o‘zgarishlar:

- **sendRichMessage** — rich xabar yuborish uchun yangi metod.
- **sendRichMessageDraft** — qisman tayyor rich xabarni oqim tarzida yuborish.
- **editMessageText** metodiga **rich_message** parametri qo‘shildi, u rich xabarni tahrirlash imkonini beradi.
- **Message** klassiga **rich_message** maydoni qo‘shildi. Hujjatga ko‘ra, bu maydon xabar bezatilgan (rich) ekanini bildiradi.

Bot API 10.2 (2026-yil 14-iyul) versiyasida yuboriladigan ro‘yxat elementi uchun **InputRichBlockListItem** klassi qo‘shildi.

Yana bir amaliy cheklov: [Bot API hujjatiga](https://core.telegram.org/bots/api) ko‘ra, javobda (ReplyParameters → quote_rich_texts) **32 tagacha** iqtibos matnini ko‘rsatish mumkin. Ularning umumiy uzunligi 1 024 belgidan oshmasligi kerak.

sendRichMessage va yangi bloklarning to‘liq parametrlari bu maqolada tekshirilmadi. Kod yozishdan oldin har bir metodning tavsifini asosiy hujjatdan o‘qing.

Botingizga nom tanlayotgan bo‘lsangiz, username qoidalari haqidagi maqolani ham o‘qing: [bot username’lariga agent, ai, app qo‘shimchalari](/blog/telegram-bot-username-agent-ai-qoshimchalari).

## Oddiy foydalanuvchi chatda nimani ko‘radi?

Foydalanuvchi uchun asosiy o‘zgarish shu: bot yangi imkoniyatlardan foydalansa, uning javoblari tuzilgan ko‘rinishda kelishi mumkin. Masalan:

- do‘kon boti narxlarni jadval qilib ko‘rsatishi mumkin;
- yetkazib berish boti buyurtma holatini bloklarga ajratib berishi mumkin;
- galereya boti rasmlarni slaydshou qilib yuborishi mumkin;
- ma’lumotnoma boti manzilni xarita bloki bilan ko‘rsatishi mumkin;
- AI bot javobni bir martada emas, yozilayotgan holda ko‘rsatishi mumkin.

Bu imkoniyat bor, lekin har bir bot uni ishlatishi shart emas. Bot egasi yangi metodlarni o‘zi ulamaguncha xabarlar avvalgidek keladi.

Rich xabarlarni ko‘rish uchun ilovaning qaysi versiyasi kerakligi rasmiy manbalarda aniqlanmadi. Telegram ilovasini yangilab turgan ma’qul.

Changelog yozuvida bu imkoniyat botlarga tegishli deb berilgan, Premium sharti tilga olinmagan.

## Botlarning rich xabarlari va Premium’dagi Rich Text Editor: farqi nima?

Ikki yangilik ko‘pincha chalkashtiriladi, chunki ikkalasi ham jadval va tuzilgan matn haqida. Lekin ular turli auditoriya uchun.

| Mezon | Botlarning Rich Messages’i | Premium’dagi Rich Text Editor |
|---|---|---|
| Kim yaratadi | Bot, Bot API orqali | Foydalanuvchi, ilova ichida |
| Qayerda e’lon qilingan | Bot API 10.1 changelog’i | Telegram yangilanishi |
| Nima kerak | Bot va dasturlash | Premium obuna |
| Kimga foydali | Bot egalari va ularning foydalanuvchilari | Uzun post va qo‘llanma yozadiganlar |

Premium muharriri haqida batafsil: [Telegram Premium’da Rich Text Editor](/blog/telegram-premium-rich-text-editor-2026).

Uzun postlarni o‘zingiz bezatmoqchi bo‘lsangiz, Premium’ni [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) orqali so‘mda olishingiz mumkin. Buning uchun faqat username kerak. Narxlar: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}. Xariddan oldin narx va to‘lov usullarini botda tekshiring.

## Yangilanish haqida nimalar hali noma’lum?

Rasmiy changelog yangiliklar ro‘yxatini beradi, lekin ayrim tafsilotlar bu maqolada tasdiqlanmadi:

- rich xabarning cheklovlari: bloklar soni, umumiy uzunlik, slaydshoudagi media soni;
- shaxsiy chat, guruh va kanallarda qay darajada ishlashi;
- sendRichMessageDraft faqat shaxsiy chat uchunmi yoki yo‘q;
- rich xabar ichida alohida video bloki bormi;
- qaysi ilova versiyalari rich xabarni to‘liq ko‘rsatadi.

> Bu savollarga raqam yoki va’da bermaymiz. Kimdir sizga aniq limitlarni aytsa, uni rasmiy hujjat bilan solishtiring.

Telegram blogida bu yangilanish haqida alohida e’lon bor-yo‘qligi ham tekshirilmadi. Asosiy manba — Bot API changelog.

## Yangilanishni o‘zingiz qanday tekshirasiz?

1. [Bot API changelog](https://core.telegram.org/bots/api-changelog) sahifasini oching va «June 11, 2026» yozuvini toping.
2. Bloklar ro‘yxatini, ya’ni RichBlockTable, RichBlockSlideshow va boshqalarni o‘zingiz o‘qing.
3. Asosiy [Bot API hujjatida](https://core.telegram.org/bots/api) Message bo‘limidan rich_message maydonini qidiring.
4. Telegram ilovasini App Store yoki Google Play’dan oxirgi versiyaga yangilang.
5. Bot egasi bo‘lsangiz, sendRichMessage’ni avval test chatda sinab ko‘ring, keyin asosiy botga ulang.
6. Rich xabar kerakli chat turida (shaxsiy, guruh, kanal) va turli qurilmalarda qanday ko‘rinishini alohida tekshiring.

Telegram’ning boshqa oylardagi yangilanishlari haqida: [Telegram 2026-yil avgust yangiliklari](/blog/telegram-2026-avgust-yangiliklari).

## Chiroyli xabar yuborgan botga ishonish mumkinmi?

Jadval va slaydshou faqat bezak. Ular botning ishonchli ekanini isbotlamaydi. Firibgar bot ham chiroyli narx jadvali yoki «chek» ko‘rinishidagi xabar yubora oladi.

- Hech bir botga login kodi, 2FA paroli yoki karta ma’lumotlarini yozmang.
- Kanal postlarida reklama qilinadigan botlarni tekshirmasdan ishlatmang.
- To‘lovdan oldin oluvchini, summani va buyurtma shartlarini solishtiring.
- Premium olish uchun username yetarli. Kod so‘ragan xizmatdan uzoqroq turing.

Firibgarlarning keng tarqalgan usullari haqida batafsil: [Telegram Premium sotib olishda firibgarlardan himoya](/blog/telegram-premium-firibgarlikdan-himoya).

## Ko‘p so‘raladigan savollar

### Bot API 10.1 qachon chiqdi va unda nima yangilik bor?

Bot API 10.1 2026-yil 11-iyunda chiqdi. Asosiy yangiligi Rich Messages: botlar tuzilgan, bloklardan iborat xabar yubora oladi va AI javoblarini oqim tarzida ko‘rsata oladi.

### Botlar endi rich xabar ichida video yubora oladimi?

Changelog’da rasm, animatsiya, audio va slaydshou bloklari tasdiqlangan. Alohida video bloki borligi esa bu maqolada tasdiqlanmadi, shuning uchun uni hozircha faqat da’vo deb qabul qiling.

### Rich xabarlarni ko‘rish uchun Telegram Premium kerakmi?

Changelog yozuvida Premium sharti tilga olinmagan: bu botlar uchun chiqarilgan Bot API imkoniyati. Ilovani so‘nggi versiyaga yangilab qo‘ygan ma’qul.

### sendRichMessage va sendRichMessageDraft o‘rtasidagi farq nima?

Birinchisi tayyor rich xabarni yuboradi. Ikkinchisi qisman tayyor xabarni oqim tarzida yuboradi, bu AI javobini yozilayotgan paytda ko‘rsatish uchun qulay.

### Botning eski xabarini rich formatga tahrirlash mumkinmi?

editMessageText metodida rich_message parametri bor, u rich xabarlarni tahrirlashga ruxsat beradi. Oddiy xabarni rich xabarga aylantirish mumkinligi esa alohida tekshirilmadi.

### Rich xabarlar guruh va kanallarda ham ishlaydimi?

Bu rasmiy manbalarda aniqlanmadi. Botingizni ishga tushirishdan oldin kerakli chat turida sinab ko‘ring.

### Bot javobida nechta iqtibos ko‘rsatish mumkin?

quote_rich_texts maydonida 32 tagacha iqtibos ko‘rsatish mumkin. Ularning umumiy uzunligi 1 024 belgidan oshmasligi kerak.

### Rich xabardagi bloklar soni yoki matn uzunligi cheklanganmi?

Bunday limitlar biz tekshirgan rasmiy manbalarda topilmadi. Aniq raqam aytayotgan postlarga ishonishdan oldin Bot API hujjatini o‘zingiz ko‘rib chiqing.`,
    ru: `## Правда ли, что боты Telegram теперь умеют отправлять таблицы и слайд-шоу?

В основном правда. Bot API 10.1 вышел 11 июня 2026 года и добавил ботам поддержку **Rich Messages**. В официальном тексте сказано, что теперь боты могут отправлять хорошо структурированный текст и показывать ответы, созданные ИИ, в потоковом режиме ([Bot API changelog](https://core.telegram.org/bots/api-changelog)).

В Telegram-каналах писали, что боты будут присылать сообщения с таблицами, фото, видео и слайд-шоу. В списке changelog действительно есть блоки для таблиц, слайд-шоу, фото, анимации и аудио. А отдельный блок для **видео** в этой статье подтвердить не удалось, поэтому эту часть мы правдой не называем.

Дело не только в оформлении. Вторая половина обновления нужна, чтобы ответ ИИ появлялся постепенно, по мере написания.

> Все изменения по датам собраны на странице [Bot API changelog](https://core.telegram.org/bots/api-changelog). Запись от 11 июня ищите там.

## Какие блоки появились в rich-сообщениях?

Жирный шрифт и курсив боты умели и раньше, но это было оформление внутри обычного текста. Судя по названиям классов в changelog, rich-сообщение собирается из отдельных блоков: таблица, фото, слайд-шоу и другие элементы находятся в одном сообщении.

Ниже блоки и классы, которые перечислены в changelog. Их полные описания и ограничения в этой статье не проверены. Поэтому в таблице только название и общее назначение.

| Блок или класс | Простыми словами | Пояснение |
|---|---|---|
| RichBlockTable | Таблица | Ячейки описываются классом RichBlockTableCell |
| RichBlockSlideshow | Слайд-шоу | Судя по названию, медиа, которые показываются по очереди |
| RichBlockPhoto | Фото | Судя по названию, изображение внутри сообщения |
| RichBlockAnimation | Анимация | Судя по названию, анимация внутри сообщения |
| RichBlockAudio | Аудио | Судя по названию, аудио внутри сообщения |
| RichBlockMap | Карта | Судя по названию, показывает местоположение |
| RichBlockDetails | Блок Details | Назначение подробно по документации не проверено |
| RichBlockCaption | Подпись (caption) | Подпись к оформленному тексту |
| RichText | Оформленный текст | Основной класс текста |

Для стилей текста тоже есть отдельные классы: RichTextBold (жирный), RichTextItalic (курсив), RichTextUnderline (подчёркнутый), RichTextStrikethrough (зачёркнутый) и RichTextSpoiler (спойлер).

## Что значит отправлять ответы ИИ «потоком»?

Вместе с Rich Messages в changelog упомянута потоковая отправка (**stream**) ответов, которые создаёт ИИ.

Для неё добавили метод **sendRichMessageDraft**. С ним бот может отправлять ещё не готовое rich-сообщение частями. Пользователю не нужно ждать, пока длинный ответ сформируется полностью: текст начинает появляться прямо во время написания.

В каких типах чатов работает этот метод, в этой статье не подтверждено. Неизвестно, например, только ли это личные чаты или группы тоже. Если вы делаете бота, проверьте это в своём тестовом чате.

Как использовать ИИ-ботов в группах, мы разбирали отдельно: [вступительный тест в группу Telegram и ИИ-бот в роли админа](/blog/telegram-guruhga-kirish-testi-ai-bot-admin).

## Что технически изменилось для владельца бота?

Главные изменения в Bot API 10.1:

- **sendRichMessage** — новый метод для отправки rich-сообщений.
- **sendRichMessageDraft** — потоковая отправка частично готового rich-сообщения.
- В метод **editMessageText** добавлен параметр **rich_message**. С ним можно редактировать rich-сообщения.
- В класс **Message** добавлено поле **rich_message**. По документации оно означает, что сообщение оформленное (rich).

В Bot API 10.2 (14 июля 2026 года) появился класс **InputRichBlockListItem**. Он описывает элемент списка, который нужно отправить.

Есть и практическое ограничение. Согласно [документации Bot API](https://core.telegram.org/bots/api), в ответе (ReplyParameters → quote_rich_texts) можно указать **до 32** цитат. Их общая длина не должна превышать 1 024 символа.

Полные параметры sendRichMessage и новых блоков в этой статье не проверены. Прежде чем писать код, прочитайте описание каждого метода в основной документации.

Если вы подбираете имя для бота, пригодится статья о правилах для username: [окончания agent, ai, app в username ботов](/blog/telegram-bot-username-agent-ai-qoshimchalari).

## Что увидит обычный пользователь в чате?

Для пользователя меняется вот что: если бот задействует новые возможности, его ответы могут приходить в структурированном виде. Например:

- бот магазина покажет цены таблицей;
- бот доставки разобьёт статус заказа на блоки;
- бот-галерея пришлёт фотографии слайд-шоу;
- справочный бот покажет адрес блоком с картой;
- ИИ-бот будет выводить ответ по мере написания, а не одним куском.

Возможность есть, но использовать её каждый бот не обязан. Пока владелец не подключит новые методы, сообщения будут приходить как раньше.

Какая версия приложения нужна, чтобы видеть rich-сообщения, в официальных источниках не уточняется. Лучше держать Telegram обновлённым.

В записи changelog эта возможность описана как функция для ботов, условие о Premium там не упоминается.

## Rich-сообщения ботов и Rich Text Editor в Premium: в чём разница?

Эти две новинки часто путают, потому что обе касаются таблиц и структурированного текста. Но рассчитаны они на разную аудиторию.

| Критерий | Rich Messages у ботов | Rich Text Editor в Premium |
|---|---|---|
| Кто создаёт | Бот через Bot API | Пользователь в приложении |
| Где объявлено | Changelog Bot API 10.1 | Обновление Telegram |
| Что нужно | Бот и программирование | Подписка Premium |
| Кому полезно | Владельцам ботов и их пользователям | Тем, кто пишет длинные посты и инструкции |

Подробнее о редакторе в Premium: [Rich Text Editor в Telegram Premium](/blog/telegram-premium-rich-text-editor-2026).

Если хотите сами оформлять длинные посты, Premium можно купить в сумах через [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Нужен только username. Цены: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}. Перед покупкой сверьте цену и способы оплаты в боте.

## Что об обновлении пока неизвестно?

Официальный changelog перечисляет новинки, но часть деталей в этой статье не подтверждена:

- ограничения rich-сообщения: число блоков, общая длина, количество медиа в слайд-шоу;
- насколько полноценно функция работает в личных чатах, группах и каналах;
- работает ли sendRichMessageDraft только в личных чатах;
- есть ли внутри rich-сообщения отдельный видеоблок;
- какие версии приложения полностью отображают rich-сообщения.

> Цифр и обещаний по этим вопросам мы не даём. Если кто-то называет вам точные лимиты, сверьте их с официальной документацией.

Есть ли в блоге Telegram отдельный анонс этого обновления, мы тоже не проверяли. Основной источник — changelog Bot API.

## Как проверить обновление самостоятельно?

1. Откройте [Bot API changelog](https://core.telegram.org/bots/api-changelog) и найдите запись «June 11, 2026».
2. Прочитайте список блоков сами: RichBlockTable, RichBlockSlideshow и остальные.
3. В основной [документации Bot API](https://core.telegram.org/bots/api) найдите поле rich_message в разделе Message.
4. Обновите Telegram до последней версии в App Store или Google Play.
5. Если у вас есть бот, сначала попробуйте sendRichMessage в тестовом чате и только потом подключайте его к основному боту.
6. Отдельно проверьте, как rich-сообщение выглядит в нужном типе чата (личном, группе, канале) и на разных устройствах.

Об обновлениях Telegram в другие месяцы: [новости Telegram за август 2026 года](/blog/telegram-2026-avgust-yangiliklari).

## Можно ли доверять боту, который присылает красивые сообщения?

Таблицы и слайд-шоу — это только оформление. Надёжность бота они не доказывают. Мошеннический бот тоже может прислать аккуратную таблицу цен или сообщение, похожее на «чек».

- Никогда не пишите ботам код входа, пароль 2FA или данные карты.
- Не пользуйтесь ботами из рекламы в каналах, не проверив их.
- Перед оплатой сверьте получателя, сумму и условия заказа.
- Для покупки Premium достаточно username. Сервиса, который просит код, лучше избегать.

О самых распространённых схемах мошенников: [как защититься от обмана при покупке Telegram Premium](/blog/telegram-premium-firibgarlikdan-himoya).

## Часто задаваемые вопросы

### Когда вышел Bot API 10.1 и что в нём нового?

Bot API 10.1 вышел 11 июня 2026 года. Главная новинка — Rich Messages: боты могут отправлять структурированные сообщения из блоков и показывать ответы ИИ в потоковом режиме.

### Могут ли боты теперь вставлять видео в rich-сообщение?

В changelog подтверждены блоки для фото, анимации, аудио и слайд-шоу. Отдельный видеоблок в этой статье не подтверждён, так что пока считайте это лишь заявлением.

### Нужен ли Telegram Premium, чтобы видеть rich-сообщения?

В записи changelog условие о Premium не упоминается: это возможность Bot API для ботов. Приложение всё же лучше обновить до последней версии.

### Чем sendRichMessage отличается от sendRichMessageDraft?

sendRichMessage отправляет готовое rich-сообщение. sendRichMessageDraft передаёт частично готовое сообщение потоком, поэтому ответ ИИ можно показывать прямо во время его создания.

### Можно ли отредактировать старое сообщение бота в rich-формат?

У метода editMessageText есть параметр rich_message, он позволяет редактировать rich-сообщения. Можно ли превратить обычное сообщение в rich, отдельно не проверялось.

### Работают ли rich-сообщения в группах и каналах?

Официальные источники этого не уточняют. Прежде чем запускать бота, проверьте его в нужном типе чата.

### Сколько цитат можно показать в ответе бота?

В поле quote_rich_texts можно указать до 32 цитат. Их общая длина не должна быть больше 1 024 символов.

### Ограничено ли число блоков или длина текста в rich-сообщении?

В официальных источниках, которые мы проверили, таких лимитов нет. Если в посте называют точные цифры, сначала сверьтесь с документацией Bot API.`,
  },
};
