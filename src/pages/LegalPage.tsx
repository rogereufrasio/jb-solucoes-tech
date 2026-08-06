import { useEffect } from 'react'
import { siteConfig } from '../config/site'

type LegalPageProps = { kind: 'privacy' | 'terms' }

export function LegalPage({ kind }: LegalPageProps) {
  const content = siteConfig.legal[kind]
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = description?.content
    document.title = `${content.title} | ${siteConfig.brand.name}`
    if (description) description.content = content.intro
    return () => {
      document.title = previousTitle
      if (description && previousDescription) description.content = previousDescription
    }
  }, [content])

  return (
    <div className="legal-page">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="legal-header">
        <div className="container">
          <a className="legal-brand" href="#inicio" aria-label="Voltar para a página inicial da JB Soluções Tech">
            <img src={siteConfig.assets.logo} alt={siteConfig.brand.name} width="240" height="56" />
          </a>
          <a href="#inicio">Voltar ao site</a>
        </div>
      </header>
      <main id="conteudo" className="legal-main">
        <div className="container legal-content">
          <p className="eyebrow">JB Soluções Tech</p>
          <h1>{content.title}</h1>
          <p className="legal-intro">{content.intro}</p>
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <p className="legal-review-note">Este conteúdo é informativo e deve ser revisado pelo responsável antes da publicação definitiva.</p>
        </div>
      </main>
    </div>
  )
}
