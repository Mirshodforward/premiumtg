"use client";
import { useMemo, useState } from "react";
import { CATEGORIES, tx, type BlogSummary } from "@/lib/blog/types";
import { useLang } from "../LanguageContext";
import ArticleCard from "./ArticleCard";
import { SearchIcon } from "../icons";
function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[‘’ʻʼ'`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
export default function BlogIndex({
  posts: allPosts,
}: {
  posts: BlogSummary[];
}) {
  const { lang } = useLang();
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const words =
    lang === "ru"
      ? [
          "Больше о Telegram.",
          "Всё о Premium.",
          "Обновления, оплата в Узбекистане и полезные инструкции. Ссылки на источники указаны в проверенных статьях.",
          "Все",
          "Поиск статей...",
          "статей",
          "Ничего не найдено. Попробуйте другое слово.",
          "Сбросить фильтры",
        ]
      : lang === "en"
        ? [
            "More about Telegram.",
            "Everything Premium.",
            "Updates, payments in Uzbekistan and useful guides. Reviewed articles include links to their sources.",
            "All",
            "Search articles...",
            "articles",
            "No articles found. Try another word.",
            "Reset filters",
          ]
        : [
            "Telegram haqida ko‘proq.",
            "Premium haqida barchasi.",
            "Yangilanishlar, O‘zbekistonda to‘lov va amaliy yo‘riqnomalar. Tekshirilgan maqolalarda manbalarga havolalar bor.",
            "Barchasi",
            "Maqolalardan qidirish...",
            "ta maqola",
            "Maqola topilmadi. Boshqa so‘z bilan qidirib ko‘ring.",
            "Filtrlarni tozalash",
          ];
  const posts = useMemo(
    () =>
      allPosts.filter(
        (p) =>
          (category === "all" || p.category === category) &&
          normalize(
            [tx(p.title, lang), tx(p.excerpt, lang), ...p.keywords].join(" "),
          ).includes(normalize(query)),
      ),
    [allPosts, category, query, lang],
  );
  return (
    <>
      <section className="blog-hero">
        <div className="container-wide">
          <span className="eyebrow">PREMIUMTG / JOURNAL</span>
          <h1>
            {words[0]}
            <br />
            <span>{words[1]}</span>
          </h1>
          <p>{words[2]}</p>
          <span className="blog-count">
            {allPosts.length} {words[5]} · PREMIUMTG
          </span>
        </div>
      </section>
      <section className="container-wide">
        <div className="blog-controls">
          <div className="category-filters" aria-label={words[3]}>
            <button
              aria-pressed={category === "all"}
              onClick={() => setCategory("all")}
            >
              {words[3]}
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                aria-pressed={category === c.id}
                onClick={() => setCategory(c.id)}
              >
                {tx(c.label, lang)}
              </button>
            ))}
          </div>
          <label className="search-field">
            <SearchIcon />
            <span className="sr-only">{words[4]}</span>
            <input
              type="search"
              placeholder={words[4]}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        <p className="results-count" role="status">
          {posts.length} {words[5]}
        </p>
        {posts.length ? (
          <div className="article-grid blog-grid">
            {posts.map((post, i) => (
              <ArticleCard post={post} lang={lang} index={i} key={post.slug} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>{words[6]}</p>
            <button
              className="button button-light"
              onClick={() => {
                setCategory("all");
                setQuery("");
              }}
            >
              {words[7]}
            </button>
          </div>
        )}
      </section>
    </>
  );
}
