import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  title: string
  eyebrow?: string
  className?: string
}>

export function Section({ id, title, eyebrow, className = '', children }: SectionProps) {
  return (
    <section className={`section ${className}`.trim()} id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={`${id}-title`}>{title}</h2>
        {children}
      </div>
    </section>
  )
}
