import { education, profile } from '../data/portfolio'
import { Reveal, SectionHeading } from './Reveal'

export function Education() {
  return (
    <section id="education" className="section-pad py-24 md:py-28">
      <SectionHeading eyebrow="Education" title="Academic foundation." />
      <div className="grid gap-8 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.school + item.detail} delay={0.08 * i}>
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-deep)] uppercase">
              {item.period}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold">{item.detail}</h3>
            <p className="mt-1 text-[var(--ink-soft)]">
              {item.school} · {item.place}
            </p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <p className="text-sm text-[var(--muted)]">
          Based in {profile.location}. Open to exciting mobile and product roles.
        </p>
      </Reveal>
    </section>
  )
}
