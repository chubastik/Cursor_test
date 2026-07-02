const guides = [
  {
    title: "Подключение оптики в квартиру",
    time: "15 мин",
    steps: [
      "Проверить маркировку порта в подъезде",
      "Протянуть кабель без перегибов < 25 мм",
      "Установить розетку / терминатор",
      "Замерить уровень на ONT",
    ],
  },
  {
    title: "Медный кабель UTP до абонента",
    time: "20 мин",
    steps: [
      "Обжать 568B на обоих концах",
      "Прозвонить пары тестером",
      "Подключить к порту коммутатора",
      "Проверить линк и скорость",
    ],
  },
  {
    title: "Активация услуги на объекте",
    time: "10 мин",
    steps: [
      "Сверить серийник CPE с заявкой",
      "Привязать MAC / SN в биллинге",
      "Запустить тест скорости",
      "Получить подпись клиента",
    ],
  },
];

export default function Guides() {
  return (
    <section id="guides" className="bg-slate-900/40 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
              Инструкции
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Пошаговые гайды
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Короткие сценарии для типовых выездов — можно открыть с телефона
            прямо у щитка или в квартире клиента.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <article
              key={guide.title}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-brand-300">
                  Сценарий {index + 1}
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                  ~{guide.time}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">{guide.title}</h3>
              <ol className="mt-5 space-y-3">
                {guide.steps.map((step, stepIndex) => (
                  <li
                    key={step}
                    className="flex gap-3 text-sm text-slate-300"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-bold text-brand-300">
                      {stepIndex + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
