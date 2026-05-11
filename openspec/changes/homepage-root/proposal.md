# Proposal: Homepage Root

## Intent

Create the true AVC TIME root/home page by adapting the current vitrine experience with `examples/homepage.html` as visual reference only. The result must protect luxury perception, performance, restraint, and WhatsApp-first qualified conversion while staying inside `docs/DESIGN.md`.

## Scope

### In Scope
- Adapt the existing Astro root (`src/pages/index.astro`) instead of copying the standalone example.
- Translate relevant example ideas: five-watch hero emphasis, editorial asymmetry, richer stage depth, active technical details, and refined concierge CTA.
- Preserve project-native components, scoped CSS, design tokens, accessibility safeguards, and minimal JS.
- Define component boundaries for later spec/design work.

### Out of Scope
- No implementation in this phase.
- No Tailwind CDN, Material Symbols dependency, remote example images, cart/account/wishlist flows, or wholesale HTML/JS copy.
- No new colors, shadows, gradients, or styles outside `docs/DESIGN.md` without user confirmation.
- No tests; TDD is disabled by user default.

## Capabilities

### New Capabilities
- `homepage-root`: Root landing experience that presents AVC TIME watches with design-system-compliant vitrine staging and WhatsApp concierge conversion.

### Modified Capabilities
- None; no existing OpenSpec specs were found.

## Approach

Use the exploration’s Approach 1: incrementally adapt the current vitrine. Keep `Base.astro`, global tokens, and `src/components/vitrine/*`; evolve composition and presentation toward the example only where it maps to `docs/DESIGN.md`. Any example-only hard-coded colors must be rejected, mapped to existing tokens, or flagged for confirmation.

Suggested boundaries: `HomeHero`/`VitrineStage` for page composition, `VitrineHeader` for brand/concierge nav, `VitrineBackground` for tokenized ambience, `WatchCarousel` for state and interaction, `WatchCarouselItem` for spatial positioning, `WatchImage` for media/fallbacks, `EditorialTitle`/`WatchTitle` for serif hierarchy, `SpecPanel`/`SpecItem` for three specs, and `ConciergeCTA` for WhatsApp.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/index.astro` | Modified | Root composition, data, copy, CTA strategy |
| `src/components/vitrine/*` | Modified | Vitrine staging, carousel, header, specs, media boundaries |
| `src/styles/tokens.css` | Guarded | Use only approved tokens; additions require confirmation |
| `docs/DESIGN.md` | Reference | Authoritative visual constraints |
| `examples/homepage.html` | Reference | Visual specimen, not source code |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Token/style drift from example colors | High | Token-only mapping; confirm additions |
| Brand drift from ecommerce/cringe cues | Medium | Keep concierge-first AVC TIME positioning |
| Accessibility/performance regressions | Medium | Avoid wheel-only, hidden overflow traps, heavy dependencies |
| Missing real watch assets | Medium | Use owned optimized assets or existing fallback |

## Rollback Plan

Revert root/vitrine component changes to the current scroll-snap vitrine. Keep proposal/spec artifacts as audit trail.

## Dependencies

- Final WhatsApp destination.
- Real/approved watch imagery and product data.
- User confirmation for any new design tokens or ecommerce/account cues.

## Success Criteria

- [ ] Home page reads as premium AVC TIME, not copied HOROLOGUE.
- [ ] All colors/styles resolve to `docs/DESIGN.md` tokens or confirmed additions.
- [ ] Component responsibilities remain separated and Astro-native.
- [ ] WhatsApp remains the primary conversion path.
