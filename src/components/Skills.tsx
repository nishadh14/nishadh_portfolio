import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { Reveal, SectionHeading } from './Reveal'

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,26,23,0.03),transparent_30%,rgba(30,224,182,0.08))]" />
      <div className="section-pad relative">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to ship."
          description="A focused stack for mobile products — from UI to APIs to store releases."
        />

        <Reveal>
          <div className="mb-14 flex flex-wrap gap-3">
            {skills.highlight.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                whileHover={{ y: -4, scale: 1.04 }}
                data-cursor="hover"
                className="rounded-xl border border-[var(--ink)]/10 bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={0.06 * i}>
              <h3 className="font-display mb-4 text-xl font-semibold">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[var(--ink-soft)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-deep)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
