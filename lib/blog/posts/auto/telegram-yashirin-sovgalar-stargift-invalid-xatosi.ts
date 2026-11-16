// Avtoblogyoz yasagan maqola (2026-11-16). Niyat: Telegram Gifts foydalanuvchisi sotuvdan olingan eski sovg‘ani yubora olmayapti va «Telegram yashirin sovg‘alarni o‘chirdimi, STARGIFT_INVALID nima» deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/gifts-verification-platform
//   https://core.telegram.org/api/gifts
//   https://core.telegram.org/method/payments.getStarGifts
//   https://core.telegram.org/method/payments.getPaymentForm
//   https://core.telegram.org/constructor/starGift
import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "telegram-yashirin-sovgalar-stargift-invalid-xatosi",
  date: "2026-11-16",
  reviewed: "2026-11-16",
  category: "stars",
  priority: 0.7,
  title: { uz: "Telegram yashirin sovg‘alarni o‘chirdimi? STARGIFT_INVALID xatosi nima", ru: "Telegram отключил скрытые подарки? Что значит ошибка STARGIFT_INVALID" },
  excerpt: { uz: `Telegram yashirin sovg‘alarni yuborishni o‘chirgani rasman e’lon qilinmagan, bu haqda faqat kanallar yozgan. STARGIFT_INVALID esa API hujjatida «sovg‘a yaroqsiz» degan umumiy xato.`, ru: `Telegram официально не объявлял, что отключил отправку скрытых подарков: об этом писали только каналы. STARGIFT_INVALID — общая ошибка API «подарок недействителен».` },
  keywords: ["telegram yashirin sovg‘alar yuborilmayapti","STARGIFT_INVALID","stargift invalid xatosi","telegram sovg‘a yuborib bo‘lmayapti","telegram gifts xato","sotuvdan olingan sovg‘a telegram","telegram sovg‘a sold out","не отправляется подарок телеграм","STARGIFT_INVALID ошибка","скрытые подарки телеграм","telegram отключил скрытые подарки","подарок недоступен telegram"],
  related: ["telegram-gifts-sovgalar","telegram-nft-sovgalar","telegram-2026-noyabr-yangilanishi-sovgalar","telegram-sovga-qabul-qilishni-ochirish-sozlama"],
  sources: [{"url":"https://telegram.org/blog/gifts-verification-platform","title":"Gifts, Verification Platform and More"},{"url":"https://core.telegram.org/api/gifts","title":"Telegram Gifts"},{"url":"https://core.telegram.org/method/payments.getStarGifts","title":"payments.getStarGifts"},{"url":"https://core.telegram.org/method/payments.getPaymentForm","title":"payments.getPaymentForm"},{"url":"https://core.telegram.org/constructor/starGift","title":"starGift"}],
  content: {
    uz: `## Telegram yashirin sovg‘alarni yuborishni rostdan o‘chirdimi?

Rasmiy tasdiq yo‘q. Telegram blogida ham, API hujjatlarida ham yashirin sovg‘alarni yuborish o‘chirilgani haqida e’lon yoki o‘zgarishlar yozuvi (changelog) topilmadi. Bu haqda faqat norasmiy Telegram kanallari yozgan.

Kanallardagi da’vo shunday: Telegram avval sotgan, keyin sotuvdan olib qo‘ygan cheksiz sovg‘alarni yuborishga urinilsa, server STARGIFT_INVALID xatosini qaytarayotganmish. Bu foydalanuvchilarning kuzatuvi, Telegram’ning bayonoti emas.

Telegram buni nega qilgani haqida ham rasmiy izoh yo‘q, shuning uchun sabab haqida taxmin qilmaymiz. Quyida faqat rasmiy hujjat aniq yozgan narsalar bor: xato nimani bildiradi, qaysi sovg‘ani sotib olib bo‘lmaydi va buni o‘zingiz qanday tekshirasiz.

## Da’vo va rasmiy manbalar: nima tasdiqlangan, nima yo‘q?

| Da’vo | Rasmiy manbada | Holati |
|---|---|---|
| Yashirin sovg‘alarni yuborish o‘chirildi | E’lon yoki changelog topilmadi | Tasdiqlanmagan |
| STARGIFT_INVALID xatosi bor | payments.getPaymentForm hujjatida bor: «berilgan sovg‘a yaroqsiz» | Xato mavjudligi tasdiqlangan |
| Xato aynan yashirin sovg‘alarda chiqadi | Hujjatda bunday bog‘liqlik yo‘q | Tasdiqlanmagan |
| Sovg‘aning «yashirin» ekanini bildiruvchi belgi bor | starGift obyektida topilmadi | Tasdiqlanmagan |
| Sotuvi tugagan sovg‘ani sotib olib bo‘lmaydi | starGift’da sold_out belgisi bor, xarid faqat sold_out bo‘lmagan sovg‘aga ruxsat etiladi | Tasdiqlangan |

Ya’ni xato nomi haqiqiy, lekin uning «yashirin sovg‘alar» bilan bog‘liqligi hozircha faqat kanallarning kuzatuviga tayanadi.

## STARGIFT_INVALID xatosi nimani anglatadi?

[Telegram Gifts hujjatiga](https://core.telegram.org/api/gifts) ko‘ra, sovg‘a sotib olish payments.getPaymentForm metodiga inputInvoiceStarGift berish bilan boshlanadi. Oddiyroq aytganda, ilova avval serverdan shu sovg‘a uchun to‘lov formasini so‘raydi.

STARGIFT_INVALID aynan [payments.getPaymentForm](https://core.telegram.org/method/payments.getPaymentForm) metodining xatolari ro‘yxatida turadi. Uning tavsifi juda qisqa: «The passed gift is invalid», ya’ni «berilgan sovg‘a yaroqsiz». Bu xato qaysi aniq holatlarda chiqishi hujjatda sanab o‘tilmagan.

Shu sahifada yana bitta alohida xato bor: «The specified gift was not found», ya’ni «ko‘rsatilgan sovg‘a topilmadi». Demak, server «topilmadi» va «yaroqsiz» holatlarini ajratadi. Lekin qaysi vaziyatda qaysi biri qaytishi hujjatda tushuntirilmagan.

STARGIFT_INVALID — API darajasidagi xato nomi. Rasmiy ilova uni foydalanuvchiga qanday matn bilan ko‘rsatishi hujjatda yozilmagan. Shuning uchun ekranda boshqa xabar ko‘rsangiz ham, sabab shu xato bo‘lishi yoki bo‘lmasligi mumkin.

## Qaysi sovg‘ani rasman sotib olib bo‘lmaydi?

Hujjatda «yashirin sovg‘a» degan holat topilmadi. Ammo [starGift obyekti](https://core.telegram.org/constructor/starGift) va sovg‘alar qo‘llanmasida xaridni cheklaydigan bir nechta holat aniq yozilgan:

- **Sotuvi tugagan sovg‘a.** sold_out belgisi sovg‘a sotilib tugaganini va endi sotib olinmasligini bildiradi. Qo‘llanmada ham foydalanuvchi faqat yuborish mumkin bo‘lgan, sold_out bo‘lmagan sovg‘ani sotib olishi aytilgan.
- **Cheklangan miqdordagi sovg‘a.** limited belgisi sovg‘a soni cheklanganini bildiradi. Bunday sovg‘ada yana nechta nusxa sotib olish mumkinligi ham ko‘rsatiladi.
- **Bir kishiga cheklangan sovg‘a.** Agar limited_per_user belgisi qo‘yilgan va per_user_remains qiymati nolga teng yoki undan kichik bo‘lsa, joriy foydalanuvchi bu sovg‘ani sotib ololmaydi. Boshqalar olishi mumkin, lekin siz o‘z ulushingizni ishlatib bo‘lgansiz.
- **Sanagacha qulflangan sovg‘a.** Ba’zi sovg‘alarni ko‘rsatilgan sanagacha yuborib bo‘lmasligi mumkin.
- **Faqat Premium uchun sovg‘a.** Ayrim sovg‘alarni faqat Premium obunasi bor foydalanuvchilar sotib oladi. Premium nima ekanini [bu maqolada](/blog/telegram-premium-nima) o‘qing.

> Bu holatlarning hech biri «yashirin sovg‘a» deb atalmagan. Kanaldagi gap rost chiqsa ham, u hujjatdagi qaysi qoidaga mos kelishi noma’lum.

## Sovg‘a nega yuborilmayapti: o‘zim qanday tekshiraman?

Sababni quyidagi tartibda aniqlang:

1. Telegram’ni rasmiy do‘kondan eng so‘nggi versiyaga yangilang.
2. Sovg‘ani rasmiy yo‘l bilan yuboring. [Telegram blogiga](https://telegram.org/blog/gifts-verification-platform) ko‘ra, oluvchining profilini ochib, ⋮ / ⋯ > Send a Gift bandini bosasiz.
3. Kerakli sovg‘a ro‘yxatda bormi, qarang. Ilova mavjud sovg‘alar ro‘yxatini serverdan [payments.getStarGifts](https://core.telegram.org/method/payments.getStarGifts) metodi orqali oladi. Sovg‘a ro‘yxatda bo‘lmasa, uni ilovadan tanlab bo‘lmaydi.
4. Sovg‘a sahifasida ilova ko‘rsatadigan ma’lumotni o‘qing: sotuv tugagani, qolgan nusxalar yoki sana cheklovi haqida yozuv bo‘lishi mumkin.
5. Sovg‘a Premium talab qilsa, obunangiz faolligini tekshiring.
6. Oluvchi sovg‘a qabul qilishni cheklamaganini aniqlang. Bu sozlama haqida: [sovg‘a qabul qilishni o‘chirish va yoqish](/blog/telegram-sovga-qabul-qilishni-ochirish-sozlama).
7. Norasmiy klient yoki bot ishlatayotgan bo‘lsangiz, rasmiy ilovada qayta urinib ko‘ring.

Urinishdan keyin Stars balansingiz va tranzaksiyalar tarixini ko‘zdan kechiring. Xato chiqqan bo‘lsa-yu, balans kamaygan bo‘lsa, ekran rasmini saqlab, Telegram’ning rasmiy yordamiga murojaat qiling.

Sovg‘alar qanday ishlashi va ularning narxi Stars’da qanday belgilanishi haqida umumiy ma’lumot [Telegram sovg‘alari haqidagi maqolada](/blog/telegram-gifts-sovgalar) bor.

## Menda bor eski sovg‘a nima bo‘ladi?

> Kanal xabari sovg‘aning yangi nusxasini sotib olib yuborish haqida. Qo‘lingizdagi sovg‘alar o‘chirilishi haqida rasmiy ma’lumot yo‘q.

Olingan sovg‘a bilan nima qilish mumkinligi haqida rasman bitta narsa aniq. Telegram blogida yozilishicha, sovg‘ani olgan kishi undan voz kechib, uning Stars’ining bir qismini boshqa joyda sarflash uchun olishi mumkin. Aynan qancha qismi qaytishini ilova ekranida ko‘ring.

Voz kechishdan oldin ilova chiqaradigan ogohlantirishni diqqat bilan o‘qing. Bu qadamni bekor qilish mumkinmi, rasmiy manbalarda yozilmagan. Shuning uchun faqat xato tufayli shoshib qaror qilmang.

Kolleksion (NFT) sovg‘alar alohida mavzu, bu maqoladagi da’vo ular haqida emas. Farqini [NFT sovg‘alar haqidagi maqolada](/blog/telegram-nft-sovgalar) o‘qing.

## Dasturchi yoki bot egasi bo‘lsangiz, nimaga e’tibor berish kerak?

Agar sovg‘ani o‘z klientingiz, skriptingiz yoki botingiz orqali yuborayotgan bo‘lsangiz, xatoni chetlab o‘tishga urinmang. Avval xarid shartlarini hujjat bo‘yicha tekshiring:

- Sovg‘a identifikatorini eski ro‘yxatdan emas, payments.getStarGifts’dan qayta olingan joriy ro‘yxatdan oling.
- To‘lov formasini so‘rashdan oldin sold_out belgisini tekshiring: bunday sovg‘a sotib olinmaydi.
- limited_per_user belgisi bo‘lsa, per_user_remains qiymatiga qarang.
- Premium talabi va sana cheklovini ham hisobga oling.
- «Topilmadi» va STARGIFT_INVALID xatolarini alohida ishlang va foydalanuvchiga tushunarli xabar ko‘rsating.

Hujjatda yashirin sovg‘a uchun alohida belgi topilmagani sababli, bu holatni oldindan aniqlashning rasmiy usuli ham yo‘q.

## «Yashirin sovg‘ani yuborib beraman» degan takliflar xavflimi?

Ha, ehtiyot bo‘lish kerak. Kanallardagi shov-shuv fonida «xatoni chetlab o‘tamiz» yoki «sotuvdan olingan sovg‘ani yuborib beramiz» degan takliflar chiqishi mumkin. Rasmiy hujjatda bunday usul yo‘q.

- Login kodi, ikki bosqichli parol yoki faol seansni hech kimga bermang.
- Oldindan Stars yoki pul so‘raydigan «sovg‘a vositachilari»ga ishonmang.
- Modifikatsiya qilingan norasmiy ilovalardan foydalanmang. Bunday ilovalar akkaunt uchun qanday xavf tug‘dirishi haqida [bu maqolada](/blog/telegram-premium-akkaunt-bloklanadimi) yozilgan.
- Sovg‘a yuborishning rasmiy yo‘li ilovadagi Send a Gift bandi.

## O‘zgarish rasman e’lon qilinsa, qayerdan bilaman?

Sovg‘alar bo‘yicha asosiy rasmiy manbalar ikkita: [Telegram blogi](https://telegram.org/blog) va [Telegram Gifts API hujjati](https://core.telegram.org/api/gifts). Telegram yashirin sovg‘alar haqida qaror qabul qilsa yoki starGift obyektiga yangi belgi qo‘shsa, aynan shu sahifalarni kuzatish mantiqiy.

Kanal postlarini fakt emas, tekshiriladigan mavzu deb qabul qiling. Sovg‘alar haqidagi oldingi norasmiy da’volar qanday tekshirilgani [noyabr yangilanishi tahlilida](/blog/telegram-2026-noyabr-yangilanishi-sovgalar) ko‘rsatilgan.

## Ko‘p so‘raladigan savollar

### STARGIFT_INVALID xatosi akkauntim bloklanganini bildiradimi?

Yo‘q, hujjatda bu xato faqat so‘ralgan sovg‘a yaroqsizligi bilan bog‘langan. Uning tavsifida akkaunt cheklovi haqida hech narsa yozilmagan.

### Sotuvdan olingan sovg‘ani do‘stimga yubora olamanmi?

Agar sovg‘a sold_out deb belgilangan bo‘lsa, hujjatga ko‘ra uning yangi nusxasini sotib olib bo‘lmaydi. Sotuvdan olingan sovg‘a aynan shu belgini olishi esa rasman tasdiqlanmagan. Qo‘lingizdagi oddiy sovg‘ani boshqa odamga o‘tkazish imkoni ham bu maqoladagi rasmiy manbalarda yozilmagan.

### Sovg‘a ro‘yxatda ko‘rinmayapti — demak u o‘chirilganmi?

Ro‘yxat serverdan keladi. Sovg‘a unda bo‘lmasa, hozir uni ilovadan tanlab sotib ololmaysiz. Lekin bu sizda bor nusxalar o‘chirilganini anglatmaydi, bunday rasmiy ma’lumot yo‘q.

### Yuborilmagan sovg‘a uchun Stars qaytadimi?

Hujjatga ko‘ra STARGIFT_INVALID to‘lov formasi so‘ralayotgan bosqichda qaytadi. Bunday holatda Stars yechiladimi yoki qaytadimi, rasmiy manbalarda yozilmagan. Shuning uchun balans va tranzaksiyalar tarixini ilovada tekshiring.

### Premium sovg‘a yuborish uchun Premium kerakmi?

Faqat ayrim sovg‘alar uchun kerak: starGift hujjatida ba’zi sovg‘alarni faqat Premium obunachilar sotib olishi yozilgan. Premium’ni @premiumtg_uzbot orqali username bilan, so‘mda olish mumkin. Joriy narxni botda tekshiring.

### Telegram yashirin sovg‘alarni qachon qaytaradi?

Bu haqda rasmiy ma’lumot yo‘q, chunki o‘chirilganining o‘zi ham rasman e’lon qilinmagan. Yangiliklarni Telegram blogi va core.telegram.org’dagi sovg‘alar hujjatidan kuzatib boring.

### «Sovg‘a topilmadi» va «sovg‘a yaroqsiz» xatolarining farqi nima?

payments.getPaymentForm hujjatida bular ikki alohida xato. Biri ko‘rsatilgan sovg‘a umuman topilmaganini, ikkinchisi berilgan sovg‘a yaroqsizligini bildiradi. Qaysi vaziyatda qaysi biri qaytishi hujjatda batafsil yozilmagan.`,
    ru: `## Telegram действительно отключил отправку скрытых подарков?

Официального подтверждения нет. Ни в блоге Telegram, ни в документации API нет объявления или записи в списке изменений (changelog) о том, что отправку скрытых подарков отключили. Об этом писали только неофициальные Telegram-каналы.

Каналы утверждают следующее. Telegram сначала продавал безлимитные подарки, а потом снял их с продажи. Если попытаться отправить такой подарок, сервер якобы возвращает ошибку STARGIFT_INVALID. Это наблюдения пользователей, а не заявление Telegram.

Официально Telegram не объяснял и причину изменения, поэтому гадать о ней мы не будем. Ниже — только то, что прямо написано в официальной документации: что означает ошибка, какие подарки купить нельзя и как проверить это самостоятельно.

## Слухи и официальные источники: что подтверждено, а что нет

| Утверждение | Что в официальных источниках | Статус |
|---|---|---|
| Отправку скрытых подарков отключили | Объявления или changelog не найдено | Не подтверждено |
| Ошибка STARGIFT_INVALID существует | Есть в документации payments.getPaymentForm: «переданный подарок недействителен» | Наличие ошибки подтверждено |
| Ошибка возникает именно на скрытых подарках | В документации такой связи нет | Не подтверждено |
| Есть признак, что подарок «скрытый» | В объекте starGift не найден | Не подтверждено |
| Распроданный подарок купить нельзя | В starGift есть флаг sold_out, купить можно только подарок без sold_out | Подтверждено |

Получается, что ошибка с таким названием действительно есть. А вот её связь со «скрытыми подарками» пока держится только на наблюдениях каналов.

## Что означает ошибка STARGIFT_INVALID?

По [документации Telegram Gifts](https://core.telegram.org/api/gifts), покупка подарка начинается с вызова метода payments.getPaymentForm, которому передаётся inputInvoiceStarGift. Проще говоря, приложение сначала запрашивает у сервера форму оплаты для этого подарка.

STARGIFT_INVALID есть как раз в списке ошибок метода [payments.getPaymentForm](https://core.telegram.org/method/payments.getPaymentForm). Описание у неё короткое: «The passed gift is invalid», то есть «переданный подарок недействителен». В каких именно случаях она возникает, в документации не перечислено.

На той же странице есть и отдельная ошибка: «The specified gift was not found» — «указанный подарок не найден». Значит, сервер различает случаи «не найден» и «недействителен». Но когда возвращается какая из них, документация не объясняет.

STARGIFT_INVALID — название ошибки на уровне API. Каким текстом официальное приложение показывает её пользователю, в документации не сказано. Поэтому, даже если на экране другое сообщение, причина может быть как в этой ошибке, так и в чём-то ещё.

## Какие подарки официально нельзя купить?

Состояния «скрытый подарок» в документации нет. Но в описании [объекта starGift](https://core.telegram.org/constructor/starGift) и в руководстве по подаркам прямо названы случаи, когда покупка ограничена:

- **Распроданный подарок.** Флаг sold_out означает, что подарок распродан и купить его больше нельзя. В руководстве тоже сказано: купить можно только подарок, который доступен для отправки и не помечен как sold_out.
- **Подарок ограниченным тиражом.** Флаг limited означает, что количество подарков ограничено. Для такого подарка указывается, сколько экземпляров ещё можно купить.
- **Подарок с лимитом на одного пользователя.** Если стоит флаг limited_per_user, а значение per_user_remains меньше или равно нулю, текущий пользователь купить этот подарок не может. Другие могут, а вы свою квоту уже исчерпали.
- **Подарок, заблокированный до даты.** Некоторые подарки, возможно, нельзя отправить до указанной даты.
- **Подарок только для Premium.** Некоторые подарки могут купить только пользователи с подпиской Premium. Что такое Premium, читайте [в этой статье](/blog/telegram-premium-nima).

> Ни один из этих случаев не называется «скрытым подарком». Даже если слухи из каналов подтвердятся, неизвестно, какому правилу документации они соответствуют.

## Почему подарок не отправляется: как проверить самому

Ищите причину по шагам:

1. Обновите Telegram до последней версии из официального магазина приложений.
2. Отправьте подарок официальным способом. Как пишет [блог Telegram](https://telegram.org/blog/gifts-verification-platform), нужно открыть профиль получателя и нажать ⋮ / ⋯ > Send a Gift.
3. Посмотрите, есть ли нужный подарок в списке. Приложение получает список доступных подарков с сервера методом [payments.getStarGifts](https://core.telegram.org/method/payments.getStarGifts). Если подарка в нём нет, выбрать его в приложении не получится.
4. Прочитайте, что приложение показывает на странице подарка: там может быть отметка о завершении продаж, оставшемся количестве или ограничении по дате.
5. Если подарок требует Premium, проверьте, активна ли ваша подписка.
6. Убедитесь, что получатель не ограничил приём подарков. Об этой настройке: [как отключить и снова включить приём подарков](/blog/telegram-sovga-qabul-qilishni-ochirish-sozlama).
7. Если вы пользуетесь неофициальным клиентом или ботом, повторите попытку в официальном приложении.

После попытки проверьте баланс Stars и историю транзакций. Если появилась ошибка, а баланс при этом уменьшился, сохраните скриншот и обратитесь в официальную поддержку Telegram.

Как вообще устроены подарки и как их цена определяется в Stars, рассказано [в статье о подарках Telegram](/blog/telegram-gifts-sovgalar).

## Что будет с подарками, которые у меня уже есть?

> Сообщение в каналах касается покупки и отправки новых экземпляров подарка. Официальных сведений о том, что уже полученные подарки удалят, нет.

О том, что можно сделать с полученным подарком, официально известно одно. В блоге Telegram сказано: получатель может отказаться от подарка и получить часть его Stars, чтобы потратить их на что-то другое. Сколько именно вернётся, смотрите на экране приложения.

Перед отказом внимательно прочитайте предупреждение, которое покажет приложение. Можно ли отменить этот шаг, в официальных источниках не сказано. Поэтому не принимайте решение второпях только из-за ошибки.

Коллекционные (NFT) подарки — отдельная тема, слухи из этой статьи их не касаются. В чём разница, читайте [в статье об NFT-подарках](/blog/telegram-nft-sovgalar).

## Если вы разработчик или владелец бота: на что обратить внимание

Если вы отправляете подарки через свой клиент, скрипт или бота, не пытайтесь обойти ошибку. Сначала проверьте условия покупки по документации:

- Берите идентификатор подарка не из старого списка, а из актуального, заново полученного через payments.getStarGifts.
- Перед запросом формы оплаты проверяйте флаг sold_out: такой подарок купить нельзя.
- Если стоит флаг limited_per_user, смотрите на значение per_user_remains.
- Учитывайте требование Premium и ограничение по дате.
- Обрабатывайте ошибки «не найден» и STARGIFT_INVALID по отдельности и показывайте пользователю понятное сообщение.

Отдельного признака скрытого подарка в документации нет, поэтому и официального способа заранее распознать такой случай тоже нет.

## Опасны ли предложения «отправлю скрытый подарок за вас»?

Да, тут нужна осторожность. На волне обсуждений в каналах могут появиться предложения вроде «обойдём ошибку» или «отправим снятый с продажи подарок». В официальной документации такого способа нет.

- Никому не сообщайте код входа, пароль двухэтапной проверки и не давайте доступ к активному сеансу.
- Не доверяйте «посредникам по подаркам», которые просят Stars или деньги вперёд.
- Не пользуйтесь модифицированными неофициальными приложениями. Чем они опасны для аккаунта, написано [в этой статье](/blog/telegram-premium-akkaunt-bloklanadimi).
- Официальный способ отправить подарок — пункт Send a Gift в приложении.

## Где узнать, если изменение объявят официально?

Главных официальных источников по подаркам два: [блог Telegram](https://telegram.org/blog) и [документация Telegram Gifts API](https://core.telegram.org/api/gifts). Если Telegram примет решение о скрытых подарках или добавит в объект starGift новый признак, логично следить именно за этими страницами.

Воспринимайте посты в каналах как повод для проверки, а не как факт. Как проверялись прежние неофициальные заявления о подарках, показано [в разборе ноябрьского обновления](/blog/telegram-2026-noyabr-yangilanishi-sovgalar).

## Часто задаваемые вопросы

### Ошибка STARGIFT_INVALID значит, что мой аккаунт заблокирован?

Нет, в документации эта ошибка связана только с тем, что запрошенный подарок недействителен. Об ограничениях аккаунта в её описании ничего не сказано.

### Можно ли отправить другу подарок, снятый с продажи?

Если подарок помечен как sold_out, то, по документации, купить новый экземпляр нельзя. А вот получает ли снятый с продажи подарок именно этот флаг, официально не подтверждено. Возможность передать другому человеку обычный подарок, который у вас уже есть, в официальных источниках из этой статьи тоже не описана.

### Подарка нет в списке — значит, его удалили?

Список приходит с сервера. Если подарка в нём нет, сейчас вы не сможете выбрать и купить его в приложении. Но это не значит, что ваши экземпляры удалены: таких официальных сведений нет.

### Вернутся ли Stars за неотправленный подарок?

По документации, STARGIFT_INVALID возвращается на этапе запроса формы оплаты. Списываются ли в такой ситуации Stars и возвращаются ли они, в официальных источниках не сказано. Поэтому проверьте баланс и историю транзакций в приложении.

### Нужен ли Premium, чтобы отправлять подарки?

Только для некоторых подарков: в документации starGift сказано, что отдельные подарки могут купить только подписчики Premium. Premium можно оформить через @premiumtg_uzbot по username с оплатой в сумах. Актуальную цену проверяйте в боте.

### Когда Telegram вернёт скрытые подарки?

Официальной информации нет: само отключение тоже официально не объявлялось. Следите за новостями в блоге Telegram и в документации по подаркам на core.telegram.org.

### Чем ошибка «подарок не найден» отличается от «подарок недействителен»?

В документации payments.getPaymentForm это две разные ошибки. Первая означает, что указанный подарок вообще не найден, вторая — что переданный подарок недействителен. В какой ситуации возвращается какая из них, подробно не описано.`,
  },
};
