import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-display text-sm tracking-widest uppercase">04.</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">Contact</h2>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Travaillons
              <br />
              <span className="text-accent">ensemble.</span>
            </p>
            <p className="text-white/40 text-lg leading-relaxed mb-10">
              Tu as un projet ? Une idee ? Une opportunite ? N'hesite pas a me contacter.
            </p>

            <div className="flex flex-col gap-4">
              <a href="mailto:meayambaalexiachele@gmail.com" className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group">
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:text-accent transition-all text-sm">@</span>
                meayambaalexiachele@gmail.com
              </a>
              <a href="https://linkedin.com/in/alexia-chele-mea-yamba" className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group">
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:text-accent transition-all text-xs">in</span>
                Alexia chele Mea yamba
              </a>
              <a href="https://github.com/ALEXIAAAA794" className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group">
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:text-accent transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </span>
                ALEXIAAAA794
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-sm font-display">Alexia's Portfolio 2026</p>
        <p className="text-white/20 text-sm">Fait avec React + Vite + Tailwind</p>
      </div>
    </section>
  )
}