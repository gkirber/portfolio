# GitHub Repository Setup 🚀

## Step 1: GitHub CLI Authentication

If GitHub CLI is not already authenticated, run:

```bash
gh auth login
```

Choose:

- GitHub.com
- HTTPS
- Your browser for authentication

## Step 2: Create Repository

After authentication, create the repository:

```bash
gh repo create portfolio --public --description "Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4"
```

Or for a private repository:

```bash
gh repo create portfolio --private --description "Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4"
```

## Step 3: Connect to Remote Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 4: Set Up Vercel for Deployment

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import the `portfolio` repository
4. Vercel will automatically detect Next.js and configure the build
5. Your site will be available at a Vercel URL

## Alternative Method (GitHub Web Interface)

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name the repository `portfolio`
4. Add description: "Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4"
5. Choose public or private
6. **DO NOT add** README, .gitignore, or license (they already exist)
7. Create repository
8. Copy the commands for connecting an existing repository

## Next Steps

After creating the repository, you can:

1. **Customize content** - edit `app/page.tsx`
2. **Add your projects** - update the Projects section
3. **Set up contacts** - change links in the Contact section
4. **Add your photo** - replace placeholder in Hero section
5. **Update metadata** - change title and description in `app/layout.tsx`

## Useful Commands

```bash
# Check status
git status

# Add changes
git add .
git commit -m "Description of changes"
git push

# Check remote repositories
git remote -v

# View commit history
git log --oneline
```

## Domain Setup (Optional)

If you have your own domain:

1. In Vercel go to Settings > Domains
2. Add your domain
3. Configure DNS records according to Vercel instructions

---

**Congratulations! 🎉** Your portfolio website is ready for development and deployment!
