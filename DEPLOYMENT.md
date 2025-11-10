# GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio to GitHub Pages:

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Node.js and npm installed

## Step-by-Step Instructions

### Step 1: Update the Base Path

1. Open `vite.config.js`
2. Update the `base` property to match your GitHub repository name:
   ```js
   base: '/your-repository-name/', // Replace 'your-repository-name' with your actual repo name
   ```
   For example, if your repository is `puneet-portfolio`, it should be:
   ```js
   base: '/puneet-portfolio/',
   ```

### Step 2: Initialize Git Repository (if not already done)

```bash
cd Puneet-backend-portfolio
git init
```

### Step 3: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `puneet-portfolio`)
5. Choose public or private
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 4: Connect Local Repository to GitHub

```bash
# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit"

# Add the remote repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Install Dependencies

```bash
npm install
```

This will install `gh-pages` and all other dependencies.

### Step 6: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch on GitHub

### Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select `gh-pages` branch
6. Select `/ (root)` folder
7. Click "Save"

### Step 8: Access Your Site

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Note:** It may take a few minutes for the site to be available after deployment.

## Updating Your Site

Whenever you make changes to your portfolio:

1. Make your changes
2. Commit them:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. Deploy again:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### If your assets (images, CSS) don't load:

- Make sure the `base` path in `vite.config.js` matches your repository name exactly
- The base path should start and end with `/` (e.g., `/puneet-portfolio/`)

### If deployment fails:

- Make sure you've installed dependencies: `npm install`
- Check that you're authenticated with GitHub
- Verify your repository name matches the base path in `vite.config.js`

### If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Alternative: Using GitHub Actions (Optional)

If you prefer automatic deployment on every push, you can set up GitHub Actions. This is more advanced but allows automatic deployments.

