import { siteConfig } from '../config/site'
import { DiagnosticForm } from './DiagnosticForm'

export function Hero() {
  function focusDiagnostic() {
    document.getElementById('need')?.focus()
  }

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
          <h1 id="hero-title">{siteConfig.hero.title}</h1>
          <p className="hero-description">{siteConfig.hero.description}</p>
          <p className="hero-direct-service">{siteConfig.hero.directService}</p>
          <a className="button button-primary" href="#diagnostico" onClick={focusDiagnostic}>{siteConfig.hero.primaryAction}</a>
        </div>
        <DiagnosticForm />
      </div>
    </section>
  )
}