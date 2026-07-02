export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-white">FiberTech Support</p>
          <p className="mt-1 text-sm text-slate-500">
            Портал технической поддержки для монтажников связи
          </p>
        </div>
        <p className="text-sm text-slate-500">
          Учебный проект · Летняя школа · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
