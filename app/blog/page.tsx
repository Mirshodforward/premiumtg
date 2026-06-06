"use client";

import Link from "next/link";
import { BLOG_POSTS, formatDate } from "@/lib/blog";
import { useLang } from "@/components/LanguageContext";
import { SITE } from "@/lib/site";
import { TelegramIcon } from "@/components/icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const { lang, tr } = useLang();

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip mx-auto">{tr.blog.title}</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {tr.blog.subtitle}
            </h1>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card block p-6 transition-all hover:border-tg-400/40 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-3 text-xs text-tg-100/50">
                  <span>{formatDate(post.date, lang)}</span>
                  <span>·</span>
                  <span>{post.readMin} {tr.blog.minRead}</span>
                </div>
                <h2 className="mt-2 text-xl font-bold text-tg-50 group-hover:text-white">
                  {post.title[lang]}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-tg-100/70">
                  {post.excerpt[lang]}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-tg-300">
                  {tr.blog.readMore}
                </span>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-tg-400/30 bg-tg-500/10 p-8 text-center">
            <p className="font-semibold text-tg-50">
              {tr.cta.desc}
            </p>
            <a
              href={SITE.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mx-auto mt-5 inline-flex"
            >
              <TelegramIcon className="h-5 w-5" />
              {tr.blog.btnBot}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
