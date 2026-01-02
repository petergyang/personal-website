# Peter Yang's Personal Website

A personal portfolio and landing page with an editorial zine aesthetic, featuring hand-drawn design elements and organic animations.

## Tech Stack

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel

## Features

- Animated typewriter intro
- Hand-drawn circle hover effects
- Dark/light mode toggle with persistence
- Recent posts fetched from Substack API
- Polaroid-style favorites gallery
- Paper texture overlays
- Reduced motion support for accessibility

## Pages

- **Home** (`/`) — Profile, bio, recent posts, and social links
- **Favorites** (`/favorites`) — Timeline of favorite movies, games, and anime

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout with fonts
│   ├── globals.css       # Global styles
│   ├── favorites/        # Favorites page
│   └── api/posts/        # Substack API route
└── components/
    ├── AnimatedName.tsx  # Typewriter animation
    ├── CircleLink.tsx    # Hand-drawn circle links
    ├── ThemeToggle.tsx   # Dark/light mode
    ├── RecentPosts.tsx   # Substack posts
    ├── PolaroidCard.tsx  # Polaroid-style cards
    └── PagePeel.tsx      # Corner peel animation
```

## Deployment

Deploy on [Vercel](https://vercel.com) for the best experience with Next.js.
