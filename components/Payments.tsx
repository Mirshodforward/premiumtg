import { CardIcon, ShieldIcon } from "./icons";

const METHODS = [
  { name: "Click", color: "from-sky-400 to-blue-500" },
  { name: "Payme", color: "from-cyan-300 to-teal-400" },
  { name: "Paynet", color: "from-orange-300 to-amber-500" },
  { name: "Uzcard", color: "from-indigo-300 to-blue-500" },
  { name: "Humo", color: "from-emerald-300 to-green-500" },
  { name: "Bank kartasi", color: "from-tg-300 to-tg-500" },
];

export default function Payments() {
  return (
    <section id="tolov" className="relative py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="chip">To‘lov usullari</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Istalgan karta bilan bemalol to‘lang
            </h2>
            <p className="mt-3 text-tg-100/75">
              O‘zbekistondagi barcha mashhur to‘lov tizimlari va bank kartalarini
              qabul qilamiz. To‘lov bir necha soniyada amalga oshadi — so‘ng
              obuna avtomatik faollashadi.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
              <p className="text-sm text-tg-100/85">
                <strong className="text-white">Xavfsiz to‘lov.</strong> Karta
                ma’lumotlaringiz rasmiy to‘lov tizimlari orqali himoyalangan
                holda o‘tadi — biz ularni saqlamaymiz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {METHODS.map((m) => (
              <div
                key={m.name}
                className="card group flex flex-col items-center justify-center gap-3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-tg-400/40"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${m.color} shadow-lg transition-transform group-hover:scale-110`}
                >
                  <CardIcon className="h-6 w-6 text-white" />
                </span>
                <span className="text-sm font-semibold text-tg-50">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
