# Consensus Plan: Maid of Honour Invitation Page

## Summary

**Feature**: Create a new React page at `/maid-of-honour` that presents a heartfelt "Will you be my maid of honour?" invitation, reusing the existing visual language (floral assets, typography tokens, animation patterns) from the wedding website, and clearly communicating that Astana-to-Oskemen round-trip travel and hotel stay are fully covered.

**Estimated LOC**: ~120 (Small)
**Path**: Lite (single-agent)

---

## Proposed Solution

### File Changes

| File | Level | Purpose |
|------|-------|---------|
| `src/pages/MaidOfHonour.tsx` | new | New standalone page with all invitation content |
| `src/App.tsx` | minor | Register the new `/maid-of-honour` route |

---

### Implementation Steps

**Step 1: Create `src/pages/MaidOfHonour.tsx`** (Estimated: ~115 LOC)

Build a single-file page component. No new section sub-components are needed — all content fits inside one file, following the same inline pattern used by the existing section components. The page is composed of three visual sections stacked vertically inside `<div className="min-h-screen">`:

**Section 1 — Hero (cream background, entrance animations)**

Mirrors `HeroSection.tsx` exactly in structure. Uses `section-cream py-24 md:py-32 relative overflow-hidden flex items-center justify-center`.

- Top-left and top-right: `flower-laying-diagonal.png` with `absolute top-0` positioning, mirrored with `-scale-x-100`, `motion.img` with `initial={{ opacity: 0, x: -50/50 }}` and `animate={{ opacity: 0.8, x: 0 }}`.
- Bottom-left / bottom-right: `left-bottom-home.png` and `right-bottom-flower.png` at `absolute bottom-20` with `opacity-60`.
- Main content `div` with `relative z-10 text-center px-4`:
  - Overline: `font-body text-brown-light tracking-[0.3em] uppercase text-sm` — text: `"A Special Question"`
  - `<h1>`: `font-script text-brown text-4xl md:text-6xl lg:text-7xl font-medium leading-tight` — text: `"Will you be my Maid of Honour?"`
  - `<div className="elegant-divider-long mt-12 mb-8" />` with `scaleX` entrance animation.
  - Sub-heading: `font-script text-brown text-2xl md:text-3xl` — text: `"Ayazhan's Qyz Uzatu — August 7, 2026"`

**Section 2 — Heartfelt message + travel & hotel cards (cream-dark cards, scroll-triggered)**

Uses `section-cream py-24 md:py-32 relative overflow-hidden`. Uses `useRef` + `useInView(ref, { once: true, margin: "-100px" })` matching the pattern in `AccommodationSection.tsx`.

Layout: `container mx-auto px-4` > `text-center max-w-3xl mx-auto`.

- `flower-.png` decorative image: `absolute top-10 right-10 w-24 md:w-32 opacity-30`.
- Body copy paragraphs (`font-body text-brown-light text-sm leading-relaxed`), staggered with `delay: 0.2 / 0.3`:

```
"You've been there through every version of me — the tearful late-night calls,
the laughter that made no sense to anyone else, and every quiet moment in between.
You've supported me, believed in me, and loved me without condition.
Now, on the most important day of my life, I want you by my side."
```

- Two info cards (`bg-cream-dark p-8 rounded-lg`), each with `motion.div`, staggered `delay: 0.4 / 0.5`:

  Card 1 — Travel:
  - `<h3 className="font-script text-brown text-2xl mb-4">Your Journey, Covered</h3>`
  - `<p className="text-sm">` — "I'll take care of your round-trip flight from Astana to Oskemen and back. All you need to do is say yes."

  Card 2 — Hotel:
  - `<h3 className="font-script text-brown text-2xl mb-4">A Place to Rest</h3>`
  - `<p className="text-sm">` — "Your hotel stay in Oskemen for the duration of the celebration will be fully arranged and covered. Just bring yourself."

- Closing italic line (`font-body text-brown-light text-sm italic pt-4`): `"All I'm asking for is you."`

**Section 3 — Footer (reuse FooterSection component)**

Import and render `<FooterSection />` directly — zero changes to the component, identical to how `Index.tsx` uses it.

Also import `Navigation` and render it at the top of the page wrapper, identical to `Index.tsx`.

Full page shell:

```tsx
import Navigation from "@/components/wedding/Navigation";
import FooterSection from "@/components/wedding/FooterSection";
// + framer-motion imports + asset imports

const MaidOfHonour = () => (
  <div className="min-h-screen">
    <Navigation />
    {/* Hero section — inline JSX */}
    {/* Message + cards section — inline JSX with useRef/useInView */}
    <FooterSection />
  </div>
);

export default MaidOfHonour;
```

---

**Step 2: Register the route in `src/App.tsx`** (Estimated: ~3 LOC)

Add one import and one `<Route>` element immediately before the existing comment marker.

```tsx
// new import
import MaidOfHonour from "./pages/MaidOfHonour";

// new route, above the catch-all comment
<Route path="/maid-of-honour" element={<MaidOfHonour />} />
{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
```

---

### Test Strategy

- Navigate to `http://localhost:8080/maid-of-honour` and confirm the page renders without errors.
- Scroll through the page and verify the animated blocks trigger on scroll.
- Resize to mobile (`< 768px`) and confirm responsive variants on the heading and floral images.
- Navigate to `/` and confirm the existing Index page is unaffected.
- Navigate to a nonexistent path (e.g., `/xyz`) and confirm the NotFound page still renders.

---

## Documentation Planning

No documentation changes required. The new page is a self-contained addition that does not alter any shared component contracts.
