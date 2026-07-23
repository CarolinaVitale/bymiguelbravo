# Heuristic remediation log

**Date completed:** July 23, 2026  
**Baseline:** [HEURISTIC_EVALUATION.md](./HEURISTIC_EVALUATION.md)

This log links every heuristic finding to a product change and its verification evidence. The baseline report remains unchanged so the case study can show the before/after reasoning.

| Finding | Change implemented | Verification |
|---|---|---|
| H-01 Invalid URLs fail silently | Added a catch-all route and branded 404 page with Home, Services, and Contact recovery links. | `/not-a-real-page` renders one main landmark, one H1, descriptive metadata, and recovery actions. |
| H-02 No current location | Rebuilt navigation with `NavLink`, active styling, and `aria-current="page"`. | Ocho Trece, About, Services, and Contact each expose the correct active item. |
| H-03 Abrupt external handoff | Removed WhatsApp from the product. Internal CTAs now lead to Contact, where Instagram is identified for bookings and LinkedIn for professional inquiries. | Home and Menu keep visitors on-site until they intentionally select a contact channel. |
| H-04 Weak semantic structure | Added one `<main id="main-content">` and one H1 per route; changed Home section headings to H2 and made About’s title semantic. | All primary routes, redirects, and 404 expose a clear main landmark and page heading. |
| H-05 Identical page titles | Added reusable route-level title and description management. | Every primary route now has a unique title and meta description. |
| H-06 Motion cannot be controlled | Added a Pause/Play control, disabled automatic motion for reduced-motion users, and stopped the secondary catering carousel from autoplaying. | Home exposes one “Pause slideshow” button under normal motion preferences; CSS and JS respect reduced motion. |
| H-07 Mobile context is hidden | Added active state within the off-canvas menu, simplified duplicate mobile branding, and made the header sticky. | The current destination remains exposed through `aria-current` at 390 px. |
| H-08 Weak accessible names | Added destination-based labels to logo and social links; meaningful images received descriptive alternatives and decorative logos use empty alt text. | DOM inspection shows named Home and Instagram destinations. |
| H-09 Long-page inefficiency | Added a keyboard skip link, visible focus treatment, and sticky global navigation. | Skip link targets `#main-content` on every route; focus styles exist for links and controls. |
| H-10 Contact lacks guidance | Contact now states which channel is for bookings and lists the date, guest count, location, and experience details to include. | Contact distinguishes booking inquiries on Instagram from professional inquiries on LinkedIn. |
| H-11 Concatenated heading text | Preserved editorial line breaks while adding semantic spaces and hiding decorative breaks from assistive technology. | Accessible headings read “Good food has no borders,” “Hospitality, made personal,” and “Pop-up dinners.” |
| H-12 Image loading has no stability | Added intrinsic dimensions, lazy loading below the fold, eager loading for the first hero slide, improved alternatives, and stable image containers. | Rendered images expose dimensions and loading priorities; primary routes have no horizontal overflow. |

## Validation results

- Optimized production build: **passed**.
- Automated React tests: **2/2 passed**.
- Primary routes checked: Home, Ocho Trece, About, Services, Contact, the Events redirect, and 404.
- Responsive checks: desktop and mobile.
- Horizontal overflow: **0 px** on tested routes.
- Browser-console errors in a clean validation tab: **none**.
- Contact destinations and inquiry guidance verified on mobile.
- Home slideshow control: one unique Pause button detected.

## Remaining research questions

The heuristic issues are remediated, but the effectiveness of the solutions is not yet proven with users. The next step is 3–5 usability sessions focused on:

1. Choosing the right service.
2. Understanding the relationship between Ocho Trece and Miguel’s bookable Services.
3. Finding the booking channel and preparing a useful Instagram inquiry.
4. Recovering from an invalid URL.
5. Using the mobile navigation and recognizing the current page.
