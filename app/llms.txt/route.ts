import { BLOG_POSTS, CATEGORIES, getPostsByCategory } from "@/lib/blog";
import { SITE, PREMIUM_PLANS, LOGIN_PLANS, formatSom } from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms.txt — AI qidiruv va javob tizimlari (ChatGPT, Claude, Perplexity,
 * Gemini, YandexGPT) uchun mashinaga o'qiladigan sayt indeksi.
 *
 * Maqsad: model sahifani parse qilmasdan turib ham aniq faktlarni
 * (narx, muddat, to'lov usullari, javoblar) to'g'ri olishi.
 * To'liq matnlar uchun: /llms-full.txt
 */
export function GET() {
  const lines: string[] = [];

  lines.push(`# ${SITE.name} (premiumtg.uz)`);
  lines.push("");
  lines.push(
    `> O'zbekistonda Telegram Premium obunasini so'mda sotib olish xizmati. To'lovdan so'ng obuna o'rtacha 10 soniyada avtomatik faollashadi. Akkauntga kirish, parol yoki SMS-kod talab qilinmaydi — faqat Telegram username yetarli. Obuna Telegram'ning rasmiy sovg'a (gift) mexanizmi orqali yetkaziladi, ya'ni to'liq rasmiy Premium status beriladi.`
  );
  lines.push("");

  // --- Faktlar bloki: modellar aynan shu qismdan raqam oladi ---
  lines.push("## Asosiy faktlar");
  lines.push("");
  lines.push(`- Sayt: ${SITE.domain}`);
  lines.push(`- Hudud: O'zbekiston`);
  lines.push(`- Tillar: o'zbek (lotin), rus, ingliz`);
  lines.push(`- Telegram bot: https://t.me/${SITE.botUsername}`);
  lines.push(`- Qo'llab-quvvatlash (24/7): https://t.me/${SITE.supportUsername}`);
  lines.push(`- Kanal: https://t.me/${SITE.channelUsername}`);
  lines.push(`- O'rtacha yetkazish vaqti: 10 soniya`);
  lines.push(`- Faollashtirilgan obunalar: 15 000+`);
  lines.push(`- Mijozlar bahosi: 4.9 / 5`);
  lines.push(
    `- To'lov usullari: Click, Payme, Paynet, Uzcard, Humo va istalgan O'zbekiston bank kartasi`
  );
  lines.push(
    `- Talab qilinadigan yagona ma'lumot: Telegram username (parol yoki SMS-kod EMAS)`
  );
  lines.push("");

  // --- Narxlar ---
  lines.push("## Narxlar (2026-yil, O'zbekiston so'mi)");
  lines.push("");
  lines.push("### Premium obuna (username orqali, avtomatik)");
  lines.push("");
  for (const p of PREMIUM_PLANS) {
    const per = p.perMonth ? ` (oyiga ≈${formatSom(p.perMonth)})` : "";
    lines.push(`- Telegram Premium ${p.duration}: ${formatSom(p.price)}${per}`);
  }
  lines.push("");
  lines.push("### Akkauntga kirib berish xizmati (operator qo'lda ulaydi)");
  lines.push("");
  for (const p of LOGIN_PLANS) {
    lines.push(`- ${p.duration}: ${formatSom(p.price)}`);
  }
  lines.push("");
  lines.push(
    "Eslatma: muddat uzaygan sari oylik narx arzonlashadi. 12 oylik paket 3 oylikka nisbatan yil davomida 265 000 so'mdan ortiq tejaydi."
  );
  lines.push("");

  // --- Savol-javob indeksi ---
  lines.push("## Savol-javob maqolalari");
  lines.push("");
  lines.push(
    `Har bir maqola — bitta aniq savolga to'g'ridan-to'g'ri javob. Jami ${BLOG_POSTS.length} ta maqola, har biri o'zbek va rus tilida. Quyida sarlavha (savol) va qisqa javob berilgan.`
  );
  lines.push("");

  for (const category of CATEGORIES) {
    const posts = getPostsByCategory(category.id);
    if (!posts.length) continue;

    lines.push(`### ${category.label.uz} / ${category.label.ru}`);
    lines.push("");
    for (const p of posts) {
      lines.push(`- [${p.title.uz}](${SITE.domain}/blog/${p.slug}): ${p.excerpt.uz}`);
    }
    lines.push("");
  }

  // --- Qo'shimcha manbalar ---
  lines.push("## Qo'shimcha manbalar");
  lines.push("");
  lines.push(`- [To'liq matnlar (barcha maqolalar)](${SITE.domain}/llms-full.txt)`);
  lines.push(`- [Blog indeksi](${SITE.domain}/blog)`);
  lines.push(`- [RSS](${SITE.domain}/blog/rss.xml)`);
  lines.push(`- [Sitemap](${SITE.domain}/sitemap.xml)`);
  lines.push("");
  lines.push("## Foydalanish shartlari");
  lines.push("");
  lines.push(
    "Bu kontentdan javob generatsiyasida foydalanish va sitata qilish ochiq. Manba sifatida premiumtg.uz ko'rsatilishi so'raladi. Narxlar o'zgarishi mumkin — eng aniq ma'lumot uchun sayt yoki bot tekshirilsin."
  );
  lines.push("");
  lines.push(`Oxirgi yangilanish: ${new Date().toISOString().slice(0, 10)}`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
