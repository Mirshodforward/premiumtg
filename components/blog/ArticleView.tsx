"use client";
import { useMemo } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import {
  type BlogPost,
  type BlogSummary,
  tx,
  getCategory,
  readingMinutes,
} from "@/lib/blog/types";
import { renderMarkdown } from "@/lib/markdown";
import { useLang } from "../LanguageContext";
import { SITE } from "@/lib/site";
import ArticleCard from "./ArticleCard";
import { ArrowUpRightIcon } from "../icons";
export default function ArticleView({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogSummary[];
}) {
  const { lang } = useLang();
  const contentLang = lang === "en" && !post.content.en ? "uz" : lang;
  const rendered = useMemo(
    () => renderMarkdown(tx(post.content, contentLang)),
    [post, contentLang],
  );
  const date = (value: string) => formatDate(value, lang);
  const c =
    lang === "ru"
      ? [
          "Главная",
          "Блог",
          "Краткий ответ",
          "В этой статье",
          "Обновлено",
          "мин чтения",
          "Источники и проверка",
          "Материал проверен",
          "Редакция Premiumtg",
          "Подключите Telegram Premium",
          "Выберите срок и username. Итоговая цена, доступные способы оплаты и доставка указаны в боте.",
          "Продолжить в боте",
          "Смотреть тарифы",
          "Читайте также",
          "Событие",
        ]
      : lang === "en"
        ? [
            "Home",
            "Journal",
            "Quick answer",
            "In this article",
            "Updated",
            "min read",
            "Sources and review",
            "Reviewed",
            "Premiumtg editorial team",
            "Get Telegram Premium",
            "Choose a term and username. Confirm the final price, payment methods and delivery in the bot.",
            "Continue in Telegram",
            "Explore plans",
            "Read next",
            "Event date",
          ]
        : [
            "Bosh sahifa",
            "Blog",
            "Qisqa javob",
            "Maqola bo‘limlari",
            "Yangilandi",
            "daqiqa o‘qish",
            "Manbalar va tekshiruv",
            "Tekshirildi",
            "Premiumtg tahririyati",
            "Telegram Premiumni ulang",
            "Muddat va username tanlang. Yakuniy narx, mavjud to‘lov usullari va yetkazish sharti botda ko‘rsatiladi.",
            "Botda davom etish",
            "Tariflarni ko‘rish",
            "Yana foydali maqolalar",
            "Yangilik sanasi",
          ];
  return (
    <>
      <article>
        <header className="article-header">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">{c[0]}</Link>
            <span>/</span>
            <Link href="/blog">{c[1]}</Link>
            <span>/</span>
            <span>{tx(getCategory(post.category).label, lang)}</span>
          </nav>
          <h1 lang={contentLang}>{tx(post.title, contentLang)}</h1>
          <div className="article-byline">
            <Link href="/about">{c[8]}</Link>
            <span>·</span>
            <time dateTime={post.date}>{date(post.date)}</time>
            <span>·</span>
            <span>
              {readingMinutes(tx(post.content, contentLang))} {c[5]}
            </span>
            {post.updated && (
              <>
                <span>·</span>
                <span>
                  {c[4]}:{" "}
                  <time dateTime={post.updated}>{date(post.updated)}</time>
                </span>
              </>
            )}
            {post.eventDate && (
              <>
                <span>·</span>
                <span>
                  {c[14]}:{" "}
                  <time dateTime={post.eventDate}>{date(post.eventDate)}</time>
                </span>
              </>
            )}
          </div>
          {contentLang !== lang && (
            <p className="article-language-note">
              This article is available in Uzbek and Russian. The Uzbek version
              is shown below.
            </p>
          )}
          <div className="quick-answer">
            <span>{c[2]}</span>
            <p lang={contentLang}>{tx(post.excerpt, contentLang)}</p>
          </div>
        </header>
        <div className="article-layout">
          <div className="article-body">
            <div
              className="prose-dl"
              lang={contentLang}
              dangerouslySetInnerHTML={{ __html: rendered.html }}
            />
            {post.sources?.length ? (
              <section className="article-sources">
                <h2>{c[6]}</h2>
                <p>
                  {c[7]}:{" "}
                  <time dateTime={post.reviewed ?? post.updated ?? post.date}>
                    {date(post.reviewed ?? post.updated ?? post.date)}
                  </time>{" "}
                  · <Link href="/about">{c[8]}</Link>
                </p>
                <ul>
                  {post.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <p>
                  {lang === "ru"
                    ? "Условия функций и платежей могут измениться. Данные провайдеров не подтверждают наличие интеграции с Premiumtg."
                    : lang === "en"
                      ? "Feature and payment terms may change. Provider documentation does not confirm a Premiumtg integration."
                      : "Funksiya va to‘lov shartlari o‘zgarishi mumkin. Provayder hujjati Premiumtg integratsiyasi mavjudligini tasdiqlamaydi."}
                </p>
              </section>
            ) : null}
            <section className="article-cta">
              <h2>{c[9]}</h2>
              <p>{c[10]}</p>
              <div className="button-row">
                <a
                  className="button button-dark"
                  href={SITE.botUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c[11]}
                  <ArrowUpRightIcon />
                </a>
                <Link className="button button-light" href="/#narxlar">
                  {c[12]}
                </Link>
              </div>
            </section>
          </div>
          {rendered.toc.length > 0 && (
            <aside className="article-toc">
              <h2>{c[3]}</h2>
              <nav>
                {rendered.toc.map((item) => (
                  <a href={`#${item.id}`} key={item.id} lang={contentLang}>
                    {item.text}
                  </a>
                ))}
              </nav>
            </aside>
          )}
        </div>
      </article>
      {related.length > 0 && (
        <section className="related-section">
          <div className="container-wide">
            <h2>{c[13]}</h2>
            <div className="article-grid">
              {related.map((p, i) => (
                <ArticleCard key={p.slug} post={p} lang={lang} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
