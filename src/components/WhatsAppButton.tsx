import { createWhatsAppUrl } from '../config/site'

type WhatsAppButtonProps = {
  label: string
  message?: string
  compact?: boolean
}

export function WhatsAppButton({ label, message, compact = false }: WhatsAppButtonProps) {
  return (
    <a
      className={`button button-whatsapp${compact ? ' button-compact' : ''}`}
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abre o WhatsApp em uma nova aba)`}
    >
      {label}
    </a>
  )
}
