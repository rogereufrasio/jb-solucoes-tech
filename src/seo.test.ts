import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('SEO foundation', () => {
  const html = readFileSync('index.html', 'utf8')

  it('includes Open Graph, Twitter and confirmed Schema.org data', () => {
    expect(html).toContain('property="og:title"')
    expect(html).toContain('name="twitter:card"')
    expect(html).toContain('"@type": "ProfessionalService"')
    expect(html).toContain('66.948.009/0001-37')
    expect(html).not.toMatch(/"address"|"openingHours"|"aggregateRating"/)
  })
})
