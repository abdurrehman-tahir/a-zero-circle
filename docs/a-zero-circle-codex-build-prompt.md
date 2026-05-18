# Codex Prompt — Build A Zero Circle Landing Page

You are a senior frontend engineer, luxury skincare brand designer, and motion designer.

Build a clean, posh, premium landing page website for **A Zero Circle**, a women-led Korean skincare platform in Pakistan.

This is **not** an e-commerce store yet. It is a brand trust and visibility landing page for customers, Korean partner brands, vendors, and future collaborators.

---

## Source Files To Use

Read and follow these files carefully:

1. `/docs/a-zero-circle-website-copy.md`
   - Contains the complete website copy, SEO metadata, page sections, claim-safe wording, CTAs, and brand positioning.

2. `/docs/a-zero-circle-design-system.md`
   - Contains the visual direction, color palette, typography, layout system, component style, imagery direction, and animation mood.

Use both files as the source of truth.

If these files are not present, stop and tell me exactly which files are missing.

Do not invent unsafe claims. Do not say “all products are halal” unless the copy explicitly says so. Use “halal-aware”, “halal-conscious”, “ingredient-screened”, “authentic sourcing”, and “selected for Pakistani skin needs”.

Avoid “whitening” language. Use glow, clarity, barrier support, sensitive skin, pigmentation support, sunscreen comfort, and ingredient transparency.

---

# Goal

Create a premium, modern, soft botanical skincare landing page that feels:

- clean
- expensive
- calm
- trustworthy
- Korean skincare inspired
- women-led
- ingredient-aware
- suitable for the Pakistani market
- editorial and posh, not generic ecommerce

The site should look like a polished brand launch page, not a template.

---

# Tech Requirements

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Three.js using `@react-three/fiber` and `@react-three/drei`
- Framer Motion for non-Three.js UI animations
- Responsive layout for desktop, tablet, and mobile
- SEO metadata from the copy file

If this is an existing project, inspect the structure first and fit into the existing architecture. If it is empty, create a clean Next.js App Router structure.

Install only the packages required for this implementation.

---

# Visual Direction

Use the design system file, but do not copy the reference website exactly.

Design language:

- soft mint and warm off-white backgrounds
- deep forest green CTA and accent color
- elegant serif headings
- clean sans-serif body text
- editorial whitespace
- rounded pill buttons
- subtle botanical details
- ingredient-focused cards
- premium skincare product atmosphere
- no harsh colors
- no clutter
- no stocky, cheap-looking marketplace layout

Suggested fonts:

- Headings: `Playfair Display`, `Cormorant Garamond`, or `DM Serif Display`
- Body: `Inter`, `Manrope`, or `DM Sans`

Use Google Fonts or local font imports cleanly.

---

# Page Sections To Build

Build one full landing page using the copy file.

Required sections:

## 1. Header / Navigation
- Logo text: A Zero Circle
- Links: Home, About, Ingredient Index, Partners, Contact
- CTA: Partner With Us
- Clean, minimal, sticky or soft transparent header
- Mobile hamburger menu if needed

## 2. Hero Section
- Main headline from copy
- Subheadline from copy
- Trust line
- Primary CTA: Explore Our Curation
- Secondary CTA: Partner With Us
- Add a premium Three.js visual on the right or background

## 3. Problem Section
- Explain why buying Korean skincare safely in Pakistan is confusing

## 4. Solution Section
- Introduce A Zero Circle as the trust-first solution

## 5. Trust Pillars
Use the trust pillars from the copy:
- Authentic Korean Products
- Ingredient-Screened Selection
- Halal-Aware Curation
- Selected for Pakistani Skin Needs
- Fair and Competitive Pricing

## 6. Product Categories / Curation Preview
Use these categories:
- Sunscreens
- Acne & Pore Care
- Brightening & Pigmentation
- Barrier Repair
- Hydration & Glow

This should not behave like a cart or shop. It should be a curated preview.

## 7. Mission Quote Band
- Dark green full-width quote section
- Use founder-style mission copy from the copy/design system
- Make it feel premium and emotionally grounded

## 8. Brand Story
- Women-led
- Started by a stay-at-home mom
- Equal opportunity and empowerment angle

## 9. Backed by T&M Co.
- Parent company credibility
- Nearly a decade of experience
- Multiple businesses, imports, technology, and 360-degree product services

## 10. Partner / Vendor Section
- Position A Zero Circle as a Pakistan launch partner for Korean skincare brands
- CTA: Partner With A Zero Circle

## 11. Coming Soon: A Zero Circle Ingredient Index
- Make this visually strong
- It should feel like a future product teaser
- Mention searchable product database, ingredient analysis, acne/irritation flags, halal-conscious notes

## 12. Educational / Inclusivity Section
- Use the copy about better skincare information and inclusivity
- Keep it concise and elegant

## 13. Final CTA
- Strong closing section with buttons

## 14. Footer
- Footer copy from the copy file
- Links: Privacy Policy, Terms, About, Ingredient Index, Partner With Us, Contact, Instagram, WhatsApp

---

# Three.js Animation Requirements

Use Three.js tastefully. The animation must feel premium, soft, and lightweight.

Create a hero visual such as:

- floating translucent skincare serum droplets
- soft glass-like circular orb
- subtle ingredient particles
- slow botanical leaf-like shapes
- gentle rotating product-inspired abstract form
- pale green / transparent material
- soft lighting

Do not use:
- aggressive movement
- gaming-style animation
- neon cyber visuals
- heavy 3D model dependency
- huge textures
- distracting full-page canvas

Animation behavior:

- very slow movement
- smooth easing
- low distraction
- works as background or hero-side visual
- should not hurt readability
- disable or simplify on mobile if needed
- respect `prefers-reduced-motion`

Performance requirements:

- keep geometry lightweight
- avoid huge textures
- no unnecessary post-processing
- lazy-load 3D component if useful
- fallback gracefully if WebGL is unavailable

---

# UI Animation Requirements

Use subtle UI animations:

- hero text fade/slide in
- cards reveal on scroll
- soft hover lift on cards
- CTA hover transitions
- slow floating botanical accents
- trust pillars staggered reveal
- no bouncy startup-style animations
- no excessive parallax
- no animation that makes reading harder

Keep everything refined.

---

# Components To Create

Create reusable components where useful:

- `Header`
- `Hero`
- `ThreeHeroScene`
- `SectionHeading`
- `TrustPillars`
- `CategoryCards`
- `MissionBand`
- `BrandStory`
- `ParentCompany`
- `PartnerSection`
- `IngredientIndexTeaser`
- `EducationInclusivity`
- `FinalCTA`
- `Footer`
- `Button`
- `Card`

Keep the code clean and maintainable.

---

# Styling Rules

Use Tailwind CSS.

Define design tokens in Tailwind config or CSS variables:

- forest green
- botanical green
- soft mint
- pale green
- warm off-white
- charcoal
- muted grey

Use:

- generous section padding
- max-width container around 1180px–1280px
- rounded-2xl or rounded-3xl cards
- soft shadows only where needed
- thin borders with low opacity
- serif headings
- readable line-height
- mobile-first responsive layout

Do not overuse gradients. If using gradients, keep them subtle and premium.

---

# Content Rules

Use the provided copy, but improve microcopy only if needed for flow.

Important claim rules:

- Use “halal-aware” or “halal-conscious”
- Use “ingredient-screened”
- Use “authentic sourcing”
- Use “selected for Pakistani skin needs”
- Do not say “100% safe”
- Do not say “safe for Pakistani DNA”
- Do not say “all products are halal”
- Do not say “dermatologist approved” unless provided
- Do not use “whitening”
- Do not use fear-based marketing

---

# SEO Requirements

Add proper metadata:

- Title
- Description
- Keywords
- Open Graph title/description
- Clean semantic headings
- One H1 only
- Descriptive section structure
- Accessible buttons and links

Use the SEO keywords from the website copy file naturally. Do not keyword stuff.

---

# Accessibility Requirements

- Good color contrast
- Keyboard accessible nav and buttons
- Proper aria labels where needed
- Responsive text sizing
- Reduced motion support
- Meaningful alt text for images/placeholders
- No text hidden in inaccessible images

---

# Image Handling

If actual brand/product images are not available, use elegant placeholders or CSS/Three.js abstract visuals.

Do not use random copyrighted product images.

Use placeholder blocks with comments where final images should be added later, for example:

- `/public/images/skincare-flatlay.jpg`
- `/public/images/women-led-founder.jpg`
- `/public/images/korean-skincare-products.jpg`
- `/public/images/ingredient-texture.jpg`

Create the layout so images can be replaced easily later.

---

# Quality Bar

The final result should look like a premium brand launch page.

Before finishing, check:

- Is it responsive?
- Does the hero feel premium?
- Is the Three.js animation subtle and performant?
- Does the page avoid generic marketplace design?
- Does the copy avoid unsafe claims?
- Is the CTA flow clear for customers and partners?
- Does the site explain the coming Ingredient Index clearly?
- Does the site feel trustworthy for Pakistani customers and Korean partner brands?

---

# Output Expectations

After implementation:

1. Tell me exactly what files you created or changed.
2. Tell me how to run the site locally.
3. Mention any packages installed.
4. Mention any placeholders that need final brand assets.
5. Mention any decisions you made because source assets were missing.
6. Keep the final summary concise.

Now implement the website.
