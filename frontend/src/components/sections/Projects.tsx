import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/ui/icons'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { projects, projectCategories } from '@/data/projects'
import { cn } from '@/lib/utils'

export function Projects() {
  const [active, setActive] = useState<string>('All')
  const filters = ['All', ...projectCategories]
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Things I've built."
          description="A mix of applied ML, computer vision, and full-stack projects — mostly built to answer a specific question I had."
        />

        <div className="mb-10 flex flex-wrap gap-2 font-mono text-xs">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full px-3.5 py-1.5 border transition-colors',
                active === f
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border text-muted hover:text-ink hover:border-border-hover'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className={cn(
                  'group rounded-xl border border-border bg-surface/50 p-6 hover:border-border-hover hover:bg-surface transition-colors flex flex-col',
                  p.featured && 'sm:col-span-2 lg:col-span-1'
                )}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg text-ink font-medium">{p.title}</h3>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="text-faint hover:text-ink transition-colors shrink-0"
                    >
                      <GithubIcon size={17} />
                    </a>
                  )}
                </div>

                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{p.description}</p>

                {p.features && (
                  <ul className="mb-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="text-xs text-muted flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-faint shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {p.metric && (
                  <p className="font-mono text-xs text-merge mb-4">↑ {p.metric}</p>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    view repo <ArrowUpRight size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
