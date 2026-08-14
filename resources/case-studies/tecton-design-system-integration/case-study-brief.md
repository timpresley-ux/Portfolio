# Translating Tecton for Sperry

> Working case-study brief. Integration is ongoing as of August 2026.

## At a glance

- **Role:** Head of UX, Sperry Drilling
- **Scope:** Led Sperry's design and governance approach for integrating the
  enterprise Tecton Design System into an Angular and PrimeNG product ecosystem
- **Partners:** Sperry UX and development leadership, Landmark, and the
  Argo-created Tecton assets
- **Environment:** Cross-PSL enterprise initiative with separate Figma
  organizations, different development frameworks, and governance still being
  established
- **Outcome:** Created a maintainable PrimeNG-aligned Figma architecture that
  preserves component-level bindings while remaining traceable to Tecton
  foundations and Storybook tokens
- **Status:** Working Sperry integration established; enterprise coordination,
  upstream synchronization, and cross-PSL adoption remain in progress

## Portfolio headline

Adapting an enterprise design system without breaking the products, tools, and
teams it was intended to unify.

## Executive summary

Halliburton funded Tecton as an enterprise design system intended to support
all product service lines. Its design and initial delivery, however, were led
through Landmark with Argo Design. The delivered architecture combined
framework-agnostic foundations with a semantic React library built on MUI.
Argo later added a Storybook implementation containing the React system and a
smaller subset of PrimeNG Angular components.

Sperry's development ecosystem is Angular and PrimeNG, not React. A direct
adoption of the MUI-oriented Figma structure would also have changed component
variable relationships in ways that existing Sperry design files and products
would not recognize.

As Head of UX for Sperry, I led a translation strategy rather than a parallel
redesign. I preserved the component-level variable connections, redirected
their token aliases to collections derived from Tecton, and created a bridge
that makes upstream foundation changes visible and manageable. I also aligned
the Figma implementation with the Storybook JSON model without adopting a
wrapper-heavy component architecture that Sperry's development leadership did
not consider appropriate.

The result is a working path for Sperry to participate in Tecton while
protecting framework fit, existing design assets, and maintainability. The
broader enterprise integration remains difficult because participating PSLs
operate in separate Figma organizations and a shared governance and
distribution model is still evolving.

## The business context

Executive leadership expanded Tecton's mandate beyond Landmark because the
investment was intended to benefit Halliburton's product service lines more
broadly. That created an important enterprise opportunity:

- Establish a common visual and interaction foundation
- Reduce duplicated design-system work
- Improve consistency across business and product boundaries
- Give individual PSLs a shared platform without requiring identical product
  stacks

The mandate was enterprise-wide, but the original work and decisions were
Landmark-led. This meant other PSLs inherited a system shaped around a
particular product context, framework, and delivery model.

The leadership challenge was not deciding whether Sperry should align. It was
determining how to align without forcing a React implementation onto Angular
teams, disconnecting existing Figma consumers, or creating a fork that could
no longer follow Tecton.

## The inherited Tecton model

The original system supplied several related but distinct layers:

1. **Tecton Foundations** — intended to remain independent of application
   framework
2. **Tecton semantic and component implementation** — built as a React library
   using MUI
3. **Tecton MUI Figma library** — its MUI-oriented variables were redirected
   to foundation colors
4. **Tecton Storybook** — later included React and a smaller subset of PrimeNG
   Angular components

This was a valid foundation for Landmark's implementation. Sperry's constraint
was that consuming it unchanged would not create parity with its Angular and
PrimeNG delivery environment.

## The constraints

### Different production framework

Sperry development teams use Angular and PrimeNG. React and MUI component
semantics could not simply be treated as the implementation source.

### Existing Figma consumers

Sperry already had design files and component instances that depended on
existing variable relationships. Flattening component variables directly onto
Tecton foundation values would undermine compatibility and make the system
harder to evolve without rework.

### Divergent component architecture

The Storybook PrimeNG implementation placed components inside wrappers.
Following review with Sperry's development lead, the team determined that
wrapper-based adoption was not the desired implementation strategy for its
applications.

### Incomplete enterprise distribution infrastructure

Halliburton was not yet operating on Figma Enterprise. Each PSL maintained its
own Figma organization, limiting direct library sharing, centralized
publishing, and update distribution. The move toward Figma Enterprise had been
in process for approximately four to five months as of August 2026.

### Ambiguous cross-PSL governance

Tecton remained an enterprise initiative, while Landmark's current execution
was focused primarily on Landmark needs. Multiple PSLs had to integrate against
a changing source without a fully mature shared operating model for decision
rights, contribution, versioning, exceptions, and release communication.

## What I did

### 1. Separated enterprise intent from framework implementation

I treated Tecton's foundations as the stable enterprise contract and its React
and MUI implementation as one framework expression of that contract.

This distinction allowed Sperry to align with Tecton without pretending that
React components could be adopted unchanged by Angular teams.

### 2. Preserved the PrimeNG component variable layer

Rather than removing component variable relationships, I kept the bindings
between PrimeNG Figma components and their component-level variables.

I then redirected the underlying Figma tokens to a new variable collection
mirrored from Tecton Foundations. This retained a meaningful alias chain:

```text
Tecton Foundations
        ↓
Sperry Tecton foundation bridge
        ↓
PrimeNG semantic and component variables
        ↓
Sperry Figma components
```

The approach preserved component semantics and compatibility while still
making Tecton the upstream source.

### 3. Created an explicit foundation bridge

I created a bridge version of Tecton Foundations for Sperry. The purpose was
not to establish a competing foundation. It provided a controlled integration
point where changes to the upstream Tecton source could be identified,
reviewed, and applied to the Sperry Tecton Figma library.

This made dependencies visible and reduced the risk of silent changes
propagating through existing products.

### 4. Aligned Figma with the delivered Storybook tokens

After reviewing the Storybook implementation, I mirrored its JSON token
collection into a Figma variable collection and directed the PrimeNG
components to those variables.

This produced a cleaner relationship between design and implementation:

- Tecton foundations remain the enterprise source.
- Storybook JSON defines the delivered token structure.
- Sperry's Figma variables mirror that structure.
- PrimeNG components preserve their own semantic bindings.

The accessible PrimeOne source confirms why retaining these layers matters. It
organizes variables into primitive, semantic, and component collections, with
component variables referencing semantic or primitive tokens so global changes
can propagate without sacrificing component-specific control.

### 5. Evaluated the implementation with development leadership

The decision not to reproduce the Storybook wrapper architecture was not a
design-only preference. I reviewed the approach with Sperry's development lead
and incorporated engineering concerns into the integration model.

This kept the Figma architecture aligned with how Sperry teams intended to
build and maintain Angular applications.

### 6. Worked across organizational boundaries

I represented Sperry in ongoing implementation discussions with Landmark. The
approach was debated in detail because the teams were solving for different
frameworks, existing assets, and immediate product priorities.

My role was to keep the conversation focused on shared outcomes:

- Preserve Tecton's enterprise foundations
- Support multiple framework implementations
- Avoid breaking existing product work
- Make updates traceable
- Create a path toward broader PSL participation

The goal was not to prove one team's architecture superior. It was to identify
where enterprise consistency was essential and where framework-specific
translation was necessary.

## Key decisions and trade-offs

| Decision | Benefit | Trade-off |
| --- | --- | --- |
| Treat foundations as the enterprise contract | Preserves shared identity across frameworks | Requires disciplined mapping and version governance |
| Keep component variable bindings | Protects semantic meaning and existing Figma consumers | Adds an alias layer that must be maintained |
| Create a Sperry foundation bridge | Makes upstream changes observable and reviewable | Is not automatic synchronization |
| Mirror Storybook JSON into Figma | Improves design-to-code traceability | Requires coordinated updates when Storybook changes |
| Avoid wrapper-based PrimeNG adoption | Better matches Sperry's engineering direction | Creates a framework-specific implementation path |
| Maintain a PSL-specific Figma library | Enables progress before enterprise tooling is ready | Risks divergence without shared release governance |

## Outcome

### What is established

- A working Sperry PrimeNG Figma library aligned with Tecton foundations
- Preserved component-level variable relationships instead of a flattened
  foundation mapping
- A visible bridge for reviewing and applying upstream foundation changes
- Figma variable collections aligned to the Storybook JSON token structure
- A design approach compatible with Sperry's Angular and PrimeNG environment
- A documented governance toolkit that builds on Tecton components and tokens
- Continued collaboration with Landmark on enterprise implementation

### What is still in progress

- Figma Enterprise procurement and migration
- Cross-organization library publishing and update distribution
- Formal cross-PSL contribution and decision rights
- A shared versioning, release, and deprecation model
- Complete PrimeNG component parity
- Sustainable upstream synchronization between foundations, JSON, Figma, and
  application libraries
- Broader PSL adoption beyond locally managed implementations

### Claims to avoid

Current evidence does not support claims that:

- Tecton has completed enterprise-wide adoption
- Sperry owns or created the original Tecton system
- The Sperry bridge automatically synchronizes upstream changes
- The integration has eliminated divergence across PSLs
- Quantitative delivery or maintenance improvements have been measured

## Leadership insight

An enterprise design system cannot become enterprise simply through executive
mandate or shared branding. It needs contracts at several levels:

- A framework-independent foundation
- Explicit semantic mappings for each supported framework
- Shared versioning and release communication
- Clear contribution and exception paths
- Distribution infrastructure that crosses organizational boundaries
- Governance that represents the teams expected to adopt it

The technical bridge solved Sperry's immediate integration problem. The larger
lesson is that design-system scale depends as much on operating model and
decision rights as it does on tokens and components.

## What I would do differently

I would establish the cross-PSL operating model before asking product lines to
integrate independently. A small representative governance group could define:

- What is globally fixed versus locally extensible
- Supported framework mappings
- Ownership and approval responsibilities
- Versioning and change-notification standards
- Figma organization and library distribution
- Contribution, exception, and deprecation processes

That would not remove disagreement, but it would move debate from individual
implementation choices into an agreed decision framework.

This reflection should be confirmed before public use.

## Public visual plan

Use one primary architecture diagram:

```text
Tecton Foundations
        ↓
Framework contracts
   ┌────┴────┐
 React/MUI   Angular/PrimeNG
 Landmark    Sperry
```

Expand the Sperry side only enough to show:

```text
Tecton Foundations → Sperry Bridge → Semantic Tokens
                   → Component Tokens → PrimeNG Components
```

Supporting visuals may include:

1. A sanitized before-and-after alias-chain comparison
2. One generic component showing how a foundation update travels through the
   bridge
3. A simple enterprise operating-model diagram showing shared foundations and
   PSL-specific framework implementations
4. A restrained “current state / next state” view for separate Figma
   organizations versus Figma Enterprise

Do not use screenshots to imply conflict. The visuals should make the
integration problem understandable, not identify organizational winners and
losers.

## Evidence sources

- Head of UX project account, August 2026
- Tecton MUI Library Figma file
- Tecton Foundations Figma file
- Argo Tecton Storybook
- PrimeOne v3 Sperry Figma file
- Sperry UX/UI Governance Toolkit

## Outstanding evidence

- Integration start date and major milestones
- Sperry UX and development team contributors who should be credited
- Number of components currently mapped or completed
- Applications currently consuming the Sperry Tecton integration
- A concrete example of an upstream change handled through the bridge
- Any review, adoption, or implementation feedback from Sperry teams
- Confirmed ownership and cadence for future synchronization
- Confirmation or revision of the proposed reflection

