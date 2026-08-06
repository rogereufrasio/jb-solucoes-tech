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
import { siteConfig } from './config/site'

export function App() {
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
        {siteConfig.features.faq && <FAQ />}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
