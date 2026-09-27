import { motion } from 'motion/react'
import type { Mode, Resume } from '../data'
import { Section } from './Section'

export function Feature({ feature, mode }: { feature: Resume['feature']; mode: Mode }) {
  return (
    <Section id="feature" index="02" title={mode === 'engineering' ? 'Research' : 'Projects'}>
      <motion.article
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative overflow-hidden rounded-3xl p-7 sm:p-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent-2)] opacity-20 blur-3xl" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{feature.kicker}</p>
        <h3 className={`mt-4 max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl ${mode === 'engineering' ? 'font-display font-semibold' : 'font-serif italic'}`}>
          {feature.title}
        </h3>
        <p className="mt-4 font-mono text-xs text-[var(--muted)]">{feature.subtitle}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {feature.bullets.map((b, i) => (
            <motion.p
              key={b}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="rounded-2xl border border-[var(--line)] bg-black/20 p-5 text-[15px] leading-relaxed text-[var(--ink)]/85"
            >
              <span className="mb-3 block font-mono text-xs text-[var(--accent)]">{String(i + 1).padStart(2, '0')}</span>
              {b}
            </motion.p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {feature.tags.map((t) => (
            <span key={t} className="rounded-full bg-gradient-to-r from-[var(--accent)]/15 to-[var(--accent-2)]/15 px-3 py-1 font-mono text-[11px] text-[var(--ink)]">
              {t}
            </span>
          ))}
        </div>
      </motion.article>
    </Section>
  )
}
