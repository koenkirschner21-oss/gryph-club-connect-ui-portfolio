# Gryph ClubConnect UI Portfolio

A standalone React and TypeScript gallery for exploring three Gryph ClubConnect interfaces without signing in. For the separate marketing site and early-access funnel, see [Gryph ClubConnect](https://github.com/koenkirschner21-oss/Gryph-ClubConnect) or [visit the live marketing site](https://gryphclubconnect.com/).

| Interface | What it shows |
| --- | --- |
| Explore Clubs | Directory cards, filters, and example membership states |
| Student Dashboard | Upcoming events, tasks, announcements, and activity across clubs |
| Club Workspace | An executive's view of club operations |

## How the demo works

The [gallery shell](src/main.tsx) switches between [three standalone React components](src/pages/dev/mockups/). A single [fixture module](src/dev/mockupFixtures.ts) supplies fictional clubs, names, venues, and activities. Keeping the gallery separate from the application lets someone inspect the interfaces without a backend, an account, or production data.

The gallery navigation is interactive; the controls inside each preview are illustrative. This is not the full application or a live campus service. There are no forms that submit data, production integrations, analytics, automated workflows, or environment variables.

## Run locally

Use Node.js 22.12+ (or 20.19+).

```bash
npm install
npm run dev
```

Open the local address printed by Vite. The previews retain their desktop layout; narrow viewports can scroll horizontally. Run `npm run build` to type-check and generate the production bundle.
