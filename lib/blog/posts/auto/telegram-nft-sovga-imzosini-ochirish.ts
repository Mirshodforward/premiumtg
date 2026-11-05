// Avtoblogyoz yasagan maqola (2026-11-05). Niyat: NFT sovg‘a olgan yoki sotmoqchi bo‘lgan Telegram foydalanuvchisi sovg‘adagi imzo yoki izohni qanday o‘chirish va bu necha Stars turishini «nft sovg‘a imzosini o‘chirish» kabi so‘zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/type/InputInvoice
//   https://core.telegram.org/api/gifts
//   https://core.telegram.org/constructor/savedStarGift
//   https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html
//   https://core.telegram.org/constructor/starGiftAttributeOriginalDetails
//   https://core.telegram.org/constructor/starsTransaction
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-nft-sovga-imzosini-ochirish",
  date: "2026-11-05",
  reviewed: "2026-11-05",
  category: "stars",
  priority: 0.7,
  title: { uz: "NFT sovg‘a imzosini o‘chirish: qanday qilinadi va necha Stars turadi?", ru: "Как удалить подпись с NFT-подарка в Telegram и сколько Stars это стоит" },
  excerpt: { uz: `Kanallarda «imzo» deb ataladigan asl ma’lumotlarni NFT sovg‘a qabul qiluvchisi Stars to‘lab o‘chira oladi. Aniq narxni server belgilaydi, uni to‘lovdan oldin ilovada tekshiring.`, ru: `Исходные данные, которые в каналах называют «подписью», может удалить получатель NFT-подарка за Stars. Точную цену задаёт сервер — проверьте её в приложении до оплаты.` },
  keywords: ["nft sovg‘a imzosini o‘chirish","telegram nft sovg‘a imzo","sovg‘adagi yozuvni o‘chirish telegram","nft sovg‘a asl ma’lumotlar","imzo o‘chirish necha stars","telegram gifts imzo olib tashlash","удалить подпись с nft подарка telegram","удаление подписи подарка телеграм","сколько звезд удалить подпись подарка","telegram подарок убрать отправителя","original details telegram подарок"],
  related: ["telegram-nft-sovgalar","telegram-nft-sovga-egasi-yashirin","telegram-gifts-sovgalar","telegram-stars-nima"],
  sources: [{"url":"https://core.telegram.org/type/InputInvoice","title":"InputInvoice"},{"url":"https://core.telegram.org/api/gifts","title":"Telegram Gifts"},{"url":"https://core.telegram.org/constructor/savedStarGift","title":"savedStarGift"},{"url":"https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html","title":"TDLib: messageUpgradedGift Class Reference"},{"url":"https://core.telegram.org/constructor/starGiftAttributeOriginalDetails","title":"starGiftAttributeOriginalDetails"},{"url":"https://core.telegram.org/constructor/starsTransaction","title":"starsTransaction"}],
  content: {
    uz: `## NFT sovg‘adagi «imzo» aslida nima?

Kanallarda «imzo» deb ataladigan yozuv Telegram hujjatlarida **asl ma’lumotlar** (original details) deb nomlanadi. Bu kolleksion sovg‘aning alohida atributi. Uni Stars to‘lab olib tashlash mumkin.

Bu yozuv sovg‘a kolleksionga aylantirilganda paydo bo‘ladi. [Telegram Gifts hujjatiga](https://core.telegram.org/api/gifts) ko‘ra, yangilash paytida asl sovg‘a matni, yuboruvchi va qabul qiluvchini yangi sovg‘ada saqlab qolish mumkin. Bu alohida tanlov bilan belgilanadi, shuning uchun har bir NFT sovg‘ada asl ma’lumotlar bo‘lavermaydi.

Sovg‘a bilan birga xabar yuborilgan bo‘lsa, u ham asl ma’lumotlar tarkibiga kiradi. Bu [starGiftAttributeOriginalDetails](https://core.telegram.org/constructor/starGiftAttributeOriginalDetails) tavsifida yozilgan.

Qisqasi, «imzo» sovg‘a kimdan kimga va qanday so‘z bilan yuborilganini ko‘rsatadi. Yozuvning to‘liq tarkibi bu maqolada tasdiqlanmagan, shuning uchun aynan sizning sovg‘angizda nima ko‘rinayotganini ilovada o‘zingiz tekshiring.

NFT sovg‘a oddiy sovg‘adan nimasi bilan farq qilishini bilmasangiz, avval [NFT sovg‘alar haqidagi maqolani](/blog/telegram-nft-sovgalar) o‘qing.

## Asl ma’lumotlarni o‘chirish rasmiy funksiyami?

Ha. Telegram API’da buning uchun alohida pullik amal bor. [InputInvoice](https://core.telegram.org/type/InputInvoice) turida kolleksion sovg‘adan asl ma’lumotlar atributini olib tashlash uchun to‘lov ko‘zda tutilgan. Gifts hujjatida esa bu ma’lumotni keyinroq o‘chirish mumkinligi aytilgan.

Demak, bu tashqi bot yoki «hiyla» emas, Telegram’ning o‘z mexanizmi. To‘lov Stars bilan amalga oshadi.

telegram.org blogida bu funksiya haqida alohida e’lon topilmadi. Shuning uchun funksiya qachon paydo bo‘lgani yoki o‘zgargani haqida sana keltirmaymiz.

## Imzoni o‘chirish necha Stars turadi?

Rasmiy hujjatda qat’iy summa yozilmagan. Narxni server belgilaydi: sovg‘a ma’lumotida maxsus maydon bor va foydalanuvchi aynan shu maydonda ko‘rsatilgan miqdorda Stars to‘laydi ([Telegram Gifts](https://core.telegram.org/api/gifts)). Ya’ni narx har bir sovg‘a uchun alohida keladi va uni ilovada to‘lovni tasdiqlashdan oldin ko‘rishingiz kerak.

> Telegram kanallarida imzo o‘chirish narxi haqida turli raqamlar tarqalgan. Ular rasmiy manbada tasdiqlanmagan, shuning uchun bu maqolada aniq summa keltirilmaydi. Amaldagi narxga faqat ilovadagi to‘lov oynasida qarang.

Narx 0 ko‘rinsa, bu tekin degani emas. [TDLib hujjatiga](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html) ko‘ra, 0 qiymati funksiya shu sovg‘a uchun mavjud emasligini bildiradi.

Stars qanday valyuta va qayerlarda sarflanishini [Telegram Stars haqidagi maqolada](/blog/telegram-stars-nima) o‘qishingiz mumkin.

## Kim o‘chira oladi: yuboruvchimi yoki qabul qiluvchimi?

TDLib hujjatiga ko‘ra, o‘chirish imkoniyati faqat sovg‘a **qabul qiluvchisiga** beriladi. Sovg‘ani yuborgan odam o‘zi yozgan matnni keyin olib tashlay olmaydi. Bundan tashqari, asl ma’lumotlarni faqat narx ko‘rsatilgan sovg‘adan o‘chirish mumkin ([savedStarGift](https://core.telegram.org/constructor/savedStarGift)).

| Holat | O‘chirish mumkinmi? |
|---|---|
| Siz qabul qiluvchisiz, narx ko‘rsatilgan | Ha, ko‘rsatilgan Stars to‘lanadi |
| Siz qabul qiluvchisiz, narx 0 | Yo‘q, funksiya shu sovg‘a uchun mavjud emas |
| Siz sovg‘ani yuborgansiz | Yo‘q, imkoniyat faqat qabul qiluvchida |
| Sovg‘ada asl ma’lumotlar saqlanmagan | O‘chiradigan narsaning o‘zi yo‘q |

Sovg‘a keyinroq boshqa egaga o‘tkazilgan bo‘lsa, yangi egasi uni o‘chira olishi bu maqolada tasdiqlanmagan. Bunday holatda ilovada o‘chirish taklifi va narx ko‘rinish-ko‘rinmasligini tekshiring.

## Imzo umuman paydo bo‘lmasligi uchun nima qilish mumkin?

Hujjatga ko‘ra, asl ma’lumotlar kolleksionga aylantirish paytida alohida tanlov bilan saqlanadi. Demak, ular avtomatik ravishda har bir NFT sovg‘aga yozilmaydi.

Amalda bu shuni anglatadi: sovg‘ani kolleksionga aylantirayotganda ilovada asl matn, yuboruvchi va qabul qiluvchini saqlash bo‘yicha tanlov ko‘rsatilsa, uni diqqat bilan o‘qing. Yozuv kerak bo‘lmasa, uni saqlamaslik keyinchalik o‘chirish uchun Stars sarflashdan oddiyroq yo‘l.

Bu tanlov ilovada qanday nomlangani va qaysi ekranda chiqishi rasmiy yo‘riqnomada topilmadi. Tugma nomlari versiyaga qarab farq qilishi mumkin.

## Ilovada qanday o‘chiriladi?

Rasmiy qadamma-qadam yo‘riqnoma topilmadi. Quyida umumiy tekshirish tartibi berilgan.

1. Telegram’ni so‘nggi versiyaga yangilang.
2. Profilingizdagi sovg‘alar bo‘limidan kerakli NFT sovg‘ani oching.
3. Sovg‘a ma’lumotlarida yuboruvchi, qabul qiluvchi yoki xabar ko‘rsatilgan qismni va uni olib tashlash taklifini qidiring.
4. Ko‘rsatilgan Stars narxini o‘qing: balansingizdan aynan shu miqdor yechiladi.
5. To‘lovni tasdiqlang, so‘ng Stars tranzaksiyalarida yozuv paydo bo‘lganini tekshiring.

O‘chirish taklifi ko‘rinmasa, sabab odatda quyidagilardan biri bo‘ladi:

- siz sovg‘aning qabul qiluvchisi emassiz;
- shu sovg‘a uchun narx 0, ya’ni funksiya mavjud emas;
- sovg‘ada asl ma’lumotlar umuman saqlanmagan;
- ilova eski versiyada qolgan.

## To‘lov qilinganini qayerdan ko‘raman?

Imzo o‘chirish uchun to‘lov Stars tranzaksiyalarida alohida turdagi to‘lov sifatida qayd etiladi ([starsTransaction](https://core.telegram.org/constructor/starsTransaction)). Ya’ni u boshqa xaridlardan alohida tur bilan belgilanadi.

To‘lovdan keyin Stars balansingiz tarixini oching va yozuvni toping. Summa to‘lov oynasida ko‘rgan narx bilan mos kelishi kerak. Balans va sovg‘aning holatini to‘lovdan oldin va keyin skrinshot qilib qo‘ysangiz, keyin solishtirish oson bo‘ladi.

Balansda Stars yetmasa, avval uni to‘ldirishingiz kerak. Sovg‘alar Stars bilan qanday ishlashini [Telegram Gifts haqidagi maqolada](/blog/telegram-gifts-sovgalar) ko‘rishingiz mumkin.

## Sotishdan oldin imzoni o‘chirish kerakmi?

Bu sizning qaroringiz. Imzoni o‘chirish majburiy ekani haqida rasmiy ma’lumot topilmadi. Qaror qilishdan oldin quyidagilarni o‘ylab ko‘ring:

- **Shaxsiy matn.** Asl ma’lumotlarda yuboruvchi, qabul qiluvchi va sovg‘a bilan kelgan xabar bo‘lishi mumkin. Unda ism, tabrik yoki shaxsiy gap bo‘lsa, uni begona odam ko‘rishiga rozimisiz?
- **Boshqa odamning ismi.** Sovg‘ani yaqin kishingiz yuborgan bo‘lsa, uning nomi sovg‘a bilan birga ko‘rinib qolishini xohlamasligingiz mumkin.
- **Keraksiz xarajat.** Yozuvda shaxsiy narsa bo‘lmasa, Stars sarflashga ehtiyoj yo‘q.
- **Qaytarib bo‘lmasligi mumkin.** Biz ko‘rgan rasmiy hujjatlarda o‘chirilgan ma’lumotni tiklash amali topilmadi.

Sotishga tayyorlanayotgan bo‘lsangiz, quyidagi tartib qulay:

1. Sovg‘ani ochib, asl ma’lumotlarda aynan nima yozilganini o‘qing.
2. Unda sizga yoki boshqa odamga tegishli shaxsiy ma’lumot bor-yo‘qligini baholang.
3. O‘chirish kerak bo‘lsa, narx ko‘rsatilganini va Stars balansi yetishini tekshiring.
4. To‘lovdan keyin yozuv sovg‘adan yo‘qolganini va tranzaksiya qayd etilganini ko‘ring.
5. Shundan keyingina sovg‘ani o‘tkazish yoki sotish bilan shug‘ullaning.

Sovg‘ani profilda kim ko‘rishi alohida masala va u maxfiylik sozlamalarida boshqariladi. Bu haqda [NFT sovg‘a egasining ko‘rinishi haqidagi maqolada](/blog/telegram-nft-sovga-egasi-yashirin) yozilgan.

## «Arzon imzo o‘chirish» takliflarida qanday xavf bor?

Rasmiy hujjatlarga ko‘ra, asl ma’lumotlarni o‘chirishning bitta yo‘li bor: qabul qiluvchi server ko‘rsatgan Stars miqdorini o‘zi to‘laydi. Buning uchun uchinchi shaxs, bot yoki «vositachi» kerak emas.

> Kimdir «imzoni arzonroq o‘chirib beraman» deb login kodi, parol yoki akkauntga kirishni so‘rasa, bermang. Bu akkauntni egallab olish urinishi bo‘lishi mumkin. Sovg‘a ham, Stars balansi ham akkaunt bilan birga qo‘ldan ketadi.

Kanal postlarida aytilgan narxlar rasmiy emas va ilovadagi haqiqiy narxdan farq qilishi mumkin. Har doim faqat to‘lov oynasidagi raqamga tayaning.

Ochiq ma’lumot bilan maxfiy ma’lumotning farqini bilish ham foydali. Masalan, Premiumtg Telegram Premium buyurtmasida faqat username so‘raydi, login kodi yoki parol so‘ramaydi. Username’ni ko‘rsatish nima uchun xavfsizligi [bu maqolada](/blog/username-berish-xavfsizmi) tushuntirilgan.

## Ko‘p so‘raladigan savollar

### NFT sovg‘adagi yozuvni Stars to‘lamasdan o‘chirsa bo‘ladimi?

Rasmiy hujjatlarda bu amal Stars evaziga bajariladi. Narx o‘rnida 0 turgan bo‘lsa, bu tekin degani emas: funksiya shu sovg‘a uchun ishlamaydi.

### Sovg‘ani yuborgan odam imzoni o‘chira oladimi?

Yo‘q. TDLib hujjatiga ko‘ra, asl ma’lumotlarni o‘chirish imkoniyati faqat sovg‘ani qabul qilgan foydalanuvchiga beriladi.

### O‘chirish tugmasi nega ko‘rinmayapti?

Ehtimol, siz sovg‘aning qabul qiluvchisi emassiz, shu sovg‘a uchun narx belgilanmagan yoki sovg‘ada asl ma’lumotlar umuman saqlanmagan. Ilovani yangilab, qayta tekshirib ko‘ring.

### Imzoni o‘chirgandan keyin qayta tiklash mumkinmi?

Biz ko‘rib chiqqan rasmiy Telegram hujjatlarida tiklash amali topilmadi. O‘chirishni qaytarib bo‘lmaydigan qadam deb hisoblang.

### Imzo o‘chirilsa sovg‘aning modeli, foni yoki naqshi o‘zgaradimi?

Hujjatlarda bu to‘lov faqat asl ma’lumotlar atributini olib tashlash uchun ekani yozilgan. Boshqa atributlarga ta’siri haqida rasmiy ma’lumot topilmadi.

### Imzo o‘chirish uchun Telegram Premium kerakmi?

Biz ko‘rgan rasmiy manbalarda Premium sharti yozilmagan. Asosiy shartlar: sovg‘aning qabul qiluvchisi bo‘lish va ko‘rsatilgan miqdorda Stars to‘lash.

### To‘lov qaysi bo‘limda ko‘rinadi?

Stars balansingiz tarixida, tranzaksiyalar ro‘yxatida. Bu to‘lov u yerda alohida turdagi yozuv sifatida qayd etiladi.`,
    ru: `## Что на самом деле такое «подпись» на NFT-подарке

То, что в каналах называют «подписью», в документации Telegram называется **исходными данными** (original details). Это отдельный атрибут коллекционного подарка. Его можно убрать, заплатив Stars.

Запись появляется, когда подарок улучшают до коллекционного. Согласно [документации Telegram Gifts](https://core.telegram.org/api/gifts), при улучшении можно сохранить в новом подарке исходный текст, отправителя и получателя. Это задаётся отдельной опцией, поэтому исходные данные есть не у каждого NFT-подарка.

Если вместе с подарком пришло сообщение, оно тоже входит в исходные данные. Это указано в описании [starGiftAttributeOriginalDetails](https://core.telegram.org/constructor/starGiftAttributeOriginalDetails).

Проще говоря, «подпись» показывает, от кого и кому был отправлен подарок и с какими словами. Полный состав записи в этой статье не подтверждён, поэтому проверьте в приложении, что именно отображается на вашем подарке.

Если вы пока не знаете, чем NFT-подарок отличается от обычного, начните со [статьи об NFT-подарках](/blog/telegram-nft-sovgalar).

## Удаление исходных данных — официальная функция?

Да. В Telegram API для этого предусмотрено отдельное платное действие. В типе [InputInvoice](https://core.telegram.org/type/InputInvoice) есть оплата за удаление атрибута исходных данных с коллекционного подарка. А в документации Gifts сказано, что эту информацию можно удалить позже.

То есть это не сторонний бот и не «лайфхак», а собственный механизм Telegram. Оплата проходит в Stars.

Отдельного анонса этой функции в блоге telegram.org мы не нашли. Поэтому не указываем дату её появления или изменения.

## Сколько Stars стоит удаление подписи

Фиксированной суммы в официальной документации нет. Цену задаёт сервер: в данных подарка есть специальное поле, и пользователь платит ровно то количество Stars, которое в нём указано ([Telegram Gifts](https://core.telegram.org/api/gifts)). Значит, цена приходит для каждого подарка отдельно, и увидеть её нужно в приложении до подтверждения оплаты.

> В Telegram-каналах ходят разные цифры стоимости удаления подписи. Официальным источником они не подтверждены, поэтому конкретной суммы в этой статье нет. Ориентируйтесь только на окно оплаты в приложении.

Если цена показана как 0, это не значит, что удаление ничего не стоит. Согласно [документации TDLib](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html), значение 0 означает, что для этого подарка функция недоступна.

Что такое Stars и на что их тратят, читайте в [статье о Telegram Stars](/blog/telegram-stars-nima).

## Кто может удалить: отправитель или получатель

По документации TDLib, удалить исходные данные может только **получатель** подарка. Тот, кто отправил подарок, не сможет потом убрать свой текст. Кроме того, удаление возможно только у подарка, для которого указана цена ([savedStarGift](https://core.telegram.org/constructor/savedStarGift)).

| Ситуация | Можно удалить? |
|---|---|
| Вы получатель, цена указана | Да, за указанное количество Stars |
| Вы получатель, цена 0 | Нет, для этого подарка функция недоступна |
| Вы отправили подарок | Нет, возможность есть только у получателя |
| Исходные данные в подарке не сохранены | Удалять нечего |

Сможет ли удалить подпись новый владелец, если подарок позже передали другому человеку, в этой статье не подтверждено. В таком случае проверьте в приложении, видно ли предложение удалить и цена.

## Как сделать, чтобы подпись вообще не появилась

Согласно документации, исходные данные сохраняются отдельной опцией при улучшении подарка до коллекционного. То есть автоматически они пишутся не на каждый NFT-подарок.

На практике это значит: если при улучшении приложение предлагает сохранить исходный текст, отправителя и получателя, внимательно прочитайте этот пункт. Если запись не нужна, проще её не сохранять, чем потом тратить Stars на удаление.

Как эта опция называется в приложении и на каком экране появляется, в официальной инструкции мы не нашли. Названия кнопок могут отличаться в зависимости от версии.

## Как удалить подпись в приложении

Официальной пошаговой инструкции мы не нашли. Ниже — общий порядок проверки.

1. Обновите Telegram до последней версии.
2. Откройте нужный NFT-подарок в разделе подарков своего профиля.
3. В данных подарка найдите блок с отправителем, получателем или сообщением и предложение его убрать.
4. Посмотрите указанную цену в Stars: с баланса спишется именно эта сумма.
5. Подтвердите оплату и проверьте, что запись появилась в транзакциях Stars.

Если предложения удалить нет, причина обычно одна из этих:

- вы не получатель подарка;
- цена для этого подарка равна 0, то есть функция недоступна;
- исходные данные в подарке вообще не сохранены;
- приложение не обновлено.

## Где увидеть, что оплата прошла

Оплата удаления подписи фиксируется в транзакциях Stars как отдельный тип платежа ([starsTransaction](https://core.telegram.org/constructor/starsTransaction)). То есть она помечена отдельно от других покупок.

После оплаты откройте историю баланса Stars и найдите эту запись. Сумма должна совпадать с ценой, которую вы видели в окне оплаты. Если сделать скриншоты баланса и подарка до и после оплаты, сверить потом будет проще.

Если Stars на балансе не хватает, сначала пополните его. Как подарки работают со Stars, описано в [статье о Telegram Gifts](/blog/telegram-gifts-sovgalar).

## Нужно ли удалять подпись перед продажей

Это ваше решение. Официальных данных о том, что удаление подписи обязательно, мы не нашли. Прежде чем решать, подумайте вот о чём:

- **Личный текст.** В исходных данных могут быть отправитель, получатель и сообщение, пришедшее с подарком. Если там имя, поздравление или что-то личное — готовы ли вы, чтобы это видел посторонний?
- **Имя другого человека.** Если подарок прислал близкий, вы можете не хотеть, чтобы его имя ушло вместе с подарком.
- **Лишние расходы.** Если в записи нет ничего личного, тратить Stars незачем.
- **Отменить, возможно, не получится.** В изученной нами официальной документации действия для восстановления удалённых данных не нашлось.

Если готовите подарок к продаже, удобно действовать так:

1. Откройте подарок и прочитайте, что именно указано в исходных данных.
2. Оцените, есть ли там личная информация о вас или другом человеке.
3. Если удалять нужно, убедитесь, что цена указана и Stars на балансе хватает.
4. После оплаты проверьте, что запись исчезла с подарка, а транзакция отобразилась.
5. Только после этого переходите к передаче или продаже подарка.

Кто видит подарок в профиле — отдельный вопрос, он настраивается в параметрах конфиденциальности. Об этом — в [статье о видимости владельца NFT-подарка](/blog/telegram-nft-sovga-egasi-yashirin).

## Чем опасны предложения «дёшево удалить подпись»

По официальной документации, удалить исходные данные можно одним способом: получатель сам платит указанное сервером количество Stars. Третьи лица, боты или «посредники» для этого не нужны.

> Если кто-то предлагает «удалить подпись дешевле» и просит код входа, пароль или доступ к аккаунту — не давайте. Это может быть попытка угнать аккаунт. Вместе с ним вы потеряете и подарок, и баланс Stars.

Цены из постов в каналах неофициальные и могут отличаться от реальной цены в приложении. Доверяйте только цифре в окне оплаты.

Полезно понимать разницу между открытыми и секретными данными. Например, Premiumtg при заказе Telegram Premium спрашивает только username — код входа и пароль не нужны. Почему показывать username безопасно, объяснено [в этой статье](/blog/username-berish-xavfsizmi).

## Часто задаваемые вопросы

### Можно ли удалить подпись с NFT-подарка без оплаты в Stars?

В официальной документации это действие выполняется за Stars. Если вместо цены стоит 0, удаление не станет бесплатным — просто для этого подарка функция не работает.

### Может ли отправитель подарка удалить подпись?

Нет. Согласно документации TDLib, убрать исходные данные может только тот, кто получил подарок.

### Почему я не вижу кнопку удаления?

Скорее всего, вы не получатель подарка, цена для него не задана или исходные данные изначально не сохранялись. Обновите приложение и посмотрите ещё раз.

### Можно ли восстановить подпись после удаления?

В изученной нами официальной документации Telegram способа восстановления нет. Лучше считать удаление необратимым шагом.

### Изменятся ли модель, фон или узор подарка после удаления подписи?

В документации эта оплата описана только как удаление атрибута исходных данных. Официальных сведений о влиянии на другие атрибуты мы не нашли.

### Нужен ли Telegram Premium, чтобы удалить подпись?

В просмотренных официальных источниках требования Premium нет. Главные условия — быть получателем подарка и оплатить указанное количество Stars.

### Где отображается этот платёж?

В истории баланса Stars, в списке транзакций. Там он отмечен как отдельный тип операции.`,
  },
};
