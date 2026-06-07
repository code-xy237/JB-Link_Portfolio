import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/portfolio'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    setActive(href)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg-glass backdrop-blur-xl border-b border-border-default' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 flex-shrink-0">
              <circle cx="14" cy="14" r="6" stroke="#00d4ff" strokeWidth="1.2" />
              <circle cx="14" cy="14" r="2" fill="#00d4ff" />
              <line x1="14" y1="3" x2="14" y2="8" stroke="#00d4ff" strokeWidth="1.2" />
              <line x1="14" y1="20" x2="14" y2="25" stroke="#00d4ff" strokeWidth="1.2" />
              <line x1="3" y1="14" x2="8" y2="14" stroke="#00d4ff" strokeWidth="1.2" />
              <line x1="20" y1="14" x2="25" y2="14" stroke="#00d4ff" strokeWidth="1.2" />
            </svg>
            <span className="font-display font-bold text-xs tracking-widest text-text-primary uppercase group-hover:text-accent-cyan transition-colors">
              JB Link
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`relative px-3 py-1.5 text-xs font-body font-medium tracking-wider uppercase transition-colors ${
                  active === item.href ? 'text-accent-cyan' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
                {active === item.href && (
                  <motion.div layoutId="nav-indicator" className="absolute inset-x-0 -bottom-px h-px bg-accent-cyan" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="hidden md:flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-medium text-accent-cyan border border-border-accent rounded hover:bg-accent-cyan/10 transition-all duration-200"
            >
              CV
            </a>
            <button
              className="md:hidden p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14 z-40 bg-bg-secondary/98 backdrop-blur-xl border-b border-border-default md:hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="text-left px-4 py-3 text-sm font-body text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-all"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono text-accent-cyan border border-border-accent rounded-lg hover:bg-accent-cyan/10 transition-all"
              >
                Télécharger mon CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
