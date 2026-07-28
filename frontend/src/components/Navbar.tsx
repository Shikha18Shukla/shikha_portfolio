import { useEffect, useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { GithubIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const links = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'open-source', label: 'open-source' },
  { id: 'profiles', label: 'profiles' },
  { id: 'contact', label: 'contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-ink tracking-tight">
          <span className="text-accent">&lt;</span>Shikha<span className="text-accent">/&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="px-3 py-2 rounded-md text-muted hover:text-ink hover:bg-surface transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-ink transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-1.5 text-[13px] font-medium text-ink hover:border-border-hover hover:bg-surface transition-colors"
          >
            <FileText size={14} /> Resume
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-1 font-mono text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
