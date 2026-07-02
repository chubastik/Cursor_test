const checklistItems = [
  "Паспорт заявки и доступ в подъезд согласован",
  "Рефлектометр / тестер и обжимной инструмент в комплекте",
  "Маркировка кабеля совпадает с портом в муфте",
  "Уровень сигнала в допустимых пределах",
  "CPE привязан, интернет и Wi‑Fi проверены",
  "Фото объекта и акт загружены в систему",
];

export default function Checklist() {
  return (
    <section id="checklist" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-850 to-slate-950">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                Чек-лист
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Перед закрытием заявки
              </h2>
              <p className="mt-4 text-slate-400">
                Пройдитесь по пунктам на объекте — это снижает повторные выезды
                и ускоряет приёмку диспетчером.
              </p>

              <ul className="mt-8 space-y-4">
                {checklistItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-brand-400/40 text-xs text-brand-300">
                      ✓
                    </span>
                    <span className="text-sm text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 bg-brand-500/5 p-8 sm:p-10 lg:border-l lg:border-t-0">
              <h3 className="text-lg font-semibold text-white">
                Нормы сигнала для GPON
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Оптимально", range: "−15 … −25 dBm", tone: "text-emerald-400" },
                  { label: "Допустимо", range: "−8 … −27 dBm", tone: "text-brand-300" },
                  { label: "Критично", range: "< −28 dBm", tone: "text-rose-400" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-xl bg-slate-950/50 px-4 py-3"
                  >
                    <span className="text-sm text-slate-300">{row.label}</span>
                    <span className={`text-sm font-semibold ${row.tone}`}>
                      {row.range}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
                <p className="text-sm text-amber-100">
                  Если уровень в красной зоне — не закрывайте заявку. Позвоните
                  на линию NOC и приложите фото муфты с маркировкой.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
