import { siteConfig } from '../config/site'
import { WhatsAppButton } from './WhatsAppButton'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
          <h1 id="hero-title">{siteConfig.hero.title}</h1>
          <p className="hero-description">{siteConfig.hero.description}</p>
          <div className="button-group">
            <WhatsAppButton label={siteConfig.hero.primaryAction} origin="hero" />
            <a className="button button-secondary" href="#servicos">{siteConfig.hero.secondaryAction}</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-core"><img src={siteConfig.assets.mark} alt="" /></div>
          <span className="visual-node node-one">PC</span>
          <span className="visual-node node-two">Wi-Fi</span>
          <span className="visual-node node-three">Home</span>
          <span className="visual-node node-four">Print</span>
        </div>
      </div>
    </section>
  )
}
