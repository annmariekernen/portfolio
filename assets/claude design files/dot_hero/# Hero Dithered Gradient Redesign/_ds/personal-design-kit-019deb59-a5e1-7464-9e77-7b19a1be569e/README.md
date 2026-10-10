# Personal Design Kit

A quiet neobrutalist design system for a UX designer who lives at the intersection of **complex systems** and **fun-loving futurism**. Built to give an AI agent (or a future me) everything needed to produce on-brand artifacts: portfolios, case studies, slide decks, mocks, and throwaway prototypes.

> Practical. Pragmatic. Fun. Future-leaning.
> Sharp corners. Hairline structure. Cool, flat colour.
> The design gets out of the way of the work.

---

## Sources & Context

This is a **personal design kit**, not a recreation of an external product.
- No codebase, Figma file, or deck was provided.
- The direction was specified as: *"more readable, less distracting, more mature and professional. Sleek with a quirky neubrutalist touch — but not so much that it takes away from the content."*
- The personality brief was: *"warm, jovial, optimistic, loves complex systems, mediterranean hospitality, future oriented."*

Substitute the placeholder name (`STUDIO //`) and tagline with your real handle when you're ready.

---

## Brand Personality

| Axis | Where we sit |
|---|---|
| Voice | Warm. Bubbly. Welcoming. Like a friend pulling you up a chair at a sunny kitchen table to show you what they've been building. |
| Energy | Calm and confident. Structured, generous, optimistic. The layout is brutalist; the words are sunny; the volume is conversational. |
| Reference points | Field notebooks, technical drawings, printed schedules, Mediterranean shutters and whitewash, a well-organised workshop. |
| What it's NOT | Cold. Distant. Buttoned-up corporate. "No-BS" tough-guy. Apologetic. Beige. Generic SaaS glassmorphism. Loud for the sake of it. |

---

## CONTENT FUNDAMENTALS

### Voice & tone
- **First person, lowercase-friendly, generous.** "hi! i build systems that hold up under pressure — come see what we've been up to."
- **Warm and welcoming, never cold.** Speak to one person, like you're handing them a coffee. "so glad you're here." "pull up a chair."
- **Plain words over jargon.** "ships fast" beats "rapid iterative deployment."
- **Concrete numbers and verbs.** "cut signup time from 47s to 12s" beats "improved onboarding."
- **Sunny optimism, not snark.** Curious about hard problems, delighted when they click into place. A wink, not a wall of jokes.
- **Mediterranean hospitality.** The reader is a guest, not a lead. We invite, we host, we share.

### Casing rules
- **Headings:** sentence case.
- **Every label is small caps** — buttons, tags, metadata, section markers, form labels, table headers, nav. One voice, set in the body face: `font-variant-caps: all-small-caps` plus `--ls-caps` tracking.
- **Always write label source text in sentence case.** The font renders the caps. Typing ALL CAPS defeats the effect and reads as shouting.
- **Body copy:** sentence case. Lowercase i/you is fine for personal voice.
- **Section markers:** `[01]`, `▸ Now playing`, `// Field notes` — the glyph prefix survives, the uppercase source does not.

### Words we use
✅ ship · system · craft · prototype · figure out · tinker · field notes · in progress · v0.1 · come see · pull up a chair · hello · welcome · cheers · lovely · sunny · happy to · thanks for stopping by · receipts inside

### Words we avoid
❌ delight (overused) · seamless · synergy · revolutionary · disrupt · journey · ecosystem · best-in-class · solution · empower · unlock · no-bs · hustle · grindset · game-changing

### Examples
- ✅ "case study: we rebuilt the checkout. 38% lift. come see what we learned."
- ❌ "Embark on a delightful journey through our award-winning checkout transformation."
- ❌ "checkout: cut the bs. shipped a lift." *(too cold/swaggery)*
- ✅ "resume [.pdf, 84kb] — grab a copy, no email needed."
- ✅ "thanks for stopping by. tea's on, ask me anything."

### Emoji & special chars
- **No emoji.** They soften the structure.
- **Unicode glyphs are encouraged** as structural devices: `▸ ▾ ◆ ◇ ★ ✦ ✱ ⌗ ↗ ↘ → //`
- These act as iconography, dividers, list bullets, and section markers. Use them like punctuation.

---

## VISUAL FOUNDATIONS

### Colour
Warm neutrals, cool accents. Two accent families, both flat, never gradients and never opacity tints.

**Neutrals — warm, because the paper is warm**
- **Ink (`#221F1C`)** — borders, primary text, the darkest value in the system by a clear margin.
- **Ink soft (`#494339`)** — secondary text. **Ink faint (`#756D62`)** — metadata.
- **Rule (`#D2CCC2`)** — quiet internal dividers.
- **Bone (`#FFFEFC`) · Paper (`#FBF9F6`) · Paper 2 (`#F4F1EB`)** — the surfaces. Never pure white.

**Blue — primary action, links, data**
- **Blue deep (`#0B6BD6`)** — primary buttons and links. **Blue deeper (`#0854A9`)** — hover/pressed.
- **Blue (`#1E86EE`)** — large fills, figures, link hover. **Blue pale (`#DEE9F6`)** · **Mist (`#8FA5C4`)** · **Mist pale (`#DFE6F0`)**.

**Green — secondary action, system-OK**
- **Green deep (`#08815A`)** — secondary buttons, success. **Green deeper (`#06674A`)** — hover/pressed.
- **Green (`#16B37E`)** — large fills and figures. **Green pale (`#D9EDE3`)**.

**Rust (`#C2603F`)** — validation, warnings, errors. The only warm accent in the system, and functional only: never decorative, never a brand accent.

> **The contrast rule.** The lifted steps (`--blue`, `--green`) are large-fill colours — panels, figures, big type, pairings on pale surfaces. Anything filled with text at **14px or below uses the deep step**, which clears WCAG AA on bone. This is why filled tags and secondary buttons are the deep colours.

**One accent family leads per screen.** Blue *or* green out front; the other supports.

### Type
**Archivo**, one family, two proportions — it's variable on the width axis.
- **Display (`--wdth-display`, 82):** headings, hero type, oversized figures. Narrow and tall.
- **Body (`--wdth-body`, 100):** body copy, buttons, UI labels. Wide and comfortable.
**Small caps carry every label.** One voice for buttons, tags, metadata, section markers, form labels and nav — Archivo at body width with `font-variant-caps: all-small-caps` and `--ls-caps` tracking. Three weights make the ladder: **700 / 16px** for section markers, table headers and `h5`; **600 / 16px** for buttons and tags; **500 / 14px** for metadata and form hints.

**Mono is for code only.** **JetBrains Mono** survives for code, hex values, token names, version strings, and genuine machine output (the terminal mock in the case-study template). Nothing that is merely a label. If you're reaching for mono to make something look technical, use small caps instead.

Hero is **44px** (`.hero-display`, `--fs-3xl`) and used once per page. `h1` 32 · `h2` 28 · `h3` 26 · `h4` 21 (tokens `--fs-h1`…`--fs-h4`) · lead 18 · body 16.

### Spacing
4pt base grid: `0, 2, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Dense at small scale, generous at large scale — no in-between mush.

### Borders — the signature
- Default: **`1px solid Rule`** (light warm grey). This is the whole vocabulary.
- Hairline: `0.75px solid Rule` for table cells and fine internal detail.
- Divider: `1px solid Rule` for quiet internal rules.
- Borders are **always** Ink (or Paper on Ink backgrounds). Never coloured, never dashed.

### Depth — the ghost outline
The hard offset shadow is **retired**. In its place:

```css
--ghost: 2px 2px 0 var(--paper), 3.5px 3.5px 0 var(--ink);
```

Two flat copies of the shape — a background-coloured one at 2px over a rule-coloured one at 3px (the same light grey as the border) — leaving a 1px hairline down the right and bottom edges. The shadow's ghost.

**Match the variant to the surface behind the element**: `--ghost` on paper, `--ghost-alt` on paper 2, `--ghost-bright` on bone, or `none`. Mismatch it and the seam shows. **Never** a blurred drop shadow.

### Corner radius
**Zero**, with two exceptions: buttons get a slight 4px rounding (`--radius-sm`), and tags are fully rounded pills (`--radius-full`). Circular elements (avatars, status dots) are full circles.

### Backgrounds & motifs
- **Paper** is the default canvas; **Paper 2** for alternating bands; **Ink** for one inverse band per page.
- **No background patterns.** Surfaces are flat colour; structure comes from borders and rules. `pattern-rules.svg` remains in `assets/` as an option for long content, unused by default.
- **No photographic backgrounds.** If we need an image, it's a screenshot, diagram, or chart — content, not vibes.

### Animation
- **Fast and stiff.** `100ms` for micro-interactions, `180ms` for layout shifts.
- Easing: `cubic-bezier(0.2, 0, 0, 1)`.
- **No bounces, no springs, no fade-in-from-below.** Hover and press are mechanical.

### Hover, press, focus
- **Button:** 5px × 16px padding, 4px radius. On hover the background darkens one step. No translation, no shadow growth — the element doesn't move.
- **Link:** `--blue-deep` at rest, lifts to `--blue` on hover, underline thickens 1.5px → 2px.
- **Card (interactive):** the ghost outline appears on hover; nothing else changes.
- **Disabled:** `--mist-pale` fill, `--mist` border, `--ink-faint` text. No outline.
- **Focus:** `2px solid --focus`, offset `2px`. Never removed.

### Layout rules
- **Grids are visible.** Showing structural rules on the page is the point.
- **Asymmetry is good.** Off-centre hero text, generous negative space, one oversized element per screen.
- **Sticky chrome** (nav, footer) gets a `1px` hairline, never a shadow.
- Prose caps at `68ch`; leads at `52ch`; headings at `16–18ch`.

### Transparency & blur
**None.** No backdrop-filter, no rgba overlays, no glassmorphism. The only exception is the modal scrim.

---

## COMPONENTS

Library components live in `components/<Name>/` — each with a `.jsx` implementation, a `.d.ts` prop contract, and a preview card. They style themselves entirely from CSS custom properties, so retokenizing the system retokenizes them.

- **Button** — small-caps action in the body face. Variants: `primary` (deep blue), `secondary` (deep green), `ghost`, `ink`. Supports `as="a"`, `disabled`, and `onInk` for inverse surfaces.
- **Card** — flat panel: hairline border, ghost outline, zero radius. Fills for bone/paper/quiet/pale/ink; `ghost` must match the surface behind; `hero` for 32px padding.
- **Tag** — small-caps pill-shaped metadata chip, 12px, borderless (fill only), with an optional round status dot. Filled variants use the deep colour steps so small text clears AA.
- **MetaLine** — small-caps metadata strip for dates, read times, section markers. Tones: muted, ink, inverse.
- **SectionMarker** — numbered section heading (`[01]`) over a structural rule. Sentence case.

Page-level compositions (nav, hero, work grid, case-study sections) are not library components — they live as lowercase fragment files inside `ui_kits/*/` and are meant to be copied and edited.

---

## ICONOGRAPHY

- **Primary icon set:** **Lucide** (via CDN). Clean line icons, `1.5px` stroke to match the border vocabulary, sized 16/20/24/32px.
- **Decorative glyphs:** unicode geometric chars — `▸ ▾ ◆ ◇ ★ ✦ ✱ ⌗ ↗ → //`. Bullets, separators, status markers.
- **Logo / wordmark:** `assets/logo.svg` — Archivo at display width, ink, with a deep-blue `//`. Icon-only mark in `assets/logo-mark.svg`.
- **No emoji. No icon fonts.** Inline SVG or Lucide only.
- **Custom illustrations:** flat, 1–2 colour, `1.5px` ink stroke. Never gradient-filled, never soft-shadowed.

> Lucide's stroke weight now matches our `1.5px` border. Set the stroke explicitly — the default `2px` reads heavy in v2.

---

## INDEX (Manifest)

```
/
├── README.md                  ← you are here
├── SKILL.md                   ← agent skill manifest (works as Claude Code skill)
├── styles.css                 ← ENTRY POINT. link this one file
├── tokens_v2.css              ← all current tokens
├── thumbnail.html             ← homepage tile
├── Design Kit v2.html         ← whole system in situ
├── assets/
│   ├── logo.svg               ← primary wordmark
│   ├── logo-mark.svg          ← icon-only mark
│   └── pattern-rules.svg      ← faint horizontal rules
├── components/                ← library components (exported via the bundle)
│   ├── Button/                ← Button.jsx · Button.d.ts · button.html
│   ├── Card/
│   ├── Tag/
│   ├── MetaLine/
│   └── SectionMarker/
├── preview/                   ← design-system tab cards
│   ├── _card.css
│   ├── colors-*.html
│   ├── type-*.html
│   ├── spacing-*.html
│   ├── components-*.html
│   └── brand-*.html
└── ui_kits/
    ├── portfolio/             ← homepage UI kit (page fragments, lowercase files)
    │   ├── README.md
    │   ├── index.html
    │   └── *.jsx
    └── case_study/            ← long-form case study template
        ├── README.md
        ├── index.html
        └── *.jsx
```

---

## How to use this kit

1. Link `styles.css` — it imports the current tokens.
2. Browse the `preview/` cards in the Design System tab to see tokens in action.
3. Open `Design Kit v2.html` for the whole system in one scroll.
4. Open `ui_kits/portfolio/index.html` and `ui_kits/case_study/index.html` for full-screen reference compositions.
5. Cherry-pick components from `components/` or fragments from `ui_kits/*/` for new work.
6. When in doubt: **1px light-grey hairline, no shadow, zero radius (4px buttons, pill tags), sentence-case heading, small-caps label, one accent family.** That's the kit.
