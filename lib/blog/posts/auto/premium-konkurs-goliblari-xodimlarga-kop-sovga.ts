// Avtoblogyoz yasagan maqola (2026-11-23). Niyat: Kompaniya, agentlik yoki kanal egasi konkurs g‘oliblari yoki xodimlarga Telegram Premium’ni ko‘p miqdorda sovg‘a qilish yo‘lini qidiradi. U «konkurs g‘oliblariga Premium berish», «xodimlarga Premium sovg‘a» yoki «Telegram Premium give-away» deb yozadi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/giveaways
//   https://telegram.org/blog/giveaways
//   https://telegram.org/faq_premium
//   https://fragment.com/premium
//   https://telegram.org/blog/star-giveaways-iv-in-browser
//   https://telegram.org/tos/stars
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "premium-konkurs-goliblari-xodimlarga-kop-sovga",
  date: "2026-11-23",
  reviewed: "2026-11-23",
  category: "amaliy",
  priority: 0.7,
  title: { uz: "Konkurs g‘oliblari va xodimlarga Telegram Premium qanday sovg‘a qilinadi?", ru: "Как подарить Telegram Premium победителям конкурса и сотрудникам?" },
  excerpt: { uz: `Ikki yo‘l bor: kanalda Premium give-away o‘tkazasiz, g‘oliblarni Telegram tasodifiy tanlaydi. Yoki g‘oliblarni o‘zingiz tanlab, har biriga @username bo‘yicha Premium yuborasiz.`, ru: `Есть два способа: провести в канале розыгрыш Premium, где победителей случайно выбирает Telegram, или выбрать их самому и отправить каждому Premium по @username.` },
  keywords: ["konkurs g‘oliblariga telegram premium sovg‘a qilish","xodimlarga telegram premium sovg‘a","telegram premium give-away","telegram kanalda give-away o‘tkazish","ko‘p odamga premium sovg‘a qilish","telegram premium konkurs sovrini","розыгрыш telegram premium в канале","подарить telegram premium победителям конкурса","telegram premium сотрудникам","как провести giveaway в telegram","массово подарить telegram premium"],
  related: ["telegram-premium-sovga-qilish","telegram-premium-biznes-uchun","telegram-kanal-boost","username-orqali-premium-ulash"],
  sources: [{"url":"https://core.telegram.org/api/giveaways","title":"Giveaways and gifts"},{"url":"https://telegram.org/blog/giveaways","title":"Giveaways in Channels and Free Premium"},{"url":"https://telegram.org/faq_premium","title":"Telegram Premium FAQ"},{"url":"https://fragment.com/premium","title":"Fragment – Telegram Premium"},{"url":"https://telegram.org/blog/star-giveaways-iv-in-browser","title":"Star Giveaways and More"},{"url":"https://telegram.org/tos/stars","title":"Terms of Service for Telegram Stars"}],
  content: {
    uz: `## Konkurs g‘oliblari va jamoaga Premium’ni qanday yo‘llar bilan berish mumkin?

Ko‘p odamga Premium berishning ikki asosiy yo‘li bor. Birinchisi — kanal yoki superguruhda Telegram’ning rasmiy Premium give-away vositasi. Ikkinchisi — har bir oluvchiga @username bo‘yicha alohida Premium sovg‘asi.

[Rasmiy API hujjatiga](https://core.telegram.org/api/giveaways) ko‘ra, kanal va superguruh administratorlari qanday huquqlarga ega bo‘lishidan qat’i nazar give-away boshlay oladi. Sovg‘a qilinadigan obunalar soni va muddatini tashkilotchi belgilaydi. [Telegram blogidagi e’longa](https://telegram.org/blog/giveaways) ko‘ra, tashkilotchi bu obunalar uchun oldindan to‘laydi.

G‘oliblar oldindan ma’lum bo‘lsa, username bo‘yicha sovg‘a qulayroq. Bular xodimlar, hamkorlar yoki hakamlar va ovoz berish orqali tanlangan konkurs g‘oliblari bo‘lishi mumkin. Premiumtg botida ([@premiumtg_uzbot](https://t.me/premiumtg_uzbot)) har bir oluvchi uchun alohida buyurtma berasiz va so‘mda to‘laysiz.

> Qisqa qoida: g‘olibni Telegram tasodifiy tanlashini istasangiz, give-away o‘tkazing. G‘olibni o‘zingiz tanlasangiz, unga username bo‘yicha sovg‘a yuboring.

Bitta odamga sovg‘a qilish tartibi [Premium’ni do‘stga sovg‘a qilish](/blog/telegram-premium-sovga-qilish) maqolasida yozilgan. Bu yerda gap ko‘p oluvchi, ro‘yxat va hisobot haqida.

## Kanaldagi rasmiy give-away va username bo‘yicha sovg‘aning farqi nimada?

| Mezon | Kanaldagi rasmiy give-away | Premiumtg orqali username bo‘yicha sovg‘a |
|---|---|---|
| G‘olibni kim tanlaydi | Telegram tasodifiy tanlaydi va Premium sovg‘a kodini yuboradi | O‘zingiz tanlaysiz va g‘olibning @username’ini kiritasiz |
| G‘olib nima oladi | Sovg‘a kodi yozilgan havola | Obuna akkauntda avtomatik faollashadi, odatda 10 soniyada |
| Qatnashish shartlari | Mamlakat bo‘yicha cheklash, faqat yangi obunachilar, qo‘shimcha kanalga a’zolik, majburiy tugash sanasi | Alohida shart yo‘q, ro‘yxatni o‘zingiz tuzasiz |
| To‘lov | Obunalar uchun oldindan to‘lanadi | So‘mda: Click, Payme, Paynet yoki Uzum Bank, xorijiy karta kerak emas |
| Kanal uchun foyda | [Premium FAQ](https://telegram.org/faq_premium)ga ko‘ra, kanal 4 ta boostning hammasini darhol oladi | Kanalga boost berilishi bu maqolada tasdiqlanmagan |
| Kimga mos | Obunachilarni ko‘paytirmoqchi bo‘lgan kanal egasiga | Xodimlar, mijozlar va oldindan tanlangan g‘oliblar uchun |

Give-away’da qaysi muddatlarni tanlash mumkinligi va g‘oliblar soniga chegara bor-yo‘qligi rasmiy sahifalarda topilmadi. Buni give-away yaratish oynasida o‘zingiz tekshiring.

Ikki yo‘lni birga ishlatish ham mumkin. Masalan, obunachilar uchun kanalda give-away o‘tkazasiz, jamoangizdagi xodimlarga esa username bo‘yicha alohida sovg‘a yuborasiz.

## Qaysi muddatni tanlash kerak: 3, 6 yoki 12 oy?

Telegram Premium FAQ’ga ko‘ra, Premium’ni 3, 6 yoki 12 oyga sovg‘a qilish mumkin. Muddatni sovrinning qiymati va maqsadiga qarab tanlang.

| Muddat | Premiumtg narxi | Qaysi holatga mos |
|---|---|---|
| 3 oy | ${narx(3)} | Konkursning oddiy sovrini, Premium’ni sinab ko‘rish |
| 6 oy | ${narx(6)} | Yarim yillik rag‘bat, bayram sovg‘asi |
| 12 oy | ${narx(12)} | Xodimlar, doimiy hamkorlar, bosh sovrin |

Konkursda bir nechta o‘rin bo‘lsa, sovrinni pog‘onalarga bo‘ling. Masalan, 1-o‘ringa 12 oy, 2–3-o‘rinlarga 6 oy, qolganlarga 3 oy. Bu shartlarni konkurs e’lonida oldindan yozing, shunda keyin tortishuv chiqmaydi.

Premium FAQ’da yozilishicha, sovg‘a qilingan obunalar global narxda hisoblanadi. Shuning uchun ularni istalgan mamlakatdagi foydalanuvchiga yuborish mumkin. Xorijdagi hamkor yoki obunachi ham sovrin olishi mumkin.

Rasmiy FAQ sovg‘a uchun faqat 3, 6 va 12 oylik muddatni ko‘rsatadi. Kimgadir aynan 1 oy kerak bo‘lsa, Premiumtg’da alohida [akkauntga kirib berish xizmati](/blog/akkauntga-kirib-berish-xizmati) bor. U akkauntga kirishni talab qiladi, shuning uchun ko‘p odamga sovrin tarqatishga mos emas.

Ko‘p buyurtma uchun alohida chegirma brend shartlarida ko‘rsatilmagan. Narx va to‘lov usullarini xariddan oldin botda tekshiring.

## Kanalda rasmiy Premium give-away qanday o‘tkaziladi?

Give-away yaratishda quyidagi parametrlarni belgilaysiz. Tartib [rasmiy hujjat](https://core.telegram.org/api/giveaways)ga asoslangan.

1. Kanal yoki superguruhda admin ekaningizni tekshiring. Istalgan huquqlar to‘plami yetadi.
2. Nechta Premium obunasi va qaysi muddatga sovg‘a qilinishini belgilang.
3. Kerak bo‘lsa, ishtirokchilarni mamlakatlar ro‘yxati bilan cheklang. Ro‘yxatga nechtagacha mamlakat sig‘ishi hujjatda raqam bilan berilmagan.
4. Faqat give-away boshlangandan keyin obuna bo‘lganlar qatnashsinmi, shuni hal qiling. Qo‘shimcha kanal yoki guruhga a’zo bo‘lishni ham shart qilib qo‘yish mumkin.
5. Tugash sanasini kiriting, bu majburiy maydon.
6. Obunalar uchun oldindan to‘lang.
7. Give-away tugagach, Telegram g‘oliblarni tasodifiy tanlaydi. Ular sovg‘a kodi yozilgan havola oladi.

[Fragment’ning Premium sahifasida](https://fragment.com/premium) ham kanal obunachilariga Premium sovg‘a qilib, kanalni boost qilish imkoniyati ko‘rsatilgan. Fragment’da Premium kripto hamyon orqali olinadi, shuning uchun bu yo‘l hamyoni bor tashkilotchiga mos.

Ishlatilmay qolgan kodlar nima bo‘lishi va kod qancha muddat amal qilishi rasmiy manbalarda topilmadi. Konkurs e’lonida bu haqda hech narsa va’da qilmang.

Give-away’da ishtirokchilardan username so‘rash shart emas: qatnashish shartlarini Telegram o‘zi tekshiradi. Boost nima ekanini [kanal boost nima](/blog/telegram-kanal-boost) maqolasida o‘qing.

## Premiumtg orqali g‘oliblar va xodimlarga Premium’ni qanday yuborasiz?

Bu yo‘lda g‘olibni o‘zingiz tanlaysiz, sovg‘a esa siz ko‘rsatgan username egasiga boradi.

1. Oluvchilar ro‘yxatini tayyorlang: ism, @username va muddat (3, 6 yoki 12 oy).
2. [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botini oching, paketni tanlang va birinchi oluvchining username’ini kiriting.
3. Click, Payme, Paynet yoki Uzum Bank orqali so‘mda to‘lang. Akkauntga kirish, login kodi yoki parol so‘ralmaydi.
4. Obuna faollashganini oluvchidan so‘rab tasdiqlang. Odatda u 10 soniyada avtomatik faollashadi.
5. Ro‘yxatda buyurtmani «bajarildi» deb belgilang va keyingi oluvchiga o‘ting.

Bitta buyurtmada bir nechta oluvchi bo‘lishi mumkinmi, bu tasdiqlanmagan. Shuning uchun har bir oluvchiga alohida buyurtma bering. Savol bo‘lsa, [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport) yordam xizmatiga yozing.

Pul yechilib, obuna kelmasa, qayta to‘lamang. Chek va username bilan yordamga murojaat qiling. Jarayon batafsil [username orqali Premium ulash](/blog/username-orqali-premium-ulash) yo‘riqnomasida yozilgan.

## Ro‘yxatni yuborishdan oldin nimani tekshirish kerak?

Eng ko‘p uchraydigan xato — noto‘g‘ri username. Bitta harf xato bo‘lsa, Premium butunlay boshqa odamga ketishi mumkin. Har bir qatorni quyidagicha tekshiring:

- @ belgisi va ortiqcha bo‘shliqlar olib tashlanganmi.
- O‘xshash belgilar almashib ketmaganmi: kichik l va katta I, nol va o harfi.
- Username amaldami: Telegram qidiruvida profil ochilyaptimi.
- Profil aynan o‘sha odamnikimi: ism va rasmni solishtiring.
- Bir odam ro‘yxatga ikki marta tushib qolmaganmi.
- Kanal yoki bot emas, shaxsiy akkaunt username’i yozilganmi.
- Username’i yo‘q oluvchi bormi. Bunday odamdan avval username o‘rnatishini so‘rang.

Username’larni yig‘ishning eng ishonchli yo‘li — g‘olibning o‘zi yozib yuborishi. Konkurs natijasini e’lon qilgach, g‘oliblardan username’ini matn ko‘rinishida shaxsiy xabarda yuborishini so‘rang. Ekran nusxasidan qo‘lda ko‘chirmang.

Ro‘yxatni ikki kishi alohida tekshirgani ma’qul. Biri ro‘yxatni tuzadi, ikkinchisi har bir profilni qidiruvda ochib ko‘radi.

## Hisobot uchun qaysi ma’lumotlarni saqlash kerak?

Hisobot buxgalteriya, konkurs shaffofligi va muammoli buyurtmani yordamga ko‘rsatish uchun kerak. Har bir yuborilgan sovg‘a uchun bitta qator yozing:

| Ustun | Nima uchun kerak |
|---|---|
| Buyurtma raqami (botda ko‘rsatilsa) | Yordam xizmatida buyurtmani tez topish uchun |
| Sana va vaqt | Muammo bo‘lsa, to‘lovni chek bilan solishtirish uchun |
| Oluvchi (@username, ism) | Kimga yuborilganini isbotlash uchun |
| Paket muddati | 3, 6 yoki 12 oy, keyingi sovg‘ani rejalashtirish uchun |
| Summa va to‘lov usuli | Xarajat hisobi uchun |
| Chek raqami | To‘lovni tasdiqlash uchun |
| Holat | «Yuborildi», «tasdiqlandi», «muammo» |

Konkurs o‘tkazsangiz, g‘oliblar e’lon qilingan post havolasini va saralash qoidasini ham saqlang. Rasmiy give-away o‘tkazgan bo‘lsangiz, boshlanish va tugash sanasini hamda to‘lov tasdig‘ini yozib qo‘ying.

Hisob-faktura va yuridik shaxs uchun hujjatlar brend shartlarida ko‘rsatilmagan. Kerak bo‘lsa, buyurtmadan oldin yordam xizmatidan so‘rang.

## Stars bilan konkurs o‘tkazmoqchi bo‘lsangiz, qanday qoidalarni bilish kerak?

[Telegram blogiga](https://telegram.org/blog/star-giveaways-iv-in-browser) ko‘ra, kanal va guruh egalari Stars give-away ham o‘tkaza oladi. U ham oldindan to‘lanadi, Stars’ni g‘oliblarga Telegram avtomatik tarqatadi. G‘oliblar Stars’ni pullik media va kanallardagi eksklyuziv obunalarga sarflashi mumkin. Blogda kattaroq Stars give-away’ni arzonroq narxda yaratish mumkinligi ham aytilgan.

API hujjatida ma’lum holatda qolgan Stars tashkilotchiga qaytarilishi yozilgan. Aniq shartni [hujjatning o‘zida](https://core.telegram.org/api/giveaways) tekshiring.

> [Telegram Stars shartlari](https://telegram.org/tos/stars)ga ko‘ra, Stars xaridi yakuniy, keraksiz yoki tasodifiy xarid uchun pul qaytarilmaydi. Shaxsiy balansdagi Stars’ni sotish, yechib olish yoki boshqa akkauntga o‘tkazish mumkin emas.

Shartlarda Stars’ni sotish yoki qayta tarqatishga urinish ham taqiqlangan. Shuning uchun bot yoki servis ichida Stars’ni qayta sotishni tavsiya qilmaymiz. Stars uchinchi tomon orqali olinsa, to‘lov bo‘yicha munosabat aynan o‘sha tomon bilan bo‘ladi.

Premiumtg Premium obunasini yetkazadi. Stars’dan farqli o‘laroq, Premium obuna bo‘lib, ma’lum muddat ishlaydi. Batafsil — [Stars va Premium farqi](/blog/telegram-stars-va-premium-farqi) maqolasida.

## Xodimlar va hamjamiyatga Premium berishni qanday rejalashtirish kerak?

- **Xodimlarga.** Premium ish uchun qanday foyda berishini [biznes uchun Premium](/blog/telegram-premium-biznes-uchun) maqolasida o‘qing va jamoaga qaysi muddat mosligini shunga qarab tanlang.
- **Muddatni rejaga bog‘lang.** Yillik paketni yil boshida bering, konkurs sovrinini aksiya oxirida yuboring. Barcha sovg‘alar bir kunda yuborilsa, ularni bitta sanada qayta rejalashtirish osonroq bo‘ladi.
- **Tabrik xabarini oldindan tayyorlang.** Unda kimga, nima uchun va qancha muddatga berilganini yozing. Masalan: «Konkursda 2-o‘rinni olganingiz uchun sizga 6 oylik Telegram Premium sovg‘a qilindi».
- **Xodimlarga tushuntiring.** Premium statusni faqat Telegram beradi, «soxta Premium» texnik jihatdan yo‘q. Lekin login kodi yoki parol so‘raydigan «sovg‘a» xabarlaridan ehtiyot bo‘lish kerak: haqiqiy sovg‘a uchun bular so‘ralmaydi.

Premiumtg — mustaqil xizmat, Telegram nomidan ish yuritmaydi. Sovg‘a obunasi uchun oluvchining username’i yetarli.

## Ko‘p so‘raladigan savollar

### 10 ta konkurs g‘olibiga Premium’ni bir buyurtmada yuborsa bo‘ladimi?

Bitta buyurtmaga bir nechta oluvchi sig‘ishi tasdiqlanmagan. Har bir g‘olib uchun alohida buyurtma berib, uni ro‘yxatda belgilab borish xavfsizroq. Savol bo‘lsa, @StarsPaymeeSupport’ga yozing.

### Give-away’da g‘olibni o‘zim tanlay olamanmi?

Yo‘q. Rasmiy give-away’da g‘oliblarni Telegram tasodifiy tanlaydi. G‘olibni o‘zingiz belgilamoqchi bo‘lsangiz, unga username bo‘yicha alohida Premium sovg‘a qiling.

### Premium’ni xorijda yashovchi obunachiga sovg‘a qilsam ishlaydimi?

Telegram Premium FAQ’ga ko‘ra, sovg‘a obunalari global narxda hisoblanadi va istalgan mamlakatdagi foydalanuvchiga yuborilishi mumkin. Siz baribir so‘mda to‘laysiz, oluvchining username’i kifoya.

### Username’ni xato yozib yuborsam nima bo‘ladi?

Obuna o‘sha username egasiga, ya’ni boshqa odamga ketishi mumkin. Uni qaytarib olish va’da qilinmaydi, shuning uchun har bir username’ni oldindan tekshiring. Xato bo‘lsa, darhol chek bilan yordam xizmatiga yozing.

### Kanaldagi give-away kanalga boost beradimi?

Ha. Premium FAQ’da yozilishicha, give-away o‘tkazgan kanal 4 ta boostning hammasini darhol oladi.

### Xodimlarga Premium berish uchun ularning akkauntiga kirish kerakmi?

Yo‘q. Sovg‘a obunasi uchun xodimning @username’i yetarli, login kodi va parol so‘ralmaydi. Kod so‘ragan har qanday «sovg‘a» xabaridan ehtiyot bo‘ling.

### G‘olibga Stars yuborsam, keyin qaytarib olsa bo‘ladimi?

Telegram Stars shartlariga ko‘ra, Stars xaridi yakuniy va qaytarilmaydi. Shaxsiy balansdagi Stars’ni boshqa akkauntga o‘tkazib ham bo‘lmaydi.

### Kompaniya nomiga hisob-faktura olsa bo‘ladimi?

Bu imkoniyat brend shartlarida ko‘rsatilmagan, shuning uchun uni va’da qilmaymiz. Har bir to‘lovning chekini saqlang, yuridik hujjat kerak bo‘lsa, buyurtmadan oldin yordam xizmatidan so‘rang.`,
    ru: `## Как подарить Premium победителям конкурса и команде?

Подарить Premium сразу нескольким людям можно двумя основными способами. Первый — официальный инструмент Telegram для розыгрышей Premium в канале или супергруппе. Второй — отдельный подарок Premium каждому получателю по @username.

По [официальной документации API](https://core.telegram.org/api/giveaways), запустить розыгрыш может администратор канала или супергруппы с любым набором прав. Сколько подписок разыграть и на какой срок, решает организатор. Как сказано [в анонсе в блоге Telegram](https://telegram.org/blog/giveaways), организатор оплачивает эти подписки заранее.

Если победители известны заранее, удобнее дарить по username. Это могут быть сотрудники, партнёры или победители конкурса, которых выбрали жюри или голосование. В боте Premiumtg ([@premiumtg_uzbot](https://t.me/premiumtg_uzbot)) вы оформляете отдельный заказ на каждого получателя и платите в сумах.

> Простое правило: хотите, чтобы победителя случайно выбрал Telegram, — проводите розыгрыш. Выбираете победителя сами — дарите ему Premium по username.

Как подарить Premium одному человеку, описано в статье [как подарить Premium другу](/blog/telegram-premium-sovga-qilish). Здесь речь о нескольких получателях, списке и отчёте.

## Чем официальный розыгрыш в канале отличается от подарка по username?

| Критерий | Официальный розыгрыш в канале | Подарок по username через Premiumtg |
|---|---|---|
| Кто выбирает победителя | Telegram выбирает случайно и отправляет подарочный код Premium | Вы сами выбираете и вводите @username победителя |
| Что получает победитель | Ссылку с подарочным кодом | Подписка включается на аккаунте автоматически, обычно за 10 секунд |
| Условия участия | Ограничение по странам, только новые подписчики, подписка на дополнительный канал, обязательная дата окончания | Особых условий нет, список составляете сами |
| Оплата | Подписки оплачиваются заранее | В сумах: Click, Payme, Paynet или Uzum Bank, зарубежная карта не нужна |
| Польза для канала | По [Premium FAQ](https://telegram.org/faq_premium), канал сразу получает все 4 буста | Даёт ли такой подарок бусты каналу, в этой статье не подтверждено |
| Кому подходит | Владельцу канала, который хочет больше подписчиков | Для сотрудников, клиентов и заранее выбранных победителей |

Какие сроки подписки доступны в розыгрыше и есть ли ограничение на число победителей, на официальных страницах найти не удалось. Это видно в окне создания розыгрыша.

Способы можно сочетать. Например, для подписчиков провести розыгрыш в канале, а сотрудникам из своей команды отправить подарки по username.

## Какой срок выбрать: 3, 6 или 12 месяцев?

По Telegram Premium FAQ, Premium можно подарить на 3, 6 или 12 месяцев. Выбирайте срок по ценности приза и цели.

| Срок | Цена в Premiumtg | Когда подходит |
|---|---|---|
| 3 месяца | ${narx(3)} | Обычный приз конкурса, попробовать Premium |
| 6 месяцев | ${narx(6)} | Поощрение на полгода, праздничный подарок |
| 12 месяцев | ${narx(12)} | Сотрудникам, постоянным партнёрам, главный приз |

Если призовых мест несколько, разделите призы по уровням. Например, за 1-е место — 12 месяцев, за 2–3-е — 6 месяцев, остальным — 3 месяца. Пропишите это в объявлении о конкурсе заранее, тогда потом не будет споров.

В Premium FAQ сказано, что подаренные подписки считаются по глобальной цене. Поэтому их можно отправить пользователю из любой страны. Приз может получить и партнёр или подписчик за рубежом.

В официальном FAQ для подарка указаны только сроки 3, 6 и 12 месяцев. Если кому-то нужен ровно 1 месяц, в Premiumtg есть отдельная [услуга входа в аккаунт](/blog/akkauntga-kirib-berish-xizmati). Для неё нужен доступ к аккаунту, поэтому раздавать так призы многим людям неудобно.

Отдельная скидка за большой заказ в условиях сервиса не указана. Цену и способы оплаты проверьте в боте перед покупкой.

## Как провести официальный розыгрыш Premium в канале?

При создании розыгрыша вы задаёте следующие параметры. Порядок составлен по [официальной документации](https://core.telegram.org/api/giveaways).

1. Убедитесь, что вы администратор канала или супергруппы. Подойдёт любой набор прав.
2. Укажите, сколько подписок Premium разыгрывается и на какой срок.
3. При необходимости ограничьте участников списком стран. Сколько стран можно добавить в список, в документации числом не указано.
4. Решите, участвуют ли только те, кто подписался после старта розыгрыша. Можно также сделать обязательной подписку на дополнительный канал или группу.
5. Укажите дату окончания — это обязательное поле.
6. Оплатите подписки заранее.
7. Когда розыгрыш закончится, Telegram случайно выберет победителей. Они получат ссылку с подарочным кодом.

На [странице Premium во Fragment](https://fragment.com/premium) тоже показана возможность подарить Premium подписчикам канала и тем самым его забустить. Во Fragment Premium оплачивается через криптокошелёк, поэтому этот путь подойдёт организатору, у которого кошелёк уже есть.

Что происходит с неиспользованными кодами и сколько действует код, в официальных источниках найти не удалось. Не обещайте ничего на этот счёт в объявлении о конкурсе.

Спрашивать у участников розыгрыша username не нужно: условия участия Telegram проверяет сам. Что такое бусты, читайте в статье [что такое буст канала](/blog/telegram-kanal-boost).

## Как отправить Premium победителям и сотрудникам через Premiumtg?

В этом случае победителя выбираете вы, а подарок уходит владельцу указанного вами username.

1. Подготовьте список получателей: имя, @username и срок (3, 6 или 12 месяцев).
2. Откройте бота [@premiumtg_uzbot](https://t.me/premiumtg_uzbot), выберите пакет и введите username первого получателя.
3. Оплатите в сумах через Click, Payme, Paynet или Uzum Bank. Входить в аккаунт не нужно, код входа и пароль не запрашиваются.
4. Попросите получателя подтвердить, что подписка включилась. Обычно это происходит автоматически за 10 секунд.
5. Отметьте заказ в списке как «выполнен» и переходите к следующему получателю.

Можно ли указать в одном заказе нескольких получателей, не подтверждено. Поэтому оформляйте отдельный заказ на каждого. Если есть вопросы, пишите в поддержку [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport).

Если деньги списались, а подписка не пришла, не платите повторно. Обратитесь в поддержку с чеком и username. Подробно процесс описан в инструкции [как подключить Premium по username](/blog/username-orqali-premium-ulash).

## Что проверить перед отправкой списка?

Самая частая ошибка — неверный username. Из-за одной неправильной буквы Premium может уйти совсем другому человеку. Проверьте каждую строку:

- Убраны ли символ @ и лишние пробелы.
- Не перепутаны ли похожие символы: строчная l и заглавная I, ноль и буква o.
- Существует ли username: открывается ли профиль через поиск Telegram.
- Тот ли это человек: сверьте имя и фото.
- Не попал ли кто-то в список дважды.
- Указан ли username личного аккаунта, а не канала или бота.
- Нет ли получателей без username. Попросите их сначала его установить.

Надёжнее всего, когда победитель присылает username сам. После объявления итогов попросите победителей отправить username текстом в личные сообщения. Не перепечатывайте его вручную со скриншота.

Лучше, чтобы список проверяли два человека по отдельности. Один составляет список, второй открывает каждый профиль через поиск.

## Какие данные сохранить для отчёта?

Отчёт пригодится для бухгалтерии, прозрачности конкурса и чтобы показать проблемный заказ поддержке. На каждый отправленный подарок заведите одну строку:

| Столбец | Зачем нужен |
|---|---|
| Номер заказа (если бот его показывает) | Чтобы поддержка быстро нашла заказ |
| Дата и время | Чтобы при проблеме сверить платёж с чеком |
| Получатель (@username, имя) | Чтобы подтвердить, кому отправлено |
| Срок пакета | 3, 6 или 12 месяцев — для планирования следующего подарка |
| Сумма и способ оплаты | Для учёта расходов |
| Номер чека | Для подтверждения оплаты |
| Статус | «Отправлен», «подтверждён», «проблема» |

Если вы проводили конкурс, сохраните также ссылку на пост с итогами и правила отбора. Если проводили официальный розыгрыш, запишите даты начала и окончания и подтверждение оплаты.

Счёт-фактура и документы для юрлиц в условиях сервиса не указаны. Если они нужны, уточните в поддержке до заказа.

## Что нужно знать, если хотите разыграть Stars?

Как пишет [блог Telegram](https://telegram.org/blog/star-giveaways-iv-in-browser), владельцы каналов и групп могут проводить и розыгрыши Stars. Они тоже оплачиваются заранее, а Stars Telegram распределяет между победителями автоматически. Победители могут тратить Stars на платный контент и эксклюзивные подписки в каналах. В блоге также сказано, что крупный розыгрыш Stars можно провести дешевле.

В документации API сказано, что в определённом случае оставшиеся Stars возвращаются организатору. Точное условие смотрите [в самой документации](https://core.telegram.org/api/giveaways).

> По [условиям Telegram Stars](https://telegram.org/tos/stars), покупка Stars окончательна, за ненужную или случайную покупку деньги не возвращаются. Stars с личного баланса нельзя продать, вывести или перевести на другой аккаунт.

Условия также запрещают пытаться продавать или перераспределять Stars. Поэтому мы не советуем перепродавать Stars внутри бота или сервиса. Если Stars куплены через третью сторону, по оплате вы имеете дело именно с ней.

Premiumtg доставляет подписку Premium. Stars тратятся по мере покупок, а Premium — это подписка, которая работает определённый срок. Подробнее — в статье [чем Stars отличаются от Premium](/blog/telegram-stars-va-premium-farqi).

## Как спланировать подарки Premium для сотрудников и сообщества?

- **Сотрудникам.** О пользе Premium для работы читайте в статье [Premium для бизнеса](/blog/telegram-premium-biznes-uchun) и по ней выбирайте подходящий для команды срок.
- **Привяжите срок к плану.** Годовой пакет дарите в начале года, приз конкурса — по итогам акции. Если отправить все подарки в один день, у всех подписки закончатся одновременно и продлевать их будет проще.
- **Заранее подготовьте поздравление.** Напишите, кому, за что и на какой срок подарен Premium. Например: «За 2-е место в конкурсе вам подарен Telegram Premium на 6 месяцев».
- **Объясните сотрудникам.** Статус Premium выдаёт только Telegram, «поддельного Premium» технически не бывает. Но к «подаркам», ради которых просят код входа или пароль, стоит относиться настороженно: для настоящего подарка их не спрашивают.

Premiumtg — независимый сервис и не действует от имени Telegram. Для подарочной подписки достаточно username получателя.

## Часто задаваемые вопросы

### Можно ли отправить Premium 10 победителям конкурса одним заказом?

Можно ли указать нескольких получателей в одном заказе, не подтверждено. Безопаснее оформить отдельный заказ на каждого победителя и отмечать его в списке. Если есть вопросы, пишите в @StarsPaymeeSupport.

### Можно ли самому выбрать победителя в розыгрыше?

Нет. В официальном розыгрыше победителей случайно выбирает Telegram. Если хотите выбрать победителя сами, подарите ему Premium отдельно по username.

### Сработает ли подарок Premium подписчику, который живёт за границей?

По Telegram Premium FAQ, подарочные подписки считаются по глобальной цене и их можно отправить пользователю из любой страны. Вы при этом платите в сумах, от получателя нужен только username.

### Что будет, если я ошибусь в username?

Подписка может уйти владельцу этого username, то есть другому человеку. Вернуть её никто не обещает, поэтому проверяйте каждый username заранее. Если ошибка всё же случилась, сразу напишите в поддержку и приложите чек.

### Даёт ли розыгрыш в канале бусты?

Да. В Premium FAQ сказано, что канал, который проводит розыгрыш, сразу получает все 4 буста.

### Нужно ли входить в аккаунты сотрудников, чтобы подарить им Premium?

Нет. Для подарочной подписки достаточно @username сотрудника, код входа и пароль не нужны. Если «подарок» требует код, это повод насторожиться.

### Если я отправлю победителю Stars, можно ли потом вернуть их обратно?

По условиям Telegram Stars покупка Stars окончательна и возврату не подлежит. Перевести Stars с личного баланса на другой аккаунт тоже нельзя.

### Можно ли получить счёт-фактуру на компанию?

В условиях сервиса такая возможность не указана, поэтому мы её не обещаем. Сохраняйте чек по каждой оплате. Если нужны документы для юрлица, уточните в поддержке до заказа.`,
  },
};
