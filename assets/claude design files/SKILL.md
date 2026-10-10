---
name: studio-design
description: Use this skill to generate well-branded interfaces and assets for the STUDIO// personal design kit (a quiet neobrutalist UX-designer brand — warm neutrals, cool blues and greens, hairline structure), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

The kit is a personal brand for a UX designer who is **practical, pragmatic, loves complex systems, fun-loving, and future-oriented**. Visual direction: **neobrutalist structure at portfolio volume** — sharp corners, visible hairline rules, flat cool colour, mature type. The character comes from structure, not from shouting.

## Where things live

- `README.md` — full brand guide (content fundamentals, visual foundations, components). **Start here.**
- `styles.css` — the entry point. Link this one file; it imports the current token set.
- `tokens_v2.css` — every CSS token (colour, type, width axis, spacing, borders, ghost outline, motion).
- `components/` — library components (`Button`, `Card`, `Tag`, `MetaLine`, `SectionMarker`), each with a `.jsx`, a `.d.ts` prop contract, and a preview card.
- `assets/` — logos (`logo.svg`, `logo-mark.svg`) and one optional background (`pattern-rules.svg`, unused by default).
- `preview/` — specimen cards showing tokens in use. Useful as visual reference.
- `ui_kits/portfolio/` — full portfolio homepage in factored React/JSX fragments.
- `ui_kits/case_study/` — long-form case study template.
- `Design Kit v2.html` — the whole system in situ.

## How to use

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.):
1. Link `styles.css` at the top of any HTML file. Everything else reads from tokens.
2. Copy the assets you need out of `assets/` and the fragments you need out of `ui_kits/`.
3. Build static HTML/JSX files for the user to view.
4. Stick to the visual rules: **1px light-grey hairline, no shadows, zero radius (4px buttons, pill tags), sentence-case headings, small-caps labels, one accent family per screen.**

If working on production code:
1. Lift tokens from `tokens_v2.css` into your codebase.
2. Read the README's **VISUAL FOUNDATIONS** section for hover/press/focus rules and the contrast rule.
3. Copy the logos and pattern SVGs into your asset pipeline.

If the user invokes this skill without any other guidance:
- Ask what they want to build or design.
- Ask 4–6 focused follow-up questions.
- Act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Hard "do not" rules

- **No emoji.** Use unicode glyphs (`▸ ◆ ★ // → ↗`) for decorative chars instead.
- **No shadows.** The hard offset shadow is retired. Depth is the ghost outline (`--ghost`) or nothing.
- **No gradients, no glassmorphism, no blur, no rgba overlays.**
- **No pure white or pure black.** Papers are `--bone` / `--paper` / `--paper-2`; the darkest value is `--ink` (`#221F1C`).
- **No opacity tints** for lightening. Use the designed pale steps (`--blue-pale`, `--green-pale`, `--mist-pale`).
- **Never `text-transform: uppercase`.** Every label — button, tag, metadata, section marker, form label, nav — uses `font-variant-caps: all-small-caps` with `--ls-caps` tracking and **sentence-case source text**. Typing ALL CAPS defeats it.
- **Filled small text uses the deep colour step.** `--blue` / `--green` are large-fill colours; anything with text at 14px or below fills with `--blue-deep` / `--green-deep` to clear AA.
- **Zero corner radius.** Exceptions: buttons get 4px (`--radius-sm`), tags are full pills (`--radius-full`), and true circles (avatars, status dots).
- **Mono is for code only.** Code, hex values, token names, version strings, genuine machine output. Never for labels, metadata, or section markers — those are small caps. Reaching for mono to look technical is the mistake v2 exists to fix.
- **One accent family per screen.** Blue *or* green leading, not both competing.
