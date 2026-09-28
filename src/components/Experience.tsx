import { experience } from '../data/portfolio'
import { Reveal, SectionHeading } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="section-pad py-24 md:py-32">
      <SectionHeading
        eyebrow="Experience"
        title="Where I’ve been shipping."
        description="Professional roles focused on Flutter apps, API integrations, and production releases."
      />

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-px bg-[var(--line)] md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((job, i) => {
            const left = i % 2 === 0
            return (
              <Reveal key={job.company} delay={0.08 * i}>
                <article className="relative grid gap-6 md:grid-cols-2">
                  <div
                    className={`absolute top-2 left-[-5px] h-2.5 w-2.5 rounded-full bg-[var(--accent-deep)] ring-4 ring-[var(--bg)] md:left-1/2 md:-translate-x-1/2`}
                  />

                  <div className={`${left ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                    <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-deep)] uppercase">
                      {job.period}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-semibold">{job.role}</h3>
                    <p className="mt-1 text-[var(--ink-soft)]">
                      {job.company} · {job.location}
                    </p>
                    <ul className={`mt-5 space-y-2 text-[var(--ink-soft)] ${left ? 'md:ml-auto' : ''} max-w-md`}>
                      {job.points.map((point) => (
                        <li key={point} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
