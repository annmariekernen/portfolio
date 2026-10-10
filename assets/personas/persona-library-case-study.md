# Personas Context Library

*Ongoing initiative · Freddie Mac · 2026*

Turning our team's personas into an AI-native context library for agentic prototyping.

> **[Fig 6 · Hero]** Copilot Notebook Q&A mock: persona .md files listed as sources, a sample question ("What does an underwriting analyst check first…") with numbered citations back to persona files, and an "Ask about any persona…" input.

## Problem

> **How can we make our personas AI-native?**

Our platform has a lot of different user types, each with a very specific job, like an underwriter, a producer or a surveillance manager. We call these our personas.

The documentation describing these personas sat in a SharePoint folder that nobody used, and hadn't been updated in over 5 years.

One of our goals this year was to turn those personas into something our team could actually use with AI.

## The idea: personas as context

While working on updating these personas, I realized the format was the bigger issue. A stock photo and a short story don't help AI design for an underwriter.

> **[Fig 1 · Before / after]** Left: the 2020 "Underwriting analyst" sheet (stock photo, name bar, pull quote; tagged persona_04.png · Last edited 2020). Right: the new Markdown file for the same role, with file path, branch, frontmatter, Daily work, Tools and Vocabulary.

So I turned our user types into a **context library** instead: one Markdown file per persona, stored in a code repo. This way they're both human- and AI-readable, anyone can edit them, and version control is built in.

Our next step is to make a skill so they can be easily referenced in agentic prototyping projects.

> **[Fig 2 · Annotated persona file]** underwriting-analyst.md with line numbers and a 6-part legend: Frontmatter, Summary, Goals and daily work, Tools, Pain points, Vocabulary.

## Designing the schema with the team

Our platform has over 30 user types, which is a lot of personas to keep current. I figured every persona should follow the same schema so they're easier to maintain, easier to read by AI, and the library can scale.

To design the schema, I ran a FigJam session with the team around one question: what information would help you in a persona?

> **[Fig 3 · Stickies → schema]** "What tools do they use every day?" → ## Tools (Team suggestion). "What words do they use that we don't?" → ## Vocabulary (Not in my first draft). "Give each persona a name and a photo" → cut (adds tokens, tells the AI nothing about the work).

## How it's organized

myOptigo is built around 4 business blocks: Production & Sales, Underwriting, Capital Markets, and Operations. The library follows the same structure, with one folder per block, and some blocks split further by division. Each persona is one Markdown file with the same standard schema.

> **[Fig 4 · Repo file tree]** personas/ with a folder per block (production-and-sales/, underwriting/credit/, underwriting/valuation/, capital-markets/, operations/servicing/, operations/loan-delivery/), status dot per file. Counts: Production & Sales 7, Underwriting 8, Capital Markets 6, Operations 11. Legend: ● validated with interviews, ◐ drafted from internal docs, ○ not started.

## Research and validation

To start each persona, I run the same prompt through Microsoft Copilot, which has access to our knowledge graph and other internal documentation. Then I ask Copilot to turn its report into our standard schema, so each first draft has the same shape.

To validate, a few colleagues and I are interviewing 1 to 2 people for each block's "main characters," the core roles in each block. **[Add: one surprise from the interviews]**

> **[Fig 5 · Draft vs. interview]** What the draft said: "Underwriting analysts spend most of their day in myOptigo." What we heard (3 interviews): "I live in Excel. myOptigo is where I go to check a box once the numbers work." (Underwriting analyst, credit)

## Now & next

Every persona has a file in the library, and I'm working through the research for the rest. The drafted files are loaded into a Copilot Notebook, so anyone can ask questions about our users without opening the repo.

**[Add: one real example of someone using it]**

> **[Fig 8 · Pipeline]** One source (Bitbucket repo, personas/, 4 blocks · 32 .md files) feeding two outputs: Copilot Notebook (Live: synced to SharePoint, for PMs, BAs and anyone not in an IDE) and Kiro skill (In progress: clone → pull persona, for designers vibe coding prototypes).

Next, we're working on a Kiro skill so designers can reference a persona in their vibe coding projects. The Copilot Notebook and the Kiro skill read the same files, which are updated the same way through the repo.

> **[Fig 7 · With vs. without context]** Same prompt, "Build a screen where an underwriter reviews new deals," run twice. No context: a generic dashboard ("Welcome back, John!", revenue, growth). With underwriting-analyst.md loaded: a deal queue (My queue · 9, 3 missing docs, DSCR/LTV/Package table, Request docs / Export to Excel).

---

### Open items

- [ ] Research: add one surprise from the interviews
- [ ] Now & next: add one real example of someone using it
