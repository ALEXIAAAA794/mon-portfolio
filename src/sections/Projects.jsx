import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    num: "01",
    title: "CineConnect",
    description: "Plateforme qui rassemble les amoureux du cinema pour discuter autour des films.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Louange-03/cineconnect",
    demo: "https://web-vycl63vsmb37qxcne2jtjbmo.149.202.62.241.sslip.io/",
    featured: true,
  },
  {
    num: "02",
    title: "Fareno University",
    description: "Plateforme de gestion pedagogique d'un etablissement scolaire.",
    tech: ["Node.js", "Express", "HTML", "CSS"],
    github: "https://github.com/Koniza237/qwert",
    demo: null,
    featured: false,
  },
]

function ProjectCard({ p, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`relative card-glass rounded-3xl p-8 transition-all duration-500 group ${p.featured ? "lg:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${hovered ? "opacity-100" : "opacity-0"}`}
        style={{ boxShadow: "inset 0 0 60px rgba(200,168,233,0.04)" }}
      />

      <div className={`${p.featured ? "lg:grid lg:grid-cols-2 lg:gap-12" : ""} items-start`}>
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="font-display text-5xl font-extrabold text-white/5">{p.num}</span>
            <div className="flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-accent/50 hover:text-accent text-white/40 transition-all"
                title="GitHub"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-accent/50 hover:text-accent text-white/40 transition-all"
                  title="Demo"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
          <p className="text-white/40 leading-relaxed text-sm mb-6">{p.description}</p>
        </div>

        <div className={p.featured ? "flex items-end" : ""}>
          <div className="flex flex-wrap gap-2">
            {p.tech.map(t => (
              <span key={t} className="text-xs text-accent/80 border border-accent/20 bg-accent/5 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-display text-sm tracking-widest uppercase">03.</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">Projets</h2>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.num} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}