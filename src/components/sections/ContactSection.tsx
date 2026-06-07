import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { socialLinks } from '@/data/portfolio'
import type { ContactForm } from '@/types'

const initialForm: ContactForm = { name: '', email: '', message: '' }

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
    setForm(initialForm)
    setTimeout(() => setStatus('idle'), 4000)
  }

  const socials = [
    { icon: Github, label: 'GitHub', href: socialLinks.github, handle: '@boreljunior' },
    { icon: Linkedin, label: 'LinkedIn', href: socialLinks.linkedin, handle: 'Borel Junior' },
    { icon: Mail, label: 'E-mail', href: `mailto:${socialLinks.email}`, handle: socialLinks.email },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-accent-cyan/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-accent-cyan tracking-[0.2em] uppercase">06 / Contact</span>
            <div className="flex-1 max-w-16 h-px bg-border-accent" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-text-primary">Travaillons Ensemble</h2>
          <p className="mt-2 font-body text-sm text-text-muted max-w-md">
            Ouvert aux opportunités, collaborations ou simplement une discussion autour de la technologie.
          </p>
        </motion.div>

        {/* Stack sur mobile, grid sur desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Socials */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-2 w-full space-y-3">
            {socials.map(({ icon: Icon, label, href, handle }, i) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="group flex items-center gap-4 p-4 bg-bg-card border border-border-default rounded-xl hover:border-border-accent transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors flex-shrink-0">
                  <Icon size={18} className="text-accent-cyan" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-semibold text-xs text-text-primary group-hover:text-accent-cyan transition-colors">{label}</div>
                  <div className="font-mono text-[10px] text-text-muted mt-0.5 truncate">{handle}</div>
                </div>
              </motion.a>
            ))}

            <div className="p-4 rounded-xl border border-accent-cyan/15 bg-accent-cyan/5">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse flex-shrink-0" />
                <span className="font-mono text-xs text-accent-cyan">Disponible</span>
              </div>
              <p className="font-body text-xs text-text-muted leading-relaxed">
                Disponible pour des missions freelance et des postes en ingénierie réseau ou développement front-end.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25, duration: 0.6 }}
            className="lg:col-span-3 w-full">
            <form onSubmit={handleSubmit} className="bg-bg-card border border-border-default rounded-xl p-5 sm:p-8 space-y-4 sm:space-y-5">
              {/* Nom + Email — stack sur très petit, grid sur sm */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-wider">Nom</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom"
                    className="w-full px-3 sm:px-4 py-2.5 bg-bg-tertiary border border-border-default rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-accent transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-wider">E-mail</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="votre@email.com"
                    className="w-full px-3 sm:px-4 py-2.5 bg-bg-tertiary border border-border-default rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-wider">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Parlez-moi de votre projet ou opportunité..."
                  className="w-full px-3 sm:px-4 py-2.5 bg-bg-tertiary border border-border-default rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-accent transition-colors resize-none"
                />
              </div>

              <button type="submit" disabled={status === 'sending' || status === 'sent'}
                className="group w-full flex items-center justify-center gap-2 py-3 bg-accent-cyan text-bg-primary font-display font-semibold text-sm rounded-sm hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              >
                {status === 'sending' && (<><motion.div className="w-4 h-4 border-2 border-bg-primary/40 border-t-bg-primary rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />Envoi…</>)}
                {status === 'sent' && (<><CheckCircle2 size={16} />Message envoyé !</>)}
                {status === 'error' && (<><AlertCircle size={16} />Réessayer</>)}
                {status === 'idle' && (<>Envoyer le message<Send size={14} className="group-hover:translate-x-1 transition-transform" /></>)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
