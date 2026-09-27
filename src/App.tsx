import { useEffect, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import Lenis from 'lenis'
import { AnimatePresence, motion } from 'motion/react'
import ClickSpark from './rb/ClickSpark/ClickSpark'
import { Backdrop } from './components/Backdrop'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Feature } from './components/Feature'
import { Hero } from './components/Hero'
import { ModeSwitch } from './components/ModeSwitch'
import { Skills } from './components/Skills'
import { Marquee } from './components/Marquee'
import { CONTACT, RESUMES, type Mode } from './data'

function modeFromHash(): Mode {
  return window.location.hash === '#marketing' ? 'marketing' : 'engineering'
}

export default function App() {
  const [mode, setMode] = useState<Mode>(modeFromHash)
  const resume = RESUMES[mode]
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // Smooth scrolling (Lenis, darkroomengineering/lenis).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.09 })
    let raf = 0
    const loop = (t: number) => {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.mode = mode
    document.title = `${CONTACT.name} · ${resume.label}`
    if (window.location.hash !== `#${mode}`) history.replaceState(null, '', `#${mode}`)
  }, [mode, resume.label])

  useEffect(() => {
    const onHash = () => setMode(modeFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const switchTo = (next: Mode) => {
    if (next === mode) return
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    setMode(next)
  }

  return (
    <ClickSpark sparkColor={mode === 'engineering' ? '#7dd3fc' : '#ffb86b'} sparkCount={10} sparkRadius={22}>
      <Backdrop mode={mode} />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
          scrolled ? 'border-b border-[var(--line)] bg-[var(--bg)]/70 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href={`#${mode}`} className="font-display text-sm font-semibold tracking-tight text-[var(--ink)]">
            IM<span className="text-[var(--accent)]">.</span>
          </a>
          <ModeSwitch mode={mode} onChange={switchTo} />
          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden font-mono text-xs text-[var(--muted)] transition-colors hover:text-[var(--ink)] sm:block"
          >
            Contact ↗
          </a>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={mode}
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Hero mode={mode} resume={resume} />
          <Marquee items={resume.marquee} />
          <Experience roles={resume.experience} mode={mode} />
          <Feature feature={resume.feature} mode={mode} />
          <Skills resume={resume} />
          <Contact mode={mode} />
        </motion.main>
      </AnimatePresence>
    </ClickSpark>
  )
}
