---
name: Obsidian Kinetic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#111111'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#bfc7d5'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#89919e'
  outline-variant: '#3f4753'
  surface-tint: '#9fcaff'
  primary: '#9fcaff'
  on-primary: '#003259'
  primary-container: '#0099ff'
  on-primary-container: '#002f54'
  inverse-primary: '#0061a5'
  secondary: '#c1c1ff'
  on-secondary: '#1400a8'
  secondary-container: '#2f29cf'
  on-secondary-container: '#b0b1ff'
  tertiary: '#ffb785'
  on-tertiary: '#502500'
  tertiary-container: '#e77600'
  on-tertiary-container: '#4b2200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#9fcaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497e'
  secondary-fixed: '#e1dfff'
  secondary-fixed-dim: '#c1c1ff'
  on-secondary-fixed: '#09006b'
  on-secondary-fixed-variant: '#2c25cc'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb785'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  surface-canvas: '#000000'
  surface-subtle: '#080808'
  surface-elevated: '#161616'
  surface-overlay: rgba(255, 255, 255, 0.05)
  border-hairline: rgba(255, 255, 255, 0.08)
  border-subtle: '#222222'
  text-primary: '#FFFFFF'
  text-secondary: '#999999'
  text-tertiary: '#666666'
  glow-cobalt: rgba(0, 153, 255, 0.35)
  glow-indigo: rgba(91, 91, 247, 0.25)
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 68px
    letterSpacing: -0.035em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 46px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies high-craft digital minimalism fused with luminous glassmorphism and technical precision. Designed for elite creators, product designers, and engineering-forward teams, the aesthetic projects ultimate polish, speed, and creative superpower.

The visual mood is anchored in deep cosmic voids punctuated by hairline architectural lines, subtle tonal depth, and sharp kinetic bursts of electric cobalt and indigo. The interface feels weightless yet grounded—evoking the surgical precision of an advanced IDE combined with the tactile beauty of high-end consumer hardware.

## Colors

The palette operates in pure pitch-black space (`#000000`) rather than standard slate grays, creating maximum dynamic range against crisp white typography and luminous interactive elements.

- **Canvas & Obsidian Layers:** Hierarchy is built through meticulous micro-steps of darkness: canvas `#000000`, inset wells `#080808`, bento card containers `#111111`, and raised hover states `#161616`.
- **Electric Accent:** The primary chromatic hue `#0099FF` acts as a beam of focused intelligence, supported by a rich digital indigo `#5B5BF7`. These are used primarily for interactive active states, selection handles, and soft atmospheric backlights.
- **Hairline Chrome:** Borders strictly avoid flat opacity blocks, relying on `rgba(255, 255, 255, 0.08)` to simulate laser-etched glass edges.

## Typography

Typography prioritizes extreme legibility, tight tracking, and optical neutrality. 

- **Display & Headings:** Set in tight, negative-tracked `Inter` (`-0.03em` to `-0.035em`) to evoke Swiss modernist layout discipline. Headings feel sculpted, direct, and unadorned.
- **Body:** Neutral and functional with high contrast `#FFFFFF` for priority messaging and muted `#999999` for descriptions.
- **Monospace Elements:** `JetBrains Mono` provides authentic technical craft for AI prompts, agent status tags, code snippets, and fine metadata readouts.

## Layout & Spacing

The layout philosophy follows a disciplined modular bento-box grid anchored inside a maximum 1200px container.

- **Grid Architecture:** 12-column desktop fluid layout with `1.5rem` gutters collapsing to an 8-column tablet and a single-column layout on mobile with `0.75rem` gutters.
- **Bento Flow:** Cards snap to consistent height modules and span 4, 6, 8, or 12 columns, maintaining geometric balance.
- **Breathing Room:** Major sections utilize extensive vertical gaps (`space-2xl` to `5rem`), ensuring dark negative space serves as an active visual frame for luminous interactive components.

## Elevation & Depth

Depth is established via structural tonal tiers and translucent atmospheric diffusion rather than traditional drop shadows:

1. **Base Tier (Ground):** Pure `#000000` canvas.
2. **Container Tier (Level 1):** Solid `#111111` with a `1px` border of `rgba(255, 255, 255, 0.08)`. No outer shadow.
3. **Floating Glass Tier (Level 2):** Translucent backdrop-filtered surfaces (`rgba(17, 17, 17, 0.75)` with `backdrop-filter: blur(24px)`), bound by subtle highlight strokes (`rgba(255, 255, 255, 0.15)` top edge, `rgba(255, 255, 255, 0.05)` bottom edge).
4. **Active Halo / Luminous Depth:** Interactive focal points (e.g., active AI prompt bars, selection widgets) cast wide, double-radius blurred chromatic glows (`box-shadow: 0 0 60px -10px rgba(0, 153, 255, 0.4), 0 0 100px 0px rgba(91, 91, 247, 0.25)`).

## Shapes

The design system maintains a refined balance between structured architectural containers and ergonomic pill geometries:

- **Bento Cards & Containers:** Medium rounded corners (`16px` to `20px` / `rounded-lg`) provide smooth contouring without feeling bubbly.
- **Pill Primitives:** Buttons, navigation bars, chip filters, and prompt command inputs use full stadium/capsule shapes (`9999px` radius) to signify interactive utility and floating mobility.
- **Micro Tags & Inputs:** Inner inputs and tags default to standard `8px` (`rounded`) corners to fit snugly within cards.

## Components

### Buttons
- **Primary Pill:** Background `#FFFFFF`, text `#000000`, font weight `500`. On hover, slight scale (`1.02`) and high-opacity glow.
- **Secondary Glass Pill:** Background `rgba(255, 255, 255, 0.06)`, border `1px solid rgba(255, 255, 255, 0.1)`, text `#FFFFFF`. Hover shifts background to `rgba(255, 255, 255, 0.12)`.
- **Text Link:** `#999999` with chevron icon, transitions to `#FFFFFF` on hover.

### Floating AI Prompt Bar
- Capsule container floating above the layout with `backdrop-filter: blur(32px)` and subtle glass sheen.
- Enclosed by an active radial gradient halo (`#0099FF` blending to `#5B5BF7`) blurred behind the surface.
- Contains inline model selectors, clean monospaced placeholder text, and pill-shaped icon triggers.

### Bento Cards
- Inset container `#111111` with a hairline `1px` border of `rgba(255, 255, 255, 0.08)`.
- Clean content hierarchy: top preview window (interactive canvas, code panel, or visual graphic), bottom section containing crisp title and secondary description.
- Hover states subtly brighten container border to `rgba(255, 255, 255, 0.2)`.

### Chips & Badges
- Stadium pill shape, `12px` typography, `rgba(255, 255, 255, 0.05)` fill, `1px solid rgba(255, 255, 255, 0.1)` border.
- Active states glow with `#0099FF` indicator dots or subtle tinted backgrounds.

### Inputs & Text Areas
- Background `#080808`, border `1px solid #222222`. Focus state shifts border to `#0099FF` with a localized diffuse shadow `0 0 0 1px #0099FF, 0 0 16px rgba(0, 153, 255, 0.25)`.
- Placeholder text in `#666666`.