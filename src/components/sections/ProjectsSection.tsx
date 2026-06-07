import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { projects } from '@/data/portfolio'

const categoryLabels: Record<string, string> = {
  all: 'Tous', network: 'Réseau', cybersecurity: 'Sécurité',
  frontend: 'Front-End', backend: 'Back-End', python: 'Python', fullstack: 'Full Stack',
}
const categoryColors: Record<string, string> = {
  network: '#00d4ff', cybersecurity: '#00b8a9', frontend: '#0066ff',
  backend: '#6366f1', python: '#f59e0b', fullstack: '#a8b2c1',
}
const gradients: Record<string, string> = {
  network: 'from-cyan-500/20 to-blue-500/5',
  cybersecurity: 'from-teal-500/20 to-cyan-500/5',
  frontend: 'from-blue-500/20 to-cyan-500/5',
  backend: 'from-indigo-500/20 to-blue-500/5',
  python: 'from-yellow-500/20 to-orange-500/5',
  fullstack: 'from-slate-500/10 to-slate-700/5',
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const accent = categoryColors[project.category] ?? '#00d4ff'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-bg-card border border-border-default rounded-xl overflow-hidden hover:border-border-accent transition-all duration-300 flex flex-col"
    >
      {/* Thumb */}
      <div className={`relative h-36 sm:h-44 bg-gradient-to-br ${gradients[project.category]} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, ${accent} 1px, transparent 0)`, backgroundSize: '20px 20px' }}
        />
        <div className="absolute top-3 left-3 px-2 py-1 rounded-sm font-mono text-[9px] font-medium"
          style={{ background: `${accent}20`, border: `1px solid ${accent}40`, color: accent }}>
          {categoryLabels[project.category]}
        </div>
        <div className="absolute top-3 right-3 font-mono text-[9px] text-text-muted">{project.year}</div>
        {project.featured && (
          <div className="absolute bottom-3 right-3 w-5 h-5 rounded-full flex items-center justify-center bg-accent-cyan/20 border border-accent-cyan/40">
            <span className="text-accent-cyan text-[8px]">★</span>
          </div>
        )}
        <motion.div className="absolute inset-0 flex items-center justify-center gap-3"
          animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.2 }}
          style={{ background: 'rgba(4,6,8,0.85)' }}
        >
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-accent-cyan/20 border border-white/20 hover:border-accent-cyan/40 text-text-secondary hover:text-accent-cyan transition-all"
              onClick={(e) => e.stopPropagation()}>
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-accent-cyan/20 border border-white/20 hover:border-accent-cyan/40 text-text-secondary hover:text-accent-cyan transition-all"
              onClick={(e) => e.stopPropagation()}>
              <ExternalLink size={16} />
            </a>
          )}
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-sm text-text-primary mb-2 group-hover:text-accent-cyan transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="font-body text-xs text-text-muted leading-relaxed mb-3 flex-1">{project.description}</p>
        <ul className="mb-3 space-y-1">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 font-mono text-[10px] text-text-muted">
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent }} />
              {f}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-sm font-mono text-[9px] text-text-muted border border-border-default">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-3 border-t border-border-default">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-[10px] text-text-muted hover:text-accent-cyan transition-colors">
              <Github size={11} /> Code source
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-[10px] text-text-muted hover:text-accent-cyan transition-colors">
              <ArrowUpRight size={11} /> Démo live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))]
  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-accent-cyan tracking-[0.2em] uppercase">03 / Projets</span>
            <div className="flex-1 max-w-16 h-px bg-border-accent" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-text-primary">Réalisations Sélectionnées</h2>
        </motion.div>

        {/* Filters — scrollable sur mobile */}
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-2"
        >
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-sm font-mono text-xs transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                activeFilter === cat
                  ? 'bg-accent-cyan/15 border border-accent-cyan/40 text-accent-cyan'
                  : 'bg-transparent border border-border-default text-text-muted hover:border-border-hover'
              }`}
            >
              {categoryLabels[cat] ?? cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
