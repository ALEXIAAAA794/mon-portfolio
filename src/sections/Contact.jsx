import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState("idle")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await emailjs.sendForm(
        "service_84wazsf",
        "template_brymiib",
        formRef.current,
        "PhwOWdBp1oxojCt5z"
      )
      setStatus("success")
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="card-glass rounded-3xl p-8 space-y-5">
              <div>
                <label className="text-xs text-white/30 tracking-widest uppercase block mb-2">Nom</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Ton nom"
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent/40 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-white/30 tracking-widest uppercase block mb-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="ton@email.com"
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent/40 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-white/30 tracking-widest uppercase block mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Decris ton projet..."
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent/40 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-accent text-black font-bold py-3.5 rounded-xl hover:bg-white transition-all duration-300 hover:scale-[1.02] font-display tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Envoi en cours..." : "Envoyer"}
              </button>

              {status === "success" && (
                <p className="text-center text-sm text-green-400">
                  Message envoye avec succes !
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-400">
                  Une erreur s'est produite. Reessaie.
                </p>
              )}
            </form>
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