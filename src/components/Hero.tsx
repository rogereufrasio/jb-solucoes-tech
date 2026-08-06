import { siteConfig } from '../config/site'
import { WhatsAppButton } from './WhatsAppButton'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-content">
        <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
        <h1 id="hero-title">{siteConfig.hero.title}</h1>
        <p className="hero-description">{siteConfig.hero.description}</p>
        <div className="button-group">
          <WhatsAppButton label={siteConfig.hero.primaryAction} />
          <a className="button button-secondary" href="#servicos">{siteConfig.hero.secondaryAction}</a>
        </div>
      </div>
    </section>
  )
}
