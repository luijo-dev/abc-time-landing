# Homepage Root Specification

## Purpose

Define the AVC TIME root landing experience: a premium horology vitrine that showcases selected watches and converts qualified interest into WhatsApp concierge conversations. `examples/homepage.html` is a visual reference only; `docs/DESIGN.md` is authoritative.

## Requirements

### Requirement: Homepage composition

The root page MUST present a single, restrained landing experience with AVC TIME branding, editorial hero copy, a five-watch vitrine emphasis, active watch details, and a primary WhatsApp concierge CTA.

#### Scenario: Premium root entry
- GIVEN a visitor opens `/`
- WHEN the page renders
- THEN the experience shows AVC TIME branding, an editorial watch stage, active watch details, and a WhatsApp-first action
- AND it does not read as HOROLOGUE or generic ecommerce.

#### Scenario: Five-watch emphasis
- GIVEN the watch stage is visible
- WHEN one watch is active
- THEN one watch receives foreground emphasis, adjacent watches provide depth, and background watches remain secondary.

### Requirement: Design-system compliance

All colors, typography, spacing, glass, shadows, borders, gradients, and interaction treatments MUST use existing `docs/DESIGN.md` tokens/patterns or be explicitly flagged for user confirmation before implementation.

#### Scenario: Example color rejection
- GIVEN the example uses hard-coded colors or gradients not documented in `docs/DESIGN.md`
- WHEN translating the visual direction
- THEN the implementation MUST map them to approved tokens or block them pending confirmation.

#### Scenario: No-line luxury restraint
- GIVEN content needs separation
- WHEN designing boundaries
- THEN tonal layering, spacing, or approved ghost borders MUST be used instead of visible section lines.

### Requirement: Component responsibility boundaries

The future Astro implementation SHOULD separate page composition, header, background ambience, carousel state, item positioning, image rendering, editorial typography, spec display, and WhatsApp CTA into focused components.

#### Scenario: Component ownership
- GIVEN carousel state changes
- WHEN active watch details update
- THEN state ownership remains in the carousel/stage layer while spec, image, and CTA components render received data.

#### Scenario: Media fallback
- GIVEN approved watch imagery is unavailable
- WHEN a watch item renders
- THEN the media component MUST provide a brand-safe fallback without remote example images.

### Requirement: Brand and content positioning

Copy MUST position AVC TIME as premium, precise, restrained, and concierge-led; it MUST avoid overpromising, cringe wealth claims, account/cart/wishlist cues, and catalog-first language unless confirmed.

#### Scenario: Qualified conversation CTA
- GIVEN a visitor is interested in a watch
- WHEN they select the primary CTA
- THEN the CTA communicates a WhatsApp concierge conversation for qualified interest.

#### Scenario: Ecommerce cues excluded
- GIVEN account, cart, wishlist, or shopping-bag cues appear in the reference
- WHEN defining the home experience
- THEN those cues MUST NOT be included without user confirmation.

### Requirement: Safe interaction model

The vitrine MAY adapt click, keyboard, hover, and subtle depth transitions from the example, but MUST NOT rely on wheel-only navigation, hidden body overflow traps, hover-only information, or wholesale class mutation.

#### Scenario: Multiple input methods
- GIVEN a visitor cannot use hover or a mouse wheel
- WHEN navigating watches
- THEN click/tap and keyboard-accessible controls remain available.

#### Scenario: Reduced motion
- GIVEN reduced motion is requested
- WHEN the vitrine changes active state
- THEN motion-heavy transforms and transitions are reduced without losing content access.

### Requirement: Responsive, accessible, performant delivery

The page MUST remain usable on mobile and desktop, preserve semantic structure and alt text, avoid remote example assets/dependencies, avoid Tailwind CDN or Material Symbols, and keep JS minimal.

#### Scenario: Mobile layout
- GIVEN a narrow viewport
- WHEN the root page renders
- THEN the vitrine, specs, and CTA remain readable without horizontal traps or clipped required content.

#### Scenario: Dependency discipline
- GIVEN the reference includes external scripts, icon fonts, and remote images
- WHEN planning implementation
- THEN those dependencies MUST NOT be copied into the AVC TIME root.

## Non-Goals

- Implementing code in this phase.
- Adding tests; TDD is disabled unless explicitly requested.
- Copying `examples/homepage.html`, Tailwind, Material Symbols, remote images, or HOROLOGUE content.
- Introducing unconfirmed tokens, ecommerce/account flows, cart, wishlist, checkout, or pricing flows.

## Open Questions

- What is the final WhatsApp destination/message?
- Which five watches and approved images should anchor the hero?
- Are any new background mood tokens desired, or should all moods use current `docs/DESIGN.md` tokens only?
- Should any catalog navigation exist, or is the root strictly concierge-first?
