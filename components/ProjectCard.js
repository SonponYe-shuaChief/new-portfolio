import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }){
  return (
    <motion.a href="#" whileHover={{ y:-6 }} className="block p-6 rounded-lg border border-transparent hover:border-[rgba(0,127,95,0.06)] bg-white shadow-sm">
      <h3 className="font-semibold text-lg text-[var(--text)]">{project.title}</h3>
      <p className="mt-2 text-sm text-[var(--text)]/80">{project.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 bg-[var(--text)]/6 text-[var(--text)] rounded">{t}</span>
        ))}
      </div>
    </motion.a>
  )
}
