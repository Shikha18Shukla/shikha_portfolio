# Shikha Shukla — Portfolio (Frontend)

A recruiter-facing personal site built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- **React 19 + TypeScript** — component architecture
- **Vite** — dev server & build
- **Tailwind CSS v4** — utility-first styling, theme tokens in `src/index.css`
- **Framer Motion** — scroll reveals, hero sequence, hover interactions
- **lucide-react** — iconography (brand marks like GitHub/LinkedIn are hand-rolled in `src/components/ui/icons.tsx` since lucide dropped trademarked logos)

## Project structure

```
frontend/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.svg
│   └── resume.pdf        ← add your resume here (see ASSETS_README.txt)
├── src/
│   ├── components/
│   │   ├── ui/            # Button, Tag, SectionHeading, brand icons
│   │   ├── sections/       # Hero, About, Skills, Experience, Projects,
│   │   │                    OpenSource, CodingProfiles, Certifications, Contact
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── data/               # All content lives here — edit these files to update the site
│   ├── hooks/               # useTypedSequence (hero typing animation)
│   ├── lib/                 # cn() className helper
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css            # design tokens (colors, fonts, animations)
├── index.html                # SEO meta tags, OpenGraph, Twitter cards
└── vite.config.ts
```

## Editing content

Everything you'd want to update lives in `src/data/*.ts` — profile info, skills,
experience, projects, open source PRs, coding profiles, and certifications.
No need to touch component files for content changes.

## Local development

```bash
npm install
cp .env.example .env      # set VITE_API_URL if your backend isn't on localhost:4000
npm run dev
```

Visit `http://localhost:5173`.

## Before deploying

1. Drop your real `resume.pdf` and a `og-image.png` (1200×630) into `public/`.
2. Update the `canonical` and `og:url` URLs in `index.html` once you have a domain.
3. Point `VITE_API_URL` at your deployed backend.

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deployment (Vercel)

1. Push this folder to a GitHub repo (or connect a monorepo with `frontend/` as the root directory).
2. In Vercel: **New Project → Import → set Root Directory to `frontend`**.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (Vercel detects this automatically).
4. Add environment variable `VITE_API_URL` = your backend's deployed URL.
5. Deploy.

## Deployment (Netlify)

1. **New site from Git**, set base directory to `frontend`.
2. Build command: `npm run build`. Publish directory: `frontend/dist`.
3. Add environment variable `VITE_API_URL`.
4. Deploy.
