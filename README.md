# Premiumtg

O‘zbekistonda Telegram Premium uchun landing, yangiliklar va to‘lov qo‘llanmalari. Next.js 16.3.5 App Router, React 19.3, TypeScript, Tailwind CSS 4.3.3. 57 maqola; eski 51 maqolaning URL’lari saqlangan.

```bash
npm ci
npm run dev
npm run build
npm run start
npm run typecheck
npm test
```

Node.js 20.9+ kerak. Brauzer testlari production build’dan keyin ishlaydi, 3100-portda serverni avtomatik ochadi. `playwright.config.ts` o‘rnatilgan Google Chrome’dan foydalanadi; boshqa muhitda `npx playwright install chrome` qiling yoki `channel` sozlamasini o‘zgartiring.

## Deploy

Sayt to‘liq statik: `npm run build` natijasi — `out/` papkasi (`next.config.js` da `output: "export"`). Sayt o‘z serverimizda turadi, `out/` ni nginx to‘g‘ridan-to‘g‘ri diskdan beradi (2026-11-26 gacha Vercel’da edi). `main` ga push qilingach server 2 daqiqa ichida o‘zi quradi va yangi versiyani yoqadi; build yoki tekshiruv o‘tmasa saytda oldingi versiya qoladi va Telegram’ga xabar keladi.

`npm run start` — `out/` ni lokal ko‘rsatadi (`scripts/serve-out.mjs`): qoidalar saytdagi nginx bilan bir xil — toza manzillar, oxirgi slash va `.html` uchun 308, topilmagan sahifaga 404. Qo‘lda qayta chiqarish: `ssh root@<server> site-build premiumtg --force`. Server sozlamasi (nginx, HTTPS, build skriptlari) — avtoblogyoz loyihasida, `scripts/sites/`.

## Asosiy fayllar

- `components/Landing.tsx` — yangi landing va 3 tildagi interfeys.
- `app/globals.css` — ranglar, responsiv maket va maqola tipografiyasi.
- `lib/site.ts` — domen, narx va bot kontaktlari.
- `lib/home-content.ts` — ko‘rinadigan FAQ va unga mos JSON-LD.
- `lib/blog/posts/g-latest.ts` — 6 yangi maqola, manbalar va sanalar.
- `lib/blog/posts/h-reviewed.ts` — mavjud URL’lardagi tuzatilgan maqolalar.
- `docs/seo-aeo-reja.md` va `docs/kalit-sozlar.csv` — qidiruv iboralari va nashrdan keyingi reja.

## SEO va AEO

Sahifalar serverda tayyorlanadi; ko‘rinadigan maqola matni boshlang‘ich HTML’da bor. Canonical, sitemap, robots, RSS, maqola Open Graph rasmlari va mazmunga mos JSON-LD mavjud. To‘liq blog matnlari client bundle’ga qo‘shilmaydi. `llms.txt` qo‘shimcha indeks; Google reytingiga kafolat emas.

`GOOGLE_SITE_VERIFICATION` muhit o‘zgaruvchisi bo‘lsa, Search Console meta-verifikatsiyasi chiqariladi. Domen va Search Console hisobida amallar bu repozitoriy tomonidan bajarilmaydi.

## Kontent chegaralari

Narxlar saytdagi konfiguratsiya; bot jonli narxi va to‘lov menyusi bu koddan tekshirilmaydi. Saytda to‘lov olinmaydi, tugmalar mavjud Telegram botiga olib boradi. Tarifni saytda tanlash taqqoslash uchun; botda muddatni qayta tanlash kerak, maxsus deep-link protokoli tasdiqlanmagan.

Click, Payme, Paynet va Uzum Bank bo‘yicha qo‘llanmalar joriy buyurtmadagi mavjud usulni tekshirishga yo‘naltiradi. Yangi maqolalar o‘zbekcha va ruscha; ingliz tili tanlansa, tarjima mavjud bo‘lmaganda bu haqda yozuv bilan o‘zbekcha matn ko‘rsatiladi. Hozircha alohida til URL’lari yo‘q.

Eski maqolalarning hammasi qayta fakt-tekshiruvdan o‘tkazilmagan. Tekshirilgan materiallarda manbalar yoki yangilanish sanasi beriladi. [SEO reja](docs/seo-aeo-reja.md) qolgan ishlar va kalit so‘zlar bo‘yicha statistik cheklovlarni tushuntiradi.
