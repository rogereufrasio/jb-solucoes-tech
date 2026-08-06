import { siteConfig } from '../config/site'
import { Section } from './Section'
import { WhatsAppButton } from './WhatsAppButton'

export function Services() {
  return (
    <Section id="servicos" eyebrow={siteConfig.servicesSection.eyebrow} title={siteConfig.servicesSection.title}>
      <p className="section-intro">{siteConfig.servicesSection.description}</p>
      <div className="card-grid">
        {siteConfig.services.map((service) => (
          <article className="card" key={service.id}>
            <span className="service-icon" aria-hidden="true">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>{service.examples.map((example) => <li key={example}>{example}</li>)}</ul>
            <WhatsAppButton label={`Consultar ${service.title}`} message={service.whatsappMessage} origin={`service:${service.id}`} />
          </article>
        ))}
      </div>
    </Section>
  )
}
