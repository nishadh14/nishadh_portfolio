import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#d7e3de,transparent_40%,rgba(30,224,182,0.15))]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[var(--accent-deep)] uppercase">
            Contact
          </p>
          <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build something exceptional.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-[var(--ink-soft)] sm:text-lg">
            Whether it&apos;s a Flutter product, React Native app, or a full mobile release cycle —
            I&apos;d love to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href={`mailto:${profile.email}`}
            data-cursor="hover"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl bg-[var(--ink)] px-7 py-4 text-sm font-semibold text-[var(--bg-elevated)]"
          >
            {profile.email}
          </motion.a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="rounded-xl border border-[var(--ink)]/20 bg-white/50 px-6 py-4 text-sm font-semibold backdrop-blur-sm"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="rounded-xl border border-[var(--ink)]/20 bg-white/50 px-6 py-4 text-sm font-semibold backdrop-blur-sm"
          >
            GitHub
          </a>
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <p className="text-sm text-[var(--muted)]">{profile.phone}</p>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="section-pad border-t border-[var(--line)] py-8">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="font-display text-[var(--ink)]">Crafted with React · Motion · Intention</p>
      </div>
    </footer>
  )
}
