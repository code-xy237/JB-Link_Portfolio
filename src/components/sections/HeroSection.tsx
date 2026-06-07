import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.5 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
}

function PhotoHolo() {
  const innerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const rafRef = useRef<number>(0)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const hero = document.getElementById('hero-section')
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      target.current.x = -((e.clientY - cy) / (rect.height / 2)) * 12
      target.current.y = ((e.clientX - cx) / (rect.width / 2)) * 18
    }
    const onLeave = () => { target.current.x = 0; target.current.y = 0 }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.07
      current.current.y += (target.current.y - current.current.y) * 0.07
      if (innerRef.current) {
        innerRef.current.style.transform = `perspective(700px) rotateX(${current.current.x}deg) rotateY(${current.current.y}deg) scale(1.02)`
      }
      if (imgRef.current) {
        const sx = -current.current.y * 0.8
        const sy = current.current.x * 0.6
        imgRef.current.style.filter = `contrast(1.05) brightness(0.9) drop-shadow(${sx}px ${sy}px 20px rgba(0,212,255,0.3))`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const tags = [
    { label: 'React • TypeScript', cls: 'top-4 -right-20 text-accent-cyan border-accent-cyan/25 bg-accent-cyan/8', delay: '0s' },
    { label: 'Cybersecurity', cls: 'top-24 -right-16 text-accent-teal border-accent-teal/25 bg-accent-teal/8', delay: '0.8s' },
    { label: 'TCP/IP • VLAN', cls: 'bottom-24 -right-20 text-accent-cyan border-accent-cyan/25 bg-accent-cyan/8', delay: '1.6s' },
    { label: 'Python • OpenCV', cls: 'top-16 -left-20 text-accent-silver border-accent-silver/20 bg-accent-silver/6', delay: '0.4s' },
    { label: 'Node.js • REST', cls: 'bottom-32 -left-20 text-accent-cyan border-accent-cyan/25 bg-accent-cyan/8', delay: '1.2s' },
  ]

  return (
    <div className="relative flex items-center justify-center" style={{ width: 280, height: 380 }}>
      {/* Orbit rings */}
      <div className="absolute rounded-full border border-accent-cyan/10"
        style={{ inset: -36, animation: 'orbitSpin 9s linear infinite' }}>
        <div className="absolute w-1.5 h-1.5 rounded-full bg-accent-cyan -top-0.5 left-1/2 -translate-x-1/2"
          style={{ boxShadow: '0 0 8px #00d4ff' }} />
      </div>
      <div className="absolute rounded-full"
        style={{ inset: -56, border: '1px dashed rgba(0,102,255,0.1)', animation: 'orbitSpin 15s linear infinite reverse' }}>
        <div className="absolute w-1 h-1 rounded-full bg-accent-blue bottom-0 left-1/2 -translate-x-1/2"
          style={{ boxShadow: '0 0 6px #0066ff' }} />
      </div>

      {/* Photo */}
      <div ref={innerRef} className="relative" style={{ width: 240, height: 320, willChange: 'transform', transformStyle: 'preserve-3d' }}>
        {/* Image */}
        <img
          ref={imgRef}
          src="/img/profile.jpg"
          alt="Borel Junior"
          className="absolute inset-0 w-full h-full object-cover object-top rounded-sm"
          style={{ filter: 'contrast(1.05) brightness(0.9)' }}
        />

        {/* Holographic overlay */}
        <div className="absolute inset-0 rounded-sm pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.12) 0%, transparent 30%, rgba(0,102,255,0.08) 60%, transparent 80%, rgba(0,184,169,0.1) 100%)',
            mixBlendMode: 'screen',
            animation: 'holoShift 4s ease-in-out infinite alternate',
          }} />

        {/* Scan line */}
        <div className="absolute inset-0 rounded-sm overflow-hidden pointer-events-none">
          <div style={{
            position: 'absolute', left: 0, right: 0, height: 2,
            background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)',
            animation: 'scanMove 3s linear infinite',
          }} />
        </div>

        {/* CRT lines */}
        <div className="absolute inset-0 rounded-sm pointer-events-none" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)',
        }} />

        {/* Border glow */}
        <div className="absolute rounded-sm pointer-events-none"
          style={{ inset: -1, border: '1px solid rgba(0,212,255,0.35)', animation: 'borderPulse 3s ease-in-out infinite alternate' }} />

        {/* Corner brackets */}
        {[
          'top-0 left-0 border-t-2 border-l-2',
          'top-0 right-0 border-t-2 border-r-2',
          'bottom-0 left-0 border-b-2 border-l-2',
          'bottom-0 right-0 border-b-2 border-r-2',
        ].map((cls, i) => (
          <div key={i} className={`absolute w-3 h-3 border-accent-cyan pointer-events-none ${cls}`} style={{ borderColor: '#00d4ff', opacity: 0.8 }} />
        ))}

        {/* Floating tags */}
        {tags.map((t, i) => (
          <div key={i}
            className={`absolute font-mono text-[8px] px-1.5 py-0.5 border rounded-sm whitespace-nowrap pointer-events-none ${t.cls}`}
            style={{ animation: `tagFloat 4s ease-in-out ${t.delay} infinite alternate` }}
          >
            {t.label}
          </div>
        ))}

        {/* Particles */}
        {[
          { style: { width: 3, height: 3, top: '15%', left: -20, animationDelay: '0s', animationDuration: '2.5s' } },
          { style: { width: 2, height: 2, top: '40%', right: -18, animationDelay: '0.6s', animationDuration: '3.2s' } },
          { style: { width: 3, height: 3, bottom: '25%', left: -15, animationDelay: '1.2s', animationDuration: '2.8s' } },
          { style: { width: 2, height: 2, bottom: '10%', right: -22, animationDelay: '0.3s', animationDuration: '3.5s', background: '#0066ff' } },
        ].map((p, i) => (
          <div key={i} className="absolute rounded-full"
            style={{ background: '#00d4ff', opacity: 0, animation: 'particleFade 3s ease-in-out infinite', ...p.style }} />
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <>
      {/* Keyframes injectés une fois */}
      <style>{`
        @keyframes orbitSpin { to { transform: rotate(360deg); } }
        @keyframes holoShift { 0%{opacity:.6} 100%{opacity:1} }
        @keyframes scanMove { 0%{top:0%} 100%{top:100%} }
        @keyframes borderPulse {
          0%  { box-shadow: 0 0 8px rgba(0,212,255,0.1); border-color: rgba(0,212,255,0.25); }
          100%{ box-shadow: 0 0 22px rgba(0,212,255,0.28); border-color: rgba(0,212,255,0.55); }
        }
        @keyframes tagFloat { 0%{transform:translateY(0);opacity:.7} 100%{transform:translateY(-6px);opacity:1} }
        @keyframes particleFade { 0%,100%{opacity:0;transform:scale(.5)} 50%{opacity:.6;transform:scale(1)} }
      `}</style>

      <section id="hero-section" className="relative min-h-screen flex items-center overflow-hidden px-4">
        {/* Bg grid */}
        <div className="absolute inset-0 z-0 opacity-[0.025]" style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,1) 1px,transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Radial glow centre */}
        <div className="absolute inset-0 z-0" style={{
          background: 'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(0,102,255,0.06) 0%, transparent 70%)',
        }} />

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 z-[1] bg-gradient-to-t from-bg-primary to-transparent" />

        {/* Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 py-24 lg:py-0 min-h-screen">

          {/* Left — Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-accent-cyan/10 border border-accent-cyan/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse flex-shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs text-accent-cyan tracking-widest">
                Disponible pour de nouvelles opportunités
              </span>
            </motion.div>

            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-text-primary leading-none tracking-tight mb-4"
            >
              Borel{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-teal">
                Djeukwa
              </span>
            </motion.h1>

            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-center justify-center lg:justify-start gap-3 mb-5"
            >
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-border-accent flex-shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs text-text-secondary tracking-widest uppercase text-center lg:text-left">
                Technicien Réseau • Développeur Front-End
              </span>
            </motion.div>

            <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="max-w-sm mx-auto lg:mx-0 font-body text-sm sm:text-base text-text-secondary leading-relaxed mb-8"
            >
              Je conçois des expériences digitales modernes, des infrastructures sécurisées et des solutions intelligentes.
            </motion.p>

            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-12"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-accent-cyan text-bg-primary font-display font-semibold text-sm rounded-sm hover:bg-white transition-all duration-200"
              >
                Voir mes projets
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-border-default text-text-primary font-display font-semibold text-sm rounded-sm hover:border-border-hover hover:text-accent-cyan transition-all duration-200"
              >
                Me contacter
              </button>
              <a href="/resume.pdf" download
                className="flex items-center justify-center gap-2 px-4 py-3 text-text-secondary hover:text-text-primary font-mono text-xs transition-colors"
              >
                <Download size={14} />
                CV
              </a>
            </motion.div>

            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-center justify-center lg:justify-start gap-8 flex-wrap pt-6 border-t border-border-default"
            >
              {[
                { label: 'Projets réalisés', value: '5+' },
                { label: 'Technologies', value: '20+' },
                { label: "Ans d'expérience", value: '3+' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start gap-0.5">
                  <span className="font-display font-bold text-xl sm:text-2xl text-text-primary">{stat.value}</span>
                  <span className="font-mono text-[9px] text-text-muted tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo 3D */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <PhotoHolo />
          </motion.div>
        </div>

        {/* Scroll */}
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-text-muted hover:text-accent-cyan transition-colors"
        >
          <span className="font-mono text-[9px] tracking-widest">DÉFILER</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={14} />
          </motion.div>
        </motion.button>
      </section>
    </>
  )
}
