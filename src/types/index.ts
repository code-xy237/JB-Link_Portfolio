// ─── Project Types ────────────────────────────────────────────────────────────
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  tech: string[]
  features: string[]
  githubUrl?: string
  liveUrl?: string
  category: ProjectCategory
  featured: boolean
  year: number
}

export type ProjectCategory =
  | 'network'
  | 'cybersecurity'
  | 'frontend'
  | 'backend'
  | 'python'
  | 'fullstack'

// ─── Skill Types ──────────────────────────────────────────────────────────────
export interface Skill {
  name: string
  level: number // 0–100
  icon?: string
}

export interface SkillCategory {
  id: string
  label: string
  icon: string
  color: string
  skills: Skill[]
}

// ─── Experience Types ─────────────────────────────────────────────────────────
export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  type: 'work' | 'education' | 'achievement'
}

// ─── Certification Types ──────────────────────────────────────────────────────
export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
  status: 'earned' | 'in-progress' | 'planned'
  icon?: string
}

// ─── Navigation Types ─────────────────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string
}

// ─── Contact Types ────────────────────────────────────────────────────────────
export interface ContactForm {
  name: string
  email: string
  message: string
}

// ─── Three.js Types ───────────────────────────────────────────────────────────
export interface NetworkNode {
  position: [number, number, number]
  connections: number[]
  activity: number
}

export interface MousePosition {
  x: number
  y: number
}
