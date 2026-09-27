import { motion } from 'motion/react'
import type { Mode } from '../data'

const OPTIONS: { id: Mode; label: string }[] = [
  { id: 'engineering', label: 'Engineering' },
  { id: 'marketing', label: 'Marketing' },
]

/** The two brackets: pick a resume. The highlight slides between them. */
export function ModeSwitch({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  return (
    <div role="tablist" aria-label="Choose a resume" className="glass relative flex rounded-full p-1">
      {OPTIONS.map((o) => {
        const active = o.id === mode
        return (
          <button
            key={o.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.id)}
            className={`relative z-10 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors sm:px-6 sm:text-xs ${
              active ? 'text-[var(--bg)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'
            }`}
          >
            {active ? (
              <motion.span
                layoutId="mode-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span className="opacity-60">[</span> {o.label} <span className="opacity-60">]</span>
          </button>
        )
      })}
    </div>
  )
}
