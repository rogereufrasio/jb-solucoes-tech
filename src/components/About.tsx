import { siteConfig } from '../config/site'
import { Section } from './Section'

export function About() {
  const content = siteConfig.about
  return (
    <Section id="sobre" eyebrow={content.eyebrow} title={content.title} className="about-section">
      <div className="about-layout">
        <div className="about-mark" aria-hidden="true"><img src={siteConfig.assets.mark} alt="" loading="lazy" /></div>
        <div>
          <p className="about-copy">{content.description}</p>
          <h3>{content.commitmentTitle}</h3>
          <ul className="commitments">{content.commitments.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </Section>
  )
}
