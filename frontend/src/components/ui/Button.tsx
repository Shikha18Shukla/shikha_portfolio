import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  external?: boolean
}

export function Button({ href, children, variant = 'secondary', icon, external }: Props) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={cn(
        'group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200',
        variant === 'primary' &&
          'bg-ink text-bg hover:bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]',
        variant === 'secondary' &&
          'border border-border text-ink bg-surface/60 hover:border-border-hover hover:bg-surface-2'
      )}
    >
      {children}
      {icon}
    </a>
  )
}
