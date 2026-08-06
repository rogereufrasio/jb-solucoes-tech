import { siteConfig } from '../config/site'
import { Section } from './Section'

export function Services() {
  return (
    <Section id="servicos" eyebrow={siteConfig.servicesSection.eyebrow} title={siteConfig.servicesSection.title}>
      <div className="card-grid">
        {siteConfig.services.map((service) => (
          <article className="card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
