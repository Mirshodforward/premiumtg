// Avtoblogyoz yasagan maqola (2026-11-05). Niyat: NFT sovg'a egasi yoki xaridori Telegram yangilanishidan keyin sovg'a egasining profili nega ko'rinmay qolganini va buni qanday sozlashni «telegram sovg'a egasi yashirin» kabi so'zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/gifts
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-nft-sovga-egasi-yashirin",
  date: "2026-11-05",
  reviewed: "2026-11-05",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegram NFT sovg‘a egasi nega yashirin? Ko‘rinishni sozlash yo‘llari", ru: "Почему владелец NFT-подарка в Telegram скрыт? Как настроить видимость" },
  excerpt: { uz: `Egalar majburan yashirilgani faqat kanal kuzatuvi, rasmiy hujjatda tasdiqlanmagan. Rasman ma’lumi shu: sovg‘ani profilda ko‘rsatishni oluvchi o‘zi tanlaydi va buni maxfiylik sozlamalarida boshqaradi.`, ru: `Принудительное скрытие владельцев — пока лишь наблюдение каналов, в официальной документации это не подтверждено. Известно другое: показывать ли подарок в профиле, решает получатель.` },
  keywords: ["telegram nft sovga egasini yashirish","telegram sovg'a egasi yashirin","telegram sovg'ani profildan yashirish","telegram gift egasi ko'rinmayapti","nft sovg'a egasini qanday topish","telegram sovg'alar maxfiylik sozlamasi","скрыть владельца подарка telegram","владелец nft подарка скрыт","как скрыть подарки в профиле telegram","анонимность холдеров подарков telegram","telegram подарки настройки приватности"],
  related: ["telegram-nft-sovgalar","telegram-gifts-sovgalar","telegram-premium-firibgarlikdan-himoya","username-berish-xavfsizmi"],
  sources: [{"url":"https://core.telegram.org/api/gifts","title":"Telegram Gifts"}],
  content: {
    uz: `## Telegram NFT sovg‘a egasini hamma uchun yashirdimi?

Bu da’vo hozircha Telegram kanallaridagi kuzatuvga asoslanadi. Rasmiy hujjatda kolleksion sovg‘a egalari majburan yashirilgani tasdiqlanmagan. Yangilanishning sanasi va versiyasi ham noma’lum.

Mavzu sovg‘alar haqidagi bir kanal postidan chiqqan. Unda yirik egalar («kitlar») yangilanishdan norozi ekani aytiladi. Post muallifining yozishicha, sovg‘a sahifasida egasini topish qiyinlashgan, xarid takliflari esa deyarli yo‘qolgan. Bu muallif va obunachilarning kuzatuvi, rasmiy statistika emas.

Rasmiy [Telegram Gifts hujjatida](https://core.telegram.org/api/gifts) boshqa narsa aniq yozilgan. Sovg‘ani profilda ko‘rsatish yoki ko‘rsatmaslikni uni olgan foydalanuvchi hal qiladi. Ya’ni ko‘rinish masalasida tanlov oluvchida.

> Sovg‘angiz qanday ko‘rinayotganini ilovaning o‘zida tekshiring. O‘zgarishlarni [Telegram blogi](https://telegram.org/blog) va rasmiy hujjat orqali kuzatib boring. Kanal postlariga tayanib sozlamalarni shoshilib o‘zgartirmang.

## Rasmiy hujjatda sovg‘a ko‘rinishi haqida nima yozilgan?

Telegram’ning dasturchilar uchun hujjatida sovg‘alar ko‘rinishiga oid bir nechta qoida bor. Ular ilovadagi tugmalar ortida qanday mantiq turganini tushuntiradi.

| Qoida | Amalda nimani anglatadi |
|---|---|
| Oluvchi sovg‘ani profilida ko‘rsatishi yoki Telegram Stars’ga aylantirishi mumkin | Sovg‘a bilan nima qilishni oluvchi tanlaydi |
| Profilda ko‘rsatilgan sovg‘ani barcha foydalanuvchilar ko‘ra oladi | Profilga chiqarilgan sovg‘a ochiq ma’lumotga aylanadi |
| Sovg‘alar «saqlangan» va «saqlanmagan» bo‘ladi | Saqlangani profilga mahkamlangan, saqlanmagani mahkamlanmagan |
| Olingan sovg‘a maxfiylik sozlamasiga qarab profilda avtomatik ko‘rsatilishi mumkin | Sozlamaga qarab sovg‘a siz bosmasdan ham profilga chiqishi mumkin |
| Ayrim sovg‘a turlarini qabul qilishni taqiqlash mumkin | Istamagan sovg‘a turi sizga kelmaydi |

Bu qoidalar sovg‘alarning umumiy ko‘rinishi haqida. Kolleksion sovg‘a sahifasida egasi haqida qaysi ma’lumot chiqishi va u qachon yashirilishi bu maqolada tekshirilmadi, chunki rasmiy sahifadagi tegishli tavsif to‘liq o‘qilmadi.

Oddiy sovg‘a bilan NFT sovg‘a qanday farq qilishi [NFT sovg‘alar nima](/blog/telegram-nft-sovgalar) maqolasida batafsil yozilgan.

## Yuboruvchi, oluvchi va ega: kim kimni ko‘radi?

Sovg‘a atrofida uch xil tomon bor: yuboruvchi, oluvchi va profilga qarayotgan boshqa foydalanuvchilar. Har biri turlicha ma’lumotni ko‘radi.

| Holat | Kim nimani ko‘radi | Nima ta’sir qiladi |
|---|---|---|
| Yuboruvchi ismini yashirgan | Boshqalar yuboruvchi ismini ko‘rmaydi, oluvchi esa kim yuborganini ko‘radi | Yuborishdagi ismni yashirish tanlovi |
| Oluvchi sovg‘ani profilga chiqargan | Sovg‘ani barcha foydalanuvchilar ko‘radi | Oluvchining qarori yoki avtomatik saqlash sozlamasi |
| Oluvchi sovg‘ani profilga chiqarmagan | Sovg‘a profilga mahkamlanmagan, «saqlanmagan» holatda | Oluvchining qarori |
| NFT sovg‘a sahifasidagi ega | Bu maqolada tasdiqlanmagan | Rasmiy matnda tekshirilmadi |

Yuboruvchi ismini yashirish to‘liq anonimlik degani emas. Hujjatga ko‘ra, sovg‘ani olgan odam baribir kim yuborganini ko‘radi. Yashirish faqat profilga qarayotgan boshqalar uchun ishlaydi.

Oluvchi tomonda mantiq oddiy. Sovg‘ani profilga chiqarsangiz, uni hamma ko‘radi. Chiqarmasangiz, u profil sahifangizda mahkamlanmaydi.

Ega haqidagi savol esa ochiq qolmoqda. Kanallarda egasi ko‘rinmay qolgani aytilmoqda, lekin buning texnik sababi va sharti rasmiy matnda tasdiqlanmadi.

## Sovg‘am profilda ko‘rinmasa, qanday oddiy sabablar bo‘lishi mumkin?

Hamma narsani yangilanishga bog‘lashdan oldin hujjatda tasdiqlangan oddiy sabablarni tekshirib chiqing. Ko‘pincha javob shu yerda bo‘ladi.

- **Sovg‘a «saqlanmagan».** Sovg‘a sizda bor, lekin profilga mahkamlanmagan. Uni boshqalar profilingizda ko‘rmaydi.
- **Avtomatik saqlash sozlamasi.** Maxfiylik sozlamasiga qarab yangi sovg‘alar profilga o‘z-o‘zidan chiqadi yoki chiqmaydi. Sozlamani yaqinda o‘zgartirgan bo‘lsangiz, natija ham o‘zgaradi.
- **Yuboruvchi ismini yashirgan.** Sovg‘a profilda turibdi, lekin unda kim yuborgani boshqalarga ko‘rinmaydi. Buni ega yashirilgani bilan adashtirish oson.
- **Sovg‘a Stars’ga aylantirilgan.** Hujjatda bu profilda ko‘rsatishga muqobil tanlov sifatida keltirilgan. Shunday qilgan bo‘lsangiz, sovg‘aning holati o‘zgarganini hisobga oling.

Agar bularning hech biri to‘g‘ri kelmasa va gap aynan kolleksion sovg‘a sahifasidagi ega haqida bo‘lsa, sababni hozircha rasmiy manba bilan tushuntirib bo‘lmaydi.

## Sovg‘alaringiz ko‘rinishini qanday tekshirish va sozlash mumkin?

Quyidagi qadamlar hujjatdagi tasdiqlangan imkoniyatlarga tayanadi. Menyu va band nomlari ilova versiyasi va qurilmaga qarab farq qilishi mumkin.

1. Profilingizni oching va sovg‘alar bo‘limiga kiring. Qaysi sovg‘a profilga mahkamlangan, qaysi biri yo‘qligini ko‘rib chiqing.
2. Telegram sozlamalarida maxfiylik bo‘limini oching. Sovg‘alarni avtomatik saqlash yoki profilda ko‘rsatish bilan bog‘liq bandni qidiring. Yangi sovg‘alar o‘z-o‘zidan profilga chiqishi shu sozlamaga bog‘liq.
3. Sovg‘ani tanlang va uni profilga chiqarish yoki yashirish amalini bajaring. Profilga chiqargan sovg‘angiz hamma uchun ko‘rinishini yodda tuting.
4. Ayrim turdagi sovg‘alar umuman kelmasligini istasangiz, maxfiylik sozlamalarida sovg‘a turlarini cheklash bandini toping va keraksizlarini o‘chiring.
5. Do‘stingizdan profilingizga qarab berishni so‘rang yoki boshqa akkauntdan tekshiring. Shunda boshqalar aslida nimani ko‘rayotganini bilasiz.

> Kolleksion sovg‘a sahifasida egani qayta ko‘rsatadigan alohida sozlama bor-yo‘qligi bu maqolada tasdiqlanmagan. Bunday tugmani ko‘rsangiz, uning nima qilishini ilovadagi izohdan o‘qing.

## Ega ko‘rinmasa, NFT sovg‘ani sotish va xarid taklifi nima bo‘ladi?

Kanal postidagi asosiy shikoyat aynan shu haqida. Post muallifining fikricha, ilgari noyob sovg‘a egasiga to‘g‘ridan-to‘g‘ri yozib taklif berish oson bo‘lgan, endi esa egasini topish qiyinlashgan va takliflar keskin kamaygan.

Bu gaplar rasmiy manbalarda tekshirilmadi. Takliflar soni haqida rasmiy raqam ham topilmadi.

Postda yana bir kuzatuv bor: ba’zi egalar taklif olish uchun username’ini profil ismiga yozib qo‘ymoqda. Bu ham faqat kanal kuzatuvi.

Bunday yo‘lning o‘z narxi bor. Ismdagi aloqa ma’lumotini xaridor ham, firibgar ham birdek ko‘radi. O‘zingizni qimmat sovg‘a egasi sifatida ochiq ko‘rsatish sizni soxta takliflar uchun nishonga aylantirishi mumkin.

Fragment’da sovg‘a egasi qanday ko‘rinishi yoki anonimligi haqida ham rasmiy ma’lumot topilmadi. Sotish bo‘yicha qaror qilishdan oldin tegishli platformaning o‘z sahifalarini o‘qing.

Sovg‘alar qanday turlarga bo‘linishi va Stars’da qanday baholanishi [Telegram sovg‘alari (Gifts)](/blog/telegram-gifts-sovgalar) maqolasida, Stars’ning o‘zi esa [Telegram Stars nima](/blog/telegram-stars-nima) maqolasida tushuntirilgan.

## Egasini yashirish firibgarlikni kamaytiradimi?

Kanal posti yashirishni firibgarlikka qarshi chora deb talqin qiladi. Bu post muallifining talqini, Telegram bayonoti emas. Sabab qanday bo‘lmasin, qimmat sovg‘a egalariga yozadigan firibgarlarning usullari ma’lum:

- **Soxta xaridor.** Katta summa va’da qiladi, keyin «tekshiruv» bahonasida biror amal bajarishni so‘raydi.
- **Kod so‘rash.** Telegram’dan kelgan login kodi yoki 2FA parolni «tasdiqlash uchun» so‘raydi. Bu akkauntni egallash urinishi.
- **Hamyon ma’lumotlari.** Kripto hamyonning maxfiy so‘zlari yoki kalitini so‘raydi. Ularni bergan odam hamyonni yo‘qotadi.
- **Oldindan to‘lov.** «Komissiya» yoki «sug‘urta» uchun avval pul o‘tkazishni talab qiladi.
- **Soxta havola.** Sovg‘ani «baholash» yoki «o‘tkazish» uchun begona saytga kirishni taklif qiladi.

Username ochiq ma’lumot, uni bilgan odam akkauntingizga kira olmaydi. Xavfli narsa — SMS-kod, login kodi va 2FA parol. Bu farq [username berish xavfsizmi](/blog/username-berish-xavfsizmi) maqolasida batafsil yozilgan.

Umumiy himoya qoidalari Premium xaridi misolida [firibgarlardan qanday himoyalanish](/blog/telegram-premium-firibgarlikdan-himoya) maqolasida berilgan. Ular sovg‘a savdosiga ham to‘liq mos keladi.

## Qaysi da’volar tasdiqlangan, qaysilari yo‘q?

Jadval Telegram rasmiy hujjatidagi faktlarni kanal kuzatuvidan ajratadi.

| Da’vo | Holati | Manba |
|---|---|---|
| Sovg‘ani profilda ko‘rsatish yoki Stars’ga aylantirish mumkin | Tasdiqlangan | Telegram Gifts hujjati |
| Profildagi sovg‘ani hamma ko‘radi | Tasdiqlangan | Telegram Gifts hujjati |
| Yuboruvchi ismini yashira oladi, oluvchi baribir ko‘radi | Tasdiqlangan | Telegram Gifts hujjati |
| Sovg‘a maxfiylik sozlamasiga qarab avtomatik profilga chiqishi mumkin | Tasdiqlangan | Telegram Gifts hujjati |
| Saqlangan va saqlanmagan sovg‘alar bor | Tasdiqlangan | Telegram Gifts hujjati |
| Ayrim sovg‘a turlarini taqiqlash mumkin | Tasdiqlangan | Telegram Gifts hujjati |
| Barcha egalar majburan yashirildi | Tasdiqlanmagan | Kanal posti |
| Yangilanish sanasi va versiyasi | Noma’lum | — |
| Egani qayta ko‘rsatadigan sozlama | Topilmadi | — |
| Sovg‘ani TON’dan profilga bog‘lash | Tasdiqlanmagan | — |
| Fragment’da ega ko‘rinishi | Topilmadi | — |
| Takliflar kamaygani, username ismga yozilayotgani | Faqat kanal kuzatuvi | Kanal posti |

Amalda qiladigan ish shu: sovg‘alaringiz ko‘rinishini profil va maxfiylik sozlamalarida o‘zingiz tekshiring. Kolleksion sovg‘alar bo‘yicha o‘zgarishlarni [Telegram blogi](https://telegram.org/blog) va [rasmiy API hujjati](https://core.telegram.org/api/gifts) orqali kuzating. Kanal postlarini mavzu bo‘yicha signal deb qabul qiling, yakuniy fakt deb emas.

## Ko‘p so‘raladigan savollar

### Nega NFT sovg‘a sahifasida egasining ismi chiqmayapti?

Kanallarda buni yangi yangilanish bilan bog‘lashmoqda. Biroq egalar majburan yashirilgani rasmiy hujjatda tasdiqlanmagan. Avval sovg‘a profilga mahkamlanganini va maxfiylik sozlamalarini tekshiring.

### Sovg‘amni profilimdan qanday yashiraman?

Profilingizdagi sovg‘alar ro‘yxatidan kerakli sovg‘ani oching va uni profildan olib tashlang. Rasmiy hujjatga ko‘ra, ko‘rsatish-ko‘rsatmaslik oluvchining ixtiyorida.

### Yuboruvchi ismini yashirsa, men kim yuborganini bilamanmi?

Ha, bilasiz. Yashirilgan ism faqat profilingizni ko‘rayotgan boshqa odamlarga ko‘rinmaydi.

### Sovg‘alarim profilga o‘z-o‘zidan chiqmasligi uchun nima qilish kerak?

Maxfiylik bo‘limida sovg‘alarni avtomatik saqlashga oid bandni toping va o‘zingizga mos variantni belgilang. Band nomi ilova versiyasiga qarab farq qilishi mumkin.

### Ma’lum turdagi sovg‘alarni qabul qilmaslik mumkinmi?

Mumkin. Telegram maxfiylik sozlamalarida ayrim sovg‘a turlarini qabul qilishni taqiqlash imkonini beradi.

### Xaridor menga qanday yetib keladi, username’ni ismga yozish xavflimi?

Egalar username’ni ismga yozayotgani faqat kanal kuzatuvi. Username’ning o‘zi akkauntga kirishga yo‘l ochmaydi, lekin ochiq aloqa firibgarlarni ham jalb qiladi. Hech kimga kod, parol yoki hamyon kalitini bermang.

### Sovg‘ani Stars’ga aylantirsam, u profildan yo‘qoladimi?

Rasmiy hujjatda Stars’ga aylantirish profilda ko‘rsatishga muqobil tanlov sifatida berilgan. Natija qanday bo‘lishini va kolleksion sovg‘alarda bu tanlov bor-yo‘qligini amalni tasdiqlashdan oldin ilovadagi izohda o‘qing.`,
    ru: `## Telegram скрыл владельцев NFT-подарков от всех?

Пока это утверждение основано на наблюдениях в Telegram-каналах. В официальной документации принудительное скрытие владельцев коллекционных подарков не подтверждено. Дата и версия обновления тоже неизвестны.

Тема пошла от поста в одном из каналов о подарках. В нём говорится, что крупные владельцы («киты») недовольны обновлением. По словам автора, найти владельца на странице подарка стало сложнее, а предложения о покупке почти пропали. Это наблюдение автора и подписчиков, а не официальная статистика.

В официальной [документации Telegram Gifts](https://core.telegram.org/api/gifts) прямо написано другое. Показывать подарок в профиле или нет, решает пользователь, который его получил. То есть выбор в вопросе видимости остаётся за получателем.

> Проверяйте, как выглядит ваш подарок, в самом приложении. Следите за изменениями в [блоге Telegram](https://telegram.org/blog) и официальной документации. Не меняйте настройки в спешке только из-за постов в каналах.

## Что о видимости подарков сказано в официальной документации?

В документации Telegram для разработчиков есть несколько правил о видимости подарков. Они объясняют, какая логика стоит за кнопками в приложении.

| Правило | Что это значит на практике |
|---|---|
| Получатель может показать подарок в профиле или обменять его на Telegram Stars | Что делать с подарком, выбирает получатель |
| Подарок, показанный в профиле, видят все пользователи | Подарок в профиле становится открытой информацией |
| Подарки бывают «сохранёнными» и «несохранёнными» | Сохранённый закреплён в профиле, несохранённый — нет |
| Полученный подарок может автоматически появиться в профиле в зависимости от настроек конфиденциальности | В зависимости от настройки подарок может попасть в профиль без вашего нажатия |
| Можно запретить получение отдельных типов подарков | Нежелательный тип подарка до вас не дойдёт |

Эти правила касаются видимости подарков в целом. Какие данные о владельце показываются на странице коллекционного подарка и когда они скрываются, в этой статье не проверено: соответствующее описание на официальной странице не удалось прочитать полностью.

Чем обычный подарок отличается от NFT-подарка, подробно разобрано в статье [что такое NFT-подарки](/blog/telegram-nft-sovgalar).

## Отправитель, получатель и владелец: кто кого видит?

Вокруг подарка три стороны: отправитель, получатель и другие пользователи, которые смотрят профиль. Каждый из них видит разное.

| Ситуация | Кто что видит | От чего зависит |
|---|---|---|
| Отправитель скрыл имя | Другие не видят имя отправителя, а получатель видит, кто прислал | Выбор скрыть имя при отправке |
| Получатель вывел подарок в профиль | Подарок видят все пользователи | Решение получателя или настройка автосохранения |
| Получатель не вывел подарок в профиль | Подарок не закреплён в профиле, находится в «несохранённых» | Решение получателя |
| Владелец на странице NFT-подарка | В этой статье не подтверждено | В официальном тексте не проверено |

Скрытое имя отправителя — это не полная анонимность. По документации, получатель всё равно видит, кто отправил подарок. Скрытие работает только для других людей, которые смотрят профиль.

Со стороны получателя логика простая. Вывели подарок в профиль — его видят все. Не вывели — он не закреплён на странице профиля.

А вот вопрос о владельце остаётся открытым. В каналах пишут, что владелец перестал отображаться, но техническая причина и условия этого в официальном тексте не подтверждены.

## Подарок не виден в профиле: какие простые причины бывают?

Прежде чем винить обновление, проверьте простые причины, подтверждённые документацией. Часто ответ находится именно здесь.

- **Подарок «несохранённый».** Он у вас есть, но не закреплён в профиле. Другие не видят его на вашей странице.
- **Настройка автосохранения.** В зависимости от настроек конфиденциальности новые подарки сами появляются в профиле или нет. Если вы недавно меняли эту настройку, изменится и результат.
- **Отправитель скрыл имя.** Подарок в профиле есть, но кто его прислал, другим не видно. Это легко спутать со скрытым владельцем.
- **Подарок обменян на Stars.** В документации это указано как альтернатива показу в профиле. Если вы так сделали, учтите, что статус подарка изменился.

Если ни одна из причин не подходит и речь именно о владельце на странице коллекционного подарка, объяснить это официальным источником пока нельзя.

## Как проверить и настроить видимость своих подарков?

Шаги ниже опираются на возможности, подтверждённые документацией. Названия меню и пунктов могут отличаться в зависимости от версии приложения и устройства.

1. Откройте свой профиль и перейдите в раздел подарков. Посмотрите, какие подарки закреплены в профиле, а какие нет.
2. В настройках Telegram откройте раздел конфиденциальности. Найдите пункт, связанный с автосохранением подарков или их показом в профиле. От него зависит, будут ли новые подарки появляться в профиле сами.
3. Выберите подарок и выведите его в профиль или скройте. Помните: подарок в профиле виден всем.
4. Если не хотите получать подарки определённых типов, найдите в настройках конфиденциальности пункт об ограничении типов подарков и отключите ненужные.
5. Попросите друга открыть ваш профиль или проверьте его с другого аккаунта. Так вы узнаете, что на самом деле видят другие.

> Есть ли отдельная настройка, которая снова показывает владельца на странице коллекционного подарка, в этой статье не подтверждено. Если увидите такую кнопку, прочитайте пояснение к ней в приложении.

## Что будет с продажей и предложениями о покупке, если владелец не виден?

Именно на это жалуется автор поста в канале. По его мнению, раньше владельцу редкого подарка было легко написать напрямую и сделать предложение, а теперь найти владельца сложнее, и предложений стало резко меньше.

Эти слова в официальных источниках не проверены. Официальных цифр о количестве предложений тоже не нашлось.

В посте есть ещё одно наблюдение: некоторые владельцы пишут свой username в имени профиля, чтобы получать предложения. Это тоже лишь наблюдение канала.

У такого способа есть цена. Контакт в имени одинаково видят и покупатель, и мошенник. Открыто показывая себя владельцем дорогого подарка, вы можете стать мишенью для фальшивых предложений.

Официальной информации о том, как отображается владелец подарка на Fragment и анонимен ли он там, тоже не найдено. Перед решением о продаже прочитайте страницы самой площадки.

На какие виды делятся подарки и как они оцениваются в Stars, рассказано в статье [подарки Telegram (Gifts)](/blog/telegram-gifts-sovgalar), а про сами Stars — в статье [что такое Telegram Stars](/blog/telegram-stars-nima).

## Снижает ли скрытие владельца мошенничество?

Пост в канале трактует скрытие как меру против мошенничества. Это интерпретация автора, а не заявление Telegram. Какой бы ни была причина, приёмы мошенников, которые пишут владельцам дорогих подарков, известны:

- **Фальшивый покупатель.** Обещает крупную сумму, а потом под предлогом «проверки» просит выполнить какое-то действие.
- **Запрос кода.** Просит код входа из Telegram или пароль 2FA «для подтверждения». Это попытка захватить аккаунт.
- **Данные кошелька.** Просит секретную фразу или ключ криптокошелька. Тот, кто их отдал, теряет кошелёк.
- **Предоплата.** Требует сначала перевести деньги за «комиссию» или «страховку».
- **Фальшивая ссылка.** Предлагает зайти на сторонний сайт, чтобы «оценить» или «передать» подарок.

Username — открытая информация, зная его, войти в ваш аккаунт нельзя. Опасны SMS-код, код входа и пароль 2FA. Эта разница подробно описана в статье [безопасно ли давать username](/blog/username-berish-xavfsizmi).

Общие правила защиты на примере покупки Premium собраны в статье [как защититься от мошенников](/blog/telegram-premium-firibgarlikdan-himoya). Они полностью подходят и для торговли подарками.

## Какие утверждения подтверждены, а какие нет?

Таблица отделяет факты из официальной документации Telegram от наблюдений каналов.

| Утверждение | Статус | Источник |
|---|---|---|
| Подарок можно показать в профиле или обменять на Stars | Подтверждено | Документация Telegram Gifts |
| Подарок в профиле видят все | Подтверждено | Документация Telegram Gifts |
| Отправитель может скрыть имя, получатель всё равно его видит | Подтверждено | Документация Telegram Gifts |
| Подарок может автоматически появиться в профиле в зависимости от настроек конфиденциальности | Подтверждено | Документация Telegram Gifts |
| Есть сохранённые и несохранённые подарки | Подтверждено | Документация Telegram Gifts |
| Отдельные типы подарков можно запретить | Подтверждено | Документация Telegram Gifts |
| Все владельцы принудительно скрыты | Не подтверждено | Пост в канале |
| Дата и версия обновления | Неизвестно | — |
| Настройка, снова показывающая владельца | Не найдена | — |
| Привязка подарка из TON к профилю | Не подтверждено | — |
| Отображение владельца на Fragment | Не найдено | — |
| Предложений стало меньше, username пишут в имени | Только наблюдение канала | Пост в канале |

На практике остаётся одно: самостоятельно проверить видимость своих подарков в профиле и настройках конфиденциальности. За изменениями по коллекционным подаркам следите в [блоге Telegram](https://telegram.org/blog) и [официальной документации API](https://core.telegram.org/api/gifts). Посты каналов воспринимайте как сигнал по теме, а не как окончательный факт.

## Часто задаваемые вопросы

### Почему на странице NFT-подарка не отображается имя владельца?

В каналах это связывают с новым обновлением, но принудительное скрытие владельцев официальной документацией не подтверждено. Для начала проверьте, закреплён ли подарок в профиле, и посмотрите настройки конфиденциальности.

### Как убрать подарок из своего профиля?

Откройте нужный подарок в списке подарков профиля и уберите его из профиля. По официальной документации показывать его или нет — на усмотрение получателя.

### Если отправитель скрыл имя, я узнаю, кто прислал подарок?

Да, узнаете. Скрытое имя не видят только другие люди, которые смотрят ваш профиль.

### Что сделать, чтобы подарки не появлялись в профиле сами?

В разделе конфиденциальности найдите пункт об автосохранении подарков и выберите подходящий вариант. Название пункта зависит от версии приложения.

### Можно ли не принимать подарки определённого типа?

Можно. В настройках конфиденциальности Telegram позволяет запретить получение отдельных типов подарков.

### Как меня найдёт покупатель и опасно ли писать username в имени?

То, что владельцы пишут username в имени, — лишь наблюдение канала. Сам username не даёт доступа к аккаунту, но открытый контакт привлекает и мошенников. Никому не сообщайте код, пароль или ключ кошелька.

### Если обменять подарок на Stars, он исчезнет из профиля?

В официальной документации обмен на Stars указан как альтернатива показу в профиле. Каким будет результат и доступен ли такой обмен для коллекционных подарков, прочитайте в пояснении приложения до подтверждения действия.`,
  },
};
