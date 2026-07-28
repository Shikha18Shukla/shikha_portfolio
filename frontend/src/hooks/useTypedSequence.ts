import { useEffect, useState } from 'react'

/**
 * Types out a sequence of strings one character at a time, pausing on
 * each completed word before deleting and moving to the next.
 */
export function useTypedSequence(words: readonly string[], options?: { typeSpeed?: number; deleteSpeed?: number; holdMs?: number }) {
  const { typeSpeed = 55, deleteSpeed = 30, holdMs = 1400 } = options ?? {}
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>('typing')

  useEffect(() => {
    const current = words[wordIndex % words.length]

    if (phase === 'typing') {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('holding'), holdMs)
      return () => clearTimeout(t)
    }

    if (phase === 'holding') {
      const t = setTimeout(() => setPhase('deleting'), holdMs)
      return () => clearTimeout(t)
    }

    // deleting
    if (text.length > 0) {
      const t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed)
      return () => clearTimeout(t)
    }
    setPhase('typing')
    setWordIndex((i) => (i + 1) % words.length)
  }, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, holdMs])

  return text
}
