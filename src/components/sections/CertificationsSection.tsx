import { motion } from 'framer-motion'
import { Award, Clock, Bookmark, ExternalLink } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { certifications } from '@/data/portfolio'

const statusConfig = {
  earned: { label: 'Obtenu', color: '#00d4ff', Icon: Award },
  'in-progress': { label: 'En cours', color: '#f59e0b', Icon: Clock },
  planned: { label: 'Planifié', color: '#4a5a6b', Icon: Bookmark },
}

export function CertificationsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="certifications" ref={ref} className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-accent-cyan tracking-[0.2em] uppercase">05 / Certifications</span>
            <div className="flex-1 max-w-16 h-px bg-border-accent" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-text-primary">Certifications</h2>
          <p className="mt-2 font-body text-sm text-text-muted max-w-md">
            Une collection croissante de certifications validant l'expertise en réseaux, sécurité et cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const { label, color, Icon } = statusConfig[cert.status]
            return (
              <motion.div key={cert.id}
                initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="group bg-bg-card border border-border-default rounded-xl p-5 sm:p-6 hover:border-border-accent transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm font-mono text-[10px]"
                    style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}>
                    <Icon size={10} />{label}
                  </div>
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="font-display font-semibold text-sm text-text-primary mb-1 leading-snug group-hover:text-accent-cyan transition-colors">{cert.title}</h3>
                <p className="font-body text-xs text-text-muted mb-1">{cert.issuer}</p>
                <p className="font-mono text-[10px] text-text-muted">{cert.date}</p>
              </motion.div>
            )
          })}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + certifications.length * 0.08 }}
            className="bg-bg-card border border-dashed border-border-default rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3 min-h-[160px]"
          >
            <div className="w-9 h-9 rounded-full border border-border-default flex items-center justify-center text-text-muted text-lg">+</div>
            <p className="font-body text-xs text-text-muted">D'autres certifications à venir</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
