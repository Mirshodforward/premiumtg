"use client";

import Link from "next/link";
import { BLOG_POSTS, getFeaturedPosts, getReadMin, tx } from "@/lib/blog";
import { useLang } from "./LanguageContext";
import { ArrowUpRightIcon } from "./icons";

const COPY: Record<
  string,
  { eyebrow: string; title: string; desc: string; all: string; min: string }
> = {
  uz: {
    eyebrow: "Blog",
    title: "Savolingizga javob bormi?",
    desc: "Telegram Premium bo'yicha eng ko'p so'raladigan savollarga batafsil javoblar — narx, to'lov, xavfsizlik va imkoniyatlar.",
    all: "Barcha maqolalar",
    min: "daq",
  },
  ru: {
    eyebrow: "Блог",
    title: "Есть вопрос? Есть ответ",
    desc: "Подробные ответы на самые частые вопросы о Telegram Premium — цены, оплата, безопасность и возможности.",
    all: "Все статьи",
    min: "мин",
  },
  en: {
    eyebrow: "Blog",
    title: "Got a question?",
    desc: "In-depth answers to the most common Telegram Premium questions — pricing, payments, safety and features.",
    all: "All articles",
    min: "min",
  },
};

export default function BlogSection() {
  const { lang } = useLang();
  const copy = COPY[lang] ?? COPY.uz;
  const posts = getFeaturedPosts(6);

  return (
    <section
      id="blog"
      className="border-b-2 border-foreground bg-background-subtle py-20 sm:py-28"
    >
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow reveal-item">
              <span className="eyebrow-dot" />
              {copy.eyebrow}
            </span>
            <h2 className="h2-section reveal-item mt-6 max-w-2xl">{copy.title}</h2>
            <p className="reveal-item mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {copy.desc}
            </p>
          </div>

          <Link href="/blog" className="btn-sm reveal-item border-2 bg-card">
            {copy.all} ({BLOG_POSTS.length})
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid border-l-2 border-t-2 border-border-strong md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="reveal-item flex h-full flex-col border-b-2 border-r-2 border-border-strong bg-card p-6 transition-colors duration-300 hover:bg-foreground hover:text-background sm:p-7"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <span className="font-clash text-4xl font-black tabular-nums opacity-40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-clash text-base font-bold uppercase leading-tight tracking-tight">
                {tx(post.title, lang)}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                {tx(post.excerpt, lang).slice(0, 120)}…
              </p>
              <div className="mt-6 flex items-center justify-between border-t-2 border-current/20 pt-4 text-[0.7rem] font-bold uppercase tabular-nums tracking-wide">
                <span>
                  {getReadMin(post)} {copy.min}
                </span>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
