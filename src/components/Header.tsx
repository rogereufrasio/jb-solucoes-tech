import { useState } from 'react'
import { siteConfig } from '../config/site'
import { WhatsAppButton } from './WhatsAppButton'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label={`${siteConfig.brand.name}, voltar ao início`} onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">{siteConfig.brand.shortName}</span>
          <span className="brand-name">{siteConfig.brand.name}</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="menu-icon" aria-hidden="true" />
          <span>Menu</span>
        </button>
        <nav className={isMenuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          <ul className="nav-list" id="menu-principal">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}><a href={item.href} onClick={closeMenu}>{item.label}</a></li>
            ))}
          </ul>
        </nav>
        <WhatsAppButton label="Falar no WhatsApp" compact />
      </div>
    </header>
  )
}
