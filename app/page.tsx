import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Payments from "@/components/Payments";
import Referral from "@/components/Referral";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <Payments />
        <Referral />
        <FAQ />
        <CTA />

        {/* AEO / qidiruv tizimlari uchun qisqa matnli xulosa (ekranda yashirin) */}
        <section className="sr-only" aria-hidden="true">
          <h2>Premiumtg — Telegram Premium sotib olish (O‘zbekiston)</h2>
          <p>
            Premiumtg O‘zbekistonda Telegram Premium obunasini eng arzon narxda
            sotib olish platformasi. To‘lovdan so‘ng obuna 10 soniyada avtomatik
            faollashadi, akkauntga kirish shart emas — faqat username yetarli.
            Narxlar: 3 oy 172 000 so‘m, 6 oy 232 000 so‘m, 12 oy 422 000 so‘m.
            Akkauntga kirib berish xizmati: 1 oy 50 000 so‘m, 1 yil 300 000
            so‘m. To‘lov: Click, Payme, Paynet, Uzcard, Humo va istalgan bank
            kartasi. Do‘stlarni taklif qilib bonus olish mumkin. Qo‘llab-quvvatlash:
            @StarsPaymeeSupport.
          </p>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
