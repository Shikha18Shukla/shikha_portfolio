import { Router } from 'express'
import { z } from 'zod'
import { db } from '../db/index.js'
import { contactMessages } from '../db/schema.js'
import { notifyNewMessage } from '../lib/mailer.js'

export const contactRouter = Router()

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  email: z.string().trim().email('Enter a valid email address').max(200),
  message: z.string().trim().min(1, 'Message is required').max(4000),
})

// Very small in-memory rate limiter: 5 submissions per IP per 10 minutes.
// Good enough for a personal portfolio; swap for a proper store if this
// ever runs across multiple server instances.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  timestamps.push(now)
  hits.set(ip, timestamps)
  return timestamps.length > MAX_PER_WINDOW
}

contactRouter.post('/', async (req, res) => {
  const ip = req.ip ?? 'unknown'
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many messages sent. Please try again later.' })
  }

  const parsed = contactSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.issues[0]?.message ?? 'Invalid submission.' })
  }

  const { name, email, message } = parsed.data

  try {
    const [saved] = await db.insert(contactMessages).values({ name, email, message }).returning()
    const notification = await notifyNewMessage({ name, email, message })
    return res.status(201).json({ id: saved.id, emailSent: notification.sent })
  } catch (err) {
    console.error('Failed to save contact message:', err)
    return res.status(500).json({ error: 'Something went wrong while sending your message. Please try again.' })
  }
})
