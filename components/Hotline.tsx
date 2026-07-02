export default function Hotline() {
  return (
    <section id="hotline" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-brand-400/20 bg-gradient-to-r from-brand-600/20 via-slate-900 to-slate-950 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
                Горячая линия
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Нужна помощь на объекте?
              </h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Диспетчер техподдержки поможет с активацией порта, проверкой
                VLAN, зависшей заявкой или нестандартной разводкой в подъезде.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:88001234567"
                  className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  <span>📞</span>
                  8 800 123-45-67
                </a>
                <a
                  href="mailto:support@fibertech.local"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  <span>✉️</span>
                  support@fibertech.local
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <h3 className="font-semibold text-white">Что подготовить перед звонком</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Номер заявки или договора</li>
                <li>• Адрес и номер подъезда / квартиры</li>
                <li>• Серийник ONT / роутера</li>
                <li>• Фото порта в муфте и экрана с уровнем сигнала</li>
              </ul>
              <p className="mt-6 text-xs text-slate-500">
                Демо-контакты для учебного проекта. Замените на реальные перед
                публикацией.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
