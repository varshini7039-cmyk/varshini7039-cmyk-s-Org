# V Varshini — Premium Personal Portfolio Website

This repository contains the personal portfolio website for **V Varshini**, an Information Science and Engineering student at GM University, Karnataka, India.

## 🚀 Quick Setup & Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```

## 📂 Project Structure & Customization

All personal details, project descriptions, skills, education records, and contact links are centralized in a single file for easy updates:

- **Centralized Data**: `/src/data/portfolioData.ts`
  - Modify `PERSONAL_INFO` to update bio, email, or social URLs.
  - Modify `PROJECTS` to add new repositories, links, or screenshots.
  - Modify `SKILL_CATEGORIES` to add newly learned tools or frameworks.
  - Modify `ACHIEVEMENTS` & `EDUCATION_HISTORY` as academic milestones progress.

## 🎨 Theme & Typography

- **Palette**: Deep Obsidian/Charcoal (`#09080e`, `#110e1a`) with Cool Pink (`#f43f5e`, `#fb7185`) and subtle violet/blue accents.
- **Fonts**: `Plus Jakarta Sans` (Body prose), `Outfit` (Headings & display type), and `JetBrains Mono` (Tabular numerals & metadata).
- **Design Standard**: Compliant with zero-pill metadata discipline, WCAG contrast, and responsive layout math.

## 🌐 Production Deployment

To publish this portfolio to platforms like Vercel, Netlify, or GitHub Pages:
1. Run `npm run build` to generate the production `dist/` directory.
2. Link your GitHub repository (`varshini7039-cmyk`) to Vercel or Netlify for automatic continuous deployment.
