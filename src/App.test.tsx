import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { siteConfig } from './config/site'

describe('App foundation', () => {
  it('renders the primary landmarks and heading', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: siteConfig.hero.title })).toBeInTheDocument()
  })

  it('uses the configured WhatsApp number in every conversion link', () => {
    render(<App />)
    const links = screen.getAllByRole('link', { name: /WhatsApp/i })
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) =>
      expect(link).toHaveAttribute('href', expect.stringContaining(siteConfig.whatsapp.number)),
    )
  })

  it('provides an accessible mobile navigation toggle', () => {
    render(<App />)
    const menuButton = screen.getByRole('button', { name: 'Menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Navegação principal' })).toBeInTheDocument()
  })

  it('does not render inactive or provisional sections', () => {
    render(<App />)
    expect(screen.queryByRole('heading', { name: siteConfig.diagnostic.title })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: siteConfig.faqSection.title })).not.toBeInTheDocument()
    expect(screen.queryByText(/próxima etapa|em breve|a definir/i)).not.toBeInTheDocument()
  })
})
