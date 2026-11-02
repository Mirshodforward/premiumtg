// Avtoblogyoz yasagan maqola (2026-11-03). Niyat: Telegram foydalanuvchisi «Telegram raqam sotish» yoki «+888 anonim raqam» deb qidirib, Fragment auksionida anonim raqamni qanday sotib olish, sotish va Telegram’da ishlatishni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/about
//   https://telegram.org/blog/ultimate-privacy-topics-2-0
//   https://core.telegram.org/api/fragment
//   https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms
//   https://fragment.com/terms
//   https://fragment.com/number/88800888000
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "fragment-anonim-raqam-sotish-sotib-olish",
  date: "2026-11-03",
  reviewed: "2026-11-03",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegram anonim raqam (+888): Fragment’da qanday olinadi va sotiladi", ru: "Анонимный номер Telegram +888: как купить и продать на Fragment" },
  excerpt: { uz: `+888 raqam Fragment’da kripto hamyon orqali sotib olinadi va sotiladi. U bilan SIM-kartasiz Telegram’ga kirasiz, kirish kodi esa SMS orqali emas, Fragment saytida ko‘rinadi.`, ru: `Номер +888 покупают и продают на Fragment через криптокошелёк. С ним можно войти в Telegram без SIM-карты, а код входа приходит не по SMS, а отображается на сайте Fragment.` },
  keywords: ["telegram anonim raqam fragment","+888 raqam sotib olish","telegram raqam sotish","fragment anonim raqam","telegram simkartasiz ro'yxatdan o'tish","fragment raqam auksion","анонимный номер телеграм +888","купить номер +888 fragment","продать номер fragment","телеграм без сим карты","fragment номера аукцион"],
  related: ["fragment-telegram-premium","ton-orqali-telegram-premium","username-berish-xavfsizmi","telegram-premium-firibgarlikdan-himoya"],
  sources: [{"url":"https://fragment.com/about","title":"How does Fragment work?"},{"url":"https://telegram.org/blog/ultimate-privacy-topics-2-0","title":"No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More"},{"url":"https://core.telegram.org/api/fragment","title":"Fragment collectibles"},{"url":"https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms","title":"auth.sentCodeTypeFragmentSms"},{"url":"https://fragment.com/terms","title":"Terms of Service"},{"url":"https://fragment.com/number/88800888000","title":"+888 0088 8000"}],
  content: {
    uz: `## +888 anonim raqam nima

+888 bilan boshlanadigan raqam — Fragment platformasidagi blokcheynga asoslangan anonim raqam. Telegram blogiga ko‘ra, u bilan SIM-kartasiz Telegram akkaunti ochish va unga kirish mumkin ([Telegram blogi](https://telegram.org/blog/ultimate-privacy-topics-2-0)).

Telegram bu raqamlarni 2022-yil oxirida TON blokcheynida chiqargan. Ular soni cheklangan kolleksion raqamlar ([Fragment haqida](https://fragment.com/about)). Bunday raqamni mobil operator bermaydi. U kripto hamyonda saqlanadigan raqamli kolleksiya hisoblanadi.

Asosiy farq kirish kodida. Oddiy raqamga kod SMS orqali keladi, +888 raqamda esa kodni Fragment saytida ko‘rasiz. Telegram texnik hujjatiga ko‘ra, bu raqamlar Telegram akkauntini odatiy ro‘yxatdan o‘tish va kirish jarayoni orqali yaratish uchun ishlatiladi ([core.telegram.org](https://core.telegram.org/api/fragment)).

Fragment qanday platforma ekani va u yerda yana nimalar sotilishi [Fragment haqidagi maqolamizda](/blog/fragment-telegram-premium) yozilgan.

## Kanallardagi «raqamingizni soting» xabari va Fragment

Ayrim Telegram kanallarida «endi oddiy fuqarolar ham mobil raqamini auksionga qo‘yishi mumkin» degan xabar tarqaldi. Unda e’lon uchun to‘lov haqida ham gap boradi. Bunday qoida Fragment yoki Telegram’ning rasmiy sahifalarida topilmadi. Xabar mobil operator raqamlari savdosiga tegishli bo‘lishi mumkin, lekin bu ham tasdiqlanmagan.

Chalkashmaslik uchun farqni bilib oling:

- Fragment’dagi +888 raqamlar Telegram chiqargan kolleksion raqamlar. Ular oddiy SIM raqam emas.
- Oddiy mobil raqamni Fragment’da sotish yoki uni +888 ga aylantirish haqida rasmiy manbalarda gap yo‘q.
- Fragment shartlarida egalar o‘z kolleksiyalarini sotishi mumkinligi yozilgan ([Fragment shartlari](https://fragment.com/terms)). Bu qoida allaqachon +888 raqamga ega bo‘lganlarga tegishli.

> Kanallardagi e’lon haqi va so‘mdagi summalarni Fragment’ga bog‘lamang. Operator raqami bo‘yicha shartlarni operatorning o‘zidan so‘rang. +888 raqam bo‘yicha esa [Fragment](https://fragment.com) saytidagi sahifani tekshiring.

## +888 raqam va oddiy SIM raqam farqi

| Mezon | Oddiy SIM raqam | +888 kolleksion raqam |
|---|---|---|
| SIM-karta kerakmi | Ha | Yo‘q |
| Telegram kodi qayerga keladi | SMS orqali | Fragment saytida ko‘rinadi |
| Qo‘ng‘iroq va SMS | Mumkin | Mumkin emas |
| Egalikni nima belgilaydi | Operator qoidalari | Raqam turgan kripto hamyon |
| Sotish yoki o‘tkazish | Operator qoidalariga bog‘liq | Xususiy sotish yoki ochiq auksion |
| Xarid uchun pul qaytarish | Operator qoidalariga bog‘liq | Qaytarilmaydi |

Fragment o‘zi ham ogohlantiradi: kolleksion raqamlar bilan qo‘ng‘iroq qilib ham, SMS yuborib ham bo‘lmaydi ([Fragment haqida](https://fragment.com/about)). Shuning uchun SMS orqali tasdiqlaydigan boshqa ilovalarda ro‘yxatdan o‘tishga tayanmang.

Kodni ko‘rish uchun fragment.com’ga aynan raqam egasi bo‘lgan hamyon bilan kirasiz ([core.telegram.org](https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms)). Demak, +888 raqamning haqiqiy «kaliti» — hamyon. Hamyonga kim ega bo‘lsa, Telegram kirish kodlarini ham o‘sha odam ko‘ra oladi.

## Fragment’da +888 raqamni sotib olish tartibi

Fragment’dagi raqam sahifasida tayyorgarlik uchun ikki qadam ko‘rsatilgan: Tonkeeper hamyonini yaratish va unga mablag‘ kiritish ([namuna sahifa](https://fragment.com/number/88800888000)). Umumiy tartib quyidagicha:

1. Tonkeeper ilovasini o‘rnating va unda yangi hamyon yarating. Zaxira (seed) iborasini qog‘ozga yozib oling va xavfsiz joyda saqlang.
2. Hamyonga qo‘llab-quvvatlanadigan birjadan yoki Telegram’dagi @wallet orqali mablag‘ kiriting.
3. [Fragment](https://fragment.com) saytini oching va hamyonni ulang.
4. Kerakli raqam sahifasiga o‘ting va undagi sotuv holatini ko‘ring.
5. Narx va shartlarni o‘sha sahifada tekshiring, so‘ng xaridni hamyonda tasdiqlang.

Har bir raqamning narxi va sotuv holati uning sahifasida alohida ko‘rsatiladi. Shu sababli bu maqolada narxlar keltirilmaydi.

To‘lashdan oldin quyidagilarni tekshiring:

- Sahifa aynan fragment.com domenida ochilganmi. Soxta nusxa saytlarga hamyon ulamang.
- Raqamning avvalgi xarid sanasi va narxi qanday. Bu ma’lumotni Telegram API orqali olish mumkin ([core.telegram.org](https://core.telegram.org/api/fragment)).
- Fragment shartlari bilan tanishdingizmi. Ularga ko‘ra, egalik doimiy va uni hatto kompaniya ham bekor qila olmaydi, shu sababli barcha xaridlar uchun pul qaytarilmaydi ([Fragment shartlari](https://fragment.com/terms)).
- Mamlakatingizda xizmat ishlaydimi. Fragment qaysi mamlakatda qaysi xizmati mavjudligini istalgan paytda, ogohlantirmasdan cheklashi mumkin ([Fragment shartlari](https://fragment.com/terms)).

So‘mni kriptovalyutaga aylantirish bo‘yicha Click, Payme, Paynet yoki Uzum Bank’ning rasmiy yo‘riqnomasi bu maqolada tekshirilmagan. Kripto hamyonga mablag‘ kiritishning amaliy tomonlari va qo‘shimcha xarajatlar [TON orqali Premium olish maqolasida](/blog/ton-orqali-telegram-premium) yozilgan.

## +888 raqam bilan Telegram’ga kirish

1. Telegram ilovasida ro‘yxatdan o‘tish yoki kirish oynasini oching.
2. Raqam maydoniga sotib olingan +888 raqamni kiriting.
3. Ilova bir martalik kod (OTP) so‘raganda SMS kutmang, [Fragment](https://fragment.com) saytiga o‘ting.
4. Raqam egasi bo‘lgan hamyonni Fragment’ga ulang va tegishli sahifada kirish kodini ko‘ring.
5. Kodni Telegram’dagi maydonga kiriting.

Mavjud akkauntni +888 raqamga o‘tkazish ham shunga o‘xshaydi. Yangi raqam sifatida +888 raqamni kiritasiz, kodni esa Fragment’dan olasiz ([Fragment haqida](https://fragment.com/about)).

Kod ko‘rinmasa, avval qaysi hamyon ulanganini tekshiring. Kod faqat raqam egasi bo‘lgan hamyon bilan kirilganda ko‘rinadi. Bir nechta hamyoningiz bo‘lsa, raqam qaysi birida turganini aniqlang va Fragment’ga aynan o‘shani ulang. Raqamni yaqinda sotib olgan bo‘lsangiz, u hamyoningizda ko‘rinishini ham tekshiring.

## +888 raqamni sotish yoki auksionga qo‘yish

Fragment shartlariga ko‘ra, egalar o‘z kolleksiyalarini istalgan paytda xususiy sotishi yoki ochiq auksionga qo‘yishi mumkin ([Fragment shartlari](https://fragment.com/terms)). Sotish Fragment saytida, raqam turgan hamyon orqali amalga oshiriladi. Aniq bosqichlar raqam sahifasida ko‘rsatiladi.

E’lon berishdan oldin quyidagilarni hisobga oling:

- Fragment komissiyasi, minimal narx, auksion qadami va muddatlari bu maqolada tasdiqlanmagan. Ularni e’lon berish oynasida tekshiring.
- Raqam tarixi ochiq: xaridor avvalgi xarid sanasi va narxini Telegram API orqali ko‘ra oladi. Narx belgilashda buni hisobga oling.
- Kirish kodi raqam egasi bo‘lgan hamyon orqali ko‘rinadi. Raqam boshqa hamyonga o‘tgach, siz unga kod ololmay qolishingiz mumkin. Akkauntingiz shu raqamga bog‘langan bo‘lsa, sotishdan oldin uni boshqa raqamga o‘tkazishni o‘ylab ko‘ring.
- Raqamni Fragment’ning o‘zida soting. Chatda «avval raqamni o‘tkazing, pulni keyin beraman» degan xaridorga ishonmang.

## Anonim raqamning xavflari

- Hamyonni yo‘qotish. Kirish ma’lumotlari yo‘qolsa, Fragment hamyonni ham, undagi kolleksiyalarni ham tiklay olmaydi ([Fragment shartlari](https://fragment.com/terms)). Seed-iborani yo‘qotsangiz, raqamga va u orqali akkauntga kirish imkoni ham yo‘qolishi mumkin.
- Akkaunt bloklanishi. Akkaunt Telegram tomonidan yoki egasining o‘zi tomonidan bloklansa yoki o‘chirilsa, raqamdan foydalanib bo‘lmay qolishi mumkin. Shartlarga ko‘ra, bunday holatda Fragment javobgar emas va zarar qoplanmaydi.
- Qaytarib bo‘lmaydigan xarid. Xaridlar uchun pul qaytarilmaydi, shuning uchun raqamni shoshilmasdan tanlang.
- Mamlakat cheklovlari. Fragment ayrim mamlakatlarda xizmatlarini ogohlantirmasdan cheklashi mumkin.
- Firibgarlik. Seed-iborani ham, Telegram kirish kodini ham hech kimga bermang. Fragment’dan tashqarida «arzon +888» taklif qilinsa, ehtiyot bo‘ling. Umumiy qoidalar [firibgarlikdan himoya maqolasida](/blog/telegram-premium-firibgarlikdan-himoya) jamlangan.

Username — ochiq ma’lumot, uni bilgan odam akkauntingizga kira olmaydi. Kirish kodi va hamyon kaliti esa maxfiy. Bu farq [username xavfsizligi haqidagi maqolada](/blog/username-berish-xavfsizmi) tushuntirilgan.

## Faqat Premium kerak bo‘lsa: Fragment va TON shart emas

Anonim raqam va Telegram Premium alohida narsalar. +888 raqam — akkauntga kirish usuli. Premium esa akkauntga kengaytirilgan imkoniyatlar beradigan obuna.

Premium uchun kripto hamyon ochish shart emas. Premiumtg orqali username bilan, so‘mda Click, Payme, Paynet yoki Uzum Bank orqali to‘lash mumkin. Xorijiy karta kerak emas. Narxlar butun muddat uchun:

- 3 oy — ${narx(3)}
- 6 oy — ${narx(6)}
- 12 oy — ${narx(12)}

Login kodi yoki parol so‘ralmaydi, obuna 10 soniyada avtomatik faollashadi. Narx va mavjud to‘lov usullarini xariddan oldin [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida tekshirib oling. Boshqa yo‘llar bilan taqqoslash uchun [O‘zbekistonda Premium sotib olish usullari](/blog/telegram-premium-sotib-olish-uzbekiston) maqolasini o‘qing.

Premiumtg — mustaqil xizmat.

## Ko‘p so‘raladigan savollar

### +888 raqam bilan WhatsApp yoki bankka ro‘yxatdan o‘tsa bo‘ladimi?

Bunga tayanmang. Kolleksion raqam Telegram uchun chiqarilgan va SMS qabul qilmaydi, shuning uchun SMS orqali tasdiqlaydigan xizmatlarga u yaramaydi.

### Oddiy Beeline, Ucell yoki Uzmobile raqamimni Fragment’da sotsam bo‘ladimi?

Fragment’ning rasmiy manbalarida operator raqamlarini sotish haqida ma’lumot yo‘q, u yerda Telegram chiqargan +888 raqamlar savdosi bor. Kanallardagi raqam auksioni haqidagi xabarlarni operatorning o‘zidan aniqlang.

### +888 raqamni sotib olgandan keyin pulni qaytarib olish mumkinmi?

Yo‘q, Fragment shartlariga ko‘ra xaridlar qaytarilmaydi. Raqam kerak bo‘lmay qolsa, uni o‘zingiz qayta sotuvga qo‘yishingiz mumkin.

### Tonkeeper hamyoni o‘chib ketsa, Telegram akkauntimga qanday kiraman?

Yangi kodlarni ko‘rish uchun raqam turgan hamyonni seed-ibora orqali tiklash kerak. Ibora yo‘qolsa, Fragment na hamyonni, na raqamni tiklab bera oladi.

### Anonim raqam bilan ochilgan akkaunt bloklansa, raqam nima bo‘ladi?

Raqamdan foydalanib bo‘lmay qolishi mumkin. Fragment shartlarida bunday holatda kompaniya javobgar emasligi va zarar qoplanmasligi yozilgan.

### Fragment’da raqam sotganda qancha komissiya olinadi?

Bu ma’lumot bu maqolada tasdiqlanmagan. Aniq shartlarni Fragment’dagi e’lon berish oynasida ko‘ring.

### Anonim raqam haqiqatan ham shaxsimni yashiradimi?

Unga SIM-karta va operator kerak bo‘lmaydi, lekin to‘liq maxfiylikni kutmang. Raqamning xarid sanasi va narxi Telegram API orqali ko‘rinishi mumkin, profilingizdagi ma’lumotlar esa ochiq qoladi.`,
    ru: `## Что такое анонимный номер +888

Номер, начинающийся с +888, — это анонимный номер на блокчейне с платформы Fragment. По данным блога Telegram, с таким номером можно завести аккаунт Telegram и входить в него без SIM-карты ([блог Telegram](https://telegram.org/blog/ultimate-privacy-topics-2-0)).

Telegram выпустил эти номера в конце 2022 года на блокчейне TON. Это коллекционные номера ограниченным тиражом ([о Fragment](https://fragment.com/about)). Мобильный оператор такой номер не выдаёт: это цифровой коллекционный предмет, который хранится в криптокошельке.

Главное отличие — в коде входа. На обычный номер код приходит по SMS, а код для номера +888 вы смотрите на сайте Fragment. Согласно технической документации Telegram, такие номера используются для создания аккаунта Telegram через обычную процедуру регистрации и входа ([core.telegram.org](https://core.telegram.org/api/fragment)).

Что это за платформа и что ещё на ней продаётся, мы разобрали в [статье о Fragment](/blog/fragment-telegram-premium).

## Сообщения «продайте свой номер» в каналах и Fragment

В некоторых Telegram-каналах разошлось сообщение: «теперь обычные граждане тоже могут выставить свой мобильный номер на аукцион, за объявление платится 1% от стартовой цены». На официальных страницах Fragment и Telegram такого правила нет. Возможно, речь идёт о продаже номеров мобильных операторов, но и это не подтверждено.

Чтобы не путаться, запомните разницу:

- Номера +888 на Fragment — это коллекционные номера, выпущенные Telegram. Это не обычные SIM-номера.
- В официальных источниках ничего не сказано о продаже обычного мобильного номера на Fragment или о превращении его в +888.
- В условиях Fragment написано, что владельцы могут продавать свои коллекционные предметы ([условия Fragment](https://fragment.com/terms)). Это правило касается тех, у кого уже есть номер +888.

> Не связывайте «плату за объявление в 1%» и суммы в сумах с Fragment. Условия по номеру оператора уточняйте у самого оператора, а по номеру +888 — на странице сайта [Fragment](https://fragment.com).

## Чем номер +888 отличается от обычного SIM-номера

| Критерий | Обычный SIM-номер | Коллекционный номер +888 |
|---|---|---|
| Нужна ли SIM-карта | Да | Нет |
| Куда приходит код Telegram | По SMS | Отображается на сайте Fragment |
| Звонки и SMS | Возможны | Невозможны |
| Что определяет владельца | Правила оператора | Криптокошелёк, в котором лежит номер |
| Продажа или передача | Зависит от правил оператора | Частная продажа или открытый аукцион |
| Возврат денег за покупку | Зависит от правил оператора | Не предусмотрен |

Fragment и сам предупреждает: с коллекционного номера нельзя ни позвонить, ни отправить SMS. На регистрацию в других сервисах тоже не рассчитывайте — номер предназначен для Telegram ([о Fragment](https://fragment.com/about)).

Чтобы увидеть код, нужно войти на fragment.com именно с того кошелька, которому принадлежит номер ([core.telegram.org](https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms)). Получается, настоящий «ключ» от номера +888 — это кошелёк. У кого кошелёк, тот и видит коды входа в Telegram.

## Как купить номер +888 на Fragment

На странице номера в Fragment указаны два подготовительных шага: создать кошелёк Tonkeeper и пополнить его ([пример страницы](https://fragment.com/number/88800888000)). Общий порядок такой:

1. Установите приложение Tonkeeper и создайте в нём новый кошелёк. Запишите резервную (seed) фразу и храните её в надёжном месте.
2. Пополните кошелёк с поддерживаемой биржи или через @wallet в Telegram.
3. Откройте сайт [Fragment](https://fragment.com) и подключите кошелёк.
4. Перейдите на страницу нужного номера и посмотрите статус продажи.
5. Проверьте цену и условия на этой же странице, затем подтвердите покупку в кошельке.

Цена и статус продажи у каждого номера свои и указаны на его странице, поэтому цен в этой статье нет.

Перед оплатой проверьте:

- Что страница номера открыта на домене fragment.com. Не подключайте кошелёк к сайтам-подделкам.
- Дату и цену предыдущей покупки номера. Эти данные можно получить через Telegram API ([core.telegram.org](https://core.telegram.org/api/fragment)).
- Условия Fragment. Согласно им, право владения постоянно и его не может отменить даже сама компания, поэтому деньги за покупки не возвращаются ([условия Fragment](https://fragment.com/terms)).
- Ограничения по странам. Fragment может в любой момент и без предупреждения ограничить, в каких странах и какие его сервисы доступны.

Официальные инструкции Click, Payme, Paynet или Uzum Bank по обмену сумов на криптовалюту в этой статье не проверялись. Практические нюансы пополнения криптокошелька и дополнительные расходы описаны в [статье о покупке Premium через TON](/blog/ton-orqali-telegram-premium).

## Как войти в Telegram с номером +888

1. Откройте в приложении Telegram окно регистрации или входа.
2. Введите в поле номера купленный номер +888.
3. Когда приложение запросит одноразовый код (OTP), не ждите SMS — перейдите на сайт [Fragment](https://fragment.com).
4. Подключите к Fragment кошелёк, которому принадлежит номер, и посмотрите код входа на соответствующей странице.
5. Введите код в поле в Telegram.

Перевод существующего аккаунта на номер +888 устроен похоже: вы указываете +888 как новый номер, а код берёте на Fragment ([о Fragment](https://fragment.com/about)).

### Если код не отображается

Сначала проверьте, какой кошелёк подключён. Код виден, только если вы вошли с кошелька — владельца номера. Если кошельков несколько, выясните, в каком лежит номер, и подключите к Fragment именно его. Если номер куплен недавно, убедитесь, что он уже отображается в вашем кошельке.

## Как продать номер +888 или выставить его на аукцион

По условиям Fragment владельцы могут в любой момент продать свои коллекционные предметы частным образом или выставить их на открытый аукцион ([условия Fragment](https://fragment.com/terms)). Продажа проходит на сайте Fragment через кошелёк, в котором лежит номер. Конкретные шаги показаны на странице номера.

Перед тем как размещать объявление, учтите:

- **Условия.** Комиссия Fragment, минимальная цена, шаг и сроки аукциона в этой статье не подтверждены. Проверьте их в окне размещения объявления.
- **История номера открыта.** Покупатель может увидеть дату и цену предыдущей покупки через Telegram API. Учитывайте это при выборе цены.
- **Доступ к аккаунту.** Код входа виден через кошелёк — владельца номера. Когда номер перейдёт в другой кошелёк, вы можете потерять возможность получать коды. Если ваш аккаунт привязан к этому номеру, подумайте о переносе его на другой номер до продажи.
- **Площадка.** Продавайте номер только на самом Fragment. Не верьте покупателю, который пишет в чате: «сначала переведите номер, деньги отдам потом».

## Риски анонимного номера

- **Потеря кошелька.** Если данные для входа утеряны, Fragment не сможет восстановить ни кошелёк, ни коллекционные предметы в нём ([условия Fragment](https://fragment.com/terms)). Потеряв seed-фразу, вы можете лишиться доступа к номеру, а через него — и к аккаунту.
- **Блокировка аккаунта.** Если аккаунт заблокирован или удалён — самим Telegram или владельцем, — номером может стать невозможно пользоваться. В таком случае Fragment ответственности не несёт и убытки не компенсирует.
- **Покупку не вернуть.** Деньги за покупки не возвращаются, поэтому выбирайте номер без спешки.
- **Ограничения по странам.** Fragment может без предупреждения ограничить свои сервисы в отдельных странах.
- **Мошенничество.** Никому не сообщайте ни seed-фразу, ни код входа в Telegram. Если «дешёвый +888» предлагают вне Fragment, будьте осторожны. Общие правила собраны в [статье о защите от мошенников](/blog/telegram-premium-firibgarlikdan-himoya).

Username — открытая информация: зная его, войти в ваш аккаунт нельзя. А вот код входа и ключ от кошелька — секретные. Эта разница объясняется в [статье о безопасности username](/blog/username-berish-xavfsizmi).

## Если нужен только Premium: Fragment и TON не обязательны

Анонимный номер и Telegram Premium — разные вещи. Номер +888 — это способ входа в аккаунт, а Premium — подписка, которая открывает в аккаунте расширенные возможности.

Для Premium заводить криптокошелёк не нужно. Через Premiumtg можно оплатить подписку по username в сумах — через Click, Payme, Paynet или Uzum Bank. Зарубежная карта не нужна. Цены за весь срок:

- 3 месяца — ${narx(3)}
- 6 месяцев — ${narx(6)}
- 12 месяцев — ${narx(12)}

Код входа и пароль не запрашиваются, подписка активируется автоматически за 10 секунд. Цену и доступные способы оплаты перед покупкой уточните в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Сравнить с другими вариантами поможет статья [о способах купить Premium в Узбекистане](/blog/telegram-premium-sotib-olish-uzbekiston).

Premiumtg — независимый сервис и не заявляет об официальном партнёрстве с Telegram.

## Часто задаваемые вопросы

### Можно ли зарегистрироваться с номером +888 в WhatsApp или в банке?

Рассчитывать на это не стоит. Коллекционный номер предназначен для Telegram и не принимает SMS, поэтому в сервисах с подтверждением по SMS он не сработает.

### Можно ли продать на Fragment мой обычный номер Beeline, Ucell или Uzmobile?

В официальных источниках Fragment нет сведений о продаже номеров операторов — там торгуют номерами +888, выпущенными Telegram. Информацию о «плате за объявление в 1%» уточняйте у самого оператора.

### Можно ли вернуть деньги после покупки номера +888?

Нет, по условиям Fragment покупки не возвращаются. Если номер стал не нужен, его можно самостоятельно снова выставить на продажу.

### Как войти в Telegram, если кошелёк Tonkeeper удалился?

Чтобы снова видеть коды, восстановите кошелёк с номером по seed-фразе. Если фраза утеряна, Fragment не сможет вернуть ни кошелёк, ни номер.

### Что будет с номером, если аккаунт с анонимным номером заблокируют?

Пользоваться номером может стать невозможно. В условиях Fragment сказано, что в этом случае компания ответственности не несёт и убытки не возмещает.

### Какую комиссию берёт Fragment при продаже номера?

В этой статье эти данные не подтверждены. Точные условия смотрите в окне размещения объявления на Fragment.

### Анонимный номер действительно скрывает мою личность?

SIM-карта и оператор не нужны, но полная приватность не гарантируется. Дата и цена покупки номера могут быть видны через Telegram API, а данные в профиле остаются открытыми.`,
  },
};
