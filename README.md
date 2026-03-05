# General, Mike — Personal Portfolio

A serverless personal portfolio built with **Nuxt 3** and **Vue**, showcasing software and hardware projects, a blog, and interactive mini-games. Deployed on Vercel.

🔗 **Live site:** [general-mike.vercel.app](https://general-mike.vercel.app)

---

## Features

- **Projects showcase** — Software and IoT/hardware projects with GitHub integration
- **Blog** — With [Giscus](https://giscus.app/)-powered comments via GitHub Discussions
- **Mini-games** — Tic-tac-toe, a typing speed test, and a language race
- **Three.js particle background** — Interactive animated canvas with mouse-tracking interaction
- **Dark / Light theme** — System-aware with manual toggle
- **Contact form** — Powered by [FormSubmit](https://formsubmit.co/)
- **Analytics** — Privacy-friendly analytics via [Umami](https://umami.is/)
- **Serverless architecture** — Fully static deployment on Vercel

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Nuxt 3, Vue 3 |
| Styling | Tailwind CSS, shadcn/ui, Radix UI |
| 3D / Canvas | Three.js |
| Package Manager | Bun |
| Deployment | Vercel |
| Comments | Giscus |
| Analytics | Umami |
| Forms | FormSubmit |
| Linting | ESLint |
| Language | TypeScript/JavaScript |

## Deployment

This project is deployed on **Vercel** with automatic deployments on push to `main`. No server-side infrastructure is required — all dynamic features (comments, forms, analytics) are handled through third-party serverless services.

For other deployment targets, refer to the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## License

[MIT](./LICENSE)
