import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"
import { ArrowRight, Cpu } from "lucide-react"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-transparent" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8">
          <Icon name="Cpu" size={16} className="text-zinc-400" />
          <span className="text-sm text-zinc-400">Профессия будущего · Востребованность растёт каждый год</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-zinc-100 block">Инженер по</span>
          <span className="bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            автоматизации
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Профессия, которая управляет производствами, роботами и умными системами. Всё о карьере, обучении и зарплатах — в одной инфографике.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#features">
            <LiquidCtaButton>Изучить профессию</LiquidCtaButton>
          </a>
          <a
            href="#salary"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Смотреть зарплаты</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            { value: "180 000 ₽", label: "Средняя зарплата", sub: "в Москве" },
            { value: "40 000+", label: "Вакансий", sub: "в России" },
            { value: "×3", label: "Рост спроса", sub: "за 5 лет" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-display font-bold text-zinc-100">{stat.value}</span>
              <span className="text-xs text-zinc-400 mt-1">{stat.label}</span>
              <span className="text-xs text-zinc-600">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
