# Moiz Arif — Portfolio

A modern, responsive portfolio and CV website built with React, Vite, and Tailwind CSS.

🔗 **Live Site**: [Coming Soon](#)

## ✨ Features

- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Dark/Light Mode** — Theme toggle with localStorage persistence
- **Scroll Animations** — Smooth fade-in animations using Intersection Observer
- **Active Navigation** — Highlights current section in the navbar
- **Mobile Navigation** — Animated hamburger menu with slide-in panel
- **Modular Architecture** — Clean component-based structure with separated data layer
- **SEO Optimized** — Meta tags, Open Graph, and Twitter Card support

## 🛠️ Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool and dev server
- **Tailwind CSS 4** — Utility-first CSS framework
- **No additional dependencies** — Pure React with custom hooks

## 📁 Project Structure

```
src/
├── data/           # All portfolio content (easy to edit)
├── components/
│   ├── layout/     # Header, Footer, SectionWrapper
│   ├── sections/   # Hero, About, Experience, Education, Projects, Publications, ResearchAreas
│   └── ui/         # SkillBadge, ProjectCard, ExperienceCard, PublicationCard, ThemeToggle, ScrollToTop
├── hooks/          # useScrollAnimation, useActiveSection
└── context/        # ThemeContext (dark/light mode)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/moizarif/moiz-portfolio.git
cd moiz-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## ✏️ Customizing Content

All portfolio content is stored in `src/data/` files for easy editing:

| File | Content |
|------|---------|
| `experience.js` | Work experience entries |
| `education.js` | Education entries |
| `projects.js` | Project showcase entries |
| `publications.js` | Research publications |
| `skills.js` | Skills organized by category |
| `socialLinks.js` | Social media and contact links |

### Adding a New Project

Edit `src/data/projects.js` and add an entry:

```js
{
  title: "Project Name",
  description: "Brief description",
  image: null,
  tags: ["React", "Python"],
  github: "https://github.com/...",
  demo: "https://...",
  featured: true,
}
```

### Updating Your Resume

Replace `public/resume.pdf` with your actual resume PDF file.

### Adding a Profile Photo

Replace `src/assets/profile-placeholder.svg` with your photo (update the import in `src/components/sections/Hero.jsx`).

## 🌐 Deployment

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Set `base` in `vite.config.js`: `base: '/moiz-portfolio/'`
4. Run: `npm run deploy`

### Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📄 License

MIT License — feel free to use this as a template for your own portfolio.
