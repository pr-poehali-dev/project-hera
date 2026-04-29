import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"
import Icon from "@/components/ui/icon"

const educationPaths = [
  {
    icon: "GraduationCap",
    title: "Высшее образование",
    duration: "4–5 лет",
    price: "Бесплатно (бюджет)",
    highlight: false,
    items: [
      "Специальность 15.03.04 «Автоматизация»",
      "МГТУ им. Баумана, СПбГЭТУ",
      "Глубокая теоретическая база",
      "Диплом инженера",
      "Военная кафедра",
    ],
    cta: "Узнать о поступлении",
  },
  {
    icon: "BookOpen",
    title: "Колледж / Техникум",
    duration: "2–3 года",
    price: "Бесплатно (бюджет)",
    highlight: true,
    items: [
      "Специальность «КИПиА»",
      "Практические навыки с 1-го года",
      "Быстрый вход в профессию",
      "Можно совмещать с работой",
      "База для дальнейшего роста",
    ],
    cta: "Найти колледж",
  },
  {
    icon: "Monitor",
    title: "Курсы и переквалификация",
    duration: "3–12 месяцев",
    price: "От 30 000 ₽",
    highlight: false,
    items: [
      "Siemens TIA Portal",
      "Курсы по SCADA (Wonderware, IGNITION)",
      "Онлайн + практика на оборудовании",
      "Быстрый старт для смежников",
      "Сертификаты от вендоров",
    ],
    cta: "Смотреть курсы",
  },
]

const skills = [
  { name: "ПЛК (Siemens, Allen-Bradley)", level: 95 },
  { name: "SCADA / HMI системы", level: 88 },
  { name: "AutoCAD / EPLAN", level: 75 },
  { name: "Промышленные сети", level: 80 },
  { name: "Python / C для АСУ", level: 60 },
  { name: "Робототехника (KUKA, ABB)", level: 55 },
]

export function CtaSection() {
  return (
    <>
      {/* Education section */}
      <section id="education" className="px-6 py-24 bg-zinc-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Путь в профессию</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Где учиться
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
              Три пути в профессию — выберите подходящий под ваш возраст и опыт.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {educationPaths.map((path, i) => (
              <motion.div
                key={path.title}
                className={`p-8 rounded-2xl border flex flex-col h-full ${
                  path.highlight ? "bg-zinc-100 border-zinc-100" : "bg-zinc-900/50 border-zinc-800/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${path.highlight ? "bg-zinc-200" : "bg-zinc-800"}`}>
                    <Icon name={path.icon} size={20} className={path.highlight ? "text-zinc-700" : "text-zinc-400"} />
                  </div>
                  <h3 className={`font-heading text-xl font-semibold mb-1 ${path.highlight ? "text-zinc-900" : "text-zinc-100"}`}>
                    {path.title}
                  </h3>
                  <p className={`text-sm ${path.highlight ? "text-zinc-600" : "text-zinc-500"}`}>
                    Срок: {path.duration}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`font-display text-3xl font-bold ${path.highlight ? "text-zinc-900" : "text-zinc-100"}`}>
                    {path.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {path.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon name="Check" size={16} className={`shrink-0 mt-0.5 ${path.highlight ? "text-zinc-700" : "text-zinc-400"}`} />
                      <span className={`text-sm ${path.highlight ? "text-zinc-700" : "text-zinc-400"}`}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                    path.highlight
                      ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                      : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                  }`}
                >
                  {path.cta}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Skills chart */}
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Навыки</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Ключевые компетенции
            </h2>
            <p className="text-zinc-500 text-balance">Что нужно знать инженеру по автоматизации</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="text-zinc-400 text-sm w-52 shrink-0">{skill.name}</span>
                <div className="flex-1 h-5 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-zinc-600 to-zinc-200 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                  />
                </div>
                <span className="text-zinc-400 text-sm w-10 text-right">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Готовы стать инженером?
          </h2>
          <p className="text-lg text-zinc-500 mb-10 text-balance">
            Автоматизация — это будущее промышленности. Начните путь в профессию с высоким спросом и достойной зарплатой.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#education">
              <LiquidCtaButton>Начать обучение</LiquidCtaButton>
            </a>
            <a
              href="#salary"
              className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <span>Смотреть зарплаты</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
