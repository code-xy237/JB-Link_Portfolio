import { Suspense, lazy } from 'react'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'
import { HeroSection } from '@/components/sections/HeroSection'

// Lazy load heavy sections for performance
const AboutSection = lazy(() =>
  import('@/components/sections/AboutSection').then((m) => ({ default: m.AboutSection }))
)
const SkillsSection = lazy(() =>
  import('@/components/sections/SkillsSection').then((m) => ({ default: m.SkillsSection }))
)
const ProjectsSection = lazy(() =>
  import('@/components/sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
)
const ExperienceSection = lazy(() =>
  import('@/components/sections/ExperienceSection').then((m) => ({ default: m.ExperienceSection }))
)
const CertificationsSection = lazy(() =>
  import('@/components/sections/CertificationsSection').then((m) => ({ default: m.CertificationsSection }))
)
const ContactSection = lazy(() =>
  import('@/components/sections/ContactSection').then((m) => ({ default: m.ContactSection }))
)

function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />

      <main className="relative">
        <HeroSection />

        <div className="section-divider" />

        <Suspense fallback={null}>
          <AboutSection />
          <div className="section-divider" />
          <SkillsSection />
          <div className="section-divider" />
          <ProjectsSection />
          <div className="section-divider" />
          <ExperienceSection />
          <div className="section-divider" />
          <CertificationsSection />
          <div className="section-divider" />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default App
