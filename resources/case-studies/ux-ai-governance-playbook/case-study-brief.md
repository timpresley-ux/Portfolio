# UX / AI Governance Playbook

> Working brief. This case study covers the AI-ready governance layer, not the
> creation of Tecton itself.

## At a glance

- **Role:** Head of UX; originated and led both system generations end to end
- **Scope:** Created a shared UX/UI knowledge and governance model that UX
  designers, product owners, developers, and AI agents could use when
  researching, prototyping, designing, generating, and reviewing product work
- **System evolution:** Began with the pre-Tecton Sperry Design System and was
  later translated into a Tecton-based UX/UI Governance Toolkit
- **Users:** UX designers, product managers and owners, developers, and
  AI-assisted coding tools
- **Outcome:** Established a reusable source of UX/UI intent used across
  multiple Sperry product teams or applications, instead of relying on each
  team or prompt to reinterpret the design system independently
- **Adoption:** Used across at least five Sperry product initiatives: Design of
  Service, Business Insights, Geosteering, RoxC, and Collaboration Dashboard
- **Efficiency:** No quantitative claim established

## Portfolio headline

Making UX governance executable: one shared pool of components, patterns,
domain rules, templates, prompts, and audits for humans and AI.

## Executive summary

As AI became part of research, prototyping, and application development, a
traditional design-system library was no longer enough. Designers, product
owners, developers, and AI tools could all produce interfaces, but each could
interpret the same requirements differently. Without shared context, AI
increased the speed of inconsistency.

As Head of UX, I originated and led both generations of a governance layer that
made UX/UI intent consumable by people and machines. The first generation
extended Sperry's pre-Tecton design system with role-specific guidance,
reusable prompts, page patterns, application templates, demonstrations, and
Figma-to-code mappings. I then carried that operating model into the Tecton
era, adding domain-specific guidelines, decision trees, recipes, AI context
files, and a rule-based audit model.

The objective was not to automate design judgment. It was to give every
participant—and every AI agent—the same starting constraints, vocabulary,
approved building blocks, and validation criteria.

## The business context

Sperry product teams build complex oil-and-gas applications across many
workflows and technical domains. AI-assisted tools expanded who could create a
working interface:

- UX designers could explore and prototype directly in code.
- Product owners could turn requirements into interactive concepts.
- Developers could scaffold and refine applications faster.
- AI agents could research patterns, generate code, migrate prototypes, and
  audit implementations.

This increased team leverage, but it also weakened the old assumption that UX
quality would enter the process through a designer-created Figma file and a
single developer handoff. Design decisions were now being made continuously by
different roles and tools.

The organization needed a shared UX/UI pool that could travel with the work:
components, semantic tokens, layout rules, accessibility requirements,
oilfield-specific patterns, page compositions, prompt context, and objective
checks.

## The problem

A component library alone does not tell a team:

- Which component fits a particular interaction
- How components should be composed into a full workflow
- Which rules apply to dashboards, tables, monitoring, or field use
- How UX requirements should appear in a product story
- What context an AI tool needs before generating code
- How to distinguish an acceptable prototype from a compliant implementation
- How to audit AI-generated work consistently
- How design decisions survive when the underlying design system changes

Without explicit guidance, AI tools tend to produce plausible generic UI. They
may invent components, hardcode colors and spacing, omit loading and error
states, ignore domain constraints, or create inaccessible interactions.

The governance challenge was therefore to convert implicit UX expertise into
structured, reusable, testable context without reducing UX to a checklist.

## The constraint

The solution had to serve very different audiences without creating separate,
contradictory systems:

- Product owners needed discovery guidance and acceptance criteria.
- UX designers needed research, ideation, testing, and audit workflows.
- Developers needed implementation rules and pre-submission validation.
- AI agents needed concise context, routing logic, templates, and explicit rule
  identifiers.

It also had to work across multiple frameworks and AI tools, remain useful
during a design-system transition, cover specialized drilling interfaces, and
distinguish firm standards from contextual design judgment.

## My leadership and ownership

I originated the shared-pool strategy and led both the pre-Tecton system and
its Tecton-era evolution end to end. As Head of UX, I defined the operating
model, the audiences it needed to serve, the relationship between human and AI
workflows, and the governance mechanisms needed to preserve UX quality as
delivery accelerated.

Contributor roles and implementation support, if any, should be credited once
confirmed.

## What I did

### 1. Reframed the design system as shared operational context

I expanded the system beyond visual components. The shared pool included:

- Foundations and semantic tokens
- Component rules and selection logic
- Approved page and interaction patterns
- Full-page examples and starter templates
- Accessibility and responsive requirements
- Domain-specific guidance for drilling applications
- AI prompts and persistent context files
- Figma mappings and implementation references
- Compliance and audit criteria

This made the system useful at discovery, requirements, design, development,
and review—not only during interface assembly.

### 2. Created role-specific entry points into one source

The pre-Tecton system explicitly routed developers, UX designers, and product
owners to different workflows while keeping them on the same underlying rules.

When Tecton became the required enterprise design-system foundation, I
translated the established operating model rather than discarding it. The
Tecton-era toolkit formalized it further:

- **Product owners** evaluate available components and patterns, select rule
  IDs for acceptance criteria, and generate governed prototypes.
- **UX designers** use the same source for discovery, pattern research,
  concept validation, usability evaluation, and formal audits.
- **Developers** begin from approved templates, inherit AI context, verify
  Tecton usage, self-audit, and submit evidence for UX review.

The roles do not receive different versions of design truth. They receive
different paths through the same source.

### 3. Made the system consumable by AI

The pre-Tecton implementation supplied task-specific prompt files for
scaffolding, component creation, forms, tables, accessibility, tokenization,
Figma audits, navigation, dashboards, real-time monitoring, and many other
patterns.

The Tecton-era toolkit added tiered AI context:

1. **Always-active rules** shape every suggestion.
2. **Agent routing files** tell AI where to find the relevant guideline,
   template, or recipe.
3. **Deep context** supports full-page generation and complex audits.

Context packages target GitHub Copilot, Copilot CLI and agents, Claude Code,
and manual use by other tools. This changes governance from something users
must remember to something the AI session can load automatically.

### 4. Connected abstract rules to working starting points

Teams need more than prose. I created or directed a library of:

- Full-page demonstrations
- Framework-specific shells
- Templates for dashboards, data tables, monitoring, reporting, setup
  wizards, detail views, and other common surfaces
- Composition recipes such as filter bar + data grid + detail drawer
- Decision trees for containers, inputs, feedback, navigation, and data display
- Scaffold prompts that include users, states, domain requirements, and
  Tecton constraints

This gave teams a compliant place to begin instead of asking AI to invent the
first draft from a blank prompt.

### 5. Converted UX guidance into traceable rules

The Tecton-era toolkit assigns rule IDs to guideline decisions. Product owners
can include those IDs in acceptance criteria, AI prompts can reference them,
developers can self-check against them, and UX audits can cite the same rule
when explaining a finding.

The audit model separates:

- **Required** rules that can block release
- **Recommended** practices that produce warnings
- **Informational** improvements

It covers static structure and proposed runtime checks for accessibility,
responsive behavior, loading states, contrast, keyboard navigation, and other
implementation qualities.

### 6. Added drilling-specific UX knowledge

Generic enterprise guidance is insufficient for field and operational
software. The Tecton-era toolkit includes guidance for:

- Alarm states
- Real-time data
- Shift handover
- Unit systems
- Well schematics
- Dense dashboards and data visualization
- AI-generated or predicted operational information
- Performance and accessibility under field conditions

This is the difference between a generic UI kit and a product-development
governance system.

### 7. Preserved the operating model through the Tecton transition

The pre-Tecton Sperry DS and the Tecton toolkit are distinct systems.

The transition was triggered when Tecton became the required enterprise
design-system foundation. It was not evidence that the original shared-pool
model had failed. The strategic challenge was to preserve the working
human-and-AI governance model while replacing its component and token
foundation.

The earlier system demonstrated the shared-pool approach at broad scale:

- 80 reusable prompt files
- 202 HTML demonstrations
- 20 Figma Code Connect mappings
- 24 reusable template assets

The Tecton-era implementation reorganized the model around the new system:

- 39 guideline documents
- 11 page-template categories
- 8 AI context files
- 186 machine-readable audit rules
- Tecton component mappings, semantic tokens, recipes, and decision trees

The durable innovation was the governance architecture. Components and tokens
could change while the model—shared context, approved starts, explicit rules,
and validation—remained.

## Key design decisions

### Treat AI context as a design-system distribution channel

Documentation that lives only on a reference site depends on people remembering
to consult it. Context files place the most important constraints inside the
AI-assisted workflow.

### Give every role the same truth, not the same interface

Product, UX, and development need different workflows, but splitting the source
creates drift. Role-specific entry points preserve relevance without forking
governance.

### Start from approved compositions

Components do not define a usable page. Templates and recipes encode how
components work together, including hierarchy, state, responsiveness, and
domain behavior.

### Make requirements traceable

Rule IDs connect product stories, prompts, implementation reviews, and audit
findings. This reduces subjective handoff language.

### Separate generation from validation

The same source supports both creating a prototype and checking it. AI output
is not considered compliant merely because it was generated from a governed
prompt.

### Preserve human judgment

Automated rules cover repeatable checks. UX practitioners still own research,
problem framing, contextual trade-offs, usability evaluation, and exceptions.

## Outcome and evidence

### What is currently supported

- A working pre-Tecton design-system reference site with role-based guidance,
  prompts, demonstrations, templates, and Code Connect mappings
- A working Tecton-era Angular governance site
- Adoption across at least five Sperry initiatives: Design of Service, Business
  Insights, Geosteering, RoxC, and Collaboration Dashboard
- Explicit workflows for product owners, UX designers, and developers
- Context packages for multiple AI-assisted environments
- Domain-specific oil-and-gas UX guidance
- Machine-readable audit rules and a documented CI model
- A clear migration path from prototype generation to UX review

### What cannot yet be claimed

The current sources do not establish:

- The number of individual active users and the depth of usage in each
  application
- Reduction in prototype or development time
- Reduction in UX review cycles or design-system violations
- Improvement in accessibility compliance
- Adoption across other Drilling product service lines
- Maintenance ownership and governance cadence

These require usage data, repository adoption evidence, audit comparisons, or
stakeholder testimony.

## What I would do differently

To be completed. A strong reflection could address the risk of creating too
much guidance before validating the highest-frequency workflows, the effort of
keeping human documentation and AI context synchronized, or the need to
instrument usage and compliance from the first release.

## Public visual plan

Recommended public-safe visuals:

1. **The shared-pool model:** UX, Product, Development, and AI drawing from the
   same governed source
2. **The governance loop:** discover → choose → generate → validate → review →
   improve the source
3. **The context hierarchy:** always-active rules → task routing → deep context
4. **System evolution:** pre-Tecton proof of model → Tecton governance toolkit
5. **One traceability example:** product acceptance criterion → AI prompt →
   implementation → audit finding, all using the same rule ID

Avoid publishing proprietary prompt bodies or internal links. Recreate the
architecture with generic examples.

## Evidence sources

- `D:\DEV\Design-System - Copy`, the pre-Tecton Sperry DS reference and
  AI-assisted workflow library
- `D:\DEV\Sperry-ux-toolkit-v1`, the Tecton-era UX/UI Governance Toolkit
- Role guidance for product owners, UX designers, and developers
- AI Coding Playbook and context-file distribution model
- Component recipes and decision trees
- Rule-based audit documentation and machine-readable rule set

## Outstanding inputs

- When the pre-Tecton system began and when Tecton became the required
  foundation
- Team contributions or implementation support that should be credited
- Which generation each named application used and how deeply it was integrated
- Concrete examples of a product owner, designer, or developer using the pool
- Any before-and-after example showing improved AI output or fewer review issues
- Governance model: who approves rules, updates context, and handles exceptions
- A personal reflection on what you would change
