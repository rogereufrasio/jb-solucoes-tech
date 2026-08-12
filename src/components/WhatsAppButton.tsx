import { createWhatsAppUrl } from '../config/site'
import { trackConversion } from '../lib/analytics'

type WhatsAppButtonProps = {
  label: string
  ariaLabel?: string
  message?: string
  compact?: boolean
  floating?: boolean
  origin?: string
}

export function WhatsAppButton({ label, ariaLabel, message, compact = false, floating = false, origin = 'general' }: WhatsAppButtonProps) {
  const classNames = ['button', 'button-whatsapp', compact && 'button-compact', floating && 'whatsapp-floating'].filter(Boolean).join(' ')

  return (
    <a
      className={classNames}
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${ariaLabel ?? label} (abre o WhatsApp em uma nova aba)`}
      title={floating ? label : undefined}
      onClick={() => trackConversion({ name: 'whatsapp_click', origin })}
    >
      {floating && <svg className="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 3A13 13 0 0 0 5 23l-2 6 6-2a13 13 0 1 0 7-24Zm0 3a10 10 0 0 1 0 20 10 10 0 0 1-5-1.3l-.5-.3-3.3.9.9-3.2-.3-.5A10 10 0 0 1 16 6Zm-4.5 4.3c-.3 0-.6.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4l-2-.9c-.3-.1-.5-.2-.7.1l-.9 1.2c-.2.2-.4.2-.7.1-1.8-.8-3-1.6-4-3.4-.2-.3 0-.5.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.3-.6-.5-.5-.7-.5h-.6Z" /></svg>}
      <span className={floating ? 'visually-hidden' : undefined}>{label}</span>
    </a>
  )
}
