import { motion } from 'framer-motion'

type Props = {
  index: string // e.g. "02"
  eyebrow: string // e.g. "Skills"
  title: string
  description?: string
}

export function SectionHeading({ index, eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-12 max-w-2xl"
    >
      <p className="font-mono text-sm text-accent mb-3">
        <span className="text-faint">// {index}</span> {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">{title}</h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </motion.div>
  )
}
