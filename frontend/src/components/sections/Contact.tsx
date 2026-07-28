import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, CheckCircle2, XCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'

type Status = 'idle' | 'loading' | 'success' | 'error'

const quickLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'WhatsApp', value: '+91 87997 04209', href: profile.socials.whatsapp, icon: MessageCircle },
  { label: 'LinkedIn', value: 'in/shikha-shukla', href: profile.socials.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', value: '@Shikha18Shukla', href: profile.socials.github, icon: GithubIcon },
]

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error((await res.json().catch(() => null))?.error ?? 'Something went wrong. Please try again.')
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="08"
          eyebrow="Contact"
          title="Let's talk."
          description="Have an internship, project, or research opportunity in mind? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-3">
            {quickLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-4 hover:border-border-hover hover:bg-surface transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 text-accent shrink-0">
                  <l.icon size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-faint">{l.label}</p>
                  <p className="text-sm text-ink truncate">{l.value}</p>
                </div>
              </a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-faint block mb-2">
                  name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-surface/50 px-4 py-2.5 text-sm text-ink placeholder:text-faint outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs text-faint block mb-2">
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-surface/50 px-4 py-2.5 text-sm text-ink placeholder:text-faint outline-none focus:border-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs text-faint block mb-2">
                message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-border bg-surface/50 px-4 py-2.5 text-sm text-ink placeholder:text-faint outline-none focus:border-accent transition-colors resize-none"
                placeholder="What would you like to talk about?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 rounded-lg bg-ink text-bg px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-merge">
                <CheckCircle2 size={16} /> Message sent — I'll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <XCircle size={16} /> {errorMsg}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
