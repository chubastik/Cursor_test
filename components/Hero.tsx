export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-40" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Онлайн 24/7 для бригад
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Техподдержка{" "}
            <span className="bg-gradient-to-r from-brand-300 to-cyan-200 bg-clip-text text-transparent">
              монтажников связи
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Помогаем техникам на объекте: подключение оптики и кабеля,
            диагностика линии, настройка CPE и быстрые решения типовых
            проблем при подключении интернета.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#guides"
              className="rounded-xl bg-brand-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-brand-400"
            >
              Открыть инструкции
            </a>
            <a
              href="#checklist"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Чек-лист выезда
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {[
              { value: "< 3 мин", label: "среднее время ответа" },
              { value: "120+", label: "типовых кейсов" },
              { value: "24/7", label: "линия для бригад" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-white">{stat.value}</dt>
                <dd className="mt-1 text-xs text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-slate-850/80 p-6 shadow-card backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-300">
                Активная заявка #4821
              </p>
              <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-300">
                На объекте
              </span>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Прокладка кабеля до квартиры",
                  status: "Выполнено",
                  color: "text-emerald-400",
                },
                {
                  step: "2",
                  title: "Сварка / обжим коннектора",
                  status: "В работе",
                  color: "text-brand-300",
                },
                {
                  step: "3",
                  title: "Активация порта и тест линии",
                  status: "Ожидает",
                  color: "text-slate-400",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-2xl border border-white/5 bg-slate-900/60 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-sm font-bold text-brand-300">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className={`mt-1 text-sm ${item.color}`}>{item.status}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-brand-500/10 p-4">
              <p className="text-sm text-brand-200">
                Совет диспетчера: проверьте уровень сигнала на ONT до
                подключения роутера — норма от −8 до −27 dBm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
