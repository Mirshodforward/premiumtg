"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  BLOG_POSTS,
  CATEGORIES,
  formatDate,
  getReadMin,
  searchPosts,
  tx,
  type CategoryId,
} from "@/lib/blog";
import { useLang } from "@/components/LanguageContext";
import { SITE } from "@/lib/site";
import { ArrowUpRightIcon, SearchIcon } from "@/components/icons";

const COPY: Record<
  string,
  {
    eyebrow: string;
    title1: string;
    title2: string;
    sticker: string;
    desc: string;
    all: string;
    search: string;
    found: string;
    empty: string;
    min: string;
    articles: string;
    categories: string;
    langs: string;
    ctaTitle: string;
    ctaBtn: string;
  }
> = {
  uz: {
    eyebrow: "Blog",
    title1: "Telegram Premium",
    title2: "bo'yicha to'liq",
    sticker: "51 ta savol — 51 ta aniq javob",
    desc: "Narx, to'lov, xavfsizlik, imkoniyatlar va Stars — O'zbekistondagi foydalanuvchilar eng ko'p so'raydigan savollarga batafsil javoblar.",
    all: "Barchasi",
    search: "Savolingizni yozing...",
    found: "ta maqola",
    empty: "Bunday so'rov bo'yicha maqola topilmadi. Boshqa so'z bilan qidirib ko'ring.",
    min: "daq",
    articles: "Maqola",
    categories: "Bo'lim",
    langs: "Til",
    ctaTitle: "Savolingizga javob topdingizmi? Endi Premiumni ulang.",
    ctaBtn: "Botdan sotib olish",
  },
  ru: {
    eyebrow: "Блог",
    title1: "Всё о Telegram",
    title2: "Premium",
    sticker: "51 вопрос — 51 точный ответ",
    desc: "Цены, оплата, безопасность, возможности и Stars — подробные ответы на вопросы, которые чаще всего задают пользователи в Узбекистане.",
    all: "Все",
    search: "Введите свой вопрос...",
    found: "статей",
    empty: "По этому запросу статей не найдено. Попробуйте другое слово.",
    min: "мин",
    articles: "Статей",
    categories: "Разделов",
    langs: "Языка",
    ctaTitle: "Нашли ответ? Теперь подключите Premium.",
    ctaBtn: "Купить через бот",
  },
  en: {
    eyebrow: "Blog",
    title1: "Everything about",
    title2: "Telegram Premium",
    sticker: "51 questions — 51 clear answers",
    desc: "Pricing, payments, safety, features and Stars — detailed answers to the questions users in Uzbekistan ask most.",
    all: "All",
    search: "Type your question...",
    found: "articles",
    empty: "No articles match that query. Try another word.",
    min: "min",
    articles: "Articles",
    categories: "Sections",
    langs: "Languages",
    ctaTitle: "Found your answer? Now get Premium.",
    ctaBtn: "Buy via bot",
  },
};

export default function BlogIndex() {
  const { lang } = useLang();
  const copy = COPY[lang] ?? COPY.uz;
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [query, setQuery] = useState("");

  const posts = useMemo(() => {
    const base = query.trim() ? searchPosts(query, lang) : BLOG_POSTS;
    return category === "all" ? base : base.filter((p) => p.category === category);
  }, [category, query, lang]);

  return (
    <>
      {/* Hero */}
      <section className="border-b-2 border-border-strong">
        <div className="container-wide animate-page-in pb-14 pt-12 sm:pt-16">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {copy.eyebrow}
          </span>

          <h1 className="h1-display mt-6 max-w-5xl">
            <span className="block">{copy.title1}</span>
            <span className="block text-primary">{copy.title2}</span>
            <span className="mt-5 inline-block -rotate-2 animate-badge-pop border-2 border-foreground bg-primary px-3 py-1.5 text-[0.44em] font-semibold normal-case leading-snug tracking-normal text-primary-foreground shadow-hard sm:text-[0.3em]">
              {copy.sticker}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {copy.desc}
          </p>
        </div>

        <div className="grid grid-cols-3 border-t-2 border-border-strong">
          {[
            { v: String(BLOG_POSTS.length), l: copy.articles },
            { v: String(CATEGORIES.length), l: copy.categories },
            { v: "3", l: copy.langs },
          ].map((t, i) => (
            <div
              key={t.l}
              className={`p-5 sm:p-7 ${i > 0 ? "border-l-2 border-border-strong" : ""}`}
            >
              <p className="font-clash text-3xl font-black tabular-nums tracking-tight sm:text-5xl">
                {t.v}
              </p>
              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                {t.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Filtr + qidiruv */}
      <section className="border-b-2 border-foreground bg-background-subtle">
        <div className="container-wide py-8">
          <div className="flex flex-wrap items-stretch border-l-2 border-t-2 border-foreground">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={`border-b-2 border-r-2 border-foreground px-5 py-2.5 font-clash text-xs font-bold uppercase tracking-wide transition-colors sm:text-sm ${
                category === "all"
                  ? "bg-foreground text-background"
                  : "bg-card hover:bg-muted"
              }`}
            >
              {copy.all}
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                className={`border-b-2 border-r-2 border-foreground px-5 py-2.5 font-clash text-xs font-bold uppercase tracking-wide transition-colors sm:text-sm ${
                  category === c.id
                    ? "bg-foreground text-background"
                    : "bg-card hover:bg-muted"
                }`}
              >
                {tx(c.label, lang)}
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-center border-2 border-foreground bg-card">
            <span className="grid h-12 w-12 shrink-0 place-items-center border-r-2 border-foreground">
              <SearchIcon className="h-4 w-4" />
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={copy.search}
              aria-label={copy.search}
              className="h-12 w-full bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
            />
            <span className="hidden shrink-0 border-l-2 border-foreground px-4 font-clash text-xs font-bold uppercase tabular-nums tracking-wide sm:block">
              {posts.length} {copy.found}
            </span>
          </div>
        </div>
      </section>

      {/* Maqolalar */}
      <section className="border-b-2 border-foreground">
        {posts.length === 0 ? (
          <div className="container-wide py-20">
            <p className="text-base text-muted-foreground">{copy.empty}</p>
          </div>
        ) : (
          <div className="container-wide py-12">
            <div className="grid border-l-2 border-t-2 border-border-strong md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col border-b-2 border-r-2 border-border-strong bg-card p-6 transition-colors duration-300 hover:bg-foreground hover:text-background sm:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-clash text-3xl font-black tabular-nums opacity-40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="border-2 border-current px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.15em]">
                      {tx(
                        CATEGORIES.find((c) => c.id === post.category)!.label,
                        lang
                      )}
                    </span>
                  </div>

                  <h2 className="mt-5 font-clash text-lg font-bold uppercase leading-tight tracking-tight">
                    {tx(post.title, lang)}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                    {tx(post.excerpt, lang).slice(0, 150)}…
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t-2 border-current/20 pt-4 text-[0.7rem] font-bold uppercase tracking-wide tabular-nums">
                    <span>
                      {formatDate(post.date, lang)} · {getReadMin(post)} {copy.min}
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-b-2 border-foreground bg-background-subtle py-16 sm:py-20">
        <div className="container-x">
          <div className="border-2 border-foreground bg-card p-8 shadow-hard-lg sm:p-10">
            <h2 className="font-clash max-w-2xl text-2xl font-black uppercase leading-[1] tracking-tight sm:text-4xl">
              {copy.ctaTitle}
            </h2>
            <a
              href={SITE.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              {copy.ctaBtn}
              <ArrowUpRightIcon className="h-4 w-4 animate-arrow-nudge" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
