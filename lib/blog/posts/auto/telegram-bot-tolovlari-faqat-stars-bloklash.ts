// Avtoblogyoz yasagan maqola (2026-11-18). Niyat: O'zbekistondagi Telegram foydalanuvchilari va bot egalari «Telegram botlari bloklanadimi, botlarda endi faqat Stars bilan to'lanadimi» deb qidirib, Telegram ogohlantirishi va Durov postining mazmunini hamda endi nima qilish kerakligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/payments-stars
//   https://telegram.org/tos/bot-developers
//   https://core.telegram.org/api/stars
//   https://fragment.com/terms
//   https://fragment.com/stars/buy
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-bot-tolovlari-faqat-stars-bloklash",
  date: "2026-11-18",
  reviewed: "2026-11-18",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram botlari bloklanadimi? Botlarda endi faqat Stars bilan to‘lov", ru: "Заблокируют ли ботов в Telegram? Теперь оплата в ботах только в Stars" },
  excerpt: { uz: `Yo‘q, hamma botlar emas. Telegram xabariga ko‘ra, raqamli xizmat uchun Stars’dan boshqa yo‘l bilan pul olayotgan bot va mini-ilovalar ogohlantirishsiz bloklanishi mumkin.`, ru: `Нет, не всех. По сообщению Telegram, ботов и мини-приложения, которые берут оплату за цифровые услуги не через Stars, могут заблокировать без предупреждения.` },
  keywords: ["telegram botlari bloklanadimi","telegram bot to'lov faqat stars","telegram stars bot to'lov","durov stars gram botlar","mini-ilova to'lov stars","telegram bot bloklash noyabr 2026","stars sotib olish fragment","telegram боты блокируют","оплата в ботах только stars","дуров stars боты","telegram mini apps оплата звёздами","vpn боты исключение telegram"],
  related: ["telegram-stars-nima","fragment-telegram-premium","toncoin-gram-nomi-ozgardimi-rostmi","app-store-google-play-premium-qimmat"],
  sources: [{"url":"https://core.telegram.org/bots/payments-stars","title":"Bot Payments API for Digital Goods and Services"},{"url":"https://telegram.org/tos/bot-developers","title":"Telegram Bot Platform Developer Terms of Service"},{"url":"https://core.telegram.org/api/stars","title":"Telegram Stars API"},{"url":"https://fragment.com/terms","title":"Fragment Terms of Service"},{"url":"https://fragment.com/stars/buy","title":"Fragment — Buy Stars"}],
  content: {
    uz: `## Telegram botlari bloklanadimi: qisqasi nima bo‘ldi?

Hamma botlar bloklanmaydi. Telegram xabariga ko‘ra, xavf raqamli tovar yoki xizmat uchun Telegram Stars’dan boshqa yo‘l bilan pul olayotgan bot va mini-ilovalarga tegishli.

Qoidaning o‘zi yangi emas. Bot to‘lovlari bo‘yicha rasmiy hujjatda yozilishicha, bot va mini-ilovalarda raqamli tovar va xizmat uchun barcha to‘lovlar faqat Telegram Stars bilan bo‘lishi shart ([Bot Payments API for Digital Goods and Services](https://core.telegram.org/bots/payments-stars)). Yangilik shundaki, Telegram dasturchilarga bu qoidaga amalda rioya qilinishi tekshirilayotganini va buzganlar bloklanishi mumkinligini yozdi.

Voqealar tartibi:

- 2026-yil noyabrida Telegram jamoasi bot va mini-ilova dasturchilariga ogohlantirish yubordi.
- 17-noyabrda Pavel Durov o‘z Telegram kanalida qoidani qisqacha izohladi.

Hech qanday to‘lov olmaydigan oddiy botlar haqida xabarda hech narsa deyilmagan. Masalan, ma’lumot beradigan, fayl yuklaydigan yoki guruhni boshqaradigan botlar. Ulardan foydalanayotgan bo‘lsangiz, vahimaga asos yo‘q.

## Telegram dasturchilarga nima deb yozdi?

Telegram jamoasi nomidan bot va mini-ilova dasturchilariga yuborilgan xabarda asosiy qoida shunday berilgan:

> «In bots and Mini Apps, digital goods can only be sold for Telegram Stars» — bot va mini-ilovalarda raqamli tovarlar faqat Telegram Stars evaziga sotiladi.

Xabarning eng keskin qismi oqibat haqida:

> «Any bot or Mini App found accepting payment for digital goods outside Telegram Stars may be blocked at any time, without warning.» — Raqamli tovar uchun Stars’dan tashqari to‘lov olayotgani aniqlangan har qanday bot yoki mini-ilova istalgan vaqtda, ogohlantirishsiz bloklanishi mumkin.

Telegram xabarida yozilishicha, jamoa shu hafta barcha bot va mini-ilovalardagi to‘lov faolligini tahlil qilishni davom ettirmoqda. Matn «There will be no further notice» degan gap bilan tugaydi, ya’ni boshqa ogohlantirish bo‘lmaydi.

Bir izoh bor. Bu xabar ham, Durov posti ham 18-noyabr holatiga telegram.org va core.telegram.org sahifalarida e’lon qilinmagan. Shuning uchun ularni dasturchilarga yuborilgan va kanalda chop etilgan matn sifatida keltiramiz. Rasmiy hujjatlardagi qoidalarga alohida havola beriladi.

## «Raqamli xizmat» deganda aynan nima tushuniladi?

Telegram xabarida bot yoki mini-ilova pul olib, raqamli ko‘rinishda yetkazadigan har qanday narsa raqamli tovar va xizmat deb ataladi. Xabardagi misollar:

- botning o‘ziga obuna;
- botning Telegram integratsiyasiga qurilgan pullik vosita;
- uchinchi tomon AI modellariga kirish;
- shularning har biri uchun kredit va tokenlar.

Bu ro‘yxat rasmiy hujjat sahifalarida yo‘q, u faqat xabarda bor. [Dasturchilar shartlarida](https://telegram.org/tos/bot-developers) esa umumiy tamoyil yozilgan: Telegram raqamli tovar va xizmat nima ekanini Apple va Google ta’riflariga ko‘ra belgilaydi.

| Mezon | Raqamli tovar va xizmat | Jismoniy tovar va xizmat |
|---|---|---|
| Misol | Bot obunasi, AI’ga kirish, kredit va tokenlar | Qo‘lga yetkaziladigan buyum yoki joyida ko‘rsatiladigan xizmat |
| Qaysi valyutada | Faqat Telegram Stars | Boshqa valyuta va to‘lov provayderlari mumkin |
| To‘lov qanday o‘tadi | Bitim Stars almashinuvi orqali | Tashqi provayder orqali; Telegram bu to‘lovni o‘zi amalga oshirmaydi |
| provider_token | Kerak emas | Kerak |
| Yangi xabardagi bloklash ogohlantirishi | Tegishli | Xabarda tilga olinmagan |

Jadvaldagi jismoniy tovar bo‘yicha qoidalar [Bot Payments API](https://core.telegram.org/bots/payments-stars) va dasturchilar shartlaridan olingan. Telegram xabarida jismoniy tovar uchun yangi cheklov ham, bloklanadigan botlar ro‘yxati ham yo‘q. Bu borada taxmin qilmaymiz.

## Nega endi faqat Stars: Apple va Google’ning bunga aloqasi bormi?

Bor. Telegram xabaridagi izohga ko‘ra, Apple va Google ilova ichida sotiladigan raqamli tovar va xizmatlar ularning in-app to‘lov tizimi orqali to‘lanishini talab qiladi. Xabarda Apple’ning App Review Guidelines 3.1.1 va 4.7 bandlari hamda Google Play to‘lov siyosati tilga olingan. Telegram Stars aynan shu in-app xaridlar orqali sotiladi. Demak, bot Stars bilan to‘lov olsa, do‘kon talabi bajariladi.

Bu bandlarning matnini o‘zimiz tekshirmadik, ular Telegram xabarida tilga olingani uchun keltirilmoqda.

Telegram’ning [dasturchilar shartlari](https://telegram.org/tos/bot-developers) ham shu yo‘nalishda:

- raqamli tovar va xizmat to‘lovlarini uchinchi tomon to‘lov provayderlari orqali o‘tkazib bo‘lmaydi;
- bunday bitimlar faqat Telegram Stars almashinuvi orqali amalga oshirilishi kerak.

Do‘konlar ilova ichidagi xaridlarga qanday shart qo‘yishi va bu narxga qanday ta’sir qilishi haqida [App Store va Google Play haqidagi maqolada](/blog/app-store-google-play-premium-qimmat) yozganmiz.

## Durov nima dedi va nima qilmoqchi?

Pavel Durov 2026-yil 17-noyabrda o‘z Telegram kanalida qisqa post yozdi. Unda to‘rtta fikr bor:

- **Qoida.** Botlar va mini-ilovalar raqamli xizmatlar uchun faqat Stars qabul qila oladi. Postda Stars yonida Grams ham yulduzcha bilan qavs ichida berilgan. Bu yulduzcha nimani anglatishi postda izohlanmagan.
- **Sabab.** «Why? Apple and Google rules require Stars.» — Nega? Apple va Google qoidalari Stars’ni talab qiladi.
- **Yo‘l.** Foydalanuvchilar Stars’ni Fragment’da Gram bilan sotib olishi mumkin.
- **Istisno.** «VPN bots in authoritarian countries are exempt.» — Avtoritar davlatlardagi VPN botlar istisno. Durov yozishicha, ular «can take any payment», ya’ni istalgan to‘lovni olishi mumkin.

VPN istisnosi rasmiy hujjatlarda yo‘q, u faqat Durov postida bor. Qaysi davlatlar «avtoritar» deb hisoblanishi postda ko‘rsatilmagan. Shuning uchun O‘zbekistondagi VPN botlar haqida xulosa chiqarmaymiz.

Durov nima qilmoqchi? Postning o‘zidan chiqadigan javob shu: Telegram botlarda Apple va Google qoidalariga rioya qilmoqchi va foydalanuvchilarga Stars’ni Gram bilan olish yo‘lini ko‘rsatyapti. Postda bundan boshqa maqsad, yangi taqiq yoki sana aytilmagan.

Gram nomi qayerdan chiqqani va uning Toncoin bilan bog‘liqligi haqida [alohida maqola](/blog/toncoin-gram-nomi-ozgardimi-rostmi) bor.

## Botlardagi kripto to‘lovlar bilan endi nima bo‘ladi?

> Telegram xabarida yozilishicha, bot yoki mini-ilova kriptoni saqlash, almashtirish (exchange) va swap’dan tashqari kripto amallarni bajarsa, faqat GRAM ishlatishi mumkin.

Ya’ni saqlash, almashtirish va swap bu cheklovga kirmaydi. Boshqa kripto amallar uchun faqat GRAM ishlatilishi kerak. Qaysi amallar nazarda tutilgani xabarda sanab o‘tilmagan.

Foydalanuvchi uchun xulosa oddiy. Bot raqamli xizmat uchun boshqa kriptoda yoki kartaga to‘lov so‘rasa, shoshilmang. Bunday bot yangi talabga zid ishlayotgan bo‘lishi mumkin.

Stars qanday valyuta ekani haqida [Telegram Stars nima](/blog/telegram-stars-nima) maqolasida, Fragment va kripto to‘lov qanday ishlashi haqida esa [Fragment haqidagi maqolada](/blog/fragment-telegram-premium) yozganmiz.

## Oddiy foydalanuvchi endi nima qilishi kerak?

1. Botga pul to‘lamasangiz, hech narsa qilish shart emas.
2. Bot ichidagi raqamli xizmatga (obuna, AI so‘rovlari, kreditlar) endi Stars bilan to‘lash kutiladi. Bot kartaga o‘tkazma yoki tashqi havola orqali to‘lov so‘rasa, o‘ylab ko‘ring. Bunday bot istalgan vaqtda bloklanishi mumkin, to‘lagan xizmatingiz esa to‘xtab qoladi.
3. Telegram xabariga ko‘ra, Stars ilova ichidagi xaridlar orqali sotiladi. Durov ko‘rsatgan boshqa yo‘l — [Fragment’da Gram bilan sotib olish](https://fragment.com/stars/buy). U yerda Stars balansini o‘zingiz yoki do‘stlaringiz uchun to‘ldirish mumkin. Narxlar o‘zgarib turadi, joriy narxni sahifaning o‘zida ko‘ring.
4. So‘mda to‘lamoqchi bo‘lsangiz, Premiumtg botini oching: [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Stars bo‘yicha xizmat hozir bor-yo‘qligini, narxni va mavjud to‘lov usullarini xariddan oldin botda tekshiring.
5. Oldin pul to‘lagan botingiz ishlamay qolsa, bot egasiga yozing. Stars bilan to‘langan raqamli xizmat uchun bot egasi pulni refundStarPayment metodi orqali qaytara oladi.

> Shov-shuvdan firibgarlar ham foydalanadi. «Botingiz bloklanadi, to‘lovni shu yerga o‘tkazing» yoki «akkauntingizni tasdiqlang» degan xabarlarga ishonmang. Telegram login kodi va ikki bosqichli parolni hech kimga bermang. Batafsil — [firibgarlardan himoya haqidagi maqolada](/blog/telegram-premium-firibgarlikdan-himoya).

## Bot egasi to‘lovni Stars’ga qanday o‘tkazadi va pulni qanday yechadi?

Quyidagi qadamlar [Bot Payments API](https://core.telegram.org/bots/payments-stars), [Telegram Stars API](https://core.telegram.org/api/stars) va [Fragment shartlariga](https://fragment.com/terms) asoslangan:

1. Hisob-fakturada currency maydoniga **XTR** yozing. Raqamli tovar va xizmatlar faqat Telegram Stars’da sotiladi.
2. Raqamli tovar uchun provider_token kerak emas. Bu parametr faqat jismoniy tovar va xizmat sotishda ishlatiladi.
3. Raqamli xizmat uchun kartaga, tashqi to‘lov sahifasiga yoki kripto havolasiga yo‘naltiruvchi to‘lovlarni olib tashlang. Dasturchilar shartlariga ko‘ra, bunday to‘lov uchinchi tomon provayderi orqali o‘tmasligi kerak.
4. Pulni qaytarishni refundStarPayment metodi orqali yo‘lga qo‘ying.
5. Stars’ni yechish uchun maxsus metodni chaqiring: u noyob Fragment sahifasining havolasini qaytaradi. Yechish faqat balans stars_revenue_withdrawal_min qiymatidan kam bo‘lmaganda mumkin. Joriy eng kam miqdorni o‘zingiz tekshiring.
6. Fragment sahifasida Telegram akkauntingiz va TON hamyoningizni ulab, mukofotni oling.

Yechishdan oldin bilish kerak bo‘lgan shartlar:

- Dasturchilar shartlariga ko‘ra, har bir Star uchun 0,013 USD ga teng mukofot olish mumkin.
- Bot balansidagi Stars Telegram’ga tegishli va o‘z-o‘zidan qiymatga ega emas.
- Mukofot olingach, tranzaksiya blokcheynda saqlanadi va uni bekor qilib bo‘lmaydi.
- Fragment Stars mukofotini olish imkoniyatini vaqtincha yoki butunlay olib qo‘yishi mumkin.
- Mukofot qaysi tangada berilishini yechish paytida Fragment sahifasida tekshiring.

## Nimalar hali noma’lum?

- Tekshiruv qachon tugashi va aynan qaysi botlar bloklanishi aytilmagan.
- VPN istisnosi rasmiy hujjatlarga qo‘shiladimi-yo‘qmi, noma’lum.
- Bloklangan botlar uchun shikoyat yoki qayta tiklash tartibi bor-yo‘qligi aytilmagan.
- Durov postidagi Grams izohi nimani anglatishi tushuntirilmagan.
- Telegram xabarida Telegram Premium xaridi alohida tilga olinmagan.

Rasmiy hujjatlar yangilanib turadi. Shu sababli bot orqali qilinadigan har qanday xariddan oldin narx, to‘lov usuli va shartlarni o‘sha kuni tekshiring. Bu Premiumtg botiga ham tegishli.

## Ko‘p so‘raladigan savollar

### Mening sevimli botim bloklanadimi?

Agar bot sizdan pul olmasa yoki raqamli xizmat uchun faqat Stars qabul qilsa, ogohlantirish unga tegishli emas. Xavf karta, tashqi havola yoki boshqa yo‘l bilan to‘lov olayotgan botlarda. Bloklanadigan botlar ro‘yxati e’lon qilinmagan.

### Bot kartaga to‘lov so‘rasa, bu endi qoidabuzarlikmi?

Agar gap raqamli xizmat haqida bo‘lsa, ha: Telegram shartlari bunday to‘lovni uchinchi tomon provayderi orqali o‘tkazishni taqiqlaydi. Jismoniy tovar yoki xizmat uchun esa karta va boshqa provayderlar ishlatilishi mumkin.

### VPN botlar ham faqat Stars bilan to‘lov oladimi?

Durov postiga ko‘ra, avtoritar davlatlardagi VPN botlar istisno va istalgan to‘lovni olishi mumkin. Bu istisno hali rasmiy hujjatlarga kiritilmagan, qaysi davlatlar nazarda tutilgani ham aytilmagan.

### Stars’ni O‘zbekistonda so‘mda qanday olish mumkin?

Fragment’da Stars Gram bilan sotib olinadi. So‘mda to‘lamoqchi bo‘lsangiz, @premiumtg_uzbot’da Stars bo‘yicha xizmat, narx va to‘lov usullari bor-yo‘qligini xariddan oldin tekshiring.

### Jismoniy tovar sotadigan do‘kon botlariga ham bu qoida tegishlimi?

Bot Payments API jismoniy tovar va xizmat uchun boshqa valyuta va provayderlarga ruxsat beradi. Telegram’ning yangi ogohlantirishi faqat raqamli tovar va xizmatlarga tegishli.

### Bot bloklansa, oldin to‘lagan obunam yo‘qoladimi?

Bunday holat uchun rasmiy tartib yozilmagan. Bot egasiga murojaat qiling. Stars bilan to‘langan bo‘lsa, u pulni Bot API’dagi qaytarish metodi bilan qaytara oladi, lekin buni egasi hal qiladi.

### «Faqat Stars» talabi Telegram Premium xaridiga ta’sir qiladimi?

Telegram xabarida Premium obunasi alohida tilga olinmagan, shuning uchun taxmin qilmaymiz. Premium statusni baribir faqat Telegram beradi. Narx va to‘lov usulini xariddan oldin @premiumtg_uzbot’da tekshiring.

### Bot egasi bitta Star uchun qancha pul oladi?

Dasturchilar shartlarida har bir Star uchun 0,013 USD ga teng mukofot ko‘rsatilgan. Mukofot Fragment orqali olinadi, buning uchun Telegram akkaunti va TON hamyon ulanadi.`,
    ru: `## Заблокируют ли ботов в Telegram: что произошло?

Блокировать будут не всех ботов. Согласно сообщению Telegram, под угрозой те боты и мини-приложения, которые берут деньги за цифровые товары или услуги любым способом, кроме Telegram Stars.

Само правило не новое. В официальной документации по платежам в ботах сказано, что все платежи за цифровые товары и услуги в ботах и мини-приложениях должны проходить только в Telegram Stars ([Bot Payments API for Digital Goods and Services](https://core.telegram.org/bots/payments-stars)). Новость в другом: Telegram написал разработчикам, что соблюдение правила проверяют на практике и нарушителей могут заблокировать.

Хронология событий:

- В ноябре 2026 года команда Telegram разослала предупреждение разработчикам ботов и мини-приложений.
- 17 ноября Павел Дуров коротко пояснил правило в своём Telegram-канале.

Об обычных ботах, которые вообще не принимают оплату, в сообщении ничего не сказано. Это, например, боты, которые выдают справочную информацию, скачивают файлы или управляют группой. Если вы пользуетесь такими ботами, поводов для паники нет.

## Что Telegram написал разработчикам?

В сообщении, отправленном от имени команды Telegram разработчикам ботов и мини-приложений, главное правило сформулировано так:

> «In bots and Mini Apps, digital goods can only be sold for Telegram Stars» — в ботах и мини-приложениях цифровые товары продаются только за Telegram Stars.

Самая жёсткая часть сообщения — о последствиях:

> «Any bot or Mini App found accepting payment for digital goods outside Telegram Stars may be blocked at any time, without warning.» — Любой бот или мини-приложение, которые принимают оплату за цифровые товары не через Stars, могут быть заблокированы в любой момент и без предупреждения.

В сообщении также говорится, что на этой неделе команда продолжает анализировать платёжную активность во всех ботах и мини-приложениях. Заканчивается текст фразой «There will be no further notice» — то есть других предупреждений не будет.

Одна оговорка. По состоянию на 18 ноября ни это сообщение, ни пост Дурова не опубликованы на страницах telegram.org и core.telegram.org. Поэтому мы приводим их как текст, разосланный разработчикам и опубликованный в канале. На правила из официальной документации даём отдельные ссылки.

## Что именно считается «цифровой услугой»?

В сообщении Telegram цифровыми товарами и услугами называется всё, за что бот или мини-приложение берёт деньги и что доставляется в цифровом виде. Примеры из сообщения:

- подписка на самого бота;
- платный инструмент, построенный на интеграции бота с Telegram;
- доступ к сторонним AI-моделям;
- кредиты и токены для любого из перечисленного.

Этого списка нет в официальной документации — он есть только в сообщении. В [условиях для разработчиков](https://telegram.org/tos/bot-developers) записан общий принцип: Telegram определяет, что такое цифровые товары и услуги, по определениям Apple и Google.

| Критерий | Цифровые товары и услуги | Физические товары и услуги |
|---|---|---|
| Пример | Подписка на бота, доступ к AI, кредиты и токены | Вещь, которую доставляют в руки, или услуга на месте |
| В какой валюте | Только Telegram Stars | Можно другие валюты и платёжных провайдеров |
| Как проходит оплата | Сделка через обмен Stars | Через внешнего провайдера; сам Telegram такие платежи не проводит |
| provider_token | Не нужен | Нужен |
| Предупреждение о блокировке из нового сообщения | Касается | В сообщении не упоминается |

Правила для физических товаров в таблице взяты из [Bot Payments API](https://core.telegram.org/bots/payments-stars) и условий для разработчиков. В сообщении Telegram нет ни новых ограничений для физических товаров, ни списка ботов под блокировку. Гадать на этот счёт не будем.

## Почему только Stars: при чём тут Apple и Google?

При том. Согласно пояснению в сообщении Telegram, Apple и Google требуют, чтобы цифровые товары и услуги внутри приложения оплачивались через их систему встроенных покупок. В сообщении упоминаются пункты 3.1.1 и 4.7 App Review Guidelines от Apple и политика платежей Google Play. Telegram Stars продаются как раз через такие встроенные покупки. Значит, если бот принимает оплату в Stars, требование магазинов выполняется.

Текст этих пунктов мы сами не проверяли — приводим их потому, что они упомянуты в сообщении Telegram.

[Условия для разработчиков](https://telegram.org/tos/bot-developers) Telegram говорят о том же:

- платежи за цифровые товары и услуги нельзя проводить через сторонних платёжных провайдеров;
- такие сделки должны совершаться исключительно через обмен Telegram Stars.

Какие условия магазины ставят для встроенных покупок и как это влияет на цену, мы разбирали в [статье про App Store и Google Play](/blog/app-store-google-play-premium-qimmat).

## Что сказал Дуров и чего он добивается?

17 ноября 2026 года Павел Дуров опубликовал в своём Telegram-канале короткий пост. В нём четыре мысли:

- **Правило.** Боты и мини-приложения могут принимать за цифровые услуги только Stars. Рядом со Stars в посте в скобках со звёздочкой указаны Grams. Что означает эта звёздочка, в посте не объясняется.
- **Причина.** «Why? Apple and Google rules require Stars.» — Почему? Этого требуют правила Apple и Google.
- **Способ.** Пользователи могут купить Stars на Fragment за Gram.
- **Исключение.** «VPN bots in authoritarian countries are exempt.» — VPN-боты в авторитарных странах — исключение. По словам Дурова, они «can take any payment», то есть могут принимать любую оплату.

Исключения для VPN в официальной документации нет — оно есть только в посте Дурова. Какие страны считаются «авторитарными», в посте не указано. Поэтому выводов о VPN-ботах в Узбекистане мы не делаем.

Чего добивается Дуров? Из самого поста следует только одно: Telegram хочет, чтобы боты соответствовали правилам Apple и Google, и показывает пользователям, как купить Stars за Gram. Других целей, новых запретов или сроков в посте нет.

Откуда взялось название Gram и как оно связано с Toncoin, читайте в [отдельной статье](/blog/toncoin-gram-nomi-ozgardimi-rostmi).

## Что теперь будет с криптоплатежами в ботах?

> Согласно сообщению Telegram, если бот или мини-приложение выполняет криптооперации, кроме хранения, обмена (exchange) и свопа, оно может использовать только GRAM.

То есть хранение, обмен и своп под это ограничение не попадают. Для остальных криптоопераций должен использоваться только GRAM. Какие именно операции имеются в виду, в сообщении не перечислено.

Вывод для пользователя простой. Если бот просит оплатить цифровую услугу в другой криптовалюте или переводом на карту, не торопитесь. Такой бот, возможно, работает вразрез с новым требованием.

Что за валюта Stars, мы объясняли в статье [«Что такое Telegram Stars»](/blog/telegram-stars-nima), а как работают Fragment и криптооплата — в [статье про Fragment](/blog/fragment-telegram-premium).

## Что делать обычному пользователю?

1. Если вы не платите ботам, ничего делать не нужно.
2. За цифровые услуги внутри бота (подписки, AI-запросы, кредиты) теперь ожидается оплата в Stars. Если бот просит перевод на карту или оплату по внешней ссылке, подумайте дважды. Такого бота могут заблокировать в любой момент, и оплаченная услуга перестанет работать.
3. По сообщению Telegram, Stars продаются через встроенные покупки в приложении. Другой способ, который назвал Дуров, — [купить Stars на Fragment за Gram](https://fragment.com/stars/buy). Там можно пополнить баланс Stars себе или друзьям. Цены меняются, актуальную смотрите на самой странице.
4. Если хотите платить в сумах, откройте бот Premiumtg: [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Перед покупкой проверьте в боте, доступна ли сейчас услуга по Stars, какая цена и какие способы оплаты.
5. Если бот, которому вы уже заплатили, перестал работать, напишите его владельцу. За цифровую услугу, оплаченную в Stars, владелец бота может вернуть деньги методом refundStarPayment.

> На шумихе зарабатывают и мошенники. Не верьте сообщениям вроде «ваш бот будет заблокирован, переведите оплату сюда» или «подтвердите аккаунт». Никому не сообщайте код входа в Telegram и пароль двухэтапной проверки. Подробнее — в [статье о защите от мошенников](/blog/telegram-premium-firibgarlikdan-himoya).

## Как владельцу бота перевести оплату на Stars и вывести деньги?

Шаги ниже основаны на [Bot Payments API](https://core.telegram.org/bots/payments-stars), [Telegram Stars API](https://core.telegram.org/api/stars) и [условиях Fragment](https://fragment.com/terms):

1. В счёте укажите **XTR** в поле currency. Цифровые товары и услуги продаются только в Telegram Stars.
2. Для цифровых товаров provider_token не нужен. Этот параметр используется только при продаже физических товаров и услуг.
3. Уберите оплату цифровых услуг через карту, внешнюю платёжную страницу или криптоссылку. По условиям для разработчиков, такие платежи не должны проходить через сторонних провайдеров.
4. Настройте возвраты через метод refundStarPayment.
5. Для вывода Stars вызовите специальный метод: он вернёт ссылку на уникальную страницу Fragment. Вывести можно, только если баланс не меньше значения stars_revenue_withdrawal_min. Актуальный минимум проверьте сами.
6. На странице Fragment подключите свой Telegram-аккаунт и TON-кошелёк и получите вознаграждение.

Что нужно знать до вывода:

- По условиям для разработчиков, за каждую Star можно получить вознаграждение, эквивалентное 0,013 USD.
- Stars на балансе бота принадлежат Telegram и сами по себе ценности не имеют.
- После получения вознаграждения транзакция записывается в блокчейн, и отменить её нельзя.
- Fragment может временно или навсегда лишить возможности получать вознаграждение за Stars.
- В какой монете выплачивается вознаграждение, проверьте на странице Fragment в момент вывода.

## Что пока неизвестно?

- Не сказано, когда закончится проверка и какие именно боты будут заблокированы.
- Неизвестно, появится ли исключение для VPN в официальной документации.
- Не сказано, есть ли порядок обжалования или восстановления заблокированных ботов.
- Не объяснено, что означает пометка о Grams в посте Дурова.
- Покупка Telegram Premium в сообщении Telegram отдельно не упоминается.

Официальная документация регулярно обновляется. Поэтому перед любой покупкой через бота проверяйте цену, способ оплаты и условия в тот же день. Это касается и бота Premiumtg.

## Часто задаваемые вопросы

### Заблокируют ли моего любимого бота?

Если бот не берёт с вас денег или принимает за цифровые услуги только Stars, предупреждение его не касается. Риск есть у ботов, которые принимают оплату на карту, по внешней ссылке или другим способом. Список ботов под блокировку не публиковался.

### Если бот просит оплату на карту, это теперь нарушение?

Если речь о цифровой услуге — да: условия Telegram запрещают проводить такие платежи через сторонних провайдеров. За физические товары и услуги можно платить картой и через других провайдеров.

### VPN-боты тоже принимают оплату только в Stars?

По словам Дурова, VPN-боты в авторитарных странах — исключение и могут принимать любую оплату. В официальную документацию это исключение пока не внесено, и какие страны имеются в виду, не уточняется.

### Как купить Stars в Узбекистане за сумы?

На Fragment Stars покупают за Gram. Если хотите платить в сумах, перед покупкой проверьте в @premiumtg_uzbot, есть ли услуга по Stars, какая цена и какие способы оплаты доступны.

### Касается ли правило ботов-магазинов с физическими товарами?

Bot Payments API разрешает для физических товаров и услуг другие валюты и провайдеров. Новое предупреждение Telegram касается только цифровых товаров и услуг.

### Если бота заблокируют, пропадёт ли оплаченная подписка?

Официального порядка для такой ситуации нет. Обратитесь к владельцу бота: если вы платили в Stars, он может вернуть деньги методом возврата из Bot API, но решение за ним.

### Влияет ли требование «только Stars» на покупку Telegram Premium?

Подписка Premium в сообщении Telegram отдельно не упоминается, поэтому гадать не будем. Статус Premium в любом случае выдаёт только Telegram. Цену и способ оплаты проверьте в @premiumtg_uzbot перед покупкой.

### Сколько владелец бота получает за одну Star?

В условиях для разработчиков указано вознаграждение, эквивалентное 0,013 USD за каждую Star. Его получают через Fragment, подключив Telegram-аккаунт и TON-кошелёк.`,
  },
};
