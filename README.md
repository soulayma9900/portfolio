# Soulayma Hrira — Data Science Portfolio

A modern, minimalist, one-page portfolio built with **Angular 16** (standalone components), **SCSS**, and **tsParticles**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (18+ recommended)
- npm 8+

### Installation & Run

```bash
cd portfolio
npm install
npm start
# → http://localhost:4200
```

### Build for production

```bash
npm run build
# Output: dist/portfolio/
```

---

## 🎨 Customising Content

### Change accent colour

Open `src/styles.scss` — change **one line**:

```scss
$accent: #3b82f6;   // Blue   ← current
$accent: #10b981;   // Green
$accent: #f97316;   // Orange
$accent: #0ea5e9;   // Sky
```

### Update your data

All content lives in one file:
```
src/app/models/portfolio-data.service.ts
```

### Add a new project

```ts
{
  id: 7,
  title: 'My New Project',
  shortDescription: 'One sentence summary.',
  category: 'Machine Learning',
  tags: ['Python', 'FastAPI'],
  thumbnail: 'assets/images/project-placeholder.svg',
  images: ['assets/images/screenshot.png'],
  technologies: ['Python', 'FastAPI', 'Docker'],
  features: ['Feature one', 'Feature two'],
  results: ['Result one', 'Result two'],
  metrics: [{ label: 'Accuracy', value: '95', unit: '%' }],
  githubUrl: 'https://github.com/yourrepo',
  demoUrl: 'https://yourdemo.com',
}
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   ├── certificates/
│   │   │   ├── workflow/
│   │   │   ├── contact/
│   │   │   └── shared/
│   │   │       ├── navbar/
│   │   │       └── project-modal/
│   │   ├── models/
│   │   │   ├── portfolio.models.ts
│   │   │   └── portfolio-data.service.ts  ← ALL content here
│   │   ├── app.component.ts
│   │   └── app.config.ts
│   ├── assets/images/
│   ├── styles.scss                        ← Global styles + colour vars
│   └── index.html
├── angular.json
├── vercel.json
└── package.json
```

---

## ☁️ Deploy to Vercel

### Option A — CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B — GitHub import
1. Push to GitHub
2. Go to vercel.com → Add New Project → Import repo
3. Click Deploy — done in ~90s ✅

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 16 (standalone) |
| Styles | SCSS + CSS custom properties |
| Particles | tsParticles (CDN) |
| Fonts | Syne · DM Sans · JetBrains Mono |
| Deployment | Vercel |

---

## 🎨 Colour Variable Reference

| Variable | Default | Purpose |
|---|---|---|
| `$accent` | `#3b82f6` | Buttons, links, highlights |
| `$bg-primary` | `#f0f0ed` | Main page background |
| `$bg-card` | `rgba(255,255,255,0.72)` | Glass card fill |
| `$text-primary` | `#1a1a2e` | Headings |
| `$text-secondary` | `#4a5568` | Body text |
