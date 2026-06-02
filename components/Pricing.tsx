import { SITE, PREMIUM_PLANS, LOGIN_PLANS, formatSom, type Plan } from "@/lib/site";
import { CheckIcon, StarIcon, BoltIcon, UserIcon } from "./icons";

const PREMIUM_PERKS = [
  "10 soniyada avtomatik faollashadi",
  "Faqat username — akkaunt kerak emas",
  "Reklamasiz va to‘liq imkoniyatlar",
  "Istalgan karta bilan to‘lov",
];

function PlanCard({ plan }: { plan: Plan }) {
  const buyUrl = `${SITE.supportUrl}?text=${encodeURIComponent(
    `Salom! Telegram Premium ${plan.duration} (${formatSom(plan.price)}) sotib olmoqchiman.`
  )}`;

  return (
    <div
      className={`card relative flex flex-col p-7 transition-all duration-300 hover:-translate-y-1.5 ${
        plan.popular
          ? "border-tg-400/50 bg-gradient-to-b from-tg-500/10 to-transparent shadow-glow ring-1 ring-tg-400/30"
          : "hover:border-tg-400/40"
      }`}
    >
      {plan.badge && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold ${
            plan.popular
              ? "bg-gradient-to-r from-tg-400 to-tg-500 text-white shadow-glow"
              : "border border-white/15 bg-ink-800 text-tg-100"
          }`}
        >
          {plan.badge}
        </span>
      )}

      <div className="flex items-center gap-2 text-tg-200">
        <StarIcon className="h-5 w-5" />
        <span className="text-sm font-semibold uppercase tracking-wide">
          Premium {plan.duration}
        </span>
      </div>

      <div className="mt-4 flex items-end gap-1.5">
        <span className="text-4xl font-extrabold text-white">
          {formatSom(plan.price).replace(" so'm", "")}
        </span>
        <span className="mb-1 text-sm text-tg-100/70">so‘m</span>
      </div>
      {plan.perMonth && (
        <p className="mt-1 text-sm text-tg-100/60">
          ≈ {formatSom(plan.perMonth)} / oy
        </p>
      )}

      <a
        href={buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 ${plan.popular ? "btn-primary" : "btn-ghost"}`}
      >
        <BoltIcon className="h-5 w-5" />
        Sotib olish
      </a>

      <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
        {PREMIUM_PERKS.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5 text-sm text-tg-100/85">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            {perk}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LoginCard({ plan }: { plan: Plan }) {
  const buyUrl = `${SITE.supportUrl}?text=${encodeURIComponent(
    `Salom! Akkauntga kirib berish — ${plan.duration} (${formatSom(plan.price)}) xizmatini buyurtma qilmoqchiman.`
  )}`;
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-tg-400/40">
      <div>
        <p className="flex items-center gap-2 font-bold">
          <UserIcon className="h-5 w-5 text-tg-300" />
          Premium {plan.duration}
        </p>
        <p className="mt-1 text-sm text-tg-100/65">
          Operator akkauntingizga kirib o‘zi ulab beradi
        </p>
      </div>
      <div className="text-right">
        <p className="whitespace-nowrap text-xl font-extrabold text-white">
          {formatSom(plan.price).replace(" so'm", "")}
          <span className="ml-1 text-xs font-medium text-tg-100/60">so‘m</span>
        </p>
        <a
          href={buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-tg-100 transition-colors hover:bg-tg-500/30"
        >
          Buyurtma
        </a>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="narxlar" className="relative py-20 lg:py-28">
      <div className="aurora opacity-60" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip mx-auto">Narxlar</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Eng arzon Premium paketlar
          </h2>
          <p className="mt-3 text-tg-100/75">
            Hammasi <strong className="text-white">10 soniyada avtomatik</strong>{" "}
            faollashadi. Akkauntga kirish shart emas — faqat username yetarli.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PREMIUM_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Akkauntga kirib berish */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-7 lg:p-9">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-bold">Akkauntga kirib berish xizmati</h3>
              <p className="mt-1 max-w-xl text-sm text-tg-100/70">
                Agar o‘zingiz ulashni xohlamasangiz — operator akkauntingizga
                kirib, Premiumni qo‘lda ulab beradi. Bu alohida xizmat.
              </p>
            </div>
            <span className="chip">Qo‘lda ulash</span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {LOGIN_PLANS.map((plan) => (
              <LoginCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-tg-100/60">
          Narx yoki paket bo‘yicha savol bormi?{" "}
          <a
            href={SITE.supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-tg-300 underline-offset-4 hover:underline"
          >
            @{SITE.supportUsername}
          </a>{" "}
          bilan bog‘laning.
        </p>
      </div>
    </section>
  );
}
