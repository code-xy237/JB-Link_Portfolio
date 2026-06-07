import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Network, Shield, Code2, Server, Terminal, Globe } from 'lucide-react'

const specializations = [
  { icon: Network, label: 'Réseaux Informatiques', desc: 'TCP/IP, routage, commutation, VLAN' },
  { icon: Shield, label: 'Cybersécurité', desc: 'Surveillance, IDS, analyse des menaces' },
  { icon: Code2, label: 'Développement Front-End', desc: 'React, TypeScript, Tailwind CSS' },
  { icon: Server, label: 'Administration Système', desc: 'Linux, configuration serveur' },
  { icon: Terminal, label: 'Développement Python', desc: 'Automatisation, vision par ordinateur' },
  { icon: Globe, label: 'Technologies Web', desc: 'API REST, Node.js, full-stack' },
]

const timelineItems = [
  { year: '2021', label: 'Début des études IT', detail: 'Diplôme Réseaux & Systèmes' },
  { year: '2022', label: 'Approfondissement réseau', detail: 'Routage, commutation, VLAN en pratique' },
  { year: '2023', label: 'Python & Sécurité', detail: 'NIDS, détection d\'objets, automatisation' },
  { year: '2024', label: 'Full-Stack & React', detail: 'Apps web production avec React, TypeScript' },
  { year: '2025', label: 'Vers l\'excellence', detail: 'CCNA en cours, sécurité avancée & cloud' },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-accent-cyan/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-accent-cyan tracking-[0.2em] uppercase">01 / À propos</span>
            <div className="flex-1 max-w-16 h-px bg-border-accent" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-text-primary">L'Ingénieur Derrière le Code</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-4 mb-8">
              <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
                Je suis <span className="text-text-primary font-medium">Borel Junior</span>, passionné de technologie à l'intersection de l'ingénierie réseau et du développement web moderne. Je conçois et construis des systèmes sécurisés, performants et durables.
              </p>
              <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
                Qu'il s'agisse de configurer une infrastructure réseau, de construire des outils de sécurité en Python, ou de concevoir des interfaces front-end élégantes avec React — j'aborde chaque défi avec précision et vision systémique.
              </p>
            </motion.div>

            {/* Specializations grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {specializations.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                  className="group flex items-start gap-3 p-3 rounded-lg bg-bg-card border border-border-default hover:border-border-accent transition-all duration-200"
                >
                  <div className="mt-0.5 w-7 h-7 rounded flex items-center justify-center bg-accent-cyan/10 flex-shrink-0 group-hover:bg-accent-cyan/20 transition-colors">
                    <spec.icon size={14} className="text-accent-cyan" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-semibold text-xs text-text-primary mb-0.5 leading-snug">{spec.label}</div>
                    <div className="font-body text-xs text-text-muted leading-relaxed">{spec.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Timeline */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="font-display font-semibold text-xs text-text-muted uppercase tracking-widest mb-6 mt-8 lg:mt-0">Parcours</h3>
            <div className="relative">
              <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-border-default" />
              <div className="space-y-6">
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 text-right flex-shrink-0">
                      <span className="font-mono text-[10px] text-accent-cyan">{item.year}</span>
                    </div>
                    <div className="relative flex-shrink-0 mt-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan ring-4 ring-bg-primary" />
                      {i === timelineItems.length - 1 && (
                        <motion.div className="absolute inset-0 rounded-full bg-accent-cyan"
                          animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                    <div className="pb-2 min-w-0">
                      <div className="font-display font-semibold text-xs sm:text-sm text-text-primary mb-0.5">{item.label}</div>
                      <div className="font-body text-xs text-text-muted leading-relaxed">{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
