import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { codingProfiles, codingAchievements } from '@/data/codingProfiles'

export function CodingProfiles() {
  return (
    <section id="profiles" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="06" eyebrow="Coding Profiles" title="Where I keep score." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {codingAchievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-surface/50 p-5"
            >
              <p className="font-display text-2xl text-ink font-medium">{a.value}</p>
              <p className="text-xs text-muted mt-1">{a.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {codingProfiles.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-4 py-2.5 text-sm text-ink hover:border-border-hover hover:bg-surface transition-colors"
            >
              {p.name}
              {p.stat && <span className="font-mono text-xs text-faint">{p.stat}</span>}
              <ArrowUpRight size={13} className="text-faint group-hover:text-accent transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
