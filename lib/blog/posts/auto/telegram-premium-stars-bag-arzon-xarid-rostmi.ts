// Avtoblogyoz yasagan maqola (2026-11-13). Niyat: Telegram'da Premium'ni $0.25 ga va 100 000 Stars'ni $15 ga olish mumkin bo'lgan bag haqidagi xabarni ko'rgan foydalanuvchi «Telegram Premium bag 0.25 dollar rostmi» deb qidiradi. U xabar rostligini, bag hali ishlayaptimi va bunday arzon takliflar xavflimi, shuni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/tos/stars
//   https://fragment.com/stars/buy
//   https://fragment.com/premium
//   https://core.telegram.org/bug-bounty
//   https://telegram.org/tos
import type { BlogPost } from "@/lib/blog/types";
import { PREMIUM_PLANS, formatSom } from "@/lib/site";

const narx = (oy: number) => formatSom(PREMIUM_PLANS.find((p) => p.months === oy)?.price ?? 0);

export const post: BlogPost = {
  slug: "telegram-premium-stars-bag-arzon-xarid-rostmi",
  date: "2026-11-13",
  reviewed: "2026-11-13",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram Premium 0,25 dollarga va arzon Stars: bag haqidagi xabar rostmi?", ru: "Telegram Premium за 0,25 доллара и дешёвые Stars: правда ли про баг?" },
  excerpt: { uz: `Tasdiqlanmagan: Premium’ni 0,25 dollarga va 100 000 Stars’ni 15 dollarga beradigan bag haqida faqat kanal posti yozgan. Telegram’ning rasmiy manbalarida tasdiq topilmadi.`, ru: `Не подтверждено: о баге, который якобы давал Premium за 0,25 доллара и 100 000 Stars за 15 долларов, написал только пост в канале. В официальных источниках Telegram подтверждения нет.` },
  keywords: ["telegram premium bag arzon stars","telegram premium 0.25 dollar rostmi","telegram stars bag","telegram premium arzon xavflimi","100 000 stars narxi","telegram bag bounty","баг telegram premium за 0.25","баг telegram stars 100 тысяч за 15 долларов","дешевый telegram premium развод","telegram stars баг правда","купить звезды telegram дешево"],
  related: ["telegram-premium-juda-arzon-nega","telegram-stars-refund-firibgarlik-rostmi","telegram-premium-bepul-olish","telegram-premium-firibgarlikdan-himoya"],
  sources: [{"url":"https://telegram.org/tos/stars","title":"Terms of Service for Telegram Stars"},{"url":"https://fragment.com/stars/buy","title":"Fragment — Buy Stars"},{"url":"https://fragment.com/premium","title":"Fragment — Telegram Premium"},{"url":"https://core.telegram.org/bug-bounty","title":"Telegram Bug Bounty Program"},{"url":"https://telegram.org/tos","title":"Telegram Terms of Service"}],
  content: {
    uz: `## Premium’ni 0,25 dollarga beradigan bag haqidagi xabar rostmi?

Bu da’vo hozircha faqat Telegram kanalidagi postga tayanadi. Telegram’ning rasmiy blogi, hujjatlari va Fragment sahifalarida bunday bag haqida tasdiq topilmadi.

Postda aytilganlar:

- bir yillik Premium’ni «~30 dollar o‘rniga» 0,25 dollarga olish mumkin bo‘lgan;
- 100 000 Stars’ni «1 500 dollar o‘rniga» 15 dollarga olish mumkin bo‘lgan.

Bu gaplarning hech biri mustaqil tasdiqlanmagan. Telegram’ning rasmiy bayonoti topilmadi, tranzaksiyalar yoki zarar miqdori ham rasmiy manbada ko‘rsatilmagan. Ma’lumotlar 2026-yil 13-noyabr holatiga ko‘ra tekshirildi.

Rasman ma’lum bo‘lganlari: Telegram Stars va umumiy foydalanish shartlari, Fragment’dagi narxlar va Bug Bounty dasturi qoidalari. Quyida postni shular bilan solishtiramiz.

## Postdagi raqamlar rasmiy narxlarga qanchalik mos?

Fragment’ning [Stars sotib olish sahifasida](https://fragment.com/stars/buy) har bir paket yonida qiymatlar turadi, lekin valyuta aniq yozilmagan. Shuning uchun ularni dollarga aylantirmasdan, sahifadagidek beramiz.

| Nima | Postdagi da’vo | Fragment sahifasida |
|---|---|---|
| 100 000 Stars | 15 dollar | 1 500 va 1 304,85 qiymatlari |
| 1 000 Stars | aytilmagan | 15 |
| 50 Stars | aytilmagan | 0,75 |
| 1 yillik Premium | 0,25 dollar | [kriptohamyon orqali sotiladi](https://fragment.com/premium), postdagi narx tasdiqlanmadi |

Kichik paketlardan hisoblasak, bir Star taxminan 0,015 turadi. Postda 100 000 Stars uchun aytilgan 15 esa Fragment’da 1 000 Stars yonida turibdi. Demak, da’vo qilingan narx rasmiy hisobdan taxminan 100 baravar past.

Postdagi «1 500 dollar» ham to‘liq aniq emas: Fragment’da 1 500 raqami bor, lekin uning dollar ekani sahifada yozilmagan. Premium uchun postdagi ikkala raqam — 0,25 ham, «~30» ham — rasmiy manbalarda tasdiqlanmadi.

## Bag hali ishlayaptimi?

Buni aniq aytib bo‘lmaydi. Bag umuman bo‘lganmi yoki tuzatilganmi, bu haqda rasmiy ma’lumot topilmadi. Shuning uchun «usul hali ishlaydi» degan har qanday gapni tekshirib bo‘lmaydi.

Bunday xabarlar tarqalgach, odatda «bagni ko‘rsatamiz», «arzon Stars sotamiz» degan bot va kanallar ko‘payadi. Ularga ishonmang. Usul haqiqatan ishlasa ham, undan foydalanish Telegram qoidalariga zid bo‘lishi mumkin. Ishlamasa, siz shunchaki «usul» uchun pul to‘lab qo‘ygan bo‘lasiz.

> Taklifda login kodi, ikki bosqichli parol (2FA) yoki «usul uchun» oldindan to‘lov so‘ralsa, darhol to‘xtating. Kod va parolni bersangiz, akkauntingiz boshqa birovning qo‘liga o‘tadi.

## Bag orqali olingan Stars, sovg‘a yoki Premium nima bo‘lishi mumkin?

Bag orqali olingan narsalar bekor qilinadi degan aniq rasmiy gap topilmadi. Stars shartlarida bag yoki exploit alohida tilga olinmagan. Lekin umumiy qoidalar Telegram’ga keng imkon beradi:

- [Stars shartlariga](https://telegram.org/tos/stars) ko‘ra, Telegram balansdagi Stars’ni vaqtincha ushlab turishi yoki butunlay yechib olishi mumkin.
- Shartlarga rioya qilmaslik vaqtincha yoki doimiy bloklashga olib kelishi mumkin. [Umumiy shartlarda](https://telegram.org/tos) ham Telegram’ning o‘zi yoki uning ayrim xizmatlari bloklanishi mumkinligi yozilgan.
- Akkaunt o‘chirilsa yoki yo‘qotilsa, balansda qolgan Stars kuyib ketadi.

Amalda bu shuni anglatadi: shubhali yo‘l bilan olingan Stars yoki sovg‘a hozir profilingizda turgani uni saqlab qolishingizni bildirmaydi. Telegram balansni yechsa yoki akkauntni cheklasa, ortga qaytarish uchun tayanadigan rasmiy band topilmadi.

## Bunday sovg‘ani sotib olsam, pulimni qaytara olamanmi?

Rasmiy qoidalarga ko‘ra, bunga umid qilmang. Stars savdolari yakuniy: keraksiz yoki adashib qilingan xarid uchun Telegram pul qaytarmaydi. Umumiy shartlarda ham xaridlar bo‘yicha to‘lovlar odatda qaytarilmasligi aytilgan.

Yana bir jihat bor. Telegram shartlari xizmatdan foydalanuvchilarni aldash uchun foydalanishni taqiqlaydi. Odatdagidan ancha arzon sovg‘a sotayotgan odam shu qoidani buzayotgan bo‘lishi mumkin. Oqibati esa ko‘pincha xaridorga tushadi: sotuvchi pulni olib ketadi, sovg‘a yoki Stars keyin ushlab qolinishi mumkin.

Shunga o‘xshash sxema — Stars qaytarish orqali qilinadigan aldov. U haqda [Stars refund firibgarligi haqidagi maqolada](/blog/telegram-stars-refund-firibgarlik-rostmi) batafsil yozganmiz.

## Shubhali sovg‘a yoki Stars olib qo‘ygan bo‘lsam, nima qilaman?

Agar arzon taklifga allaqachon pul to‘lagan bo‘lsangiz, vahima qilmang, lekin vaziyatni nazoratga oling:

1. **Hech kimga kod va parol bermang.** «Sovg‘ani yetkazish» yoki «tasdiqlash» bahonasida login kodi so‘ralsa, bu akkauntni egallashga urinish.
2. **Faol seanslarni tekshiring.** Sozlamalardagi qurilmalar ro‘yxatida notanish seans bo‘lsa, uni yoping.
3. **Ikki bosqichli parolni yoqing.** Agar hali yoqilmagan bo‘lsa, shu payt yoqib qo‘ying.
4. **To‘lov ma’lumotlarini saqlang.** Chek, sotuvchining username’i va yozishmalarni o‘chirmang. Bank yoki to‘lov tizimiga murojaat qilsangiz, ular kerak bo‘ladi.
5. **Olinganini qayta sotmang.** Shubhali sovg‘ani boshqa odamga sotsangiz, xavfni unga ham o‘tkazasiz.

Agar akkauntingizga begona kirishga urinishayotgan bo‘lsa, [+888 raqam va login kodlari haqidagi maqoladagi](/blog/888-raqam-login-kodi-sorovlari-himoya) himoya qadamlari ham foydali.

## Telegram bag topgan odamga nima taklif qiladi?

Zaiflik topgan odam uchun rasmiy yo‘l bor — [Bug Bounty dasturi](https://core.telegram.org/bug-bounty). Undagi asosiy shartlar:

- mukofot muammo qanchalik jiddiyligiga qarab 100 dollardan 100 000 dollargacha va undan ham ko‘proq bo‘ladi;
- zaiflik haqida **security@telegram.org** manziliga yoziladi;
- muammo tuzatilishidan oldin ommaga yoki uchinchi shaxslarga oshkor qilingan bo‘lsa, mukofot berilmaydi;
- sinov qonunni buzmasligi, xizmat ishini izdan chiqarmasligi va boshqa foydalanuvchilarga zarar yetkazmasligi kerak.

Agar kimdir bag bilan arzon xarid qilib, undan foyda olgan bo‘lsa, bu shartlarga to‘g‘ri kelmaydi. Bunday holatni halol topilma deb bo‘lmaydi, u xizmatdan noto‘g‘ri foydalanishga ko‘proq o‘xshaydi. Kanal postida bagni ommaga e’lon qilishning o‘zi ham Bug Bounty mukofotiga yo‘l yopadi.

## Arzon Premium va Stars taklifini qanday tekshirish kerak?

Juda arzon taklif ko‘rsangiz, to‘lashdan oldin shu tartibda tekshiring:

1. **Manbaga qarang.** Da’vo telegram.org yoki fragment.com’da yozilganmi yoki faqat kanal postidami? «Bag topildi» degan post dalil emas.
2. **Narxni solishtiring.** Fragment’dagi Stars narxini oching: u yerda 1 000 Stars yonida 15 turadi. Rasmiy narxdan 100 baravar arzon taklif normal emas.
3. **Nima so‘ralayotganini tekshiring.** Login kodi, parol yoki akkauntga kirish so‘ralsa, rad eting. Premium olish uchun [akkauntga kirish shart emas](/blog/akkauntga-kirmasdan-premium-olish).
4. **To‘lov qaytmasligini yodda tuting.** Stars xaridi yakuniy, boshqa xaridlar bo‘yicha to‘lovlar ham odatda qaytarilmaydi.
5. **Shubha bo‘lsa, sotib olmang.** Arzon taklif ortida odatda nima turishini [bu maqolada](/blog/telegram-premium-juda-arzon-nega) tushuntirganmiz, umumiy qoidalar esa [firibgarlardan himoyalanish qo‘llanmasida](/blog/telegram-premium-firibgarlikdan-himoya).

## Premium’ni xavfsiz va so‘mda qanday olish mumkin?

Stars shartlariga ko‘ra, Stars iOS va Android’dagi Telegram ilovalarida ilova ichidagi xarid orqali olinadi. Fragment’da esa Premium kriptohamyon orqali o‘zingizga yoki do‘stingizga sotib olinadi.

Kripto hamyon yoki xorijiy karta bo‘lmasa, so‘mda to‘lash mumkin. Premiumtg’da jarayon shunday:

- faqat username kerak: akkauntga kirish, login kodi yoki parol so‘ralmaydi;
- to‘lov so‘mda: Click, Payme, Paynet yoki Uzum Bank orqali;
- obuna 10 soniyada avtomatik faollashadi;
- narxlar: 3 oy — ${narx(3)}, 6 oy — ${narx(6)}, 12 oy — ${narx(12)}.

Narx va mavjud to‘lov usullarini xariddan oldin [@premiumtg_uzbot](https://t.me/premiumtg_uzbot) botida tekshiring. Savol bo‘lsa, [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport) ga yozing.

Premium statusini faqat Telegram beradi, shuning uchun «soxta Premium» degan narsa texnik jihatdan yo‘q. Premiumtg mustaqil xizmat va Telegram nomidan ish ko‘rmaydi. Tekin Premium va’dalari haqida [alohida maqola](/blog/telegram-premium-bepul-olish) bor.

## Ko‘p so‘raladigan savollar

### Telegram bu bagni rasman tasdiqladimi?

Yo‘q, 2026-yil 13-noyabr holatiga ko‘ra Telegram blogi, hujjatlari va Fragment sahifalarida bu haqda e’lon topilmadi. Xabar faqat kanal postiga asoslangan.

### 100 000 Telegram Stars rasmiy narxda qancha turadi?

Fragment’da bu paket yonida 1 500 va 1 304,85 qiymatlari ko‘rsatilgan, ammo valyuta yozilmagan. Amaldagi narxni xariddan oldin Fragment’ning o‘zida ko‘ring.

### Bag orqali olingan sovg‘ani sotib olsam, akkauntim bloklanadimi?

Aynan shu holat uchun rasmiy qoida topilmadi. Lekin Telegram shartlarini buzish vaqtincha yoki doimiy bloklashga olib kelishi mumkin, ya’ni xavf xaridorda qoladi.

### «Premium bag usulini o‘rgatamiz» degan botga pul to‘lash xavflimi?

Ha. Usul ishlashi hech qayerda tasdiqlanmagan, bunday botlar esa ko‘pincha oldindan to‘lov, login kodi yoki 2FA parolini so‘raydi.

### Telegram’da bag topsam, qayerga yozaman?

Bug Bounty dasturi shartlariga ko‘ra, security@telegram.org manziliga. Tuzatilmasidan oldin muammoni ommaga yoki boshqa odamlarga aytsangiz, mukofot berilmaydi.

### Arzon olingan Stars balansdan yo‘qolishi mumkinmi?

Mumkin: Telegram balansdagi Stars’ni ushlab turish yoki yechib olish huquqini saqlab qoladi. Akkaunt yo‘qolsa, qolgan Stars ham kuyib ketadi.

### Stars xaridini bekor qilib, pulni qaytarib olsa bo‘ladimi?

Rasmiy shartlarga ko‘ra, Stars savdolari yakuniy va adashib qilingan xarid uchun ham pul qaytarilmaydi. Shu sababli sotuvchi va narxni to‘lovdan oldin tekshiring.`,
    ru: `## Правда ли, что был баг с Premium за 0,25 доллара?

Пока это утверждение держится только на посте в Telegram-канале. В официальном блоге Telegram, в документации и на страницах Fragment подтверждения такого бага нет.

Что говорится в посте:

- годовой Premium якобы можно было купить за 0,25 доллара «вместо ~30 долларов»;
- 100 000 Stars якобы можно было купить за 15 долларов «вместо 1 500 долларов».

Ни одно из этих утверждений независимо не подтверждено. Официального заявления Telegram нет. Транзакции и размер ущерба в официальных источниках тоже не указаны. Данные проверены на 13 ноября 2026 года.

Что известно официально: условия Telegram Stars и общие условия использования, цены на Fragment и правила программы Bug Bounty. Ниже сверяем с ними пост.

## Насколько цифры из поста совпадают с официальными ценами?

На [странице покупки Stars](https://fragment.com/stars/buy) у каждого пакета указаны суммы, но валюта прямо не названа. Поэтому мы не пересчитываем их в доллары и приводим так, как на сайте.

| Что | Утверждение в посте | На странице Fragment |
|---|---|---|
| 100 000 Stars | 15 долларов | значения 1 500 и 1 304,85 |
| 1 000 Stars | не указано | 15 |
| 50 Stars | не указано | 0,75 |
| Premium на 1 год | 0,25 доллара | [продаётся через криптокошелёк](https://fragment.com/premium), цена из поста не подтверждена |

По небольшим пакетам одна звезда стоит примерно 0,015. А 15, которые в посте названы ценой 100 000 Stars, на Fragment стоят напротив пакета в 1 000 Stars. Получается, заявленная цена примерно в 100 раз ниже официального расчёта.

«1 500 долларов» из поста — тоже неточная цифра. Число 1 500 на Fragment есть, но то, что это доллары, на странице не написано. Обе цифры по Premium — и 0,25, и «~30» — в официальных источниках не подтвердились.

## Баг всё ещё работает?

Точно сказать нельзя. Официальных данных о том, был ли баг вообще и исправлен ли он, нет. Поэтому любое «способ ещё работает» проверить невозможно.

После таких новостей обычно появляется много ботов и каналов вроде «покажем баг» или «продаём дешёвые Stars». Не доверяйте им. Даже если способ действительно работает, пользоваться им может быть нарушением правил Telegram. А если не работает, вы просто заплатите за «способ».

> Если в предложении просят код входа, пароль двухэтапной аутентификации (2FA) или предоплату «за способ», сразу остановитесь. Отдадите код и пароль — аккаунт окажется у чужого человека.

## Что может случиться со Stars, подарками или Premium, полученными через баг?

Прямого официального заявления о том, что полученное через баг будет аннулировано, нет. Баги и эксплойты в условиях Stars отдельно не упоминаются. Но общие правила дают Telegram широкие полномочия:

- По [условиям Stars](https://telegram.org/tos/stars) Telegram может временно удержать Stars на балансе или списать их насовсем.
- Несоблюдение условий может привести к временной или постоянной блокировке. В [общих условиях](https://telegram.org/tos) тоже сказано, что может быть заблокирован сам Telegram или отдельные его сервисы.
- Если аккаунт удалён или утерян, оставшиеся на балансе Stars сгорают.

На практике это значит: если Stars или подарок, полученные сомнительным путём, сейчас лежат в профиле, это ещё не значит, что они там останутся. Если Telegram спишет баланс или ограничит аккаунт, официального пункта, на который можно сослаться, чтобы вернуть их, мы не нашли.

## Если я купил такой подарок, можно ли вернуть деньги?

По официальным правилам — не рассчитывайте. Продажи Stars окончательные: за ненужную или случайную покупку Telegram денег не возвращает. В общих условиях тоже сказано, что платежи за покупки, как правило, не возвращаются.

Есть и ещё один момент. Условия Telegram запрещают использовать сервис для обмана пользователей. Продавец подарков сильно ниже обычной цены вполне может нарушать это правило. А последствия обычно ложатся на покупателя: продавец забирает деньги, а подарок или Stars потом могут удержать.

Похожая схема — обман через возврат Stars. Мы подробно разбирали её в [статье о мошенничестве с возвратом Stars](/blog/telegram-stars-refund-firibgarlik-rostmi).

## Я уже получил сомнительный подарок или Stars — что делать?

Если вы уже заплатили по дешёвому предложению, не паникуйте, но возьмите ситуацию под контроль:

1. **Никому не давайте коды и пароли.** Если под предлогом «доставить подарок» или «подтвердить» просят код входа — это попытка захватить аккаунт.
2. **Проверьте активные сеансы.** Если в списке устройств в настройках есть незнакомый сеанс, завершите его.
3. **Включите двухэтапную аутентификацию.** Если она ещё не включена, сделайте это сейчас.
4. **Сохраните данные об оплате.** Не удаляйте чек, username продавца и переписку. Они понадобятся, если будете обращаться в банк или платёжную систему.
5. **Не перепродавайте полученное.** Продав сомнительный подарок другому человеку, вы переложите риск и на него.

Если кто-то пытается войти в ваш аккаунт, пригодятся и шаги защиты из [статьи о номерах +888 и кодах входа](/blog/888-raqam-login-kodi-sorovlari-himoya).

## Что Telegram предлагает тому, кто нашёл баг?

Для тех, кто нашёл уязвимость, есть официальный путь — [программа Bug Bounty](https://core.telegram.org/bug-bounty). Её основные условия:

- награда от 100 до 100 000 долларов и выше, в зависимости от серьёзности проблемы;
- об уязвимости пишут на адрес **security@telegram.org**;
- если проблема стала известна публике или третьим лицам до исправления, награда не положена;
- тестирование не должно нарушать закон, мешать работе сервиса и вредить другим пользователям.

Если кто-то дёшево покупал через баг и получал выгоду, это под эти условия не подходит. Такой случай трудно назвать честной находкой — это скорее злоупотребление сервисом. Да и сама публикация бага в канале уже закрывает дорогу к награде по Bug Bounty.

## Как проверить предложение дешёвого Premium и Stars?

Если видите слишком дешёвое предложение, перед оплатой проверьте по порядку:

1. **Посмотрите на источник.** Об этом написано на telegram.org или fragment.com — или только в посте канала? Пост «нашли баг» — не доказательство.
2. **Сравните цену.** Откройте цены Stars на Fragment: там у 1 000 Stars стоит 15. Предложение в 100 раз дешевле официальной цены — это ненормально.
3. **Проверьте, что у вас просят.** Если нужен код входа, пароль или доступ к аккаунту — откажитесь. Для покупки Premium [входить в аккаунт не нужно](/blog/akkauntga-kirmasdan-premium-olish).
4. **Помните, что деньги не вернут.** Покупка Stars окончательная, платежи за другие покупки, как правило, тоже не возвращаются.
5. **Сомневаетесь — не покупайте.** Что обычно стоит за дешёвыми предложениями, мы объяснили [в этой статье](/blog/telegram-premium-juda-arzon-nega), а общие правила — в [руководстве по защите от мошенников](/blog/telegram-premium-firibgarlikdan-himoya).

## Как безопасно купить Premium за сумы?

По условиям Stars звёзды покупаются через встроенные покупки в приложениях Telegram для iOS и Android. На Fragment Premium покупают через криптокошелёк — себе или другу.

Если криптокошелька или зарубежной карты нет, можно заплатить в сумах. В Premiumtg это выглядит так:

- нужен только username: вход в аккаунт, код входа и пароль не требуются;
- оплата в сумах: через Click, Payme, Paynet или Uzum Bank;
- подписка активируется автоматически за 10 секунд;
- цены: 3 месяца — ${narx(3)}, 6 месяцев — ${narx(6)}, 12 месяцев — ${narx(12)}.

Цену и доступные способы оплаты перед покупкой уточните в боте [@premiumtg_uzbot](https://t.me/premiumtg_uzbot). Если есть вопросы, пишите в [@StarsPaymeeSupport](https://t.me/StarsPaymeeSupport).

Статус Premium выдаёт только Telegram, поэтому «поддельного Premium» технически не бывает. Premiumtg — независимый сервис и не действует от имени Telegram. Об обещаниях получить Premium даром есть [отдельная статья](/blog/telegram-premium-bepul-olish).

## Часто задаваемые вопросы

### Telegram официально подтвердил этот баг?

Нет. На 13 ноября 2026 года ни в блоге Telegram, ни в документации, ни на страницах Fragment объявлений об этом нет. Новость держится только на посте в канале.

### Сколько стоят 100 000 Telegram Stars по официальной цене?

На Fragment рядом с этим пакетом указаны значения 1 500 и 1 304,85, но валюта не названа. Актуальную цену смотрите на самом Fragment перед покупкой.

### Заблокируют ли аккаунт, если я купил подарок, полученный через баг?

Отдельного правила именно для такого случая нет. Но нарушение условий Telegram может закончиться временной или постоянной блокировкой, так что риск остаётся на покупателе.

### Опасно ли платить боту, который обещает научить «багу с Premium»?

Да. Нигде не подтверждено, что способ работает, а такие боты часто требуют предоплату, код входа или пароль 2FA.

### Куда писать, если я нашёл баг в Telegram?

По условиям программы Bug Bounty — на security@telegram.org. Если до исправления рассказать о проблеме публично или другим людям, награду не дадут.

### Могут ли дешёвые Stars пропасть с баланса?

Могут: Telegram оставляет за собой право удержать или списать Stars с баланса. Если аккаунт будет утерян, оставшиеся Stars тоже сгорят.

### Можно ли отменить покупку Stars и вернуть деньги?

По официальным условиям продажи Stars окончательные, деньги не возвращают даже за случайную покупку. Поэтому проверяйте продавца и цену до оплаты.`,
  },
};
