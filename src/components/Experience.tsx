import { motion } from 'motion/react'
import SpotlightCard from '../rb/SpotlightCard/SpotlightCard'
import type { Mode, Role } from '../data'
import { Section } from './Section'

export function Experience({ roles, mode }: { roles: Role[]; mode: Mode }) {
  const spot = mode === 'engineering' ? 'rgba(158, 197, 255, 0.14)' : 'rgba(255, 171, 122, 0.15)'
  return (
    <Section id="experience" index="01" title="Experience">
      <ol className="relative space-y-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-[var(--accent)] before:via-[var(--line)] before:to-transparent sm:before:left-[9px]">
        {roles.map((r, i) => (
          <motion.li
            key={r.org + r.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-8 sm:pl-12"
          >
            <span className="absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] shadow-[0_0_18px_var(--accent)] sm:h-[19px] sm:w-[19px]" />
            <SpotlightCard className="!rounded-2xl !border-[var(--line)] !bg-[var(--card)] !p-6 backdrop-blur-md sm:!p-8" spotlightColor={spot}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {r.org}
                  <span className="font-normal text-[var(--muted)]"> · {r.title}</span>
                </h3>
                <p className="font-mono text-xs text-[var(--accent)]">{r.period}</p>
              </div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">{r.place}</p>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[var(--ink)]/85">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {r.tags?.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[11px] text-[var(--muted)]">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </SpotlightCard>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
