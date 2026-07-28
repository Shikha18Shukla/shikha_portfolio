# Shikha Shukla — Portfolio

A from-scratch, production-ready personal portfolio: a React/TypeScript/Tailwind
frontend and an Express/PostgreSQL backend for the contact form.

```
portfolio/
├── frontend/     React + TypeScript + Tailwind CSS v4 + Framer Motion
└── backend/      Express + Drizzle ORM + PostgreSQL (contact form API)
```

Each folder is a standalone project with its own `package.json`, `README.md`,
and `.env.example` — see `frontend/README.md` and `backend/README.md` for
full setup and deployment steps.

## Quickstart

```bash
# Terminal 1 — backend
cd backend
cp .env.example .env    # set DATABASE_URL
npm install
npm run db:generate && npm run db:migrate
npm run dev              # http://localhost:4000

# Terminal 2 — frontend
cd frontend
cp .env.example .env
npm install
npm run dev               # http://localhost:5173
```

## What's included

- **10 sections**: Hero, About, Skills, Experience, Projects (filterable by
  category), Open Source contributions (merged PRs across ELUSoC/GSSOC),
  Coding Profiles, Certifications, Contact (wired to a real backend), Footer.
- **Design**: dark-mode-first, near-black surfaces, a restrained indigo→violet
  accent, and a terminal/code-editor visual language (monospace section labels,
  a typed hero sequence, a "merged" PR feed) that's grounded in the fact that
  this is a developer's site — not a generic gradient landing page.
- **Engineering**: TypeScript throughout, path aliases (`@/`), content
  separated into `src/data/*.ts` so updates don't require touching components,
  accessible focus states, `prefers-reduced-motion` support, responsive down
  to mobile, SEO metadata + OpenGraph + `robots.txt` + `sitemap.xml`.
- **Contact form**: validates with Zod, rate-limits by IP, persists to
  Postgres via Drizzle, and optionally emails a notification — all through a
  real API, not a mailto: link.

## Before you deploy

- [ ] Add `resume.pdf` and `og-image.png` to `frontend/public/` (see `ASSETS_README.txt` there)
- [ ] Update the canonical URL in `frontend/index.html` once you have a domain
- [ ] Provision a Postgres database and run migrations (`backend/README.md`)
- [ ] Set `VITE_API_URL` (frontend) and `CORS_ORIGIN` (backend) to match your real deployed URLs
