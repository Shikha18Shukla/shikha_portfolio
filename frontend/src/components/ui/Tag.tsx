import { cn } from '@/lib/utils'

export function Tag({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'merge' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-xs leading-none',
        tone === 'default' && 'border-border text-muted bg-surface',
        tone === 'merge' && 'border-merge/30 text-merge bg-merge/10'
      )}
    >
      {children}
    </span>
  )
}
