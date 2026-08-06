import { existsSync, readFileSync, writeFileSync } from 'node:fs'

function readSiteUrl() {
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL
  if (!existsSync('.env')) return ''
  const match = readFileSync('.env', 'utf8').match(/^VITE_SITE_URL=(.+)$/m)
  return match?.[1]?.trim() ?? ''
}

const rawUrl = readSiteUrl()
const siteUrl = rawUrl ? `${rawUrl.replace(/\/$/, '')}/` : ''
const robots = [`User-agent: *`, `Allow: /`, siteUrl ? `Sitemap: ${siteUrl}sitemap.xml` : ''].filter(Boolean).join('\n') + '\n'
const urls = siteUrl ? [''] : []
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')}
</urlset>
`

writeFileSync('public/robots.txt', robots)
writeFileSync('public/sitemap.xml', sitemap)
