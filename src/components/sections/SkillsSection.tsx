import { useState } from 'react'
import { motion } from 'framer-motion'
import type { LucideProps } from 'lucide-react'
import { Network, Shield, Code2, Server, Terminal, Wrench } from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skillCategories } from '@/data/portfolio'

type LucideIcon = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>
const IconMap: Record<string, LucideIcon> = { Network, Shield, Code2, Server, Terminal, Wrench }

function SkillRing({ level, color, size = 52 }: { level: number; color: string; size?: number }) {
  const r = (size - 6) / 2
  const circ = 2 * Math.PI * r
  const dash = (level / 100) * circ
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={3} />
      <motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={3}
        strokeLinecap="round" strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }} animate={{ strokeDashoffset: circ - dash }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      />
    </svg>
  )
}

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="font-body text-xs text-text-secondary truncate mr-2">{name}</span>
        <span className="font-mono text-xs flex-shrink-0" style={{ color }}>{level}%</span>
      </div>
      <div className="h-0.5 bg-border-default rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }} animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find((c) => c.id === activeId)!

  return (
    <section id="skills" ref={ref} className="py-20 sm:py-32 relative">
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-accent-cyan tracking-[0.2em] uppercase">02 / Compétences</span>
            <div className="flex-1 max-w-16 h-px bg-border-accent" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-text-primary">Arsenal Technique</h2>
        </motion.div>

        {/* Tabs — scrollable sur mobile */}
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-2">
          {skillCategories.map((cat, i) => {
            const Icon = IconMap[cat.icon]
            const isActive = cat.id === activeId
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.06 }}
                onClick={() => setActiveId(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-sm text-xs font-mono font-medium border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  isActive ? 'text-text-primary' : 'border-border-default text-text-muted hover:border-border-hover'
                }`}
                style={isActive ? { borderColor: cat.color, background: `${cat.color}18` } : {}}
              >
                {Icon && <Icon size={12} color={isActive ? cat.color : undefined} />}
                {cat.label}
              </motion.button>
            )
          })}
        </div>

        {/* Panel — stack sur mobile, grid sur desktop */}
        <motion.div key={activeId} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start"
        >
          {/* Radial rings */}
          <div className="bg-bg-card border border-border-default rounded-xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              {(() => {
                const Icon = IconMap[active.icon]
                return (
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${active.color}18`, border: `1px solid ${active.color}40` }}>
                    {Icon && <Icon size={16} color={active.color} />}
                  </div>
                )
              })()}
              <div>
                <h3 className="font-display font-bold text-sm text-text-primary">{active.label}</h3>
                <p className="font-mono text-xs text-text-muted">{active.skills.length} technologies</p>
              </div>
            </div>
            {/* Rings grid — responsive cols */}
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-4">
              {active.skills.slice(0, 8).map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-1.5">
                  <div className="relative">
                    <SkillRing level={skill.level} color={active.color} size={44} />
                    <span className="absolute inset-0 flex items-center justify-center font-mono text-[8px] font-medium" style={{ color: active.color }}>
                      {skill.level}
                    </span>
                  </div>
                  <span className="font-body text-[8px] text-text-muted text-center leading-tight line-clamp-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bars */}
          <div className="bg-bg-card border border-border-default rounded-xl p-5 sm:p-8">
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-5">Maîtrise</h4>
            <div className="space-y-3 sm:space-y-4">
              {active.skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color={active.color} delay={isVisible ? 0.05 * i : 0} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* All skills chips */}
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {skillCategories.flatMap((cat) =>
            cat.skills.map((skill) => (
              <span key={`${cat.id}-${skill.name}`}
                className="px-2.5 py-1 rounded-full font-mono text-[10px] text-text-muted border border-border-default hover:border-border-hover transition-all cursor-default">
                {skill.name}
              </span>
            ))
          )}
        </motion.div>
      </div>
    </section>
  )
}
