import Link from "next/link";
import { formatDate } from "@/lib/date";
import type { Lang } from "@/lib/translations";
import { type BlogSummary, getCategory, tx } from "@/lib/blog/types";
import { ArrowUpRightIcon, BookIcon, CardIcon } from "../icons";
export default function ArticleCard({
  post,
  lang,
  index = 0,
}: {
  post: BlogSummary;
  lang: Lang;
  index?: number;
}) {
  const news = post.category === "yangiliklar";
  const payment = post.category === "xarid";
  const Icon = payment ? CardIcon : BookIcon;
  const read =
    lang === "ru"
      ? "Читать статью"
      : lang === "en"
        ? "Read article"
        : "Maqolani o‘qish";
  const date = formatDate(post.date, lang);
  return (
    <article className="article-card">
      <Link
        href={`/blog/${post.slug}`}
        className={`article-cover ${news ? "cover-news" : payment ? "cover-payment" : "cover-guide"}`}
        aria-label={tx(post.title, lang)}
        tabIndex={-1}
      >
        <span>
          {news
            ? "TELEGRAM / UPDATES"
            : payment
              ? "PREMIUM / PAYMENTS"
              : "PREMIUM / JOURNAL"}
        </span>
        {news ? (
          <img
            src="/brand/star-512.png"
            alt=""
            width={104}
            height={104}
            loading="lazy"
          />
        ) : (
          <Icon aria-hidden="true" />
        )}
        <i>PREMIUMTG · {String(index + 1).padStart(2, "0")}</i>
      </Link>
      <div className="article-meta">
        <span className="article-category">
          {tx(getCategory(post.category).label, lang)}
        </span>
        <span>·</span>
        <time dateTime={post.date}>{date}</time>
      </div>
      <h3>
        <Link href={`/blog/${post.slug}`}>{tx(post.title, lang)}</Link>
      </h3>
      <p>{tx(post.excerpt, lang)}</p>
      <Link
        className="article-card-bottom"
        href={`/blog/${post.slug}`}
        aria-label={`${read}: ${tx(post.title, lang)}`}
      >
        <span>
          {read}{" "}
          <span className="muted">
            · {post.readMin}{" "}
            {lang === "ru" ? "мин" : lang === "en" ? "min" : "daq"}
          </span>
        </span>
        <ArrowUpRightIcon />
      </Link>
    </article>
  );
}
