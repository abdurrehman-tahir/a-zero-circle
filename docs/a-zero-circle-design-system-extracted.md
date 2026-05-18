# A Zero Circle — Extracted Design System (Current Repo)

Source of truth used for extraction:
- `tailwind.config.ts`
- `app/globals.css`
- `app/layout.tsx`
- `components/ui.tsx`
- `components/ThreeHeroScene.tsx`
- `app/page.tsx`

---

## 1) Brand Positioning & Tone

- Premium, calm, editorial skincare landing style.
- Visual direction uses lilac/plum tones with light mist/lavender surfaces and dark plum anchors.
- Trust-first and ingredient-aware communication.

---

## 2) Color System

### Core Tokens (Tailwind)
- `plum`: `#2D1F5B`
- `violet`: `#8D76C7`
- `lilac`: `#CBB9EA`
- `blush`: `#EEE7FA`
- `orchid`: `#A78BDB`
- `ink`: `#2D2A3A`
- `mist`: `#F7F3FF`
- `mint`: `#EAF7EF`
- `forest`: `#063B16`
- `botanical`: `#1F7A32`

### CSS Variables
- `--plum: #2d1f5b`
- `--violet: #8d76c7`
- `--lilac: #cbb9ea`
- `--blush: #eee7fa`
- `--orchid: #a78bdb`

### Tonal Usage
- **Dark sections:** `plum` (mission band, footer)
- **Light sections:** `mist`, `blush`, pale lilac gradients (hero and card surfaces)
- **Semantic greens:** `forest`, `botanical` retained for trust/safety accents

---

## 3) Typography

### Font Stack
- Heading Serif: `Playfair Display` via `--font-playfair`
- Body Sans: `Inter` via `--font-inter`

### Scale (implemented)
- Hero H1: `text-5xl` mobile, `md:text-7xl`
- Section headings: up to `text-4xl / md:text-5xl`
- Body copy: base with muted opacity for hierarchy
- Label text: `text-xs` uppercase with letter tracking (`tracking-[0.2em+]`)

---

## 4) Layout System

- Max container width: `1240px` (`max-w-container`)
- Global horizontal padding utility:
  - mobile: `px-6`
  - desktop: `md:px-10`
- Section cadence: mainly `py-20`, hero `py-16 md:py-24`
- Corners: `rounded-2xl` to `rounded-[2rem]`/`rounded-3xl`

---

## 5) Surface Styles

### Custom utilities
- `.hero-wash`: large radial pastel hero background wash
- `.lilac-card`: subtle white→lilac gradient card surface
- `shadow-soft`: `0 18px 45px -24px rgba(45, 31, 91, 0.35)`

### Borders
- Soft outlines such as `border-plum/10`, `border-violet/20`, `border-white/60`

---

## 6) Components

### Button
- Pill shape (`rounded-full`), medium weight, subtle lift/hover.
- Primary: dark fill (forest) + white text.
- Secondary: transparent/light with border and dark text.
- Keyboard visible ring support.

### SectionHeading
- Serif heading + optional muted supporting paragraph.

### Reveal
- Framer Motion in-view reveal (fade + vertical translate).
- Respects reduced motion via `useReducedMotion`.

### IconCircle
- 48px pale circular icon container for trust cards.

---

## 7) Iconography

- Library: `lucide-react`
- Style: thin-line icons, minimal, premium.
- Current set includes:
  - trust/safety: `ShieldCheck`, `BadgeCheck`
  - ingredients: `FlaskConical`, `Leaf`
  - concerns: `Sun`, `Search`
  - partnership: `Handshake`
  - premium cue: `Sparkles`

---

## 8) Motion System

### UI Motion
- In-view card/section reveals via Framer Motion.
- Duration around ~0.6s, staggered delays on lists.
- Reduced-motion fallback enabled.

### 3D Motion (Hero)
- React Three Fiber + Drei.
- Capsule geometry with glass-like material for product metaphor.
- Slow oscillation/rotation and floating particles.
- Soft environmental lighting (`Environment preset='sunset'`).

---

## 9) Section Styling Pattern (Current)

1. Sticky translucent header on light mist.
2. Hero on lilac radial wash + 3D product visual.
3. Neutral content sections for problem/solution.
4. Trust pillars on pastel-lilac surface cards.
5. Curation + transformation card split layout.
6. Dark plum mission quote band.
7. Story and credibility sections with soft tones.
8. Gradient “Ingredient Index” feature teaser.
9. Dark plum footer.

---

## 10) Accessibility Patterns Present

- Focus-visible ring on buttons.
- Color contrast improved through dark-on-light and light-on-dark alternation.
- One H1 usage in hero.
- Reduced motion handling in reveal components.

---

## 11) Export-Ready Token Block (for other AI tools)

```json
{
  "colors": {
    "plum": "#2D1F5B",
    "violet": "#8D76C7",
    "lilac": "#CBB9EA",
    "blush": "#EEE7FA",
    "orchid": "#A78BDB",
    "ink": "#2D2A3A",
    "mist": "#F7F3FF",
    "mint": "#EAF7EF",
    "forest": "#063B16",
    "botanical": "#1F7A32"
  },
  "typography": {
    "heading": "Playfair Display",
    "body": "Inter"
  },
  "layout": {
    "maxWidth": "1240px",
    "sectionPaddingY": "80px",
    "sectionPaddingXMobile": "24px",
    "sectionPaddingXDesktop": "40px"
  },
  "radius": {
    "card": "24px-32px",
    "button": "9999px"
  },
  "shadow": {
    "soft": "0 18px 45px -24px rgba(45, 31, 91, 0.35)"
  },
  "motion": {
    "uiReveal": "fade + y translate, ~0.6s",
    "hero3D": "slow float + rotation"
  },
  "icons": {
    "library": "lucide-react",
    "style": "thin line, minimal"
  }
}
```

