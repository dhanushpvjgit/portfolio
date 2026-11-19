# Portfolio — Java Backend Developer

Bilingual (German / English) personal portfolio built with React, Vite, Tailwind CSS and Framer Motion.
Same design as the Data Engineering portfolio, re-targeted to a Java backend profile.

## Edit the content

Everything lives in `src/content.js`:

- `site` — name, initials, email, GitHub, resume link, copyright year (resume button hides when `resumeUrl` is empty)
- `translations.en` / `translations.de` — hero, about, experience, education, projects, contact, footer

Placeholders to replace: name, email, GitHub, company, dates, education, location. Work-experience bullets are
reference drafts chosen from Java backend resumes — rewrite them to match his real experience.
Also update the `<title>` in `index.html`.

## Run locally

```bash
npm install
npm run dev
```

## Production build / Vercel

```bash
npm run build
npm run preview
```

On Vercel: import the repo, framework preset **Vite** (build `npm run build`, output `dist`).
