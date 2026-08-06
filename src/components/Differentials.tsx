import { Section } from './Section'
import { siteConfig } from '../config/site'

export function Differentials() {
  const content = siteConfig.differentials
  return (
    <Section id="diferenciais" eyebrow={content.eyebrow} title={content.title}>
      <p className="section-intro">{content.description}</p>
      <ul className="check-grid">{content.items.map((item) => <li key={item}>{item}</li>)}</ul>
    </Section>
  )
}
