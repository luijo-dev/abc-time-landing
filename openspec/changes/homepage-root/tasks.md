# Tasks: Homepage Root

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 450-700 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 foundation/data → PR 2 hero components → PR 3 page wiring/polish |
| Delivery strategy | size:exception (orchestrator-directed) |
| Chain strategy | size:exception |

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Confirm blockers and normalize homepage data contracts | PR 1 | Includes missing WhatsApp/assets decisions |
| 2 | Adapt reusable vitrine primitives for five-watch staging | PR 2 | Reuse-first slice, no page composition yet |
| 3 | Create page composer and wire responsive/a11y/perf polish | PR 3 | Depends on PR 1-2 |

## Phase 1: Preconditions & Data Foundation

- [x] 1.1 Confirm final `ctaUrl`/message, the five featured watches, approved image assets, and whether desktop moods can stay limited to `gold | smoke`; block apply if any new token is requested.
- [x] 1.2 Refactor `src/pages/index.astro` data into the design contracts: `heroContent`, five `featuredWatches`, and `supportingSections`, keeping copy concierge-first and design-system compliant.
- [x] 1.3 Define or co-locate shared Astro/TypeScript prop types for `VitrineStage.astro`, `WatchCarousel.astro`, `SpecPanel.astro`, and `VitrineCTA.astro` so data ownership is explicit before UI rewiring.

## Phase 2: Reusable Component Adaptation

- [x] 2.1 Adapt `src/components/vitrine/VitrineHeader.astro` to a restrained glass header with brand + minimal concierge/navigation actions only, excluding cart/account/wishlist cues.
- [x] 2.2 Adapt `src/components/vitrine/VitrineBackground.astro` to accept approved active-watch mood changes using existing tokens only, with safe fallback when mood is absent.
- [x] 2.3 Rework `src/components/vitrine/WatchCarousel.astro` state to support five staged positions, CTA/spec sync, keyboard/tap controls, and reduced-motion behavior without wheel-only navigation.
- [x] 2.4 Rework `src/components/vitrine/WatchCarouselItem.astro` from scroll-snap card to spatial slot renderer with foreground/mid/background states and clear active/inactive semantics.
- [x] 2.5 Adapt `src/components/vitrine/WatchImage.astro`, `WatchTitle.astro`, `SpecPanel.astro`, `SpecItem.astro`, and `VitrineCTA.astro` for active-watch priority, fallback-safe media, desktop/mobile spec layouts, and watch-specific CTA copy.

## Phase 3: New Composition Components

- [x] 3.1 Create `src/components/vitrine/VitrineStage.astro` as the hero composer that assembles header, editorial copy, carousel, active specs, optional tooltip text, and CTA.
- [x] 3.2 Supporting editorial blocks: N/A — out of scope for this batch. Hero experience is the primary focus.

## Phase 4: Page Wiring, Responsive, Accessibility & Performance

- [x] 4.1 Simplify `src/pages/index.astro` to `Base.astro` + page data + `VitrineStage.astro` composition, removing old inline vitrine structure and keeping responsibilities separated.
- [x] 4.2 Audit responsive behavior: mobile (80vw items, collapsed grid, proper padding), tablet (3-col spec grid), desktop (two-column layout with sticky spec panel, 45vw items). No clipping or horizontal traps.
- [x] 4.3 Audit a11y/perf: semantic headings (h1→h2), ARIA attributes on all interactive elements, alt/fallback labels, focus visibility on all controls, reduced-motion handling, no remote/Tailwind/Material Symbols deps, minimal JS.
