"use client";

import Link from "next/link";
import { BLOG_POSTS, formatDate } from "@/lib/blog";
import { useLang } from "./LanguageContext";

export default function BlogSection() {
  const { lang, tr } = useLang();
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="relative py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip mx-auto">{tr.blog.title}</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {tr.blog.subtitle}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card group flex flex-col p-6 transition-all hover:border-tg-400/40 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-2 text-xs text-tg-100/50">
                <span>{formatDate(post.date, lang)}</span>
                <span>·</span>
                <span>{post.readMin} {tr.blog.minRead}</span>
              </div>
              <h3 className="mt-3 text-base font-bold text-tg-50 leading-snug group-hover:text-white transition-colors">
                {post.title[lang]}
              </h3>
              <p className="mt-2 flex-1 text-sm text-tg-100/65 leading-relaxed line-clamp-3">
                {post.excerpt[lang]}
              </p>
              <span className="mt-4 text-sm font-semibold text-tg-300">
                {tr.blog.readMore}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-tg-200 transition-colors hover:border-tg-400/40 hover:bg-white/5"
          >
            {lang === "ru" ? "Все статьи →" : lang === "en" ? "All Articles →" : "Barcha maqolalar →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
