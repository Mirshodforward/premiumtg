# Yakuniy tekshiruv — 2026-09-14

- Production build: `npm run build -- --webpack` — muvaffaqiyatli. Ushbu Codex sandboxida Turbopack yordamchi porti `EPERM` bilan to‘sildi; shuning uchun Next.js qo‘llaydigan Webpack build’i bilan tekshirildi. Asosiy build buyrug‘i Turbopack uchun saqlangan.
- TypeScript: `npm run typecheck` va production build’dagi typecheck — muvaffaqiyatli.
- Format: `npm run format:check` — muvaffaqiyatli.
- Kutubxonalar: `npm audit` — 0 ta aniqlangan zaiflik.
- Brauzer testlari: `npm test` — 10/10 o‘tdi, Google Chrome.

Testlar:

1. Markdown’da tugallanmagan jadval qatori qayta ishlanadi, xavfli URL sxemasi chiqarilmaydi.
2. 57 maqolaning slug, ichki havola va manba URL formatlari tekshiriladi.
3. Sitemap’dagi 60 sahifa 200 javob qaytaradi, bitta H1, mos canonical va sintaktik to‘g‘ri JSON-LD bor; 404, RSS, robots, llms va OG rasmlari tekshiriladi.
4. Tarif tanlash, schema narxlari, FAQ, til va tema saqlanishi ishlaydi; brauzerda hydration xatosi yo‘q.
5. Blog filtri, qidiruv, bo‘sh natija, tozalash, maqola bo‘limi va inglizcha tarjima yo‘qligi haqidagi yozuv ishlaydi.
   6–9. 320, 390, 768 va 1440 px kenglikda bosh sahifa, blog va uzun to‘lov maqolasi sahifa bo‘ylab gorizontal chiqib ketmaydi; mobil menyu Escape bilan yopiladi.
6. Bosh sahifa, blog va Uzum Bank maqolasi yorug‘/qorong‘i rejimda axe WCAG 2 A/AA va 2.1 AA avtomatik qoidalaridan o‘tdi. Bu qo‘lda to‘liq accessibility auditiga teng emas.

Vizual tekshiruv: desktop, mobil va qorong‘i rejim rasmlari Chrome orqali ko‘rib chiqildi. Sanalar uchun server va brauzer ICU farqidan kelgan hydration xatosi deterministik formatter bilan tuzatildi.

Tekshirilmagan tashqi holatlar: botning jonli to‘lov menyusi, haqiqiy xarid/yetkazish, production domenida deploy, Search Console indekslash va real foydalanuvchi Core Web Vitals ko‘rsatkichlari. Google top pozitsiyasi yoki organik trafik o‘sishi o‘lchandi deb da’vo qilinmaydi.
