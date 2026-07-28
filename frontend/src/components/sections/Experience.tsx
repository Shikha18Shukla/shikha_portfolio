import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" eyebrow="Experience" title="Where I've worked." />

        <div className="max-w-3xl">
          {experience.map((item, i) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 border-l border-border pb-2"
            >
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                <h3 className="font-display text-xl text-ink font-medium">{item.role}</h3>
                <span className="font-mono text-xs text-faint">{item.period}</span>
              </div>
              <p className="font-mono text-sm text-accent mb-4">{item.org}</p>
              <ul className="space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-faint mt-1.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
