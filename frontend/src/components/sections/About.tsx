import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

const pillars = [
  {
    title: 'Why I build',
    body: 'Every problem is a chance to sharpen how I think. I like the moment a system finally clicks into place — that feedback loop is what keeps me writing code long after the assignment is done.',
  },
  {
    title: 'Why AI',
    body: 'I believe intelligent systems will reshape how software gets built and used. I want to understand that shift from the inside — not just use AI, but build with it responsibly.',
  },
  {
    title: 'Why open source',
    body: 'Contributing to real repositories exposes me to production-grade code, review culture, and collaboration across time zones — the parts of engineering a classroom can\'t teach.',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="About" title="A CS student who learns by shipping." />

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5 text-muted leading-relaxed"
          >
            <p>
              I'm a Computer Science undergraduate at {profile.education.school}, currently in my final year and
              working toward internships where I can learn from experienced engineers, take real feedback, and see
              how software gets built outside a classroom.
            </p>
            <p>
              My day-to-day sits at the intersection of core software engineering and applied AI/ML — writing
              clean backend code, then figuring out how to make it a little more intelligent.
            </p>
            <div className="pt-2 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
              <div>
                <div className="text-faint">location</div>
                <div className="text-ink">{profile.location}</div>
              </div>
              <div>
                <div className="text-faint">degree</div>
                <div className="text-ink">{profile.education.degree}</div>
              </div>
              <div>
                <div className="text-faint">cgpa</div>
                <div className="text-ink">{profile.education.cgpa}</div>
              </div>
              <div>
                <div className="text-faint">graduating</div>
                <div className="text-ink">2027</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-surface/50 p-5 hover:border-border-hover transition-colors"
              >
                <h3 className="font-display text-ink font-medium mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
