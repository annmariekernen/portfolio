# Portfolio UI Kit

A personal portfolio homepage in the v2 vocabulary. One centered column, capped at 608px, on the page background only.

## Layout rules

- **One column.** Everything sits in a centered column with `max-width: 608px` (`window.COL`) and 24px side padding on small screens.
- **No fills.** Sections have no background colour of their own; only the page background (`--paper`) shows.
- **Hairlines stay in the column.** Rules never run full width. Section headings carry the hairline. Work rows have no dividers.

## Files

| File | Exports | Purpose |
|---|---|---|
| `primitives.jsx` | `Button`, `Tag`, `Card`, `MetaLine`, `SectionMarker`, `Band`, `COL` | Local mirrors of the library primitives, plus the column shell. |
| `chrome.jsx` | `TopNav`, `Footer` | Name wordmark and text links; a single-row footer. |
| `hero.jsx` | `Hero` | Availability line, heading, intro, and two buttons. |
| `workgrid.jsx` | `WorkGrid` | Stacked list of selected work: year · client, title, optional status tag. |
| `sections.jsx` | `PrincipleStrip`, `NowPlaying`, `ContactCTA` | Mid-page content blocks. |

These are page fragments, not library components. Copy and edit them, or import the maintained primitives from the compiled bundle (`components/`).

## Composition (in `index.html`)

```
<TopNav/>
<Hero/>
<WorkGrid/>        ← [01] Selected work
<PrincipleStrip/>  ← [02] How I work
<NowPlaying/>      ← [03] Side projects
<ContactCTA/>      ← [04] Work with me
<Footer/>
```

## Interaction

- Clicking a work row opens a placeholder case-study modal.
- Hovering a work row tints its title with the accent colour and doubles the arrow.
- The top nav switches the active link visually (no routing).

## Notes

- Tokens come from `../../styles.css`.
- Components export to `window.*` so multiple Babel script tags can share scope.
