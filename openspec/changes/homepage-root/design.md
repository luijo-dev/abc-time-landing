# Design: Homepage Root

## Technical Approach

Build the new homepage by reshaping the existing Astro vitrine, not by porting `examples/homepage.html`. Keep `src/pages/index.astro` on `Base.astro`, reuse the current vitrine folder, and translate only the reference’s useful ideas: asymmetric editorial copy, five-watch depth, active specs, and concierge CTA. Token usage stays locked to `docs/DESIGN.md`; Tailwind, Material Symbols, ecommerce chrome, remote images, and hard-coded colors remain out.

## Architecture Decisions

| Option | Tradeoff | Decision |
|---|---|---|
| Extend current vitrine components | More redesign inside existing files | Chosen: preserves Astro-native composition, current accessibility wiring, and minimal JS. |
| Recreate the example literally | Faster visual matching, high drift | Rejected: breaks token discipline, brand tone, and scroll/accessibility behavior. |
| Introduce a page-composer component | One extra layer | Chosen: homepage responsibilities become reviewable instead of staying crowded in `index.astro`. |
| Centralize state in `WatchCarousel` | JS stays local to hero | Chosen: current carousel already synchronizes panels and CTA cleanly. |

## Reuse Audit

| Category | Files | Why |
|---|---|---|
| Reuse as-is | `src/layouts/Base.astro`, `src/components/ui/LoadingScreen.astro`, `src/styles/tokens.css`, `src/styles/global.css` | Already provide page shell, premium entrance, typography, spacing, reduced-motion defaults, and approved tokens. |
| Reuse with adaptation | `src/components/vitrine/VitrineHeader.astro`, `VitrineBackground.astro`, `WatchCarousel.astro`, `WatchCarouselItem.astro`, `WatchImage.astro`, `WatchTitle.astro`, `SpecPanel.astro`, `SpecItem.astro`, `VitrineCTA.astro`, `src/components/ui/Tooltip.astro` | These match the homepage domain already, but need composition, state, or styling changes for five-item staging, active mood, tooltip messaging, and CTA synchronization. |
| Do not reuse for hero composition | `src/components/ui/Card.astro`, `src/components/ui/Button.astro`, `examples/homepage.html` | `Card` encodes generic hover-card behavior, `Button` lacks active-watch CTA context, and the example imports forbidden dependencies/styles and wrong brand patterns. |

## Data Flow

`src/pages/index.astro`
→ defines `heroContent`, `featuredWatches`, `supportingSections`
→ passes hero props into `VitrineStage.astro`
→ `VitrineStage` composes header, editorial copy, carousel, specs, tooltip, and CTA
→ `WatchCarousel` owns active index and updates visible `SpecPanel`, CTA href/label, and optional background mood class.

## File Changes

| File | Action | Description |
|---|---|---|
| `src/pages/index.astro` | Modify | Reduce to page data + top-level section composition. |
| `src/components/vitrine/VitrineStage.astro` | Create | Hero/stage composer for the root experience. |
| `src/components/vitrine/VitrineHeader.astro` | Modify | Expand from brand-only header to restrained nav/concierge header. |
| `src/components/vitrine/WatchCarousel.astro` | Modify | Keep state ownership; add five-position stage logic without wheel lock. |
| `src/components/vitrine/WatchCarouselItem.astro` | Modify | Shift from card-strip item to staged spatial slot component. |
| `src/components/vitrine/WatchImage.astro` | Modify | Support priority image for active watch and keep fallback silhouette. |
| `src/components/vitrine/SpecPanel.astro` / `SpecItem.astro` | Modify | Keep three-spec contract, adapt layout for desktop side panel and mobile stack. |
| `src/components/vitrine/VitrineCTA.astro` | Modify | Keep WhatsApp-first action, add active-watch copy context. |

## Interfaces / Contracts

```ts
type HeroContent = { eyebrow: string; title: string; intro: string; tooltip?: string };
type FeaturedWatch = {
  id: string; name: string; collection: string;
  image?: { src: string; alt: string; priority?: boolean };
  specs: [{ label: 'Movimiento'; value: string }, { label: 'Material'; value: string }, { label: 'Reserva'; value: string }];
  ctaUrl: string; ctaLabel?: string; mood?: 'gold' | 'smoke';
};
type SupportingSection = { id: string; eyebrow: string; title: string; body: string; cta?: { href: string; label: string } };
```

Boundary rules: hero copy never owns watch specs; `featuredWatches` own item labels/specs/CTA destination; nav owns only brand + route labels; supporting sections stay static and independent from carousel state.

## Testing Strategy

No tests added in this phase. TDD is explicitly disabled unless the user asks for it.

## Migration / Rollout

No migration required. Implementation should replace the current three-item strip with a five-item staged hero while keeping rollback simple: revert `index.astro` and the affected vitrine components.

## Open Questions

- [ ] Approved hero assets are still missing; current `public/` has icons only, so `WatchImage` would fall back unless real files are added.
- [ ] Final WhatsApp destination and concierge copy still need confirmation.
- [ ] If the desktop background needs more than the existing `gold/smoke` moods, new tokens must be confirmed first.
