import { motion } from "framer-motion"

const stats = [
  { value: "2+", label: "Annees d'experience" },
  { value: "5+", label: "Projets completes" },
  { value: "100%", label: "Investissement" },
]

const techStack = [
  { cat: "Frontend", items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion","HTML","CSS"] },
  { cat: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MySQL", "Python","PHP","REST API"] },
  { cat: "Outils & Design", items: ["Git", "Docker", "Figma", "Vercel", "Windows"] },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-display text-sm tracking-widest uppercase">02.</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">A propos</h2>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Passionnée par le developpement web, je crée des applications modernes et performantes.
              Mon approche combine design soigné et code propre pour livrer des experiences utilisateur de qualité.
            </p>
            <p className="text-white/40 text-base leading-relaxed">
              Toujours en veille technologique, j'apprends en permanence et j'aime relèver de nouveaux defis.
              Disponible pour des projets freelance ou des opportunités d'emploi.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <p className="font-display text-4xl font-extrabold text-accent mb-1">{s.value}</p>
                  <p className="text-white/30 text-xs tracking-wide uppercase">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {techStack.map((group, i) => (
              <motion.div
                key={group.cat}
                className="card-glass rounded-2xl p-5 transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <p className="text-accent text-xs tracking-widest uppercase font-semibold mb-3">{group.cat}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} className="text-white/60 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
