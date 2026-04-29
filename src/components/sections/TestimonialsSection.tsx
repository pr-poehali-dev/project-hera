import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Начинал с нуля после техникума. За 3 года вырос до Senior-инженера. Рынок реально голодает по специалистам — работу нашёл за неделю.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Алексей Морозов",
    role: "Senior-инженер АСУ ТП · Газпром",
  },
  {
    text: "Перешла из электрика в инженеры по автоматизации. Зарплата выросла в 2,5 раза. Советую всем, кто хочет развиваться в промышленности.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Ирина Козлова",
    role: "Инженер-технолог · СИБУР",
  },
  {
    text: "Программирование роботов KUKA — это то, о чём я мечтал. Сейчас запускаем новый завод, и я в главной команде автоматизаторов.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий Фёдоров",
    role: "Robotics Engineer · Hyundai Mobis",
  },
  {
    text: "Специальность позволяет работать в любой точке России. Переехал в Сибирь — и зарплата с вахтовыми стала 250 тысяч в месяц.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Сергей Антонов",
    role: "Инженер АСУ · Норникель",
  },
  {
    text: "Закончил МГТУ, сразу пошёл в проектный институт. Через год уже веду самостоятельные проекты. Перспективы огромные.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Никита Воробьёв",
    role: "Проектировщик АСУ ТП · ЭТМ",
  },
  {
    text: "Открыл собственное ИП по интеграции систем автоматизации. Клиентов больше, чем успеваю брать. Этот рынок только растёт.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    name: "Андрей Смирнов",
    role: "Фриланс-интегратор · ИП",
  },
  {
    text: "После курсов по Siemens TIA Portal получил работу через 2 месяца. Работодатели ценят практические навыки больше диплома.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Мария Николаева",
    role: "Инженер КИПиА · Еврохим",
  },
  {
    text: "Работаю удалённо как консультант по SCADA-системам. Несколько клиентов одновременно, гибкий график — мечта технаря.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Павел Кириллов",
    role: "Консультант SCADA · Freelance",
  },
  {
    text: "Вырос от монтажника до руководителя отдела автоматизации за 6 лет. Этот путь реален для любого, кто готов учиться.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Наталья Захарова",
    role: "Начальник отдела АСУ · РусАгро",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const companies = ["Газпром", "Роснефть", "СИБУР", "Норникель", "Росатом", "РусАгро", "Лукойл", "ФосАгро"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Истории карьеры</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Говорят специалисты
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Реальный опыт инженеров по автоматизации из разных отраслей.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Специалисты работают в ведущих компаниях России</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 20, repeat: Infinity, ease: "linear" } }}
            >
              {[...companies, ...companies].map((company, index) => (
                <span
                  key={`${company}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {company}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
