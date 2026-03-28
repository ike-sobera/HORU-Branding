# Design System: High-End Editorial for HORU Branding

## 1. Overview & Creative North Star: "The Chromatic Architect"
The Creative North Star for this design system is **"The Chromatic Architect."** This philosophy treats the digital interface as a physical gallery space—intentional, silent, and structurally bold. We move away from the "template" look by utilizing expansive negative space, high-contrast typography scales, and a layout that breathes through asymmetrical balance. 

Instead of centering everything, we lean into off-center alignments and overlapping imagery (utilizing the brand's logo assets) to create a sense of motion and high-end curation. The design doesn't just display information; it archives excellence.

---

## 2. Colors & Surface Philosophy
The color palette is built on a foundation of deep obsidians and a singular, electric violet.

*   **Primary (#7B2FFF):** The "Pulse." Used exclusively for high-priority CTAs and critical brand moments.
*   **Background (#0A0A0A):** The "Void." A deep, rich black that provides the canvas for premium content.
*   **Surface Secondary (#1A1A1A):** The "Structure." Used for cards and secondary sections to provide subtle separation.
*   **Off-white (#F4F2FA):** The "Light." A soft, lavender-tinted white that prevents the harshness of pure white while maintaining high legibility.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or card containment. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `background` provides all the definition needed.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
*   **Base:** `surface` (#0A0A0A)
*   **Sectioning:** `surface-container` (#1A1919)
*   **Floating Cards:** `surface-container-high` (#201f1f)
By nesting a higher-tier surface inside a lower-tier one, we create depth without visual clutter.

### The "Glass & Gradient" Rule
To elevate the "luxury" feel, use Glassmorphism for floating navigation bars or overlay cards. Use semi-transparent versions of `surface` with a 20px-40px backdrop blur. Main CTAs should utilize a subtle radial gradient from `primary` (#7B2FFF) to `primary-dim` (#884cff) to provide a "lit from within" soul.

---

## 3. Typography: Editorial Authority
The type system pairs the geometric precision of **Outfit** with the humanist clarity of **DM Sans**.

*   **Display & Headlines (Outfit):** Set with tight letter-spacing (-2% to -4%). Use `display-lg` (3.5rem) for hero statements to command immediate attention.
*   **Body & Labels (DM Sans):** Focused on readability. Use `body-lg` (1rem) for general descriptions.
*   **Typographic Identity:** The contrast between a massive, bold Headline in Outfit and a small, tracked-out Label in DM Sans creates the "Editorial" look characteristic of high-end fashion and architecture journals.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are largely replaced by **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` section creates a soft, natural lift.
*   **Ambient Shadows:** If a floating element (like a modal or hover state) requires a shadow, it must be extra-diffused. 
    *   *Spec:* `0px 24px 48px rgba(0, 0, 0, 0.4)` – a deep, ambient glow rather than a sharp shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Glassmorphism:** For the "H" Symbol (Image 3) overlays, use a backdrop blur of 16px and a `surface-variant` color at 40% opacity to let the portfolio imagery (Images 4 & 5) bleed through the branding.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (#7B2FFF) with `on-primary` (#3a008b) text. High roundedness (`full`). No border.
*   **Secondary:** Ghost style. No background, `primary` text, and a "Ghost Border" (outline-variant at 20%).
*   **Tertiary:** Text-only with a 1px `primary` underline that expands on hover.

### Cards (Portfolio/Projects)
*   **Visual Style:** No borders. Images (e.g., Image 1 - Lidera) should bleed to the edges of the card.
*   **Interaction:** On hover, the image should subtly scale (1.05x) while the background shifts from `surface-container` to `surface-container-high`.
*   **Spacing:** Use `spacing-6` (2rem) for internal padding to ensure the luxury "breathing room."

### Inputs
*   **Style:** Underline-only or subtle `surface-container-highest` background. 
*   **Focus State:** The bottom border transforms into a `primary` (#7B2FFF) glow. 

### Custom Component: The "Brand Watermark"
A decorative, large-scale implementation of the "H" Symbol (Image 3) placed behind text sections at 5% opacity, acting as a structural anchor for the layout.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical grids. Place a project image on the left and the description on the far right, leaving a "void" in the center.
*   **Do** use large images (Images 4 & 5) as full-bleed backgrounds for specific narrative sections.
*   **Do** apply `text-transform: uppercase` and letter-spacing to `label-sm` elements for a technical, curated feel.

### Don't:
*   **Don't** use 1px solid white or grey borders. They break the immersive "Void" of the black background.
*   **Don't** center-align long blocks of text. Stick to editorial left-alignment.
*   **Don't** use standard "Material" shadows. If it looks like a standard app, it has failed the "luxury" requirement.
*   **Don't** crowd the logo (Image 2). It requires a minimum clear space of `spacing-12` (4rem) on all sides.