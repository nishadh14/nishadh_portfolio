import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={reduce ? false : { y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-[var(--line)] bg-[rgba(230,235,232,0.9)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="section-pad flex h-[4.25rem] items-center justify-between">
        <a href="#top" className="group flex items-center gap-3" data-cursor="hover">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1ee0b6] font-display text-sm font-semibold text-[#060d0b] transition-transform duration-300 group-hover:scale-105">
            NN
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-[var(--ink)]">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="hover"
              className="relative text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            data-cursor="hover"
            className="rounded-xl bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--bg-elevated)] transition-transform duration-300 hover:scale-[1.03]"
          >
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-[var(--ink)] transition ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-[var(--ink)] transition ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-[var(--ink)] transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="section-pad flex h-[calc(100vh-4.25rem)] flex-col gap-6 bg-[var(--bg)] pt-8 md:hidden"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05 * i }}
              className="font-display text-4xl font-semibold"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}
