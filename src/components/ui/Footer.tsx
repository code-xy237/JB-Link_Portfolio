import { Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-border-default py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 28 28" fill="none" className="w-4 h-4 flex-shrink-0">
            <circle cx="14" cy="14" r="6" stroke="#00d4ff" strokeWidth="1.2" />
            <circle cx="14" cy="14" r="2" fill="#00d4ff" />
            <line x1="14" y1="3" x2="14" y2="8" stroke="#00d4ff" strokeWidth="1.2" />
            <line x1="14" y1="20" x2="14" y2="25" stroke="#00d4ff" strokeWidth="1.2" />
            <line x1="3" y1="14" x2="8" y2="14" stroke="#00d4ff" strokeWidth="1.2" />
            <line x1="20" y1="14" x2="25" y2="14" stroke="#00d4ff" strokeWidth="1.2" />
          </svg>
          <span className="font-mono text-xs text-text-muted text-center sm:text-left">
            © {new Date().getFullYear()} Borel Junior — JB Link. Tous droits réservés.
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors p-1">
            <Github size={16} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors p-1">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${socialLinks.email}`} className="text-text-muted hover:text-accent-cyan transition-colors p-1">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
