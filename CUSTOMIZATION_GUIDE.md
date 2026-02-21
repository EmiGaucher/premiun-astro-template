# 🚀 Quick Start Guide - Astro SaaS Template by NeoSur

Congratulations on your purchase! This guide will help you customize your new template in minutes.

## 🛠️ Global Configuration

Most of your site identity is stored in a single file. Open:
`src/config/site.ts`

Here you can change:
- **`name`**: Your project's name (updates Navbar, Footer, and About pages).
- **`description`**: Your site's SEO description.
- **`url`**: Your production domain.
- **`links`**: Your Social Media handles.

## 🎨 Changing Colors & Branding

To change the primary colors or fonts, go to:
`src/styles/globals.css`

Look for the `:root` and `.dark` blocks. You can modify variables like:
- `--primary`: The main brand color (Purple by default).
- `--radius`: The roundness of buttons and cards.

## 📄 Customizing Pages

All pages are located in `src/pages/`.
- `index.astro`: The home page structure.
- `about.astro`: Your team/mission info.
- `contact.astro`: Your contact details.

**Pro Tip:** Most sections (Hero, Features, Pricing) are modular components. You can find their logic in `src/components/`.

## ✍️ Writing Blog Posts

To add new content, simply create a new `.md` or `.mdx` file in:
`src/content/blog/`

The site will automatically index and display them in the Blog section.

## 🚀 Deployment

1. **Vercel / Netlify**: Connect your GitHub repo and it will deploy automatically.
2. **Build Manually**: Run `npm run build` to generate the `dist` folder with optimized static files.

---

Build something amazing! 
Support: [neosur.gumroad.com](https://neosur.gumroad.com)
❤️ **NeoSur**
