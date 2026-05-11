# Verification Report — homepage-root

**Change**: homepage-root  
**Mode**: Standard — design/request compliance only  
**Execution note**: Build, compile, and tests were intentionally **not run** because this verify pass was explicitly limited to design/request compliance.

---

## Completeness

| Metric | Value |
|---|---:|
| Tasks total | 12 |
| Tasks complete | 12 |
| Tasks incomplete | 0 |

Result: task checklist is marked complete, but the implemented code still has compliance gaps.

---

## Requested Intent Review

### Premium AVC TIME homepage intent
- AVC TIME branding is present and HOROLOGUE/ecommerce cues are not copied.
- The page is reduced to a single hero-led landing experience with editorial copy, a five-watch stage, specs, and concierge CTA.
- Five-watch foreground/adjacent/background depth is implemented through active/adjacent/background states.

### Concise user-facing summary (ES)
La propuesta SÍ va en la dirección correcta para la home real de AVC TIME: se siente más editorial, evita el ecommerce genérico y arma una vitrina de cinco relojes con foco en WhatsApp. Pero todavía NO está del todo cerrada respecto a `docs/DESIGN.md`: la CTA principal no se sincroniza visualmente con el reloj activo, faltan los assets reales de relojes, hay deriva de tokens/colores hardcodeados, y el tooltip depende demasiado del hover, lo que debilita accesibilidad y refinamiento.

---

## Static Compliance Matrix

| Requirement | Status | Notes |
|---|---|---|
| Homepage composition | ⚠️ Partial | Hero editorial + five-watch stage exist, but active CTA copy does not stay aligned with the active watch. |
| Design-system compliance | ⚠️ Partial | Strong overall direction, but several component styles use hard-coded RGB/gradient values instead of staying fully token-driven. |
| Component responsibility boundaries | ⚠️ Partial | File/component split is good, but CTA/spec/background sync depends on document-level DOM mutation instead of cleaner component boundaries. |
| Brand and content positioning | ⚠️ Partial | Copy tone is restrained and concierge-led, but the visible CTA text under-communicates “WhatsApp concierge conversation”. |
| Safe interaction model | ⚠️ Partial | Click/tap/keyboard controls exist and wheel-lock was avoided, but tooltip content is effectively hover-first. |
| Responsive, accessible, performant delivery | ⚠️ Partial | Structure is lean and local-asset paths are used, but the referenced watch image files do not exist, forcing fallback placeholders. |

---

## Coherence Against Design / Tasks

| Decision / Task | Followed? | Notes |
|---|---|---|
| Reuse existing vitrine instead of copying `examples/homepage.html` | ✅ Yes | Components were adapted rather than porting the reference literally. |
| Introduce `VitrineStage.astro` composer | ✅ Yes | `src/pages/index.astro` now delegates hero composition. |
| Centralize state in `WatchCarousel` | ⚠️ Partial | Active state lives there, but downstream updates are done by DOM selectors rather than stronger data boundaries. |
| Five-item staged hero | ✅ Yes | Active, adjacent, and background staging states are present. |
| Watch-specific CTA/spec sync | ❌ No | Specs and href update, but visible CTA label does not update with the active watch. |
| Data contracts include `heroContent`, `featuredWatches`, `supportingSections` | ⚠️ Partial | `heroContent` and `featuredWatches` exist; `supportingSections` was omitted despite the design data-flow contract. |

---

## Issues Found

### CRITICAL
1. **Primary CTA visual copy is not synchronized with the active watch.**  
   Evidence: `VitrineStage.astro` seeds `VitrineCTA` with `activeWatch?.ctaLabel` once (`src/components/vitrine/VitrineStage.astro:49-52`), but `WatchCarousel.astro` only updates the CTA `href` and `aria-label`, not the visible text (`src/components/vitrine/WatchCarousel.astro:120-125`). After changing watches, the button can still visibly say “Consultar Daytona”.

### WARNING
1. **Approved hero imagery is still unresolved in practice.**  
   Evidence: `src/pages/index.astro` references `/images/watches/*.webp`, but no files exist under `public/images/watches/`. The fallback is brand-safe, but the real homepage intent is weakened because the luxury vitrine will render placeholders.

2. **Design-token discipline drifts in multiple components.**  
   Evidence: hard-coded values like `rgb(255 255 255 / 0.03)`, `rgb(16 16 16 / 0.72)`, and direct gold opacity values appear in `WatchCarouselItem.astro`, `WatchImage.astro`, `VitrineHeader.astro`, `SpecPanel.astro`, and `Tooltip.astro` instead of staying purely on approved tokens/patterns.

3. **Tooltip information is not robustly accessible beyond hover-like interaction.**  
   Evidence: the trigger is a `span` inside `Tooltip` (`VitrineStage.astro:30-35`), while `Tooltip.astro` reveals content on `:hover` / `:focus-within`; the current trigger is not keyboard-focusable on its own.

4. **The visible CTA language is weaker than the spec’s WhatsApp-concierge intent.**  
   Evidence: visible text such as “Consultar Daytona” / header “Concierge” does not explicitly communicate WhatsApp conversation, even though the destination URL and aria-label do.

5. **The componentization contract is mostly good, but the data-flow plan is not fully honored.**  
   Evidence: `supportingSections` is absent from `src/pages/index.astro` / `src/types/homepage.ts` usage, despite being part of the design contract and earlier task wording.

### SUGGESTION
1. Tighten ghost-border usage closer to the documented fallback (15% opacity) where large glass containers currently lean slightly heavier.
2. Replace document-wide selectors for CTA/spec/background sync with a tighter stage-scoped sync pattern so the separation of responsibilities is clearer and easier to audit.
3. Make the visible CTA copy explicitly concierge/WhatsApp-led, not only the aria-label.

---

## Verdict

**FAIL**

The implementation clearly moves toward the requested AVC TIME homepage, but it is not yet verification-clean: the unsynced visible CTA label is a blocker, and the missing real assets plus design-system drift still weaken compliance with `docs/DESIGN.md` and the homepage request.
