const STATS = [
  { value: "10s", label: "O‘rtacha yetkazish vaqti" },
  { value: "15 000+", label: "Faollashtirilgan obuna" },
  { value: "4.9★", label: "Mijozlar bahosi" },
  { value: "24/7", label: "Qo‘llab-quvvatlash" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02]">
      <div className="container-x grid grid-cols-2 gap-y-8 py-8 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-extrabold gradient-text sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-tg-100/70 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
