# VOID/FRAME

A photography exhibition website, built with React and Vite.

Concept project: an online gallery for travel photographs, designed around the visual language of analog cameras and lenses. All photographs are my own.

> Work in progress.

**Live demo:** _coming soon_

## Features

- Full-width hero with three photo panels and a hand-kerned title
- Terminal-style prompt linking to my GitHub profile
- Analog camera date stamp that updates in real time
- Project grid with a hover reveal: the photo shrinks upward to show the title and description
- Interactive lens-style ruler that follows the hovered project
- Scroll-friendly navigation with anchors and smooth scrolling
- Respects `prefers-reduced-motion`

## Tech stack

- React (functional components and hooks)
- Vite
- Plain CSS with custom properties (no UI libraries, no animation libraries)
- ESLint

## Design decisions

- **Palette:** near-black background, off-white text and a single lime accent, so the photographs stay the main subject.
- **Type:** an expanded grotesque for headlines and a monospaced face for technical details, echoing camera markings.
- **No third-party UI or animation libraries:** the interactions are written by hand with CSS and React state.

## Run locally

```bash
git clone https://github.com/IsabelVSousa/VOID-FRAME.git
cd VOID-FRAME
npm install
npm run dev
```

## Project structure

```
src/
├── components/   # Header, Hero, WorkGrid, ProjectCard, Ruler...
├── data/         # Project data
├── styles/       # base, layout and components CSS
└── assets/       # Images
```

## Roadmap

- Project detail pages with a photo gallery and lightbox
- Responsive layout for tablet and mobile
- About and Contact sections
- Accessibility and performance review
- Deployment

## Credits

Photographs and design by [Isabel](https://github.com/IsabelVSousa).
Fonts: Archivo, Space Grotesk and Share Tech Mono, via Google Fonts.