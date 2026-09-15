# Premiumtg: SEO/AEO va O‘zbekiston kalit so‘zlari

Tayyorlangan: 2026-09-14. Hudud: O‘zbekiston. Asosiy indekslanadigan til: o‘zbek lotin.

## Kalit so‘zlar haqida

Quyidagilar xarid niyati va mavzu mosligiga qarab tanlangan **nomzod so‘rovlar**. Search Console va Keyword Planner statistikasi berilmagan, shuning uchun ularning oylik hajmi yoki «eng ko‘p qidiriladigan» o‘rni tasdiqlanmagan. P1/P2 — tahririyat ish ustuvorligi; qidiruv hajmi reytingi emas. Tayyor jadval: [kalit-sozlar.csv](kalit-sozlar.csv).

| Klaster              | Boshlang‘ich iboralar                                                                                          | Asosiy sahifa                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Xarid — P1           | telegram premium sotib olish; tg premium olish; telegram premium uzbekistonda                                  | `/`                                                  |
| Narx — P1            | telegram premium narxi; telegram premium qancha turadi; telegram premium narxi 2026                            | `/blog/telegram-premium-narxi-2026`                  |
| Mahalliy to‘lov — P1 | telegram premium click orqali; payme orqali premium olish; telegram premium paynet; telegram premium uzum bank | Har usulning mavjud alohida maqolasi                 |
| Umumiy to‘lov — P1   | uzbekistonda telegram premium qanday olish; telegram premium somda tolash                                      | `/blog/telegram-premium-ozbekistonda-tolov-usullari` |
| Karta — P2           | telegram premium uzcard; telegram premium humo; visa kartasiz telegram premium                                 | `/blog/telegram-premium-uzcard-humo`                 |
| Muddat — P2          | telegram premium 3 oy; telegram premium 6 oy narxi; telegram premium 1 yil narxi                               | `/blog/telegram-premium-3-6-12-oy-qaysi-paket`       |
| Ishonch — P2         | akkauntga kirmasdan premium; username orqali premium olish                                                     | Mavjud username va xavfsizlik maqolalari             |
| Muammo — P2          | telegram premium pul yechildi kelmadi; premium tolov xatosi                                                    | `/blog/telegram-premium-tolov-xatolari`              |
| Sovg‘a — P2          | telegram premium sovga qilish; dostga premium olish                                                            | `/blog/telegram-premium-sovga-qilish`                |
| Yangilik — P2        | telegram yangiliklari 2026; telegram rich text editor; telegram ai editor                                      | Yangi yangilik maqolalari                            |

«paymee», «pannet» — ehtimoliy xato yozilishlar. Rasmiy sarlavhada Payme va Paynet yoziladi; xato shakllarga alohida takroriy sahifa yaratilmadi. «O‘zbekiston», «O'zbekiston», «ozbekiston», «uzbekistan» variantlari qidiruv ma’lumotlarida alohida kuzatilishi mumkin. Ruscha nomzodlar CSV’da berilgan, lekin saytdagi til almashtirgich alohida indekslanadigan ruscha URL yaratmaydi.

## Bajarilgan ishlar

- Next.js 16.3.5, React 19.3.0, Tailwind CSS 4.3.3 va PostCSS 8.5.28.
- Landing, blog indeksi va maqola ko‘rinishi qayta qurildi. Mobil menyu, tarif tanlash, FAQ, qidiruv, kategoriya filtrlari, til va tema saqlanadi.
- 51 mavjud maqola URL’i saqlandi, 6 yangi maqola qo‘shildi. Click, Payme, Paynet, Uzcard/Humo, username, yetkazish muddati va ishonchlilik maqolalari tuzatildi.
- Sahifalarda serverdan keladigan ko‘rinadigan matn, yagona H1 va canonical bor. Faqat qidiruv botlari uchun yashirilgan ruscha va kalit-so‘z bloklari olib tashlandi.
- Product, Article, Blog, Organization, WebSite va Breadcrumb ma’lumotlari sahifadagi mazmun bilan bog‘landi. Asossiz AggregateRating olib tashlandi. FAQ schema faqat ko‘rinadigan bosh sahifa savollaridan olinadi.
- Sitemap’dan `/#narxlar` kabi fragment URL’lar chiqarildi. `lastModified` haqiqiy kontent tahrir sanasiga bog‘landi.
- Har maqola uchun sarlavhali Open Graph rasmi yaratildi. RSS, robots va llms indekslari yangilandi.
- Client komponentlari butun maqolalar kutubxonasini import qilmaydi. Blog faqat qisqa kartalarni, maqola sahifasi faqat tanlangan maqolani oladi.
- Tashqi font stylesheet olib tashlandi. Illustratsiyalar SVG/CSS orqali chiziladi; asosiy ekranda og‘ir bitmap yuklash yo‘q.
- Nashr, yangilik hodisasi va manba tekshiruvi sanalari alohida ko‘rsatiladi. Tahririyat sahifasi va tekshirilgan materiallarda manbalar beriladi.

## Nashrdan keyingi ustuvor ishlar

1. **Bot ma’lumotlarini tasdiqlash.** Narx, Click/Payme/Paynet/Uzum Bank mavjudligi, yetkazish va qaytarish shartlarini real buyurtma ekraniga solishtiring. Sayt botni boshqarmaydi; ushbu ish davomida botda to‘lov qilinmadi. Zarur bo‘lsa `lib/site.ts`, `lib/home-content.ts` va to‘lov maqolalarini tahrirlang.
2. **Search Console.** Domen egaligini DNS orqali yoki `GOOGLE_SITE_VERIFICATION` muhit o‘zgaruvchisiga berilgan meta kodni joylab tasdiqlang. `/sitemap.xml` yuboring. Bosh sahifa va yangi qo‘llanmalarni URL Inspection orqali tekshiring. Bu repozitoriy ishidan tashqaridagi hisob amali; hali bajarilmagan.
3. **Qidiruv statistikasi.** Keyword Planner’da hudud Uzbekistan, tillar Uzbek va Russian; 12 oylik diapazon. CSV nomzodlarini kiriting. Search Console’da so‘rov/sahifa kesimida impressions, clicks, CTR va o‘rtacha pozitsiyani kuzating.
4. **7–14 kun.** Indekslash, 404, canonical va server loglaridagi crawl holatini tekshiring. Ko‘p ko‘rsatilgan, kam bosilgan sahifalarning title/description’ini mazmunga mos ravishda yaxshilang.
5. **30 kun.** Faqat haqiqiy so‘rovlardagi bo‘shliqlarga maqola yozing. Mavjud Click, Payme va narx sahifalariga bir-birini takrorlaydigan yangi URL ochmang.
6. **Doimiy.** Telegram rasmiy blogi asosida yangiliklarni yangilang. Eski 51 maqolaning qolgan qismidagi narx, tezlik, imkoniyat va xizmat va’dalarini bosqichma-bosqich tekshiring. Ushbu ish ularning barchasi to‘liq qayta fakt-tekshiruvdan o‘tganini anglatmaydi.
7. **Keyingi alohida bosqich.** Ruscha va inglizcha organik trafik kerak bo‘lsa `/ru/...` va `/en/...`, to‘liq tarjima, har til uchun canonical va o‘zaro `hreflang` kerak. Hozirgi client til almashtirish bunga teng emas; mavjud bo‘lmagan til URL’lari schema yoki hreflang’da da’vo qilinmaydi.

## AEO haqida aniq chegaralar

Google AI Overviews va AI Mode uchun maxsus «AI schema» yoki `llms.txt` majburiy emas. Asos — ochiq va indekslanadigan sahifa, foydali ko‘rinadigan javoblar, ichki havolalar va mazmunga mos structured data. `llms.txt` qo‘shimcha matn indeksi sifatida saqlandi; u reyting yoki AI sitatasini kafolatlamaydi. [Google rasmiy qo‘llanmasi](https://developers.google.com/search/docs/appearance/ai-features).

FAQ schema boy qidiruv natijasi chiqishiga va Google top o‘rniga kafolat sifatida ishlatilmaydi. SEO natijasi nashr, indekslash, raqobat, havolalar va foydalanuvchi ehtiyojiga bog‘liq. Maqsadli pozitsiya yoki chiqish muddati hali o‘lchanmagan.
