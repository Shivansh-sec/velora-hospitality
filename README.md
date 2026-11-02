# VELORA — Hospitality Experience

A modular, responsive hospitality showcase built with Vite, React, and TypeScript. Designed as a premium demo website for boutique hotels and resorts.

## Stack
- Vite + React + TypeScript
- Three.js via React Three Fiber / Drei for a restrained hero atmosphere
- Lenis smooth scrolling with reduced-motion safeguards
- Lucide icons and modular CSS design tokens

## Local development
```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run typecheck
npm run build
```

## Project structure
- `src/app` — page composition
- `src/components/layout` — navigation, footer, smooth scrolling
- `src/components/sections` — independently editable page sections
- `src/components/three` — isolated 3D scene
- `src/data` — site content and contact configuration
- `src/hooks` — reusable UI hooks
- `src/styles` — tokens, base, layout, section, and responsive styles

## Customization
Edit `src/data/site.ts` to change the brand copy, navigation, experiences, and enquiry destinations. Copy `.env.example` to `.env` for local overrides. Configure `VITE_ENQUIRY_EMAIL` and `VITE_WHATSAPP_NUMBER` in the deployment environment when using real contact details.

## Vercel
The project uses Vite defaults: install with `npm install`, build with `npm run build`, and publish `dist`.

## Demo notice
VELORA is a fictional concept brand. Property details, imagery, and contact destinations are illustrative. Replace them with verified property information before using this as a real hotel's website. No live booking engine is included.
