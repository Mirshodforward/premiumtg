// Avtoblogyoz yasagan maqola (2026-11-17). Niyat: Guruh egasi yoki oddiy foydalanuvchi Telegramda guruhga kirish uchun IQ-test va AI bot admin arizalarni ko‘rib chiqishi rostmi, buni qanday yoqish mumkinligini «telegram guruhga kirish test bot» kabi so‘zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/watch-apps-and-more
//   https://telegram.org/faq
//   https://core.telegram.org/bots/api-changelog
//   https://core.telegram.org/bots/api
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-guruhga-kirish-testi-ai-bot-admin",
  date: "2026-11-17",
  reviewed: "2026-11-17",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram guruhga kirish testi va AI bot admin: rostmi, qanday yoqiladi?", ru: "Тест для входа в группу Telegram и ИИ-бот-админ: правда ли и как включить?" },
  excerpt: { uz: `Qisman rost: Telegram AI botni guruh admini qilib, kirish arizalarini tekshirtirishga ruxsat beradi. Tayyor «IQ-test» funksiyasi yo‘q — testni bot yaratuvchisi mini-ilovada o‘zi tuzadi.`, ru: `Отчасти правда: Telegram разрешает сделать ИИ-бота админом группы и поручить ему проверку заявок на вступление. Готового «IQ-теста» нет: тест автор бота делает сам в мини-приложении.` },
  keywords: ["telegram guruhga kirish testi bot","telegram ai guardians","telegram guruh kirish arizasi bot","telegram ai bot admin","guruhga kirish uchun iq test telegram","telegram join request bot","telegram guruhga qo‘shilish so‘rovi tasdiqlash","телеграм ИИ бот администратор группы","телеграм заявки на вступление бот","AI Guardians Telegram группы","тест для вступления в группу телеграм","answerChatJoinRequestQuery"],
  related: ["telegram-bot-username-agent-ai-qoshimchalari","telegram-ai-editor-2026","telegram-2026-avgust-yangiliklari","telegram-shubhali-havola-akkaunt-bloklanishi"],
  sources: [{"url":"https://telegram.org/blog/watch-apps-and-more","title":"Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More"},{"url":"https://telegram.org/faq","title":"Telegram FAQ"},{"url":"https://core.telegram.org/bots/api-changelog","title":"Bot API changelog"},{"url":"https://core.telegram.org/bots/api","title":"Telegram Bot API"}],
  content: {
    uz: `## Telegramda guruhga kirish uchun IQ-test paydo bo‘ldimi?

Qisman rost. Telegram haqiqatan ham AI botlarni guruh admini qilib, kirish arizalarini ko‘rib chiqishni ularga topshirishga ruxsat berdi. Lekin ilovada tayyor «IQ-test» degan funksiya yo‘q.

Telegram bu imkoniyatni 2026-yil 11-iyundagi [blog postida](https://telegram.org/blog/watch-apps-and-more) «AI Guardians», ya’ni «AI qo‘riqchilar» nomi bilan e’lon qilgan. Postda AI botlarni admin qilib, kirish arizalarini ularga topshirish mumkinligi yozilgan.

IQ-test esa o‘sha postda hazil tariqasida tilga olingan: nihoyat odamlarni izoh yozishdan oldin IQ-testdan o‘tkazish mumkin, degan ma’noda. Ya’ni gap guruhga kirish haqida emas, izoh yozish haqida.

Mavzu Telegram kanallarida tarqalgan xabardan olindi. Unda «chatlarga kirish uchun IQ-testlar paydo bo‘ldi» deyilgan. Quyida har bir da’vo Telegram blogi, [Telegram FAQ](https://telegram.org/faq) va [Bot API hujjati](https://core.telegram.org/bots/api) bilan solishtirilgan.

## Xabardagi da’volar rasmiy manbalarga mos keladimi?

| Xabardagi da’vo | Rasmiy manbada nima deyilgan | Holati |
|---|---|---|
| AI botni chat admini qilish mumkin | Blog va FAQ: botlarni admin qilib, kirish arizalarini ularga tekshirtirish mumkin | Rost |
| Botlar a’zolik arizalarini ko‘rib chiqadi | FAQ: yangi a’zolar uchun kirish arizasini majburiy qilib, ularni AI botlarga tekshirtirish mumkin | Rost |
| Kirishdan oldin mini-test o‘tkaziladi | Bot arizachiga mini-ilova ko‘rsatib, uni shu orqali tekshira oladi | Qisman rost: testni bot yaratuvchisi o‘zi tayyorlaydi |
| Guruhga kirish uchun IQ-test paydo bo‘ldi | IQ-test faqat izohlarga oid hazil misol | Rasmiy funksiya emas |
| Ishtirokchilarni filtrlash | Egasi xohlasa, bot chatga qoidabuzar xabar yozganlarga ham chora ko‘radi | Rost, lekin ixtiyoriy |

Xabar butunlay yolg‘on emas, lekin bo‘rttirilgan. Telegram vositani berdi, test mazmuni va baholash mezonini esa bot yaratuvchisi belgilaydi.

## AI qo‘riqchi bot aslida nima qila oladi?

Bot API hujjati va blogga ko‘ra, qo‘riqchi bot quyidagilarni qila oladi:

- **Arizaga qaror chiqaradi.** Bot arizani qabul qiladi, rad etadi yoki qarorni boshqa adminlarga qoldiradi.
- **Mini-ilova ko‘rsatadi.** Bot arizachiga mini-ilova ochib, uni shu orqali tekshiradi. Unda savol berishi, qoidalarni o‘qitishi yoki kichik test o‘tkazishi mumkin.
- **Chatni kuzatadi.** Egasi ruxsat bersa, bot chatga qoidabuzar xabar yozganlarga ham chora ko‘radi.

Cheklovlar ham bor:

- Bu vazifani istalgan botga topshirib bo‘lmaydi. Faqat kirish arizalarini qayta ishlashni qo‘llab-quvvatlaydigan bot qo‘riqchi bo‘la oladi.
- Tekshiruv mantig‘ini (savollar, javoblarni baholash, qaror mezoni) Telegram emas, bot yaratuvchisi tuzadi. Bitta bot qattiqqo‘l, boshqasi yumshoq bo‘lishi mumkin.
- Botning arizaga qancha vaqt ichida javob berishi kerakligi kabi texnik muddatlar bu maqolada tasdiqlanmagan.

## Guruhga kirishni arizali qilish va AI botni ulash qanday ishlaydi?

> Rasmiy manbalarda ilovadagi aniq menyu va sozlama nomlari berilmagan. Quyidagi qadamlar Telegram FAQ va Bot API mantig‘iga tayanadi, nomlarni ilovangizda tekshiring.

1. Guruhda yangi a’zolar uchun kirish arizasini yoqing. FAQ’ga ko‘ra, havola orqali kiradigan har bir kishi uchun admin tasdig‘ini talab qilish mumkin.
2. Kirish arizalarini qayta ishlashni qo‘llab-quvvatlaydigan botni tanlang. Bot API’da botning bunga yaroqliligi alohida belgi bilan ko‘rsatiladi. Bunday imkoniyati yo‘q oddiy bot bu vazifani bajara olmaydi.
3. Botni guruhga admin qilib qo‘shing.
4. Botga «foydalanuvchilarni taklif qilish» huquqini (can_invite_users) bering. Busiz bot arizalar haqida xabar olmaydi, ularni qabul ham, rad ham qila olmaydi.
5. Boshqa akkauntdan havola orqali sinov arizasi yuboring va bot nima qilganini kuzating: qabul qildimi, rad etdimi yoki qarorni adminlarga qoldirdimi.

Agar bot qarorni adminlarga qoldirsa, yakuniy so‘zni o‘zingiz aytasiz. Botda shunday sozlama bo‘lsa, dastlab undan foydalangan ma’qul: bot real odamlarni noto‘g‘ri rad etmayotganiga shunda ishonch hosil qilasiz.

### Bot arizalarni ko‘rmayapti: nimani tekshirish kerak

| Belgi | Ehtimoliy sabab | Nima qilish kerak |
|---|---|---|
| Odamlar ariza yubormay, to‘g‘ridan-to‘g‘ri kirib kelyapti | Kirish arizasi yoqilmagan | Havola uchun admin tasdig‘ini yoqing |
| Arizalar bor, bot ularga javob bermayapti | Botda can_invite_users huquqi yo‘q | Admin huquqlarini qayta ko‘rib chiqing |
| Botni qo‘riqchi qilib bo‘lmayapti | Bot arizalarni qayta ishlashni qo‘llab-quvvatlamaydi | Bu imkoniyati bor botni tanlang |
| Arizani qaysi bot ko‘rayotgani noaniq | Bu ma’lumot faqat adminlarga ko‘rinadi | Admin akkauntidan tekshiring |

## Bot yaratuvchisi uchun: Bot API 10.1 da nima qo‘shildi?

Bot API 10.1 blogdagi e’lon bilan bir kunda, 2026-yil 11-iyunda chiqqan. To‘liq ro‘yxat [Bot API changelog](https://core.telegram.org/bots/api-changelog) sahifasida bor. Kirish arizalariga oid asosiy qo‘shimchalar:

| Qo‘shimcha | Vazifasi |
|---|---|
| answerChatJoinRequestQuery | Kirish arizasiga javob berish usuli |
| sendChatJoinRequestWebApp | Arizani foydalanuvchiga mini-ilova ko‘rsatib ko‘rib chiqish usuli |
| ChatFullInfo.guard_bot | Chatda arizalarni qaysi bot qayta ishlayotganini ko‘rsatadi, faqat adminlarga ko‘rinadi |
| ChatJoinRequest.query_id | Yangi maydon, to‘liq tavsifi bu maqolada tasdiqlanmagan |

Bot yozayotgan bo‘lsangiz, ikki shartni unutmang: bot chatda admin bo‘lishi va unda can_invite_users huquqi bo‘lishi kerak. Bu huquq arizalarni olish uchun ham, ularga javob berish uchun ham kerak.

Bot nomlariga oid yangi qoidalar haqida mish-mishlar ham yuribdi. Ularni [bot username’lariga agent va ai qo‘shimchalari haqidagi maqolada](/blog/telegram-bot-username-agent-ai-qoshimchalari) tekshirganmiz.

## Oddiy foydalanuvchi guruhga kirishda nimani ko‘radi va nimadan ehtiyot bo‘lishi kerak?

Guruh AI qo‘riqchidan foydalansa, siz havola orqali ariza yuborasiz. Bot sizga mini-ilova ochib, savol yoki test berishi mumkin. Keyin arizangizni bot qabul qiladi yoki rad etadi, yoxud qarorni guruh adminlariga qoldiradi.

Kirish testini o‘tayotganda:

- **Login kodi, parol va ikki bosqichli parolni kiritmang.** Kirish testi bularni so‘ramasligi kerak. So‘ralsa, bu firibgarlik belgisi: oynani yoping.
- **Karta ma’lumotini bermang.** Karta raqami, amal qilish muddati va SMS-kodning guruhga kirishga aloqasi yo‘q.
- **To‘lov so‘ralsa, guruh egasidan sababini so‘rang.** Telegram bu funksiyani pullik qilgani haqida rasmiy ma’lumot topilmadi.
- **Havolani ishonchli joydan oling.** Notanish odam yuborgan «tasdiqlash» havolalari haqida [shubhali havolalar bo‘yicha maqolada](/blog/telegram-shubhali-havola-akkaunt-bloklanishi) batafsil yozganmiz.

> Arizani qaysi bot tekshirayotganini ko‘rsatadigan maydonni Bot API faqat adminlarga beradi. Bu ma’lumot oddiy a’zolarga ilovada ko‘rinishi rasmiy manbalarda tasdiqlanmagan.

## Bu funksiya Premium yoki pul talab qiladimi?

Telegram blogi, FAQ va Bot API hujjatida AI qo‘riqchidan foydalanish pullik ekani yoki Premium talab qilishi haqida hech narsa yozilmagan. Shuning uchun bu borada biror narsani tasdiqlay olmaymiz. Ilovangizda cheklov chiqsa, uni sozlash paytida ko‘rasiz.

Premium boshqa imkoniyatlar uchun kerak: reklamasiz lenta, katta fayllar, transkripsiya va boshqalar. To‘liq ro‘yxat [Premium imkoniyatlari haqidagi maqolada](/blog/telegram-premium-imkoniyatlari).

Premium kerak bo‘lsa, uni [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) orqali so‘mda olasiz. Faqat username kerak, login kodi va parol so‘ralmaydi. To‘lov Click, Payme, Paynet yoki Uzum Bank orqali o‘tadi, xorijiy karta shart emas. Obuna 10 soniyada avtomatik faollashadi.

- 3 oy — ${narx(3)}
- 6 oy — ${narx(6)}
- 12 oy — ${narx(12)}

Narx va mavjud to‘lov usullarini xariddan oldin botda tekshiring. Premiumtg mustaqil xizmat, Premium statusini esa Telegram’ning o‘zi beradi.

## Iyun yangilanishida yana nimalar bor?

[Telegram blogidagi e’lon](https://telegram.org/blog/watch-apps-and-more) sarlavhasiga ko‘ra, 11-iyun yangilanishida AI qo‘riqchilardan tashqari quyidagilar ham bor:

- smart soatlar uchun ilovalar;
- botlar uchun boy matn (rich text).

Sarlavhada «and Much More» ham yozilgan, ya’ni boshqa o‘zgarishlar ham bor. Ularni blogning o‘zida o‘qing.

Telegram’dagi boshqa AI va guruh vositalari:

- [Telegram AI Editor](/blog/telegram-ai-editor-2026) — xabarni tahrirlash va tarjima qilish;
- [2026-yil avgust yangilanishi](/blog/telegram-2026-avgust-yangiliklari) — yangi a’zolar uchun kutib olish xabarlari va matn ichidagi tugmalar. Ular kirish arizasi o‘rnini bosmaydi: ariza odam kirishidan oldin ishlaydi, kutib olish xabari esa guruhga kirgandan keyin chiqadi.

## Ko‘p so‘raladigan savollar

### Guruhimga IQ-testni qanday qo‘yaman?

Telegram’da alohida «IQ-test» tugmasi yo‘q. Kirish arizasini yoqib, mini-ilova orqali test ko‘rsata oladigan botni admin qilasiz. Savollar va baholash mezonini shu bot yaratuvchisi tuzadi.

### Har qanday botni AI qo‘riqchi qilib qo‘ysa bo‘ladimi?

Yo‘q. Bu vazifani faqat kirish arizalarini qayta ishlashni qo‘llab-quvvatlaydigan bot oladi. Bot API bu imkoniyatni botning o‘zida alohida belgi bilan ko‘rsatadi.

### Bot arizani rad etsa, admin uni baribir qabul qila oladimi?

Bot rad etgan arizani admin qayta ko‘rib chiqa olishi rasmiy manbalarda aniq yozilmagan. Bot qarorni adminlarga qoldirsa, oxirgi qarorni siz chiqarasiz. Shuning uchun bunday rejimi bor bot bilan boshlash xavfsizroq.

### Guruh a’zolari qaysi bot arizalarni tekshirayotganini ko‘ra oladimi?

Bot API bu ma’lumotni (guard_bot maydoni) faqat chat adminlariga beradi. Oddiy a’zolarga ilovada ko‘rinishi rasman tasdiqlanmagan.

### AI qo‘riqchi funksiyasi qachon chiqqan?

Telegram uni 2026-yil 11-iyunda blogida e’lon qilgan. Kerakli usullarni bot yaratuvchilariga beradigan Bot API 10.1 ham o‘sha kuni chiqqan.

### Botga qaysi admin huquqini berish shart?

Bot chatda admin bo‘lishi va «foydalanuvchilarni taklif qilish» (can_invite_users) huquqiga ega bo‘lishi kerak. Busiz u arizalarni olmaydi va ularga javob bera olmaydi.

### Kirish testi telefon raqam yoki kod so‘rasa nima qilish kerak?

Login kodi, parol yoki karta ma’lumotini kiritmang. Guruhga kirish uchun bular kerak emas. Ularni so‘rash akkaunt yoki pulni egallab olishga urinish belgisi.

### AI qo‘riqchidan foydalanish uchun Telegram Premium kerakmi?

Rasmiy manbalarda bunday talab yozilmagan. Premium boshqa imkoniyatlar uchun kerak bo‘lsa, @premiumtg_uzbot orqali username bilan so‘mda olishingiz mumkin.`,
    ru: `## Появился ли в Telegram IQ-тест для входа в группу?

Отчасти правда. Telegram действительно разрешил назначать ИИ-ботов админами группы и поручать им проверку заявок на вступление. Но готовой функции «IQ-тест» в приложении нет.

Telegram объявил эту возможность в [посте в блоге](https://telegram.org/blog/watch-apps-and-more) от 11 июня 2026 года под названием «AI Guardians» — «ИИ-стражи». В посте сказано, что ИИ-ботов можно добавить в админы и передать им обработку заявок на вступление.

IQ-тест в том же посте упомянут в шутку: мол, наконец-то можно заставить людей пройти IQ-тест, прежде чем они напишут комментарий. То есть речь шла не о входе в группу, а о комментариях.

Тема взята из сообщения, которое разошлось по Telegram-каналам. В нём утверждалось, что «для входа в чаты появились IQ-тесты». Ниже каждое утверждение сверено с блогом Telegram, [Telegram FAQ](https://telegram.org/faq) и [документацией Bot API](https://core.telegram.org/bots/api).

## Совпадают ли утверждения из сообщения с официальными источниками?

| Утверждение из сообщения | Что сказано в официальном источнике | Статус |
|---|---|---|
| ИИ-бота можно сделать админом чата | Блог и FAQ: ботов можно назначить админами и поручить им проверку заявок на вступление | Правда |
| Боты рассматривают заявки на вступление | FAQ: для новых участников можно сделать заявку обязательной и поручить её проверку ИИ-ботам | Правда |
| Перед входом проводится мини-тест | Бот может показать заявителю мини-приложение и проверить его через него | Отчасти правда: тест готовит сам автор бота |
| Для входа в группу появился IQ-тест | IQ-тест — только шуточный пример про комментарии | Не официальная функция |
| Фильтрация участников | Если владелец захочет, бот наказывает и тех, кто пишет в чат сообщения с нарушениями | Правда, но по желанию |

Сообщение не полностью ложное, но преувеличенное. Telegram дал инструмент, а содержание теста и критерии оценки задаёт автор бота.

## Что на самом деле умеет бот-страж?

По документации Bot API и блогу, бот-страж может:

- **Принимать решение по заявке.** Бот одобряет заявку, отклоняет её или оставляет решение другим админам.
- **Показывать мини-приложение.** Бот открывает заявителю мини-приложение и проверяет его через него. Там можно задать вопросы, дать прочитать правила или провести небольшой тест.
- **Следить за чатом.** Если владелец разрешит, бот принимает меры и против тех, кто пишет в чат сообщения с нарушениями.

Есть и ограничения:

- Поручить эту задачу любому боту нельзя. Стражем может стать только бот, который поддерживает обработку заявок на вступление.
- Логику проверки (вопросы, оценку ответов, критерии решения) составляет не Telegram, а автор бота. Один бот может оказаться строгим, другой — мягким.
- Технические сроки, например за какое время бот должен ответить на заявку, в этой статье не подтверждены.

## Как включить вступление по заявкам и подключить ИИ-бота?

> В официальных источниках нет точных названий меню и настроек в приложении. Шаги ниже опираются на логику Telegram FAQ и Bot API — названия сверяйте в своём приложении.

1. Включите в группе заявки на вступление для новых участников. Согласно FAQ, можно требовать одобрения админа для каждого, кто входит по ссылке.
2. Выберите бота, который поддерживает обработку заявок на вступление. В Bot API пригодность бота для этого отмечается отдельным признаком. Обычный бот без такой возможности с задачей не справится.
3. Добавьте бота в группу как администратора.
4. Дайте боту право приглашать пользователей (can_invite_users). Без него бот не получает уведомления о заявках и не может ни одобрить, ни отклонить их.
5. Отправьте пробную заявку по ссылке с другого аккаунта и посмотрите, что сделал бот: одобрил, отклонил или оставил решение админам.

Если бот оставляет решение админам, последнее слово за вами. Если в боте есть такая настройка, поначалу лучше пользоваться ею: так вы убедитесь, что бот не отклоняет по ошибке реальных людей.

### Бот не видит заявки: что проверить

| Признак | Вероятная причина | Что делать |
|---|---|---|
| Люди не подают заявку, а сразу заходят в группу | Заявки на вступление не включены | Включите одобрение админом для входа по ссылке |
| Заявки есть, но бот на них не отвечает | У бота нет права can_invite_users | Пересмотрите права администратора |
| Бота не получается назначить стражем | Бот не поддерживает обработку заявок | Выберите бота с такой возможностью |
| Непонятно, какой бот проверяет заявки | Эта информация видна только админам | Проверьте с аккаунта администратора |

## Для разработчиков ботов: что добавили в Bot API 10.1?

Bot API 10.1 вышел в один день с анонсом в блоге — 11 июня 2026 года. Полный список изменений — на странице [Bot API changelog](https://core.telegram.org/bots/api-changelog). Основные дополнения, связанные с заявками на вступление:

| Дополнение | Назначение |
|---|---|
| answerChatJoinRequestQuery | Метод для ответа на заявку на вступление |
| sendChatJoinRequestWebApp | Метод для рассмотрения заявки через показ пользователю мини-приложения |
| ChatFullInfo.guard_bot | Показывает, какой бот обрабатывает заявки в чате; видно только админам |
| ChatJoinRequest.query_id | Новое поле; его полное описание в этой статье не подтверждено |

Если вы пишете бота, помните о двух условиях: бот должен быть админом в чате и иметь право can_invite_users. Это право нужно и чтобы получать заявки, и чтобы на них отвечать.

Ходят слухи и о новых правилах для имён ботов. Мы разобрали их в [статье о суффиксах agent и ai в username ботов](/blog/telegram-bot-username-agent-ai-qoshimchalari).

## Что видит обычный пользователь при входе в группу и чего стоит остерегаться?

Если группа использует ИИ-стража, вы отправляете заявку по ссылке. Бот может открыть вам мини-приложение с вопросами или тестом. Затем бот одобряет или отклоняет заявку либо оставляет решение админам группы.

Проходя тест на вход:

- **Не вводите код входа, пароль и облачный пароль двухэтапной проверки.** Тест на вход не должен их запрашивать. Если запрашивает — это признак мошенничества: закройте окно.
- **Не сообщайте данные карты.** Номер карты, срок действия и SMS-код не имеют отношения к вступлению в группу.
- **Если просят оплату, спросите у владельца группы, за что.** Официальной информации о том, что Telegram сделал эту функцию платной, не найдено.
- **Берите ссылку из надёжного источника.** О ссылках «для подтверждения» от незнакомцев мы подробно писали в [статье о подозрительных ссылках](/blog/telegram-shubhali-havola-akkaunt-bloklanishi).

> Поле, которое показывает, какой бот проверяет заявки, Bot API отдаёт только админам. Видна ли эта информация обычным участникам в приложении, официальные источники не подтверждают.

## Нужен ли для этой функции Premium или оплата?

В блоге Telegram, FAQ и документации Bot API ничего не сказано о том, что ИИ-страж платный или требует Premium. Поэтому подтвердить здесь ничего не можем. Если в вашем приложении есть ограничение, вы увидите его при настройке.

Premium нужен для других возможностей: лента без рекламы, большие файлы, расшифровка голосовых и не только. Полный список — в [статье о возможностях Premium](/blog/telegram-premium-imkoniyatlari).

Если Premium нужен, его можно купить в сумах через [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Достаточно username — код входа и пароль не запрашиваются. Оплата проходит через Click, Payme, Paynet или Uzum Bank, зарубежная карта не нужна. Подписка активируется автоматически за 10 секунд.

- 3 месяца — ${narx(3)}
- 6 месяцев — ${narx(6)}
- 12 месяцев — ${narx(12)}

Перед покупкой проверьте цену и доступные способы оплаты в боте. Premiumtg — независимый сервис, а статус Premium выдаёт сам Telegram.

## Что ещё есть в июньском обновлении?

Судя по заголовку [анонса в блоге Telegram](https://telegram.org/blog/watch-apps-and-more), в обновлении от 11 июня помимо ИИ-стражей есть:

- приложения для смарт-часов;
- форматированный текст (rich text) для ботов.

В заголовке есть и «and Much More» — то есть изменений больше. О них читайте в самом блоге.

Другие инструменты Telegram для ИИ и групп:

- [Telegram AI Editor](/blog/telegram-ai-editor-2026) — редактирование и перевод сообщений;
- [обновление августа 2026 года](/blog/telegram-2026-avgust-yangiliklari) — приветственные сообщения для новых участников и кнопки внутри текста. Они не заменяют заявку на вступление: заявка срабатывает до того, как человек войдёт, а приветствие появляется уже после входа в группу.

## Часто задаваемые вопросы

### Как поставить IQ-тест в свою группу?

Отдельной кнопки «IQ-тест» в Telegram нет. Нужно включить заявки на вступление и сделать админом бота, который умеет показывать тест в мини-приложении. Вопросы и критерии оценки составляет автор этого бота.

### Можно ли назначить ИИ-стражем любого бота?

Нет. Эту роль может получить только бот, поддерживающий обработку заявок на вступление. Bot API отмечает такую возможность у самого бота отдельным признаком.

### Если бот отклонил заявку, может ли админ всё равно её принять?

Может ли админ пересмотреть заявку, отклонённую ботом, в официальных источниках прямо не сказано. Если бот оставляет решение админам, окончательный выбор делаете вы, поэтому безопаснее начинать с бота, у которого есть такой режим.

### Видят ли участники группы, какой бот проверяет заявки?

Bot API отдаёт эту информацию (поле guard_bot) только администраторам чата. Видна ли она обычным участникам в приложении, официально не подтверждено.

### Когда появилась функция ИИ-стража?

Telegram объявил о ней в блоге 11 июня 2026 года. В тот же день вышел Bot API 10.1, который дал разработчикам ботов нужные методы.

### Какое право администратора обязательно дать боту?

Бот должен быть админом в чате и иметь право приглашать пользователей (can_invite_users). Без него он не получает заявки и не может на них ответить.

### Что делать, если тест на вход просит номер телефона или код?

Не вводите код входа, пароль или данные карты — для вступления в группу они не нужны. Такой запрос — признак попытки завладеть аккаунтом или деньгами.

### Нужен ли Telegram Premium, чтобы пользоваться ИИ-стражем?

В официальных источниках такого требования нет. Если Premium нужен вам для других возможностей, его можно купить в сумах по username через @premiumtg_uzbot.`,
  },
};
