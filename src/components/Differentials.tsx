import { Section } from './Section'
import { siteConfig } from '../config/site'

export function Differentials() {
  const content = siteConfig.differentials
  return <Section id="diferenciais" title={content.title}><p className="section-intro">{content.description}</p></Section>
}
