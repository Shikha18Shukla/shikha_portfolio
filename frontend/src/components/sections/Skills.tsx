import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories } from '@/data/skills'

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" eyebrow="Skills" title="What I work with." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-border bg-surface/50 p-5 hover:border-border-hover hover:bg-surface transition-colors"
            >
              <p className="font-mono text-xs text-faint mb-1">// {cat.comment}</p>
              <h3 className="font-display text-ink font-medium text-lg mb-4">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-surface-2 border border-border px-2.5 py-1 text-xs font-mono text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
