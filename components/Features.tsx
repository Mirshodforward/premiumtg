import {
  BoltIcon,
  ShieldIcon,
  TagIcon,
  CardIcon,
  UserIcon,
  HeadsetIcon,
} from "./icons";

const FEATURES = [
  {
    icon: BoltIcon,
    title: "10 soniyada avtomatik",
    text: "To‘lovdan so‘ng obuna avtomatik faollashadi. Kutish, operator bilan yozishish yoki qo‘lda tasdiqlash kerak emas.",
  },
  {
    icon: TagIcon,
    title: "Eng arzon narx",
    text: "Bozordagi eng past narxlar. 3 oydan 12 oygacha — har bir paket uchun tejamkor taklif.",
  },
  {
    icon: ShieldIcon,
    title: "Xavfsiz va ishonchli",
    text: "Premium uchun faqat username yetarli. Akkauntingizga kirish, parol yoki kodni so‘ramaymiz.",
  },
  {
    icon: CardIcon,
    title: "Istalgan karta",
    text: "Click, Payme, Paynet, Uzcard, Humo va boshqa barcha O‘zbekiston bank kartalari qabul qilinadi.",
  },
  {
    icon: UserIcon,
    title: "Oddiy va qulay",
    text: "Username yozasiz, to‘lov qilasiz — tamom. Hech qanday murakkab sozlama yoki ilova kerak emas.",
  },
  {
    icon: HeadsetIcon,
    title: "Jonli qo‘llab-quvvatlash",
    text: "Savol tug‘ilsa @StarsPaymeeSupport orqali tezkor yordam olasiz — kunu-tun aloqadamiz.",
  },
];

export default function Features() {
  return (
    <section id="imkoniyatlar" className="relative py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip mx-auto">Nega Premiumtg?</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Eng tez, arzon va qulay yo‘l
          </h2>
          <p className="mt-3 text-tg-100/75">
            Telegram Premiumni sotib olishning eng zamonaviy usuli — minglab
            mijozlar bizni tanladi.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-tg-400/40 hover:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-tg-500/20 to-tg-400/10 text-tg-300 ring-1 ring-tg-400/20 transition-transform group-hover:scale-110">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tg-100/75">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
