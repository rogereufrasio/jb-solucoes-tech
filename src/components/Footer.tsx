import { siteConfig } from '../config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand"><img src={siteConfig.assets.logoLight} alt={siteConfig.brand.name} width="270" height="63" loading="lazy" /><p>{siteConfig.brand.tagline}</p></div>
        <div className="footer-data"><strong>{siteConfig.brand.owner}</strong><span>CNPJ {siteConfig.brand.cnpj}</span><a href={`https://wa.me/${siteConfig.whatsapp.number}`} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${siteConfig.whatsapp.displayNumber} (abre em uma nova aba)`}>WhatsApp {siteConfig.whatsapp.displayNumber}</a></div>
        <div className="footer-links">
          {siteConfig.features.legalPages && <><a href="#/politica-de-privacidade">Política de Privacidade</a><a href="#/termos-de-uso">Termos de Uso</a></>}
          <a href="#inicio">Voltar ao topo</a><span>© {currentYear} {siteConfig.brand.name}</span>
        </div>
      </div>
    </footer>
  )
}
