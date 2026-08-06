import { useState, type FormEvent } from 'react'
import { createWhatsAppUrl, siteConfig } from '../config/site'
import { trackConversion } from '../lib/analytics'
import { Section } from './Section'

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
      'Olá! Encontrei a JB Soluções Tech pelo site e gostaria de solicitar uma avaliação.',
      '',
      `Tipo de necessidade: ${need}`,
      `Equipamento ou ambiente: ${equipment.trim()}`,
      description.trim() ? `Descrição: ${description.trim()}` : '',
    ].filter(Boolean)

    trackConversion({ name: 'diagnostic_submit', origin: 'diagnostic' })
    window.open(createWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <Section id="diagnostico" eyebrow={content.eyebrow} title={content.title} className="diagnostic-section">
      <div className="diagnostic-layout">
        <div>
          <p className="section-intro">{content.description}</p>
          <p className="privacy-note"><strong>Importante:</strong> não envie senhas, documentos, dados bancários ou outras informações sensíveis.</p>
        </div>
        <form className="diagnostic-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="need">Tipo de necessidade</label>
            <select id="need" value={need} onChange={(event) => setNeed(event.target.value)} required aria-describedby={error ? 'diagnostic-error' : undefined}>
              <option value="">Selecione uma opção</option>
              {content.needOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="equipment">Equipamento ou ambiente</label>
            <input id="equipment" value={equipment} onChange={(event) => setEquipment(event.target.value)} placeholder="Ex.: notebook, roteador ou home office" required aria-describedby={error ? 'diagnostic-error' : undefined} />
          </div>
          <div className="field">
            <label htmlFor="description">Descrição do problema <span>(opcional)</span></label>
            <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} rows={4} placeholder="Descreva brevemente o que está acontecendo" />
          </div>
          {error && <p className="form-error" id="diagnostic-error" role="alert">{error}</p>}
          <button className="button button-whatsapp" type="submit">{content.submitLabel}</button>
        </form>
      </div>
    </Section>
  )
}
