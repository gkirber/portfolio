# Portfolio Website 🌟

Modern portfolio website created with the latest web technologies.

## 🚀 Technologies

- **[Next.js 15](https://nextjs.org/)** - React framework with Turbopack
- **[React 19](https://react.dev/)** - Library for building UI
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript superset
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[pnpm](https://pnpm.io/)** - Fast package manager

## ✨ Features

- 🎨 Modern, responsive design
- 🌙 Dark/light theme support
- ⚡ Fast builds with Turbopack
- 📱 Mobile responsive
- ♿ Accessibility (a11y)
- 🎯 SEO optimized
- 🔧 TypeScript for code reliability

## 🛠 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
# Development
pnpm dev          # Start dev server with Turbopack

# Build
pnpm build        # Create production build
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm type-check   # Check TypeScript types
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
```

## 🏗 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   │   ├── ui/            # UI components
│   │   └── ...
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Main layout
│   └── page.tsx           # Home page
├── lib/                   # Utility functions
├── types/                 # TypeScript types
├── public/                # Static files
└── ...
```

## 🎨 Customization

### Themes

The project supports light, dark, and system themes. Configuration can be found in:

- `app/components/ThemeProvider.tsx`
- `app/globals.css`

### Styles

Uses Tailwind CSS v4 with custom CSS variables for the design system.

### Components

All UI components are located in `app/components/ui/` and can be easily customized.

## 📱 Website Sections

- **Hero** - Welcome and main information
- **About** - About me and skills
- **Projects** - Portfolio projects
- **Skills** - Technical skills
- **Contact** - Contact information

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project supports deployment on any platform that supports Node.js:

- Netlify
- Railway
- Digital Ocean
- AWS

## 🤝 Contributing

Please open Issues or Pull Requests to improve the project.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 📧 Contact

**Iurii Rebryk**

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

Made with ❤️ and Next.js
