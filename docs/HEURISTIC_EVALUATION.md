# by Miguel Bravo — Heuristic evaluation

**Evaluation date:** July 23, 2026  
**Product:** Local React website  
**Framework:** Nielsen’s 10 usability heuristics  
**Surfaces reviewed:** Home, Menu, About, Services, Events, Contact, mobile navigation, legacy redirects, and an invalid URL  
**Viewports checked:** 1440 × 900 and 390 × 844, plus semantic inspection at 461 × 705

> **Baseline preserved:** This document records the product before remediation. All 12 findings were addressed on July 23, 2026; implementation evidence is documented in [HEURISTIC_REMEDIATION.md](./HEURISTIC_REMEDIATION.md).

## Purpose

This evaluation establishes a usability baseline before moderated usability testing. It identifies expert-review findings; it does **not** replace evidence from real users.

## Method

The review combined:

- Direct navigation through every primary route.
- Responsive checks at desktop and mobile widths.
- DOM and semantic-structure inspection.
- Review of headings, landmarks, accessible names, links, buttons, images, and route behavior.
- Source review for focus treatment, reduced-motion support, page titles, and routing.
- Browser-console review performed during the preceding implementation validation.

No checkout, account, booking backend, analytics dashboard, or submitted contact workflow exists in the current product, so those states could not be evaluated.

## Severity scale

| Score | Meaning |
|---|---|
| **0** | Not a usability problem |
| **1** | Cosmetic or minor issue |
| **2** | Moderate issue; causes friction but does not usually block completion |
| **3** | Major issue; likely to cause confusion, abandonment, or accessibility failure |
| **4** | Critical issue; blocks a core task |

## Executive summary

The product has a clear premium visual direction, consistent English language, stable primary routes, and no horizontal overflow at the tested widths. Its largest risks are not visual—they concern orientation, recovery, semantics, and conversion confidence.

**Findings:** 12 total  
**Major (S3):** 4  
**Moderate (S2):** 6  
**Minor (S1):** 2  
**Critical (S4):** 0

## Prioritized findings

### H-01 — Invalid URLs fail silently

**Severity:** 3 · Major  
**Heuristic:** 9. Help users recognize, diagnose, and recover from errors  
**Evidence:** Navigating to `/not-a-real-page` displays only the global navigation and footer. There is no message, explanation, suggested destination, or route back to useful content.  
**Impact:** A mistyped or stale link appears like a broken/empty page and can make the product feel unreliable.  
**Recommendation:** Add a catch-all route with a branded 404 page, clear explanation, Home link, and shortcuts to Services and Contact.  
**Validation:** Give usability participants a deliberately invalid URL and observe whether they recover without prompting.

### H-02 — Navigation does not indicate the current location

**Severity:** 3 · Major  
**Heuristics:** 1. Visibility of system status; 6. Recognition rather than recall  
**Evidence:** No navigation item uses `aria-current`, and the visual navigation does not expose an active state on any reviewed route.  
**Impact:** Visitors must remember which page they selected, especially after scrolling through long pages or opening the mobile menu.  
**Recommendation:** Use `NavLink`, add a persistent active style, and expose `aria-current="page"`. Include the active state inside the mobile off-canvas navigation.  
**Validation:** Ask participants where they are after entering through a deep link and after scrolling halfway down the page.

### H-03 — The primary inquiry journey depends on an abrupt external handoff

**Severity:** 3 · Major  
**Heuristics:** 1. Visibility of system status; 3. User control and freedom  
**Evidence:** “Plan your experience” and “Start a conversation” open WhatsApp directly. The website does not explain what information to prepare, whether WhatsApp is required, what will open, or when a reply can be expected. There is no on-site fallback form or email option.  
**Impact:** Visitors without WhatsApp—or visitors not ready to leave the site—may abandon the core conversion task.  
**Recommendation:** Set expectations before handoff, use a prefilled inquiry message, and provide at least one on-site or email fallback. Keep the choice explicit: “Continue in WhatsApp.”  
**Validation:** Test inquiry completion with participants who do and do not regularly use WhatsApp.

### H-04 — Home and About lack a reliable semantic page structure

**Severity:** 3 · Major  
**Heuristics:** 4. Consistency and standards; 8. Aesthetic and minimalist design  
**Evidence:** Home has no `<main>` landmark and contains three `<h1>` elements but no text heading for the hero. About has no `<main>` landmark and no semantic heading at all; its apparent title is a styled `<div>`.  
**Impact:** Screen-reader navigation, search indexing, and structural understanding are weaker. Multiple competing H1s also obscure the main purpose of Home.  
**Recommendation:** Give every route one `<main>` and one descriptive H1. Demote home-section titles to H2. Replace About’s animated title `<div>` with a real H1.  
**Validation:** Inspect the accessibility tree and run a screen-reader heading/landmark traversal.

### H-05 — Page titles do not describe the current page

**Severity:** 2 · Moderate  
**Heuristics:** 1. Visibility of system status; 4. Consistency and standards  
**Evidence:** Every reviewed route uses the same browser title: “by Miguel Bravo.”  
**Impact:** Tabs, browser history, shared links, and search results are hard to distinguish.  
**Recommendation:** Set a unique title and description per route, for example “Private Dining & Catering in Tampa | Miguel Bravo.”

### H-06 — Motion cannot be paused or reduced

**Severity:** 2 · Moderate  
**Heuristics:** 3. User control and freedom; 7. Flexibility and efficiency of use  
**Evidence:** Home contains an automatically advancing hero carousel and a second catering carousel. The codebase has no `prefers-reduced-motion` handling and exposes no pause control.  
**Impact:** Continuous motion can distract users and creates an accessibility problem for motion-sensitive visitors. It can also move content before it has been understood.  
**Recommendation:** Pause by default or provide a clearly labeled pause/play control. Respect `prefers-reduced-motion` and stop automatic transitions when enabled.

### H-07 — The mobile menu hides essential destinations without reinforcing context

**Severity:** 2 · Moderate  
**Heuristics:** 6. Recognition rather than recall; 7. Flexibility and efficiency of use  
**Evidence:** At mobile widths, all five destination labels are behind a generic “Toggle navigation” control. The closed header contains two separate logo links but no page label or active indicator.  
**Impact:** Users returning from a deep link receive little orientation and need an extra action to understand the site structure.  
**Recommendation:** Preserve the compact menu, but add active-page context and simplify the duplicated logo treatment. Consider exposing Contact as a persistent action.

### H-08 — Several interactive and visual elements have weak accessible names

**Severity:** 2 · Moderate  
**Heuristics:** 2. Match between system and real world; 4. Consistency and standards  
**Evidence:** Three Home links are announced only as “logo.” Footer links contain images named “insta” and “whats.” Carousel images repeat generic names such as “catering” and “Pop-up Dinner.”  
**Impact:** Assistive-technology users cannot reliably distinguish destinations or understand meaningful imagery. Repeated names also add noise.  
**Recommendation:** Use destination-focused labels such as “Miguel Bravo — Home,” “Instagram,” and “Contact Miguel on WhatsApp.” Give meaningful editorial images descriptive alternatives; use empty alt text for purely decorative images.

### H-09 — Long pages offer limited navigation efficiency

**Severity:** 2 · Moderate  
**Heuristic:** 7. Flexibility and efficiency of use  
**Evidence:** Tested page heights range from roughly 2,000 to 4,555 px on desktop and 2,213 to 4,111 px on mobile. There is no skip link, section navigation, or persistent route navigation while scrolling.  
**Impact:** Keyboard, mobile, and repeat visitors must traverse substantial content to reach the footer or return to navigation.  
**Recommendation:** Add a “Skip to content” link, ensure logical tab order, and consider a compact sticky header or contextual CTA on long commercial pages.

### H-10 — Contact options lack decision-support detail

**Severity:** 2 · Moderate  
**Heuristic:** 5. Error prevention  
**Evidence:** Contact offers WhatsApp, Instagram, and LinkedIn but does not state which channel is appropriate for bookings versus professional inquiries beyond short labels. It does not request date, guest count, venue, dietary needs, or budget range.  
**Impact:** Inquiries may arrive incomplete, increasing back-and-forth and making it harder for visitors to choose the correct channel.  
**Recommendation:** Add a short inquiry checklist, response-time expectation, and a structured lightweight form or prefilled WhatsApp template.

### H-11 — Forced editorial line breaks produce concatenated accessible text

**Severity:** 1 · Minor  
**Heuristics:** 2. Match between system and real world; 4. Consistency and standards  
**Evidence:** Headings containing `<br />` are exposed as text such as “Good food hasno borders,” “Hospitality,made personal,” and “Pop-updinners.”  
**Impact:** Visual presentation is attractive, but copied text and some assistive announcements can sound incorrect.  
**Recommendation:** Include semantic spaces around line-break boundaries or create visual wrapping with CSS rather than hard-coded `<br />` elements.

### H-12 — The product provides no visible fallback when imagery is slow

**Severity:** 1 · Minor  
**Heuristic:** 1. Visibility of system status  
**Evidence:** Content pages rely on large editorial images, but image elements do not declare loading behavior or dimensions and do not provide page-level skeletons or stable placeholders.  
**Impact:** On slower mobile connections, layout shifts or blank visual regions may make the experience feel unfinished.  
**Recommendation:** Set explicit aspect ratios/dimensions, lazy-load below-the-fold images, prioritize the hero image, and use restrained placeholders.

## Heuristic coverage

| Nielsen heuristic | Status | Key evidence |
|---|---|---|
| 1. Visibility of system status | Needs work | No active route; external handoff and image loading lack feedback |
| 2. Match with the real world | Mostly good | English Tampa positioning is clear; some labels and heading announcements are unnatural |
| 3. User control and freedom | Needs work | Autoplay cannot be paused; inquiry path forces an external channel |
| 4. Consistency and standards | Needs work | Shared visual system is strong; semantics, titles, and accessible labels are inconsistent |
| 5. Error prevention | Needs work | Inquiry preparation is not guided |
| 6. Recognition rather than recall | Needs work | No current-page state; mobile destinations are fully hidden |
| 7. Flexibility and efficiency | Needs work | Long pages lack skip/contextual navigation |
| 8. Aesthetic and minimalist design | Strong | Focused content, consistent palette, and clear service sections |
| 9. Error recovery | Fails | Unknown routes produce an empty content area |
| 10. Help and documentation | Partial | Services are described, but inquiry requirements and response expectations are absent |

## Positive observations

- Consistent charcoal, ivory, and gold visual language across commercial pages.
- Canonical English routes and working redirects from legacy Spanish paths.
- Clear high-level separation among Menu, Services, Events, About, and Contact.
- No horizontal overflow at 1440 px or 390 px on the tested primary pages.
- Calls to action use action-oriented language and appear at natural decision points.
- The site consistently identifies Tampa Bay as the service area.
- The HTML language is correctly set to English.

## Recommended remediation order

### Sprint 1 — Core orientation and recovery

1. Add the 404 route.
2. Add active navigation states and `aria-current`.
3. Repair Home and About heading/landmark structure.
4. Add unique page titles and descriptions.

### Sprint 2 — Conversion confidence

5. Clarify the WhatsApp handoff and add a fallback contact method.
6. Add inquiry requirements and a prefilled message or form.
7. Improve logo, social, and image accessible names.

### Sprint 3 — Control and polish

8. Add reduced-motion behavior and carousel controls.
9. Add skip navigation and improve long-page efficiency.
10. Stabilize image loading and remove semantic line-break issues.

## Definition of done for this evaluation

- All six primary routes reviewed.
- Desktop and mobile responsive behavior checked.
- Invalid-route recovery checked.
- Findings mapped to Nielsen heuristics.
- Every finding includes evidence, impact, recommendation, and severity.
- Remediation order defined.

The next roadmap item is usability testing. The first test script should prioritize the three flows most affected by these findings: identifying the right service, understanding current location, and completing an inquiry.
