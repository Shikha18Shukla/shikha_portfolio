import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { contactRouter } from './routes/contact.js'

const app = express()
const PORT = Number(process.env.PORT ?? 4000)
const ALLOWED_ORIGIN = process.env.CORS_ORIGIN ?? 'http://localhost:5173'

app.use(cors({ origin: ALLOWED_ORIGIN }))
app.use(express.json({ limit: '20kb' }))

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/contact', contactRouter)

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Portfolio API listening on http://localhost:${PORT}`)
})
