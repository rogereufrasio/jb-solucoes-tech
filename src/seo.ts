import { siteConfig } from './config/site'

function setMeta(selector: string, attribute: string, value: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute(attribute, value)
}

export function configureSeo() {
  const configuredUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '')
  const canonicalUrl = configuredUrl ? `${configuredUrl}/` : window.location.href.split('#')[0]
  const imageUrl = new URL(siteConfig.seo.ogImage, window.location.href).href

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.append(canonical)
  }
  canonical.href = canonicalUrl
  setMeta('meta[property="og:url"]', 'content', canonicalUrl)
  setMeta('meta[property="og:image"]', 'content', imageUrl)
  setMeta('meta[name="twitter:image"]', 'content', imageUrl)
}
