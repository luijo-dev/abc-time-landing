## Exploration: homepage-root

### Current State
The project is an Astro 6.2.1 frontend with TypeScript strict conventions and no framework integrations. The active root page already lives at `src/pages/index.astro` and renders a componentized luxury vitrine using `Base.astro`, global CSS tokens, a loading screen, and `src/components/vitrine/*` components.

The current home is not a blank foundation page: it already has static watch data, a scroll-snap carousel, active spec-panel synchronization, a WhatsApp CTA hook, responsive layouts, keyboard interaction, and reduced-motion safeguards. `examples/homepage.html` is therefore best treated as a visual/reference specimen, not as code to copy.

### Affected Areas
- `src/pages/index.astro` — current root composition and static watch data; future implementation would adjust copy, layout, item count, data, and CTA strategy here.
- `src/components/vitrine/WatchCarousel.astro` — active state owner; already handles click, keyboard, scrollIntoView, spec panel visibility, and CTA link sync.
- `src/components/vitrine/WatchCarouselItem.astro` — current item shell uses cards/scroll-snap, not the example’s absolute 3D five-position stage.
- `src/components/vitrine/WatchImage.astro` — supports real images with graceful CSS fallback, but referenced `/images/watches/*.webp` assets are not present in `public/`.
- `src/components/vitrine/SpecPanel.astro` and `SpecItem.astro` — already match the three-spec design constraint: movement, material, reserve.
- `src/components/vitrine/VitrineHeader.astro` — brand glass header exists, but is simpler and more restrained than the example’s nav/avatar/shop header.
- `src/components/vitrine/VitrineBackground.astro` — already provides a fixed dark/gold gradient and smoky overlay.
- `src/styles/tokens.css` and `src/styles/global.css` — current token foundation exists; future work must reconcile token values against `docs/DESIGN.md` before adding/changing colors.
- `docs/DESIGN.md` — authoritative design system: Midnight & Metal palette, Noto Serif + Inter, no-line rule, restrained glass/tonal depth, and luxury spacing.
- `examples/homepage.html` — reference artifact with useful visual ideas but several implementation/design-system violations.

### Example Alignment with `docs/DESIGN.md`
- Uses the correct core mood: dark editorial luxury, high-watch focus, asymmetry, deep background, and gold accents.
- Uses Noto Serif for display and Inter for technical/body text, matching the typography direction.
- Uses a five-watch hero carousel with center emphasis, matching the project brief’s 1 foreground / 2 mid / 2 background vitrine concept.
- Keeps the high-level specs to three fields, which aligns with “no more than three high-level specs in a single horizontal row.”
- Includes glass tooltip treatment (`surface-variant` opacity + blur) that maps well to the Glass Principle.
- Uses primary-to-container gold gradients and tonal background shifts compatible with the Metallic Gradients concept.

### Example Violations / Adaptations Needed
- It imports Tailwind from a CDN and Material Symbols from Google; the project currently uses plain Astro scoped CSS and has no Tailwind or icon-font dependency. Copying this would add unnecessary weight and drift from current conventions.
- It hard-codes many colors in utility classes and JS gradients, including extra colors like `#241a00`, `#1a2420`, `#1a1c24`, and `#241a24`; these need confirmation or tokenization before use.
- It uses `HOROLOGUE` as brand text, not `AVC TIME`.
- It includes e-commerce/avatar cues (shopping bag, user profile, wishlist) that may cheapen the concierge-first AVC TIME positioning unless the user explicitly wants a catalog/account model.
- It uses visible borders for nav/footer/avatar/tooltips. Some are acceptable as “ghost border” fallbacks, but sectioning via borders must stay subtle and justified under the No-Line Rule.
- It uses very dark/pure black shadows such as `rgba(0,0,0,0.8)` and footer shadows; `docs/DESIGN.md` asks for ultra-diffused, tinted shadows.
- It sets `body { overflow: hidden; }` and drives carousel changes from wheel events only; that risks trapping users, hurting mobile behavior, and creating accessibility issues.
- It lacks reduced-motion handling for the 3D transforms, hover filtering, wheel interaction, and transition-heavy carousel.
- It relies on remote `lh3.googleusercontent.com/aida-public/...` images; production must use owned/optimized assets or the existing CSS fallback strategy.
- Tooltip copy “El reloj de los millonarios” is aspirational but could feel overpromising/cringe; the project brief explicitly says to avoid cringe or overpromising.
- It has duplicate Material Symbols stylesheet imports and inline imperative JS that mutates class names wholesale, which would be brittle inside the current component architecture.

### Approaches
1. **Adapt current vitrine incrementally from the example** — Keep the existing Astro components, tokens, accessibility hooks, and WhatsApp path; selectively borrow the example’s stronger 3D staging, editorial title placement, and dynamic spec/background mood.
   - Pros: preserves current architecture, lowest token drift, keeps minimal JS, protects accessibility and performance.
   - Cons: may not reproduce the exact example’s 3D depth without component/CSS redesign.
   - Effort: Medium.

2. **Rebuild root around the example’s absolute 3D stage** — Model the home more directly after `examples/homepage.html`, but rewrite as Astro components and tokens.
   - Pros: closest visual parity with the provided example.
   - Cons: higher interaction/accessibility risk, more custom transforms, more responsive complexity, and greater chance of inventing unapproved styles.
   - Effort: High.

3. **Use example only as design inspiration, keep current root mostly intact** — Make only copy/assets/data refinements later.
   - Pros: safest and fastest; current root already aligns with much of the system.
   - Cons: misses the example’s signature five-position cinematic carousel and asymmetric “THE GRAND MASTERY” impact.
   - Effort: Low.

### Recommendation
Use Approach 1. The codebase already has the right foundation for the real home page: Base layout, design tokens, a vitrine component folder, carousel state, specs, CTA sync, responsive behavior, and accessibility polish. The example should guide visual refinement, but must be translated into the existing Astro/component/token architecture instead of copied.

Before implementation, confirm any new dark accent gradient colors, final WhatsApp number, real watch imagery, and whether e-commerce/account cues belong in the AVC TIME experience. Without those confirmations, the safest next phase is proposal/spec focused on adapting the current root rather than wholesale replacement.

### Likely Component Boundaries for Future Work
- `HomeHero` or `VitrineStage` — page-level composition for editorial copy + carousel + detail panel.
- `VitrineHeader` — brand/nav/concierge actions; avoid account/cart unless confirmed.
- `VitrineBackground` — tokenized dynamic background; may accept an active watch mood token later.
- `WatchCarousel` — active state and interaction owner.
- `WatchCarouselItem` — visual position/state shell, potentially extended to five spatial states.
- `WatchImage` — media-only component with owned optimized assets and fallback.
- `EditorialTitle` or reuse `WatchTitle` — large asymmetrical serif title and collection label.
- `SpecPanel` / `SpecItem` — active watch technical specs.
- `ConciergeCTA` / `VitrineCTA` — WhatsApp-first conversion.

### Risks
- Design-token drift from the example’s hard-coded color set and dynamic gradient stops.
- Brand drift from `HOROLOGUE`, shopping/account/wishlist cues, and “millonarios” copy.
- Accessibility risk from wheel-only interaction, hover-only tooltip, hidden overflow, and missing reduced-motion handling.
- Responsiveness risk: the example is desktop-stage-first and would need a mobile-first fallback.
- Performance risk from remote unoptimized images, Material Symbols, Tailwind CDN, heavy filters/blurs, and 3D transforms.
- Asset risk: `public/images/watches/*.webp` currently do not exist, so the present page depends on fallback placeholders.
- Interaction complexity: exact five-position 3D carousel would require careful state management without adding heavy dependencies.

### Ready for Proposal
Yes. The proposal should define a restrained adaptation of the existing vitrine root using `examples/homepage.html` as reference while preserving `docs/DESIGN.md`, current Astro components, minimal JS, and WhatsApp-first conversion.
