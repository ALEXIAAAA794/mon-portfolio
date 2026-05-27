import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import photo from "../assets/photo.jpeg"

function AnimatedText({ text }) {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.03 + 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

const skills = ["React", "Node.js", "TypeScript", "Express.js", "PostgreSQL", "Tailwind", "React", "Node.js", "TypeScript", "PHP", "MySQL", "Tailwind"]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    let raf
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226, 255, 93, ${p.opacity})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize) }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e2ff5d] opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8 text-xs text-white/40 tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow inline-block" />
              Disponible pour vos projets
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-6xl font-extrabold text-white leading-none mb-6">
              <div className="overflow-hidden"><AnimatedText text="Bonjour!," /></div>
              <div className="overflow-hidden">
                <motion.span
                  className="text-accent inline-block"
                  initial={{ y: "50%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  je suis
                </motion.span>
              </div>
              <div className="overflow-hidden"><AnimatedText text="Alexia MEA." /></div>
            </h1>

            <motion.p
              className="text-white/40 text-lg max-w-md leading-relaxed mb-10"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Developpeuse Full-Stack. Je construis des interfaces modernes et des applications performantes.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <a href="#projects" className="bg-accent text-black font-bold px-8 py-3.5 rounded-full hover:bg-white transition-all duration-300 hover:scale-105">
                Voir mes projets
              </a>
              <a href="#contact" className="border border-white/15 text-white/70 hover:text-white hover:border-white/40 px-8 py-3.5 rounded-full transition-all duration-300">
                Me contacter
              </a>
            </motion.div>
          </div>

          {/* Right — profile card */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Spinning ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="animate-spin-slow w-[340px] h-[340px] opacity-20" viewBox="0 0 340 340" fill="none">
                  <circle cx="170" cy="170" r="160" stroke="#902192" strokeWidth="1" strokeDasharray="8 16" />
                </svg>
              </div>

              {/* Photo placeholder */}
              <div className="w-64 h-64 rounded-full glow-accent border border-accent/20 animate-float relative z-10 overflow-hidden">
  <img src={photo} alt="Alexia" className="w-full h-full object-cover object-top" />
</div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-8 card-glass rounded-2xl px-4 py-3 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <p className="text-xs text-white/40 mb-1">Stack principale</p>
                <p className="text-white font-semibold text-sm font-display">React + Node.js</p>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-8 card-glass rounded-2xl px-4 py-3 z-20"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <p className="text-xs text-white/40 mb-1">Projets</p>
                <p className="text-accent font-black text-xl font-display">5+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee skills */}
      <div className="relative z-10 overflow-hidden border-t border-b border-white/5 py-4 mt-auto">
        <div className="flex animate-marquee whitespace-nowrap">
          {skills.map((s, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 text-white/20 text-sm tracking-widest uppercase font-display">
              {s}
              <span className="text-accent text-xs">*</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
