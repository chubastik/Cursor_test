const tools = [
  {
    icon: "🔌",
    title: "Диагностика линии",
    description:
      "Пошаговая проверка оптики и меди: замеры, LOS, линк, потери в коннекторах.",
    tag: "ONT / ONU",
  },
  {
    icon: "🧰",
    title: "Обжим и сварка",
    description:
      "Схемы RJ-45, SC/APC, правила укладки кабеля и контроль качества соединения.",
    tag: "Кабель",
  },
  {
    icon: "📡",
    title: "Настройка CPE",
    description:
      "Базовая настройка роутера, VLAN, PPPoE и проверка скорости после монтажа.",
    tag: "Роутер",
  },
  {
    icon: "📋",
    title: "Акт и закрытие",
    description:
      "Шаблоны актов, фотоотчёт, подпись клиента и передача заявки в NOC.",
    tag: "Документы",
  },
  {
    icon: "⚡",
    title: "Типовые сбои",
    description:
      "Быстрые решения: нет линка, слабый сигнал, ошибка авторизации, Wi‑Fi не раздаёт.",
    tag: "Troubleshoot",
  },
  {
    icon: "🗺️",
    title: "Карта узлов",
    description:
      "Адреса муфт, коллекторов и точек доступа с привязкой к дому и подъезду.",
    tag: "Объекты",
  },
];

export default function Tools() {
  return (
    <section id="tools" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Инструменты
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Всё для работы на объекте
          </h2>
          <p className="mt-4 text-slate-400">
            Собрали в одном месте то, что чаще всего нужно монтажнику при
            подключении абонента.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.title}
              className="group rounded-2xl border border-white/10 bg-slate-850/50 p-6 transition hover:border-brand-400/30 hover:bg-slate-850 hover:shadow-glow"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-3xl">{tool.icon}</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {tool.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {tool.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
