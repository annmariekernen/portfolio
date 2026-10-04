# Case Study UI Kit

Long-form case study template. It follows the same layout rules as the portfolio kit: one centered column capped at 608px, no section fills, and hairlines that stay inside the column.

## Files

| File | Exports | Purpose |
|---|---|---|
| `header.jsx` | `CaseHeader`, `CaseHero`, `MetricRow` | Case study nav with section nav, hero with role/team/duration, key numbers. |
| `sections.jsx` | `Prose`, `QuoteBlock`, `BeforeAfter`, `ProcessTimeline`, `NextCase` | Mid-page content blocks. |

Reuses `primitives.jsx` (`Button`, `Tag`, `SectionMarker`, `Band`, `COL`) and `chrome.jsx` (`Footer`) from the portfolio kit.

## Navigation

- **Case study nav:** your name (links home), Prev, position (for example "Case 03 / 04"), and Next.
- **Section nav:** sits directly under it and lists this page's sections. Pass them to `CaseHeader` as `sections={[{ id, label }]}`. The active section follows scroll and is filled blue; clicking a section scrolls to it.
- Give each matching `Band`, `Prose`, or section component the same `id`.

## Composition (in `index.html`)

```
<CaseHeader/>       ← case nav + section nav, sticky
<CaseHero/>         ← tags, title, summary, role/team/duration
<MetricRow/>        ← up to 4 key numbers, 2 across
<Prose/>            ← [01] The problem
<QuoteBlock/>       ← pull quote
<Prose/>            ← [02] The insight
<BeforeAfter/>      ← [03] stacked before and after frames
<ProcessTimeline/>  ← [04] process steps as a list
<Prose/>            ← [05] What I'd do differently
<NextCase/>         ← next case study link
<Footer/>
```

## Notes

- `BeforeAfter` uses placeholder mocks (`FakeUI`). Replace them with real screenshots. Labels use rust for "before" and deep green for "after".
