# Collaborative Operations Dashboard

> Working brief. Internal source names and screenshots must be sanitized before
> publication.

## At a glance

- **Role:** Head of UX
- **Scope:** Oversight of UX/UI strategy and delivery; design of the extended
  product experience using AI-assisted design and development
- **Team:** Head of UX with support from one senior designer; product managers
  and product owners across multiple business lines contributed domain and
  product input
- **Timeline:** Argo proof of concept ran approximately February-June 2026; the
  internal extension began in mid-July 2026 and remains active
- **Current status:** Internal prototype awaiting approval; a development team
  has been formed and is ready to begin implementation
- **Audience:** Customer drilling superintendents, subsurface supervisors, and
  Halliburton collaborators overseeing one or more active wells
- **Argo engagement:** Primary stakeholder who met with the agency weekly and
  helped guide the research direction
- **Sponsors:** Director of the Product Team in Sperry Digital and Director of
  HDS
- **Outcome:** Advanced a validated customer-facing proof of concept into a
  broader, working operations prototype spanning portfolio awareness, planning,
  execution, and post-well closeout

## Portfolio headline

Turning fragmented drilling signals into a shared operational view that helps
customers and service teams see what needs attention, understand what happens
next, and move into the right workflow.

## The business context

Drilling operations already rely on specialized planning, engineering,
automation, visualization, reporting, and communication tools. The missing
layer was not another source of raw data. It was a shared place where customers
and Halliburton could connect what was planned, what was happening, what had
changed, and what decision or action should follow.

The initial Argo brief defined a customer-facing application for drilling and
subsurface supervisors who remotely manage well operations. Research showed
that these users operate above minute-to-minute execution. They need rapid
portfolio awareness, a way to locate the few moments requiring their judgment,
and enough shared context to align distributed disciplines before action.

This created an opportunity to provide an external customer entry point and an
internal collaboration surface without attempting to replace the operational
systems where engineering analysis and execution already occur.

Leadership expects the platform to increase customer trust and engagement,
differentiate Halliburton's digital service offering, improve operational
decisions and risk awareness, and create a unified entry point across multiple
business lines.

## The problem

The operational environment was data-rich but context-poor:

- Signals were fragmented across systems, timestamps, depths, and disciplines.
- Supervisors manually reconstructed the story of a well.
- Automation behavior could appear opaque or difficult to explain.
- Distributed teams interpreted risk and trade-offs differently.
- Important decisions and lessons were not consistently carried forward.
- Time-poor leaders needed awareness without continuously monitoring dashboards.

The design challenge was therefore one of sensemaking and alignment rather than
data visualization alone.

## The validated opportunity

Argo's research identified three layers of value:

1. **Attract:** Help users understand well status in minutes rather than
   meetings, and explain what automation saw, decided, and changed.
2. **Reward:** Surface meaningful risks before they become incidents and help
   teams move from a signal to a shared decision.
3. **Retain:** Create recurring value through portfolio scanning and automated
   after-action reporting.

Customer feedback particularly supported an at-a-glance multi-well view,
explainable automation, proactive risk visibility, structured decision framing,
and concise milestone reporting.

## The constraint

The concept had to sit across a complex product ecosystem without becoming
another configurable dashboard or pretending to replace established
engineering and execution tools.

It also had to serve two engagement modes:

- **Passive awareness:** What changed, what needs attention, and what should be
  communicated?
- **Interactive investigation:** Why did it happen, what contributed, what
  options exist, and what can improve the outcome?

The experience needed to protect finite supervisory attention, preserve
discipline-specific depth, and create enough trust for customer-facing use.

Additional organizational, technical, data-access, and delivery constraints are
still being resolved. The current review is focused on two foundational
questions:

- Should the initial screen begin with an operational view of active work or a
  more transformational, decision-oriented experience?
- At the Tier 2 detail level, what supporting data is currently available for
  each level of customer engagement?

These questions affect both the product's first impression and how far the
experience can responsibly progress from awareness into investigation and
action.

## Foundation supplied by the Argo proof of concept

Argo established the initial research and product direction:

- A customer-facing remote operations and collaboration platform
- A multi-well home focused on priority items
- Well summary, schedule, and event views
- Explainable automation and contextual AI assistance
- Proactive risk and opportunity assessment
- Decision framing, recommendations, and alignment
- Notes anchored to operational context
- Living reports and automated after-action insight
- An auditable record that carries learning across wells

The proof of concept framed the product as a curated sensemaking layer: the
system watches broadly but selectively elevates deviations, risks, decision
points, misalignment, significant automation behavior, and moments requiring
human judgment.

I was one of the primary stakeholders for this phase, meeting with Argo weekly
and guiding the direction of the research.

## What I did

### 1. Led the UX/UI direction beyond the proof of concept

As Head of UX, I oversaw the UX/UI logistics of the project. When the product
team asked to explore alternatives to Argo's approach, I used AI-assisted design
and development to rapidly investigate additional directions and implement them
as a working Angular prototype rather than leaving them as static concepts.
I personally owned the additional UX research and design concepts, with
assistance from one senior designer. Product managers and owners at multiple
levels contributed because the customer-facing experience spans several
business lines.

The resulting direction combines Argo's validated foundation with the strongest
elements of the additional explorations. It preserves the focus on supervisory
attention while extending the concept into a coherent operating journey with
connected portfolio, well-detail, and workflow surfaces.

### 2. Created three levels of operational entry

I designed three distinct but connected entry views:

- **Command brief:** A concise daily readout of priority actions, upcoming
  milestones, operational context, outcomes, and active work
- **Command center:** A portfolio-level view for filtering wells, monitoring
  service-stage health, finding exceptions, and routing users to the next action
- **Portfolio:** A denser comparison view for scanning all active wells across
  their current stages, timelines, metrics, and recommended workflows

This structure supports different attention budgets without forcing every user
into the same dashboard density.

### 3. Extended the concept across the service lifecycle

I organized the experience around three customer-facing service stages:

- **Pre-Well:** Planning, readiness, and mobilization
- **Execution:** Active service delivery and operational performance
- **Post-Well:** Demobilization, reporting, performance review, and learning

This expanded the concept from remote awareness during active operations into a
full lifecycle narrative. The same portfolio model can show planning readiness,
execution variance, and closeout completion while preserving a consistent
interaction pattern.

### 4. Connected summary information to actionable workflows

The interface does not stop at status reporting. Portfolio exceptions,
milestones, and well-level recommendations route users toward a relevant
workflow. Each well communicates its current state, next activity, performance
measure, recommended workflow, source confidence, and required outputs.

This reinforces the core design principle that the collaboration layer supports
alignment and readiness while established operational systems remain the place
where execution occurs.

### 5. Added lifecycle-specific depth

The working prototype extends the initial concept with detailed examples across
the lifecycle:

- Design of Service readiness, open actions, governance, and approval path
- Plan-versus-actual wellbore context and target-margin interpretation
- Activity timelines and operational milestones
- Telemetry access states and read-only geosteering views
- Recommended next actions and required deliverables
- Post-well results, daily reporting, service delivery, and final KPI summaries
- Validated records and data-source visibility

These examples test whether the same collaboration model can remain coherent
across different operational states rather than working only as a homepage.

### 6. Applied a system-based implementation

The prototype uses Angular, PrimeNG, ECharts, and the Tecton theme foundation.
Its build process generates the Tecton theme and checks typography before builds
and tests. Reusable service-stage models, cards, well profiles, and decision
structures keep the different views aligned.

The Git history shows deliberate iteration from an initial portfolio prototype
through simplified service stages, standardized cards, reorganized detail
navigation, plan-versus-actual context, differentiated post-well reporting, and
full-width operational workspaces.

## Key design principles

### Curated, not configured

The first view makes an editorial decision about what matters now. Depth remains
available, but users are not asked to construct their own monitoring system.

### Manage by exception

Normal operation remains quiet. The experience elevates variance, risk,
blocked inputs, pending approvals, and moments where customer awareness or
judgment is required.

### Reveal detail progressively

Users can move from a brief, to a portfolio, to a well, and then into a
workflow without losing the reason they entered.

### Connect status to the next action

Every major surface answers both "What is happening?" and "What should I review
or do next?"

### Preserve confidence and boundaries

Source freshness, data confidence, access restrictions, read-only states,
governance status, and required deliverables are visible parts of the
experience rather than hidden implementation details.

### Carry context across the lifecycle

Planning intent, execution reality, closeout outcomes, and future learning are
treated as one connected service story.

## Outcome and evidence

### What is currently supported

- Argo completed research, concept validation, design sprints, and a Figma proof
  of concept.
- Customers validated the need for faster status comprehension, explainable
  automation, proactive risk visibility, portfolio scanning, and concise
  after-action reporting.
- The concept was advanced into a working, navigable Angular prototype.
- The implementation covers multiple portfolio densities and detailed
  workflows across Pre-Well, Execution, and Post-Well.
- The implementation demonstrates design-system integration and repeatable
  service-stage patterns rather than a collection of isolated screens.
- The combined direction is under stakeholder review, with a development team
  established and waiting for approval to begin.
- Evaluation of the extended prototype has so far been limited to stakeholder
  reviews; it has not yet undergone structured internal usability testing or
  new customer validation.
- Stakeholders are using the prototype to choose between operational and
  transformational starting points and to assess Tier 2 data readiness across
  customer-engagement levels.

### What cannot yet be claimed

There is not yet sufficient evidence to claim production adoption, reduced
meeting time, faster decisions, fewer incidents, improved well performance, or
customer conversion. Those outcomes require deployment data, usability
evaluation, stakeholder acceptance, or a defined pilot result.

## What I would do differently

I joined part of the product team's research phase after returning from
vacation. If I started again, I would create more interaction with the product
team at the outset so shared context and decisions could form sooner. I would
also define the feature boundaries more clearly and establish an explicit MVP
for the first round of exploration. That would make comparisons between
directions faster and give stakeholders a firmer basis for approval.

## Public visual plan

Do not publish the source screens or Argo deliverable directly.

Recommended public-safe visuals:

1. A recreated diagram showing the progression from fragmented systems to a
   shared sensemaking and workflow layer
2. A fictionalized command brief showing exception-led prioritization
3. A lifecycle diagram connecting Pre-Well, Execution, and Post-Well
4. One sanitized well-detail example showing status, confidence, and next action

Use fictional branding, well names, locations, metrics, source systems, and
operational details.

## Evidence sources

- Argo, *Remote Drilling Automation Management: Final Deliverable*, June 5,
  2026, especially pages 5-17, 29-53, and 63-84
- `D:\DEV\Dashboard_layout_02`, branch `v4-unified-prototype`
- Screenshot sequence in `reference-screens/`

## Outstanding inputs

- Any measurable outcomes or stakeholder decisions enabled by the work
