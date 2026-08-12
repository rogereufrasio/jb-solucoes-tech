import { useState, type FormEvent } from 'react'
import { createWhatsAppUrl, siteConfig } from '../config/site'
import { trackConversion } from '../lib/analytics'

export function DiagnosticForm() {
  const [need, setNeed] = useState('')
  const [equipment, setEquipment] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const content = siteConfig.diagnostic

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!need || !equipment.trim()) {
      setError('Selecione o tipo de necessidade e informe o equipamento ou ambiente.')
      return
    }

    setError('')
    const lines = [
      'Olá! Encontrei a JB Soluções pelo site e gostaria de solicitar uma avaliação.',
      '',
      `Tipo de necessidade: ${need}`,
      `Equipamento ou ambiente: ${equipment.trim()}`,
      description.trim() ? `Descrição: ${description.trim()}` : '',
    ].filter(Boolean)

    trackConversion({ name: 'diagnostic_submit', origin: 'diagnostic' })
    window.open(createWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <aside className="hero-diagnostic" id="diagnostico" aria-labelledby="diagnostic-title">
      <h2 id="diagnostic-title">Conte o que está acontecendo</h2>
      <p>Os dados servem apenas para montar a mensagem no WhatsApp e não serão armazenados.</p>
      <form className="diagnostic-form" onSubmit={handleSubmit} noValidate aria-labelledby="diagnostic-title">
        <div className="field">
          <label htmlFor="need">Como podemos ajudar?</label>
          <select id="need" value={need} onChange={(event) => setNeed(event.target.value)} required aria-describedby={error ? 'diagnostic-error' : undefined}>
            <option value="">Escolha o assunto</option>
            {content.needOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="equipment">Equipamento ou ambiente</label>
          <input id="equipment" value={equipment} onChange={(event) => setEquipment(event.target.value)} placeholder="Ex.: notebook, roteador ou home office" required aria-describedby={error ? 'diagnostic-error' : undefined} />
        </div>
        <div className="field">
          <label htmlFor="description">Descrição do problema <span>(opcional)</span></label>
          <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} rows={3} placeholder="Descreva brevemente o que está acontecendo" />
        </div>
        {error && <p className="form-error" id="diagnostic-error" role="alert">{error}</p>}
        <button className="button button-whatsapp" type="submit">{content.submitLabel}</button>
      </form>
    </aside>
  )
}