import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "A propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-3 bg-[#060608]/90 backdrop-blur-xl border-b border-white/5" : "py-6"}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-display text-white font-bold text-xl tracking-tight">
          <span className="text-accent">A</span>lexia MEA
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l, i) => (
            <motion.li key={l.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a href={l.href} className="text-sm text-white/50 hover:text-white transition-colors tracking-wide">
                {l.label}
              </a>
            </motion.li>
          ))}
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <a href="#contact" className="bg-accent text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-white transition-colors">
              Me contacter
            </a>
          </motion.li>
        </ul>

        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open
              ? <path d="M4 4L18 18M4 18L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              : <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {open && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-[#060608]/95 backdrop-blur-xl border-b border-white/5 px-6 py-6 flex flex-col gap-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-white/60 hover:text-white text-lg" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
