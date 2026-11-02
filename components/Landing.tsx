"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, PREMIUM_PLANS, formatSom } from "@/lib/site";
import { HOME_FAQ } from "@/lib/home-content";
import type { BlogSummary } from "@/lib/blog/types";
import { useLang } from "./LanguageContext";
import ArticleCard from "./blog/ArticleCard";
import {
  ArrowUpRightIcon,
  BoltIcon,
  BookIcon,
  CardIcon,
  CheckIcon,
  GiftIcon,
  StarIcon,
  TelegramIcon,
} from "./icons";

const COPY = {
  uz: {
    badge: "O‘zbekistonda Telegram Premium",
    title: ["Telegram Premium.", "Favqulodda", "imkoniyatlar."],
    desc: "Telegram Premium bilan ko‘proq imkoniyatni oching. O‘zingizga yoki yaqiningizga — so‘mda to‘lang, username orqali ulang.",
    buy: "Premium olish",
    pricing: "Tariflarni ko‘rish",
    trust: ["Parol talab qilinmaydi", "So‘mda to‘lov", "Sovg‘a qilish mumkin"],
    cardLabel: "SIZNING YANGI DARAJANGIZ",
    cardDesc: "Kundalik muloqot. Kengroq imkoniyat.",
    active: "Premium imkoniyatlari",
    files: "Katta fayllar",
    limit: "Ko‘proq limit",
    payments: "O‘zingizga qulay to‘lov yo‘lini toping",
    methods: "To‘lov qo‘llanmalari",
    featuresLabel: "NEGA PREMIUM?",
    featuresTitle: "Kichik yulduzcha.",
    featuresAccent: "Katta farq.",
    featuresDesc:
      "Ish, o‘qish va yaqinlar bilan muloqot uchun foydali imkoniyatlar.",
    featureNames: [
      "Katta g‘oyalarga 4 GB joy",
      "Ovozli xabarni o‘qib oling",
      "O‘zingizga xos bo‘ling",
      "Ko‘proq ishga ulguring",
    ],
    featureTexts: [
      "Video, arxiv va taqdimotlarni bitta faylda yuboring. Premium bilan har bir fayl uchun 4 GB gacha.",
      "Tinglashga vaqt yo‘qmi? Ovoz va video xabarlarni matnga aylantirish imkoniyatidan foydalaning.",
      "Premium nishoni, animatsiyali emoji va maxsus stikerlar bilan profilingizga xarakter bering.",
      "Ko‘plab limitlar ikki baravar. Ko‘proq kanal, papka va chatni o‘zingizga qulay tartiblang.",
    ],
    plansLabel: "SIZGA MOS TARIF",
    plansTitle: "Bir obuna.",
    plansAccent: "Barcha imkoniyatlar.",
    plansDesc: "3, 6 yoki 12 oy — foydalanish rejangizga mos muddatni tanlang.",
    month: "oy",
    perMonth: "so‘m / oy hisobida",
    popular: "Qulay tanlov",
    best: "Oyiga eng tejamkor",
    planNames: [
      "Sinab ko‘rish uchun",
      "Kundalik foydalanish uchun",
      "Uzoq muddat uchun",
    ],
    selected: "Tanlangan paket",
    select: "Paketni tanlash",
    included: [
      "Premium imkoniyatlari",
      "Username orqali ulash",
      "O‘zingizga yoki sovg‘aga",
    ],
    checkout: "Botda davom etish",
    priceNote:
      "Butun muddat uchun bir martalik to‘lov. Saytdagi narxlar ma’lumot uchun; xariddan oldin botdagi yakuniy summa va shartlarni tekshiring.",
    howLabel: "HAMMASI TUSHUNARLI",
    howTitle: "Premium sari 3 qadam.",
    steps: ["Paket va username", "Qulay usulda to‘lov", "Premiumni tekshiring"],
    stepTexts: [
      "Botda muddatni tanlang va Premium oladigan akkauntning username’ini kiriting.",
      "Buyurtmada mavjud usulni tanlang. Qabul qiluvchi va yakuniy summani tekshirib to‘lang.",
      "Botdagi buyurtma holati va Telegram sozlamalaridagi obunani tekshiring. Chekni saqlang.",
    ],
    payLabel: "MAHALLIY TO‘LOVLAR",
    payTitle: "So‘mda to‘lash.",
    payAccent: "Oson tushunish.",
    payDesc:
      "Click, Payme, Paynet yoki Uzum Bank: qaysi yo‘l sizga mosligini qo‘llanmadan bilib oling. Mavjud usullar buyurtma vaqtida botda ko‘rsatiladi.",
    guide: "To‘lov qo‘llanmasini o‘qish",
    payDetails: [
      "Hisob orqali to‘lov",
      "Ilovadagi to‘lov va chek",
      "Xizmat va to‘lov rekvizitlari",
      "Karta yoki ilova orqali",
    ],
    blogLabel: "PREMIUM JURNAL",
    blogTitle: "Yangiliklar va",
    blogAccent: "foydali javoblar.",
    blogDesc:
      "Telegram yangiliklari, to‘lov yo‘riqnomalari va kundalik maslahatlar — sodda tilda.",
    all: "Barcha maqolalar",
    faqLabel: "SAVOL-JAVOB",
    faqTitle: "Avval savollar.",
    faqAccent: "Keyin Premium.",
    faqDesc: "Xarid oldidan bilishingiz kerak bo‘lgan javoblar.",
    support: "Yordam xizmatiga yozish",
    ctaTitle: "Telegram’ingizga",
    ctaAccent: "yangi imkoniyat qo‘shing.",
    ctaDesc:
      "O‘zingiz uchun qulay paketni tanlang. Davomini Telegram’da hal qilamiz.",
  },
  ru: {
    badge: "Telegram Premium в Узбекистане",
    title: ["Telegram Premium.", "Новые", "возможности."],
    desc: "Откройте больше с Telegram Premium. Для себя или близкого — оплата в сумах, подключение по username.",
    buy: "Купить Premium",
    pricing: "Смотреть тарифы",
    trust: ["Без пароля", "Оплата в сумах", "Можно подарить"],
    cardLabel: "ВАШ НОВЫЙ УРОВЕНЬ",
    cardDesc: "Общение каждый день. Больше возможностей.",
    active: "Возможности Premium",
    files: "Большие файлы",
    limit: "Больше лимитов",
    payments: "Найдите удобный способ оплаты",
    methods: "Гайды по оплате",
    featuresLabel: "ПОЧЕМУ PREMIUM?",
    featuresTitle: "Маленькая звезда.",
    featuresAccent: "Большая разница.",
    featuresDesc: "Полезные функции для работы, учёбы и общения.",
    featureNames: [
      "4 ГБ для больших идей",
      "Читайте голосовые",
      "Выражайте себя",
      "Успевайте больше",
    ],
    featureTexts: [
      "Отправляйте видео, архивы и презентации размером до 4 ГБ за файл.",
      "Преобразуйте голосовые и видеосообщения в текст, когда неудобно слушать.",
      "Значок Premium, анимированные эмодзи и особые стикеры для вашего профиля.",
      "Многие лимиты удвоены: больше каналов, папок и удобства в чатах.",
    ],
    plansLabel: "ВАШ ТАРИФ",
    plansTitle: "Одна подписка.",
    plansAccent: "Все возможности.",
    plansDesc: "Выберите подходящий срок: 3, 6 или 12 месяцев.",
    month: "мес.",
    perMonth: "сум / месяц в пересчёте",
    popular: "Удобный выбор",
    best: "Выгоднее за месяц",
    planNames: ["Попробовать", "На каждый день", "На долгий срок"],
    selected: "Выбранный тариф",
    select: "Выбрать тариф",
    included: [
      "Возможности Premium",
      "Подключение по username",
      "Для себя или в подарок",
    ],
    checkout: "Продолжить в боте",
    priceNote:
      "Разовый платёж за весь срок. Цены на сайте справочные; перед покупкой проверьте итоговую сумму и условия в боте.",
    howLabel: "ВСЁ ПОНЯТНО",
    howTitle: "3 шага к Premium.",
    steps: ["Тариф и username", "Удобная оплата", "Проверьте Premium"],
    stepTexts: [
      "Выберите срок и укажите username получателя в боте.",
      "Выберите доступный способ, проверьте получателя и сумму, затем оплатите.",
      "Проверьте заказ в боте и подписку в настройках Telegram. Сохраните чек.",
    ],
    payLabel: "МЕСТНЫЕ ПЛАТЕЖИ",
    payTitle: "Оплата в сумах.",
    payAccent: "Понятный процесс.",
    payDesc:
      "Click, Payme, Paynet или Uzum Bank: разберитесь в способах оплаты с нашим руководством. Доступные варианты указаны в заказе.",
    guide: "Читать руководство",
    payDetails: [
      "Оплата по счёту",
      "Платёж и чек в приложении",
      "Сервис и реквизиты",
      "Карта или приложение",
    ],
    blogLabel: "ЖУРНАЛ PREMIUM",
    blogTitle: "Новости и",
    blogAccent: "полезные ответы.",
    blogDesc: "Новости Telegram, инструкции по оплате и советы простым языком.",
    all: "Все статьи",
    faqLabel: "ВОПРОСЫ И ОТВЕТЫ",
    faqTitle: "Сначала вопросы.",
    faqAccent: "Затем Premium.",
    faqDesc: "Что стоит знать до покупки.",
    support: "Написать в поддержку",
    ctaTitle: "Добавьте вашему Telegram",
    ctaAccent: "новые возможности.",
    ctaDesc: "Выберите тариф. Продолжим в Telegram.",
  },
  en: {
    badge: "Telegram Premium in Uzbekistan",
    title: ["Telegram Premium.", "Extraordinary", "possibilities."],
    desc: "Unlock more with Telegram Premium. For you or someone special — pay in UZS and activate with a username.",
    buy: "Get Premium",
    pricing: "Explore plans",
    trust: ["No password needed", "Pay in UZS", "Give as a gift"],
    cardLabel: "YOUR NEXT LEVEL",
    cardDesc: "Everyday conversations. More possibilities.",
    active: "Premium features",
    files: "Larger files",
    limit: "More room",
    payments: "Find a payment method that works for you",
    methods: "Payment guides",
    featuresLabel: "WHY PREMIUM?",
    featuresTitle: "A little star.",
    featuresAccent: "A big difference.",
    featuresDesc: "Useful features for work, study and staying close.",
    featureNames: [
      "4 GB for your big ideas",
      "Read your voice messages",
      "Make it yours",
      "Room to do more",
    ],
    featureTexts: [
      "Send videos, archives and presentations up to 4 GB per file.",
      "Turn voice and video messages into text when listening is inconvenient.",
      "A Premium badge, animated emoji and special stickers add personality.",
      "Many limits are doubled, with more channels and folders to organize your chats.",
    ],
    plansLabel: "FIND YOUR PLAN",
    plansTitle: "One subscription.",
    plansAccent: "Every possibility.",
    plansDesc: "Choose a term that suits you: 3, 6 or 12 months.",
    month: "months",
    perMonth: "UZS / month equivalent",
    popular: "A balanced choice",
    best: "Lowest monthly equivalent",
    planNames: ["Try something new", "For your everyday", "For the long run"],
    selected: "Selected plan",
    select: "Select plan",
    included: [
      "Premium features",
      "Activate with a username",
      "For you or as a gift",
    ],
    checkout: "Continue in Telegram",
    priceNote:
      "A single payment for the full term. Listed prices are for reference; confirm the final amount and terms in the bot before paying.",
    howLabel: "CLEAR AND SIMPLE",
    howTitle: "3 steps to Premium.",
    steps: ["Plan and username", "Choose how to pay", "Check your Premium"],
    stepTexts: [
      "Select the term and enter the recipient’s username in the bot.",
      "Use an available payment method after checking the recipient and total.",
      "Check the order in the bot and your subscription in Telegram settings. Save your receipt.",
    ],
    payLabel: "LOCAL PAYMENTS",
    payTitle: "Pay in UZS.",
    payAccent: "Understand every step.",
    payDesc:
      "Click, Payme, Paynet or Uzum Bank: learn which route suits you. Available methods are shown in your order.",
    guide: "Read the payment guide",
    payDetails: [
      "Invoice payment",
      "In-app payment and receipt",
      "Service and payment details",
      "Card or app",
    ],
    blogLabel: "THE PREMIUM JOURNAL",
    blogTitle: "Fresh news.",
    blogAccent: "Useful answers.",
    blogDesc:
      "Telegram updates, payment guides and everyday tips in plain language.",
    all: "All articles",
    faqLabel: "QUESTIONS & ANSWERS",
    faqTitle: "Questions first.",
    faqAccent: "Premium next.",
    faqDesc: "Answers to know before you buy.",
    support: "Contact support",
    ctaTitle: "Give your Telegram",
    ctaAccent: "more possibilities.",
    ctaDesc: "Choose a plan. We’ll take it from there in Telegram.",
  },
};
const paymentLinks = [
  "telegram-premium-click-orqali",
  "telegram-premium-payme-orqali",
  "telegram-premium-paynet",
  "telegram-premium-uzum-bank-orqali",
];

export default function Landing({ posts }: { posts: BlogSummary[] }) {
  const { lang } = useLang();
  const c = COPY[lang];
  const [selected, setSelected] = useState("premium-6");
  const plan = PREMIUM_PLANS.find((p) => p.id === selected)!;
  return (
    <>
      <section className="hero-section">
        <div className="container-wide hero-grid">
          <div className="hero-copy">
            <span className="pill">
              <span className="status-dot" />
              {c.badge}
            </span>
            <h1>
              {c.title[0]}
              <br />
              <span>
                {c.title[1]}
                <br />
                {c.title[2]}
              </span>
            </h1>
            <p className="hero-description">{c.desc}</p>
            <div className="button-row">
              <a
                className="button button-dark"
                href={SITE.botUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon />
                {c.buy}
                <ArrowUpRightIcon />
              </a>
              <a href="#narxlar" className="button button-light">
                {c.pricing}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <ul className="hero-trust">
              {c.trust.map((s) => (
                <li key={s}>
                  <CheckIcon />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="premium-scene" aria-hidden="true">
            <div className="scene-glow" />
            <div className="scene-orbit orbit-one">
              <i />
            </div>
            <div className="scene-orbit orbit-two">
              <i />
            </div>
            <span className="scene-spark spark-one">✦</span>
            <span className="scene-spark spark-two">✧</span>
            <span className="scene-spark spark-three">✦</span>
            <img
              className="scene-star"
              src="/brand/star.webp"
              alt=""
              width={480}
              height={480}
              fetchPriority="high"
            />
            <div className="floating-note note-files">
              <span className="note-icon">
                <BookIcon />
              </span>
              <div>
                <strong>4 GB</strong>
                <small>{c.files}</small>
              </div>
            </div>
            <div className="floating-note note-premium">
              <span className="note-icon">
                <StarIcon />
              </span>
              <div>
                <strong>{c.active}</strong>
                <small>Telegram Premium</small>
              </div>
            </div>
            <div className="floating-note note-limit">
              <span className="note-icon">
                <BoltIcon />
              </span>
              <div>
                <strong>2×</strong>
                <small>{c.limit}</small>
              </div>
            </div>
            <span className="scene-caption">
              TELEGRAM. WITH A LITTLE EXTRA.
            </span>
          </div>
        </div>
      </section>
      <div className="payment-strip">
        <div className="container-wide payment-strip-inner">
          <p>{c.payments}</p>
          <div className="payment-wordmarks">
            <span className="wordmark-click">
              click<span>●</span>
            </span>
            <span className="wordmark-payme">payme</span>
            <span className="wordmark-paynet">PAYNET</span>
            <span className="wordmark-uzum">
              <i />
              uzum bank
            </span>
          </div>
          <a href="#tolov">
            {c.methods}
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
      <section className="section" id="imkoniyatlar">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / {c.featuresLabel}</span>
              <h2>
                {c.featuresTitle}
                <br />
                <span>{c.featuresAccent}</span>
              </h2>
            </div>
            <p>{c.featuresDesc}</p>
          </div>
          <div className="features-grid">
            {[BookIcon, BoltIcon, StarIcon, GiftIcon].map((Icon, i) => (
              <article
                className={`feature-card feature-${i}`}
                key={c.featureNames[i]}
              >
                <div className="feature-art" aria-hidden="true">
                  {i === 0 ? (
                    <>
                      <span className="file-sheet">
                        <Icon />
                        <span>PROJECT.ZIP</span>
                      </span>
                      <b>
                        4<span>GB</span>
                      </b>
                    </>
                  ) : i === 1 ? (
                    <>
                      <div className="waveform">
                        {Array.from({ length: 22 }, (_, j) => (
                          <i
                            key={j}
                            style={{ height: `${14 + ((j * 17) % 38)}px` }}
                          />
                        ))}
                      </div>
                      <div className="transcript-lines">
                        <i />
                        <i />
                        <i />
                      </div>
                    </>
                  ) : i === 2 ? (
                    <div className="emoji-cluster">
                      <span>✦</span>
                      <img
                        src="/brand/star-512.png"
                        alt=""
                        width={128}
                        height={128}
                        loading="lazy"
                      />
                      <span>✧</span>
                    </div>
                  ) : (
                    <div className="double-limit">
                      2<span>×</span>
                      <div className="limit-bars">
                        <i />
                        <i />
                      </div>
                    </div>
                  )}
                </div>
                <h3>{c.featureNames[i]}</h3>
                <p>{c.featureTexts[i]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section pricing-section" id="narxlar">
        <div className="container-wide">
          <div className="center-heading">
            <span className="eyebrow">02 / {c.plansLabel}</span>
            <h2>
              {c.plansTitle}
              <br />
              <span>{c.plansAccent}</span>
            </h2>
            <p>{c.plansDesc}</p>
          </div>
          <fieldset className="pricing-grid">
            <legend className="sr-only">{c.plansLabel}</legend>
            {PREMIUM_PLANS.map((p, i) => (
              <label
                className={`price-card ${selected === p.id ? "is-selected" : ""}`}
                key={p.id}
              >
                <input
                  type="radio"
                  name="premium-plan"
                  value={p.id}
                  checked={selected === p.id}
                  onChange={() => setSelected(p.id)}
                />
                <span className="plan-top">
                  <StarIcon />
                  <span
                    className={`plan-badge ${i === 2 ? "saving-badge" : ""}`}
                  >
                    {i === 1
                      ? c.popular
                      : i === 2
                        ? c.best
                        : "Telegram Premium"}
                  </span>
                </span>
                <span className="plan-duration">
                  {p.months} <span>{c.month}</span>
                </span>
                <span className="plan-description">{c.planNames[i]}</span>
                <span className="plan-price">
                  {p.price.toLocaleString("ru-RU")}{" "}
                  <small>
                    {lang === "en" ? "UZS" : lang === "ru" ? "сум" : "so‘m"}
                  </small>
                </span>
                <span className="plan-monthly">
                  ≈ {p.perMonth?.toLocaleString("ru-RU")} {c.perMonth}
                </span>
                <span className="plan-divider" />
                <span className="plan-benefits">
                  {c.included.map((t) => (
                    <span key={t}>
                      <CheckIcon />
                      {t}
                    </span>
                  ))}
                </span>
                <span className="plan-select">
                  {selected === p.id ? c.selected : c.select}
                  {selected === p.id ? <CheckIcon /> : <ArrowUpRightIcon />}
                </span>
              </label>
            ))}
          </fieldset>
          <div className="checkout-bar">
            <p aria-live="polite">
              <strong>
                {plan.months} {c.month}
              </strong>
              <span> · {formatSom(plan.price)}</span>
            </p>
            <a
              href={SITE.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark"
            >
              {c.checkout}
              <ArrowUpRightIcon />
            </a>
          </div>
          <p className="price-note">{c.priceNote}</p>
        </div>
      </section>
      <section className="section" id="qanday">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / {c.howLabel}</span>
              <h2>{c.howTitle}</h2>
            </div>
            <span className="handwritten">username → premium ✧</span>
          </div>
          <div className="steps-grid">
            {c.steps.map((s, i) => (
              <article key={s}>
                <span className="step-number">
                  0{i + 1}
                  <span aria-hidden="true">↗</span>
                </span>
                <h3>{s}</h3>
                <p>{c.stepTexts[i]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section payment-section" id="tolov">
        <div className="container-wide">
          <div className="payment-panel">
            <div>
              <span className="eyebrow">04 / {c.payLabel}</span>
              <h2>
                {c.payTitle}
                <br />
                <span>{c.payAccent}</span>
              </h2>
              <p>{c.payDesc}</p>
              <Link
                className="text-link"
                href="/blog/telegram-premium-ozbekistonda-tolov-usullari"
              >
                {c.guide}
                <ArrowUpRightIcon />
              </Link>
              <div className="payment-card-types">
                <CardIcon /> UZCARD <span>•</span> HUMO <span>•</span> UZS
              </div>
            </div>
            <div className="payment-method-grid">
              {["Click", "Payme", "Paynet", "Uzum Bank"].map((name, i) => (
                <Link
                  href={`/blog/${paymentLinks[i]}`}
                  className={`payment-method method-${i}`}
                  key={name}
                >
                  <span className="payment-method-symbol">
                    {i === 3 ? "u" : name[0]}
                  </span>
                  <strong>{name}</strong>
                  <span>{c.payDetails[i]}</span>
                  <ArrowUpRightIcon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="blog">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <span className="eyebrow">05 / {c.blogLabel}</span>
              <h2>
                {c.blogTitle}
                <br />
                <span>{c.blogAccent}</span>
              </h2>
            </div>
            <div className="heading-side">
              <p>{c.blogDesc}</p>
              <Link className="text-link" href="/blog">
                {c.all}
                <ArrowUpRightIcon />
              </Link>
            </div>
          </div>
          <div className="article-grid">
            {posts.map((p, i) => (
              <ArticleCard key={p.slug} post={p} index={i} lang={lang} />
            ))}
          </div>
        </div>
      </section>
      <section className="section faq-section" id="faq">
        <div className="container-wide faq-layout">
          <div>
            <span className="eyebrow">06 / {c.faqLabel}</span>
            <h2>
              {c.faqTitle}
              <br />
              <span>{c.faqAccent}</span>
            </h2>
            <p>{c.faqDesc}</p>
            <a
              className="text-link"
              href={SITE.supportUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.support}
              <ArrowUpRightIcon />
            </a>
          </div>
          <div className="faq-list">
            {HOME_FAQ[lang].map((item, i) => (
              <details
                key={`${lang}-${i}`}
                name="home-faq"
                open={i === 0 ? true : undefined}
              >
                <summary>
                  {item.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container-wide">
          <div className="cta-panel">
            <div>
              <span className="eyebrow">TELEGRAM, UPGRADED.</span>
              <h2>
                {c.ctaTitle}
                <br />
                <span>{c.ctaAccent}</span>
              </h2>
              <p>{c.ctaDesc}</p>
              <a
                className="button button-glow"
                href={SITE.botUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.buy}
                <ArrowUpRightIcon />
              </a>
            </div>
            <div className="cta-visual" aria-hidden="true">
              <img
                className="cta-star"
                src="/brand/star.webp"
                alt=""
                width={320}
                height={320}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
