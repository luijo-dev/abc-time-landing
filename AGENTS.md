# AGENTS.md — AVC TIME

AVC TIME is a premium horology landing experience for showcasing high-end watches and converting qualified interest into WhatsApp conversations. Every agent working on this project must protect the brand perception first: luxury, precision, restraint, and performance.

## Project North Star

**The Digital Curator**: an exclusive digital exhibition where every timepiece feels like a masterpiece, not a commodity card in a generic storefront.

| Area | Direction |
|------|-----------|
| Brand feeling | Excellence, precision, heritage, exclusivity |
| Visual style | Dark, high-contrast, cinematic, subtly magical |
| Primary conversion | WhatsApp concierge / personalized consultation |
| Technical priority | Astro performance, minimal JS, smooth transitions |
| Anti-pattern | Generic e-commerce feel, noisy pricing-first UI, cheap effects |

## Business Context

AVC TIME sells premium watches through a relationship-driven model. The site should elevate the business from “WhatsApp seller” to “high-end horology house” while keeping the buying path personal and direct.

Success means:

- Visitors perceive AVC TIME as premium and trustworthy.
- The path from admiration to WhatsApp consultation is obvious and low-friction.
- The experience feels fast, polished, and intentionally curated.

## Brand System

| Token | Value |
|-------|-------|
| Core palette | Deep Obsidian `#131313`, Champagne Gold `#D4AF37`, Metallic Silver |
| Typography | Serif-led, preferably Noto Serif for tradition and craft |
| Atmosphere | Exclusive exhibition, editorial luxury, restrained magic |
| Motion | Cinematic but controlled; never flashy for its own sake |

Use contrast, spacing, typography, and motion to communicate value. Luxury is restraint. If an effect draws attention to itself instead of the watch, it is probably wrong.

## Information Architecture

1. **Entrance** — Splash / loading screen.
2. **Main** — 3D vitrine with top pieces or categories.
3. **Gallery** — Full catalog grid with tentative pricing.
4. **Detail** — Editorial product page with specs and WhatsApp concierge CTA.

## Experience Requirements

### Splash Screen

- Inspired by minimalist high-end watch brand entries.
- Center `AVC TIME` branding with premium typography.
- May include subtle calibration/system indicators.
- Goal: establish exclusivity from the first second.

### 3D Vitrine

- No vertical-scroll-first experience for the hero vitrine.
- Prefer horizontal, drag, or circular navigation.
- Carousel composition: 1 foreground, 2 mid-ground, 2 background.
- Scroll/drag may rotate the spatial arrangement.
- Non-active items may desaturate or soften.
- Do **not** show prices in this view; protect aesthetic value.
- Hover/tooltips may be aspirational, e.g. “The Watch of Millionaires”, but avoid cringe or overpromising.

### Catalog

- High-fidelity grid for the full collection.
- Pricing can appear here as tentative or reference information.
- Filtering should support categories such as complications, chronographs, and limited editions.

### Detail View

- Editorial layout with large imagery and premium typography.
- Include lifestyle imagery when available, especially watch-on-wrist scale/context.
- Technical specs should be structured in a clear grid: movement, caliber, materials, dimensions, condition, year, etc.
- Primary CTA: WhatsApp concierge.

## Technical Direction

| Area | Decision |
|------|----------|
| Framework | Astro |
| Language | TypeScript strict |
| Runtime | Node >= 22.12.0 |
| Transitions | Prefer Astro View Transitions API for cinematic page changes |
| JS budget | Keep JavaScript minimal and purposeful |
| Hosting | Favor zero/low-cost static deployment platforms such as Vercel or Netlify |

Performance is part of the luxury experience. Animations should target smooth 60fps behavior and avoid heavy client-side frameworks unless there is a strong reason.

## Content Rules

- Write in a premium, confident, editorial tone.
- Avoid bargain language: “cheap”, “deal”, “promo”, “limited offer” unless explicitly requested.
- Favor words like: curated, precision, heritage, caliber, presence, craftsmanship, concierge, collection.
- WhatsApp copy should feel personal, not desperate.

Example CTA direction:

> Consultar disponibilidad con un asesor

Avoid:

> Comprar ahora barato por WhatsApp

## Implementation Rules for Agents

- Preserve the luxury north star before adding features.
- Prefer simple, composable Astro components.
- Keep styles intentional and reusable; avoid scattered magic numbers when a design token would be clearer.
- Do not add dependencies casually. Every dependency must justify its weight.
- Do not introduce prices into the vitrine/hero unless the user explicitly changes the business rule.
- Do not run production builds unless explicitly requested by the user.
- If adding motion, consider accessibility and reduced-motion behavior.
- If business, brand, or architecture decisions change, save the updated context to Engram.

## Current Project Context

- Existing app is a minimal Astro landing project.
- Main page lives at `src/pages/index.astro`.
- No test runner, linter, formatter, or CI config is currently detected.
- SDD context is saved in Engram under `sdd-init/abc-time-landing`.
- Business brief is saved in Engram under `business/avc-time-brief`.
