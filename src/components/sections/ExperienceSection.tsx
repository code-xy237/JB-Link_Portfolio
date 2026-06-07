import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Star } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { experiences } from '@/data/portfolio'

const typeConfig = {
  work: { Icon: Briefcase, color: '#00d4ff' },
  education: { Icon: GraduationCap, color: '#00b8a9' },
  achievement: { Icon: Star, color: '#f59e0b' },
}

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="experience" ref={ref} className="py-20 sm:py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-accent-cyan tracking-[0.2em] uppercase">04 / Expérience</span>
            <div className="flex-1 max-w-16 h-px bg-border-accent" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-text-primary">Parcours Professionnel</h2>
        </motion.div>

        {/* Timeline — mobile: left aligned, desktop: alternating */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-border-default" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const { Icon, color } = typeConfig[exp.type]
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.12 * i, duration: 0.6, ease: 'easeOut' }}
                  className="relative flex items-start gap-4 sm:gap-6 pl-12 sm:pl-14"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-0 z-10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 bg-bg-primary"
                      style={{ borderColor: color, boxShadow: `0 0 10px ${color}25` }}>
                      <Icon size={15} style={{ color }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group bg-bg-card border border-border-default rounded-xl p-4 sm:p-5 hover:border-border-accent transition-all duration-300 w-full min-w-0">
                    <span className="inline-block font-mono text-[10px] font-medium px-2 py-0.5 rounded-sm mb-2"
                      style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}>
                      {exp.period}
                    </span>
                    <h3 className="font-display font-bold text-sm text-text-primary mb-0.5 group-hover:text-accent-cyan transition-colors leading-snug">
                      {exp.title}
                    </h3>
                    <p className="font-body text-xs text-text-muted mb-3">{exp.company}</p>
                    <p className="font-body text-xs text-text-secondary leading-relaxed mb-3">{exp.description}</p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 font-body text-xs text-text-muted">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
