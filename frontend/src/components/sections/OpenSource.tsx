import { motion } from 'framer-motion'
import { GitMerge, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { openSourceOrgs, repos, openSourceSummary } from '@/data/openSource'

export function OpenSource() {
  return (
    <section id="open-source" className="py-24 sm:py-32 border-t border-border relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="05" eyebrow="Open Source" title="Merged into production codebases." description={openSourceSummary} />

        <div className="mb-10 flex flex-wrap gap-2">
          {openSourceOrgs.map((org) => (
            <span
              key={org}
              className="font-mono text-xs rounded-full border border-accent/30 bg-accent/10 text-accent px-3 py-1.5"
            >
              {org}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-surface/50 overflow-hidden hover:border-border-hover transition-colors"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <h3 className="font-display text-ink font-medium">{repo.name}</h3>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-faint hover:text-ink transition-colors inline-flex items-center gap-1 font-mono text-xs"
                >
                  repo <ArrowUpRight size={12} />
                </a>
              </div>

              <ul className="divide-y divide-border">
                {repo.prs.map((pr) => (
                  <li key={pr.id} className="flex items-start gap-3 px-5 py-3">
                    <GitMerge size={15} className="text-merge mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm text-ink leading-snug">{pr.title}</p>
                      <p className="font-mono text-xs text-faint mt-0.5">
                        {pr.id} <span className="text-merge">merged</span>
                      </p>
                    </div>
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
