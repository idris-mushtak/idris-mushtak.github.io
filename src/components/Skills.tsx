import { motion } from 'motion/react'
import type { Resume } from '../data'
import { Section } from './Section'

export function Skills({ resume }: { resume: Resume }) {
  const e = resume.education
  return (
    <Section id="skills" index="03" title="Education & skills">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-7"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{e.period}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{e.degree}</h3>
          <p className="mt-1 text-[var(--muted)]">{e.school}</p>
          <p className="mt-6 text-sm leading-relaxed text-[var(--ink)]/80">{e.detail}</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {resume.skills.map((g, i) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-3xl p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{g.group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="cursor-default rounded-lg border border-[var(--line)] bg-black/25 px-2.5 py-1.5 text-sm"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
