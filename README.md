# Trackmython — Frontend

This directory contains **only the frontend UI** of the Trackmython hackathon tracking platform.

## What's Included

| Directory      | Description                                      |
|----------------|--------------------------------------------------|
| `app/`         | Next.js pages (landing, dashboard, discover, etc.) |
| `components/`  | Reusable React components (Navbar, Autocomplete)  |
| `lib/`         | Client-side utilities (auth, Firebase, cities)    |
| `public/`      | Static assets (logos, favicon, robots.txt)         |

## What's NOT Included

- **API routes** (`app/api/`) — handled in the main project
- **Backend libraries** (scrapers, Firebase Admin, notifications)
- **Discord bot** — separate `discord-bot/` project
- **Middleware** — auth proxy runs in the main project

## Setup

```bash
npm install
npm run dev
```

> **Note:** The frontend calls API endpoints hosted by the main project. 
> Set `NEXT_PUBLIC_API_BASE` in `.env.local` if the backend is running elsewhere.

## Design System

- **Theme:** Dark glassmorphism with indigo/purple accent gradients
- **Font:** Inter (loaded from Google Fonts)
- **CSS:** Tailwind + custom CSS variables in `app/globals.css`

## File Guide for Editors

| File | What It Does |
|------|-------------|
| `app/page.tsx` | Landing page with hero, features, featured events |
| `app/discover/page.tsx` | Browse/filter/search all hackathons |
| `app/dashboard/page.tsx` | User's tracked events with countdowns |
| `app/settings/page.tsx` | User preferences, Discord linking, data reset |
| `app/submit/page.tsx` | Submit a new hackathon for review |
| `app/link/page.tsx` | Discord account linking flow |
| `app/globals.css` | All CSS variables, glass styles, animations |
| `components/Navbar.tsx` | Top navigation bar (mobile + desktop) |
| `components/CityAutocomplete.tsx` | Location search with autocomplete |
| `lib/auth.tsx` | Firebase Google auth context |
| `lib/firebase.ts` | Firebase client SDK initialization |
| `lib/cities.ts` | Indian city database for location matching |
