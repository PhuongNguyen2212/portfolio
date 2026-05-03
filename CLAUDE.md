# CLAUDE.md

> Instructions for Claude Code when working in this repository.
> Read this file before making any changes.

---

## Project Overview

**phuong.dev** — Personal portfolio for Nguyen Tran Dinh Phuong.
Built with Next.js 14 App Router, TypeScript (strict), Tailwind CSS, deployed on Vercel.

**Live:** https://phuong-dev.vercel.app
**Owner:** Nguyen Tran Dinh Phuong

---

## Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Framework  | Next.js 14 (App Router)  |
| Language   | TypeScript 5 strict mode |
| Styling    | Tailwind CSS 3           |
| Animation  | Framer Motion            |
| Deployment | Vercel                   |

---

## Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build — must pass before any PR
npm run type-check   # TypeScript check — must pass with zero errors
npm run lint         # ESLint — must pass with zero warnings
npm run format       # Prettier format all files
```

**Always run `npm run type-check && npm run lint` before committing.**

---

## Project Structure

```
src/
├── app/               # Next.js App Router — layout.tsx + page.tsx only
├── components/
│   ├── layout/        # Nav.tsx, Footer.tsx — rendered once per page
│   ├── sections/      # Hero, Skills, Projects, Contact — one file per section
│   └── ui/            # Reusable: Button, RevealOnScroll, Ticker, SectionDivider
├── hooks/             # Custom hooks — useScrollSpy, useScrollProgress
├── lib/               # utils.ts — cn(), constants, SITE_URL, NAV_LINKS
├── types/             # portfolio.ts — Skill, Project interfaces
└── data/              # skills.ts, projects.ts — content only, no JSX
```

---

## Critical Rules

### TypeScript
- **Strict mode is on** — never use `any`, always type props and return values
- All component props must have an explicit `interface` or `type`
- All data arrays must be typed (e.g. `const skills: Skill[] = [...]`)
- Use union types for constrained values: `'Building' | 'Completed' | 'Coming Soon'`

### Components
- One component per file, named same as file (e.g. `Button.tsx` exports `Button`)
- Use named exports — not default exports — for components
- `page.tsx` must stay purely compositional — no logic, no state, just imports
- `'use client'` only when the component uses browser APIs, state, or event handlers

### Styling
- Tailwind utility classes only — no inline styles, no separate CSS files
- Use `cn()` from `@/lib/utils` to merge conditional classes
- Custom design tokens live in `tailwind.config.ts` — never hardcode hex colors in JSX
- Dark theme: `film-black` for background, `gold` for accent, `white/60` for muted text

### Data & Content
- **Never put content inside components** — all text, arrays, URLs go in `src/data/`
- To add a new project: edit `src/data/projects.ts` only
- To add a new skill: edit `src/data/skills.ts` only
- To change links or constants: edit `src/lib/utils.ts` only

### Performance
- Use `IntersectionObserver` for scroll effects — not scroll event listeners
- Add `{ passive: true }` to all scroll/touch event listeners
- Always `removeEventListener` in `useEffect` cleanup functions
- Images go through `next/image` — never raw `<img>` tags

### Git
- Commit messages must follow Conventional Commits:
  `feat:` `fix:` `chore:` `docs:` `style:` `refactor:` `perf:`
- Never commit directly to `main` — always use a branch + PR
- Never commit `.env.local` — it is gitignored for a reason

---

## Adding a New Project Card

1. Open `src/data/projects.ts`
2. Add a new object following this exact shape:

```ts
{
  id: 5,                              // next sequential number
  num: 'V',                           // Roman numeral
  title: 'Project Name',
  description: 'Two sentence max description.',
  tags: ['Next.js', 'TypeScript'],
  status: 'Building',                 // 'Building' | 'Completed' | 'Coming Soon'
  liveUrl: 'https://...',             // optional — omit if not live
  githubUrl: 'https://github.com/...', // optional
  gradient: 'from-[#100500] to-[#2A1000]', // dark gradient for thumbnail
}
```

3. Run `npm run type-check` — TypeScript will catch any missing required fields.

---

## Adding a New Skill

1. Open `src/data/skills.ts`
2. Add:

```ts
{ id: 7, name: 'Node.js', level: 'Learning', percent: 45 }
```

Valid levels: `'Learning' | 'Intermediate' | 'Solid' | 'In Progress'`

---

## Environment Variables

| Variable                          | Required | Purpose                    |
|-----------------------------------|----------|----------------------------|
| `NEXT_PUBLIC_ANALYTICS_ID`        | No       | Vercel Analytics           |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | No       | Contact form (if added)    |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | No       | Contact form (if added)    |

All vars are in `.env.example`. Copy to `.env.local` and fill in values.
Never add secrets to `next.config.ts` or any committed file.

---

## What NOT to Do

- Do NOT use `any` type — use `unknown` and narrow it, or define a proper type
- Do NOT write CSS in `.css` files — use Tailwind classes
- Do NOT put content/copy inside JSX — put it in `src/data/`
- Do NOT use `<img>` — use `next/image` with `alt` text
- Do NOT add scroll event listeners without `passive: true` and cleanup
- Do NOT commit `.env.local`, `node_modules/`, or `.next/`
- Do NOT create new files in `src/app/` — this is a single-page portfolio
- Do NOT break the existing animation system — test scroll reveals after changes

---

## Design System

| Token           | Value     | Usage                          |
|-----------------|-----------|--------------------------------|
| `gold`          | #B8963E   | Primary accent — links, borders, highlights |
| `gold-light`    | #D4AF62   | Hover states on gold elements  |
| `film-black`    | #080808   | Page background                |
| `film-dark`     | #0D0D0D   | Alternate section background   |
| `film-card`     | #141414   | Card and panel background      |
| `white/60`      | —         | Muted body text                |
| `white/20`      | —         | Placeholder / inactive text    |
| `font-cormorant`| —         | Display / headings (serif)     |
| `font-outfit`   | —         | Body / UI text (sans-serif)    |

---

## Architecture Principles

1. **Separation of concerns** — data in `/data`, logic in `/hooks`, UI in `/components`
2. **Single responsibility** — every component, hook, and util does ONE thing
3. **Type safety first** — if it compiles cleanly, it is one step closer to correct
4. **Content over code** — updating the site should require editing data files, not JSX
5. **Performance by default** — passive listeners, IntersectionObserver, next/font, next/image

---

*Last updated: 2026 — Nguyen Tran Dinh Phuong*
