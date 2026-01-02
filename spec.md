# Personal Website Spec

## Overview

A personal website for Peter Yang — product leader and creator. Single-page, editorial zine aesthetic.

## Tech Stack

- **Framework**: Next.js + React
- **Styling**: CSS Modules or Tailwind CSS
- **Deployment**: Vercel
- **Fonts**: Google Fonts (see Typography below)

---

## Design

### Vibe

Editorial zine. Like a printed page with hand-drawn annotations. Raw, not refined. The kind of thing you'd pin to a wall.

### Colors

| Element | Value |
|---------|-------|
| Background | `#F5F5F5` with subtle paper texture (grain/noise, not smooth) |
| Text | `#000000` |
| Accent | `#D30800` (red) — for circle, link hovers, hand-drawn underlines |

### Typography

| Element | Font |
|---------|------|
| "Peter Yang" | Handwritten/script font (something with character — not too perfect) |
| Headlines/section labels | Crimson Pro Medium (serif) |
| Body text | Manrope Regular, 18px |

### Sketch Elements

- Hand-drawn red circle SVG around "Peter" (imperfect, organic)
- Optional: hand-drawn underlines on links instead of standard CSS underlines
- Optional: red square bullets next to links
- Paper texture on background — subtle grain, feels like printed material

### Layout

- Single column, centered, max-width 600px
- Generous whitespace
- Text-forward — sketch elements are accents, not decorations
- No cards, no shadows, no borders

---

## Page Content

### Name (with handwriting animation)

> *Peter Yang*

- Handwritten/script font
- Handwriting animation (SVG stroke animation — letters appear as if being drawn)
- Hand-drawn red circle around "Peter"

### Bio

> I'm a product leader and creator. Currently, I work at Roblox and create extremely practical AI tutorials and interviews for busy people. I also like to share [humor](https://x.com/petergyang/status/1482071018927652866) and [memes](https://www.linkedin.com/posts/petergyang_ive-talked-to-100-ai-pms-on-linkedin-to-activity-7394192229579280384-mcmo/) from time to time.

### Featured Writing

> Some of my favorite writing includes:

- [40 life lessons after turning 40](https://creatoreconomy.so/p/40-life-lessons-i-know-at-40-i-wish-i-knew-at-20?utm_source=publication-search)
- [So what's going to happen to product management](https://creatoreconomy.so/p/so-whats-going-to-happen-to-product-management-anyway)

### Social Links (inline)

> You can read my [newsletter](https://creatoreconomy.so/), check out my [YouTube](https://www.youtube.com/@peteryangyt), or follow me on [X](https://x.com/petergyang) and [LinkedIn](https://www.linkedin.com/in/petergyang/). I also have a [GitHub](https://github.com/petergyang/).

---

## Implementation Notes

### Handwriting Animation

Use SVG path animation:
1. Convert cursive text to SVG paths
2. Animate `stroke-dashoffset` to reveal letters progressively

### Paper Texture

Add subtle noise/grain overlay on `#F5F5F5` background using CSS filter or a semi-transparent noise PNG.

### Hand-drawn Circle

Create imperfect SVG circle path (not a perfect `<circle>`) in red `#D30800`, positioned around "Peter" in the name.
