import { createWhatsAppUrl } from '../config/site'
import { trackConversion } from '../lib/analytics'

type WhatsAppButtonProps = {
  label: string
  message?: string
  compact?: boolean
  floating?: boolean
  origin?: string
}

export function WhatsAppButton({ label, message, compact = false, floating = false, origin = 'general' }: WhatsAppButtonProps) {
  const classNames = ['button', 'button-whatsapp', compact && 'button-compact', floating && 'whatsapp-floating'].filter(Boolean).join(' ')

  return (
    <a
      className={classNames}
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abre o WhatsApp em uma nova aba)`}
      onClick={() => trackConversion({ name: 'whatsapp_click', origin })}
    >
      {label}
    </a>
  )
}
