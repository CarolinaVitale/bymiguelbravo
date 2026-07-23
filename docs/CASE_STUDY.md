# by Miguel Bravo — Product design case study

> **Status:** Working draft. The product evidence is real; unverified business context is explicitly marked. This case study focuses exclusively on the by Miguel Bravo website and service experience.

## At a glance

**Product:** by Miguel Bravo, a culinary-services website for Chef Miguel Bravo  
**Market represented in the redesign:** Tampa Bay, Florida  
**Work completed in this repository:** information architecture, content localization, responsive visual redesign, route repair, and front-end implementation  
**Role:** `[Confirm exact title and responsibilities]`  
**Timeline:** `[Confirm dates and duration]`  
**Team:** `[Confirm collaborators and stakeholders]`

## The problem

### Observed baseline

The original React experience presented several barriers to credibility and conversion:

1. **Market mismatch.** The experience was written in Spanish and referenced Venezuela, while the current business is represented as serving Tampa, Florida.
2. **Broken or obsolete paths.** Menu, Services, and Events were reported as no longer working. The application also used Spanish route names such as `/servicios`, `/sobremi`, and `/contacto`.
3. **Weak content hierarchy.** The home page relied on an image carousel, a low-contrast logo overlay, and disconnected content sections. The value proposition and next action were not immediately clear.
4. **Inconsistent service story.** Menu, catering, private dining, and pop-up dinner content existed, but the site did not organize them into a coherent customer journey.
5. **Legacy layout behavior.** Fixed heights, absolute positioning, and overlapping mobile carousel rules made responsive presentation fragile.

### Design challenge

How might we reposition Miguel’s website for a Tampa audience, clarify the available culinary experiences, and create reliable paths from discovery to inquiry—while reusing the existing React project and photography?

## Goals

### User goals

- Understand who Miguel is and what he offers within the first screen.
- Explore menus, private dining, catering, and pop-up dinners without dead ends.
- Decide whether the experience fits the occasion.
- Contact Miguel quickly from any relevant page.

### Business goals

- Present a premium, credible culinary brand aligned with the Tampa market.
- Convert qualified visitors into event or private-dining inquiries.
- Retain recognition of Miguel’s personal brand while visually connecting it to the world of Ocho Trece.

> Business goals are currently inferred from the requested redesign and need stakeholder confirmation.

## Constraints

### Confirmed from the implementation

- Work within an existing React 18 / React Router / React Bootstrap codebase.
- Reuse the available brand logos and culinary photography.
- Preserve existing social contact channels while keeping calls to action consistent.
- Keep legacy URLs functional through redirects.
- Deliver a responsive experience without adding a new CMS or backend.
- Avoid copying Ocho Trece literally; use it as a visual-direction reference.

### Not yet confirmed

- Budget, launch deadline, engineering capacity, and maintenance ownership.
- Whether the menu and pricing shown are current commercial offerings.
- Accessibility or performance targets.
- Analytics availability and historical traffic baseline.

## Key audience and context

### Provisional primary audience

Tampa-area customers planning an intimate dinner, celebration, corporate gathering, or culinary event who want a chef-led experience rather than standard drop-off catering.

### Core user questions

- What type of experience does Miguel provide?
- Is it suitable for my event and guest count?
- What style of food can I expect?
- Does he serve my location?
- How do I check availability?

> Audience definition is inferred and should be validated through stakeholder input and usability research.

## Information architecture

The navigation was simplified into four customer-facing destinations:

```text
Home
├── Ocho Trece
├── About
├── Services
└── Contact
```

Legacy paths redirect to their English equivalents:

| Legacy path | Current path |
|---|---|
| `/servicios` | `/services` |
| `/sobremi` | `/about` |
| `/contacto` | `/contact` |
| `/popupdinner` | `/services#experiences` |
| `/events` | `/services#experiences` |

## Primary flows

### Flow 1 — Private event inquiry

```text
Landing page → understand positioning → explore Services → review service options → Contact → Instagram inquiry
```

### Flow 2 — Food-first discovery

```text
Landing page or social referral → Ocho Trece → explore Miguel’s food and restaurant work → Services
```

### Flow 3 — Pop-up dinner discovery

```text
Landing page → Services → Pop-up events → understand format and expectations → Contact
```

### Flow 4 — Trust and credibility

```text
Landing page → About → review Miguel’s training and international experience → Contact
```

## Design decisions

### 1. Lead with an experience, not a generic biography

The hero now combines a clear service category—private chef, catering, and pop-up dinners—with a concise promise and a direct planning action. This reduces the amount of interpretation required before a visitor can act.

### 2. Use Ocho Trece as a directional reference

The reference site established a recognizable visual world through charcoal backgrounds, ivory typography, warm gold accents, editorial serif headlines, and food-led imagery. The redesign translates those principles into Miguel’s personal brand without reproducing Ocho Trece’s layouts or assets.

### 3. Localize the complete customer experience

Visible copy and navigation were changed to English, the service area was updated to Tampa, Florida, and English route names became canonical. Redirects protect visitors using old links.

### 4. Replace fragile content pages with focused narratives

The previous Menu, Services, and Events pages depended heavily on long Bootstrap carousels and overlapping propositions. They were rebuilt as focused narratives:

- Ocho Trece is an editorial case-story rather than an obsolete menu, using a structured portrait gallery and one onward CTA.
- Services combines Private Dining, Event Catering, Chef’s Table, and Pop-up Events in one indexed destination.
- Contact explains the inquiry information to prepare before intentionally handing visitors to Instagram or LinkedIn.

### 5. Build responsive layouts around content rather than fixed screen percentages

Editorial grids collapse into a single-column mobile flow. Horizontal overflow was checked at desktop and mobile widths, and the primary pages were verified without console errors.

## Iterations completed

### Iteration 1 — Visual hierarchy repair

**Issue:** The logo had insufficient contrast over carousel photography, the CTA floated without context, and lower sections felt disconnected.  
**Change:** Introduced a shaded editorial hero, value proposition, contextual CTA, and modular home-page sections.  
**Observed result:** Clearer first-screen hierarchy and a stable responsive home layout without horizontal overflow.

### Iteration 2 — Brand and market alignment

**Issue:** The first redesign improved hierarchy but retained a light navigation system and a mixed visual language. The product also remained partly Spanish.  
**Change:** Adopted a charcoal/ivory/gold system inspired by Ocho Trece, translated the experience to English, and changed location references to Tampa.  
**Observed result:** A more cohesive culinary identity and consistent English navigation and content.

### Iteration 3 — Functional page recovery

**Issue:** Menu, Services, and Events were reported as broken, obsolete, or duplicative.  
**Change:** Reframed Menu as Ocho Trece, unified Services and Events, introduced canonical English routes, and added redirects from legacy paths.  
**Observed result:** All primary and legacy routes rendered successfully in local browser checks; no console errors were observed during final validation.

## Outcome

### Verified technical outcome

- Responsive English experience across Home, Ocho Trece, About, Services, and Contact.
- Working canonical routes and backward-compatible redirects.
- No horizontal overflow in tested desktop and mobile views.
- No browser-console errors in the tested primary journeys.
- Successful optimized React production build.

### Business and user outcome

Not yet measured. Claims about increased inquiries, engagement, conversion, revenue, or customer satisfaction should not be added until analytics or research evidence is available.

## What still needs validation

- Whether visitors understand Ocho Trece as restaurant work and Services as the place to choose or inquire about an experience.
- Whether Instagram is an appropriate booking channel for the Tampa audience.
- Whether pricing language sets the right expectations for private dining and catering.
- Whether the Ocho Trece relationship should be explicit or remain a subtle brand connection.
- Accessibility, performance, and real-device behavior.

These questions should feed directly into the heuristic evaluation and 3–5 usability sessions.

## Evidence to capture next

- Screenshots of the original home, menu, services, and pop-up pages.
- Screenshots of the current desktop and mobile experience.
- Annotated flow diagram and information architecture.
- Stakeholder quotes confirming the problem and goals.
- Usability session notes, severity ratings, and before/after changes.
- Verified analytics screenshots and date ranges.
