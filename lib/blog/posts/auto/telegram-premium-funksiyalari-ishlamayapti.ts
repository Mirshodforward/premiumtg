// Avtoblogyoz yasagan maqola (2026-11-23). Niyat: Premium’i faol bo‘lgan (yoki faol ko‘ringan) yoki uni sovg‘a sifatida olgan foydalanuvchi transkripsiya, emoji status, limitlar yoki Business funksiyasi ishlamayotganini ko‘radi. U «telegram premium funksiyalari ishlamayapti» deb sababini va yechimini qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/faq_premium
//   https://telegram.org/faq
//   https://core.telegram.org/api/config
//   https://fragment.com/premium
//   https://telegram.org/blog/telegram-business
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-premium-funksiyalari-ishlamayapti",
  date: "2026-11-23",
  reviewed: "2026-11-23",
  category: "amaliy",
  priority: 0.7,
  title: { uz: "Telegram Premium bor, lekin funksiyalari ishlamayapti: sababi va yechimi", ru: "Telegram Premium есть, но функции не работают: причины и решение" },
  excerpt: { uz: `Sabab odatda uchtadan biri: obuna shu akkauntda faol emas, siz boshqa akkauntdasiz yoki ilovangiz bu funksiyani hali qo‘llab-quvvatlamaydi. Avval shu uchtasini tekshiring.`, ru: `Обычно причина одна из трёх: подписка не активна на этом аккаунте, вы в другом аккаунте или приложение ещё не поддерживает функцию. Начните с проверки этих трёх пунктов.` },
  keywords: ["telegram premium funksiyalari ishlamayapti","telegram premium ishlamayapti","premium bor lekin funksiya yo'q","telegram transkripsiya ishlamayapti","emoji status qo'yib bo'lmayapti","telegram business ko'rinmayapti","premium sovg'a qildim lekin ko'rinmayapti","не работает telegram premium","не работают функции телеграм премиум","не работает расшифровка голосовых telegram","не могу поставить эмодзи статус","премиум есть но функции недоступны"],
  related: ["telegram-premium-kelmadi-nima-qilish","telegram-premium-kompyuterda-ishlaydimi","telegram-premium-imkoniyatlari","telegram-premium-sovga-qilish"],
  sources: [{"url":"https://telegram.org/faq_premium","title":"Telegram Premium FAQ"},{"url":"https://telegram.org/faq","title":"Telegram FAQ"},{"url":"https://core.telegram.org/api/config","title":"Client Configuration"},{"url":"https://fragment.com/premium","title":"Fragment — Telegram Premium"},{"url":"https://telegram.org/blog/telegram-business","title":"Telegram Business (blog, 2024-yil 31-mart)"}],
  content: {
    uz: `## Premium faol, lekin funksiya ishlamayapti: sabab nimada?

Sabab ko‘pincha uchtadan biri bo‘ladi: obuna aslida shu akkauntda faol emas, siz boshqa akkauntdasiz yoki ilovangiz bu funksiyani hali qo‘llab-quvvatlamaydi. [Telegram Premium FAQ](https://telegram.org/faq_premium)’da ham shunday deyilgan: ba’zi ilovalar funksiyalarning bir yoki bir nechtasini darhol qo‘llab-quvvatlamasligi mumkin.

Bu qo‘llanma Premium faol bo‘lgan yoki faoldek ko‘ringan holat uchun. To‘lov o‘tgan-u, obuna umuman kelmagan bo‘lsa, [To‘lov qildim, lekin Premium kelmadi](/blog/telegram-premium-kelmadi-nima-qilish) maqolasini o‘qing. Obuna qancha vaqtda kelishini [Premium qancha vaqtda faollashadi](/blog/telegram-premium-qachon-faollashadi) maqolasidan bilib olasiz. Qaysi funksiyalar Premium’ga kirishi esa [Premium imkoniyatlari](/blog/telegram-premium-imkoniyatlari) maqolasida sanalgan.

## 3 ta umumiy tekshiruv: obuna, akkaunt va ilova versiyasi

Muayyan funksiyani tekshirishdan oldin quyidagi uchta qadamni shu tartibda bajaring. Ko‘p holatda muammo shu bosqichning o‘zida topiladi.

1. **Obuna haqiqatan faolmi?** Profilingizni oching va Premium belgisi bor-yo‘qligiga qarang. FAQ’ga ko‘ra, boshqa foydalanuvchilar ham obunangizni aynan shu belgidan bilishadi. Belgi yo‘q bo‘lsa, muammo funksiyada emas, obunaning o‘zida — yuqorida aytilgan to‘lov maqolasiga o‘ting. Tugash sanasi ilovaning qaysi joyida ko‘rinishi bu maqolada tasdiqlanmagan, shuning uchun aniq menyu yo‘lini bermaymiz.
2. **To‘g‘ri akkauntdamisiz?** Telegram qoidasiga ko‘ra, har bir akkauntga alohida obuna kerak. Ilovada ikki-uch akkaunt bo‘lsa, Premium faqat o‘zi ulangan akkauntda ishlaydi. Ko‘p uchraydigan holat: obuna shaxsiy @username’ga olingan, siz esa ish akkauntidan transkripsiya tugmasini qidiryapsiz. Hozir qaysi akkaunt ochiq turganini tekshiring.
3. **Ilova yangilanganmi?** Telegram’ni so‘nggi versiyaga yangilang. Bu Telegram’ning rasmiy ko‘rsatmasi emas, amaliy maslahat. Ammo FAQ ilovalar ayrim funksiyalarni darhol qo‘llab-quvvatlamasligi mumkinligini aytadi, shuning uchun eski versiyada yangi funksiya bo‘lmasligi ajablanarli emas.

Uchala tekshiruvdan o‘tgan bo‘lsangiz, funksiyani boshqa qurilmada sinab ko‘ring. FAQ’ga ko‘ra, obuna olingan akkaunt Premium funksiyalaridan o‘ziga ulangan istalgan qurilmada foydalana oladi. Funksiya telefonda ishlab, kompyuterda ishlamasa, sabab obunada emas, o‘sha ilovada.

## Qaysi funksiya nega ishlamaydi: jadval

Umumiy tekshiruvlar natija bermasa, muammoli funksiyani jadvaldan toping. Funksiyalar nomi va Premium’ga tegishli ekani [Premium FAQ](https://telegram.org/faq_premium) va [Telegram FAQ](https://telegram.org/faq)’dan olingan.

| Funksiya | Ehtimoliy sabab | Nima qilish kerak |
|---|---|---|
| Ovozli xabarni matnga aylantirish | Ilova eski yoki Premium’siz akkauntdasiz | Ilovani yangilang, ochiq turgan akkauntni tekshiring, telefonda sinab ko‘ring |
| Emoji status | Obuna faol emas yoki ilova versiyasi eski | Profildagi Premium belgisini tekshiring, ilovani yangilang |
| 4 GB gacha fayl yuborish | Fayl Premium’siz akkauntdan yoki funksiyani qo‘llab-quvvatlamaydigan ilovadan yuborilyapti | Premium’li akkauntga o‘ting yoki faylni telefondagi ilovadan yuboring |
| 1 000 kanal, 30 papka, 10 ta qadalgan chat | Obuna faol emas yoki yaqinda tugagan | Belgini tekshiring, quyidagi «Limitlar» bo‘limini o‘qing |
| Telegram Business vositalari | Settings > Telegram Business bo‘limi ko‘rinmayapti, ilova eski bo‘lishi mumkin | Ilovani yangilang va bo‘limni aynan shu yo‘l bo‘yicha qidiring |
| Checklist yaratish va boshqa yangi funksiyalar | Funksiya ilovangizga hali qo‘shilmagan | Ilovani yangilang, boshqa platformada sinang yoki biroz kuting |

Ovozni matnga aylantirish ham, emoji status ham Premium funksiyalari ro‘yxatida bor. Lekin ularning tugmasi menyuda aniq qayerda turishi rasmiy manbalarda tasvirlanmagan, shuning uchun «tugmani falon joydan bosing» deb yozmaymiz. Tugma umuman ko‘rinmasa, uchta umumiy tekshiruvga qayting.

Telegram Business uchun yo‘l aniq. [Telegram blogi](https://telegram.org/blog/telegram-business)ga ko‘ra, uning sozlamalari Settings > Telegram Business bo‘limida joylashgan va Business funksiyalari Premium obunachilariga qo‘shimcha to‘lovsiz ochiq. Bo‘limda ish vaqti, manzil, tezkor javoblar, avtomatik xabarlar, maxsus start sahifasi va chatbot ulash kabi vositalar bor. Bo‘lim umuman ko‘rinmasa, ilova versiyasini va ochiq akkauntni tekshiring.

Limitlar bo‘yicha raqamlar Telegram FAQ va [texnik hujjat](https://core.telegram.org/api/config)da bir xil: Premium’da 1 000 tagacha kanal, 30 tagacha papka, 10 tagacha qadalgan chat va bitta papkada 200 tagacha chat.

> Telegram FAQ’ning o‘zida ma’lumot eskirgan bo‘lishi mumkinligi aytilgan. Raqamlar ilovangizdagi holatdan farq qilsa, ilovadagi holatga tayaning.

## Limitlar oshmadi yoki kamaydi: obuna tugaganmi?

Papkalar, qadalgan chatlar yoki kanallar soni birdan kamaygan bo‘lsa, obuna muddati tugagan bo‘lishi mumkin. Premium FAQ bunday holatda nima bo‘lishini aniq yozadi:

- birinchi 10 ta papka ishlashda davom etadi;
- birinchi 5 ta qadalgan chat qoladi, qolganlari qadalganlar ro‘yxatidan olib tashlanadi;
- yangi kanallarga qo‘shilib bo‘lmaydi;
- o‘sha papkalarga yangi chat qo‘shib bo‘lmaydi.

Misol: sizda 14 ta papka bor edi, endi 11-papkadan boshlab ular ishlamayapti. Yoki oltinchi chatni qadab bo‘lmayapti. Bu ilova xatosi emas, ko‘pincha obuna tugaganini bildiradi. Profilda Premium belgisi yo‘qolgan bo‘lsa, gap aynan shunda. Ma’lumotlaringiz bilan nima bo‘lishi haqida [Premium tugasa nima bo‘ladi](/blog/telegram-premium-tugasa-nima-boladi) maqolasida batafsil yozilgan.

## Kompyuter yoki Web’da funksiya yo‘q: platforma sababmi?

Premium FAQ’ga ko‘ra, Premium funksiyalari hozir Telegram’ning Android, iOS va macOS ilovalarida qo‘llab-quvvatlanadi. Telegram Desktop va Web bu jumlada tilga olinmagan. Lekin bu ularda Premium umuman ishlamaydi degani emas: FAQ’ning boshqa joyida faqat ayrim ilovalar funksiyalarni darhol qo‘llab-quvvatlamasligi mumkinligi aytilgan.

> Amaliy tartib: funksiya kompyuterda yoki brauzerda ko‘rinmasa, uni avval telefondagi ilovada sinab ko‘ring. Telefonda ishlasa, obunangiz joyida va muammo faqat shu ilovada. Bunday funksiya u yerda kechroq paydo bo‘lishi mumkin.

Funksiyalar mamlakat yoki platforma bo‘yicha bosqichma-bosqich chiqishi haqida rasmiy ma’lumot topilmadi. Shuning uchun «hududingizga hali kelmagan» degan taxminga tayanib qolmang, avval tekshiruvlarni bajaring. Turli qurilmalarda Premium qanday ishlashi haqida [Premium bir nechta qurilmada ishlaydimi](/blog/telegram-premium-kompyuterda-ishlaydimi) maqolasida yozilgan.

## Mamlakat cheklovi va @PremiumBot: bular funksiyaga ta’sir qiladimi?

Premium FAQ’da ikkita holat alohida aytilgan, ularni ba’zan funksiya muammosi bilan adashtirishadi.

Birinchisi — mamlakat cheklovi. FAQ’ga ko‘ra, ba’zi mamlakatlarda mahalliy qonun va qoidalar Telegram Premium’dan foydalanishga to‘sqinlik qilishi mumkin. Bu O‘zbekistonga tegishli ekani bu maqolada tasdiqlanmagan. Premium belgisi profilingizda bo‘lsa, bitta funksiya ishlamasligini shunga bog‘lashga asos kam.

Ikkinchisi — @PremiumBot. FAQ’ga ko‘ra, App Store yoki Google Play’dan yuklangan ilova @PremiumBot’ni qo‘llab-quvvatlamaydi. Bu jumla obunani shu bot orqali rasmiylashtirish haqida. FAQ uni allaqachon faol obunadagi funksiyalar bilan bog‘lamaydi, shuning uchun belgi bor bo‘lsa, sababni boshqa joydan qidiring.

## Do‘stga Premium sovg‘a qildingiz, lekin unda funksiyalar ko‘rinmayapti

FAQ’ga ko‘ra, sovg‘a 3, 6 yoki 12 oyga oldindan to‘langan obuna bo‘ladi. Telegram ichida u foydalanuvchi profilidagi «Gift Premium» tugmasi orqali yuboriladi, [Fragment](https://fragment.com/premium)’da esa kriptohamyon orqali do‘stingizga ham Premium olish mumkin. Premiumtg orqali sovg‘ada esa faqat do‘stingizning username’i kerak: akkauntga kirish, login kodi yoki parol so‘ralmaydi, obuna 10 soniyada avtomatik faollashadi. Sovg‘a qanday yuborilishi [Premiumni sovg‘a qilish](/blog/telegram-premium-sovga-qilish) maqolasida yozilgan. Bu yerda sovg‘a yuborilgan-u, do‘stingizda funksiyalar ko‘rinmayotgan holatni ko‘ramiz.

1. **Username’ni solishtiring.** Buyurtmada yozilgan @username’ni do‘stingiz profilidagi username bilan harfma-harf solishtiring. Bitta harf, raqam yoki pastki chiziq farq qilsa, sovg‘a boshqa odamga ketgan bo‘lishi mumkin.
2. **Belgini tekshiring.** Do‘stingiz profilini o‘zingiz oching yoki undan profilida Premium belgisi bor-yo‘qligini so‘rang.
3. **Akkauntni aniqlashtiring.** Do‘stingizga sovg‘a aynan qaysi @username’ga ketganini ayting. Telefonida bir nechta akkaunt bo‘lsa, o‘shani ochsin: obuna har bir akkauntga alohida beriladi.
4. **Ilovani yangilasin.** Belgi bor-u, funksiya ko‘rinmasa, do‘stingiz ilovasini yangilab, funksiyani telefonda sinab ko‘rsin. Kompyuterda tekshirayotgan bo‘lsa, platforma haqidagi bo‘limga qarang.

Sovg‘a qabul qilinganini tasdiqlashning boshqa rasmiy yo‘li bu maqolada tasdiqlanmagan, shuning uchun profildagi belgi eng ishonchli ko‘rsatkich. FAQ’ga ko‘ra, sovg‘a muddati tugagach, do‘stingiz obunani o‘zi rasmiylashtirishi mumkin.

## Hech narsa yordam bermadi: kimga yozish kerak?

Kimga yozish muammoning turiga bog‘liq:

- **Obuna Premiumtg orqali olingan, lekin belgi yo‘q yoki username’da shubha bor.** [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport)ga yozing. Xabarda username va buyurtma vaqtini ko‘rsating, chekni ilova qiling.
- **Belgi bor, lekin muayyan funksiya ishlamaydi.** Bu ilovaga bog‘liq masala, uni Telegram’ning o‘zi hal qiladi. Telegram qo‘llab-quvvatlash xizmatiga murojaat qilish yo‘lini ilovangiz sozlamalaridan qidiring — aniq menyu nomi bu maqolada tasdiqlanmagan.
- **Yozishdan oldin tayyorlang:** qurilma modeli, ilova versiyasi, qaysi funksiya ishlamayotgani va ekran skrinshoti. Shunda muammoni qayta-qayta tushuntirishga to‘g‘ri kelmaydi.

Funksiya ishlamasligi obuna «soxta» ekanini bildirmaydi. Premium statusni faqat Telegram beradi, «soxta Premium» degan narsa texnik jihatdan yo‘q. Belgi bor ekan, sababni ilovadan, akkauntdan yoki platformadan qidiring.

## Ko‘p so‘raladigan savollar

### Premium belgisi bor, lekin ovozli xabarni matnga aylantirib bo‘lmayapti. Nima qilay?

Belgi bor bo‘lsa, sabab ko‘pincha ilova yoki ochiq turgan akkauntda. Telegram’ni yangilang, Premium’li akkauntda ekaningizni tekshiring va funksiyani telefondagi ilovada sinab ko‘ring.

### Telegram Desktop’da Premium funksiyalari nega ko‘rinmaydi?

Premium FAQ funksiyalar qo‘llab-quvvatlanadigan ilovalar qatorida Android, iOS va macOS’ni sanaydi, boshqa ilovalarda ayrim funksiyalar kechikishi mumkin. Obuna akkauntga ulangani uchun telefonda ishlayotgan funksiya kompyuterda keyinroq paydo bo‘lishi mumkin.

### Ikkinchi akkauntimda ham Premium ishlashi kerakmi?

Yo‘q. Telegram qoidasiga ko‘ra, har bir akkauntga alohida obuna kerak, ikkala akkaunt bitta ilovada turgan bo‘lsa ham.

### Premium tugagandan keyin papkalarim va kanallarim o‘chib ketadimi?

O‘chmaydi, lekin cheklanadi: birinchi 10 ta papka va birinchi 5 ta qadalgan chat ishlashda qoladi. Yangi kanalga qo‘shilish va o‘sha papkalarga chat qo‘shish esa yana Premium olinguncha to‘xtaydi.

### Do‘stimga sovg‘a qilgan Premium’im unda ko‘rinmayapti. Pul kuyib ketdimi?

Avval buyurtmadagi @username’ni do‘stingiz profilidagi username bilan solishtiring va profilida Premium belgisi bor-yo‘qligini tekshiring. Premiumtg orqali olgan bo‘lsangiz, chek va username bilan @StarsPaymeeSupport’ga yozing.

### Telegram Business bo‘limini qayerdan topaman?

Telegram blogiga ko‘ra, u Settings > Telegram Business yo‘lida joylashgan. Bu bo‘lim ko‘rinmasa, ilovani yangilang va Premium faol akkauntda ekaningizni tekshiring.

### Funksiya ishlamasa, obuna soxta degani emasmi?

Yo‘q. Premium statusni faqat Telegram beradi, profildagi belgi shuning ko‘rinishi. Belgi bor-u, funksiya ishlamasa, sababni ilova versiyasi, akkaunt yoki platformadan qidiring.`,
    ru: `## Premium активен, но функция не работает: в чём причина?

Чаще всего причин три. Подписка на самом деле не активна на этом аккаунте, вы находитесь в другом аккаунте или ваше приложение пока не поддерживает функцию. В [Telegram Premium FAQ](https://telegram.org/faq_premium) прямо сказано, что некоторые приложения могут поддерживать одну или несколько функций не сразу.

Эта инструкция для случаев, когда Premium активен или выглядит активным. Если оплата прошла, а подписка так и не пришла, прочитайте статью [Оплатил, но Premium не пришёл](/blog/telegram-premium-kelmadi-nima-qilish). Как быстро приходит подписка, описано в статье [Через сколько активируется Premium](/blog/telegram-premium-qachon-faollashadi). Какие функции входят в Premium, перечислено в статье [Возможности Premium](/blog/telegram-premium-imkoniyatlari).

## 3 общие проверки: подписка, аккаунт и версия приложения

Прежде чем разбираться с конкретной функцией, выполните три шага в этом порядке. Часто проблема находится уже здесь.

1. **Подписка действительно активна?** Откройте свой профиль и посмотрите, есть ли значок Premium. По данным FAQ, другие пользователи узнают о вашей подписке именно по этому значку. Если значка нет, проблема не в функции, а в самой подписке — переходите к статье об оплате, указанной выше. Где в приложении видна дата окончания подписки, в этой статье не подтверждено, поэтому точный путь в меню мы не приводим.
2. **Вы в нужном аккаунте?** По правилам Telegram, каждому аккаунту нужна своя подписка. Если в приложении два-три аккаунта, Premium работает только в том, к которому подключён. Частая ситуация: подписку оформили на личный @username, а кнопку расшифровки ищут в рабочем аккаунте. Проверьте, какой аккаунт сейчас открыт.
3. **Приложение обновлено?** Обновите Telegram до последней версии. Это не официальная рекомендация Telegram, а практический совет. Но FAQ сообщает, что приложения могут поддерживать некоторые функции не сразу, так что отсутствие новой функции в старой версии неудивительно.

Если все три проверки пройдены, попробуйте функцию на другом устройстве. По данным FAQ, аккаунт с подпиской может пользоваться функциями Premium на любом подключённом устройстве. Если на телефоне функция работает, а на компьютере нет, дело не в подписке, а в этом приложении.

## Какая функция почему не работает: таблица

Если общие проверки не помогли, найдите проблемную функцию в таблице. Названия функций и их принадлежность к Premium взяты из [Premium FAQ](https://telegram.org/faq_premium) и [Telegram FAQ](https://telegram.org/faq).

| Функция | Вероятная причина | Что делать |
|---|---|---|
| Расшифровка голосовых сообщений | Устаревшее приложение или аккаунт без Premium | Обновите приложение, проверьте открытый аккаунт, попробуйте на телефоне |
| Эмодзи-статус | Подписка не активна или версия приложения устарела | Проверьте значок Premium в профиле, обновите приложение |
| Отправка файлов до 4 ГБ | Файл отправляется с аккаунта без Premium или из приложения, которое не поддерживает функцию | Переключитесь на аккаунт с Premium или отправьте файл из приложения на телефоне |
| 1 000 каналов, 30 папок, 10 закреплённых чатов | Подписка не активна или недавно закончилась | Проверьте значок, прочитайте раздел о лимитах ниже |
| Инструменты Telegram Business | Не виден раздел Settings > Telegram Business, возможно, приложение устарело | Обновите приложение и ищите раздел именно по этому пути |
| Создание чек-листов и другие новые функции | Функция ещё не добавлена в ваше приложение | Обновите приложение, попробуйте на другой платформе или немного подождите |

И расшифровка голосовых, и эмодзи-статус есть в списке функций Premium. Но где именно их кнопки находятся в меню, официальные источники не описывают, поэтому мы не пишем «нажмите вот здесь». Если кнопки нет совсем, вернитесь к трём общим проверкам.

С Telegram Business путь известен. Согласно [блогу Telegram](https://telegram.org/blog/telegram-business), его настройки находятся в разделе Settings > Telegram Business, а функции Business доступны подписчикам Premium без доплаты. В разделе есть часы работы, адрес, быстрые ответы, автоматические сообщения, собственная стартовая страница, подключение чат-бота и другие инструменты. Если раздела не видно вообще, проверьте версию приложения и открытый аккаунт.

Цифры по лимитам в Telegram FAQ и в [технической документации](https://core.telegram.org/api/config) совпадают: в Premium до 1 000 каналов, до 30 папок, до 10 закреплённых чатов и до 200 чатов в одной папке.

> В самом Telegram FAQ сказано, что информация в нём может устареть. Если цифры расходятся с тем, что вы видите в приложении, ориентируйтесь на приложение.

## Лимиты не выросли или уменьшились: подписка закончилась?

Если число папок, закреплённых чатов или каналов внезапно сократилось, возможно, подписка закончилась. Premium FAQ прямо описывает, что происходит в этом случае:

- первые 10 папок продолжают работать;
- первые 5 закреплённых чатов остаются, остальные открепляются;
- вступать в новые каналы нельзя;
- добавлять новые чаты в эти папки нельзя.

Пример: у вас было 14 папок, а теперь начиная с 11-й они не работают. Или не получается закрепить шестой чат. Это не ошибка приложения — чаще всего это значит, что подписка закончилась. Если значок Premium из профиля пропал, дело именно в этом. Что происходит с вашими данными, подробно описано в статье [Что будет, когда закончится Premium](/blog/telegram-premium-tugasa-nima-boladi).

## На компьютере или в Web нет функции: виновата платформа?

Согласно Premium FAQ, функции Premium сейчас поддерживаются в приложениях Telegram для Android, iOS и macOS. Telegram Desktop и Web в этой фразе не упоминаются. Но это не значит, что Premium там не работает вообще: в другом месте FAQ сказано лишь, что некоторые приложения могут поддерживать функции не сразу.

> Практический порядок: если функции нет на компьютере или в браузере, сначала проверьте её в приложении на телефоне. Если там она работает, подписка в порядке, а проблема только в этом приложении. Функция может появиться там позже.

Официальной информации о том, что функции выходят поэтапно по странам или платформам, не найдено. Поэтому не стоит полагаться на догадку «до вашего региона ещё не дошло» — сначала выполните проверки. Как Premium работает на разных устройствах, рассказано в статье [Работает ли Premium на нескольких устройствах](/blog/telegram-premium-kompyuterda-ishlaydimi).

## Ограничения по стране и @PremiumBot: влияют ли они на функции?

В Premium FAQ отдельно упомянуты две ситуации, которые иногда путают с проблемой функций.

Первая — ограничения по стране. Согласно FAQ, в некоторых странах местные законы и правила могут препятствовать доступу к Telegram Premium. Относится ли это к Узбекистану, в этой статье не подтверждено. Если значок Premium в профиле есть, связывать с этим неработающую функцию оснований мало.

Вторая — @PremiumBot. По данным FAQ, приложение, скачанное из App Store или Google Play, не поддерживает @PremiumBot. Эта фраза касается оформления подписки через этого бота. FAQ не связывает её с функциями уже активной подписки, так что если значок есть, причину стоит искать в другом.

## Подарили Premium другу, но у него не видно функций

По данным FAQ, подарок — это заранее оплаченная подписка на 3, 6 или 12 месяцев. Внутри Telegram его отправляют через кнопку «Gift Premium» в профиле пользователя, а на [Fragment](https://fragment.com/premium) можно оформить Premium и для друга через криптокошелёк. При подарке через Premiumtg нужен только username друга: вход в аккаунт, код входа или пароль не запрашиваются, подписка активируется автоматически за 10 секунд. Как отправить подарок, описано в статье [Как подарить Premium](/blog/telegram-premium-sovga-qilish). Здесь разберём случай, когда подарок отправлен, а функций у друга не видно.

1. **Сверьте username.** Сравните @username из заказа с username в профиле друга буква за буквой. Если отличается хоть одна буква, цифра или нижнее подчёркивание, подарок мог уйти другому человеку.
2. **Проверьте значок.** Откройте профиль друга сами или спросите у него, есть ли там значок Premium.
3. **Уточните аккаунт.** Скажите другу, на какой именно @username ушёл подарок. Если у него на телефоне несколько аккаунтов, пусть откроет нужный: подписка выдаётся каждому аккаунту отдельно.
4. **Пусть обновит приложение.** Если значок есть, а функции не видно, другу стоит обновить приложение и проверить функцию на телефоне. Если он проверяет на компьютере, посмотрите раздел о платформах.

Другой официальный способ подтвердить, что подарок получен, в этой статье не подтверждён, поэтому самый надёжный показатель — значок в профиле. Согласно FAQ, после окончания подарочного срока друг может оформить подписку сам.

## Ничего не помогло: куда писать?

Куда обращаться, зависит от типа проблемы:

- **Подписка оформлена через Premiumtg, но значка нет или есть сомнения в username.** Напишите в [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport). Укажите username и время заказа, приложите чек.
- **Значок есть, но конкретная функция не работает.** Это вопрос приложения, и решает его сам Telegram. Способ связаться с поддержкой Telegram ищите в настройках приложения — точное название пункта меню в этой статье не подтверждено.
- **Перед обращением подготовьте:** модель устройства, версию приложения, какая функция не работает, и скриншот экрана. Тогда не придётся объяснять проблему по нескольку раз.

То, что функция не работает, не означает, что подписка «поддельная». Статус Premium выдаёт только Telegram, а «поддельного Premium» технически не существует. Если значок есть, ищите причину в приложении, аккаунте или платформе.

## Часто задаваемые вопросы

### Значок Premium есть, но голосовое сообщение не расшифровывается. Что делать?

Раз значок есть, причина чаще всего в приложении или в открытом аккаунте. Обновите Telegram, убедитесь, что вы в аккаунте с Premium, и попробуйте функцию в приложении на телефоне.

### Почему в Telegram Desktop не видно функций Premium?

Premium FAQ называет среди приложений с поддержкой функций Android, iOS и macOS, в других приложениях отдельные функции могут появляться с задержкой. Подписка привязана к аккаунту, поэтому функция, которая работает на телефоне, может появиться на компьютере позже.

### Должен ли Premium работать и на моём втором аккаунте?

Нет. По правилам Telegram, каждому аккаунту нужна своя подписка, даже если оба аккаунта открыты в одном приложении.

### Удалятся ли мои папки и каналы после окончания Premium?

Не удалятся, но будут ограничены: продолжат работать первые 10 папок и первые 5 закреплённых чатов. Вступать в новые каналы и добавлять чаты в эти папки не получится, пока вы снова не оформите Premium.

### Premium, который я подарил другу, у него не отображается. Деньги пропали?

Сначала сверьте @username из заказа с username в профиле друга и проверьте, есть ли у него значок Premium. Если вы покупали через Premiumtg, напишите в @StarsPaymeeSupport, приложив чек и username.

### Где найти раздел Telegram Business?

Согласно блогу Telegram, он находится по пути Settings > Telegram Business. Если раздела не видно, обновите приложение и проверьте, что вы в аккаунте с активным Premium.

### Если функция не работает, значит подписка поддельная?

Нет. Статус Premium выдаёт только Telegram, а значок в профиле — его видимое подтверждение. Если значок есть, а функция не работает, ищите причину в версии приложения, аккаунте или платформе.`,
  },
};
