import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { certifications } from '@/data/certifications'

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="07" eyebrow="Certifications" title="Coursework & credentials." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface/50 p-4 hover:border-border-hover transition-colors"
            >
              <Award size={17} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-ink leading-snug">{c.title}</p>
                <p className="font-mono text-xs text-faint mt-1">{c.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
