import { Section } from './Section'
import { siteConfig } from '../config/site'

export function HowItWorks() {
  const content = siteConfig.howItWorks
  return (
    <Section id="como-funciona" eyebrow={content.eyebrow} title={content.title} className="section-dark">
      <ol className="steps">
        {content.steps.map((step, index) => (
          <li key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>
        ))}
      </ol>
    </Section>
  )
}
