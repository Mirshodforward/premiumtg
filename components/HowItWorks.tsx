import { UserIcon, CardIcon, BoltIcon } from "./icons";

const STEPS = [
  {
    icon: UserIcon,
    step: "1",
    title: "Username yuboring",
    text: "Telegram username’ingizni kiriting. Akkauntga kirish, parol yoki kod kerak emas.",
  },
  {
    icon: CardIcon,
    step: "2",
    title: "To‘lovni amalga oshiring",
    text: "Click, Payme, Paynet, Uzcard yoki Humo orqali bir necha soniyada to‘lang.",
  },
  {
    icon: BoltIcon,
    step: "3",
    title: "10 soniyada faollashadi",
    text: "Premium obuna avtomatik ulanadi — telefoningizda darhol yulduzcha paydo bo‘ladi.",
  },
];

export default function HowItWorks() {
  return (
    <section id="qanday" className="relative py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip mx-auto">Qanday ishlaydi</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            3 oddiy qadam — tamom
          </h2>
          <p className="mt-3 text-tg-100/75">
            Ro‘yxatdan o‘tish ham, ilova o‘rnatish ham shart emas.
          </p>
        </div>

        <div className="relative mt-14 grid gap-8 lg:grid-cols-3">
          {/* bog'lovchi chiziq */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-tg-500/40 to-transparent lg:block" />

          {STEPS.map((s) => (
            <div key={s.step} className="relative text-center">
              <div className="relative mx-auto grid h-16 w-16 place-items-center">
                <span className="grid h-16 w-16 place-items-center rounded-3xl border border-tg-400/30 bg-ink-800 shadow-glow">
                  <s.icon className="h-8 w-8 text-tg-300" />
                </span>
                <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-tg-400 to-tg-600 text-sm font-bold text-white">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-tg-100/75">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
