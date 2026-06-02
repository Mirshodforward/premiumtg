# Premiumtg — Telegram Premium landing page

O‘zbekistonda Telegram Premium sotib olish uchun zamonaviy, SEO va AEO (ChatGPT/AI qidiruv) uchun optimallashtirilgan landing page. Next.js 15 (App Router) + TypeScript + Tailwind CSS.

## Asosiy imkoniyatlar

- ⚡ **10 soniyada avtomatik** yetkazish g‘oyasiga qurilgan dizayn
- 💳 Click, Payme, Paynet, Uzcard, Humo to‘lov usullari
- 🎁 Do‘st taklif qilish / bonus bo‘limi
- 🔎 **SEO**: metadata, Open Graph (dinamik rasm), Twitter card, `sitemap.xml`, `robots.txt`, manifest
- 🤖 **AEO**: JSON-LD strukturali ma’lumotlar (Organization, WebSite, Product, FAQPage) + AI botlarga ruxsat
- 📱 To‘liq responsiv, dark dizayn, animatsiyalar

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Sozlash

Barcha narxlar, aloqa va sayt ma’lumotlari bitta joyda — [`lib/site.ts`](lib/site.ts):

- `SITE.domain` — haqiqiy domeningizni yozing (SEO uchun muhim)
- `SITE.supportUsername` / `supportUrl` — qo‘llab-quvvatlash Telegram username
- `PREMIUM_PLANS` va `LOGIN_PLANS` — paketlar va narxlar

## Narxlar (joriy)

| Paket | Muddat | Narx |
| --- | --- | --- |
| Premium | 3 oy | 172 000 so‘m |
| Premium | 6 oy | 232 000 so‘m |
| Premium | 12 oy | 422 000 so‘m |
| Akkauntga kirib berish | 1 oy | 50 000 so‘m |
| Akkauntga kirib berish | 1 yil | 300 000 so‘m |

## Struktura

```
app/        layout (SEO + JSON-LD), page, sitemap, robots, manifest, og-image
components/ Header, Hero, Stats, Features, HowItWorks, Pricing, Payments,
            Referral, FAQ, CTA, Footer, FloatingButton, icons
lib/        site.ts (markaziy konfiguratsiya)
```
