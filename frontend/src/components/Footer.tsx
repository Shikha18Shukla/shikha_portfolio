import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-sm text-ink">
            <span className="text-accent">&lt;</span>Shikha<span className="text-accent">/&gt;</span>
          </p>
          <p className="text-xs text-faint mt-1">© {new Date().getFullYear()} Shikha Shukla. Built from scratch, line by line.</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors" aria-label="GitHub">
            <GithubIcon size={17} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors" aria-label="LinkedIn">
            <LinkedinIcon size={17} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted hover:text-ink transition-colors" aria-label="Email">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}
