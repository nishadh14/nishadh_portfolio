import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Full-bleed atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(165deg,#dfe8e3_0%,#eef3f0_42%,#d4e8e0_100%)]" />
        <motion.div
          className="absolute -top-[20%] -left-[15%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(30,224,182,0.28)_0%,transparent_65%)]"
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 28, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-[10%] -bottom-[25%] h-[75%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(11,159,128,0.22)_0%,transparent_70%)]"
          animate={reduce ? undefined : { x: [0, -35, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(12,26,23,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(12,26,23,0.045) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage:
              'radial-gradient(ellipse 85% 70% at 50% 45%, #000 20%, transparent 75%)',
          }}
        />
        <div className="noise" />
        {/* Soft edge vignette toward content below */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      </div>

      <motion.div
        style={{ y: reduce ? 0 : y, opacity }}
        className="section-pad relative z-10 w-full py-28 md:py-32"
      >
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 text-xs font-semibold tracking-[0.28em] text-[var(--accent-deep)] uppercase"
          >
            {profile.role} · {profile.location}
          </motion.p>

          <h1 className="font-display leading-[0.92] font-semibold tracking-[-0.045em] text-[var(--ink)]">
            <motion.span
              className="block text-[clamp(3.25rem,12vw,8.5rem)]"
              initial={reduce ? false : { opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
            >
              Nishadh
            </motion.span>
            <motion.span
              className="mt-1 block text-[clamp(3.25rem,12vw,8.5rem)]"
              initial={reduce ? false : { opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
            >
              Nikam
            </motion.span>
          </h1>

          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="mx-auto mt-8 h-px w-24 origin-center bg-[var(--accent-deep)]"
          />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease }}
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65, ease }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--ink)] px-7 py-4 text-sm font-semibold text-[var(--bg-elevated)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              View my work
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              data-cursor="hover"
              className="inline-flex items-center rounded-xl border border-[var(--line)] bg-white/50 px-7 py-4 text-sm font-semibold text-[var(--ink)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-deep)]/40 hover:bg-white/80"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        data-cursor="hover"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] text-[var(--muted)] uppercase">
          Scroll
        </span>
        <motion.span
          className="h-9 w-px origin-top bg-gradient-to-b from-[var(--accent-deep)] to-transparent"
          animate={
            reduce ? undefined : { opacity: [0.35, 1, 0.35], scaleY: [0.65, 1, 0.65] }
          }
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  )
}
