# Astro Resume 01

Unlock a seamless blend of aesthetics and functionality to share your unique voice with the world.

## 🔥 Features

Explore the Astro.js Personal Blog Template – a sleek and feature-rich platform for your personal blog:

✨ **Astro.js v5 Powered**: Easy customization options

✨ **UI/UX Design**: User-friendly and convincing interface

✨ **Export**: Downloadable CV option for the reader

✨ **Showcase**: Showcase your Expert Areas, Experience, Education, Projects, Portfolio, Blogs, Skills and Tools with individual sections

✨ **Low Code Customization**: No coding required - you can easily customize content via yaml data file and style by 30+ components and style variables

✨ **Tailwind CSS Integration**: Easy to edit with light and dark mode

✨ **SEO-Support & Performance**: Excellent Lighthouse/PageSpeed scores & sitemap integration

✨ **RSS Feed Support**: Keeps your audience updated effortlessly

✨ **Framework of your choice:** 100% Astro.js only template - choose your JS Framework (react preinstalled)

✨ **Markdown Compatibility**: Streamlines content creation with easy formatting

✨ **Syntax Highlighting**: Enhances code snippet readability for tech enthusiasts

✨ **ESLint / Prettier**: pre-installed and pre-configured to keep your workflow simple

✨ **Vercel Deployment:** preconfigured Vercel deployment & web analytics

## 💻 Showcase

![showcase](/showcase/Showcase_black.png 'dev-quiachonj-us')

## 📦 Integrations

- @astrojs/tailwind - https://docs.astro.build/en/guides/integrations-guide/tailwind/
- @astrojs/react - https://docs.astro.build/en/guides/integrations-guide/react/
- @astrojs/sitemap - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- @astrojs/rss - https://docs.astro.build/en/guides/rss/
- @vercel/analytics - https://vercel.com/docs/analytics/
- rehype-pretty-code - https://rehype-pretty-code.netlify.app/
- [Astro Assets Integration](https://docs.astro.build/en/guides/assets/) for optimised images
- MD & [MDX](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) posts
- astro-icon - Astro Icon svg icon component

## 🏛️ Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
    ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
|   ├── pages/
|   ├── styles/
|   ├── utils/
|   ├── site.config.ts
│   └── types.ts
│   └── data.yaml // where you can change your cv data
├── .elintrc.cjs
├── .gitignore
├── .prettierignore
├── package.json
├── prettier.config.cjs
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## 📝 Editing guide

### Site info

To edit site info such as site title and description, edit the `src/site.config.ts` file.

### Page contents

To edit the resume homepage content and design, edit the `src/pages/index.astro` file.
To edit the cv data, open the src/data.yaml file and edit as you need.

### Page components

To edit page components found site-wide such as the card used in the homepage, edit the files found in the `src/components/` directory.

### Layouts

To edit the base layouts of the resume page, edit the `src/layouts/Base.astro` file.

To edit the layout of all other pages, edit the `src/layouts/BaseBlog.astro` file.

To edit the layout of a blog article, edit the `src/layouts/BlogPost.astro` file.

### Blog content

To add blog content, insert `.md` files in the `src/content/` directory.

To add images in blog articles, insert a folder in the `src/content/` directory, add both the `.md` and image files into the new folder, and reference the image in your `.md` file.

## 👨🏻‍🎨 Theming

To change the theme colours of the site, edit the `src/styles/app.css` file.

To change the fonts of the site, add your font files into `/public`, add it as a `@font-face` in the `src/styles/app.css` file, as a `fontFamily` in the `tailwind.config.js` file, and apply the new font class to the `main` tag in the `src/layouts/Base.astro` or `src/layouts/BaseBlog.astro` file.

To change the background, edit the classes on the `body` tag in the `src/layouts/Base.astro` or `src/layouts/BaseBlog.astro` file. If you would like to add an image as the background, simple add it to the `/public/` folder and reference it on the `body` tag in the `src/layouts/Base.astro` or `src/layouts/BaseBlog.astro` file via tailwind classes.

## 🚀 Getting started

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## ❤️ Helping out

If you find that something isn't working right then I'm always happy to hear it to improve this starter! You can contribute in many ways and forms. Let me know by either:

1. [Filing an issue](https://github.com/nicdun/astro-resume/issues)
2. [Submitting a pull request](https://github.com/nicdun/astro-resume/pulls)
3. [Starting a discussion](https://github.com/nicdun/astro-resume/discussions)

## ☕ Thank you!

A big thank you to the creators of the awesome Astro static site generator :)
