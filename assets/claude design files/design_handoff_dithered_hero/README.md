# Handoff: Dithered horizon hero

## Overview
A redesign of the portfolio homepage hero. The nav, intro copy, buttons and the "Selected work" list stay as they are. The addition is an animated, ordered-dithered (Bayer 8×8) gradient band along the bottom of the hero, built from the brand blue and the warm paper background, which leads the eye into Selected work.

## About the design files
The files here are **design references made in HTML**: prototypes of the intended look and behavior, not production code to paste in. Recreate the design in the portfolio's existing stack (React, Next, Astro, plain HTML, etc.) using its own patterns and existing components (nav, Button, SectionMarker, work list).

`dither.js` is the exception. It is a small, dependency-free WebGL module and can be ported nearly as-is, for example wrapped in a React `useEffect` or an Astro client script. Only `mode: 1` (horizon) is needed. Modes 0, 2 and 3 are the unused exploration variants and can be deleted.

## Fidelity
High fidelity. Colors, type, spacing and motion values are final.

## Layout
- **Nav:** existing sticky nav, 64px tall. Unchanged.
- **Hero section:** `min-height: calc(86vh - 64px)`, `display: flex; flex-direction: column`. This puts the top of Selected work just below the fold. No splash and no scroll-jacking.
  - **Copy area:** `flex: 1`, content vertically centered. Inner column `max-width: 608px`, centered, `padding: 40px 0`, side gutters 24px.
  - **Horizon canvas:** the last child of the hero. Full bleed (`width: 100%`), `height: clamp(120px, 27vh, 240px)`, `flex: none`, `display: block`, `image-rendering: pixelated`, `aria-hidden="true"`.
- **Selected work:** directly after the hero. Unchanged.
- **Mobile:** the same structure at every width, since a band already reads well on narrow screens. The canvas height clamp keeps it between 120px and 240px.

## Copy (verbatim, unchanged)
- Availability line (small caps, ink-soft, 8px green-deep dot): "I'm taking on new work for Q3, in San Francisco or remote."
- H1: "I design tools for complex work."
- Lead: "I'm a UX designer for complex products: admin tools, design tooling, and anything with a real workflow behind it. I'd be glad to show you what I've been working on."
- Buttons: the existing primary Button ("See my work ▸", links to #work) and the existing ghost/outlined Button ("Say hello ▸", links to #contact).

## Typography (existing tokens)
- H1: Archivo, `wdth` 82, 700, `clamp(32px, 7vw, 44px)`, line-height 1.05, letter-spacing −0.025em, `text-wrap: balance`.
- Lead: Archivo, `wdth` 100, 17px, line-height 1.6, color ink-soft `#494339`.
- Labels and buttons: Archivo body width, `font-variant-caps: all-small-caps`, 600, 14px, `--ls-caps` tracking.

## The dither visual
**Technique:** a WebGL fragment shader draws onto a low-resolution canvas (CSS size ÷ cell size). The canvas is upscaled with `image-rendering: pixelated`, so every dither cell is a crisp 2×2 CSS-px block. Each pixel computes a continuous gradient value `t ∈ [0,1]` and quantizes it to one of 4 flat tones using an 8×8 Bayer threshold matrix. The output contains only these 4 colors. There is no blending, blur or opacity.

**Palette (four-tone, ordered light → dark):**
1. `#FBF9F6` paper (matches the page background, so the band's top edge dissolves into the page)
2. `#DEE9F6` blue pale
3. `#8FA5C4` mist
4. `#1E86EE` blue

**Horizon shape (mode 1):** `y` = distance from the bottom edge (0 at bottom, 1 at top). The band edge is perturbed by `0.07·sin(x·2.1 + φ) + 0.035·sin(x·4.7 − 2φ)` plus low-amplitude fBm noise, then `t = clamp((y − 0.08 + wave) / 0.9, 0, 1)^1.15`, inverted so the bottom is the most saturated. See the `uMode==1` branch in `dither.js` for the exact code.

**Final settings:**
- `mode: 1`, `cell: 2` (px), `loop: 16` (s), `palette: 'four'`
- The "blue amount" tweak (1) only affects the unused field variants. It does nothing in horizon mode, so no setting is needed for it.

**Motion:**
- Phase `φ = (elapsed / 16s) · 2π`. Every animated term is periodic in φ, so the loop is seamless with a 16s feel.
- Rendering is capped at about 30fps (it redraws when ≥32ms have passed), which is plenty for slow drift and light on battery.
- Rendering pauses when the canvas is off-screen (IntersectionObserver) or the tab is hidden.
- It resizes with a ResizeObserver.

**Reduced motion:** when `prefers-reduced-motion: reduce` is set, the band draws one static frame at `φ = 1.1` and stops. The module listens for changes to the media query live.

**Robustness:** the module handles `webglcontextlost` and `webglcontextrestored` by rebuilding the program and redrawing. If WebGL is unavailable it does nothing. Give the canvas `background: var(--paper)` so the fallback is a blank paper band.

**Accessibility and contrast:** all text sits on plain paper `#FBF9F6`, above the band (ink `#221F1C` is about 15:1 and ink-soft `#494339` about 9:1). The canvas is decorative (`aria-hidden`).

## Implementation notes
- Create the `DitherField` after mount and call `.destroy()` on unmount, which removes all observers and listeners.
- SSR frameworks: only instantiate on the client.
- Call `field.set({...})` to change options without recreating it.

## Files
- `hero-horizon-reference.html`: a standalone, framework-free reference of the chosen hero. Open it in a browser with `dither.js` alongside.
- `dither.js`: the dither renderer (WebGL 1, about 170 lines, no dependencies).
- `reference/Portfolio Home.dc.html`: the original exploration file with all three variants, for context only. It depends on the design-kit runtime and won't open on its own.
