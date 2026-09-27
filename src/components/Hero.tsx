import { motion } from 'motion/react'
import CountUp from '../rb/CountUp/CountUp'
import DecryptedText from '../rb/DecryptedText/DecryptedText'
import GradientText from '../rb/GradientText/GradientText'
import RotatingText from '../rb/RotatingText/RotatingText'
import ShinyText from '../rb/ShinyText/ShinyText'
import { CONTACT, type Mode, type Resume } from '../data'

export function Hero({ mode, resume }: { mode: Mode; resume: Resume }) {
  const eng = mode === 'engineering'
  return (
    <section className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8">
      <ShinyText
        text={`${CONTACT.location} · ${resume.label} resume`}
        speed={3}
        color="var(--muted)"
        shineColor="var(--ink)"
        className="font-mono text-xs uppercase tracking-[0.25em]"
      />

      <h1 className="mt-6 leading-[0.92] tracking-[-0.04em]">
        {eng ? (
          <span className="font-display text-[clamp(3.2rem,11vw,9.5rem)] font-bold">
            <DecryptedText text="Idris" animateOn="view" sequential revealDirection="start" speed={45} className="text-[var(--ink)]" encryptedClassName="text-[var(--accent)]" />
            <br />
            <DecryptedText text="Mushtak" animateOn="view" sequential revealDirection="start" speed={45} className="text-[var(--ink)]" encryptedClassName="text-[var(--accent-2)]" />
          </span>
        ) : (
          <span className="font-serif text-[clamp(3.6rem,12vw,10.5rem)] italic">
            <GradientText colors={['#ffb86b', '#ff4d8d', '#9b5cff', '#ffb86b']} animationSpeed={6} className="!mx-0 !block">
              Idris Mushtak
            </GradientText>
          </span>
        )}
      </h1>

      <div className="mt-8 flex flex-wrap items-center gap-3 font-display text-xl sm:text-3xl">
        <span className="text-[var(--muted)]">{eng ? 'I build as an' : 'I grow brands as a'}</span>
        <RotatingText
          texts={resume.roles}
          mainClassName="overflow-hidden rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-3 py-1 font-semibold text-[var(--bg)] sm:px-4"
          staggerFrom="last"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-120%' }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5"
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={2400}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
      >
        {resume.summary}
      </motion.p>

      <dl className="mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
        {resume.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.12 }}
            className="glass rounded-2xl p-5"
          >
            <dd className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {s.prefix}
              <CountUp to={s.value} duration={1.6} />
              <span className="text-[var(--accent)]">{s.suffix}</span>
            </dd>
            <dt className="mt-2 text-sm leading-snug text-[var(--muted)]">{s.label}</dt>
          </motion.div>
        ))}
      </dl>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] sm:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        Scroll
      </motion.div>
    </section>
  )
}
