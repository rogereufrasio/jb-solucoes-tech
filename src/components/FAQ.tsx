import { Section } from './Section'
import { siteConfig } from '../config/site'

export function FAQ() {
  return (
    <Section id="duvidas" eyebrow={siteConfig.faqSection.eyebrow} title={siteConfig.faqSection.title}>
      <div className="faq-list">
        {siteConfig.faq.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
