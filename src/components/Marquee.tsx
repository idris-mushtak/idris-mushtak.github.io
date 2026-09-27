import ScrollVelocity from '../rb/ScrollVelocity/ScrollVelocity'

/** Scroll-speed-reactive marquee (React Bits ScrollVelocity). */
export function Marquee({ items }: { items: string[] }) {
  const line = items.join('  ✦  ') + '  ✦  '
  return (
    <div className="border-y border-[var(--line)] py-6 font-display text-2xl font-semibold uppercase tracking-tight text-[var(--ink)]/70 sm:text-4xl">
      <ScrollVelocity texts={[line]} velocity={40} className="px-4" />
    </div>
  )
}
