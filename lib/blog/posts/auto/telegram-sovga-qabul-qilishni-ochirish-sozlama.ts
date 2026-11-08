// Avtoblogyoz yasagan maqola (2026-11-08). Niyat: O‘zbekistondagi Telegram foydalanuvchisi «telegramda sovg‘a qabul qilishni o‘chirish» deb qidirib, kimlar va qaysi turdagi sovg‘alarni yubora olishini maxfiylik sozlamalarida qanday cheklash yoki qayta yoqishni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/privacy
//   https://core.telegram.org/constructor/globalPrivacySettings
//   https://core.telegram.org/api/gifts
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-sovga-qabul-qilishni-ochirish-sozlama",
  date: "2026-11-08",
  reviewed: "2026-11-08",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegramda sovg‘a qabul qilishni qanday o‘chirish va qayta yoqish mumkin?", ru: "Как отключить и снова включить получение подарков в Telegram?" },
  excerpt: { uz: `Ha, Telegram maxfiylik sozlamalarida muayyan turdagi sovg‘alarni qabul qilishni taqiqlash mumkin. Cheklovni olib tashlasangiz, bu turdagi sovg‘alarni yana qabul qila olasiz.`, ru: `Да, в настройках конфиденциальности Telegram можно запретить получение подарков определённых типов. Если снять ограничение, такие подарки снова будут приходить.` },
  keywords: ["telegramda sovg‘a qabul qilishni o‘chirish","telegram sovg‘alarni o‘chirish","telegram gifts sozlamalari","telegram sovg‘a maxfiylik sozlamasi","telegram sovg‘a yuborishni cheklash","telegram sovg‘ani stars’ga aylantirish","как отключить подарки в телеграм","запретить отправлять подарки телеграм","настройки конфиденциальности подарки telegram","telegram подарки скрыть","как включить подарки в телеграм"],
  related: ["telegram-nft-sovga-egasi-yashirin","telegram-gifts-sovgalar","telegram-nft-sovgalar","telegram-stars-nima"],
  sources: [{"url":"https://core.telegram.org/api/privacy","title":"Privacy settings"},{"url":"https://core.telegram.org/constructor/globalPrivacySettings","title":"globalPrivacySettings"},{"url":"https://core.telegram.org/api/gifts","title":"Telegram Gifts"}],
  content: {
    uz: `## Telegramda sovg‘a qabul qilishni o‘chirib bo‘ladimi?

Ha. Telegram muayyan turdagi sovg‘alarni qabul qilishni taqiqlash imkonini beradi. Bu [Telegram sovg‘alari haqidagi hujjatda](https://core.telegram.org/api/gifts) va [umumiy maxfiylik sozlamalari tavsifida](https://core.telegram.org/constructor/globalPrivacySettings) yozilgan.

Bu alohida xizmat emas, maxfiylik tizimining bir qismi. Telegram foydalanuvchiga [maxfiylik sozlamalarini](https://core.telegram.org/api/privacy) batafsil belgilash imkonini beradi: kim siz bilan qanday muloqot qila olishini o‘zingiz tanlaysiz. Sovg‘alar ham shu qatorga kiradi.

Sozlama bir martalik emas. Hujjatda u sovg‘a turlarini qabul qilishni taqiqlaydigan sozlama sifatida berilgan, shuning uchun cheklovni qo‘yishingiz ham, keyin olib tashlashingiz ham mumkin.

Sovg‘alarning o‘zi nima ekanini bilmasangiz, avval [Telegram sovg‘alari (Gifts) nima](/blog/telegram-gifts-sovgalar) maqolasini o‘qing.

## Sovg‘a sozlamasini qanday topish va o‘zgartirish mumkin?

> Ilovadagi aniq menyu yo‘li va band nomlari bu maqolada tasdiqlanmagan. Ular ilova versiyasi va platformaga qarab farq qilishi mumkin. Quyidagi qadamlar umumiy yo‘nalish beradi.

1. Telegram’ni so‘nggi versiyaga yangilang.
2. Ilovada Sozlamalarni oching.
3. Maxfiylik bo‘limiga kiring.
4. Sovg‘alarga oid bandni qidiring.
5. Qabul qilmoqchi bo‘lmagan sovg‘a turlarini belgilang yoki, aksincha, belgini olib tashlang.
6. Bo‘limdan chiqishdan oldin tanlovingiz saqlanganini tekshiring.
7. Ishonch hosil qilmoqchi bo‘lsangiz, yaqin do‘stingizdan sizga sovg‘a yuborish oynasini ochib ko‘rishini so‘rang.

Qayta yoqish uchun xuddi shu bandga qaytib, cheklovni olib tashlaysiz.

Telefon va kompyuterda alohida sozlash kerak emas. [Telegram hujjatiga](https://core.telegram.org/api/privacy) ko‘ra, maxfiylik sozlamasi o‘zgarganda yangilanish akkauntning hozir kirib turgan barcha seanslariga yuboriladi.

Band umuman ko‘rinmasa, avval ilovani yangilang. Boshqa ehtimoliy sabablar pastroqdagi «Sovg‘alar umuman ko‘rinmasa» bo‘limida.

## Qaysi sovg‘alarni cheklash mumkin va nima hali noma’lum?

Rasmiy hujjatlardan ba’zi narsalar aniq, ba’zilari ochiq qoladi. Ularni aralashtirmaslik uchun alohida ko‘rsatamiz.

| Rasman tasdiqlangan | Tasdiqlanmagan |
|---|---|
| Muayyan sovg‘a turlarini qabul qilmaslik mumkin | Aynan qaysi turlarni cheklash mumkinligi |
| Bu cheklov boshqa foydalanuvchilarga ko‘rinadi | «Kim yubora oladi» (kontaktlar, hamma, hech kim) tanlovi bor-yo‘qligi |
| Maxfiylik sozlamalari batafsil belgilanadi | Cheklash uchun Premium kerak-kerakmasligi |
| O‘zgarish barcha faol seanslarga yuboriladi | Avval olingan sovg‘alarga nima bo‘lishi |

> O‘ng ustundagi savollarga javobni ilova ekranida o‘zingiz tekshiring. Bu maqolada ular haqida taxmin qilmaymiz.

## Sovg‘alarni cheklaganimni boshqalar ko‘radimi?

Ha. [Telegram Gifts hujjatiga](https://core.telegram.org/api/gifts) ko‘ra, qaysi sovg‘a turlarini qabul qilmasligingiz boshqa foydalanuvchilarga ko‘rinadi. Amalda yuboruvchi siz bu turdagi sovg‘ani olmasligingizni oldindan bilishi mumkin va behuda urinmaydi.

Shaxsiy chatdagi sovg‘a tugmasi ham sozlamaga bog‘liq. Hujjatga ko‘ra, ikkala tomonda tegishli sozlama yoqilgan bo‘lsa, shaxsiy chatda matn maydonida sovg‘a tugmasi doim ko‘rinishi kerak.

Ilova ishlab chiquvchilari uchun ko‘rsatmada yana bir talab bor: sovg‘a yuborish oynasi sozlamalardagi «Send a Gift» bandi orqali har doim ochilishi kerak. Bu dasturchilarga berilgan qoida, rasmiy ilova menyusining tavsifi emas. Tugma bosilganda aynan qaysi oyna ochilishi rasmiy manbada tasdiqlanmagan.

## To‘liq o‘chirmasdan sovg‘alarni qanday boshqarish mumkin?

Sovg‘ani butunlay rad etish har doim ham shart emas. Ba’zan uni profilda ko‘rsatmaslik yoki Stars’ga aylantirish yetarli.

| Usul | Nima beradi | E’tibor bering |
|---|---|---|
| Sovg‘a turini cheklash | Bu turdagi sovg‘a sizga kelmaydi | Cheklov boshqalarga ko‘rinadi |
| Profilda ko‘rsatish yoki ko‘rsatmaslik | Qabul qilingan sovg‘a profilda chiqadimi, o‘zingiz hal qilasiz | Avtomatik ko‘rsatish maxfiylik sozlamasiga bog‘liq |
| Stars’ga aylantirish | Sovg‘a o‘rniga Telegram Stars olasiz | Faqat belgilangan muddat ichida, sotib olingan narxdan kam Stars qaytadi |

Stars’ga aylantirishda yana bir istisno bor: kolleksion sovg‘alar kim oshdi savdosida olingan sovg‘alarni Stars’ga aylantirib bo‘lmaydi. Bu ham [rasmiy hujjatda](https://core.telegram.org/api/gifts) yozilgan.

Profildagi ko‘rinish haqida batafsil: [NFT sovg‘a egasi nega yashirin](/blog/telegram-nft-sovga-egasi-yashirin). Stars qayerda ishlatilishi haqida: [Telegram Stars nima](/blog/telegram-stars-nima).

## Qachon sovg‘alarni cheklash o‘rinli?

Cheklov hamma uchun shart emas. Do‘stlaringizdan sovg‘a olish yoqsa, sozlamaga tegmasangiz ham bo‘ladi. Quyidagi holatlarda esa u foydali:

- **Notanishlarning e’tibori bezovta qiladi.** Profilingiz ochiq bo‘lsa va kutilmagan sovg‘alar sizga yoqmasa, kerakmas turlarni yopasiz.
- **Profilni toza saqlamoqchisiz.** Qabul qilingan sovg‘alar maxfiylik sozlamasiga qarab profilda avtomatik chiqishi mumkin. Agar muammo faqat shunda bo‘lsa, butunlay cheklashdan oldin avtomatik ko‘rsatishga oid sozlamani tekshiring.
- **Bola yoki keksa qarindoshning akkaunti.** Ular sovg‘a, Stars va aylantirish shartlarini tushunmasligi mumkin. Cheklov ortiqcha savol va chalkashlikni kamaytiradi.
- **Sovg‘a bahonasida yozishmalar.** Ba’zan notanish odam sovg‘a yuborib, keyin evaziga biror narsa so‘raydi. Bunday suhbatlarni oldindan kamaytirish uchun ham cheklov qo‘l keladi.

> Sovg‘a qabul qilish yoki rad etish uchun hech kimga login kodi, parol yoki karta ma’lumoti berish kerak emas. Bunday so‘rov kelsa, suhbatni to‘xtating. Shubhali havolalar haqida: [Telegramda havola ochsam bloklanadimi](/blog/telegram-shubhali-havola-akkaunt-bloklanishi).

## Sovg‘ani kim yuborganini bilsa bo‘ladimi?

Yuboruvchi sovg‘a jo‘natishda ismini yashirishi mumkin. Bu holda siz sovg‘ani profilingizda ko‘rsatsangiz, boshqalar yuboruvchining ismini ko‘rmaydi.

Lekin siz, ya’ni oluvchi, kim yuborganini baribir ko‘rasiz. «Anonim» sovg‘a faqat uchinchi shaxslar uchun anonim.

Sovg‘a faqat odamga emas, kanalga ham yuborilishi mumkin. Biroq bu faqat kanalda sovg‘alar mavjud deb belgilangan bo‘lsa ishlaydi.

## Sovg‘alar umuman ko‘rinmasa yoki yuborib bo‘lmasa, sabab nima?

Do‘stingizga sovg‘a jo‘nata olmasangiz yoki ilovada sovg‘a bo‘limi yo‘q bo‘lsa, quyidagi sabablarni tekshiring:

- **Oluvchi cheklagan.** U aynan shu turdagi sovg‘ani qabul qilishni taqiqlagan bo‘lishi mumkin.
- **Sovg‘a Premium talab qiladi.** Hujjatga ko‘ra, ba’zi sovg‘alarni yuborish uchun Telegram Premium obunasi kerak.
- **Funksiya konfiguratsiyada bloklangan.** Telegram yuboradigan konfiguratsiyada sovg‘alar bloklangan bo‘lsa, ilova bu funksiyani o‘chirishi shart. Bu qaysi holatlarda sodir bo‘lishi manbada aytilmagan.
- **Kanalda sovg‘alar yoqilmagan.** Kanalga sovg‘a faqat unda sovg‘alar mavjud bo‘lsa yuboriladi.

Amaliy maslahat: ilovani yangilang, so‘ng o‘z maxfiylik sozlamalaringizni qayta ko‘rib chiqing. Sovg‘a turlari qanday farqlanishini bilish uchun [NFT sovg‘alar nima](/blog/telegram-nft-sovgalar) maqolasini o‘qing.

## Durov sovg‘alarni yopib, keyin qayta ochgani rostmi?

Bu mavzu Telegram kanalidagi postdan tarqalgan. Unda Pavel Durov avval sovg‘a qabul qilishni maxfiylik sozlamalarida o‘chirgani va keyin qayta yoqqani aytiladi.

> Bu da’vo faqat kanal postida aytilgan, rasmiy manbada tasdiqlanmagan. Postdagi tug‘ilgan kun sanasi ham rasmiy manbada tekshirilmagan, shuning uchun uni keltirmaymiz.

Postdan olsa bo‘ladigan foydali xulosa bitta: sovg‘a qabul qilish istalgan foydalanuvchi o‘zgartira oladigan maxfiylik sozlamasi. U taniqli odam uchun ham, oddiy foydalanuvchi uchun ham bir xil ishlaydi.

Telegram asoschisi haqidagi tekshirilgan faktlar: [Telegram asoschisi kim](/blog/telegram-asoschisi-pavel-durov-kim).

## Ko‘p so‘raladigan savollar

### Sovg‘a qabul qilishni o‘chirsam, avval olgan sovg‘alarim o‘chib ketadimi?

Rasmiy hujjatda sozlama sovg‘a qabul qilishni taqiqlashi aytilgan, avval olingan sovg‘alarga ta’siri esa yozilmagan. Cheklovni qo‘ygach, profilingizdagi sovg‘alar ro‘yxatini o‘zingiz ko‘zdan kechiring.

### Sovg‘alarni cheklash uchun Telegram Premium kerakmi?

Bu rasmiy manbada tasdiqlanmagan, shuning uchun ilovadagi sozlama ekranida tekshiring. Hujjatda boshqa narsa aniq yozilgan: ba’zi sovg‘alarni yuborish uchun Premium talab qilinadi.

### Faqat ma’lum odamlardan sovg‘a olishni yoqib qo‘ysa bo‘ladimi?

Kontaktlar, hamma yoki hech kim kabi tanlov borligi rasmiy hujjatda topilmadi. Tasdiqlangan imkoniyat — sovg‘alarni turi bo‘yicha cheklash.

### Sovg‘a sozlamasini telefonda o‘zgartirsam, kompyuterda ham o‘zgaradimi?

Ha, maxfiylik sozlamasi o‘zgarganda yangilanish akkauntingizning barcha faol seanslariga boradi. Kompyuterda o‘zgarish ko‘rinmasa, Telegram Desktop’ni yangilab, qayta ishga tushirib ko‘ring.

### Kerak bo‘lmagan sovg‘ani Stars’ga aylantirsam, to‘liq narxini qaytarib olamanmi?

Yo‘q, qaytadigan Stars sovg‘aning sotib olingan narxidan kam bo‘ladi. Aylantirish faqat belgilangan muddat ichida ishlaydi, kim oshdi savdosida olingan kolleksion sovg‘alarda esa umuman mumkin emas.

### Nega do‘stimga sovg‘a yubora olmayapman?

Do‘stingiz shu turdagi sovg‘ani qabul qilmaslikni tanlagan bo‘lishi yoki tanlangan sovg‘a Premium talab qilishi mumkin. Sovg‘alar Telegram konfiguratsiyasida bloklangan bo‘lsa ham ilova bu funksiyani ko‘rsatmaydi.

### Anonim sovg‘ani kim yuborganini bilib bo‘ladimi?

Oluvchi sifatida siz yuboruvchini baribir ko‘rasiz. Yashirin ism faqat sovg‘ani profilingizda ko‘radigan boshqa odamlar uchun amal qiladi.

### Kanalimga sovg‘a kelmasligini xohlasam nima qilaman?

Kanalga sovg‘a faqat unda sovg‘alar mavjud deb belgilangan bo‘lsa yuboriladi. Buni boshqaradigan bandning aniq nomi bu maqolada tasdiqlanmagan, uni kanal sozlamalarida tekshiring.`,
    ru: `## Можно ли отключить получение подарков в Telegram?

Да. Telegram позволяет запретить получение подарков определённых типов. Это описано в [документации Telegram о подарках](https://core.telegram.org/api/gifts) и в [описании общих настроек конфиденциальности](https://core.telegram.org/constructor/globalPrivacySettings).

Это не отдельная услуга, а часть системы приватности. Telegram даёт пользователю детально настроить [параметры конфиденциальности](https://core.telegram.org/api/privacy): вы сами решаете, кто и как может с вами взаимодействовать. Подарки относятся к тому же списку.

Настройка не одноразовая. В документации она описана как параметр, запрещающий получение определённых типов подарков, поэтому ограничение можно как включить, так и потом снять.

Если вы пока не знаете, что такое подарки в Telegram, начните со статьи [что такое Telegram Gifts](/blog/telegram-gifts-sovgalar).

## Где найти и как изменить настройку подарков?

> Точный путь в меню и названия пунктов в этой статье не подтверждены. Они могут отличаться в зависимости от версии приложения и платформы. Шаги ниже дают общее направление.

1. Обновите Telegram до последней версии.
2. Откройте «Настройки» в приложении.
3. Перейдите в раздел «Конфиденциальность».
4. Найдите пункт, связанный с подарками.
5. Отметьте типы подарков, которые не хотите получать, или, наоборот, снимите отметку.
6. Перед выходом из раздела убедитесь, что выбор сохранился.
7. Для проверки попросите близкого друга открыть окно отправки подарка вам.

Чтобы снова включить получение, вернитесь в тот же пункт и снимите ограничение.

Отдельно настраивать телефон и компьютер не нужно. Согласно [документации Telegram](https://core.telegram.org/api/privacy), при изменении настроек конфиденциальности обновление отправляется во все сеансы аккаунта, в которых сейчас выполнен вход.

Если пункта нет вовсе, сначала обновите приложение. Другие возможные причины — в разделе ниже «Если подарков не видно вообще».

## Какие подарки можно ограничить и что пока неизвестно?

Из официальной документации одни вещи понятны, другие остаются открытыми. Чтобы их не смешивать, показываем отдельно.

| Официально подтверждено | Не подтверждено |
|---|---|
| Можно не принимать подарки определённых типов | Какие именно типы можно ограничить |
| Это ограничение видно другим пользователям | Есть ли выбор «кто может дарить» (контакты, все, никто) |
| Параметры конфиденциальности настраиваются детально | Нужен ли Premium для ограничения |
| Изменение отправляется во все активные сеансы | Что происходит с уже полученными подарками |

> Ответы на вопросы из правой колонки проверяйте сами на экране приложения. Гадать о них в этой статье мы не будем.

## Увидят ли другие, что я ограничил подарки?

Да. Согласно [документации Telegram Gifts](https://core.telegram.org/api/gifts), то, какие типы подарков вы не принимаете, видно другим пользователям. На практике отправитель может заранее узнать, что такой подарок вы не получите, и не будет пытаться зря.

Кнопка подарка в личном чате тоже зависит от настроек. По документации, если соответствующий параметр включён у обеих сторон, в поле ввода личного чата всегда должна отображаться кнопка подарка.

В руководстве для разработчиков приложений есть ещё одно требование: окно отправки подарка должно всегда открываться через пункт «Send a Gift» в настройках. Это правило для программистов, а не описание меню официального приложения. Какое именно окно открывается по нажатию кнопки, официальный источник не подтверждает.

## Как управлять подарками, не отключая их полностью?

Полностью отказываться от подарков нужно не всегда. Иногда достаточно не показывать подарок в профиле или превратить его в Stars.

| Способ | Что даёт | Обратите внимание |
|---|---|---|
| Ограничить тип подарков | Подарки этого типа к вам не приходят | Ограничение видно другим |
| Показывать или скрывать в профиле | Вы сами решаете, появится ли полученный подарок в профиле | Автоматический показ зависит от настройки конфиденциальности |
| Превратить в Stars | Вместо подарка получаете Telegram Stars | Только в течение установленного срока, Stars возвращается меньше цены покупки |

У конвертации в Stars есть ещё одно исключение: подарки, полученные на аукционах коллекционных подарков, превратить в Stars нельзя. Это тоже указано в [официальной документации](https://core.telegram.org/api/gifts).

Подробнее об отображении в профиле: [почему скрыт владелец NFT-подарка](/blog/telegram-nft-sovga-egasi-yashirin). О том, где тратить Stars: [что такое Telegram Stars](/blog/telegram-stars-nima).

## Когда имеет смысл ограничить подарки?

Ограничение нужно не всем. Если вам нравится получать подарки от друзей, настройку можно не трогать. А вот в таких случаях она полезна:

- **Раздражает внимание незнакомцев.** Если профиль открыт и неожиданные подарки вам неприятны, закройте ненужные типы.
- **Хотите держать профиль в чистоте.** Полученные подарки могут автоматически появляться в профиле в зависимости от настройки конфиденциальности. Если проблема только в этом, перед полным запретом проверьте параметр автоматического показа.
- **Аккаунт ребёнка или пожилого родственника.** Они могут не разобраться в подарках, Stars и условиях конвертации. Ограничение снимет лишние вопросы и путаницу.
- **Переписка под предлогом подарка.** Бывает, что незнакомец присылает подарок, а потом что-то просит взамен. Ограничение помогает заранее сократить такие разговоры.

> Чтобы принять или отклонить подарок, никому не нужно сообщать код входа, пароль или данные карты. Если вас о таком просят, прекратите разговор. О подозрительных ссылках: [заблокируют ли аккаунт, если открыть ссылку в Telegram](/blog/telegram-shubhali-havola-akkaunt-bloklanishi).

## Можно ли узнать, кто отправил подарок?

Отправитель может скрыть своё имя при отправке подарка. В этом случае, если вы покажете подарок в профиле, другие не увидят имя отправителя.

Но вы, то есть получатель, всё равно видите, кто его прислал. «Анонимный» подарок анонимен только для третьих лиц.

Подарок можно отправить не только человеку, но и каналу. Правда, это работает, только если в канале подарки отмечены как доступные.

## Если подарков не видно вообще или их не получается отправить — в чём причина?

Если не удаётся отправить подарок другу или в приложении нет раздела подарков, проверьте следующие причины:

- **Получатель ограничил подарки.** Возможно, он запретил получение именно этого типа.
- **Подарок требует Premium.** По документации, для отправки некоторых подарков нужна подписка Telegram Premium.
- **Функция заблокирована в конфигурации.** Если в конфигурации, которую присылает Telegram, подарки заблокированы, приложение обязано отключить эту функцию. В каких случаях так бывает, в источнике не сказано.
- **В канале не включены подарки.** Подарок каналу отправляется, только если подарки в нём доступны.

Практический совет: обновите приложение, затем ещё раз проверьте свои настройки конфиденциальности. Чем различаются типы подарков, читайте в статье [что такое NFT-подарки](/blog/telegram-nft-sovgalar).

## Правда ли, что Дуров закрыл подарки, а потом снова открыл?

Эта тема разошлась из поста в Telegram-канале. В нём говорится, что Павел Дуров сначала отключил получение подарков в настройках конфиденциальности, а затем снова включил.

> Это утверждение есть только в посте канала и официальным источником не подтверждено. Дата дня рождения из поста тоже не проверена по официальным источникам, поэтому мы её не приводим.

Полезный вывод из поста один: получение подарков — это настройка конфиденциальности, которую может изменить любой пользователь. Для известного человека и для обычного пользователя она работает одинаково.

Проверенные факты об основателе Telegram: [кто основал Telegram](/blog/telegram-asoschisi-pavel-durov-kim).

## Часто задаваемые вопросы

### Если отключить получение подарков, исчезнут ли уже полученные?

В официальной документации сказано, что настройка запрещает получение подарков, а о влиянии на уже полученные ничего не написано. После включения ограничения сами просмотрите список подарков в профиле.

### Нужен ли Telegram Premium, чтобы ограничить подарки?

Официальный источник этого не подтверждает, поэтому проверьте на экране настроек в приложении. Зато в документации чётко указано другое: для отправки некоторых подарков требуется Premium.

### Можно ли разрешить подарки только от определённых людей?

Выбора вроде «контакты, все или никто» в официальной документации не нашлось. Подтверждённая возможность — ограничивать подарки по типу.

### Если поменять настройку подарков на телефоне, изменится ли она на компьютере?

Да, при изменении параметров конфиденциальности обновление приходит во все активные сеансы аккаунта. Если на компьютере изменений не видно, обновите Telegram Desktop и перезапустите его.

### Если превратить ненужный подарок в Stars, вернётся ли полная стоимость?

Нет, Stars возвращается меньше, чем стоил подарок при покупке. Конвертация работает только в установленный срок, а для коллекционных подарков с аукциона она невозможна вовсе.

### Почему не получается отправить подарок другу?

Возможно, друг запретил получение подарков этого типа или выбранный подарок требует Premium. Если подарки заблокированы в конфигурации Telegram, приложение тоже не покажет эту функцию.

### Можно ли узнать, кто отправил анонимный подарок?

Как получатель вы всё равно видите отправителя. Скрытое имя действует только для других людей, которые смотрят подарок в вашем профиле.

### Что делать, если я не хочу, чтобы моему каналу дарили подарки?

Подарок каналу отправляется, только если подарки в нём отмечены как доступные. Точное название пункта, который этим управляет, в статье не подтверждено — проверьте его в настройках канала.`,
  },
};
