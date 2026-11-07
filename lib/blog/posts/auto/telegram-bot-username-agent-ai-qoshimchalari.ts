// Avtoblogyoz yasagan maqola (2026-11-06). Niyat: Telegram kanallarida bot username'lariga agent, ai, game, app kabi yangi qo'shimchalar va «Agent» yorlig'i haqida xabar o'qigan foydalanuvchi bu rostmi, qanday ishlaydi va Premium bilan bog'liqmi, degan savolga «telegram bot username agent ai» so'zlari bilan javob qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/bot-revolution
//   https://core.telegram.org/method/bots.checkUsername
//   https://core.telegram.org/api/bots/managed-bots
//   https://core.telegram.org/api/links
//   https://telegram.org/blog/ai-bot-revolution-11-new-features
//   https://core.telegram.org/bots/features
//   https://core.telegram.org/bots
//   https://core.telegram.org/bots/api-changelog
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-bot-username-agent-ai-qoshimchalari",
  date: "2026-11-06",
  reviewed: "2026-11-06",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram bot username’lariga agent, ai, app qo‘shimchalari: rostmi?", ru: "Суффиксы agent, ai, app в username ботов Telegram: правда или слух?" },
  excerpt: { uz: `Yo‘q, rasmiy tasdiq topilmadi: Telegram hujjatlariga ko‘ra bot username’i hozir ham «bot» bilan tugashi shart, chatda esa botlar «bot» yorlig‘i bilan ko‘rinadi.`, ru: `Нет, официального подтверждения нет: по документации Telegram username бота по-прежнему должен заканчиваться на «bot», а в чате боты отмечены меткой «bot».` },
  keywords: ["telegram bot username yangi qo'shimchalar","telegram bot username agent ai","telegram agent yorlig'i","telegram bot nomi bot bilan tugashi","telegram ai agent bot","telegram bot username qoidalari","юзернейм бота телеграм agent ai","телеграм бот username без bot","метка Agent телеграм бот","телеграм ботов новые суффиксы username","telegram bot-to-bot agentlar"],
  related: ["telegram-2026-noyabr-yangilanishi-sovgalar","telegram-ai-editor-2026","telegram-2026-avgust-yangiliklari","telegram-premium-imkoniyatlari"],
  sources: [{"url":"https://telegram.org/blog/bot-revolution","title":"Telegram Bot Platform"},{"url":"https://core.telegram.org/method/bots.checkUsername","title":"bots.checkUsername"},{"url":"https://core.telegram.org/api/bots/managed-bots","title":"Managed bots"},{"url":"https://core.telegram.org/api/links","title":"Deep links"},{"url":"https://telegram.org/blog/ai-bot-revolution-11-new-features","title":"Guest AI Bots, Bot-to-Bot Chats, Chat Automation, Custom AI Styles, 100M+ Emoji & Sticker Search and Much More"},{"url":"https://core.telegram.org/bots/features","title":"Telegram Bot Features"},{"url":"https://core.telegram.org/bots","title":"Bots: An introduction for developers"},{"url":"https://core.telegram.org/bots/api-changelog","title":"Bot API changelog"}],
  content: {
    uz: `## Bot username’lariga yangi qo‘shimchalar qo‘shildimi?

Hozircha rasmiy tasdiq yo‘q. Telegram’ning ochiq hujjatlarida bot username’lariga agent, ai, game, app kabi yangi qo‘shimchalar haqida ma’lumot topilmadi.

Rasmiy matnlar buning aksini yozadi. [Bot Platform e’lonida](https://telegram.org/blog/bot-revolution) barcha bot username’lari «bot» bilan tugashi shart deyilgan. O‘sha e’londa sababi ham bor: shu qo‘shimcha tufayli bot havolalarini tanib olish oson. Texnik hujjatlarda ham xuddi shu talab turibdi.

Da’vo Telegram kanallaridagi postlardan tarqaldi. Kanal posti rasmiy manba emas. Undan mavzu olish mumkin, faktni esa Telegram’ning o‘z sahifalaridan tekshirish kerak.

Telegram blogi va core.telegram.org sahifalari 2026-yil 6-noyabr holatiga ko‘ra tekshirildi. Telegram qoidalarni keyinroq o‘zgartirishi mumkin. Yangi e’lon chiqsa, quyidagi tekshirish tartibidan foydalaning.

## Kanallarda nima deyilgan va qaysi qismi tasdiqlanmagan?

Postda uchta alohida da’vo bor. Ularni ajratib ko‘rish kerak: bittasi rost chiqsa ham, qolganlari o‘z-o‘zidan rost bo‘lib qolmaydi.

| Da’vo | Rasmiy hujjatdagi holat | Qayerda tekshirildi |
|---|---|---|
| Bot username’lariga agent, ai, game, app kabi qo‘shimchalar qo‘shiladi | Topilmadi. Hujjatlar username «bot» bilan tugashi shart deydi | [bots.checkUsername](https://core.telegram.org/method/bots.checkUsername) |
| Bunday botlar interfeysda «Agent» yorlig‘i bilan ko‘rinadi | Topilmadi. Hujjatda botlar chatda «bot» yorlig‘i bilan ko‘rinishi yozilgan | [Bots: An introduction](https://core.telegram.org/bots) |
| Funksiya Premium obunachilarga qo‘shimcha to‘lovsiz beriladi | Rasmiy manbalarda ma’lumot topilmadi | [Bot API changelog](https://core.telegram.org/bots/api-changelog) |

Bu funksiya Telegram’ning beta versiyalarida yoki ilova kodida bor-yo‘qligi bu maqolada tekshirilmagan. Test versiyada biror narsa uchrasa ham, u rasmiy chiqishgacha o‘zgarishi yoki umuman chiqmasligi mumkin.

Skrinshot ham yetarli isbot emas. Interfeys rasmini tahrirlash qiyin emas. Rasmiy havolasiz tarqalgan rasmni taxmin deb qabul qiling.

## Hozir bot username’i qanday qoidalarga bo‘ysunadi?

Rasmiy [bots.checkUsername](https://core.telegram.org/method/bots.checkUsername) hujjatiga ko‘ra, bot username’i uchta talabga javob berishi kerak:

- faqat harf, raqam va pastki chiziq (_) ishlatiladi;
- oxiri «bot» bilan tugaydi;
- to‘liq username 5–32 belgidan iborat bo‘ladi.

Qo‘shimcha texnik tafsilotlar:

- «bot» qo‘shimchasi bo‘lmasa, API USERNAME_SUFFIX_MISSING xatosini qaytaradi. Ma’nosi: majburiy bot qo‘shimchasi yetishmayapti.
- [Managed bots](https://core.telegram.org/api/bots/managed-bots) hujjatida ham shu talab bor: «barcha botlarda bo‘lgani kabi» username «bot» bilan tugashi shart.
- [Deep link](https://core.telegram.org/api/links) orqali bot nomi taklif qilinsa-yu, u «bot» bilan tugamasa, ilova uni foydalanuvchiga tavsiya qilishdan oldin oxiriga «bot» qo‘shishi kerak.

Shu qoidalarni misollarda ko‘ramiz:

| Username | Holat | Sabab |
|---|---|---|
| shop_helper_bot | Mos | Harf va pastki chiziq, oxiri «bot» |
| shophelperbot | Mos | Faqat harflar, oxiri «bot» |
| ai_helper_bot | Mos | «ai» boshida turibdi, oxiri baribir «bot» |
| shop_helper | Yaroqsiz | Oxirida «bot» yo‘q, API USERNAME_SUFFIX_MISSING qaytaradi |
| shop_helper_ai | Yaroqsiz | Oxiri «ai», talab esa «bot» |
| shop-helper_bot | Yaroqsiz | Chiziqcha (-) ruxsat etilgan belgilar qatorida yo‘q |
| abot | Yaroqsiz | 4 belgi, kamida 5 kerak |

Yodda tuting: chat sarlavhasida ko‘rinadigan ism va @ belgisi bilan yoziladigan username — boshqa-boshqa narsa. Yuqoridagi qoida faqat username’ga tegishli. Skrinshotdagi «agent» yoki «AI» so‘zi username emas, ko‘rsatilgan ism bo‘lishi ham mumkin. Shuning uchun har doim @ bilan boshlanadigan qatorga qarang.

## Botda «Agent» yorlig‘i ko‘rinadimi yoki «bot»?

Rasmiy [botlar haqidagi kirish hujjatiga](https://core.telegram.org/bots) ko‘ra, botlarda «last seen» (oxirgi marta ko‘rilgan) yoki onlayn holati bo‘lmaydi. Uning o‘rniga chatda «bot» yorlig‘i ko‘rinadi.

«Agent» yorlig‘i haqida rasmiy tasdiq topilmadi. Bunday yorliqli rasm ko‘rsangiz, rasmiy e’lon chiqmaguncha uni tasdiqlanmagan ma’lumot deb hisoblang.

Bot bilan odamni farqlash uchun ikki narsani tekshiring:

- **Holat qatori.** Haqiqiy botda onlayn holat o‘rnida «bot» yozuvi turadi. Akkaunt o‘zini «bot» yoki «agent» deb tanishtirsa-yu, unda «onlayn» yoki «oxirgi marta ko‘rilgan» chiqsa, uni odam boshqarayotgan bo‘lishi mumkin.
- **Username oxiri.** Hozirgi qoidaga ko‘ra bot username’i «bot» bilan tugaydi. @support_agent kabi nom bot emas, oddiy foydalanuvchi akkaunti bo‘lishi kerak.

Bunday «bot»ga login kodi, parol yoki karta ma’lumotini yubormang. Firibgarlarning odatiy usullari haqida [Premium xaridida himoyalanish qo‘llanmasida](/blog/telegram-premium-firibgarlikdan-himoya) batafsil yozilgan.

## Mish-mish qayerdan chiqdi: Telegram’dagi AI agentlar

«Agent» so‘zi Telegram’ning rasmiy matnlarida haqiqatan uchraydi. Lekin u funksiya ma’nosida ishlatiladi, username qo‘shimchasi sifatida emas.

- Telegram blogidagi [AI botlar haqidagi e’londa](https://telegram.org/blog/ai-bot-revolution-11-new-features) Bot-to-Bot funksiyasi ish jarayonlarini to‘liq avtonom agentlar bilan avtomatlashtirishga imkon berishi aytilgan.
- [Bot Features](https://core.telegram.org/bots/features) hujjatida ko‘p agentli ish jarayoni misol qilingan. Unda koordinator bot mutaxassis botlardan tekshirish, tarjima, rejalashtirish yoki buyurtmani qayta ishlashni so‘raydi, keyin natijalarni birlashtiradi.
- Bot API rivojlanishda davom etmoqda: [changelog’da](https://core.telegram.org/bots/api-changelog) 2026-yil 24-avgust sanali Bot API 10.3 yozuvi bor. Username qoidasi o‘zgargani haqidagi yozuv esa bu maqola tekshirgan rasmiy manbalarda topilmadi.

Botlar bir-biri bilan ishlay boshlagach, «botlar agentga aylanadi» degan gap tez tarqalishi tushunarli. Ammo funksiya nomi va username qoidasi bir narsa emas. Rasmiy hujjatlarda agentlar haqida gap bor, username’dagi «bot» talabi esa o‘z joyida.

Telegram’dagi boshqa AI yangiliklari haqida: [AI Editor bilan xabarni tahrirlash](/blog/telegram-ai-editor-2026) va [2026-yil avgust yangiliklari](/blog/telegram-2026-avgust-yangiliklari).

## Bu Telegram Premium bilan bog‘liqmi?

Postda funksiya Premium obunachilarga qo‘shimcha to‘lovsiz berilishi mumkinligi aytilgan. Bu haqda rasmiy ma’lumot topilmadi.

Rasman tasdiqlangan bog‘liqlik boshqa yo‘nalishda. Bot API changelog’iga ko‘ra, Business Bots endi Telegram Premium obunasisiz ham foydalanuvchi akkauntlarini boshqara oladi. Ya’ni bu yozuvda Premium talabi kengaymagan, aksincha bir holatda olib tashlangan. Business funksiyalari haqida umumiy ma’lumot [Telegram Business nima](/blog/telegram-business-nima) maqolasida bor.

> Tasdiqlanmagan funksiya uchun Premium olish shart emas. Obuna aynan nimalarni berishini [Premium imkoniyatlarining to‘liq ro‘yxatida](/blog/telegram-premium-imkoniyatlari) ko‘ring.

Premium’ning tasdiqlangan imkoniyatlari sizga kerak bo‘lsa, uni [@premiumtg_uzbot](https://t.me/premiumtg_uzbot?start=site_premiumtg_blog) orqali username bilan, so‘mda olish mumkin. Joriy narx va to‘lov usullarini xariddan oldin botda tekshiring.

## Bunday mish-mishlarni o‘zingiz qanday tekshirasiz?

Kanal postini o‘qigach, quyidagi tartibda tekshiring:

1. Postda rasmiy havola bormi, qarang: [Telegram blogi](https://telegram.org/blog) yoki [core.telegram.org](https://core.telegram.org). Havola yo‘q bo‘lsa, xabarni taxmin deb qabul qiling.
2. [Bot API changelog’ini](https://core.telegram.org/bots/api-changelog) oching va oxirgi yozuvlarni o‘qing. Yozuvlar sanasi bilan beriladi, shuning uchun yangi o‘zgarishni topish oson.
3. [bots.checkUsername](https://core.telegram.org/method/bots.checkUsername) sahifasida username talablarini solishtiring: «must end in bot» qatori o‘zgarganmi, shuni ko‘ring.
4. @BotFather’da yangi bot yaratib, «bot»siz nom kiritib ko‘ring. Hozirgi qoidaga ko‘ra bunday nom rad etilishi kutiladi.
5. «Premium bilan tekin agent», «agent username sotamiz» kabi takliflarga pul o‘tkazmang. Bunday nomlar [Fragment](https://fragment.com)’da sotilishi tekshirilmagan.

Shunga o‘xshash tahlil: [noyabr yangilanishidagi sovg‘a da’volari](/blog/telegram-2026-noyabr-yangilanishi-sovgalar) ham shu usulda tekshirilgan.

## Bot egasi yoki dasturchi hozir nima qilishi kerak?

- **Botni qayta nomlashga shoshilmang.** Hozirgi rasmiy qoidada username oxiridagi «bot» majburiy. Managed bots uchun ham talab bir xil.
- **Agentli bot qurmoqchi bo‘lsangiz, rasmiy vositalardan boshlang.** Bot-to-Bot va [Bot Features](https://core.telegram.org/bots/features) hujjatidagi ko‘p agentli imkoniyatlar username’ni o‘zgartirmasdan ishlaydi.
- **«AI» so‘zini username boshiga yoki o‘rtasiga qo‘ying.** ai_helper_bot kabi nom qoidaga mos. Oxiridagi «bot»ni esa almashtirib bo‘lmaydi.
- **Botingizning aniq username’ini ochiq ko‘rsating.** Kanal, sayt yoki tavsifda to‘g‘ri username tursa, foydalanuvchilar soxta nusxalarni osonroq farqlaydi.
- **Rasmiy manbalarni kuzating.** Yangi qo‘shimchalar rasman e’lon qilinsa, bu changelog va Telegram blogida ko‘rinadi. Bu maqola ham shunga qarab yangilanishi mumkin.

## Ko‘p so‘raladigan savollar

### Telegram’da «ai» bilan tugaydigan bot username olsa bo‘ladimi?

Joriy hujjatlarga ko‘ra yo‘q, chunki oxirgi uch harf «bot» bo‘lishi talab qilinadi. «ai» so‘zini nomning boshiga yoki o‘rtasiga qo‘yish mumkin, masalan ai_helper_bot.

### BotFather «bot» bilan tugamaydigan nomni qabul qiladimi?

Amaldagi qoidaga ko‘ra qabul qilmasligi kutiladi. Bunday nom yuborilsa, API USERNAME_SUFFIX_MISSING xatosi bilan javob beradi.

### «Agent» yorlig‘i qachon chiqadi?

Telegram bunday yorliq haqida e’lon qilmagan, chiqish sanasi ham yo‘q. Hozir botlar chatda «bot» yorlig‘i bilan ko‘rsatiladi.

### Premium obunachilar bot uchun maxsus username ola oladimi?

Tekshirilgan rasmiy sahifalarning birortasida Premium bot username qoidalarini o‘zgartirishi aytilmagan. Bunday va’da bilan obuna sotayotganlarga ishonmang.

### Kanalda ko‘rgan «bot»ning username’i «bot» bilan tugamasa, bu soxtami?

Bunday akkaunt bot emas, oddiy foydalanuvchi bo‘lishi mumkin, shuning uchun ehtiyot bo‘ling. Unga kod, parol yoki karta ma’lumotini bermang.

### Agent yoki ai qo‘shimchali username’lar Fragment’da sotiladimi?

Bu tekshirilmagan. Shunday nom sotayotganini aytgan shaxslarga pul o‘tkazishdan oldin Telegram’ning rasmiy e’lonini qidiring.

### Business bot ishlatish uchun Premium kerakmi?

Bot API changelog’idagi yozuvga ko‘ra, akkauntni Business bot boshqarishi uchun Premium endi majburiy emas. Shartlar o‘zgarishi mumkin, shuning uchun ilovadagi joriy holatni ham ko‘rib chiqing.`,
    ru: `## Появились ли у username ботов новые окончания?

Пока официального подтверждения нет. В открытой документации Telegram нет сведений о новых окончаниях вроде agent, ai, game или app для username ботов.

Официальные тексты говорят обратное. В [анонсе Bot Platform](https://telegram.org/blog/bot-revolution) сказано, что все username ботов обязаны заканчиваться на «bot». Там же объяснена причина: благодаря этому окончанию ссылки на ботов легко распознать. То же требование закреплено и в технической документации.

Слух разошёлся из постов в Telegram-каналах. Пост в канале — не официальный источник. Тему из него взять можно, но сам факт нужно проверять на страницах Telegram.

Блог Telegram и страницы core.telegram.org проверены по состоянию на 6 ноября 2026 года. Telegram может изменить правила позже. Если выйдет новый анонс, воспользуйтесь порядком проверки ниже.

## Что пишут в каналах и что из этого не подтверждено?

В посте три отдельных утверждения. Их стоит разбирать по одному: даже если одно окажется правдой, остальные от этого правдой не станут.

| Утверждение | Что в официальной документации | Где проверено |
|---|---|---|
| К username ботов добавят окончания agent, ai, game, app и подобные | Не найдено. В документации сказано, что username должен заканчиваться на «bot» | [bots.checkUsername](https://core.telegram.org/method/bots.checkUsername) |
| Такие боты будут отображаться с меткой «Agent» | Не найдено. В документации указано, что в чате у ботов метка «bot» | [Bots: An introduction](https://core.telegram.org/bots) |
| Функция достанется подписчикам Premium без доплаты | В официальных источниках сведений нет | [Bot API changelog](https://core.telegram.org/bots/api-changelog) |

Есть ли эта функция в бета-версиях Telegram или в коде приложения, в этой статье не проверялось. Даже если что-то встречается в тестовой сборке, до официального релиза оно может измениться или не выйти вовсе.

Скриншот — тоже недостаточное доказательство. Отредактировать картинку интерфейса несложно. Изображение без ссылки на официальный источник считайте догадкой.

## Каким правилам сейчас подчиняется username бота?

По официальной документации [bots.checkUsername](https://core.telegram.org/method/bots.checkUsername), username бота должен соответствовать трём требованиям:

- допустимы только буквы, цифры и нижнее подчёркивание (_);
- в конце обязательно стоит «bot»;
- полный username занимает от 5 до 32 символов.

Дополнительные технические детали:

- Если окончания «bot» нет, API возвращает ошибку USERNAME_SUFFIX_MISSING. Её смысл: не хватает обязательного окончания bot.
- В документации по [Managed bots](https://core.telegram.org/api/bots/managed-bots) то же требование: «как и у всех ботов» username должен заканчиваться на «bot».
- Если имя бота предлагается через [deep link](https://core.telegram.org/api/links) и не заканчивается на «bot», приложение должно дописать «bot» в конец, прежде чем предложить его пользователю.

Вот как эти правила выглядят на примерах:

| Username | Статус | Причина |
|---|---|---|
| shop_helper_bot | Подходит | Буквы и подчёркивание, в конце «bot» |
| shophelperbot | Подходит | Только буквы, в конце «bot» |
| ai_helper_bot | Подходит | «ai» стоит в начале, а в конце всё равно «bot» |
| shop_helper | Не подходит | В конце нет «bot», API вернёт USERNAME_SUFFIX_MISSING |
| shop_helper_ai | Не подходит | В конце «ai», а требуется «bot» |
| shop-helper_bot | Не подходит | Дефис (-) не входит в число разрешённых символов |
| abot | Не подходит | 4 символа, нужно минимум 5 |

Важно: имя в заголовке чата и username с символом @ — разные вещи. Правило выше касается только username. Слово «agent» или «AI» на скриншоте может оказаться отображаемым именем, а не username. Поэтому всегда смотрите на строку, которая начинается с @.

## Какая метка у бота: «Agent» или «bot»?

Согласно официальному [введению в ботов](https://core.telegram.org/bots), у ботов нет статуса «last seen» (был в сети) и онлайн-статуса. Вместо них в чате отображается метка «bot».

Официального подтверждения метки «Agent» не найдено. Если увидите картинку с такой меткой, до официального анонса считайте её неподтверждённой.

Чтобы отличить бота от человека, проверьте две вещи:

- **Строка статуса.** У настоящего бота на месте онлайн-статуса написано «bot». Если аккаунт называет себя ботом или агентом, но у него отображается «в сети» или «был недавно», им, возможно, управляет человек.
- **Окончание username.** По действующему правилу username бота заканчивается на «bot». Аккаунт вроде @support_agent — не бот, а, скорее всего, обычный пользователь.

Не отправляйте такому «боту» код входа, пароль или данные карты. Типичные приёмы мошенников подробно разобраны в [руководстве по защите при покупке Premium](/blog/telegram-premium-firibgarlikdan-himoya).

## Откуда взялся слух: ИИ-агенты в Telegram

Слово «агент» в официальных текстах Telegram действительно встречается. Но оно описывает функцию, а не окончание username.

- В блоге Telegram, в [анонсе об ИИ-ботах](https://telegram.org/blog/ai-bot-revolution-11-new-features), сказано, что функция Bot-to-Bot позволяет автоматизировать рабочие процессы с помощью полностью автономных агентов.
- В документации [Bot Features](https://core.telegram.org/bots/features) приведён пример мультиагентного процесса: бот-координатор просит ботов-специалистов проверить, перевести, запланировать или обработать заказ, а затем объединяет результаты.
- Bot API продолжает развиваться: в [changelog](https://core.telegram.org/bots/api-changelog) есть запись Bot API 10.3 от 24 августа 2026 года. А записи об изменении правила для username в проверенных официальных источниках не нашлось.

Когда боты начали работать друг с другом, фраза «боты превращаются в агентов» разошлась быстро — это понятно. Но название функции и правило для username — разные вещи. Об агентах в документации речь идёт, а требование «bot» в username остаётся на месте.

Другие ИИ-новинки Telegram: [редактирование сообщений с AI Editor](/blog/telegram-ai-editor-2026) и [новости за август 2026 года](/blog/telegram-2026-avgust-yangiliklari).

## Связано ли это с Telegram Premium?

В посте говорится, что функцию могут дать подписчикам Premium без доплаты. Официальных сведений об этом нет.

Подтверждённая связь работает в другую сторону. По changelog Bot API, Business Bots теперь могут управлять аккаунтами пользователей и без подписки Telegram Premium. То есть в этой записи требование Premium не расширили, а наоборот, в одном случае убрали. Общие сведения о бизнес-функциях — в статье [Что такое Telegram Business](/blog/telegram-business-nima).

> Покупать Premium ради неподтверждённой функции не нужно. Что именно даёт подписка, смотрите в [полном списке возможностей Premium](/blog/telegram-premium-imkoniyatlari).

Если вам нужны подтверждённые возможности Premium, оформить его можно через [@premiumtg_uzbot](https://t.me/premiumtg_uzbot?start=site_premiumtg_blog) — по username, с оплатой в сумах. Актуальную цену и способы оплаты проверьте в боте перед покупкой.

## Как самостоятельно проверить такой слух?

Прочитав пост в канале, пройдите по шагам:

1. Проверьте, есть ли в посте официальная ссылка: на [блог Telegram](https://telegram.org/blog) или [core.telegram.org](https://core.telegram.org). Если ссылки нет, считайте сообщение догадкой.
2. Откройте [changelog Bot API](https://core.telegram.org/bots/api-changelog) и прочитайте последние записи. Они идут с датами, так что новое изменение найти несложно.
3. Сверьте требования к username на странице [bots.checkUsername](https://core.telegram.org/method/bots.checkUsername): изменилась ли строка «must end in bot».
4. Создайте нового бота в @BotFather и попробуйте ввести имя без «bot». По действующему правилу такое имя должно быть отклонено.
5. Не переводите деньги по предложениям вроде «бесплатный агент с Premium» или «продаём username-агенты». Продаются ли такие имена на [Fragment](https://fragment.com), не проверялось.

Похожий разбор: [заявления о подарках в ноябрьском обновлении](/blog/telegram-2026-noyabr-yangilanishi-sovgalar) проверены тем же способом.

## Что делать владельцу бота или разработчику сейчас?

- **Не спешите переименовывать бота.** По действующим официальным правилам «bot» в конце username обязателен. Для managed bots требование такое же.
- **Строите агентного бота — начинайте с официальных инструментов.** Bot-to-Bot и мультиагентные сценарии из документации [Bot Features](https://core.telegram.org/bots/features) работают без смены username.
- **Ставьте «ai» в начало или середину username.** Имя вида ai_helper_bot соответствует правилам. А окончание «bot» заменить нельзя.
- **Указывайте точный username бота открыто.** Если правильный username есть в канале, на сайте или в описании, пользователям проще отличить подделку.
- **Следите за официальными источниками.** Если новые окончания официально объявят, это появится в changelog и в блоге Telegram. Эта статья тоже может быть обновлена.

## Часто задаваемые вопросы

### Можно ли получить username бота, который заканчивается на «ai»?

По текущей документации — нет: последние три буквы обязательно должны быть «bot». Слово «ai» можно поставить в начало или середину имени, например ai_helper_bot.

### Примет ли BotFather имя без «bot» в конце?

По действующему правилу — скорее всего, нет. На такое имя API отвечает ошибкой USERNAME_SUFFIX_MISSING.

### Когда появится метка «Agent»?

Telegram такую метку не анонсировал, даты выхода тоже нет. Сейчас в чате боты отображаются с меткой «bot».

### Могут ли подписчики Premium получить особый username для бота?

Ни на одной из проверенных официальных страниц не сказано, что Premium меняет правила для username ботов. Не доверяйте тем, кто продаёт подписку с таким обещанием.

### Если username «бота» из канала не заканчивается на «bot», это подделка?

Такой аккаунт, вероятно, не бот, а обычный пользователь, так что будьте осторожны. Не передавайте ему код, пароль или данные карты.

### Продаются ли username с окончанием agent или ai на Fragment?

Это не проверялось. Прежде чем переводить деньги тем, кто предлагает такие имена, поищите официальный анонс Telegram.

### Нужен ли Premium, чтобы пользоваться бизнес-ботом?

Согласно записи в changelog Bot API, Premium больше не обязателен, чтобы Business-бот управлял аккаунтом. Условия могут измениться, поэтому сверьтесь и с текущим состоянием в приложении.`,
  },
};
