import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Cursor from "./components/Cursor"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-[#060608] min-h-screen noise"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Cursor />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </motion.div>
    </AnimatePresence>
  )
}

export default App
