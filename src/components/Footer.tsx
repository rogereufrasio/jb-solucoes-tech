import { siteConfig } from '../config/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div><strong>{siteConfig.brand.name}</strong><p>{siteConfig.brand.tagline}</p></div>
        <p>{siteConfig.brand.owner} · CNPJ {siteConfig.brand.cnpj}</p>
        <a href="#inicio">Voltar ao topo</a>
      </div>
    </footer>
  )
}
