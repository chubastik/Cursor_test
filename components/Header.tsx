const navItems = [
  { href: "#tools", label: "Инструменты" },
  { href: "#guides", label: "Инструкции" },
  { href: "#checklist", label: "Чек-лист" },
  { href: "#hotline", label: "Горячая линия" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-lg font-bold text-slate-950 shadow-glow">
            FT
          </span>
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              FiberTech Support
            </p>
            <p className="text-xs text-slate-400">Портал монтажника</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-brand-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#hotline"
          className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
        >
          Связаться
        </a>
      </div>
    </header>
  );
}
