// Avtoblogyoz yasagan maqola (2026-11-06). Niyat: Telegram foydalanuvchisi yangi yangilanishda sovg‘alarni profildan o‘chirish, NFT sovg‘ani blokcheynga o‘tkazish va pullik xabarlar uchun bepul havola kabi nimalar qo‘shilganini «Telegram yangilanishi noyabr 2026» so‘zi bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://telegram.org/blog/welcome-messages-buttons-TG-13
//   https://core.telegram.org/bots/api-changelog#august-24-2026
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-2026-noyabr-yangilanishi-sovgalar",
  date: "2026-11-06",
  reviewed: "2026-11-06",
  category: "yangiliklar",
  priority: 0.7,
  title: { uz: "Telegram yangilanishi noyabr 2026: sovg‘alar haqidagi da’volar rostmi?", ru: "Обновление Telegram в ноябре 2026: правда ли то, что пишут о подарках?" },
  excerpt: { uz: `Kanalda sanalgan sovg‘a funksiyalaridan faqat NFT sovg‘ani TON blokcheyni orqali o‘tkazish rasman tasdiqlangan, u ham 2025-yil yanvaridan beri bor. Qolganlari rasmiy manbalarda topilmadi.`, ru: `Из функций подарков, о которых пишет канал, официально подтверждена только передача NFT-подарка через блокчейн TON, и она есть с января 2025 года. Остального в официальных источниках нет.` },
  keywords: ["telegram yangilanishi 2026 sovgalar","telegram yangilanishi noyabr 2026","telegram yangi funksiyalar sovgalar","telegram nft sovga blokcheynga otkazish","telegram sovgani profildan ochirish","telegram pullik xabarlar havola","обновление telegram ноябрь 2026","обновление телеграм подарки","удалить подарок из профиля телеграм","перевести nft подарок в блокчейн telegram","gram wallet подарки","кастомизация qr кода telegram"],
  related: ["telegram-nft-sovgalar","telegram-gifts-sovgalar","telegram-nft-sovga-sotish-marketpleys","telegram-2026-avgust-yangiliklari"],
  sources: [{"url":"https://telegram.org/blog/wear-gifts-blockchain-and-more","title":"Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More"},{"url":"https://telegram.org/blog/welcome-messages-buttons-TG-13","title":"Welcome Messages, Buttons in Messages and Signed Gifts"},{"url":"https://core.telegram.org/bots/api-changelog#august-24-2026","title":"Bot API changelog"}],
  content: {
    uz: `Telegram kanallaridan birida yangi yangilanish chiqqani yozildi. Postga ko‘ra, u bilan sovg‘alarga oid bir nechta funksiya kelgan. Bu kanal posti, rasmiy e’lon emas. Shuning uchun undagi har bir da’voni Telegram’ning o‘z sahifalari bilan solishtirdik.

## Kanalda Telegram yangilanishi haqida nima deyilmoqda?

Post muallifining yozishicha, yangilanish quyidagi imkoniyatlarni olib kelgan:

- profildagi limitlanmagan sovg‘alarni to‘lovsiz o‘chirish;
- «Gram Wallet» kartasini sovg‘alar bilan bezash, ularning o‘lchami va joylashuvini sozlash;
- QR-kodning ko‘rinishini o‘zgartirish;
- NFT sovg‘alarni blokcheynga o‘tkazish;
- kiruvchi xabarlar pullik bo‘lsa ham, odamlar tekin yozishi uchun alohida havola yaratish.

Bu ro‘yxat Telegram tomonidan e’lon qilinganmi yoki yo‘qmi — buni faqat rasmiy sahifalar ko‘rsatadi. Tekshiruvda [Telegram blogi](https://telegram.org/blog) va core.telegram.org’dagi hujjatlardan foydalanildi. Tekshiruv sanasi — 2026-yil 6-noyabr.

## Qaysi funksiyalar rasman tasdiqlangan, qaysilari yo‘q?

Quyidagi jadvalda kanal da’volari va rasmiy blogda e’lon qilingan sovg‘a yangiliklari bir joyga yig‘ilgan.

| Da’vo | Rasmiy manbadagi holati | Izoh |
|---|---|---|
| NFT sovg‘ani blokcheynga o‘tkazish | Tasdiqlangan | 2025-yil 24-yanvardan beri mavjud, yangilik emas |
| Marketplace’dan olingan sovg‘aga imzo va izoh qo‘shish | Tasdiqlangan | 2026-yil 25-avgust postida e’lon qilingan |
| Limitlanmagan sovg‘ani profildan to‘lovsiz o‘chirish | Topilmadi | Faqat kanal da’vosi |
| «Gram Wallet» kartasini sovg‘alar bilan bezash | Topilmadi | Bu nom tekshirilgan rasmiy sahifalarda uchramadi |
| QR-kodni o‘zgartirish | Topilmadi | Faqat kanal da’vosi |
| Pullik xabarlarda tekin yozish havolasi | Topilmadi | Faqat kanal da’vosi |

«Topilmadi» degani «albatta yo‘q» degani emas. Telegram’ning sovg‘alar va pullik xabarlarga oid ayrim texnik hujjat sahifalari bu tekshiruvda o‘qilmadi. Shuning uchun bu to‘rt funksiya hozircha **tasdiqlanmagan** deb hisoblanadi.

## NFT sovg‘ani blokcheynga o‘tkazish yangi funksiyami?

Yo‘q. Telegram 2025-yil 24-yanvardagi yangilanishda kolleksion sovg‘alarni TON blokcheyni orqali o‘tkazish yoki auksionga qo‘yish mumkinligini e’lon qilgan. Rasmiy blogdagi ibora: «gifts can now be transferred or auctioned via the TON blockchain». Manba — [Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More](https://telegram.org/blog/wear-gifts-blockchain-and-more).

Demak, bu imkoniyatni 2026-yil kuzining yangiligi sifatida ko‘rsatish noto‘g‘ri: u 2025-yil yanvaridan beri bor. Kanal postida bu jarayonda nimadir o‘zgargani aytilgan, ammo aynan nima o‘zgargani rasmiy manbada aniqlanmadi.

Kolleksion (NFT) sovg‘a oddiy sovg‘adan nimasi bilan farq qilishini [NFT sovg‘alar nima](/blog/telegram-nft-sovgalar) maqolasidan bilib olasiz. Sovg‘ani keyinchalik sotmoqchi bo‘lsangiz, Telegram ichidagi bozor va tashqi marketpleys farqi [NFT sovg‘ani qanday sotish mumkin](/blog/telegram-nft-sovga-sotish-marketpleys) maqolasida tushuntirilgan.

O‘tkazish tugmalari, shartlari va to‘lovi vaqt o‘tib o‘zgargan bo‘lishi mumkin. Amaldagi tartibni ilovaning o‘zida, sovg‘a ochilgan oynada tekshiring. Ekrandagi summa va shartni o‘qimasdan tasdiqlamang.

## 2026-yilda sovg‘alar bo‘yicha rasman nima qo‘shilgan?

Tekshirilgan rasmiy postlar ichida sovg‘alarga oid aniq yangilik 2026-yil 25-avgustdagi blog postida bor. Uning nomi — [Welcome Messages, Buttons in Messages and Signed Gifts](https://telegram.org/blog/welcome-messages-buttons-TG-13).

Bu postda sovg‘alar bo‘yicha bitta o‘zgarish e’lon qilingan: Marketplace’dan sotib olingan sovg‘aga endi imzo va izoh qo‘shish mumkin. Asl matnda shunday yozilgan: «Now you can also add your signature and a comment to the gifts you buy there.»

Shu postda yana ikki yangilik bor: yangi a’zolar uchun kutib olish xabarlari va matn ichidagi tugmalar. Ular haqida [Telegram 2026-yil avgust yangiliklari](/blog/telegram-2026-avgust-yangiliklari) maqolasida yozilgan.

Kanal sanab o‘tgan to‘rt funksiya bu rasmiy postda yo‘q. Bular sovg‘ani profildan o‘chirish, hamyon kartasini bezash, QR-kodni o‘zgartirish va pullik xabar havolasi.

Sovg‘alar umuman qanday ishlashini bilmoqchi bo‘lsangiz, [Telegram sovg‘alari (Gifts)](/blog/telegram-gifts-sovgalar) maqolasini o‘qing.

## Sovg‘ani o‘chirish, Gram Wallet, QR-kod va pullik xabar havolasi haqida nima ma’lum?

> Bu to‘rt funksiya tekshirilgan rasmiy manbalarda topilmadi va bu maqolada tasdiqlanmagan. Telegram blogida e’lon chiqmaguncha ularni faqat kanal da’vosi deb qabul qiling.

### Limitlanmagan sovg‘alarni profildan o‘chirish

Postda bu amal to‘lovsiz bo‘lishi aytilgan. Rasmiy manba buni ham, narx borligini ham tasdiqlamadi. Ilovada shunday tugma chiqsa, ekrandagi shartni o‘qing. O‘chirilgan sovg‘ani qaytarish mumkinmi yoki yo‘qmi — buni ham o‘sha yerda aniqlang.

### «Gram Wallet» kartasini sovg‘alar bilan bezash

«Gram Wallet» nomi tekshirilgan rasmiy sahifalarda uchramadi. Hamyonga oid har qanday qarorni faqat Telegram ilovasi ekranidagi ma’lumotga qarab qabul qiling: hamyonni ulash, pul o‘tkazish yoki karta ochish. Kanal skrinshotiga tayanib hamyonga hech narsa o‘tkazmang.

### QR-kodni o‘zgartirish

QR-kod ko‘rinishini moslash imkoniyati rasmiy manbada tasdiqlanmadi. Profil menyusida bunday sozlamani o‘zingiz ko‘rmaguncha unga tayanmang.

### Pullik xabarlar uchun tekin yozish havolasi

Kanalning yozishicha, kiruvchi xabarlari pullik bo‘lgan foydalanuvchi havola yaratib, ayrim odamlarga tekin yozish imkonini bera oladi. Bu ham tasdiqlanmadi. Funksiya chiqsa, havola kimga va qanday ishlashi sozlamalarda ko‘rinadi. Taxmin qilmang, o‘sha yozuvni o‘qing.

## Telegram yangilanishi chiqqanini o‘zingiz qanday tekshirasiz?

Kanal xabari, skrinshot yoki beta versiyada ko‘ringan funksiya hali hamma uchun chiqqanini anglatmaydi. O‘zingiz quyidagicha tekshiring:

1. [Telegram blogini](https://telegram.org/blog) oching va eng so‘nggi postning sanasi va sarlavhasini ko‘ring.
2. Dasturchilar uchun [Bot API o‘zgarishlar ro‘yxati](https://core.telegram.org/bots/api-changelog)ni ham ochib ko‘ring.
3. App Store yoki Google Play’da Telegram ilovasini yangilang. Kompyuterda Telegram Desktop’ning yangi versiyasi bor-yo‘qligini tekshiring.
4. Sozlamalarda ilova versiyasiga qarang.
5. Da’vo qilingan funksiyani sovg‘a oynasida yoki profil menyusida qidiring.

Bot API ro‘yxatida faqat bot platformasiga oid o‘zgarishlar yoziladi. Shuning uchun u oddiy ilova yangilanishini to‘liq aks ettirmasligi mumkin. Misol uchun, 2026-yil 26-oktabr holatida ro‘yxatdagi eng so‘nggi yozuv 24-avgustdagi [Bot API 10.3](https://core.telegram.org/bots/api-changelog#august-24-2026) edi.

Rasmiy blogda e’lon bo‘lmasa va funksiya ilovangizda ko‘rinmasa, xabarni mish-mish deb hisoblang. Bir necha kundan keyin qayta tekshiring.

## Sovg‘alar va NFT bilan bog‘liq qanday firibgarlikdan ehtiyot bo‘lish kerak?

Yangi funksiya haqidagi shov-shuvdan firibgarlar tez foydalanadi. Odatda shunday xabar keladi: «sovg‘angizni blokcheynga o‘tkazish uchun kodni yuboring» yoki «yangi funksiyani yoqish uchun havolaga kiring».

O‘zingizni himoya qilish uchun:

- login kodi va ikki bosqichli tasdiqlash (2FA) parolini hech kimga bermang;
- NFT sovg‘ani faqat Telegram ilovasi ichidagi tugma orqali o‘tkazing, uchinchi tomon botlari orqali emas;
- noma’lum botlar va saytlarga hamyoningizni ulamang;
- «yangi funksiyani faollashtirish» degan havolani ochishdan oldin manzilini tekshiring, shubha bo‘lsa ochmang;
- «sovg‘ani o‘chirish» yoki «kartani bezash» uchun ilovadan tashqarida pul so‘ralsa, to‘lamang.

Shubhali havolani ochish nimaga olib kelishi mumkinligi haqida [Telegramda havola ochsam bloklanadimi](/blog/telegram-shubhali-havola-akkaunt-bloklanishi) maqolasida yozilgan.

Premium xarid qilishda ham shu qoida amal qiladi. Premium statusni faqat Telegram beradi. [Premiumtg boti](https://t.me/premiumtg_uzbot) orqali olishda faqat username kerak, login kodi va parol so‘ralmaydi. Kimdir sizdan kod so‘rasa, bu akkauntingizga kirishga urinish.

## Ko‘p so‘raladigan savollar

### Telegram noyabr 2026 yangilanishi rasman chiqdimi?

Kanal sanagan sovg‘a funksiyalari bilan e’lon biz ko‘rib chiqqan rasmiy sahifalarda topilmadi. Eng ishonchli yo‘l — telegram.org/blog’dagi so‘nggi postni o‘zingiz ochib ko‘rish.

### Profildagi sovg‘alarni to‘lovsiz o‘chirish mumkinmi?

Bu da’vo rasmiy manbalarda tasdiqlanmadi. Ilovada shunday tugma chiqsa, uning narxi va shartini ekrandagi yozuvdan bilib oling.

### Gram Wallet kartasi nima va uni sovg‘alar bilan bezasa bo‘ladimi?

Tekshirilgan rasmiy sahifalarda bunday nom ham, kartani bezash funksiyasi ham uchramadi. Hamyonga oid amallarni faqat Telegram ilovasi ichida bajaring.

### NFT sovg‘ani blokcheynga o‘tkazish yangi imkoniyatmi?

Yo‘q. Telegram kolleksion sovg‘alarni TON blokcheyni orqali o‘tkazish va auksionga qo‘yishni 2025-yil 24-yanvarda e’lon qilgan. Amaldagi qadamlarni sovg‘a oynasida tekshiring.

### Pullik xabarlar yoqilgan bo‘lsa, kimdir menga tekin yozishi uchun havola yarata olamanmi?

Hozircha bu faqat kanal da’vosi, rasmiy manbalar uni tasdiqlamagan. Funksiya chiqsa, cheklovlari sozlamalarda ko‘rinadi.

### Telegram QR-kodini o‘zgartirish funksiyasi bormi?

Rasmiy e’lonlarda QR-kod ko‘rinishini moslash haqida ma’lumot topilmadi. Profil menyusida bunday sozlamani ko‘rmaguncha unga tayanmang.

### Yangi funksiya menda ko‘rinmayapti, nima qilish kerak?

Avval ilovani yangilang va versiyani tekshiring. Rasmiy blogda e’lon bo‘lmasa, funksiya hali umuman chiqmagan bo‘lishi mumkin.

### 2026-yilda sovg‘alarga rasman qanday o‘zgarish kelgan?

25-avgust postida Marketplace’dan sotib olingan sovg‘aga imzo va izoh qo‘shish imkoniyati e’lon qilingan. Kanaldagi boshqa da’volar o‘sha postda yo‘q.`,
    ru: `В одном из Telegram-каналов появился пост о выходе нового обновления. По словам автора, вместе с ним пришло несколько функций для подарков. Это пост канала, а не официальное объявление. Поэтому мы сверили каждое утверждение со страницами самого Telegram.

## Что пишут в канале об обновлении Telegram?

По версии автора поста, обновление принесло такие возможности:

- бесплатное удаление нелимитированных подарков из профиля;
- оформление карты «Gram Wallet» подарками с настройкой их размера и расположения;
- изменение внешнего вида QR-кода;
- перенос NFT-подарков в блокчейн;
- отдельная ссылка, по которой люди могут писать бесплатно, даже если входящие сообщения платные.

Объявлял ли Telegram этот список, показывают только официальные страницы. Для проверки мы использовали [блог Telegram](https://telegram.org/blog) и документацию на core.telegram.org. Дата проверки — 6 ноября 2026 года.

## Какие функции подтверждены официально, а какие нет?

В таблице собраны утверждения канала и новости о подарках, объявленные в официальном блоге.

| Утверждение | Статус в официальном источнике | Комментарий |
|---|---|---|
| Перенос NFT-подарка в блокчейн | Подтверждено | Доступно с 24 января 2025 года, не новинка |
| Подпись и комментарий к подарку, купленному на Marketplace | Подтверждено | Объявлено в посте от 25 августа 2026 года |
| Бесплатное удаление нелимитированного подарка из профиля | Не найдено | Только утверждение канала |
| Оформление карты «Gram Wallet» подарками | Не найдено | Это название не встречается на проверенных официальных страницах |
| Изменение QR-кода | Не найдено | Только утверждение канала |
| Ссылка для бесплатных сообщений при платных входящих | Не найдено | Только утверждение канала |

«Не найдено» не значит «точно нет». Часть технических страниц Telegram о подарках и платных сообщениях в этой проверке прочитать не удалось. Поэтому эти четыре функции пока считаются **неподтверждёнными**.

## Перенос NFT-подарка в блокчейн — это новая функция?

Нет. В обновлении от 24 января 2025 года Telegram объявил, что коллекционные подарки можно передавать или выставлять на аукцион через блокчейн TON. Формулировка из официального блога: «gifts can now be transferred or auctioned via the TON blockchain». Источник — [Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More](https://telegram.org/blog/wear-gifts-blockchain-and-more).

Значит, выдавать эту возможность за новинку осени 2026 года неверно: она существует с января 2025-го. В посте канала говорится, что в процессе что-то изменилось, но что именно — по официальным источникам установить не удалось.

Чем коллекционный (NFT) подарок отличается от обычного, читайте в статье [что такое NFT-подарки](/blog/telegram-nft-sovgalar). Если позже захотите продать подарок, разница между внутренним рынком Telegram и внешним маркетплейсом объяснена в материале [как продать NFT-подарок](/blog/telegram-nft-sovga-sotish-marketpleys).

Кнопки, условия и стоимость переноса со временем могли измениться. Актуальный порядок проверяйте в самом приложении, в окне открытого подарка. Не подтверждайте действие, не прочитав сумму и условия на экране.

## Что официально добавили для подарков в 2026 году?

Среди проверенных официальных постов конкретная новость о подарках есть в записи блога от 25 августа 2026 года. Она называется [Welcome Messages, Buttons in Messages and Signed Gifts](https://telegram.org/blog/welcome-messages-buttons-TG-13).

По подаркам в этом посте объявлено одно изменение: к подарку, купленному на Marketplace, теперь можно добавить подпись и комментарий. В оригинале: «Now you can also add your signature and a comment to the gifts you buy there.»

В том же посте есть ещё две новинки: приветственные сообщения для новых участников и кнопки внутри текста. О них рассказано в статье [новости Telegram за август 2026 года](/blog/telegram-2026-avgust-yangiliklari).

Четырёх функций из списка канала в этом официальном посте нет. Это удаление подарка из профиля, оформление карты кошелька, изменение QR-кода и ссылка для платных сообщений.

Если хотите разобраться, как вообще устроены подарки, прочитайте материал [подарки Telegram (Gifts)](/blog/telegram-gifts-sovgalar).

## Что известно об удалении подарков, Gram Wallet, QR-коде и ссылке для платных сообщений?

> Эти четыре функции не найдены в проверенных официальных источниках и в этой статье не подтверждены. Пока в блоге Telegram нет объявления, воспринимайте их только как утверждения канала.

### Удаление нелимитированных подарков из профиля

В посте сказано, что это действие бесплатное. Официальный источник не подтвердил ни это, ни наличие платы. Если в приложении появится такая кнопка, прочитайте условия на экране. Там же выясните, можно ли вернуть удалённый подарок.

### Оформление карты «Gram Wallet» подарками

Название «Gram Wallet» на проверенных официальных страницах не встречается. Любые решения, связанные с кошельком, принимайте только по информации на экране приложения Telegram: подключение кошелька, перевод денег или открытие карты. Не переводите ничего в кошелёк, опираясь на скриншот из канала.

### Изменение QR-кода

Возможность настроить внешний вид QR-кода в официальном источнике не подтверждена. Не рассчитывайте на неё, пока сами не увидите такую настройку в меню профиля.

### Ссылка для бесплатных сообщений при платных входящих

По словам канала, пользователь с платными входящими сообщениями может создать ссылку и разрешить некоторым людям писать бесплатно. Это тоже не подтверждено. Если функция выйдет, в настройках будет видно, для кого и как работает ссылка. Не гадайте — прочитайте эту подпись.

## Как самому проверить, вышло ли обновление Telegram?

Пост в канале, скриншот или функция из бета-версии ещё не означают, что обновление вышло для всех. Проверьте сами:

1. Откройте [блог Telegram](https://telegram.org/blog) и посмотрите дату и заголовок последнего поста.
2. Загляните также в [список изменений Bot API](https://core.telegram.org/bots/api-changelog) для разработчиков.
3. Обновите Telegram в App Store или Google Play. На компьютере проверьте, есть ли новая версия Telegram Desktop.
4. Посмотрите версию приложения в настройках.
5. Поищите заявленную функцию в окне подарка или в меню профиля.

В список Bot API попадают только изменения платформы ботов. Поэтому он может не полностью отражать обновления обычного приложения. Например, на 26 октября 2026 года последней записью в списке был [Bot API 10.3](https://core.telegram.org/bots/api-changelog#august-24-2026) от 24 августа.

Если в официальном блоге объявления нет и функции в вашем приложении не видно, считайте новость слухом. Проверьте снова через несколько дней.

## Каких мошенничеств с подарками и NFT стоит остерегаться?

Мошенники быстро пользуются шумом вокруг новых функций. Обычно приходят сообщения вроде «пришлите код, чтобы перенести подарок в блокчейн» или «перейдите по ссылке, чтобы включить новую функцию».

Как себя защитить:

- никому не сообщайте код входа и пароль двухэтапной проверки (2FA);
- переносите NFT-подарок только кнопкой внутри приложения Telegram, а не через сторонних ботов;
- не подключайте кошелёк к незнакомым ботам и сайтам;
- перед открытием ссылки «для активации новой функции» проверьте адрес, а при сомнениях не открывайте её;
- если за «удаление подарка» или «оформление карты» просят деньги вне приложения, не платите.

К чему может привести открытие подозрительной ссылки, рассказано в статье [заблокируют ли аккаунт, если открыть ссылку в Telegram](/blog/telegram-shubhali-havola-akkaunt-bloklanishi).

То же правило действует при покупке Premium. Статус Premium выдаёт только Telegram. Для покупки через [бот Premiumtg](https://t.me/premiumtg_uzbot) нужен только username — код входа и пароль не запрашиваются. Если кто-то просит у вас код, это попытка получить доступ к вашему аккаунту.

## Часто задаваемые вопросы

### Обновление Telegram за ноябрь 2026 года официально вышло?

Объявления с функциями подарков из списка канала на изученных нами официальных страницах нет. Надёжнее всего самому открыть последний пост на telegram.org/blog.

### Можно ли бесплатно удалить подарки из профиля?

Официальные источники это не подтвердили. Если в приложении появится такая кнопка, узнайте её стоимость и условия из надписи на экране.

### Что такое карта Gram Wallet и можно ли украсить её подарками?

На проверенных официальных страницах не встречается ни такое название, ни функция оформления карты. Операции с кошельком выполняйте только внутри приложения Telegram.

### Перенос NFT-подарка в блокчейн — новая возможность?

Нет. Передачу и аукцион коллекционных подарков через блокчейн TON Telegram объявил 24 января 2025 года. Актуальные шаги смотрите в окне подарка.

### Если у меня платные входящие сообщения, могу ли я создать ссылку, чтобы кто-то писал мне бесплатно?

Пока это лишь утверждение канала, официальные источники его не подтвердили. Если функция появится, её ограничения будут видны в настройках.

### Есть ли в Telegram функция изменения QR-кода?

В официальных объявлениях сведений о настройке вида QR-кода нет. Не полагайтесь на неё, пока не увидите такую опцию в меню профиля.

### Новая функция у меня не отображается — что делать?

Сначала обновите приложение и проверьте его версию. Если в официальном блоге объявления нет, функция, скорее всего, ещё вообще не вышла.

### Что официально изменилось в подарках в 2026 году?

В посте от 25 августа объявлена возможность добавить подпись и комментарий к подарку, купленному на Marketplace. Остальных утверждений канала в том посте нет.`,
  },
};
