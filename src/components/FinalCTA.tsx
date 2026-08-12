import { siteConfig } from '../config/site'

export function FinalCTA() {
  return (
    <section className="final-cta" id="contato" aria-labelledby="contato-title">
      <div className="container">
        <h2 id="contato-title">{siteConfig.finalCta.title}</h2>
        <p>{siteConfig.finalCta.description}</p>
        <a className="button button-primary" href="#diagnostico">{siteConfig.finalCta.action}</a>
      </div>
    </section>
  )
}
