import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL?.replace(/\/$/, '') ?? ''
  return {
    plugins: [
      react(),
      {
        name: 'inject-static-seo-urls',
        transformIndexHtml(html) {
          const canonical = siteUrl
            ? `<link rel="canonical" href="${siteUrl}/" />`
            : ''
          return html
            .replace('<!-- build:canonical -->', canonical)
            .replaceAll('__SITE_URL__', siteUrl ? `${siteUrl}/` : '')
            .replaceAll('__OG_IMAGE__', siteUrl ? `${siteUrl}/og.png` : '')
        },
      },
    ],
    base: env.VITE_BASE_PATH || './',
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
    },
  }
})
