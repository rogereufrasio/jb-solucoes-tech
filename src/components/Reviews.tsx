import { siteConfig } from '../config/site'
import { Section } from './Section'

export function Reviews() {
  if (!siteConfig.features.reviews || siteConfig.reviews.length === 0) return null

  return (
    <Section id="avaliacoes" eyebrow="Avaliações" title="Experiências de clientes">
      <div className="review-grid">
        {siteConfig.reviews.map((review) => (
          <figure key={`${review.author}-${review.text}`}>
            <blockquote>{review.text}</blockquote>
            <figcaption>{review.author}{review.source ? ` · ${review.source}` : ''}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
