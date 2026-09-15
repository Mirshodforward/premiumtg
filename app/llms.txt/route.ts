import { BLOG_POSTS } from "@/lib/blog";
import { SITE, SITE_UPDATED, PREMIUM_PLANS, formatSom } from "@/lib/site";
export const dynamic = "force-static";
export function GET() {
  const text = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "## Xizmat",
    `- Sayt: ${SITE.domain}`,
    `- Buyurtma: ${SITE.botUrl}`,
    `- Yordam: ${SITE.supportUrl}`,
    "- Premiumtg mustaqil xizmat; Telegram bilan rasmiy hamkorlik da’vo qilinmaydi.",
    "- Narx va mavjud to‘lov usullarini xariddan oldin botda tekshiring. Jonli bot holati bu fayldan tekshirilmaydi.",
    "- Username orqali sovg‘a obunasi uchun Telegram login kodi va paroli talab qilinmaydi.",
    "",
    "## Saytdagi tariflar",
    ...PREMIUM_PLANS.map(
      (p) =>
        `- ${p.months} oy: ${formatSom(p.price)}. To‘lov butun muddat uchun.`,
    ),
    "",
    "## Maqolalar",
    ...BLOG_POSTS.map(
      (p) =>
        `- [${p.title.uz}](${SITE.domain}/blog/${p.slug}): ${p.excerpt.uz}`,
    ),
    "",
    "## Manbalar",
    `- [Tahririyat siyosati](${SITE.domain}/about)`,
    `- [To‘liq matnlar](${SITE.domain}/llms-full.txt)`,
    `- [RSS](${SITE.domain}/blog/rss.xml)`,
    "",
    `Sayt tahriri: ${SITE_UPDATED}`,
  ].join("\n");
  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
