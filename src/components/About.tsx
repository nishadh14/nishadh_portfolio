import { profile } from '../data/portfolio'
import { Reveal, SectionHeading } from './Reveal'

export function About() {
  return (
    <section id="about" className="section-pad relative py-24 md:py-32">
      <SectionHeading
        eyebrow="About"
        title="Building mobile products people trust."
        description={profile.summary}
      />

      <div className="grid gap-10 md:grid-cols-3">
        {[
          {
            label: 'Focus',
            value: 'Cross-platform apps for Android & iOS with production-grade quality.',
          },
          {
            label: 'Approach',
            value: 'Clean architecture, responsive UI, and performance-minded shipping.',
          },
          {
            label: 'Stack edge',
            value: 'Flutter & Dart core, plus React / React Native for web-native flexibility.',
          },
        ].map((item, i) => (
          <Reveal key={item.label} delay={0.08 * i}>
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[var(--accent-deep)] uppercase">
              {item.label}
            </p>
            <p className="text-lg leading-relaxed text-[var(--ink-soft)]">{item.value}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
