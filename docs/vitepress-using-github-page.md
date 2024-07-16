# Creating a VitePress Website with Custom Theme

## Create a New GitHub Repository

- Go to GitHub and create a new repository within the organization, Search Engine Optimizated (SRO), here called **`SRE-DevOps-Financial-Markets-Portfolio`**.

- Make sure it is public for wider accessibility.

## Set Up Branches for Deployment

Create branches **`uat`** and **`production`**.
As a best practice, push changes to **`uat`**. Merge to **`production`** only via pull requests after careful review.

## Clone the Repository

Clone the repository to your local machine, move to the repository and make sure to switch to **`uat`** branch

```bash
git clone https://github.com/<your-organization>/SRE-DevOps-Financial-Markets-Portfolio.git
cd SRE-DevOps-Financial-Markets-Portfolio
git checkout uat
```

## Install Node.js

Ensure Node.js is installed or download and install Node.js from [**`Node.js official website`**](https://nodejs.org/en).

## Initialize VitePress

Initialize a Node.js project:

```bash
npm init -y  # Creates a package.json with default settings
```

Install VitePress as a development dependency:

```bash
npm install vitepress --save-dev
```

Make sure the latest version is installed 

```bash
npm install vitepress@latest
```

## Configure Project Structure

Ensure the docs directory is created

```bash
mkdir docs && echo "# SRE, DevOps, Financial Markets Portfolio" > docs/index.md && echo "Welcome to my professional portfolio, which showcases my expertise and projects in Site Reliability Engineering (SRE) and DevOps within the financial markets sector. This repository is designed to demonstrate my technical skills, methodologies, and experiences that I've gained while working in this specialized field." >> docs/index.md
```

## Create a Custom Theme

Set up the theme directory and files:

```bash
mkdir -p .vitepress/theme
echo ":root {
 --vp-c-brand: #3eaf7c;
 --vp-c-brand-light: #4abf8a;
 --vp-c-brand-lighter: #5ccf99;
 --vp-c-brand-dark: #369f6b;
 --vp-c-brand-darker: #2e8f5f;
}

.vp-doc h1 {
color: var(--vp-c-brand);
}

.vp-doc h2 {
border-top: 1px solid var(--vp-c-divider-light);
padding-top: 20px;
}" > .vitepress/theme/custom.css

echo "import DefaultTheme from 'vitepress/theme'
export default {
...DefaultTheme,
enhanceApp({ app, router, siteData }) {
// app is the Vue 3 app instance from createApp()
// router is VitePress' custom router. siteData is a ref of current site-level metadata.
}
}" > .vitepress/theme/index.js
```

## Update VitePress configuration to use custom theme

Update **`config.ts`** (or appropriate config file based on the usage of TypeScript or JavaScript):

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
base: '/SRE-DevOps-Financial-Markets-Portfolio/',
title: "Professional portfolio",
description: "Amine 's SRE, DevOps & Financial Markets professional portfolio",
themeConfig: {
    nav: [
    { text: 'Home', link: '/' },
    { text: 'CV', link: '/curriculum-vitae' },
    ],
    sidebar: {
    '/': [
        {
        text: 'Portfolio',
        items: [
            { text: 'Welcome', link: '/' },
            { text: 'Curriculum vitæ', link: '/curriculum-vitae' },
        ]
        }
    ]
    },
    socialLinks: [
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/amine-el-qazoui-43450926' },
    { icon: 'github', link: 'https://github.com/Crypto-Aggressor' }
    ]
},
head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/theme/custom.css' }]
],
})
```

## Local Development

Run VitePress locally

 ```bash
 cd docs/
 npx vitepress dev
 ```

in case of issue, Node.js need to be told to treat **`config.js`** or **`config.ts`** files as ES Modules. This can be done in a couple of ways:

- **Using .mjs Extension**: Rename your config file from **`config.js`** to **`config.mjs`** to ensure it's treated as an ES Module.

- **Using type Field in package.json**: Add **`"type": "module"`** to **`package.json`** to tell Node.js to treat all **`.js`** files as ES Modules within your project:

```json
{
  "type": "module",
  ...
}
```

## Deploy to GitHub Pages

Build the site and prepare for deployment

 ```bash
cd docs/
npx vitepress build
cd docs/.vitepress/dist
git init && git add -A && git commit -m "Deploy site" && git push -f git@github.com:<your-organization>/SRE-DevOps-Financial-Markets-Portfolio.git master:gh-pages
 ```

## Configure GitHub Pages

Set up GitHub Pages to serve from the **`gh-pages`** branch
Go to your GitHub repository settings under **`Pages`**, select **`gh-pages`** branch, and set the folder to **`root`** to set up GitHub Pages to serve from the **`gh-pages`** branch
