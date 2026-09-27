import { Component, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Aurora from '../rb/Aurora/Aurora'
import Galaxy from '../rb/Galaxy/Galaxy'
import type { Mode } from '../data'

function hasWebGL() {
  try {
    const c = document.createElement('canvas')
    return Boolean(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

/** A WebGL failure must never take the page down; show the CSS fallback instead. */
class BackgroundBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

function CssFallback({ mode }: { mode: Mode }) {
  const colors = mode === 'engineering' ? ['#1e3a8a', '#4c1d95', '#0c4a6e'] : ['#9d174d', '#c2410c', '#6d28d9']
  return (
    <div className="absolute inset-0 overflow-hidden">
      {colors.map((c, i) => (
        <motion.div
          key={c}
          className="absolute h-[60vmax] w-[60vmax] rounded-full opacity-40 blur-[120px]"
          style={{ background: c, left: `${i * 30 - 10}%`, top: `${(i % 2) * 30 - 20}%` }}
          animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0] }}
          transition={{ duration: 18 + i * 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/** Full-screen WebGL background that cross-fades when the resume changes. */
export function Backdrop({ mode }: { mode: Mode }) {
  const [webgl] = useState(hasWebGL)
  const fallback = <CssFallback mode={mode} />

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <AnimatePresence>
        <motion.div
          key={mode}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
        >
          {!webgl ? (
            fallback
          ) : (
            <BackgroundBoundary fallback={fallback}>
              {mode === 'engineering' ? (
                <div className="pointer-events-auto absolute inset-0">
                  <Galaxy
                    density={1.2}
                    hueShift={210}
                    saturation={0.35}
                    glowIntensity={0.35}
                    twinkleIntensity={0.4}
                    rotationSpeed={0.04}
                    starSpeed={0.4}
                    mouseRepulsion
                    repulsionStrength={2}
                    transparent={false}
                  />
                </div>
              ) : (
                <Aurora colorStops={['#ff4d8d', '#ffb86b', '#9b5cff']} amplitude={1.15} blend={0.55} speed={0.8} />
              )}
            </BackgroundBoundary>
          )}
        </motion.div>
      </AnimatePresence>
      {/* Readability: darken toward the bottom where the content sits. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--bg)_78%)] opacity-80" />
    </div>
  )
}
