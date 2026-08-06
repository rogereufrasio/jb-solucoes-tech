import { useEffect, useState } from 'react'
import { About } from './components/About'
import { DiagnosticForm } from './components/DiagnosticForm'
import { Differentials } from './components/Differentials'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Problems } from './components/Problems'
import { Services } from './components/Services'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Reviews } from './components/Reviews'
import { siteConfig } from './config/site'
import { LegalPage } from './pages/LegalPage'

export function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (hash === '#/politica-de-privacidade') return <LegalPage kind="privacy" />
  if (hash === '#/termos-de-uso') return <LegalPage kind="terms" />

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problems />
        <Services />
        {siteConfig.features.diagnostic && <DiagnosticForm />}
        <HowItWorks />
        <Differentials />
        <About />
        <Reviews />
        {siteConfig.features.faq && <FAQ />}
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton label="Falar no WhatsApp" floating origin="floating" />
    </>
  )
}
