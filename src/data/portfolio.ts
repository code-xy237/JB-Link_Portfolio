import type { Project, SkillCategory, Experience, Certification, NavItem } from '@/types'

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'obj-detection',
    title: 'Système de Détection d\'Objets Intelligent',
    description: 'Système IA temps réel détectant personnes, animaux et véhicules avec suivi de mouvement et estimation de vitesse.',
    longDescription: 'Un système de vision par ordinateur sophistiqué exploitant OpenCV et le deep learning pour la détection multi-classes d\'objets. Fournit des alertes en temps réel, une analyse de trajectoire et un calcul de vitesse pour des cas d\'usage de sécurité et de surveillance.',
    image: '/projects/obj-detection.jpg',
    tags: ['Python', 'OpenCV', 'IA', 'Vision par Ordinateur'],
    tech: ['Python', 'OpenCV', 'NumPy', 'YOLO'],
    features: [
      'Détection de personnes et animaux',
      'Reconnaissance de véhicules',
      'Suivi de mouvement',
      'Estimation de vitesse',
      'Alertes en temps réel',
    ],
    githubUrl: 'https://github.com/boreljunior',
    category: 'python',
    featured: true,
    year: 2024,
  },
  {
    id: 'nids',
    title: 'Système de Détection d\'Intrusion Réseau',
    description: 'Analyseur de paquets avancé avec détection d\'activités suspectes, surveillance en temps réel et alertes de sécurité automatisées.',
    longDescription: 'Un outil de sécurité réseau bas niveau construit en Python qui analyse le trafic réseau en temps réel. Détecte les scans de ports, les paquets anormaux et les schémas d\'intrusion potentiels, déclenchant des alertes configurables.',
    image: '/projects/nids.jpg',
    tags: ['Python', 'Réseau', 'Sécurité', 'Surveillance'],
    tech: ['Python', 'Scapy', 'Socket', 'Threading'],
    features: [
      'Capture de paquets',
      'Détection d\'activités suspectes',
      'Surveillance en temps réel',
      'Alertes automatisées',
      'Analyse du trafic',
    ],
    githubUrl: 'https://github.com/boreljunior',
    category: 'cybersecurity',
    featured: true,
    year: 2024,
  },
  {
    id: 'secure-api',
    title: 'API REST Sécurisée',
    description: 'API REST prête pour la production avec authentification JWT, permissions par rôle et gestion complète des utilisateurs.',
    longDescription: 'Une API Node.js/Express robuste implémentant l\'authentification stateless JWT, le hachage de mots de passe bcrypt, le contrôle d\'accès basé sur les rôles et la gestion CRUD complète des utilisateurs.',
    image: '/projects/api.jpg',
    tags: ['Node.js', 'Express', 'JWT', 'REST'],
    tech: ['Node.js', 'Express.js', 'JWT', 'bcrypt', 'MongoDB'],
    features: [
      'Authentification JWT',
      'Permissions par rôle',
      'Gestion des utilisateurs',
      'Limitation de débit',
      'Documentation API',
    ],
    githubUrl: 'https://github.com/boreljunior',
    category: 'backend',
    featured: false,
    year: 2023,
  },
  {
    id: 'pharmacy',
    title: 'Système de Gestion de Pharmacie',
    description: 'Application full-stack pour la gestion pharmaceutique : inventaire, suivi des ventes, tableau de bord analytique et accès sécurisé.',
    longDescription: 'Une plateforme complète de gestion de pharmacie avec suivi d\'inventaire en temps réel, tableau de bord analytique des ventes, gestion des ordonnances et système d\'authentification multi-rôles.',
    image: '/projects/pharmacy.jpg',
    tags: ['Full Stack', 'Tableau de bord', 'Inventaire', 'Auth'],
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Gestion de l\'inventaire',
      'Suivi des ventes',
      'Tableau de bord analytique',
      'Système d\'authentification',
      'Génération de rapports',
    ],
    githubUrl: 'https://github.com/boreljunior',
    category: 'fullstack',
    featured: true,
    year: 2023,
  },
  {
    id: 'file-sharing',
    title: 'Application de Partage de Fichiers en Réseau Local',
    description: 'Outil de transfert de fichiers haute vitesse sur réseau local avec support multi-appareils et configuration minimale.',
    longDescription: 'Un outil de partage de fichiers LAN basé sur Python qui crée un protocole de transfert ad-hoc pour l\'échange pair-à-pair rapide de fichiers au sein des réseaux locaux. Supporte les transferts simultanés et les gros fichiers.',
    image: '/projects/fileshare.jpg',
    tags: ['Python', 'Réseau', 'LAN', 'P2P'],
    tech: ['Python', 'Socket', 'Threading', 'Tkinter'],
    features: [
      'Transferts réseau local',
      'Support multi-appareils',
      'Partage haute vitesse',
      'Suivi de progression',
      'Interface glisser-déposer',
    ],
    githubUrl: 'https://github.com/boreljunior',
    category: 'network',
    featured: false,
    year: 2023,
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    id: 'networks',
    label: 'Réseaux',
    icon: 'Network',
    color: '#00d4ff',
    skills: [
      { name: 'TCP/IP', level: 90 },
      { name: 'Routage', level: 85 },
      { name: 'Commutation', level: 85 },
      { name: 'VLAN', level: 80 },
      { name: 'DHCP', level: 88 },
      { name: 'DNS', level: 85 },
      { name: 'Wi-Fi', level: 82 },
      { name: 'LAN/WAN', level: 88 },
    ],
  },
  {
    id: 'cybersecurity',
    label: 'Cybersécurité',
    icon: 'Shield',
    color: '#00b8a9',
    skills: [
      { name: 'Surveillance réseau', level: 82 },
      { name: 'Détection d\'intrusion', level: 78 },
      { name: 'Analyse des menaces', level: 75 },
      { name: 'Fondamentaux sécurité', level: 80 },
    ],
  },
  {
    id: 'frontend',
    label: 'Front-End',
    icon: 'Code2',
    color: '#0066ff',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'React', level: 85 },
      { name: 'Vite', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    id: 'backend',
    label: 'Back-End',
    icon: 'Server',
    color: '#6366f1',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 76 },
      { name: 'API REST', level: 82 },
      { name: 'Auth JWT', level: 80 },
    ],
  },
  {
    id: 'programming',
    label: 'Programmation',
    icon: 'Terminal',
    color: '#f59e0b',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Automatisation', level: 85 },
      { name: 'Détection d\'objets', level: 78 },
      { name: 'Vision par ordinateur', level: 75 },
    ],
  },
  {
    id: 'tools',
    label: 'Outils & DevOps',
    icon: 'Wrench',
    color: '#a8b2c1',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Linux', level: 82 },
      { name: 'Vercel', level: 85 },
      { name: 'Railway', level: 78 },
      { name: 'Render', level: 78 },
    ],
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Développeur Front-End',
    company: 'Freelance / Projets personnels',
    period: '2023 — Présent',
    description: 'Conception et développement d\'applications web modernes et performantes avec React, TypeScript et Tailwind CSS.',
    highlights: [
      'Applications full-stack déployées sur Vercel et Railway',
      'Implémentation d\'API REST sécurisées avec authentification JWT',
      'Développement de composants UI responsifs et accessibles',
    ],
    type: 'work',
  },
  {
    id: 'exp-2',
    title: 'Technicien Réseau & Systèmes',
    company: 'Pratique technique',
    period: '2022 — Présent',
    description: 'Expertise pratique en conception d\'infrastructure réseau, configuration et dépannage d\'environnements LAN/WAN.',
    highlights: [
      'Configuration de routeurs, commutateurs et VLANs',
      'Déploiement de services DHCP et DNS',
      'Surveillance du trafic réseau et de la sécurité',
    ],
    type: 'work',
  },
  {
    id: 'exp-3',
    title: 'Développeur Python',
    company: 'Recherche indépendante',
    period: '2022 — Présent',
    description: 'Développement d\'outils Python pour la sécurité réseau, la vision par ordinateur et l\'automatisation.',
    highlights: [
      'Système NIDS avec analyse de paquets',
      'Détection d\'objets basée sur YOLO',
      'Scripts d\'automatisation pour tâches système',
    ],
    type: 'work',
  },
  {
    id: 'exp-4',
    title: 'Réseaux Informatiques & Systèmes',
    company: 'Institut Technique',
    period: '2021 — 2023',
    description: 'Diplôme en Réseaux Informatiques, Administration Systèmes et fondamentaux de la Sécurité Réseau.',
    highlights: [
      'Protocoles et architectures réseau',
      'Administration système Linux',
      'Fondamentaux de la sécurité réseau',
    ],
    type: 'education',
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    date: 'En cours',
    status: 'in-progress',
  },
  {
    id: 'cert-2',
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'Planifié',
    status: 'planned',
  },
  {
    id: 'cert-3',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Planifié',
    status: 'planned',
  },
]

// ─── Social Links ─────────────────────────────────────────────────────────────
export const socialLinks = {
  github: 'https://github.com/boreljunior',
  linkedin: 'https://linkedin.com/in/boreljunior',
  email: 'boreljunior@email.com',
}
