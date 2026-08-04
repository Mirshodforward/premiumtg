"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  BLOG_POSTS,
  CATEGORIES,
  formatDate,
  getBlogPost,
  getReadMin,
  getRelatedPosts,
  tx,
} from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";
import { useLang } from "@/components/LanguageContext";
import { SITE } from "@/lib/site";
import { ArrowUpRightIcon, BoltIcon } from "@/components/icons";

const COPY: Record<
  string,
  {
    back: string;
    home: string;
    blog: string;
    quick: string;
    toc: string;
    updated: string;
    min: string;
    keywords: string;
    related: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBot: string;
    ctaPrice: string;
    prev: string;
    next: string;
    notFound: string;
  }
> = {
  uz: {
    back: "← Blogga qaytish",
    home: "Bosh sahifa",
    blog: "Blog",
    quick: "Qisqa javob",
    toc: "Maqola bo'limlari",
    updated: "Yangilandi",
    min: "daqiqa o'qish",
    keywords: "Mavzular",
    related: "Aloqador maqolalar",
    ctaTitle: "Telegram Premiumni hoziroq ulang",
    ctaDesc:
      "Faqat username yetarli. Click, Payme, Paynet, Uzcard yoki Humo bilan to'lang — obuna 10 soniyada avtomatik faollashadi.",
    ctaBot: "Botdan sotib olish",
    ctaPrice: "Narxlarni ko'rish",
    prev: "Oldingi",
    next: "Keyingi",
    notFound: "Maqola topilmadi.",
  },
  ru: {
    back: "← Вернуться в блог",
    home: "Главная",
    blog: "Блог",
    quick: "Краткий ответ",
    toc: "Разделы статьи",
    updated: "Обновлено",
    min: "мин чтения",
    keywords: "Темы",
    related: "Похожие статьи",
    ctaTitle: "Подключите Telegram Premium прямо сейчас",
    ctaDesc:
      "Достаточно username. Оплатите через Click, Payme, Paynet, Uzcard или Humo — подписка активируется автоматически за 10 секунд.",
    ctaBot: "Купить через бот",
    ctaPrice: "Смотреть цены",
    prev: "Предыдущая",
    next: "Следующая",
    notFound: "Статья не найдена.",
  },
  en: {
    back: "← Back to blog",
    home: "Home",
    blog: "Blog",
    quick: "Quick answer",
    toc: "In this article",
    updated: "Updated",
    min: "min read",
    keywords: "Topics",
    related: "Related articles",
    ctaTitle: "Get Telegram Premium right now",
    ctaDesc:
      "Your username is all it takes. Pay via Click, Payme, Paynet, Uzcard or Humo — the subscription activates automatically in 10 seconds.",
    ctaBot: "Buy via bot",
    ctaPrice: "See pricing",
    prev: "Previous",
    next: "Next",
    notFound: "Article not found.",
  },
};

export default function ArticleView({ slug }: { slug: string }) {
  const { lang } = useLang();
  const copy = COPY[lang] ?? COPY.uz;
  const post = getBlogPost(slug);

  const rendered = useMemo(
    () => (post ? renderMarkdown(tx(post.content, lang)) : null),
    [post, lang]
  );

  if (!post || !rendered) {
    return (
      <section className="border-b-2 border-foreground py-24">
        <div className="container-x">
          <p className="font-clash text-2xl font-black uppercase">{copy.notFound}</p>
          <Link href="/blog" className="btn-secondary mt-8">
            {copy.back}
          </Link>
        </div>
      </section>
    );
  }

  const category = CATEGORIES.find((c) => c.id === post.category)!;
  const related = getRelatedPosts(post, 3);
  const index = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prev = index > 0 ? BLOG_POSTS[index - 1] : null;
  const next = index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : null;

  return (
    <>
      {/* Sarlavha bloki */}
      <section className="border-b-2 border-border-strong">
        <div className="container-x animate-page-in pb-12 pt-8 sm:pt-12">
          {/* Breadcrumb */}
          <nav
            aria-label="breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              {copy.home}
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="transition-colors hover:text-primary">
              {copy.blog}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{tx(category.label, lang)}</span>
          </nav>

          <h1 className="font-clash mt-6 max-w-4xl text-[clamp(1.6rem,5.2vw,3.6rem)] font-black uppercase leading-[0.98] tracking-tight">
            {tx(post.title, lang)}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.7rem] font-bold uppercase tracking-[0.15em] tabular-nums text-muted-foreground">
            <span>{formatDate(post.date, lang)}</span>
            <span aria-hidden="true">·</span>
            <span>
              {getReadMin(post)} {copy.min}
            </span>
            {post.updated && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-primary">
                  {copy.updated}: {formatDate(post.updated, lang)}
                </span>
              </>
            )}
          </div>

          {/* Tezkor javob — AEO bloki: AI qidiruv tizimlari aynan shu matnni oladi */}
          <div className="mt-8 max-w-3xl border-2 border-foreground bg-primary-soft p-6 shadow-hard sm:p-7">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">
              {copy.quick}
            </p>
            <p className="mt-3 text-base leading-relaxed sm:text-lg">
              {tx(post.excerpt, lang)}
            </p>
          </div>
        </div>
      </section>

      {/* Maqola tanasi */}
      <section className="border-b-2 border-foreground">
        <div className="container-x py-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_260px] lg:items-start">
            <article className="prose-dl max-w-3xl">
              <div dangerouslySetInnerHTML={{ __html: rendered.html }} />
            </article>

            {/* Mundarija */}
            {rendered.toc.length > 2 && (
              <aside className="order-first lg:sticky lg:top-24 lg:order-last">
                <div className="border-2 border-foreground bg-card">
                  <p className="border-b-2 border-foreground px-4 py-3 font-clash text-xs font-bold uppercase tracking-[0.15em]">
                    {copy.toc}
                  </p>
                  <ol className="p-4">
                    {rendered.toc.map((item, i) => (
                      <li key={item.id} className="flex gap-2.5 py-1.5">
                        <span className="font-clash text-[0.7rem] font-black tabular-nums text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={`#${item.id}`}
                          className="text-sm leading-snug transition-colors hover:text-primary"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>

                <a
                  href={SITE.botUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-between gap-2 border-2 border-foreground bg-primary px-4 py-3.5 font-clash text-xs font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  {copy.ctaBot}
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 animate-arrow-nudge" />
                </a>
              </aside>
            )}
          </div>

          {/* Kalit so'zlar */}
          <div className="mt-14 max-w-3xl border-t-2 border-foreground pt-6">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {copy.keywords}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {post.keywords.map((k) => (
                <li
                  key={k}
                  className="border-2 border-border-soft px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b-2 border-foreground bg-background-subtle py-16 sm:py-20">
        <div className="container-x">
          <div className="border-2 border-foreground bg-card p-8 shadow-hard-lg sm:p-10">
            <h2 className="font-clash max-w-2xl text-2xl font-black uppercase leading-[1] tracking-tight sm:text-4xl">
              {copy.ctaTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {copy.ctaDesc}
            </p>
            <div className="mt-8 flex flex-col sm:inline-flex sm:flex-row">
              <a
                href={SITE.botUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {copy.ctaBot}
                <ArrowUpRightIcon className="h-4 w-4 animate-arrow-nudge" />
              </a>
              <Link
                href="/#narxlar"
                className="btn-secondary border-t-0 sm:border-l-0 sm:border-t-2"
              >
                <BoltIcon className="h-4 w-4" />
                {copy.ctaPrice}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Aloqador maqolalar */}
      {related.length > 0 && (
        <section className="border-b-2 border-foreground py-16 sm:py-20">
          <div className="container-wide">
            <h2 className="font-clash text-2xl font-black uppercase tracking-tight sm:text-4xl">
              {copy.related}
            </h2>

            <div className="mt-10 grid border-l-2 border-t-2 border-border-strong md:grid-cols-3">
              {related.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="flex h-full flex-col border-b-2 border-r-2 border-border-strong bg-card p-6 transition-colors duration-300 hover:bg-foreground hover:text-background sm:p-7"
                >
                  <span className="font-clash text-3xl font-black tabular-nums opacity-40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-clash text-base font-bold uppercase leading-tight tracking-tight">
                    {tx(p.title, lang)}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                    {tx(p.excerpt, lang).slice(0, 110)}…
                  </p>
                  <ArrowUpRightIcon className="mt-5 h-4 w-4 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Oldingi / keyingi */}
      <section className="border-b-2 border-foreground">
        <div className="grid sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="border-b-2 border-foreground p-6 transition-colors hover:bg-foreground hover:text-background sm:border-b-0 sm:border-r-2 sm:p-8"
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] opacity-60">
                ← {copy.prev}
              </p>
              <p className="mt-2 font-clash text-sm font-bold uppercase leading-tight tracking-tight sm:text-base">
                {tx(prev.title, lang)}
              </p>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="p-6 text-right transition-colors hover:bg-foreground hover:text-background sm:p-8"
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] opacity-60">
                {copy.next} →
              </p>
              <p className="mt-2 font-clash text-sm font-bold uppercase leading-tight tracking-tight sm:text-base">
                {tx(next.title, lang)}
              </p>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
