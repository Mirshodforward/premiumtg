import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE, botCtaUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Premiumtg haqida — tahririyat va manbalar",
  description:
    "Premiumtg mustaqil xizmati, maqola manbalari, tekshiruv tartibi va aloqa ma’lumotlari.",
  alternates: { canonical: `${SITE.domain}/about` },
};
export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="container-x about-page" lang="uz">
        <span className="eyebrow">PREMIUMTG / TAHRIRIYAT</span>
        <h1>Xariddan oldin tushunarli ma’lumot.</h1>
        <div className="prose-dl">
          <p>
            Premiumtg — O‘zbekistonda Telegram Premium xaridi bo‘yicha ma’lumot
            beradigan va buyurtmani Telegram botiga yo‘naltiradigan mustaqil
            xizmat. Telegram bilan rasmiy hamkorlik da’vo qilinmaydi.
          </p>
          <h2>Maqolalarni qanday tayyorlaymiz?</h2>
          <p>
            Yangiliklarda Telegram’ning rasmiy blogiga, to‘lovga oid
            tushuntirishlarda tegishli xizmatning rasmiy yo‘riqnoma va
            tariflariga havola beramiz. Yangi sharhlarda voqea sanasi bilan
            maqolaning nashr sanasi ajratiladi. Amaliy misollar tahririyat
            tavsiyasi sifatida beriladi.
          </p>
          <p>
            Tekshirilgan maqolalarda manbalar va tekshiruv sanasi ko‘rinadi.
            Eski materiallarda manba yoki tekshiruv sanasi bo‘lmasa, ularni
            yangidan tekshirilgan deb hisoblamang. Maqolani tuzatganda
            yangilanish sanasini o‘zgartiramiz.
          </p>
          <h2>Narx va to‘lov haqida</h2>
          <p>
            Saytdagi tariflar ma’lumot uchun berilgan. Botning jonli narxlari va
            to‘lov menyusi ushbu sahifadan tekshirilmaydi. Xarid vaqtida yakuniy
            narx, mos to‘lov usuli, yetkazish va qaytarish shartlarini botda
            aniqlang. Provayderning rasmiy hujjati uning Premiumtg bilan
            integratsiyasi borligini anglatmaydi.
          </p>
          <h2>Aloqa va tuzatishlar</h2>
          <p>
            Xato yoki eskirgan ma’lumot topsangiz, maqola havolasi va tuzatish
            sababini{" "}
            <a href={SITE.supportUrl} target="_blank" rel="noopener noreferrer">
              @{SITE.supportUsername}
            </a>{" "}
            manziliga yuboring. Buyurtma uchun{" "}
            <a
              href={botCtaUrl("about")}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{SITE.botUsername}
            </a>{" "}
            botidan foydalaning.
          </p>
          <p>
            <Link href="/blog">Barcha maqolalarni ko‘rish</Link> ·{" "}
            <Link href="/blog/telegram-premium-ozbekistonda-tolov-usullari">
              O‘zbekistonda to‘lov qo‘llanmasi
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
