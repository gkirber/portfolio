# Portfolio Website 🌟

Modern portfolio website created with the latest web technologies.

## 🚀 Technologies

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide%20Icons-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

</div>

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

- Email: george.kirber@gmail.com
- WWW: [Iurii Rebryk](https://www.iuriirebryk.com)
- GitHub: [gkirber](https://github.com/gkirber)
- LinkedIn: [Iurii Rebryk](https://www.linkedin.com/in/iurii-rebryk)
