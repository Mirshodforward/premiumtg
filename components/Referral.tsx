import { SITE } from "@/lib/site";
import { GiftIcon, StarIcon, CheckIcon } from "./icons";

const PERKS = [
  "Har bir do‘st sotib olganda — bonus",
  "Bonuslarni keyingi xaridda chegirma sifatida ishlating",
  "Cheklov yo‘q — qancha ko‘p taklif, shuncha ko‘p bonus",
];

export default function Referral() {
  return (
    <section id="bonus" className="relative py-20 lg:py-28">
      <div className="container-x">
        <div className="card relative overflow-hidden p-8 lg:p-12">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-tg-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-tg-400/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="chip">
                <GiftIcon className="h-4 w-4" />
                Bonus dasturi
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Do‘stlaringizni taklif qiling — <span className="gradient-text">bonus oling</span>
              </h2>
              <p className="mt-3 max-w-xl text-tg-100/75">
                Premiumtg’ni do‘stlaringizga tavsiya qiling. Har bir do‘stingiz
                obuna sotib olganda siz bonus va chegirmalarga ega bo‘lasiz.
              </p>

              <ul className="mt-6 space-y-3">
                {PERKS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-tg-100/85">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href={SITE.supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7"
              >
                <GiftIcon className="h-5 w-5" />
                Taklif havolasini olish
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-xs">
              <div className="card flex flex-col items-center gap-4 bg-ink-800/60 p-7 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-tg-400 to-tg-600 shadow-glow">
                  <StarIcon className="h-8 w-8 text-white" />
                </span>
                <p className="text-sm text-tg-100/70">Siz ishlab topgan bonus</p>
                <p className="text-4xl font-extrabold gradient-text">+ Bonus</p>
                <p className="text-xs text-tg-100/60">
                  har bir muvaffaqiyatli taklif uchun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
