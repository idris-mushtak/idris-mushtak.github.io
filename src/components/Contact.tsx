import Magnet from '../rb/Magnet/Magnet'
import BlurText from '../rb/BlurText/BlurText'
import { CONTACT, type Mode } from '../data'

const LINKS = [
  { label: 'Email', href: `mailto:${CONTACT.email}`, text: CONTACT.email },
  { label: 'LinkedIn', href: CONTACT.linkedin, text: 'in/idris-mushtak' },
  { label: 'GitHub', href: CONTACT.github, text: '@idris-mushtak' },
]

export function Contact({ mode }: { mode: Mode }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-8 sm:pt-32">
      <p className="font-mono text-xs text-[var(--accent)]">04</p>
      <BlurText
        text={mode === 'engineering' ? "Let's build something." : "Let's grow something."}
        animateBy="words"
        delay={80}
        className={`mt-4 text-5xl leading-none tracking-tight sm:text-8xl ${mode === 'engineering' ? 'font-display font-bold' : 'font-serif italic'}`}
      />
      <div className="mt-14 flex flex-wrap gap-4">
        {LINKS.map((l) => (
          <Magnet key={l.label} padding={60} magnetStrength={4}>
            <a
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="glass group flex flex-col rounded-2xl px-6 py-5 transition-colors hover:border-[var(--accent)]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">{l.label}</span>
              <span className="mt-1 font-display text-lg group-hover:text-[var(--accent)]">{l.text} ↗</span>
            </a>
          </Magnet>
        ))}
      </div>
      <footer className="mt-24 flex flex-wrap justify-between gap-4 border-t border-[var(--line)] pt-6 font-mono text-[11px] text-[var(--muted)]">
        <span>© {new Date().getFullYear()} {CONTACT.name}</span>
        <span>Built with React Bits, Motion &amp; Lenis</span>
      </footer>
    </section>
  )
}
