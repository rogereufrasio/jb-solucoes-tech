import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { App } from './App'
import { siteConfig } from './config/site'

describe('App foundation', () => {
  beforeEach(() => { window.location.hash = '' })
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
    screen.getAllByRole('link').filter((link) => link.getAttribute('target') === '_blank').forEach((link) => {
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
      expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
    })
  })

  it('provides an accessible mobile navigation toggle', () => {
    render(<App />)
    const menuButton = screen.getByRole('button', { name: 'Menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Navegação principal' })).toBeInTheDocument()
  })

  it('renders active sections without provisional content or fictional reviews', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: siteConfig.diagnostic.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: siteConfig.faqSection.title })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Experiências de clientes' })).not.toBeInTheDocument()
    expect(screen.queryByText(/próxima etapa|em breve|a definir/i)).not.toBeInTheDocument()
  })

  it('creates contextual WhatsApp links for every service', () => {
    render(<App />)
    siteConfig.services.forEach((service) => {
      const link = screen.getByRole('link', { name: new RegExp(`Consultar ${service.title}`) })
      expect(link).toHaveAttribute('href', expect.stringContaining(encodeURIComponent(service.whatsappMessage)))
    })
  })

  it('builds a diagnostic message and opens WhatsApp without using browser storage', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const storageSpy = vi.spyOn(Storage.prototype, 'setItem')
    render(<App />)
    fireEvent.change(screen.getByLabelText('Tipo de necessidade'), { target: { value: 'Rede ou Wi-Fi' } })
    fireEvent.change(screen.getByLabelText('Equipamento ou ambiente'), { target: { value: 'Roteador da sala' } })
    fireEvent.change(screen.getByLabelText(/Descrição do problema/), { target: { value: 'Conexão instável' } })
    fireEvent.click(screen.getByRole('button', { name: siteConfig.diagnostic.submitLabel }))
    expect(openSpy).toHaveBeenCalledWith(expect.stringContaining(siteConfig.whatsapp.number), '_blank', 'noopener,noreferrer')
    expect(openSpy).toHaveBeenCalledWith(expect.stringContaining(encodeURIComponent('Tipo de necessidade: Rede ou Wi-Fi')), '_blank', 'noopener,noreferrer')
    expect(storageSpy).not.toHaveBeenCalled()
  })

  it('renders both legal pages from stable hash routes', () => {
    window.location.hash = '#/politica-de-privacidade'
    const { unmount } = render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: siteConfig.legal.privacy.title })).toBeInTheDocument()
    unmount()
    window.location.hash = '#/termos-de-uso'
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: siteConfig.legal.terms.title })).toBeInTheDocument()
  })
})
