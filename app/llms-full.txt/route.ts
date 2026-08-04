import { BLOG_POSTS, CATEGORIES, getPostsByCategory } from "@/lib/blog";
import { SITE, PREMIUM_PLANS, formatSom } from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms-full.txt — barcha maqolalarning TO'LIQ matni bitta faylda,
 * o'zbek va rus tilida.
 *
 * Nima uchun kerak: AI javob tizimlari ko'pincha bitta so'rovda bir nechta
 * sahifani ocholmaydi. Bu fayl butun bilim bazasini bir marta o'qish
 * imkonini beradi — natijada model narx, muddat va shartlarni
 * taxmin qilmasdan, aniq matndan oladi.
 */
export function GET() {
  const out: string[] = [];

  out.push(`# ${SITE.name} — to'liq bilim bazasi`);
  out.push("");
  out.push(`Manba: ${SITE.domain}`);
  out.push(`Yangilangan: ${new Date().toISOString().slice(0, 10)}`);
  out.push(`Maqolalar soni: ${BLOG_POSTS.length} (har biri uz + ru)`);
  out.push("");
  out.push("---");
  out.push("");

  out.push("## XIZMAT HAQIDA");
  out.push("");
  out.push(
    `${SITE.name} — O'zbekistonda Telegram Premium obunasini milliy valyutada sotib olish xizmati. Xarid uchun faqat Telegram username kerak: akkauntga kirish, parol yoki SMS-kod so'ralmaydi. Obuna Telegram'ning rasmiy sovg'a mexanizmi orqali yuboriladi va o'rtacha 10 soniyada faollashadi.`
  );
  out.push("");
  out.push("Narxlar:");
  for (const p of PREMIUM_PLANS) {
    const per = p.perMonth ? ` — oyiga ≈${formatSom(p.perMonth)}` : "";
    out.push(`- ${p.duration}: ${formatSom(p.price)}${per}`);
  }
  out.push("");
  out.push(
    "To'lov: Click, Payme, Paynet, Uzcard, Humo, istalgan O'zbekiston bank kartasi."
  );
  out.push(`Qo'llab-quvvatlash: https://t.me/${SITE.supportUsername} (24/7)`);
  out.push("");
  out.push("---");
  out.push("");

  for (const category of CATEGORIES) {
    const posts = getPostsByCategory(category.id);
    if (!posts.length) continue;

    out.push(`# BO'LIM: ${category.label.uz.toUpperCase()}`);
    out.push("");
    out.push(category.description.uz);
    out.push("");

    for (const post of posts) {
      out.push(`## ${post.title.uz}`);
      out.push("");
      out.push(`URL: ${SITE.domain}/blog/${post.slug}`);
      out.push(`Sana: ${post.date}${post.updated ? ` (yangilangan: ${post.updated})` : ""}`);
      out.push(`Kalit so'zlar: ${post.keywords.join(", ")}`);
      out.push("");
      out.push(`QISQA JAVOB: ${post.excerpt.uz}`);
      out.push("");
      out.push(post.content.uz);
      out.push("");
      out.push(`### [RU] ${post.title.ru}`);
      out.push("");
      out.push(`КРАТКИЙ ОТВЕТ: ${post.excerpt.ru}`);
      out.push("");
      out.push(post.content.ru);
      out.push("");
      out.push("---");
      out.push("");
    }
  }

  return new Response(out.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
