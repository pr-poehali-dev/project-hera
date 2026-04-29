import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const tasks = [
  {
    icon: "Settings",
    title: "Программирование ПЛК",
    desc: "Настройка и программирование промышленных контроллеров (Siemens, Allen-Bradley, Mitsubishi) для управления оборудованием.",
  },
  {
    icon: "Activity",
    title: "SCADA-системы",
    desc: "Разработка и обслуживание систем диспетчерского управления и сбора данных на производстве.",
  },
  {
    icon: "GitBranch",
    title: "Проектирование схем",
    desc: "Разработка электрических схем, схем автоматизации и технической документации.",
  },
  {
    icon: "Wifi",
    title: "Промышленные сети",
    desc: "Настройка протоколов Profibus, Profinet, Modbus, EtherNet/IP для связи оборудования.",
  },
  {
    icon: "Bot",
    title: "Робототехника",
    desc: "Программирование промышленных роботов (KUKA, ABB, Fanuc) для сварки, сборки, перемещения.",
  },
  {
    icon: "Shield",
    title: "Техническая безопасность",
    desc: "Разработка систем аварийной защиты, блокировок и обеспечение промышленной безопасности.",
  },
]

const workplaces = [
  { name: "Нефтегазовая отрасль", share: 22 },
  { name: "Машиностроение", share: 19 },
  { name: "Энергетика", share: 17 },
  { name: "Пищевая промышленность", share: 14 },
  { name: "Фармацевтика", share: 11 },
  { name: "Металлургия", share: 10 },
  { name: "Другие отрасли", share: 7 },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Чем занимается</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-zinc-100 mb-4">
            Задачи инженера по автоматизации
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            Специалист соединяет физический мир производства с цифровыми системами управления.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {tasks.map((task, i) => (
            <motion.div
              key={task.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mb-4">
                    <Icon name={task.icon} size={20} className="text-zinc-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-zinc-100 mb-2">{task.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{task.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Where to work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Где работать</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Распределение по отраслям
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            {workplaces.map((w, i) => (
              <motion.div
                key={w.name}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <span className="text-zinc-400 text-sm w-44 shrink-0">{w.name}</span>
                <div className="flex-1 h-6 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-zinc-500 to-zinc-300 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${w.share}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.07, ease: "easeOut" }}
                  />
                </div>
                <span className="text-zinc-300 text-sm font-semibold w-10 text-right">{w.share}%</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "Factory", label: "Заводы и комбинаты", sub: "Крупнейший сектор" },
              { icon: "Flame", label: "Нефтяные компании", sub: "Роснефть, Лукойл, Газпром" },
              { icon: "Zap", label: "Энергетика", sub: "РусГидро, Россети" },
              { icon: "Building2", label: "Интеграторы АСУ ТП", sub: "Проектные компании" },
            ].map((item) => (
              <Card key={item.label} className="border-zinc-800/50 bg-zinc-900/50 rounded-2xl">
                <CardContent className="p-4 flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center">
                    <Icon name={item.icon} size={18} className="text-zinc-400" />
                  </div>
                  <p className="text-zinc-100 text-sm font-semibold leading-tight">{item.label}</p>
                  <p className="text-zinc-600 text-xs">{item.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
