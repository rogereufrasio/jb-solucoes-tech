import { Section } from './Section'
import { siteConfig } from '../config/site'

export function Problems() {
  const content = siteConfig.problems
  return (
    <Section id="problemas" eyebrow={content.eyebrow} title={content.title}>
      <p className="section-intro">{content.description}</p>
      <ul className="problem-grid">
        {content.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}
      </ul>
    </Section>
  )
}
