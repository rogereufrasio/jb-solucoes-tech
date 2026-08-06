import { Section } from './Section'
import { siteConfig } from '../config/site'

export function Problems() {
  const content = siteConfig.problems
  return <Section id="problemas" eyebrow={content.eyebrow} title={content.title}><p className="section-intro">{content.description}</p></Section>
}
