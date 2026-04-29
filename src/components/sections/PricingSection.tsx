import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const salaryData = [
  { level: "Стажёр / Junior", exp: "0–1 год", moscow: "60 000", regions: "40 000", color: "from-zinc-700 to-zinc-500" },
  { level: "Middle", exp: "2–4 года", moscow: "120 000", regions: "80 000", color: "from-zinc-600 to-zinc-400" },
  { level: "Senior", exp: "5–8 лет", moscow: "200 000", regions: "140 000", color: "from-zinc-500 to-zinc-300" },
  { level: "Ведущий / Lead", exp: "8+ лет", moscow: "280 000", regions: "190 000", color: "from-zinc-400 to-zinc-200" },
]

const bonuses = [
  { icon: "Briefcase", text: "Командировочные", value: "+15 000 – 30 000 ₽/мес" },
  { icon: "Star", text: "КТУ / Премии", value: "до 50% от оклада" },
  { icon: "Car", text: "Корпоративный транспорт", value: "у 60% работодателей" },
  { icon: "Heart", text: "ДМС и страховка", value: "у 75% работодателей" },
]

const topCities = [
  { city: "Москва", salary: 180000, bar: 100 },
  { city: "Санкт-Петербург", salary: 150000, bar: 83 },
  { city: "Казань", salary: 120000, bar: 67 },
  { city: "Екатеринбург", salary: 115000, bar: 64 },
  { city: "Новосибирск", salary: 110000, bar: 61 },
  { city: "Уфа", salary: 105000, bar: 58 },
]

export function PricingSection() {
  return (
    <section id="salary" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Доход</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-zinc-100 mb-4">
            Зарплаты в 2024 году
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            Инженер по автоматизации — одна из наиболее оплачиваемых технических специальностей в России.
          </p>
        </div>

        {/* Salary cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {salaryData.map((item, i) => (
            <motion.div
              key={item.level}
              className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-xs text-zinc-500 uppercase tracking-wide">{item.exp}</p>
              <h3 className="font-heading text-base font-semibold text-zinc-100">{item.level}</h3>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-display text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.moscow}
                  </span>
                  <span className="text-zinc-600 text-xs">₽ Москва</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-lg font-semibold text-zinc-500">{item.regions}</span>
                  <span className="text-zinc-600 text-xs">₽ регионы</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cities chart */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-display text-xl font-bold text-zinc-100 mb-6">Средняя зарплата по городам</h3>
            <div className="space-y-4">
              {topCities.map((c, i) => (
                <motion.div
                  key={c.city}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="text-zinc-400 text-sm w-32 shrink-0">{c.city}</span>
                  <div className="flex-1 h-7 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-zinc-600 to-zinc-300 rounded-full flex items-center justify-end pr-3"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                    >
                      <span className="text-zinc-900 text-xs font-bold">{(c.salary / 1000).toFixed(0)}к</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bonuses */}
          <div>
            <h3 className="font-display text-xl font-bold text-zinc-100 mb-6">Дополнительные льготы</h3>
            <div className="space-y-3">
              {bonuses.map((b, i) => (
                <motion.div
                  key={b.text}
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/50"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                    <Icon name={b.icon} size={16} className="text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-zinc-300 text-sm font-medium">{b.text}</p>
                    <p className="text-zinc-500 text-xs">{b.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
