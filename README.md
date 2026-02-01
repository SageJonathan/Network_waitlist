# Humanae – Waitlist Landing

Next.js waitlist landing for **Humanae** (“Networking that doesn’t feel like work”), focused on the Calgary launch. This README is a **UX guide** for future developers so new work stays on-brand and consistent.

## Design principles

- **Warm and human:** Light backgrounds, soft gradients, rounded corners. Avoid cold grays or harsh contrast.
- **Calgary-first:** Copy and imagery should feel local (e.g. “Launching in Calgary,” Calgary-focused visuals).
- **Playful but clear:** Subtle tilts and hovers add motion; typography and hierarchy stay readable.
- **Mobile-first:** Layout and touch targets are designed for small screens first, then scaled up.

---

## Color system

### Primary brand

- **Orange:** `#F89B37` – primary CTA, accents, hero gradient start  
- **Pink:** `#F4529B` – primary gradient end, accents  
- **Orange → Pink gradient:** `from-[#F89B37] to-[#F4529B]` – main CTAs and gradient text  
- **CTA hover:** gradient shifts to `to-[#dc2626]` (red) for feedback

Use these for buttons, gradient text, and key accents. Don’t introduce new primary colors without aligning with this palette.

### Backgrounds

- **Hero & footer (brand cream):** `#FCF9ED` – light yellow-beige. Single source of truth for “brand” page background; keep hero and footer in sync.
- **Section alternates:**  
  - Eng2: `#FDF9F0` → `#F5E8F0` (cream to soft pink)  
  - Eng3: `#FDF9F0`  
  - Eng4: `#FDF8FC` (light lavender)
- **Cards (neutral):** e.g. `#FAFAF9`, `#FFEEDD` (badges). Keep cards slightly off the section background for hierarchy.

### Text and UI

- **Headings / primary text:** `#1A1A1A` or `neutral-900`  
- **Body / secondary:** `neutral-700`, `neutral-500`  
- **On dark (CTA section):** `text-white`, `text-white/95`, `text-white/80`  
- **Gradient headings:** Same orange→pink gradient with `bg-clip-text text-transparent`

### Reference

- **Mockups:** `Mockups/` at project root (e.g. `Footer.png`, `colorReference.png`).  
- **Logo / Humanae halo:** The yellow-beige behind the logo in `colorReference.png` is the same family as `#FCF9ED`; use that for hero/footer and any “logo area” backgrounds.

---

## Typography

- **Font:** Inter only (`next/font/google`, loaded in `layout.tsx`, CSS variable `--font-inter`). Don’t add new font families without a clear UX reason.
- **Scale:**  
  - Section headings: `text-[1.75rem]`–`text-[2.25rem]` with responsive `md:`/`lg:` steps.  
  - One-off hero headline: slightly larger (e.g. `text-[2rem]`).  
  - Body: `text-base` or `text-sm`, `leading-relaxed` where appropriate.
- **Headline pattern:** Often “Dark phrase” + “Gradient word” (e.g. “Do what you **love**”, “This is how we **connect**”). Use `span` + gradient classes for the emphasized word.

---

## Spacing and layout

- **Section padding:** Typically `px-6 py-16 md:py-20 lg:py-24` for long sections; CTA/footer use tighter padding (e.g. `py-10 md:py-12`).
- **Content width:** `max-w-2xl` or `max-w-4xl` for main content; CTA card is `max-w-md` and centered.
- **Gaps:** Use consistent `gap-2`–`gap-6`; avoid one-off large gaps unless the layout demands it.
- **Footer:** Compact height; content narrow (`max-w-md`), `gap-2` between logo, tagline, and “Calgary • 2026”.

---

## Interaction and motion

- **Primary buttons (Join the Waitlist):**  
  - `hover:scale-105`  
  - Gradient hover: `hover:from-[#F89B37] hover:to-[#dc2626]`  
  - `transition-all duration-200`  
  - Focus: visible ring (e.g. `focus:ring-2 focus:ring-[#F89B37] focus:ring-offset-2`); offset color should match background (e.g. `#FCF9ED` on hero).
- **Cards (e.g. Eng1 activity tiles):**  
  - Default: slight neutral bg (e.g. `#FAFAF9`).  
  - Hover: `hover:bg-white`, soft orange-peach border glow, e.g. `hover:shadow-[0_0_0_2px_rgba(255,239,219,0.8),0_2px_12px_rgba(0,0,0,0.06)]`, and light tilt (e.g. `hover:-rotate-2`).
- **Tilted elements:** Hero image, floating card, badges, Eng3/Eng4 tiles use small rotations (e.g. `-rotate-3`, `rotate-2`). On hover they often go to `rotate-0` with `transition-transform duration-200`.
- **Icon hovers (Eng1):** Icon can have its own hover (e.g. tilt or gradient darkening) via state so the card and icon respond separately where needed.

Keep motion subtle and fast (~200ms); avoid large or slow animations.

---

## Section-by-section UX notes

| Section | Purpose | UX details |
|--------|---------|------------|
| **Hero** | Value prop + primary CTA | Logo, badge (“Launching in Calgary”), headline with gradient word, one primary button, disclaimer. Image with tilted frame; optional floating “Real connections” card. Background `#FCF9ED`. |
| **Eng1** | “Do what you love” – activities | Four activity cards. Card hover: white bg, orange-peach glow, slight left tilt. Icon can have separate hover (e.g. gradient darkening, tilt). |
| **Eng2** | “Find your people” | Two-column; gradient heading (pink→purple). Feature blocks with icon, title, short copy. |
| **Eng3** | “This is how we connect” | Two large image tiles; light tilt, `hover:rotate-0`. Cream background. |
| **Eng4** | “Simple as 1-2-3” | Numbered steps; small numbered tile + copy per step. Light lavender bg; tile hover returns to `rotate-0`. |
| **CTA** | Conversion | Bold gradient background (orange→pink→purple); heading + sub copy above card; card contains single CTA button (3/4 width of card) + short disclaimer. Decorative blurred shapes. |
| **Footer** | Trust and closure | Same cream as hero (`#FCF9ED`). Centered: logo, tagline (“Building better connections…”), “Calgary • 2026”. Optional help “?” button bottom-right. |

When adding or changing sections, reuse these patterns (headings, gradients, card hovers, spacing) so the page feels like one system.

---

## Accessibility

- **Focus:** All interactive elements (buttons, links, form controls) have a visible focus ring. Use `focus:outline-none focus:ring-2 focus:ring-* focus:ring-offset-2` and match `ring-offset-*` to the section background where relevant.
- **Images:** Use meaningful `alt` (e.g. “Humanae” for logo). Decorative graphics: `aria-hidden`.
- **Semantics:** Use `<section>`, `<h2>`, `<footer>`, etc. so structure and headings are clear for assistive tech.

---

## Tech stack

- **Next.js** (App Router), **React**, **TypeScript**, **Tailwind CSS**.  

