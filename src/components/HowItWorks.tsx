import { Section } from './Section'
import { siteConfig } from '../config/site'

export function HowItWorks() {
  const content = siteConfig.howItWorks
  return <Section id="como-funciona" eyebrow={content.eyebrow} title={content.title}><p className="section-intro">{content.description}</p></Section>
}
