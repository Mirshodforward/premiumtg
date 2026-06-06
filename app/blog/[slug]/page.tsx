"use client";

import { use } from "react";
import Link from "next/link";
import { getBlogPost, formatDate } from "@/lib/blog";
import { useLang } from "@/components/LanguageContext";
import { SITE } from "@/lib/site";
import { TelegramIcon, BoltIcon } from "@/components/icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-white mt-6 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-extrabold text-white mt-10 mb-3">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-tg-300 underline hover:text-tg-200">$1</a>')
    .replace(/^- ✅ (.+)$/gm, '<li class="flex items-center gap-2 text-tg-100/80"><span class="text-emerald-400">✅</span> $1</li>')
    .replace(/^- (.+)$/gm, '<li class="list-disc list-inside text-tg-100/80">$1</li>')
    .replace(/^\| (.+) \|$/gm, (row) => {
      if (row.includes('---')) return '';
      const cells = row.split('|').filter(c => c.trim());
      const isHeader = false;
      return `<tr>${cells.map((c, i) => `<td class="${i === 0 ? 'font-medium text-tg-50' : 'text-tg-100/80'} px-4 py-2 border border-white/10">${c.trim()}</td>`).join('')}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\n?)+/gs, (tableBody) => {
      const rows = tableBody.trim().split('\n');
      const headerRow = rows[0];
      const bodyRows = rows.slice(1);
      const headerCells = headerRow.match(/<td[^>]*>(.*?)<\/td>/g)?.map(td => td.replace(/<\/?td[^>]*>/g, '')).map(c => `<th class="px-4 py-2 text-left font-semibold text-white border border-white/10 bg-white/5">${c}</th>`).join('') ?? '';
      return `<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows.join('\n')}</tbody></table></div>`;
    })
    .split('\n\n')
    .map(para => {
      if (para.startsWith('<h') || para.startsWith('<div') || para.startsWith('<li') || para.startsWith('<ul') || para.startsWith('<tr')) return para;
      if (para.match(/^<li/m)) return `<ul class="space-y-1 my-4">${para}</ul>`;
      if (para.trim() === '') return '';
      return `<p class="text-tg-100/80 leading-relaxed">${para.replace(/\n/g, ' ')}</p>`;
    })
    .join('\n');
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang, tr } = useLang();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-28 pb-20">
          <div className="container-x text-center">
            <p className="text-tg-100/70">Maqola topilmadi.</p>
            <Link href="/blog" className="mt-4 inline-block text-tg-300 hover:text-tg-200">
              {tr.blog.backToBlog}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="text-sm text-tg-300 hover:text-tg-200 transition-colors"
            >
              {tr.blog.backToBlog}
            </Link>

            <div className="mt-6 flex items-center gap-3 text-xs text-tg-100/50">
              <span>{formatDate(post.date, lang)}</span>
              <span>·</span>
              <span>{post.readMin} {tr.blog.minRead}</span>
            </div>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              {post.title[lang]}
            </h1>

            <p className="mt-4 text-base text-tg-100/70 leading-relaxed">
              {post.excerpt[lang]}
            </p>

            <hr className="my-8 border-white/10" />

            <article
              className="prose-custom space-y-2"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content[lang]) }}
            />

            <hr className="my-10 border-white/10" />

            <div className="rounded-2xl border border-tg-400/30 bg-tg-500/10 p-8 text-center">
              <h3 className="text-xl font-extrabold text-white">
                {tr.cta.title}
              </h3>
              <p className="mt-2 text-sm text-tg-100/70">{tr.cta.desc}</p>
              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={SITE.botUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <TelegramIcon className="h-5 w-5" />
                  {tr.blog.btnBot}
                </a>
                <a href="/#narxlar" className="btn-ghost w-full sm:w-auto">
                  <BoltIcon className="h-5 w-5" />
                  {tr.cta.btnPricing}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
