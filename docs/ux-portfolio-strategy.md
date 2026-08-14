# UX Portfolio Strategy & Content Framework
### For senior/leadership-level UX roles — 2026

---

## 1. Positioning Statement

At this career stage (28+ years, Head of UX, enterprise design systems leadership), the portfolio's job is **not** to prove you can design screens. It's to prove you can:

- Drive measurable business outcomes through design
- Lead and scale a design practice/team
- Navigate organizational ambiguity and constraint
- Think in systems, not just interfaces

Every section below should be filtered through: *"Does this show what I made possible, not just what I made?"*

---

## 2. Site Structure (Information Architecture)

```
/                    Landing / Hero
├── /about           POV + leadership philosophy (short)
├── /work
│   ├── /tecton-design-system
│   ├── /ai-augmented-design-ops
│   └── /cross-domain-range        (2-3 apps, one section)
├── /resume           (PDF download + summary)
└── /contact
```

Keep nav to **3-4 top-level items max**. Everything else is noise.

---

## 3. Landing Page (Hero) — Content Requirements

Above the fold, in this order:

1. **Name + current title** — "Head of UX, Sperry Drilling (Halliburton)" or generalized if needed
2. **One-line positioning statement** — outcome-oriented, not a job description.
   - Weak: *"UX leader with 28 years of experience in enterprise software."*
   - Strong: *"I build design systems and lead teams that turn operational complexity into usable software — at Fortune 500 scale."*
3. **3 proof points** (numbers or scale markers), e.g.:
   - Design system adopted across ~22 enterprise applications
   - Led design through a major org restructuring while keeping team output visible
   - 28+ years across oil & gas, healthcare, finance, education
4. **Immediate path into case studies** — don't make people hunt for the work.

---

## 4. Case Study Template (reuse for every project)

```markdown
# [Project Name]

## At a glance
- **Role:** [your specific role/scope]
- **Team:** [size, who you led/worked with]
- **Timeline:** [duration]
- **Outcome:** [1-sentence headline result]

## The business context
[What problem existed at the org level — not the UI level.
Why did this matter to the business, not just the user?]

## The constraint
[What made this hard: org politics, legacy systems, governance
tension, technical debt, competing stakeholders, timeline, etc.
This is where senior judgment shows — anyone can design in a
vacuum.]

## What I did
[Your specific decisions and why. Not a full process narration —
the 3-5 decisions that mattered most. Use subheads if there are
distinct phases.]

## Outcome
[Quantify where you can. Where you can't (NDA, no baseline),
describe how success was evaluated instead of omitting this
section.]

## What I'd do differently
[One honest reflection. This signals judgment and growth, not
weakness — senior reviewers read for this specifically.]
```

---

## 5. Your Three Case Studies (outlines to build out)

### Case Study 1 — Tecton Design System Integration (flagship)
This is the enterprise systems-leadership story.

- **Business context:** Tecton was funded as a cross-PSL enterprise system, but
  its original Argo delivery was Landmark-led and centered on React/MUI.
  Sperry's applications use Angular and PrimeNG.
- **Constraint:** Align with the enterprise foundation without breaking
  existing Figma consumers, forcing a mismatched framework implementation, or
  creating an untraceable fork. Separate PSL Figma organizations and an
  evolving governance model compound the challenge.
- **What I did:**
  - Treated Tecton Foundations as the enterprise contract and translated the
    semantic and component layers for PrimeNG
  - Preserved component variable bindings and redirected their tokens through
    a Sperry bridge mirrored from Tecton Foundations
  - Mirrored the Storybook JSON token structure into Figma variables
  - Evaluated wrapper-based implementation with development leadership and
    selected a cleaner Angular/PrimeNG approach
  - Worked with Landmark on implementation while advocating for maintainable
    multi-framework and cross-PSL governance
- **Outcome:** A working Sperry PrimeNG Figma integration that remains
  traceable to Tecton. Enterprise distribution, synchronization, and
  cross-PSL governance remain ongoing; do not claim completed enterprise
  adoption or quantitative impact.
- **One diagram only:** Tecton Foundations → Sperry Bridge → Semantic Tokens →
  Component Tokens → PrimeNG Components.

### Case Study 2 — AI-Augmented Design Operations
This is your most *current* differentiator — most senior portfolios wave vaguely at "using AI tools."

- **Business context:** Team of 3-4 designers supporting a large app portfolio; need to scale output without scaling headcount.
- **Constraint:** GitHub Copilot Agent mode as the team's exclusive coding tool — had to build real context infrastructure, not just prompt casually.
- **What I did:**
  - Structured `.github/copilot-instructions.md` and `.github/prompts/` as context layers
  - Built CLAUDE.md + design token reference system for AI-assisted coding sessions
  - Integrated Claude API into internal tooling (Sperry DS App component generation)
- **Outcome:** Concrete efficiency gain — dev/design cycle time, fewer handoff errors, faster component turnaround. Use real numbers if you have them; otherwise describe the before/after workflow.
- **Guardrail:** Keep this a workflow/outcome story, not a tools list. The differentiation is *how you architected the context*, not *which tools you used*.

### Case Study 3 — Cross-Domain Range
Pick 2 apps that show contrast (a complex operational tool vs. a lighter-weight one), reference the rest of the portfolio in one sentence.

- **Business context:** Brief framing of the domain shift (e.g., oil & gas operational software vs. a different Sperry product).
- **What I did:** Focus on how your approach adapted to different user contexts/constraints — this is the "range" proof.
- **Outcome:** Whatever's measurable; otherwise, qualitative shift in usability/adoption.
- **One-liner reference:** *"This pattern repeats across the ~22 applications in the Sperry portfolio I've led design for."*

---

## 6. About / POV Page

Keep this **short** — half a page, not an essay. Avoid platitudes ("I believe in human-centered design"). Instead:

- 2-3 sentences on how you think about design systems at enterprise scale, backed by a specific belief you formed *from doing the work* (e.g., a stance on automated compliance vs. human governance, drawn from your evaluation of the Landmark governance proposal).
- 1-2 sentences on leading design through organizational change — directly relevant if you're speaking to companies who'll ask about resilience/adaptability.
- Optional: 1 line on your range across industries (28+ years, education/healthcare/finance/oil & gas) as evidence of adaptability, not just tenure.

---

## 7. Two Entry Points (Optional but Recommended)

Since you're likely applying to both design-leadership and senior IC/staff-level roles, consider a lightweight toggle or two landing variants:

- **Leadership framing:** lead with team-building, governance, org influence
- **Senior IC/Staff framing:** lead with systems architecture, technical depth, hands-on craft

Same case studies, different emphasis in the opening framing and which decisions you foreground.

---

## 8. Do's and Don'ts

**Do:**
- Lead every case study with business context, not process
- Quantify outcomes wherever possible; explain evaluation method where you can't
- Include one honest "what I'd do differently" per case study
- Keep visuals restrained — let the writing carry seniority
- Make the portfolio scannable in under 30 seconds at the top level

**Don't:**
- List all 22 apps — pick 2-3, reference the rest as scale context
- Turn the design system story into a diagram dump — one diagram, then narrative
- Add an abstract "design philosophy" page — POV should live inside case studies
- Over-polish visuals to compensate for seniority — restraint reads as confidence
- Bury the outcome — it should be visible without scrolling through full process narration

---

## 9. GitHub / Static Site Notes

This doc is structured to drop directly into a static site generator (e.g., Astro, Next.js, Eleventy, or a simple GitHub Pages + Jekyll setup):

- Each `## Case Study` section maps to its own page/route
- The case study template (Section 4) can become a reusable content schema (e.g., frontmatter fields: `role`, `team`, `timeline`, `outcome`)
- Suggested repo structure:
  ```
  /content
    /case-studies
      tecton-design-system.md
      ai-augmented-design-ops.md
      cross-domain-range.md
    about.md
    resume.md
  ```
