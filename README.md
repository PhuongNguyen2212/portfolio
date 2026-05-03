# phuong.dev

Personal portfolio of **Tran Dinh Phuong Nguyen** — a developer crafting cinematic, performant web experiences.

Live: <https://phuong-dev.vercel.app>

---

## Stack

| Layer      | Tech                                  |
|------------|---------------------------------------|
| Framework  | Next.js 16 (App Router, Turbopack)    |
| Language   | TypeScript 5 (strict)                 |
| Styling    | Tailwind CSS 4 (CSS-first config)     |
| Fonts      | Cormorant Garamond + Outfit (next/font) |
| Deployment | Vercel                                |

Single-page, fully static (`○` prerendered) — no API routes, no server runtime needed.

---

## Project structure

```
src/
├── app/                   # Next.js App Router (layout + page only)
│   ├── globals.css        # Tailwind 4 theme tokens + reduced-motion rules
│   ├── layout.tsx         # Root layout, fonts, metadata, viewport
│   └── page.tsx           # Compositional root — sections only
├── components/
│   ├── layout/            # Nav (with mobile menu), Footer
│   ├── sections/          # Hero, Skills, Projects, Contact
│   └── ui/                # Button, RevealOnScroll, Ticker, SectionDivider
├── data/                  # skills.ts, projects.ts — content lives here
├── hooks/                 # useScrollSpy, useScrollProgress
├── lib/                   # cn(), constants, owner info, NAV_LINKS
└── types/                 # Skill, Project, NavLink interfaces
```

**Edit content, not JSX.** Adding a project or skill is a one-file change in `src/data/`.

---

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (Turbopack)
npm run lint         # ESLint
npx tsc --noEmit     # TypeScript check
```

> **Note:** if dev fails with `Can't resolve 'tailwindcss'`, you have a stray
> `package-lock.json` in a parent directory and Turbopack is inferring the wrong
> workspace root. The fix is already applied via `turbopack.root` in
> [`next.config.ts`](next.config.ts) — keep it pinned.

---

## Design system

Tokens live in [`src/app/globals.css`](src/app/globals.css) under `@theme` blocks (Tailwind 4 CSS-first config — no `tailwind.config.ts` needed).

| Token             | Value     | Usage                                        |
|-------------------|-----------|----------------------------------------------|
| `gold`            | `#B8963E` | Primary accent — links, borders, highlights  |
| `gold-light`      | `#D4AF62` | Hover states on gold elements                |
| `film-black`      | `#080808` | Page background                              |
| `film-dark`       | `#0D0D0D` | Alternate section background                 |
| `film-card`       | `#141414` | Card and panel background                    |
| `font-cormorant`  | —         | Display / headings (serif)                   |
| `font-outfit`     | —         | Body / UI text (sans-serif)                  |

Use them as standard Tailwind utilities: `bg-film-black`, `text-gold`, `font-cormorant`, etc.

---

## Adding a project

Edit [`src/data/projects.ts`](src/data/projects.ts) and append:

```ts
{
  id: 5,
  num: 'V',                                // Roman numeral
  title: 'Project Name',
  description: 'Two-sentence-max description.',
  tags: ['Next.js', 'TypeScript'],
  status: 'Building',                      // 'Building' | 'Completed' | 'Coming Soon'
  liveUrl: 'https://...',                  // optional
  githubUrl: 'https://github.com/...',     // optional
  gradient: 'from-[#100500] to-[#2A1000]', // dark gradient for thumbnail
}
```

TypeScript will refuse to build if any required field is missing.

## Adding a skill

Edit [`src/data/skills.ts`](src/data/skills.ts):

```ts
{ id: 7, name: 'Node.js', level: 'Learning', percent: 45 }
```

Valid levels: `'Learning' | 'Intermediate' | 'Solid' | 'In Progress'`.

---

## Conventions

- **No `any`** — strict TypeScript, all props typed via `interface`.
- **Named exports** — one component per file, named the same as the file.
- **Content out of JSX** — all copy lives in `src/data/` or `src/lib/utils.ts`.
- **`'use client'` only when needed** — browser APIs, state, or event handlers.
- **Passive scroll listeners** + `IntersectionObserver` over scroll events.
- **`next/image` only** — never raw `<img>`.
- **Conventional Commits** — `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `perf:`.

---

## Accessibility & performance

- Static prerender, no client-side data fetching.
- Self-hosted fonts via `next/font` (no FOIT, no CLS).
- `prefers-reduced-motion` disables ticker scroll, smooth scroll, and animations.
- Mobile menu traps focus via Escape, locks body scroll, restores on close.
- Tap targets ≥ 44px on mobile.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` with `id`s for in-page anchors.

---

*Built and maintained by Tran Dinh Phuong Nguyen.*
