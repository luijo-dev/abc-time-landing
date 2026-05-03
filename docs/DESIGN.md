# Design System Document: The Horological Excellence Standard

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is not a mere catalog; it is an editorial exhibition. Inspired by the legacy of Rolex and Patek Philippe, the "Creative North Star" is **The Digital Curator**. 

We move away from the "e-commerce grid" and toward a high-end gallery experience. The design breaks the standard template through **intentional asymmetry**, where large-scale typography overlaps high-resolution photography, and "breathing room" (negative space) is treated as a luxury material in itself. The goal is "Magia Sutil"—a feeling of weightless depth where the interface recedes to let the craftsmanship of the timepieces command the user’s full attention.

---

## 2. Colors: Depth, Luster, and Metal
The palette utilizes a "Midnight & Metal" approach. We avoid flat blacks in favor of deep, layered charcoals and champagnes that mimic the reflection of sapphire crystal and polished gold.

### Color Tokens
- **Background (`#131313`)**: The canvas. A deep, obsidian base that provides the "Deep Black" feel without crushing detail.
- **Primary (`#f2ca50`) & Primary Container (`#d4af37`)**: Our "Champagne Gold." Use this sparingly for moments of high intent or brand signature.
- **Surface Tiers**: 
    - `surface-container-lowest (#0e0e0e)`: For recessed areas or deep background shifts.
    - `surface-container-highest (#353534)`: For elements that need to feel "closer" to the user.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning content. Boundaries must be defined through tonal shifts. To separate a product feature from a hero section, transition from `surface` to `surface-container-low`. The interface should feel like it was carved from a single block of material, not stitched together with lines.

### Signature Textures & Glass
- **Metallic Gradients:** Use linear gradients (e.g., `primary` to `primary-container`) at a 45-degree angle to simulate the "shimmer" of gold.
- **The Glass Principle:** Floating elements (tooltips, navigation bars) must use a **Glassmorphism** effect: `surface-variant` at 60% opacity with a `20px` backdrop-blur. This mimics the watch face crystal.

---

## 3. Typography: Editorial Authority
The hierarchy is designed to mirror a luxury magazine layout. We pair the authoritative weight of Noto Serif with the precision-engineered clarity of Inter.

- **Display & Headline (Noto Serif):** These are your "Statement" pieces. Use `display-lg` (3.5rem) with tight letter-spacing for hero titles. This conveys history and prestige.
- **Body & Titles (Inter):** These represent "Vanguard Technology." Use `body-md` for technical specifications. The clean sans-serif ensures that even complex data (caliber movements, power reserves) remains legible and modern.
- **The Contrast Rule:** Always pair a `display` serif header with a `label-md` sans-serif sub-header in `on-surface-variant` (Champagne-grey) to create a sophisticated, tiered reading experience.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, height is not measured by shadows alone, but by "Luminance."

- **The Layering Principle:** Achieve depth by "stacking" tiers. Place a `surface-container-highest` card atop a `surface-dim` background to create a soft, natural lift. 
- **Ambient Shadows:** When an element must float (e.g., a luxury watch modal), use an ultra-diffused shadow: `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5)`. Never use pure black shadows; they must be tinted with the `surface-container-lowest` color to feel natural.
- **The "Ghost Border" Fallback:** If a container requires definition against a similar background, use a 1px border with `outline-variant` at **15% opacity**. This provides a "whisper" of an edge without breaking the minimalism.

---

## 5. Components: Precision Elements

### Buttons (The "Crown" Style)
- **Primary:** Gradient-filled (`primary` to `primary-container`), `roundness-sm` (4px), with `on-primary` text. It should feel like a tactile gold plaque.
- **Secondary:** Transparent with a `Ghost Border` and `primary` text.
- **Tertiary:** Pure text with a subtle `primary` underline that expands on hover.

### Cards & Lists (The "Exhibition" Style)
- **Rules:** No dividers. Use `48px` or `64px` of vertical white space to separate list items. 
- **Product Cards:** Use `surface-container-low`. On hover, transition the background to `surface-container-high` and slightly increase the `backdrop-blur`.

### Tooltips & Overlays
- **Visuals:** Must use the Glassmorphism effect. Borders should be `outline-variant` at 20% opacity. 
- **Atmosphere:** Tooltips should appear with a "fade and scale" transition (200ms) to simulate the smooth movement of a watch hand.

### Input Fields
- **Style:** Underline only (1px `outline-variant`). When focused, the underline transitions to a subtle `primary` (Gold) gradient. 

---

## 6. Do's and Don'ts

### Do:
- **Embrace Asymmetry:** Place a watch image off-center, allowing the `display-lg` typography to overlap the edge of the image.
- **Use High-Contrast Spacing:** If you think there is enough white space, add 20% more. Luxury is the ability to "waste" space.
- **Respect the Serif:** Use Noto Serif for numbers (prices, dates) to give them a sense of value and permanence.

### Don't:
- **No Sharp Corners:** Never use `roundness-none`. Even the most technical components should have at least `roundness-sm` (4px) to feel "soft-touch."
- **No Pure White:** Never use `#FFFFFF`. Use `on-surface` (`#e5e2e1`) or `tertiary-fixed` (`#e3e3de`) to maintain the Ivory/Champagne warmth.
- **No Crowding:** Do not place more than three high-level specs in a single horizontal row. Let the information breathe.

---
**Director’s Final Note:** 
Remember, we are not selling a tool to tell time; we are selling a legacy. Every pixel must feel intentional, silent, and expensive. If a screen feels "busy," remove elements until only the soul of the timepiece remains.