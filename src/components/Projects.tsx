import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[var(--ink)]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 20% 10%, rgba(30,224,182,0.25), transparent), radial-gradient(ellipse 50% 35% at 90% 80%, rgba(30,224,182,0.12), transparent)',
        }}
      />

      <div className="section-pad relative">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-[var(--accent)] uppercase">
            Projects
          </p>
          <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-white sm:text-5xl">
            Selected work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
            A few builds that show how I think about product flow, APIs, and polish.
          </p>
        </Reveal>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.05 * i} y={28}>
              <motion.article
                data-cursor="hover"
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group grid gap-4 py-8 md:grid-cols-[120px_1fr_auto] md:items-start md:gap-8 md:py-10"
              >
                <p className="text-sm font-medium text-[var(--accent)]">{project.year}</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white transition-colors group-hover:text-[var(--accent)] sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/15 px-2.5 py-1 text-xs text-white/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="hidden items-center gap-2 text-sm text-white/50 transition group-hover:text-[var(--accent)] md:mt-2 md:inline-flex">
                  Case study soon
                  <span aria-hidden>→</span>
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
