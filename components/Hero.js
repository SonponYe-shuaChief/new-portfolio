import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

export default function Hero(){
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="container-wide">
        <div className="text-center">
          <Parallax speed={-10}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold">Sonpon Ye-shua Chief</h1>
              <p className="mt-4 text-xl md:text-2xl text-[var(--text)]/90">Computer Science student — software development, AI integration & UI/UX</p>
              <p className="mt-3 text-sm text-[var(--text)]/70">University of Ghana • BSc Computer Science (Expected 2027) • GPA: 3.6</p>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  )
}
