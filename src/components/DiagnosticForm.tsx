import { Section } from './Section'
import { siteConfig } from '../config/site'

export function DiagnosticForm() {
  const content = siteConfig.diagnostic
  return <Section id="diagnostico" title={content.title} className="section-tinted"><p className="section-intro">{content.description}</p></Section>
}
