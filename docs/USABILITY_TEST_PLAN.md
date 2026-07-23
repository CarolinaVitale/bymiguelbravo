# by Miguel Bravo — Usability test plan

**Status:** Ready for participant sessions  
**Target:** 3–5 participants  
**Format:** Moderated remote or in-person, 20–25 minutes  
**Product:** Responsive website at `http://localhost:3000/` during local testing  
**Test language:** English product; moderation may be English or Spanish

## Research objective

Evaluate whether prospective Tampa customers can understand Miguel’s offer, select the appropriate service, navigate the product, and prepare an inquiry without assistance.

## Research questions

1. Can participants explain what Miguel offers after viewing the Home page?
2. Can they distinguish Ocho Trece’s restaurant story from Miguel’s bookable Services?
3. Can they choose an appropriate service for a realistic occasion?
4. Can they find the preferred inquiry channel and understand what information to include?
5. Can they recognize their current location and recover from an invalid URL?

## Participants

Recruit 3–5 people who meet at least one of these criteria:

- Lives in Tampa Bay or has planned an event there.
- Has hired or considered hiring catering, a private chef, or an event vendor.
- Has organized a dinner, celebration, wedding, or corporate gathering in the last two years.
- Is comfortable browsing and making inquiries on a mobile phone.

Aim for variation in age, event-planning experience, and familiarity with contacting businesses through social media.

### Avoid recruiting

- Miguel, the designer, or anyone who worked directly on the website.
- Participants who have already seen the new information architecture in detail.
- Only designers or developers; the sample should represent customers.

## Participant matrix

| ID | Profile | Device | Event-planning experience | Social messaging familiarity | Status |
|---|---|---|---|---|---|
| P01 |  |  |  |  | Not scheduled |
| P02 |  |  |  |  | Not scheduled |
| P03 |  |  |  |  | Not scheduled |
| P04 |  |  |  |  | Optional |
| P05 |  |  |  |  | Optional |

Use participant IDs in all notes. Do not record sensitive personal information in the repository.

## Success criteria

| Task | Success definition | Target |
|---|---|---|
| Understand the offer | Mentions private dining/private chef plus catering or events | ≥ 4/5 participants |
| Choose a service | Finds Services and selects a fitting option without moderator guidance | ≥ 4/5 |
| Find pop-up information | Finds the Pop-up Events section within Services and explains the format accurately | ≥ 4/5 |
| Prepare an inquiry | Finds Instagram and identifies the information requested for a useful inquiry | ≥ 4/5 |
| Recover from error | Uses a recovery link from the 404 page without moderator help | ≥ 4/5 |

Additional measures:

- Task completion: success / partial / failure.
- Time on task in seconds.
- Number of wrong turns.
- Moderator assists.
- Single Ease Question after each task: 1 “very difficult” to 7 “very easy.”
- Post-test confidence: 1–5.

## Test setup

1. Start the local site with `npm start`.
2. Use a clean browser tab at `http://localhost:3000/`.
3. Ask the participant to share their screen if remote.
4. Use their normal device when possible; prioritize at least two mobile sessions.
5. Do not explain the navigation or service categories before the test.
6. Ask permission before recording audio or screen video.
7. Record observations in a copy of [USABILITY_SESSION_TEMPLATE.md](./USABILITY_SESSION_TEMPLATE.md).

## Moderator introduction

> Thank you for helping us evaluate this website. We are testing the product, not you. There are no wrong answers. Please say what you are thinking as you move through the site—what you expect, what you notice, and anything that feels confusing. I may stay quiet while you work. You can stop at any time. Nothing will be purchased or sent during this session.

Before continuing, confirm:

- The participant agrees to take part.
- Whether note-taking is allowed.
- Whether audio or screen recording is allowed.

## Warm-up questions

1. Tell me about the last dinner, celebration, or event you planned.
2. How did you find food or hospitality vendors?
3. Have you ever hired a private chef or catering service?
4. How comfortable are you contacting a business through Instagram or another social channel?

Do not mention the website’s categories while asking these questions.

## Tasks

### Task 1 — First impression

**Starting point:** Home  
**Prompt:**

> Imagine a friend sent you this website while you were planning a special dinner in Tampa. Take a moment to look at the page. Without clicking yet, tell me what you think Miguel offers and who this service is for.

**Observe:**

- Whether the participant recognizes private dining, catering, and pop-up dinners.
- What they believe “Plan your experience” will do.
- Whether the visual relationship to a restaurant causes confusion.

**Success:** Accurately describes at least two core offers and Tampa context.

### Task 2 — Choose the right service

**Starting point:** Home  
**Prompt:**

> You are organizing a birthday dinner for 12 people at a home in Tampa. Find the service that seems most appropriate and tell me why you chose it. Do not contact Miguel yet.

**Observe:**

- Ocho Trece versus Services selection.
- Ability to distinguish Private Dining from Event Catering and Chef’s Table.
- Use of active navigation and mobile menu.

**Success:** Reaches Services and identifies Private Dining, with no moderator guidance.

### Task 3 — Understand pop-up dinners

**Starting point:** Current page after Task 2  
**Prompt:**

> A friend mentions that Miguel also hosts limited events where individual guests can attend. Find information about those events and explain what you would expect from one.

**Observe:**

- Whether Pop-up Events is discoverable inside Services.
- Whether participant understands limited seating, tasting menu, and one-night format.
- Questions that remain unanswered, such as price, dates, or location.

**Success:** Reaches the Pop-up Events section in Services and gives an accurate explanation without assistance.

### Task 4 — Prepare an inquiry

**Starting point:** Services  
**Prompt:**

> Now imagine you want to ask about a private dinner for 12 guests next month. Find the preferred contact method and explain what information you would include. Stop before sending a message.

**Observe:**

- Whether Contact is found.
- Whether the booking channel is clear.
- Whether the participant notices the requested date, guest count, location, and experience details.
- Whether Instagram feels appropriate and trustworthy for the inquiry.

**Success:** Reaches Contact, selects Instagram for booking, and identifies the requested inquiry details; stops before sending.

### Task 5 — Recover from a broken link

**Starting point:** Moderator provides `http://localhost:3000/old-dinner-page`  
**Prompt:**

> Imagine this is an old link saved in a message. You still want to learn what Miguel offers. Show me what you would do.

**Observe:**

- Whether the 404 message is understood.
- Which recovery option is chosen.
- Confidence that the site is still trustworthy.

**Success:** Uses any recovery link without moderator assistance.

## Post-task questions

After each task:

1. On a scale of 1–7, how easy or difficult was that?
2. What, if anything, made you hesitate?
3. What did you expect to happen next?

Avoid explaining the intended design until all tasks are complete.

## Closing questions

1. In your own words, what is the difference between Ocho Trece and Services?
2. What information would you need before contacting Miguel?
3. How would you prefer to contact him?
4. What made the service feel trustworthy or untrustworthy?
5. If you could change one thing, what would it be?
6. On a scale of 1–5, how confident would you feel making an inquiry through this site?

## Moderator rules

- Ask participants to think aloud; do not teach the interface.
- Wait at least 10 seconds before offering help.
- If help is necessary, use neutral prompts: “What would you expect?” or “What would you try next?”
- Record behavior before interpretation.
- Separate direct participant quotes from moderator inference.
- Never describe a participant as failing; the interface failed to support the task.

## Issue severity for test findings

| Severity | Definition |
|---|---|
| 1 Minor | Brief hesitation; task still completed independently |
| 2 Moderate | Wrong turn, repeated hesitation, or reduced confidence |
| 3 Major | Requires moderator assistance or causes task failure |
| 4 Critical | Prevents most participants from completing a core inquiry |

## Analysis process

After all sessions:

1. Copy one session template per participant.
2. Consolidate observations in [USABILITY_RESULTS.md](./USABILITY_RESULTS.md).
3. Count frequency separately from severity.
4. Prioritize issues that affect the inquiry flow or occur in multiple sessions.
5. Implement only evidence-supported changes.
6. Re-test the affected tasks or conduct a focused verification.
7. Add before/after evidence to the case study.
