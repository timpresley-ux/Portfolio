# Digital Design of Service

> Working brief. Internal product links, source screens, operational details,
> and customer data must be sanitized before publication.

## At a glance

- **Role:** Head of UX
- **Leadership scope:** Led initial research; hired and assigned the UX team;
  coordinated product, domain, design, and development stakeholders; directed
  UX/UI delivery; and integrated AI-assisted practices into the UX workflow
- **UX team:** Head of UX with two designers initially, later reduced to one
  designer
- **Timeline:** Product development began by July 2025 and remains active
- **Delivery status:** MVP delivered
- **Adoption:** Established as Halliburton's official process for generating a
  Design of Service after successful field trials and executive endorsement
- **Current evaluation:** Delivery Manager-led field testing with more than 300
  participants across three international locations
- **Outcome:** Replaced a distributed service-design process with a governed
  digital workflow that coordinates multidisciplinary planning, verification,
  collaboration, approval, and future document generation

## Portfolio headline

Turning a complex, multidisciplinary planning process into Halliburton's
official digital workflow for creating and governing a Design of Service.

## Executive summary

Designing a drilling service requires many roles to contribute objectives,
constraints, technical plans, risks, operating ranges, evidence, and approvals.
The challenge was not simply digitizing a document. It was creating a shared
system that could coordinate those contributions, adapt to well complexity,
preserve accountability, and make progress visible across the entire process.

As Head of UX, I led the work from initial research through MVP delivery. I
built and assigned the UX team, aligned stakeholders across product and
development, directed the product experience, and introduced AI-assisted
practices into the UX workflow. The resulting product is now Halliburton's
official process for generating a Design of Service and is being field tested
by more than 300 participants in three countries.

## The business context

A Design of Service aligns the customer need, well objectives, operating plan,
technical design, service scope, risks, performance expectations, and approval
record before execution.

That work crosses organizational and disciplinary boundaries. Product managers,
delivery leaders, drilling engineers, operations specialists, subsurface
specialists, commercial roles, and other contributors each own part of the
service definition. Their work also depends on existing well, project, planning,
engineering, and reference data.

The organization needed more than a digital version of a final document. It
needed a repeatable process that could:

- Establish the job and assign accountable contributors
- Adapt the required work to well complexity and role
- Connect customer objectives to technical and operational planning
- Bring discipline-specific inputs into a shared service definition
- Expose missing work, disagreement, risk, and approval status
- Preserve supporting documents and decisions
- Govern access to sensitive commercial and technical information
- Produce a trustworthy Design of Service record

The financial stakes are substantial. The CP1 service design supports customer
proposals and bid decisions whose value can reach millions of dollars, while
later control points shape readiness for the awarded drilling work.

## The problem

The previous process used PEAK as the final collection point, while teams
performed the actual work across multiple specialist applications. They
captured screenshots from those systems and uploaded them into PEAK.

That created two structural problems:

- Validation could confirm only that something had been uploaded, not that the
  underlying design was complete, internally consistent, or decision-ready.
- The service design remained trapped in screenshots and documents rather than
  captured as structured data that could be validated, compared, reused, or
  carried into downstream workflows.

The Design of Service process therefore contained a large amount of specialized
work but did not have one coherent digital journey or data model through it.

Users had to understand:

- Where to begin
- Which sections applied to their role
- What was required for a particular well
- Which inputs were complete, missing, or blocked
- How work from one discipline affected another
- Whether operating ranges aligned across disciplines
- What evidence supported the design
- Who could edit, review, approve, or access commercial content
- When the service design was ready to move forward

Without a clear workflow, a comprehensive process can become a navigation and
coordination problem. The delivered application contains more than 50 potential
navigation destinations, making progressive guidance, completion status, and
role relevance central UX concerns.

## The constraint

The product had to simplify the experience without simplifying the engineering.

Key constraints included:

- A large, evolving workflow spanning multiple disciplines
- Different responsibilities and access levels by role
- Read-only, edit, assignment, approval, and commercial-data permissions
- Existing source systems and reference data
- Complex tables, checklists, documents, visualizations, and rich-text inputs
- Dependencies between job data, trajectory, offset-well analysis, planned
  operations, and engineering models
- A need to support both experienced users and people completing the process
  for the first time
- An MVP boundary that could deliver value while later outputs and specialized
  functions continued to evolve
- Enterprise accessibility, design-system, security, and deployment standards

## What I did

### 1. Led discovery and established the product direction

I led the initial UX research to understand the existing Design of Service
process, its contributors, decision points, information needs, and coordination
gaps. I used the discovery work to frame the product as a governed
multidisciplinary workflow rather than a collection of forms.

The discovery program used a broad mix of methods, including stakeholder and
subject-matter-expert interviews, user interviews, workflow observation,
contextual inquiry, workshops, process mapping, review of existing PEAK
artifacts and documentation, and usability testing of concepts and prototypes.
Additional methods were also used and can be documented if needed for a deeper
case-study version.

Participants represented drilling and directional-drilling engineering,
operations and delivery, product management and ownership, business
development and other customer-facing functions, leadership, and process
owners.

The research documented several recurring problems:

- Unclear requirements, late changes, and fragmented feedback created rework.
- Individual planners organized files and planning packs differently.
- Disconnected applications forced duplicate entry, workarounds, and manual
  synchronization between colleagues in different countries.
- Existing reports were difficult to use, so teams copied and pasted plots or
  screenshots into customer-facing material.
- Customer expectations exceeded what the standard templates generated,
  requiring manual additions.
- One participant estimated that preparing a usable BHA design could consume up
  to 80% of a workday.
- Handoffs created visibility gaps between engineering design, shop assembly,
  control-point verification, and rig delivery.
- Existing approval tools added steps rather than supporting the workflow.

These findings established that the product needed to improve both information
quality and coordination. Digitizing the content alone would not solve unclear
ownership, inconsistent handoffs, or limited visibility.

The discovery and active-product Figma files preserve the progression from
research and workflow definition into a detailed product system. Participant
counts remain to be documented for the public case study.

### 2. Built and directed the UX team

I hired and assigned the UX team around the product's needs, coordinated work
across the project, and maintained a coherent experience as the application
expanded into many technical domains.

The UX team began with me and two designers, then continued with one designer.
I worked with the Delivery Manager to establish the features and problem areas
the product needed to address, then led the team through the UX process.

My role operated at several levels:

- Setting the UX direction and research agenda
- Defining how the overall process should become a product journey
- Assigning designers to areas of the workflow
- Reviewing interaction and visual design quality
- Coordinating product owners, subject-matter experts, and developers
- Managing consistency across parallel design and implementation work
- Keeping the MVP aligned to the larger service vision

### 3. Turned organizational roles into a governed collaboration model

The product uses role and permission models to keep the same workflow useful
across different contributors. Users can receive full edit access, commercial
access, read-only access, or section-specific visibility. Team assignment inside
the job establishes who participates and what they can contribute.

This allows the product to support collaboration without exposing every action
or sensitive data set to every user.

### 4. Structured the service-design lifecycle

The delivered product organizes the work into a connected information
architecture:

1. **Home and project intake** - Find active jobs, understand stage, tier, and
   progress, or create a job through the company-to-scenario hierarchy.
2. **Job details** - Establish project information, team assignments, well
   complexity, basis-of-design evidence, and meeting records.
3. **Trajectory** - Define and verify the well path, considerations,
   anti-collision requirements, risks, plans, and supporting views.
4. **Offset-well analysis** - Bring drilling and subsurface precedent into the
   current design.
5. **Planned operations** - Align objectives, KPIs, prognosis, duration,
   logistics, and verification.
6. **Engineering and modeling** - Coordinate drilling engineering, operations,
   subsurface, commercial, BHA, advanced services, and operating windows.
7. **Collaboration** - Compare discipline inputs and surface aligned,
   out-of-range, or conflicting operating parameters.
8. **Documents and outputs** - Preserve supporting evidence and prepare the
   final Design of Service and related customer outputs.
9. **Actions and governance** - Support approval and Management of Change.

This architecture turns the final Design of Service into the result of a
traceable process rather than an isolated artifact.

The commercial lifecycle is organized around control points. At CP1, the goal
is to generate the internal and external documentation needed to support the
customer proposal and win the bid. CP2 and subsequent control points apply
after award, when the teams prepare for and proceed into drilling.

### 5. Introduced progressive guidance

A role-aware guided flow provides an alternative to navigating the full
application structure. It presents relevant work step by step, tracks progress,
and hides sections a user cannot access.

The implementation uses a wrapper approach so the guided experience can reuse
the same underlying product sections rather than creating a second version of
the workflow. This protects consistency while supporting both guided and
expert-led navigation.

### 6. Made complexity and progress visible

The experience exposes the status information users need to coordinate work:

- Project stage, well tier, and overall progress
- Section and checklist completion
- Required and incomplete inputs
- Role assignments
- Save, validation, and error feedback
- Cross-disciplinary operating-range agreement or conflict
- Approval and change-management actions

The well-tier survey is especially important: it converts structured answers
into a complexity classification that can influence planning requirements
throughout the Design of Service.

### 7. Connected disciplines instead of flattening them

The collaboration experience aggregates optimum operating window data from
Drilling Engineering, Operations, and Subsurface. It shows where the disciplines
agree, partially overlap, or conflict while keeping editing within each
discipline's workspace.

This is a deliberate boundary: the shared view supports alignment, but source
ownership remains clear.

### 8. Integrated AI into the UX operating model

I integrated AI-assisted practices into the UX workflow to help the team work
across a product of unusual breadth. AI supported faster exploration, synthesis,
design critique, documentation, UX auditing, and design-to-development
collaboration while human review preserved domain accuracy and UX judgment.

The repository's development history also shows extensive AI-assisted delivery,
with many changes explicitly recorded as Copilot-assisted. For the portfolio,
the emphasis should remain on the operating model and quality controls rather
than the tools alone.

### 9. Maintained quality through implementation

The product uses Angular, Nx, module federation, PrimeNG, the SDS theme,
role-based guards, automated tests, and reusable components. Design and
implementation patterns support:

- Auto-save with visible confirmation
- Inline and cross-field validation
- Loading, empty, and error states
- Read-only and no-access modes
- Accessible structure and interaction targets
- Theme-aware styling
- Reusable editors, forms, panels, progress indicators, and visualizations

An April 2026 UX audit identified focused improvements to project scanning,
widescreen layout, heading semantics, design-system compliance, checklist
actions, touch targets, editing consistency, and nested navigation. The audit
recorded all high-priority findings as resolved before UAT.

The active-product Figma file also provides a dated design record from late
2025 through May 2026. It documents iteration across home and onboarding,
guided navigation, well-tier ranking, trajectory inputs, collaboration and
optimum operating windows, final DOS generation, approval, and Management of
Change rather than presenting only the final screens.

## Key design decisions

### Design a process, not a document

The final output is only trustworthy when its inputs, contributors, checks, and
approvals are visible and governed.

### Adapt requirements to context

Well tier, role, stage, and permissions determine what matters to a user. The
experience should not treat every well or contributor identically.

### Offer guided and expert paths

New or occasional users need a clear sequence. Experienced contributors need
direct access to specialized work. Both paths use the same underlying content.

### Keep source ownership visible

Shared collaboration views summarize agreement and conflict, while edits remain
inside the responsible discipline's workspace.

### Make progress operational

Completion indicators are not decoration. They help delivery leaders locate
missing work, coordinate contributors, and judge readiness.

### Use AI to increase team leverage, not remove accountability

AI accelerates exploration and quality checks; designers, product leaders,
engineers, and subject-matter experts remain responsible for decisions.

## Outcome

### Delivered outcome

- The MVP has been delivered.
- The MVP generates the CP1 internal and external documentation used to support
  the customer proposal and bid process.
- The product is now Halliburton's official process for generating a Design of
  Service.
- Approximately 99% of the Design of Service is now captured digitally as data
  rather than assembled from screenshots uploaded from separate applications.
- A Delivery Manager is field testing the product with more than 300
  participants across three international locations.
- Qualitative response has been strongly positive.
- The Product Manager and Delivery Manager are collecting feedback directly
  through customer meetings; the Product Manager spent approximately one month
  onsite during the field effort.
- Feedback highlights faster and more accurate Design of Service generation,
  the value of capturing the work as digital data, and improved visibility into
  the process and its status. These are currently qualitative findings rather
  than quantified performance measures.
- The product has progressed beyond prototype validation into an operationally
  adopted process with a substantial active evaluation cohort.

### Evidence boundary

No quantitative usability, completion-time, rework, adoption, satisfaction, or
quality metrics are currently available. The case study should not convert the
positive response into unsupported percentages or efficiency claims.

The strongest defensible outcome is organizational adoption: the product moved
from research and design into a delivered MVP, became the official process, and
entered multi-country field testing at meaningful scale.

Official-process adoption was the original product goal. After successful field
trials, the primary stakeholders advanced the decision through the Sperry
executive team, which established Digital DOS as the process going forward.

## What I would do differently

I would invest more time at the beginning in learning the drilling and service
delivery domain at greater depth. The process spans many specialized solutions,
roles, organizations, and locations, and the resulting decisions can affect
millions of dollars in commercial and operational value. A deeper domain model
earlier would have helped the UX team identify dependencies, terminology, and
decision boundaries sooner while still relying on subject-matter experts for
technical authority.

## Public visual plan

Do not publish the supplied development URL, Figma screens, source code, real
well data, customer details, or internal role names directly.

Recommended public-safe visuals:

1. A simplified before-and-after process diagram: screenshots from separate
   applications uploaded into PEAK versus structured data in one governed
   Design of Service workflow
2. A lifecycle map showing intake, design, multidisciplinary alignment,
   verification, approval, and output
3. A fictional guided-flow screen with role, progress, and required work
4. A fictional collaboration view showing agreement and conflict across three
   disciplines
5. One evidence card highlighting official-process adoption and the
   300-participant, multi-country field test

## Evidence sources

- `Digital DoS Discovery` Figma file, including personas, pain points, workflow
  maps, and opportunity areas
- `Digital DoS` active-product Figma file, including dated feature and workflow
  iterations
- Internal development environment supplied by the project lead
- `D:\DEV\DOS2 - Copy\dos-mfe`, including application routes, role model,
  guided-flow documentation, route documentation, tests, and Git history
- *DOS App - UX Quick Wins Report*, April 20, 2026
- Project facts supplied by the Head of UX

### Internal-only location note

The project lead recalls Norway, Mexico, and Guam as the field-test locations,
but this is unconfirmed and should not be disclosed publicly. Use "three
international locations" until the Delivery Manager confirms both the locations
and permission to name them.
