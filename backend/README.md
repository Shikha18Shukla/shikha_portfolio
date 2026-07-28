# Portfolio Backend

Express + PostgreSQL (via Drizzle ORM) API that powers the contact form on the
portfolio frontend. Saves every message to the database and optionally emails
a notification.

## Stack

- **Express 5** — HTTP server
- **Drizzle ORM** + **postgres.js** — schema, queries, migrations
- **Zod** — request validation
- **Nodemailer** — optional email notification (skipped gracefully if unset)

## Project structure

```
backend/
├── src/
│   ├── db/
│   │   ├── schema.ts     # contact_messages table
│   │   └── index.ts      # drizzle + postgres.js client
│   ├── routes/
│   │   └── contact.ts    # POST /api/contact — validate, rate-limit, save, notify
│   ├── lib/
│   │   └── mailer.ts     # optional SMTP notification
│   └── index.ts          # server entry
├── drizzle.config.ts
└── drizzle/               # generated SQL migrations (commit these)
```

## Local development

1. Have a Postgres instance running (local install, Docker, or a free tier on
   [Neon](https://neon.tech), [Supabase](https://supabase.com), or Railway).
2. ```bash
   cp .env.example .env
   # fill in DATABASE_URL at minimum
   npm install
   npm run db:generate   # generate SQL from src/db/schema.ts (already done once — rerun after schema changes)
   npm run db:migrate    # apply migrations to your database
   npm run dev            # starts on http://localhost:4000 with hot reload
   ```
3. Confirm it's up: `curl http://localhost:4000/health` → `{"status":"ok"}`

## API

### `POST /api/contact`

```json
{ "name": "string", "email": "string", "message": "string" }
```

- Validates input with Zod (name/email/message required, sane length limits).
- Rate-limited to 5 submissions per IP per 10 minutes (in-memory — fine for a
  single-instance deployment; swap for Redis if you scale out).
- Saves the message to the `contact_messages` table.
- Sends an email notification if `SMTP_HOST`/`SMTP_USER`/`SMTP_PASS`/`NOTIFY_EMAIL`
  are set — otherwise the message is still saved, no error is raised.

Responses: `201` on success, `400` on validation error, `429` if rate-limited,
`500` on server error.

## Build & run in production

```bash
npm run build
npm start
```

## Deployment (Render)

1. New **Web Service**, root directory `backend`.
2. Build command: `npm install && npm run build`. Start command: `npm start`.
3. Add a Render **PostgreSQL** instance (or bring your own) and set `DATABASE_URL`.
4. Set `CORS_ORIGIN` to your deployed frontend URL.
5. Run migrations once, either via Render's shell (`npm run db:migrate`) or locally
   against the production `DATABASE_URL`.
6. Optionally set the `SMTP_*` and `NOTIFY_EMAIL` variables for email alerts.

## Deployment (Railway)

1. New project → deploy from GitHub, root directory `backend`.
2. Add a Railway **PostgreSQL** plugin — it injects `DATABASE_URL` automatically.
3. Set `CORS_ORIGIN` to your frontend's deployed URL.
4. Set the start command to `npm run build && npm start` (or configure a build step + `npm start`).
5. Run `npm run db:migrate` once (via Railway's shell) to create the table.
