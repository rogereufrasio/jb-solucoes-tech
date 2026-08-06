export type ConversionEvent =
  | { name: 'whatsapp_click'; origin: string }
  | { name: 'diagnostic_submit'; origin: 'diagnostic' }

declare global {
  interface Window {
    jbAnalytics?: (event: ConversionEvent) => void
  }
}

export function trackConversion(event: ConversionEvent) {
  window.dispatchEvent(new CustomEvent('jb:conversion', { detail: event }))
  window.jbAnalytics?.(event)
}
