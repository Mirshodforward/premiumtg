// Avtoblogyoz yasagan maqola (2026-11-11). Niyat: Telegram Wallet’dan foydalanuvchi yangi hamyon Fragment kabi saytlarga ulanishni telefon va kompyuter o‘rtasida sinxronlashi rostmi, bu xavflimi va ulangan sessiyalarni qanday uzish mumkinligini «Telegram Wallet sessiya sinxronlash» kabi so‘zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   (faqat brend faktlari)
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-wallet-ulanishlar-sinxronlash-xavfsizlik",
  date: "2026-11-11",
  reviewed: "2026-11-11",
  category: "xavfsizlik",
  priority: 0.7,
  title: { uz: "Telegram Wallet ulanishlarni sinxronlaydimi? Xavfi va ulanishni uzish", ru: "Синхронизирует ли Telegram Wallet подключения? Риски и как их отключить" },
  excerpt: { uz: `Hozircha tasdiqlanmagan: yangi Telegram Wallet hamyon ulanishlarini telefon va kompyuter o‘rtasida sinxronlashi faqat kanal postida aytilgan, rasmiy e’lon topilmadi.`, ru: `Пока не подтверждено: о синхронизации подключений нового Telegram Wallet между телефоном и компьютером писали только в посте канала, официального анонса нет.` },
  keywords: ["telegram wallet sessiya sinxronlash","telegram wallet ulanishlarni uzish","telegram wallet xavfsizmi","fragment hamyonni uzish","telegram hamyon ulangan saytlar","ton connect sessiya","telegram wallet синхронизация сессий","telegram wallet отключить подключения","fragment отключить кошелёк","telegram wallet безопасность","ton connect сессия украли","новый telegram wallet подключения"],
  related: ["telegram-wallet-walt-nomi-ozgardimi","telegram-desktop-wallet-havolasi-ichki-hamyon","telegram-wallet-hamyon-ochish-faollashtirish","fragment-kyc-verifikatsiya-bekor-qilindi"],
  sources: [],
  content: {
    uz: `## Yangi Telegram Wallet ulanishlarni qurilmalar o‘rtasida sinxronlaydimi?

Hozircha bu rasman tasdiqlanmagan. 2026-yil 11-noyabr holatida Telegram’ning ham, Fragment’ning ham bunday funksiya haqidagi rasmiy e’loni topilmadi.

Da’vo Telegram kanalidagi postdan tarqalgan. Kanal posti rasmiy manba emas: bu maqola uchun undan faqat mavzuni oldik, faktlarni esa rasmiy manbalardan qidirdik.

Funksiya chiqsa, qanday ishlashini ikki joyda tekshiring: Telegram’ning [rasmiy blogida](https://telegram.org/blog) va ilovaning o‘zidagi yozuvlarda. Ulanishlar qaysi qurilmalarda ko‘rinishi, ularni qanday uzish mumkinligi va bir joyda uzilsa, hamma joyda uzilish-uzilmasligi aynan shu manbalarda yozilishi kerak.

Wallet haqidagi mish-mishlar ko‘pincha tasdiqlanmay qoladi. Yana bir misol: [Wallet’ning Walt bo‘lishi haqidagi xabar](/blog/telegram-wallet-walt-nomi-ozgardimi).

## Kanal postida aynan nima deyilgan?

Postda uchta fikr bor:

- **Asosiy da’vo.** Yaqinda chiqadigan yangi Telegram Wallet ulanishlarni qurilmalar o‘rtasida sinxronlaydi.
- **Misol.** Hamyonni kompyuterda Fragment’ga ulasangiz, o‘sha sessiya telefonda ham paydo bo‘ladi.
- **Muallifning fikri.** Bunday funksiya ko‘proq firibgarlik bilan bog‘liq holda muhokama qilinadi: bitta sessiyani o‘g‘irlashsa, hamma narsaga kirish ochiladi.

Uchinchi fikr muallifning shaxsiy bahosi. U texnik tahlil ham emas, Telegram’ning rasmiy ogohlantirishi ham emas. Telegram yoki Fragment’ning sessiya o‘g‘irlanishi haqidagi rasmiy ogohlantirishi topilmadi.

## Agar sinxronlash chiqsa, xavf qayerda bo‘lishi mumkin?

Quyidagilar rasmiy fakt emas, oddiy mantiq. Ulanish nechta qurilmada ko‘rinsa, kuzatib turish kerak bo‘lgan joy ham shuncha ko‘payadi. Telefoningiz yoki kompyuteringizga begona odam kirsa, u yerda ham hamyon ulanishlarini ko‘rishi mumkin.

Postdagi «bitta sessiyani o‘g‘irlab, hamma narsaga kirish mumkin» degan gap rasman tasdiqlanmagan. Hamyon ulanishi saytga aynan qanday ruxsat berishini bu maqolada tekshira olmadik. Shu sabab funksiyani «xavfsiz» ham, «xavfli» ham deb atamaymiz.

Amalda xavf ko‘pincha funksiyadan emas, foydalanuvchining harakatidan kelib chiqadi:

- hamyonni soxta saytga o‘zi ulaydi;
- tasdiqlash oynasini o‘qimay «Tasdiqlash»ni bosadi;
- seed-ibora yoki kodni «yordamchi»ga yuborib qo‘yadi.

Sinxronlash chiqsa ham, chiqmasa ham himoya shu uch nuqtadan boshlanadi.

## Hamyon ulanishi va Telegram akkaunt sessiyasi — farqi nimada?

Bu ikki tushuncha ko‘p chalkashtiriladi. Biri Telegram akkauntingizga kirish, ikkinchisi hamyonni biror saytga ulash.

| Savol | Telegram akkaunt sessiyasi | Hamyonning saytga ulanishi |
|---|---|---|
| Nima beradi | Akkauntga kirish: chatlar, kanallar, sozlamalar | Saytda hamyon bilan ishlash: manzilni ko‘rish, tranzaksiya so‘rash |
| Qayerda ko‘rinadi | Telegram sozlamalaridagi qurilmalar bo‘limida | Hamyon ilovasida va saytning o‘zida |
| Nimani yo‘qotish mumkin | Chatlar va akkauntning o‘zi | Hamyondagi aktivlar |
| Asosiy himoya | Login kodini hech kimga bermaslik, ikki bosqichli parol | Seed-iborani saqlash, tasdiqlash oynasini o‘qish |

Telegram’dagi seanslar ro‘yxati akkauntga kirishlarni ko‘rsatadi, hamyon ulanishlarini emas. Bo‘lim nomi ilova versiyasiga qarab farq qilishi mumkin, shuning uchun ilovadagi yozuvga qarang.

Akkauntni himoyalash bo‘yicha batafsil qo‘llanma: [+888 raqamga login kodi kelsa nima qilish kerak](/blog/888-raqam-login-kodi-sorovlari-himoya).

## Ulangan saytlarni qanday tekshirish va uzish mumkin?

> Telegram Wallet ulanishlarini uzish bo‘yicha rasmiy yo‘riqnoma topilmadi. Quyidagi menyu nomlari taxminiy. Ilovada nima yozilgan bo‘lsa, o‘shanga amal qiling.

1. Telegram Wallet’ni oching va sozlamalardan ulangan ilovalar yoki saytlar ro‘yxatini toping.
2. Tanimaydigan yoki endi ishlatmaydigan saytni topib, ulanishni uzing.
3. Saytning o‘zida, masalan Fragment’da, hamyonni uzish tugmasi bo‘lsa, uni ham bosing. Fragment’dan chiqish bo‘yicha rasmiy sahifa topilmadi, shuning uchun [Fragment saytidagi](https://fragment.com) tugmaga qarang.
4. Ikkinchi qurilmangizdagi ro‘yxatni ham oching va ulanish u yerda ham yo‘qolganini tekshiring. Bir qurilmada uzilgan ulanish boshqasida avtomatik uzilishi rasman tasdiqlanmagan.
5. Telegram sozlamalaridagi qurilmalar ro‘yxatini ham ko‘rib chiqing va notanish seanslarni yoping.

Hamyon qanday ochilishi haqida: [Telegram Wallet qanday ochiladi](/blog/telegram-wallet-hamyon-ochish-faollashtirish).

## Notanish ulanish yoki tranzaksiyani ko‘rsangiz, nima qilish kerak?

Ro‘yxatda siz ulamagan sayt chiqsa yoki tarixda o‘zingiz qilmagan tranzaksiya ko‘rinsa, shoshilmasdan, lekin kechiktirmasdan harakat qiling:

1. Notanish ulanishni hamyon ilovasida darhol uzing.
2. Telegram akkauntidagi notanish seanslarni yoping va ikki bosqichli parolni yoqing yoki almashtiring.
3. Tranzaksiyani manzil yoki xesh orqali eksplorerda tekshiring: qachon bo‘lgan va qayerga ketgan. Qanday qilinishi haqida: [TON tranzaksiyasini tekshirish](/blog/gram-org-ton-eksplorer-rasmiymi).
4. Hamyon ilovasidagi rasmiy yordam bo‘limiga yozing. Shaxsiy xabarda o‘zi yozgan «yordamchi»larga javob bermang.
5. Seed-ibora begona qo‘lga tushgan bo‘lishi mumkin deb o‘ylasangiz, ulanishni uzishning o‘zi yetarli emas. Seed-iboraga ega odam hamyonni ulanishsiz ham boshqara oladi, shuning uchun mablag‘ni yangi hamyonga ko‘chirish yo‘lini ko‘rib chiqing.

Ulanish ro‘yxatda qayta-qayta paydo bo‘layotgan bo‘lsa, qaysi qurilmada hamyon ochiq turganini tekshiring. Eski telefon yoki boshqa birovning kompyuteri esdan chiqib qolgan bo‘lishi mumkin.

## Firibgarlar hamyon ulanishini qanday qo‘lga kiritishga urinadi?

Sinxronlash haqidagi mish-mish firibgarlar uchun qulay bahona bo‘lishi mumkin. Ko‘p uchraydigan usullar:

- **Soxta domen.** Manzili Fragment yoki boshqa tanish saytga o‘xshatilgan sahifa, «hamyonni ulab sovg‘a oling» degan havola. Manzil satrini harfma-harf tekshiring.
- **QR-kod bahonasi.** «Sessiyani sinxronlash», «hamyonni tekshirish» yoki «yangilash» uchun QR-kod skaner qilish so‘raladi. Notanish odam yuborgan bo‘lsa, skaner qilmang.
- **Maxfiy ma’lumot so‘rash.** Seed-ibora, PIN yoki Telegram login kodi so‘raladi. Bularni sizdan so‘raydigan rasmiy xizmat yo‘q.
- **Shoshiltirish.** «Hozir tasdiqlamasangiz, mablag‘ bloklanadi» kabi gaplar. Bosim — firibgarlik belgisi.
- **«Yordam xizmati» nomidan yozish.** Shaxsiy xabarda «ulanishingiz buzildi» deyiladi. Yordamga faqat ilova ichidagi rasmiy bo‘lim orqali murojaat qiling.

| Vaziyat | Nima qilish kerak |
|---|---|
| Havola «hamyonni ulab sovg‘a oling» deydi | Sahifani yoping, saytni manzilini o‘zingiz yozib oching |
| Notanish odam QR-kod yubordi | Skaner qilmang, suhbatni to‘xtating |
| Seed-ibora yoki kod so‘ralmoqda | Rad eting, akkauntni bloklang |
| Tasdiqlash oynasida tanish bo‘lmagan oluvchi | Bekor qiling, saytdan chiqing va ulanishni uzing |

## Hamyonni xavfsiz saqlash uchun qaysi oddiy qoidalarga amal qilish kerak?

> Bu qoidalar sinxronlash funksiyasi chiqishi-chiqmasligidan qat’i nazar foydali.

- Saytga faqat manzilini o‘zingiz yozgan yoki rasmiy havoladan ochgan bo‘lsangiz, ulaning.
- Ishingiz tugagach, ulanishni uzing. Ulangan saytlar ro‘yxati qancha qisqa bo‘lsa, kuzatish shuncha oson.
- Tasdiqlash oynasidagi summa va oluvchini o‘qimasdan tasdiqlamang.
- Seed-iborani skrinshot qilmang, bulutga saqlamang va hech kimga yubormang.
- Telegram akkauntida ikki bosqichli parolni yoqing.
- Begona yoki umumiy kompyuterda hamyonni ochiq qoldirmang.
- Yangi funksiya haqidagi ma’lumotni [telegram.org](https://telegram.org) va [fragment.com](https://fragment.com) saytlaridan tekshiring, kanal postlaridan emas.

Fragment’ga kirish va hamyon ulash qanday ishlashi haqida: [Fragment KYC bekor qilindimi](/blog/fragment-kyc-verifikatsiya-bekor-qilindi).

## Telegram Premium olish uchun hamyonni biror joyga ulash kerakmi?

Premiumtg orqali Premium olayotgan bo‘lsangiz, kerak emas. Hamyon ulash, akkauntga kirish, login kodi yoki parol so‘ralmaydi. Username’ingiz yetarli.

To‘lov so‘mda: Click, Payme, Paynet yoki Uzum Bank orqali. Xorijiy karta kerak emas. Obuna 10 soniyada avtomatik faollashadi.

| Muddat | Narx |
|---|---|
| 3 oy | ${narx(3)} |
| 6 oy | ${narx(6)} |
| 12 oy | ${narx(12)} |

Xarid qilishdan oldin narx va mavjud to‘lov usullarini [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida tekshiring. Premium uchun kimdir hamyon ulash yoki kod yuborishni so‘rasa, bu firibgarlik belgisi. Batafsil: [username berish xavfsizmi](/blog/username-berish-xavfsizmi).

## Ko‘p so‘raladigan savollar

### Telegram Wallet’dagi ulanish telefonda ham chiqib qoldi — bu xakerlikmi?

Shart emas, lekin tekshirib ko‘rish kerak. Ulanishlar qurilmalar o‘rtasida sinxronlanishi rasman tasdiqlanmagan. Saytni tanimasangiz, ulanishni uzing va Telegram’dagi notanish seanslarni yoping.

### Fragment’dan hamyonni qanday uzaman?

Fragment’dan chiqish bo‘yicha rasmiy yo‘riqnoma topilmadi, shuning uchun sayt interfeysidagi uzish tugmasidan foydalaning. Keyin hamyon ilovasidagi ulangan saytlar ro‘yxatini ham tekshiring.

### Telegram’dagi seanslarni yopsam, hamyon ulanishlari ham uziladimi?

Bunga tayanmang. Telegram’dagi seanslar ro‘yxati akkauntga kirishlar uchun. Hamyonning saytlarga ulanishini hamyon ilovasining o‘zida tekshiring va uzing.

### Hamyonni ulagan sayt pulimni o‘zi yecha oladimi?

Ulanish saytga aynan qanday ruxsat berishi bu maqolada tasdiqlanmagan. Amaliy himoya oddiy: summa va oluvchini o‘qimasdan hech qanday so‘rovni tasdiqlamang.

### Kimdir «sessiyani sinxronlash» uchun QR-kod skaner qilishni so‘rasa nima qilay?

Notanish odam yoki havola so‘rasa, skaner qilmang — bu firibgarlar ko‘p ishlatadigan bahona. Seed-ibora va login kodini hech qanday holatda hech kimga bermang.

### Sinxronlash funksiyasi chiqqanini qayerdan bilsam bo‘ladi?

Telegram’ning rasmiy blogini va ilovaning o‘zidagi yangilanish yozuvlarini kuzating. Kanal postlari, hatto mashhur kanallarniki ham, rasmiy tasdiq hisoblanmaydi.

### Telegram Premium sotib olish uchun TON hamyon kerakmi?

Premiumtg orqali olsangiz, kerak emas: username kiritasiz va Click, Payme, Paynet yoki Uzum Bank orqali so‘mda to‘laysiz. Hamyon ulash ham, kod yuborish ham talab qilinmaydi.`,
    ru: `## Синхронизирует ли новый Telegram Wallet подключения между устройствами?

Официального подтверждения пока нет. На 11 ноября 2026 года ни Telegram, ни Fragment не объявляли о такой функции.

Информация пошла из поста в Telegram-канале. Пост в канале — не официальный источник. Мы взяли из него только тему, а факты искали в официальных источниках.

Если функция выйдет, проверяйте, как она работает, в двух местах: в [официальном блоге Telegram](https://telegram.org/blog) и в описаниях внутри самого приложения. Именно там должно быть написано, на каких устройствах видны подключения, как их отключить и отключается ли подключение везде, если разорвать его на одном устройстве.

Слухи о Wallet часто так и остаются неподтверждёнными. Ещё один пример — [новость о том, что Wallet станет Walt](/blog/telegram-wallet-walt-nomi-ozgardimi).

## Что именно сказано в посте канала?

В посте три тезиса:

- **Главное утверждение.** Новый Telegram Wallet, который скоро выйдет, будет синхронизировать подключения между устройствами.
- **Пример.** Если подключить кошелёк к Fragment на компьютере, эта же сессия появится и на телефоне.
- **Мнение автора.** Такую функцию чаще обсуждают в связке с мошенничеством: если украдут одну сессию, откроется доступ ко всему.

Третий тезис — личная оценка автора. Это не технический разбор и не официальное предупреждение Telegram. Официальных предупреждений Telegram или Fragment о краже сессий мы не нашли.

## Где может быть риск, если синхронизация появится?

Дальше — не официальные факты, а обычная логика. Чем на большем числе устройств видно подключение, тем больше мест, за которыми нужно следить. Если кто-то посторонний получит доступ к вашему телефону или компьютеру, он сможет увидеть там и подключения кошелька.

Фраза из поста «украдёшь одну сессию — получишь доступ ко всему» официально не подтверждена. Какие именно права подключение кошелька даёт сайту, мы в рамках этой статьи проверить не смогли. Поэтому не называем функцию ни «безопасной», ни «опасной».

На практике риск чаще исходит не от функции, а от действий самого пользователя:

- он сам подключает кошелёк к поддельному сайту;
- нажимает «Подтвердить», не прочитав окно подтверждения;
- отправляет сид-фразу или код «помощнику».

Есть синхронизация или нет — защита начинается с этих трёх пунктов.

## Подключение кошелька и сессия аккаунта Telegram — в чём разница?

Эти понятия часто путают. Одно — вход в ваш аккаунт Telegram, другое — подключение кошелька к какому-то сайту.

| Вопрос | Сессия аккаунта Telegram | Подключение кошелька к сайту |
|---|---|---|
| Что даёт | Доступ к аккаунту: чаты, каналы, настройки | Работа с кошельком на сайте: просмотр адреса, запрос транзакции |
| Где видно | В разделе устройств в настройках Telegram | В приложении кошелька и на самом сайте |
| Что можно потерять | Чаты и сам аккаунт | Активы в кошельке |
| Главная защита | Никому не сообщать код входа, облачный пароль | Хранить сид-фразу, читать окно подтверждения |

Список сеансов в Telegram показывает входы в аккаунт, а не подключения кошелька. Название раздела может отличаться в зависимости от версии приложения, поэтому ориентируйтесь на то, что написано у вас.

Подробно о защите аккаунта: [что делать, если на номер +888 приходят коды входа](/blog/888-raqam-login-kodi-sorovlari-himoya).

## Как проверить и отключить подключённые сайты?

> Официальной инструкции по отключению подключений в Telegram Wallet мы не нашли. Названия меню ниже примерные. Ориентируйтесь на то, что написано в приложении.

1. Откройте Telegram Wallet и найдите в настройках список подключённых приложений или сайтов.
2. Найдите сайт, который вы не узнаёте или больше не используете, и отключите его.
3. Если на самом сайте, например на Fragment, есть кнопка отключения кошелька, нажмите и её. Официальной страницы о выходе из Fragment нет, поэтому ищите кнопку на [сайте Fragment](https://fragment.com).
4. Откройте список и на втором устройстве — проверьте, что подключение исчезло и там. То, что отключение на одном устройстве автоматически срабатывает на другом, официально не подтверждено.
5. Просмотрите и список устройств в настройках Telegram, завершите незнакомые сеансы.

Как открыть кошелёк: [как открыть Telegram Wallet](/blog/telegram-wallet-hamyon-ochish-faollashtirish).

## Что делать, если вы видите незнакомое подключение или транзакцию?

Если в списке появился сайт, который вы не подключали, или в истории есть транзакция, которую вы не совершали, действуйте спокойно, но без промедления:

1. Сразу отключите незнакомое подключение в приложении кошелька.
2. Завершите незнакомые сеансы в аккаунте Telegram и включите или смените облачный пароль (двухэтапную проверку).
3. Проверьте транзакцию в эксплорере по адресу или хешу: когда она прошла и куда ушли средства. Как это сделать: [проверка транзакции в TON](/blog/gram-org-ton-eksplorer-rasmiymi).
4. Напишите в официальный раздел поддержки внутри приложения кошелька. Не отвечайте «помощникам», которые сами пишут вам в личные сообщения.
5. Если вы подозреваете, что сид-фраза попала в чужие руки, одного отключения недостаточно. Владелец сид-фразы может управлять кошельком и без подключений, поэтому подумайте о переводе средств в новый кошелёк.

Если подключение снова и снова появляется в списке, проверьте, на каком устройстве открыт кошелёк. Возможно, вы забыли про старый телефон или чужой компьютер.

## Как мошенники пытаются получить доступ к подключению кошелька?

Слух о синхронизации может стать для мошенников удобным поводом. Самые частые приёмы:

- **Поддельный домен.** Страница с адресом, похожим на Fragment или другой знакомый сайт, и ссылка «подключите кошелёк и получите подарок». Сверяйте адресную строку буква за буквой.
- **Предлог с QR-кодом.** Просят отсканировать QR-код, чтобы «синхронизировать сессию», «проверить кошелёк» или «обновить» его. Если код прислал незнакомый человек — не сканируйте.
- **Запрос секретных данных.** Просят сид-фразу, PIN-код или код входа в Telegram. Ни один официальный сервис их у вас не запрашивает.
- **Давление и спешка.** Фразы вроде «не подтвердите сейчас — средства заблокируют». Давление — признак мошенничества.
- **Сообщения от имени «службы поддержки».** В личку пишут: «ваше подключение взломано». Обращайтесь в поддержку только через официальный раздел внутри приложения.

| Ситуация | Что делать |
|---|---|
| Ссылка обещает подарок за подключение кошелька | Закройте страницу, откройте сайт, набрав адрес вручную |
| Незнакомец прислал QR-код | Не сканируйте, прекратите разговор |
| Просят сид-фразу или код | Откажите и заблокируйте аккаунт |
| В окне подтверждения незнакомый получатель | Отмените, уйдите с сайта и отключите подключение |

## Какие простые правила помогут хранить кошелёк в безопасности?

> Эти правила полезны вне зависимости от того, появится функция синхронизации или нет.

- Подключайтесь только к сайтам, адрес которых вы ввели сами или открыли по официальной ссылке.
- Закончив работу, отключайте подключение. Чем короче список подключённых сайтов, тем проще за ним следить.
- Не подтверждайте операцию, не прочитав сумму и получателя.
- Не делайте скриншот сид-фразы, не храните её в облаке и никому не отправляйте.
- Включите облачный пароль в аккаунте Telegram.
- Не оставляйте кошелёк открытым на чужом или общем компьютере.
- Информацию о новых функциях проверяйте на [telegram.org](https://telegram.org) и [fragment.com](https://fragment.com), а не в постах каналов.

Как устроен вход во Fragment и подключение кошелька: [отменили ли KYC во Fragment](/blog/fragment-kyc-verifikatsiya-bekor-qilindi).

## Нужно ли куда-то подключать кошелёк, чтобы купить Telegram Premium?

Если покупаете Premium через Premiumtg — не нужно. Не требуется ни подключать кошелёк, ни входить в аккаунт, ни сообщать код входа или пароль. Достаточно вашего username.

Оплата в сумах: через Click, Payme, Paynet или Uzum Bank. Иностранная карта не нужна. Подписка активируется автоматически за 10 секунд.

| Срок | Цена |
|---|---|
| 3 месяца | ${narx(3)} |
| 6 месяцев | ${narx(6)} |
| 12 месяцев | ${narx(12)} |

Перед покупкой уточните цену и доступные способы оплаты в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Если кто-то просит подключить кошелёк или прислать код ради Premium — это признак мошенничества. Подробнее: [безопасно ли сообщать username](/blog/username-berish-xavfsizmi).

## Часто задаваемые вопросы

### Подключение из Telegram Wallet появилось и на телефоне — это взлом?

Не обязательно, но проверить стоит. Синхронизация подключений между устройствами официально не подтверждена. Если сайт вам незнаком, отключите его и завершите незнакомые сеансы в Telegram.

### Как отключить кошелёк от Fragment?

Официальной инструкции по выходу из Fragment нет, поэтому пользуйтесь кнопкой отключения в интерфейсе сайта. После этого загляните в список подключённых сайтов в приложении кошелька.

### Если завершить сеансы в Telegram, отключатся ли подключения кошелька?

Рассчитывать на это не стоит. Список сеансов в Telegram относится ко входам в аккаунт. Подключения кошелька к сайтам проверяйте и отключайте в самом приложении кошелька.

### Может ли сайт, к которому подключён кошелёк, сам списать мои деньги?

Какие именно права даёт сайту подключение, в этой статье не подтверждено. Практическая защита простая: не подтверждайте ни один запрос, не прочитав сумму и получателя.

### Что делать, если просят отсканировать QR-код для «синхронизации сессии»?

Если об этом просит незнакомец или непонятная ссылка — не сканируйте, это популярная уловка мошенников. Сид-фразу и код входа не отдавайте никому ни при каких обстоятельствах.

### Как узнать, что функция синхронизации вышла?

Следите за официальным блогом Telegram и описаниями обновлений в самом приложении. Посты в каналах, даже популярных, официальным подтверждением не считаются.

### Нужен ли TON-кошелёк, чтобы купить Telegram Premium?

При покупке через Premiumtg — нет: вы вводите username и платите в сумах через Click, Payme, Paynet или Uzum Bank. Ни подключать кошелёк, ни присылать код не нужно.`,
  },
};
