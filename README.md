# Portfolio components — ready to drop in

Copy these into your Next.js project, preserving the folder structure:

- `components/*.tsx` → into your project's `components/` folder
- `hooks/useReveal.ts` → into your project's `hooks/` folder (create it if it doesn't exist)
- `app/page.tsx` → replaces your existing homepage
- `app/globals.css` → replaces your existing globals.css (keeps your original color
  variables and dark mode system, plus the Tailwind typography plugin line)

## In Codespaces

Easiest way: use the file explorer to create each file at the matching path, then paste
the contents in from each file here.

## What's included

- `Header.tsx` — nav, burger menu, theme toggle wiring (client component)
- `ThemeToggle.tsx` — dark/light toggle with localStorage persistence (client component)
- `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Education.tsx`,
  `Contact.tsx`, `Footer.tsx` — static sections, ported directly from your original HTML
- `useReveal.ts` — scroll-reveal animation hook, replaces the IntersectionObserver logic
  from your old `main.js`
- `page.tsx` — assembles everything and calls the reveal hook once

## Still needed

- Install the typography plugin if you haven't: `npm install -D @tailwindcss/typography`
- The mobile nav currently shows/hides via Tailwind's `md:` breakpoint — tweak `Header.tsx`
  if you want different behavior
- Experience/Projects data is hardcoded in each component for now — could later be moved
  into `content/experience.md` etc. if you want it editable without touching code
