# AVC TIME — Decisions and Learnings

This document exports the most important project decisions and learnings from the SDD/Engram workflow so future contributors can understand **why** the codebase looks the way it does.

Use this as a companion to:

- [`docs/DESIGN.md`](./DESIGN.md) — visual design system and brand rules.
- [`docs/DESCRIPTION_PROJECT.md`](./DESCRIPTION_PROJECT.md) — project description.
- `openspec/changes/homepage-root/` — SDD artifacts for the current homepage work.

## Quick path for contributors

1. Read `docs/DESIGN.md` before changing UI.
2. Do not introduce new colors, borders, gradients, or effects without confirmation.
3. Keep the root page focused: header, watch carousel, and watch title/collection.
4. Prefer small visual batches and verify in-browser after each meaningful layout change.
5. Do not add tests/TDD unless explicitly requested for this MVP workflow.

## Core decisions

| Area | Decision | Why |
| --- | --- | --- |
| Brand direction | AVC TIME is a premium horology landing experience, not a generic ecommerce grid. | The product should feel curated, restrained, and expensive. |
| Design authority | `docs/DESIGN.md` is the source of truth for color, typography, borders, glass, spacing, and tone. | Prevents visual drift and protects brand perception. |
| Styling | Use approved design tokens and existing CSS foundations only. | New colors/effects can break the luxury visual system. |
| Borders | Avoid deliberate visible sectioning borders. Use tonal shifts, glass, depth, or subtle ghost edges only when justified. | The design system explicitly follows a “No-Line” rule. |
| Homepage composition | The root view should prioritize the watch carousel plus title/collection overlay. | The watch is the artifact; the UI should recede. |
| Componentization | `index.astro` should wire data and compose sections, not own heavy UI markup. | Keeps responsibilities separated and easier to tune. |
| SDD workflow | Use OpenSpec artifacts plus Engram persistence; default to interactive mode. | Gives both public repo traceability and cross-session memory. |
| TDD | TDD is disabled unless explicitly requested. | The current MVP flow is visual/manual validation focused. |

## Homepage architecture decisions

### Root page responsibility

`src/pages/index.astro` should stay thin:

- define or import homepage data,
- pass data into the vitrine composition,
- avoid inline layout logic.

The page should not become the place where carousel mechanics, title positioning, or visual staging live.

### Main compositor

The homepage uses a vitrine composition centered around:

- `src/components/vitrine/VitrineStage.astro`

This component coordinates the stage-level layout:

- header placement,
- carousel area,
- title/collection overlay,
- viewport/overflow behavior.

### Reused/adapted component areas

| Component | Role |
| --- | --- |
| `VitrineHeader.astro` | Full-width luxury navbar. |
| `VitrineStage.astro` | Root visual stage/compositor. |
| `WatchCarousel.astro` | Carousel state, wheel navigation, slot staging. |
| `WatchCarouselItem.astro` | Per-watch plane/slot rendering. |
| `WatchImage.astro` | Normalized image box, centering, zoom behavior. |
| `WatchTitle.astro` | Active watch title and collection overlay. |
| `VitrineBackground.astro` | Token-aligned background mood. |

## Header learnings

The first implementation looked like a card and did not match the expected reference.

### Final header direction

- Full-width.
- Flush to the viewport/body.
- No rounded card container.
- No visible hard border.
- Background should melt into the page using tonal/fade treatment.
- Three equal layout zones:
  - left: `AVC Time`,
  - center: `Inicio` and `Catálogo`,
  - right: bag/profile affordances.

### Why this matters

The header is part of the atmosphere. If it reads like an app card, the page stops feeling like a high-end editorial watch experience.

## Title and collection learnings

The title/collection overlay is not normal page flow content.

### Final direction

- The active watch title sits above the collection label.
- Both are anchored near the bottom-left of the viewport/stage.
- The title uses the approved gold/primary token family.
- The collection row uses a horizontal line prefix plus neutral variant text.
- The overlay sits in front of the carousel and does not consume carousel layout height.

### Important gotcha

`page-shell` and vertical padding on the root stage pushed the title/collection away from the desired edge position. For this root composition, the stage container must avoid generic page-shell offsets.

## Carousel learnings

The carousel is the most important visual element of the root page. The desired behavior is not a flat row; it is a depth composition.

### Desired visual model

The carousel should read as **1 / 2 / 2**:

- 1 watch in the foreground,
- 2 watches in the second plane,
- 2 watches in the third/farthest plane.

This must be visible from the initial render, not only after interaction.

### Image sizing decisions

- Source image dimensions must not control rendered size.
- Watch images need a normalized visual box.
- Images should be centered horizontally and vertically.
- Images should be allowed to grow in width and height inside their slot.
- Active, second-plane, and third-plane watches can have different clamps/scales to create depth.

### Carousel layout decisions

- The carousel section should occupy the remaining viewport height below the header.
- The title overlay should not reduce carousel height.
- `watch-carousel__track` should not add padding that distorts positioning.
- Track clipping can hide the far plane; third-plane visibility may require `overflow: visible` or equivalent stage-level allowance.

### Interaction decisions

- Wheel input should navigate the carousel, not scroll the page down.
- The root vitrine view is intentionally no-scroll while this landing composition is active.
- Hover feedback should be image zoom, not border/edge treatment.
- Current hover target uses approximately `scale(1.25)` for the image.

### Anti-patterns found

- Card-like watch shells with visible borders.
- Gold/gray hover borders around carousel buttons/items.
- Decorative gradient shells around real watch imagery.
- Sizing based on raw image height or aspect ratio.
- Far-plane watches hidden by clipping or overly weak opacity/scale.

## Example HTML usage

`examples/homepage.html` is a **visual/behavioral reference**, not implementation source.

Useful ideas from the example:

- 5-watch staging,
- central watch emphasis,
- adjacent and far planes,
- wheel/click carousel navigation,
- editorial bottom-left title treatment.

Do not copy directly:

- Tailwind CDN setup,
- hard-coded colors,
- `HOROLOGUE` brand,
- ecommerce patterns that do not match the current AVC TIME intent,
- arbitrary borders that violate `docs/DESIGN.md`.

## Current known gaps

- The carousel is improved but may still need visual tuning by breakpoint.
- Far-plane visibility is sensitive to offsets, opacity, clipping, and asset proportions.
- Some watch image assets are still incomplete; missing images will weaken the premium result.
- `/catalogo` is referenced by navigation and should be confirmed if/when that route is built.

## Review checklist

Before accepting a homepage UI change, verify:

- [ ] Does it still respect `docs/DESIGN.md` tokens and tone?
- [ ] Are there any explicit borders that should instead be tonal/fade/depth treatments?
- [ ] Does the root view avoid vertical scroll?
- [ ] Are the carousel images normalized rather than controlled by raw source dimensions?
- [ ] Are all 5 carousel watches readable from the initial state?
- [ ] Does hover zoom the image instead of adding a border?
- [ ] Is `index.astro` still mostly data wiring and composition?

## Public artifact trail

The detailed SDD trail lives in:

```text
openspec/changes/homepage-root/
```

Key files:

- `exploration.md`
- `proposal.md`
- `design.md`
- `specs/homepage-root/spec.md`
- `tasks.md`
- `apply-progress.md`
- `verify-report.md`
