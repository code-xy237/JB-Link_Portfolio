# JB Link — Borel Junior Portfolio

Portfolio personnel ultra-moderne pour Borel Junior (JB Link), conçu avec les meilleures technologies front-end actuelles.

## Stack Technique

| Technologie | Rôle |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build & Dev server |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Three Fiber | Scène 3D (Hero) |
| Three.js | WebGL / rendering |
| GSAP | Animations avancées |
| Lucide Icons | Icônes |

## Structure du projet

```
src/
├── components/
│   ├── three/
│   │   └── NetworkScene.tsx     # Scène 3D interactive
│   ├── sections/
│   │   ├── HeroSection.tsx      # Landing + Canvas 3D
│   │   ├── AboutSection.tsx     # Profil + Timeline
│   │   ├── SkillsSection.tsx    # Dashboard skills animé
│   │   ├── ProjectsSection.tsx  # Showcase projets filtrable
│   │   ├── ExperienceSection.tsx# Roadmap carrière
│   │   ├── CertificationsSection.tsx
│   │   └── ContactSection.tsx   # Formulaire + réseaux
│   └── ui/
│       ├── Navbar.tsx           # Navigation responsive
│       ├── LoadingScreen.tsx    # Écran de chargement
│       ├── CustomCursor.tsx     # Curseur personnalisé
│       └── Footer.tsx
├── data/
│   └── portfolio.ts             # Toutes les données
├── hooks/
│   ├── useMousePosition.ts
│   └── useScrollReveal.ts
├── types/
│   └── index.ts                 # Interfaces TypeScript
└── App.tsx                      # Composition principale
```

## Démarrage local

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Déploiement Vercel

### Option 1 — CLI Vercel (recommandé)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2 — Dashboard Vercel
1. Pousser le code sur GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. **New Project** → Importer le dépôt
4. Framework preset : **Vite**
5. Build command : `npm run build`
6. Output directory : `dist`
7. Cliquer **Deploy**

Le fichier `vercel.json` inclus gère automatiquement :
- Le routing SPA (React Router ready)
- Le cache des assets statiques (1 an)
- Les headers de sécurité

## Personnalisation

Toutes les données sont centralisées dans **`src/data/portfolio.ts`** :
- Projets, compétences, expériences, certifications
- Liens sociaux et email
- Aucun backend requis

## Performance

- Code splitting automatique via Vite
- Lazy loading de toutes les sections
- Images optimisées avec attributs `loading="lazy"`
- Bundle Three.js isolé dans un chunk séparé
- Score Lighthouse cible : **90+**

## Licence

© 2025 Borel Junior — JB Link. All rights reserved.
