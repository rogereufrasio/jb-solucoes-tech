import { siteConfig } from '../config/site'
import { Section } from './Section'

export function About() {
  const content = siteConfig.about
  return <Section id="sobre" eyebrow={content.eyebrow} title={content.title}><p className="section-intro">{content.description}</p></Section>
}
