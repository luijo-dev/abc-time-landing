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

## Corrective Batch: Carousel Height, Borders, Staging, and Wheel Navigation

- [x] Constrained the carousel media with a shared `--carousel-stage-height` so active and staged watches cannot exceed the visual vitrine height.
- [x] Resized each staged watch shell from the available stage height instead of width-only sizing, preventing tall assets from breaking the composition.
- [x] Removed deliberate visible borders from carousel navigation buttons, watch shells, and watch media framing; tonal surfaces and shadow now provide separation.
- [x] Restored true carousel depth by assigning explicit staged slots (`prev`, `next`, `far-prev`, `far-next`) with lateral transforms, scale, and opacity instead of stacking all watches in one center position.
- [x] Preserved the staged composition under reduced-motion by disabling transition timing without collapsing the slot transforms.
- [x] Redirected wheel interaction to carousel previous/next navigation with `preventDefault()` and thresholded delta handling.
- [x] Locked the homepage vitrine against vertical page scroll while the root hero is active so wheel intent stays inside the carousel.

## Corrective Batch: Carousel Image Height Normalization

- [x] Replaced source-image-driven media sizing with slot-based shell and media height tokens so every watch renders from a controlled stage standard.
- [x] Defined bounded active, adjacent, and far watch height clamps directly on the carousel track for coherent staging across viewport sizes.
- [x] Resized each carousel item from `--watch-shell-height` / `--watch-media-height` instead of the raw asset dimensions, keeping the current mechanics but normalizing presentation.
- [x] Updated `WatchImage.astro` so the figure box sets the rendered dimensions and the `<img>` only fits within that box via `object-fit: contain` and a bottom-centered anchor.

## Corrective Batch: Carousel Layout Corrections

- [x] Reworked the root vitrine shell into a two-row viewport grid (`header` + `remaining space`) so the carousel stage fills the leftover screen height without subtractive viewport magic numbers.
- [x] Made the stage and carousel use `height: 100%` / `minmax(0, 1fr)` behavior so the title overlay stays absolutely positioned and does not consume carousel layout space.
- [x] Removed all padding from `.watch-carousel__track`.
- [x] Removed the unwanted fade shell around each watch item by stripping the item background/shadow treatment and deleting the pseudo-element bottom gradient.
- [x] Removed the figure-level decorative gradient behind real watch imagery while preserving the branded fallback placeholder styling.

## Corrective Batch: Carousel Scale, Separation, and Depth Refinement

- [x] Increased the shared stage and shell height clamps so the foreground, adjacent, and far watches all render larger while preserving the normalized height strategy.
- [x] Reduced shell padding and widened the shell/media width ratio so more of each watch is visible inside the same controlled height box.
- [x] Pushed the adjacent watches farther laterally from center and the far watches closer to the outer edges so all five positions read clearly at once.
- [x] Reinforced the depth stack with a larger active silhouette, slightly smaller adjacent silhouettes, and another controlled step down for the far plane.
- [x] Lifted the active watch slightly while dropping rear planes lower to strengthen the 1 / 2 / 2 perspective staging without changing carousel mechanics.

## Corrective Batch: Carousel Presence, Initial Five-Watch Readability, and Centering

- [x] Increased the carousel stage and per-plane shell height clamps again so the active watch regains stronger visual dominance while remaining bounded inside the hero viewport.
- [x] Reduced shell padding and widened the shell/media width ratios again so more of each normalized watch image is visible inside every slot.
- [x] Replaced percentage-based lateral transforms with explicit adjacent/far slot offsets so the 1 / 2 / 2 composition is readable immediately on first render.
- [x] Raised the visibility floor for second- and third-plane watches by increasing their opacity/saturation while preserving the active watch as the foreground focus.
- [x] Removed the bottom-biased image anchor by centering watch assets within the normalized figure box on both axes.

## Corrective Batch: Carousel Width Occupation, Unclipped Third Plane, and Hover Zoom

- [x] Split carousel sizing into independent shell height and shell width clamps so watch slot width is no longer inferred from raw asset proportions alone.
- [x] Expanded the normalized media box width and removed the enforced portrait aspect lock so watch imagery can occupy more horizontal space while staying centered.
- [x] Changed the carousel track overflow from clipped to visible and pushed the far-slot offsets outward so all five watches can remain visible on first render as 1 foreground + 2 mid + 2 far planes.
- [x] Removed hover-only edge treatment from watch items and replaced it with a smooth `scale(1.25)` media zoom on the hovered watch image, with reduced-motion fallback preserved.

## Corrective Batch: Third-Plane Visibility Tuning

- [x] Increased the far-plane shell height and width clamps so the most distant watches stay readable instead of collapsing into tiny silhouettes.
- [x] Pulled the far-plane lateral offsets slightly inward and reduced their drop depth so the third plane uses more of the visible stage width instead of living at the clipping edge.
- [x] Raised the far-plane opacity/saturation and softened its blur while keeping the active watch clearly dominant in the 1 / 2 / 2 stack.

## Files Changed

| File | Action | What changed |
|------|--------|--------------|
| `src/components/vitrine/VitrineStage.astro` | Modified | Updated `.vitrine-stage__title` positioning: `left` now uses `var(--space-24)` (matching header brand margin), `bottom` increased to push title lower. |
| `src/components/vitrine/WatchTitle.astro` | Modified | Reordered DOM: `<h2>` (title name) now comes before `<p>` (collection) — title appears above collection visually. |
| `src/components/vitrine/VitrineStage.astro` | Modified | Removed `page-shell` from `<main>`, zeroed root hero container spacing, and moved the title anchor closer to the left/bottom edges. |
| `src/components/vitrine/WatchCarousel.astro` | Modified | Added slot-based carousel staging, stage-height constraints, wheel-to-navigation behavior, and borderless nav controls. |
| `src/components/vitrine/WatchCarouselItem.astro` | Modified | Sized watch shells from stage height, restored lateral/far positioning, and removed explicit shell borders. |
| `src/components/vitrine/WatchImage.astro` | Modified | Constrained watch media to available item height and removed explicit framing borders from media/fallback chrome. |
| `src/components/vitrine/VitrineStage.astro` | Modified | Locked document overflow while the vitrine root is active to avoid vertical page scrolling. |
| `src/styles/global.css` | Modified | Added vitrine-specific overflow/overscroll lock for the root landing experience. |
| `openspec/changes/homepage-root/apply-progress.md` | Modified | Merged targeted fixes batch. |
| `src/components/vitrine/WatchCarousel.astro` | Modified | Added explicit active/adjacent/far height clamps so the stage defines a consistent watch scale. |
| `src/components/vitrine/WatchCarouselItem.astro` | Modified | Switched shell sizing to controlled shell/media height variables instead of asset-dependent height fill. |
| `src/components/vitrine/WatchImage.astro` | Modified | Made the figure box own rendered watch size while the image only fits within the normalized container. |
| `src/components/vitrine/VitrineStage.astro` | Modified | Converted the root vitrine shell into a viewport grid so the stage fills the remaining height below the header without title-overlay layout coupling. |
| `src/components/vitrine/WatchCarousel.astro` | Modified | Made the carousel fill the stage height and removed track padding. |
| `src/components/vitrine/WatchCarouselItem.astro` | Modified | Removed the item shell gradient/shadow and deleted the bottom fade pseudo-element. |
| `src/components/vitrine/WatchImage.astro` | Modified | Removed decorative gradient backing from the real-image figure while keeping fallback placeholder styling. |
| `src/components/vitrine/WatchCarousel.astro` | Modified | Increased the stage and slot height clamps so every depth plane renders larger inside the carousel area. |
| `src/components/vitrine/WatchCarouselItem.astro` | Modified | Reduced shell padding and expanded slot transforms/scales to separate the 1 / 2 / 2 planes more aggressively. |
| `src/components/vitrine/WatchImage.astro` | Modified | Increased the normalized media width ratio so the larger shells translate into visibly larger rendered watches. |
| `src/components/vitrine/WatchCarousel.astro` | Modified | Increased stage/shell size clamps again and defined explicit adjacent/far slot offsets so all five watches read from the initial state. |
| `src/components/vitrine/WatchCarouselItem.astro` | Modified | Rebalanced slot transforms, opacity, saturation, and padding so the far/adjacent planes remain visible while the active watch stays dominant. |
| `src/components/vitrine/WatchImage.astro` | Modified | Centered the rendered watch asset inside the normalized figure box and widened the media box again for stronger presence. |
| `src/components/vitrine/WatchCarousel.astro` | Modified | Added independent shell-width clamps, widened far offsets, and removed track clipping so the third plane is visible from first render. |
| `src/components/vitrine/WatchCarouselItem.astro` | Modified | Sized each slot from dedicated width + height variables and removed hover edge treatment so image zoom can breathe. |
| `src/components/vitrine/WatchImage.astro` | Modified | Dropped the forced 3/4 aspect lock, widened the normalized image box, and swapped hover border feedback for smooth 1.25x image zoom. |
| `src/components/vitrine/WatchCarousel.astro` | Modified | Tuned only the far-plane clamps/offset/drop values so the third plane sits farther inside the readable stage envelope. |
| `src/components/vitrine/WatchCarouselItem.astro` | Modified | Raised far-plane scale, opacity, and clarity so the most distant watches remain visible without changing wheel or hover behavior. |

## Deviations / Notes

- The original `homepage-root` spec/design excluded cart/account cues, but corrective batches intentionally followed the user's newer explicit header expectation for cart/profile affordances. No checkout/account flow was implemented.
- `Catálogo` points to `/catalogo`; if that route is not created later, navigation may need a confirmed destination.
- This targeted fixes batch made ONLY two changes: (1) title/collection stacking order in DOM, (2) X/Y position of the title overlay to match header margin and push lower. No redesign, no new components.
- This corrective batch intentionally overrides the previous title offset increase: the verified issue was excessive root-container inset, so the title now sits lower by using a smaller `bottom` value and a full-width main wrapper.
- This carousel corrective batch stayed inside approved tokens: only existing surface, outline, shadow, and primary variables were reused. No new colors or border treatments were introduced.
- This image-normalization batch intentionally keeps the existing carousel behavior and staging logic untouched; only rendered media sizing standards changed.
- This carousel layout correction batch stays scoped to layout/fade cleanup only: no header redesign, no wheel behavior changes, no new tokens, and no CTA/spec rewiring.
- This refinement batch stayed strictly inside carousel sizing/staging: wheel handling, tokens, title/header composition, and non-carousel scope were left untouched.
- This refinement batch keeps wheel/navigation logic intact and only adjusts stage sizing, slot offsets, and media centering to satisfy the requested stronger first-frame composition.
- This corrective batch keeps the same five-watch dataset and carousel controls; it only changes slot width math, track clipping, and hover media behavior to match the reference composition more faithfully.
- This tuning batch stays narrower still: it only adjusts far-plane sizing, placement, and visibility values so the third plane reads better without altering active/adjacent behavior, tokens, or interactions.

## Status

All homepage-root implementation batches complete. The root hero remains full-width, the carousel fills the remaining viewport height below the header, the third plane now uses larger and less recessed far-slot values so those watches stay visible/readable, hovered watches still zoom their media instead of showing edge treatment, and wheel input still advances the watch stage instead of the page.

Session: manual-save-abc-time-landing
Project: abc-time-landing
