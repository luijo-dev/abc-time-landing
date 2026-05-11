# Apply Progress: Homepage Root

## Mode

Standard apply. TDD disabled by user instruction; no tests, build, or compile commands were run.

## Previously Completed Scope

- [x] 1.1 Confirm final CTA/watch/image/mood constraints or block if new tokens are required.
- [x] 1.2 Refactor root page data into `heroContent`, `featuredWatches`, and `supportingSections`-ready contracts.
- [x] 1.3 Co-locate shared homepage prop types for vitrine composition.
- [x] 2.1 Adapt `VitrineHeader.astro` for the initial restrained header implementation.
- [x] 2.2 Adapt `VitrineBackground.astro` for tokenized active-watch mood changes.
- [x] 2.3 Rework `WatchCarousel.astro` for five staged positions and synced CTA/spec state.
- [x] 2.4 Rework `WatchCarouselItem.astro` as spatial staged renderer.
- [x] 2.5 Adapt media, title, specs, and CTA components for active-watch rendering.
- [x] 3.1 Create `VitrineStage.astro` as the homepage hero composer.
- [x] 3.2 Supporting editorial blocks are out of scope for this batch.
- [x] 4.1 Simplify `src/pages/index.astro` to page data + `VitrineStage.astro`.
- [x] 4.2 Audit responsive behavior for mobile/tablet/desktop.
- [x] 4.3 Audit accessibility/performance details without external dependencies.

## Corrective Batch: Header/Navbar Only

- [x] Removed the chunky card-like header shell: no rounded container, no visible border, no max-width card, no ambient card shadow.
- [x] Made the header flush to the full viewport width with three equal grid zones.
- [x] Set the left zone to `AVC Time`, aligned left, in approved champagne-gold token color.
- [x] Set the center zone to `Inicio` active and `Catálogo` inactive, centered.
- [x] Set the right zone to bag/catalog and profile affordances aligned right, using inline SVG/text only and existing tokens.
- [x] Added a tonal bottom fade using existing black/surface tokens so the top bar melts into the vitrine background instead of sectioning with a hard border.
- [x] Removed the unused header CTA prop from `VitrineStage.astro` usage.

## Corrective Batch: Root Title + Collection Anchoring

- [x] Removed the generic editorial copy block from the hero stage so the active watch name becomes the visible root title.
- [x] Anchored the active watch title overlay to the lower-left of the hero stage with foreground z-index treatment.
- [x] Switched the visible watch title to the same approved champagne-gold token family used by the `AVC Time` brand mark.
- [x] Reworked the collection label into a paragraph-sized line-prefix row using approved neutral/`on-surface-variant` tokens.
- [x] Updated carousel state sync so the anchored title and collection change with the active watch without touching carousel/spec/CTA responsibilities.
- [x] Removed duplicate per-card title rendering so the lower-left overlay is the single visible watch name/collection presentation.

## Simplification Batch: Remove SpecPanel and WhatsApp CTA from Root View

- [x] Removed `<aside class="vitrine-details">` block (SpecPanel + VitrineCTA) from `VitrineStage.astro`.
- [x] Removed `SpecPanel` and `VitrineCTA` imports.
- [x] Removed the two-column grid layout (`minmax(0, 1.5fr) minmax(18rem, 1fr)`) — now single-column, stage only.
- [x] Removed `.vitrine-details` CSS block and its `position: sticky` at desktop.
- [x] Removed `.vitrine-panels` CSS block (was used by SpecPanel grid).
- [x] Merged duplicate `.vitrine-stage` CSS rule blocks into a single unified rule.
- [x] Kept carousel, header, title/collection overlay, and tooltip — only removed specs panel and WhatsApp CTA from rendering.

## Targeted Fixes Batch: Position & Stacking Order

- [x] **Stacking order**: Moved `<h2 class="watch-title__name">` BEFORE `<p class="watch-title__collection">` in `WatchTitle.astro`. Title now renders above collection in DOM order, so it appears higher on screen visually.
- [x] **Horizontal position**: Changed `.vitrine-stage__title` `left` from `var(--space-16)` to `var(--space-24)` on both mobile and tablet media queries, matching the X-axis margin used by "AVC Time" brand mark in the header.
- [x] **Vertical position**: Changed `.vitrine-stage__title` `bottom` from `var(--space-24)` to `var(--space-80)` on mobile, and from `var(--space-32)` to `var(--space-64)` on tablet — pushing the title much lower (more bottom distance).

## Corrective Batch: Remove Root Hero Container Offsets

- [x] Removed the `page-shell` constraint from `<main>` in `VitrineStage.astro` so the root hero no longer inherits the global max-width and centered side margins.
- [x] Zeroed the root hero container spacing by setting `.vitrine-content` to full width with no lateral margin and no top/bottom padding for this composition.
- [x] Re-anchored `.vitrine-stage__title` closer to the left edge and lower on screen by reducing the left inset and shrinking the bottom offset.
- [x] Kept the existing title-above-collection order intact; only the root container and anchor offsets changed in this batch.

## Files Changed

| File | Action | What changed |
|------|--------|--------------|
| `src/components/vitrine/VitrineStage.astro` | Modified | Updated `.vitrine-stage__title` positioning: `left` now uses `var(--space-24)` (matching header brand margin), `bottom` increased to push title lower. |
| `src/components/vitrine/WatchTitle.astro` | Modified | Reordered DOM: `<h2>` (title name) now comes before `<p>` (collection) — title appears above collection visually. |
| `src/components/vitrine/VitrineStage.astro` | Modified | Removed `page-shell` from `<main>`, zeroed root hero container spacing, and moved the title anchor closer to the left/bottom edges. |
| `openspec/changes/homepage-root/apply-progress.md` | Modified | Merged targeted fixes batch. |

## Deviations / Notes

- The original `homepage-root` spec/design excluded cart/account cues, but corrective batches intentionally followed the user's newer explicit header expectation for cart/profile affordances. No checkout/account flow was implemented.
- `Catálogo` points to `/catalogo`; if that route is not created later, navigation may need a confirmed destination.
- This targeted fixes batch made ONLY two changes: (1) title/collection stacking order in DOM, (2) X/Y position of the title overlay to match header margin and push lower. No redesign, no new components.
- This corrective batch intentionally overrides the previous title offset increase: the verified issue was excessive root-container inset, so the title now sits lower by using a smaller `bottom` value and a full-width main wrapper.

## Status

All homepage-root implementation batches complete. The root hero no longer uses `page-shell`, the main wrapper now has zero composition padding/margin, and the title/collection anchor sits closer to the left and bottom edges while keeping the title above the collection.

Session: manual-save-abc-time-landing
Project: abc-time-landing
