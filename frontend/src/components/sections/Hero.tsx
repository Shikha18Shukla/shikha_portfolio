import { motion } from 'framer-motion'
import { ArrowRight, Mail, FileText } from 'lucide-react'
import { GithubIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'
import { useTypedSequence } from '@/hooks/useTypedSequence'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const typed = useTypedSequence(profile.roles)

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="absolute inset-0 grid-fade pointer-events-none" />
      <div className="absolute inset-0 glow pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-merge animate-pulse" />
          Open to Summer 2027 internships
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono text-sm text-faint mb-4"
        >
          shikha@dev <span className="text-accent">~</span> whoami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl font-medium tracking-tight text-ink max-w-3xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-5 h-9 flex items-center"
        >
          <span className="font-mono text-lg sm:text-xl text-gradient font-medium">{typed}</span>
          <span className="ml-1 h-6 w-[2px] bg-accent animate-blink" aria-hidden />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-6 max-w-xl text-muted text-lg leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button href="#projects" variant="primary" icon={<ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />}>
            View Projects
          </Button>
          <Button href={profile.resumeUrl} variant="secondary" external icon={<FileText size={15} />}>
            View Resume
          </Button>
          <Button href={profile.socials.github} variant="secondary" external icon={<GithubIcon size={15} />}>
            GitHub
          </Button>
          <Button href="#contact" variant="secondary" icon={<Mail size={15} />}>
            Contact
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
