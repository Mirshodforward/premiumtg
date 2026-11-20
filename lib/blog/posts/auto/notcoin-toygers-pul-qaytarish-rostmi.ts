// Avtoblogyoz yasagan maqola (2026-11-20). Niyat: Toygers o‘yinchoqlariga buyurtma berib pul yo‘qotgan Telegram foydalanuvchisi Notcoin pulni haqiqatan qaytaryaptimi, qanday olinadi va bu firibgarlik emasmi, deb «Notcoin Toygers pul qaytarish» so‘rovi bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   (faqat brend faktlari)
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "notcoin-toygers-pul-qaytarish-rostmi",
  date: "2026-11-20",
  reviewed: "2026-11-20",
  category: "xavfsizlik",
  priority: 0.7,
  title: { uz: "Notcoin Toygers uchun pul qaytaryaptimi? Xabar rostmi, qanday olinadi", ru: "Notcoin возвращает деньги за Toygers? Правда ли это и как получить возврат" },
  excerpt: { uz: `Rasman tasdiqlanmagan: Notcoin Toygers o‘yinchoqlari uchun pul qaytarayotgani haqida faqat kanal posti yozgan, rasmiy e’lon topilmadi. Kod, seed-ibora va «komissiya» bermang.`, ru: `Официально не подтверждено: о возврате денег за игрушки Toygers написал только пост в канале, официального объявления нет. Не отдавайте коды, сид-фразу и «комиссию».` },
  keywords: ["Notcoin Toygers pul qaytarish","Toygers skam","Notcoin pul qaytaryaptimi","Toygers o‘yinchoqlar firibgarlik","Notcoin refund USDT","Notcoin bot pul qaytarish rostmi","Notcoin Toygers возврат средств","Toygers скам","Notcoin возврат денег Toygers","Notcoin бот возврат USDT","Toygers игрушки обман"],
  related: ["ton-gram-almashtirish-migratsiya-firibgarlik","telegram-stars-refund-firibgarlik-rostmi","ton-hamyonga-spam-nft-keldi-xavflimi","telegram-premium-firibgarlikdan-himoya"],
  sources: [],
  content: {
    uz: `## Notcoin Toygers o‘yinchoqlari uchun pulni haqiqatan qaytaryaptimi?

Rasman tasdiqlanmagan. 2026-yil 20-noyabrda rasmiy manbalarni tekshirdik: ularda Toygers nomi ham, Notcoin pul qaytarayotgani haqidagi e’lon ham topilmadi.

Xabar Telegram kanallarida tarqalgan bitta postga tayanadi. Postga ko‘ra, Notcoin o‘zining reklama hamkori Toygers sotgan o‘yinchoqlar uchun to‘langan pulni qaytarishni boshlagan.

Bu xabar yolg‘on bo‘lishi shart emas. E’lon Notcoin’ning o‘z kanalida chiqqan bo‘lishi mumkin, lekin biz uni rasmiy manbada ko‘rmadik. Shuning uchun har bir qadamni o‘zingiz tekshiring.

Asosiy xavf boshqa joyda. Pul yo‘qotgan odam uni tezroq qaytarib olishga shoshiladi. Firibgarlar aynan shundan foydalanadi: «pul qaytarish» xabarini ko‘chirib olib, soxta bot yoki sayt orqali odamni ikkinchi marta aldaydi.

## Postda nima deyilgan va qaysi qismi tasdiqlanmagan?

| Postdagi da’vo | Holat (2026-yil 20-noyabr) |
|---|---|
| Notcoin Toygers’dan zarar ko‘rganlarga pul qaytarishni boshlagan | Rasmiy manbada topilmadi |
| Toygers Notcoin’ning reklama hamkori bo‘lgan va firibgarlik qilgan | Rasmiy manbada topilmadi |
| Pulni Notcoin nomidagi botda maxsus buyruq bilan so‘rash mumkin | Bot ham, buyruq ham rasmiy manbada uchramadi |
| Qaytarish uchun Notcoin vakili o‘z cho‘ntagidan $100 000 ajratgan | Rasmiy manbada topilmadi |
| To‘lovlar TON tarmog‘idagi USDT’da qilinadi | Toygers bo‘yicha tasdiq topilmadi |

Bot username’ini va buyruqni bu yerda ataylab takrorlamaymiz. Kanaldan kanalga ko‘chirilib yurgan username’ni firibgar osongina o‘zinikiga almashtiradi. Bot havolasini faqat Notcoin’ning rasmiy kanalidan oling.

## Pul qaytarish xabarini qanday xavfsiz tekshirasiz?

1. Xabarni qayta yuborilgan post yoki guruh chatidan emas, Notcoin’ning siz ilgaridan obuna bo‘lgan rasmiy kanalidan qidiring.
2. Rasmiy kanalda e’lon bo‘lsa, botga undagi havola orqali o‘ting. Boshqa joydan ko‘chirilgan username’ni qidiruvga yozmang.
3. Bot username’ini harfma-harf solishtiring. Bitta ortiqcha harf, almashtirilgan belgi yoki «_support», «_refund» kabi qo‘shimchalar bo‘lsa, shubhalaning.
4. Bot nima so‘rayotganiga qarang. Buyurtma ma’lumoti va pul tushadigan manzilni so‘rashi mumkin. Kod, seed-ibora yoki oldindan to‘lov so‘rasa, bu xavf belgisi.
5. Rasmiy e’lon topilmasa, kuting. Hech qanday botga yozmang, hamyonni hech qayerga ulamang.

Rasmiy e’lon chiqsa, unda kim pul qaytarishga haqli ekani, qanday dalil kerakligi va to‘lov qaysi tarmoqda qilinishi yozilgan bo‘lishi kerak. Bu shartlar aniq bo‘lmasa, ularni o‘sha rasmiy kanal orqali so‘rang.

«Zudlik bilan almashtiring» degan shunga o‘xshash xabarlar qanday tuzilishini [TON’ni GRAM’ga almashtirish kerakmi](/blog/ton-gram-almashtirish-migratsiya-firibgarlik) maqolasida tahlil qilganmiz.

## «Pul qaytarish» niqobidagi firibgarlikni qaysi belgilardan tanisiz?

- Pulni qaytarishdan oldin sizdan «komissiya», «tarmoq to‘lovi» yoki «tasdiqlash summasi» yuborishni so‘rashadi.
- Seed-ibora (hamyonni tiklaydigan so‘zlar), hamyon paroli, Telegram login kodi yoki 2FA paroli so‘raladi.
- Saytga hamyonni ulab, tranzaksiyani «qaytarishni olish uchun» tasdiqlashni so‘rashadi. Aslida bu tasdiq mablag‘ingizni yechib olishga ruxsat bo‘lib chiqishi mumkin.
- Shoshiltirishadi: «faqat bugun», «mablag‘ tugayapti», «oxirgi navbat».
- Shaxsiy xabarga «Notcoin yordami» nomidan notanish akkaunt yozadi. Bunday murojaatni rasmiy deb qabul qilmang.
- Hamyoningizga noma’lum token yoki NFT kelib tushadi, ichida «refund olish» havolasi bo‘ladi. Bunday holatda nima qilish kerakligini [hamyonga noma’lum NFT keldi](/blog/ton-hamyonga-spam-nft-keldi-xavflimi) maqolasida yozganmiz.

Katta summalar tilga olingan refund xabarlarini tekshirishga yana bir misol: [Stars refund firibgarligi haqidagi xabar](/blog/telegram-stars-refund-firibgarlik-rostmi).

## Qaytarishni olish uchun nima berish mumkin, nima mumkin emas?

Pul qabul qilish uchun odatda faqat qabul qiluvchi hamyon manzili kerak bo‘ladi. Manzil ochiq ma’lumot: uni bilgan odam unga pul yubora oladi, lekin undan pul yecha olmaydi.

> Hech qachon bermang: seed-ibora, shaxsiy kalit, Telegram login kodi, 2FA paroli, karta CVV kodi va SMS kodlar. Pul olish uchun avval pul yuborish talab qilinsa, shu yerda to‘xtang.

Yana bir nozik jihat — tarmoq. Postda to‘lovlar TON tarmog‘idagi USDT’da bo‘lishi aytilgan, lekin bu maqolada tasdiqlanmagan. Shartni rasmiy e’londan o‘qimasdan boshqa tarmoqdagi manzilni bermang: noto‘g‘ri tarmoqqa yuborilgan mablag‘ni qaytarish qiyin bo‘lishi mumkin.

## Toygers’ga to‘langan pulni boshqa yo‘l bilan qaytarish mumkinmi?

Notcoin pulni qaytarmasa ham, qo‘lingizdagi dalillar keyin kerak bo‘ladi. Ularni hozirdan yig‘ib qo‘ying.

1. Dalillarni jamlang: buyurtma skrinshoti, chek, karta ko‘chirmasi yoki tranzaksiya xeshi, sotuvchi bilan yozishmalar. Sana va summani alohida yozib qo‘ying.
2. Toygers reklamasini qayerda ko‘rgan bo‘lsangiz, o‘sha post va sotuvchi profilining skrinshotini oling. Post o‘chirilsa ham dalil sizda qoladi.
3. Karta yoki Click, Payme, Paynet, Uzum Bank kabi to‘lov xizmati orqali to‘lagan bo‘lsangiz, o‘sha xizmat yoki bankning yordam bo‘limiga yozing. Nizo qanday shartlarda ko‘rib chiqilishini faqat o‘zlari aytadi, natijasi oldindan ma’lum emas.
4. Kripto bilan to‘lagan bo‘lsangiz, tranzaksiyani eksplorerda manzil yoki xesh bo‘yicha toping va havolasini saqlang. Blokcheyndagi o‘tkazmani odatda bekor qilib bo‘lmaydi, shuning uchun pulni amalda faqat sotuvchi yoki loyihaning o‘zi qaytara oladi.
5. Firibgar akkaunt, bot yoki kanal ustidan Telegram ichidagi «Shikoyat» (Report) tugmasi orqali shikoyat qiling.
6. «Pulingizni qaytarib beramiz» deb yozadigan begonalarga ishonmang. Bunday «qaytaruvchi xizmatlar» ham ko‘pincha oldindan haq so‘raydigan aldov bo‘ladi.

## Aldangan bo‘lsangiz, akkaunt va hamyonni qanday himoya qilasiz?

Shubhali botga kod kiritgan, saytga hamyon ulagan yoki karta ma’lumotini bergan bo‘lsangiz, choralarni kechiktirmang.

1. Telegram’da Sozlamalar → Qurilmalar bo‘limini oching va notanish seanslarni yoping.
2. Ikki bosqichli parolni yoqing yoki almashtiring. So‘ramagan login kodlaringiz kelayotgan bo‘lsa, [login kodi so‘rovlaridan himoya](/blog/888-raqam-login-kodi-sorovlari-himoya) bo‘yicha yo‘riqnomani o‘qing.
3. Hamyonni saytlarga ulagan bo‘lsangiz, ulanishlarni uzing. Buni qanday qilish [Wallet ulanishlarini uzish](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik) maqolasida yozilgan.
4. Seed-iborani kimgadir aytgan yoki biror saytga kiritgan bo‘lsangiz, eski hamyonni buzilgan deb hisoblang. Yangi hamyon oching va qolgan mablag‘ni darhol unga o‘tkazing.
5. Karta ma’lumotini bergan bo‘lsangiz, bank ilovasida kartani bloklang yoki limitlarni kamaytiring, so‘ng bankka xabar bering.

## Telegram ichida xavfsiz xarid qanday ko‘rinadi?

Toygers holatidan chiqadigan umumiy saboq: sotuvchini reklamada ko‘rganingiz uni ishonchli qilmaydi. Xariddan oldin shartlar, to‘lov cheki va yordam manzili bor-yo‘qligini tekshiring.

Telegram Premium xaridi Premiumtg’da shunday ishlaydi:

- Faqat username kerak. Akkauntga kirish, login kodi yoki parol so‘ralmaydi.
- To‘lov so‘mda: Click, Payme, Paynet, Uzum Bank. Xorijiy karta kerak emas.
- Obuna 10 soniyada avtomatik faollashadi.
- Narxlar: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}. Narx va mavjud to‘lov usulini xariddan oldin botda tekshiring.

Buyurtma boti — [@premiumtg_uzbot](https://t.me/premiumtg_uzbot), yordam — [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport). Premiumtg mustaqil xizmat, Telegram nomidan ish ko‘rmaydi. Premium statusini esa faqat Telegram beradi.

Boshqa sotuvchilarni qanday tekshirish kerakligini [Premium sotib olishda firibgarlardan himoya](/blog/telegram-premium-firibgarlikdan-himoya) maqolasida o‘qing.

## Ko‘p so‘raladigan savollar

### Notcoin botiga pul qaytarish buyrug‘ini yozsam xavflimi?

Xavf buyruqning o‘zida emas, bot kimga tegishli ekanida. Havolani faqat Notcoin’ning rasmiy kanalidan oling. Bot kod, seed-ibora yoki oldindan to‘lov so‘rasa, darhol chiqib keting.

### Pulni qaytarish uchun hamyon manzilimni bersam bo‘ladimi?

Manzil berish o‘z-o‘zidan pulingizni xavf ostiga qo‘ymaydi. Lekin uni faqat rasmiy havola orqali ochilgan botga bering va tarmoq e’londagi talabga mos kelishini tekshiring.

### Pulni olish uchun avval kichik komissiya to‘lash kerak deyishsa nima qilaman?

Hech narsa to‘lamang va suhbatni to‘xtating. Pulni qaytarish uchun avval pul yuborishni talab qilish firibgarlikning eng aniq belgilaridan biri.

### Toygers’ga karta bilan to‘lagan bo‘lsam, pulni bank orqali qaytarsa bo‘ladimi?

Chek va yozishmalarni olib bankka yoki to‘lov qilgan xizmatingizga murojaat qiling. Nizo qanday shartda ko‘rib chiqilishini faqat ular aytadi, pul qaytishi kafolatlanmagan.

### Notcoin’ning rasmiy kanali va botini qanday ajrataman?

Ko‘pdan beri obuna bo‘lib kelgan kanalingizga va loyiha o‘zi ko‘rsatgan havolaga tayaning. Forward qilingan postdagi username, nomi o‘xshash botlar va shaxsiy xabarga yozgan «yordam» akkauntlari ishonchli manba emas.

### Seed-iborani soxta botga kiritib qo‘ysam, nima qilishim kerak?

Eski hamyon endi sizniki emas deb hisoblang: yangi hamyon oching va qolgan mablag‘ni zudlik bilan unga o‘tkazing. Eski hamyonga boshqa pul tushirmang.

### Notcoin $100 000 ajratgani haqidagi gap rostmi?

Bu raqamni faqat kanal posti keltirgan. 2026-yil 20-noyabr holatiga ko‘ra uning rasmiy tasdig‘i topilmadi.`,
    ru: `## Notcoin правда возвращает деньги за игрушки Toygers?

Официально это не подтверждено. 20 ноября 2026 года мы проверили официальные источники. В них нет ни названия Toygers, ни объявления о том, что Notcoin возвращает деньги.

Новость пошла от одного поста, который разошёлся по Telegram-каналам. В посте говорится, что Notcoin начал возвращать деньги за игрушки, которые продавал Toygers — его рекламный партнёр.

Это не значит, что новость обязательно ложная. Объявление могло выйти в собственном канале Notcoin, но в официальных источниках мы его не нашли. Поэтому каждый шаг проверяйте сами.

Главная опасность в другом. Кто потерял деньги, тот спешит их вернуть. Мошенники этим и пользуются: копируют новость о «возврате» и через поддельного бота или сайт обманывают человека второй раз.

## Что сказано в посте и что из этого не подтверждено?

| Утверждение из поста | Статус (20 ноября 2026 года) |
|---|---|
| Notcoin начал возвращать деньги пострадавшим от Toygers | В официальных источниках не найдено |
| Toygers был рекламным партнёром Notcoin и обманывал покупателей | В официальных источниках не найдено |
| Вернуть деньги можно через бот от имени Notcoin с помощью специальной команды | Ни бот, ни команда в официальных источниках не встречаются |
| Представитель Notcoin выделил на возврат $100 000 из своего кармана | В официальных источниках не найдено |
| Выплаты идут в USDT в сети TON | Для случая с Toygers подтверждения нет |

Юзернейм бота и команду мы здесь намеренно не повторяем. Юзернейм, который копируют из канала в канал, мошенник легко подменит на свой. Ссылку на бота берите только в официальном канале Notcoin.

## Как безопасно проверить новость о возврате?

1. Ищите новость не в пересланном посте и не в групповом чате, а в официальном канале Notcoin, на который вы подписаны давно.
2. Если объявление в официальном канале есть, переходите к боту по ссылке из него. Не вбивайте в поиск юзернейм, скопированный откуда-то ещё.
3. Сверьте юзернейм бота буква в букву. Лишняя буква, подменённый символ или приписки вроде «_support» и «_refund» — повод насторожиться.
4. Посмотрите, что бот просит. Данные заказа и адрес для выплаты он запросить может. Код, сид-фраза или предоплата — признак опасности.
5. Если официального объявления нет, подождите. Никаким ботам не пишите, кошелёк никуда не подключайте.

В настоящем объявлении должно быть написано, кто имеет право на возврат, какие доказательства нужны и в какой сети придёт выплата. Если эти условия не ясны, уточняйте их через тот же официальный канал.

Как устроены похожие сообщения в духе «срочно обменяйте», мы разбирали в статье [нужно ли менять TON на GRAM](/blog/ton-gram-almashtirish-migratsiya-firibgarlik).

## По каким признакам узнать мошенничество под видом «возврата»?

- Перед возвратом просят перевести «комиссию», «плату за сеть» или «сумму для подтверждения».
- Просят сид-фразу (слова для восстановления кошелька), пароль от кошелька, код входа в Telegram или облачный пароль 2FA.
- Предлагают подключить кошелёк к сайту и подтвердить транзакцию, «чтобы получить возврат». На деле такое подтверждение может оказаться разрешением на списание ваших средств.
- Торопят: «только сегодня», «средства заканчиваются», «последняя очередь».
- В личные сообщения пишет незнакомый аккаунт от имени «поддержки Notcoin». Такое обращение не считайте официальным.
- На кошелёк приходит неизвестный токен или NFT со ссылкой «получить refund». Что делать в такой ситуации, мы написали в статье [на кошелёк пришёл неизвестный NFT](/blog/ton-hamyonga-spam-nft-keldi-xavflimi).

Ещё один пример проверки новостей о возврате с крупными суммами — [новость о мошенничестве с возвратом Stars](/blog/telegram-stars-refund-firibgarlik-rostmi).

## Что можно сообщить для получения возврата, а что нельзя?

Чтобы получить деньги, обычно достаточно адреса кошелька-получателя. Адрес — открытая информация: зная его, на него можно отправить деньги, но снять с него нельзя.

> Никогда не сообщайте: сид-фразу, приватный ключ, код входа в Telegram, облачный пароль 2FA, CVV-код карты и коды из SMS. Если для получения денег сначала требуют отправить деньги, на этом остановитесь.

Есть ещё тонкость — сеть. В посте сказано, что выплаты идут в USDT в сети TON, но в этой статье это не подтверждено. Не давайте адрес в другой сети, пока не прочитали условия в официальном объявлении: средства, отправленные не в ту сеть, бывает сложно вернуть.

## Можно ли вернуть деньги, заплаченные Toygers, другим путём?

Даже если Notcoin деньги не вернёт, доказательства на руках вам ещё пригодятся. Соберите их заранее.

1. Сохраните доказательства: скриншот заказа, чек, выписку по карте или хеш транзакции, переписку с продавцом. Отдельно запишите дату и сумму.
2. Сделайте скриншот поста, где вы увидели рекламу Toygers, и профиля продавца. Даже если пост удалят, доказательство останется у вас.
3. Если платили картой или через сервисы вроде Click, Payme, Paynet, Uzum Bank, напишите в поддержку этого сервиса или банка. На каких условиях рассматривается спор, скажут только они, исход заранее неизвестен.
4. Если платили криптовалютой, найдите транзакцию в эксплорере по адресу или хешу и сохраните ссылку. Перевод в блокчейне обычно нельзя отменить, поэтому вернуть деньги на практике может только сам продавец или проект.
5. Пожалуйтесь на мошеннический аккаунт, бот или канал через кнопку «Пожаловаться» (Report) в Telegram.
6. Не доверяйте посторонним, которые пишут «вернём ваши деньги». Такие «сервисы по возврату» тоже часто оказываются обманом с предоплатой.

## Если вас обманули: как защитить аккаунт и кошелёк?

Если вы ввели код в подозрительном боте, подключили кошелёк к сайту или передали данные карты, действуйте сразу.

1. В Telegram откройте Настройки → Устройства и завершите незнакомые сеансы.
2. Включите или смените облачный пароль (двухэтапную проверку). Если приходят коды входа, которые вы не запрашивали, прочитайте инструкцию о [защите от запросов кода входа](/blog/888-raqam-login-kodi-sorovlari-himoya).
3. Если подключали кошелёк к сайтам, отключите эти подключения. Как это сделать, написано в статье [об отключении подключений Wallet](/blog/telegram-wallet-ulanishlar-sinxronlash-xavfsizlik).
4. Если вы кому-то сообщили сид-фразу или ввели её на сайте, считайте старый кошелёк взломанным. Создайте новый и сразу переведите туда оставшиеся средства.
5. Если передали данные карты, заблокируйте её в приложении банка или снизьте лимиты, затем сообщите в банк.

## Как выглядит безопасная покупка в Telegram?

Общий урок из истории с Toygers: то, что вы видели продавца в рекламе, ещё не делает его надёжным. Перед покупкой проверьте, есть ли условия, чек об оплате и контакт поддержки.

Покупка Telegram Premium в Premiumtg устроена так:

- Нужен только юзернейм. Вход в аккаунт, код входа или пароль не запрашиваются.
- Оплата в сумах: Click, Payme, Paynet, Uzum Bank. Иностранная карта не нужна.
- Подписка активируется автоматически за 10 секунд.
- Цены: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}. Цену и доступные способы оплаты проверьте в боте перед покупкой.

Бот для заказа — [@premiumtg_uzbot](https://t.me/premiumtg_uzbot), поддержка — [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport). Premiumtg — независимый сервис и не действует от имени Telegram. Статус Premium выдаёт только Telegram.

Как проверять других продавцов, читайте в статье [о защите от мошенников при покупке Premium](/blog/telegram-premium-firibgarlikdan-himoya).

## Часто задаваемые вопросы

### Опасно ли писать боту Notcoin команду для возврата денег?

Опасна не сама команда, а то, кому принадлежит бот. Берите ссылку только в официальном канале Notcoin. Если бот просит код, сид-фразу или предоплату, сразу выходите из диалога.

### Можно ли дать адрес кошелька, чтобы получить возврат?

Сам по себе адрес не ставит ваши деньги под угрозу. Но сообщайте его только боту, открытому по официальной ссылке, и проверьте, что сеть совпадает с указанной в объявлении.

### Что делать, если для получения денег просят сначала оплатить небольшую комиссию?

Ничего не платите и прекратите разговор. Требование сначала отправить деньги, чтобы получить возврат, — один из самых явных признаков мошенничества.

### Я платил Toygers картой — можно ли вернуть деньги через банк?

Обратитесь в банк или платёжный сервис, через который платили, с чеком и перепиской. Условия рассмотрения спора определяют только они, возврат не гарантирован.

### Как отличить официальный канал и бот Notcoin от поддельных?

Опирайтесь на канал, на который вы давно подписаны, и на ссылку, которую указал сам проект. Юзернейм из пересланного поста, боты с похожими названиями и «поддержка», написавшая в личку, — ненадёжные источники.

### Я ввёл сид-фразу в поддельном боте. Что теперь делать?

Считайте, что старый кошелёк вам больше не принадлежит: создайте новый и срочно переведите туда оставшиеся средства. На старый кошелёк больше ничего не отправляйте.

### Правда ли, что Notcoin выделил $100 000 на возврат?

Эту сумму привёл только пост в канале. На 20 ноября 2026 года официального подтверждения ей не найдено.`,
  },
};
