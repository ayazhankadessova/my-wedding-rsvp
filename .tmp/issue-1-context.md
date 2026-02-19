# Context Summary: Bridesmaid / Maid of Honour Invitation Page

## Feature Understanding

**Intent**: Create a new, standalone React page at its own URL that serves as a personal "Will you be my maid of honour?" invitation. The page should feel cohesive with the existing wedding website by reusing the same visual language, components, and styling, while presenting a heartfelt personal message and communicating that travel (Astana to Eskimen round trip) and hotel costs will be covered.

**Scope signals**: new route, new page component, reuse existing elements/styling, prominent heading, heartfelt personal copy, travel/accommodation info, standalone URL.

---

## Relevant Files

### Source Files

- `src/App.tsx` — The router root. Uses `react-router-dom` v6 `BrowserRouter` + `Routes` + `Route`. New route must be added here with the comment marker `ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE` already present.
- `src/pages/Index.tsx` — The only existing full page. Pattern to follow: imports wedding section components, wraps them in `<div className="min-h-screen">`, renders `<Navigation />` at top followed by sections.
- `src/pages/NotFound.tsx` — Reference for how standalone pages are written (minimal, self-contained).
- `src/components/wedding/HeroSection.tsx` — Most directly reusable: uses `framer-motion` animated floral decorations (absolute-positioned PNGs), `font-script` (Cormorant Garamond) for the main heading, `font-body` (Raleway) for subtitle text, `section-cream` background, and the `elegant-divider-long` ornamental line.
- `src/components/wedding/AccommodationSection.tsx` — Most directly applicable for travel/hotel content: uses `bg-cream-dark p-8 rounded-lg` info cards with `font-script` sub-headings inside a `container mx-auto` layout.
- `src/components/wedding/FooterSection.tsx` — Contains reusable footer pattern with floral corner decorations and `font-script` closing text.
- `src/components/wedding/Navigation.tsx` — The fixed top nav. May need an adapted version for the bridesmaid page.
- `src/components/wedding/RSVPSection.tsx` — Shows how to structure a response form with `framer-motion` scroll-triggered animations.

### Configuration

- `tailwind.config.ts` — Extends Tailwind with the full wedding token system.
- `src/index.css` — Defines all custom CSS component classes (`.section-cream`, `.font-script`, `.font-body`, `.elegant-divider`, `.bg-gold`, `.text-brown`, etc.).
- `index.html` — Google Fonts loaded here: Cormorant Garamond and Raleway.

---

## Architecture Context

### Existing Patterns

- **Page = wrapper + wedding section components**: `Index.tsx` composes section components inside `<div className="min-h-screen">`.
- **Scroll-triggered animations**: Every section uses `useRef` + `useInView` from `framer-motion`.
- **Two background tones alternate**: `section-cream` and `section-gold`.
- **Typography hierarchy**:
  - Main headings: `font-script text-brown text-5xl md:text-6xl lg:text-7xl`
  - Sub-headings in cards: `font-script text-brown text-2xl`
  - Body copy: `font-body text-brown-light text-sm leading-relaxed`
  - Labels/overlines: `font-body tracking-[0.3em] uppercase text-sm`
- **Floral decoration assets** in `src/assets/`: `flower-laying-diagonal.png`, `left-bottom-home.png`, `right-bottom-flower.png`, `flower-.png`
- **Info cards**: `bg-cream-dark p-8 rounded-lg` with `font-script` heading and `font-body text-sm` paragraph.
- **Elegant dividers**: `.elegant-divider` (96px) and `.elegant-divider-long` (192px).

### Integration Points

- **Routing**: New `<Route path="/maid-of-honour" element={<MaidOfHonour />} />` added above the `*` catch-all.
- **Asset reuse**: All floral PNGs directly importable.
- **Style reuse**: All CSS utilities and Tailwind tokens globally available.

### Constraints

- Routes defined only in `App.tsx` — no file-based routing.
- Comment marker in `App.tsx`: `{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}`.
- `@` alias resolves to `./src`.
- `framer-motion ^12.33.0` already installed.

---

## Complexity Estimation

**Estimated LOC**: ~120–160 LOC
- `src/pages/MaidOfHonour.tsx` (new file): ~80–110 LOC
- `src/App.tsx` (edit): ~2 LOC

**Recommended path**: `lite`
