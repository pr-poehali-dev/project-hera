import Icon from "@/components/ui/icon"

const footerLinks = {
  info: [
    { label: "О профессии", href: "#features" },
    { label: "Зарплаты", href: "#salary" },
    { label: "Где учиться", href: "#education" },
    { label: "Истории карьеры", href: "#testimonials" },
  ],
  resources: [
    { label: "HeadHunter", href: "https://hh.ru" },
    { label: "Habr Career", href: "https://career.habr.com" },
    { label: "Superjob", href: "https://superjob.ru" },
    { label: "Курсы Stepik", href: "https://stepik.org" },
  ],
  contacts: [
    { label: "Telegram-канал", href: "#" },
    { label: "VK-группа", href: "#" },
    { label: "YouTube", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-xl font-semibold text-zinc-100">
              AutoEngineer
            </a>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Полная инфографика о профессии инженера по автоматизации. Всё о карьере, обучении и зарплатах.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Навигация</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Найти работу</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Сообщество</h4>
            <ul className="space-y-3">
              {footerLinks.contacts.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} AutoEngineer. Данные актуальны на 2024 год.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Telegram">
              <Icon name="Send" size={20} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="YouTube">
              <Icon name="Youtube" size={20} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="VK">
              <Icon name="Users" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
