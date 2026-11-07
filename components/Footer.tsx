"use client";
import Link from "next/link";
import { useLang } from "./LanguageContext";
import { SITE, botCtaUrl } from "@/lib/site";
import { ArrowUpRightIcon } from "./icons";
export default function Footer() {
  const { lang, tr } = useLang();
  const words =
    lang === "ru"
      ? [
          "Больше возможностей. Каждый день.",
          "Полезное",
          "Связаться",
          "Редакция и источники",
        ]
      : lang === "en"
        ? [
            "More possibilities. Every day.",
            "Explore",
            "Get in touch",
            "Editorial policy & sources",
          ]
        : [
            "Har kuni ko‘proq imkoniyat.",
            "Foydali havolalar",
            "Bog‘lanish",
            "Tahririyat va manbalar",
          ];
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <span className="brand-mark">
                <img src="/brand/star-128.png" alt="" width={34} height={34} />
              </span>
              premium<span className="brand-light">tg</span>.
            </Link>
            <p className="footer-tagline">{words[0]}</p>
            <p className="muted small">{tr.footer.trademark}</p>
          </div>
          <div>
            <h2>{words[1]}</h2>
            <Link href="/#narxlar">{tr.nav.pricing}</Link>
            <Link href="/blog">{tr.nav.blog}</Link>
            <Link href="/blog/telegram-premium-ozbekistonda-tolov-usullari">
              Click, Payme, Paynet, Uzum Bank
            </Link>
            <Link href="/about">{words[3]}</Link>
          </div>
          <div>
            <h2>{words[2]}</h2>
            <a
              href={botCtaUrl("footer")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram bot <ArrowUpRightIcon />
            </a>
            <a href={SITE.supportUrl} target="_blank" rel="noopener noreferrer">
              {tr.nav.faq} <ArrowUpRightIcon />
            </a>
            <a href={SITE.channelUrl} target="_blank" rel="noopener noreferrer">
              @{SITE.channelUsername} <ArrowUpRightIcon />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Premiumtg. {tr.footer.rights}
          </span>
          <span>
            O‘zbekiston uchun <span className="status-dot" /> UZS
          </span>
        </div>
      </div>
    </footer>
  );
}
