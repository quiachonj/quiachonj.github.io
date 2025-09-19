## Resume Website

dev.quiachonj.us
from Astro Resume 01 theme

## Integrations

- @astrojs/tailwind - https://docs.astro.build/en/guides/integrations-guide/tailwind/
- @astrojs/react - https://docs.astro.build/en/guides/integrations-guide/react/
- @astrojs/sitemap - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- @astrojs/rss - https://docs.astro.build/en/guides/rss/
- @vercel/analytics - https://vercel.com/docs/analytics/
- rehype-pretty-code - https://rehype-pretty-code.netlify.app/
- [Astro Assets Integration](https://docs.astro.build/en/guides/assets/) for optimised images
- MD & [MDX](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) posts
- astro-icon - Astro Icon svg icon component

## Astro Project Structure

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

## npm commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
