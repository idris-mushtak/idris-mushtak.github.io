import type { ReactNode } from 'react'
import BlurText from '../rb/BlurText/BlurText'

export function Section({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="font-mono text-xs text-[var(--accent)]">{index}</span>
        <BlurText text={title} animateBy="words" delay={60} className="font-display text-2xl font-semibold tracking-tight sm:text-4xl" />
      </div>
      {children}
    </section>
  )
}
