# Portfolio Edit Guide

A mapping of files and what they control, so you know where to make changes.

---

## Data Files (text/content changes)

| File | What it controls |
|------|-----------------|
| `src/data/experience.js` | Work experience entries (job titles, companies, descriptions) |
| `src/data/education.js` | Education entries (degrees, schools) |
| `src/data/projects.js` | Project cards (titles, descriptions, links) |
| `src/data/publications.js` | Research publications list |
| `src/data/skills.js` | Skill badges/tags |
| `src/data/socialLinks.js` | Email, LinkedIn, GitHub URLs |

---

## Section Components (inline text like headlines, bios, stats)

| File | What it controls |
|------|-----------------|
| `src/components/sections/Hero.jsx` | Hero headline, subtitle, tagline, stats ("13+ Years Experience", "10+ Research Publications") |
| `src/components/sections/About.jsx` | About section bio text |
| `src/components/sections/Experience.jsx` | Experience section heading + renders data from `experience.js` |
| `src/components/sections/Education.jsx` | Education section heading + renders data from `education.js` |
| `src/components/sections/Projects.jsx` | Projects section heading + renders data from `projects.js` |
| `src/components/sections/Publications.jsx` | Publications section heading |
| `src/components/sections/ResearchAreas.jsx` | Research areas content |

---

## Layout (name, nav, footer)

| File | What it controls |
|------|-----------------|
| `src/components/layout/Header.jsx` | Name ("Moiz Arif"), subtitle in the nav bar, navigation links |
| `src/components/layout/Footer.jsx` | Footer text and links |

---

## UI Components (card templates / rendering)

| File | What it controls |
|------|-----------------|
| `src/components/ui/SkillBadge.jsx` | How individual skill tags render |
| `src/components/ui/ExperienceCard.jsx` | How experience entries render |
| `src/components/ui/ProjectCard.jsx` | How project cards render |
| `src/components/ui/PublicationCard.jsx` | How publication entries render |
| `src/components/ui/ThemeToggle.jsx` | Dark/light mode toggle button |
| `src/components/ui/ScrollToTop.jsx` | Scroll-to-top button |

---

## Other Files

| File | What it controls |
|------|-----------------|
| `index.html` | Page `<title>`, favicon, meta tags |
| `src/index.css` | Global styles, animations, dark mode config |
| `src/App.jsx` | Main app layout, section ordering |
| `src/main.jsx` | App entry point, theme provider wrapper |
| `public/resume.pdf` | The downloadable resume file |
| `src/assets/profile-placeholder.svg` | Profile image (replace with your actual photo) |
| `src/context/ThemeContext.jsx` | Dark/light theme state management |

---

## Quick Reference

- **To change your personal info/content** → edit files in `src/data/`
- **To change headlines, bios, or stats** → edit the corresponding `src/components/sections/` file
- **To change your name or nav bar** → edit `src/components/layout/Header.jsx`
- **To change how cards look** → edit files in `src/components/ui/`
- **To change page title or meta tags** → edit `index.html`
- **To replace your profile photo** → replace `src/assets/profile-placeholder.svg` with your image
- **To update your resume** → replace `public/resume.pdf`
