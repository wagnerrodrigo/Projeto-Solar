# ui_kits/app — Applied Interface Kit (Projeto Solar Landing Page)

Applied kit that mounts the **Projeto Solar** design system on a real conversion landing page. Tokens come from `../../colors_and_type.css` (loaded first); layout and block styles are split into modular files under `ui_kits/app/components/`.

## Reusable package — at a glance

- **Kit structure:** `index.html` (composed landing), `components.html` (specimen), and the modular `components/*.css` stylesheets.
- **Component files:** `components/index.css`, `base.css`, `header.css`, `hero.css`, `blocks.css`, `responsive.css`.
- **Usage workflow:** copy the tokens, pull blocks from `components.html`, replace `*`-marked metrics, localize copy, run the audit.
- **Design notes:** interaction states, imagery handling, markup and contrast constraints.
- **Source basis:** reconstructed from the inferred system of "Landing Page Energia Solar"; original HTML was not preserved.

## Source basis

This kit reconstructs the primary surfaces of the source project "Landing Page Energia Solar" (hero → trust strip → steps → payback → benefits → simulation → FAQ → footer). The original prototype shipped as a metadata shell with no copied HTML, so the surfaces are rebuilt from the inferred tokens and rules of `../../DESIGN.md`. Full decision log: `../../context/provenance/notes.md`.

## Structure

The kit is split into a composed landing page, a component specimen, and a modular stylesheet directory:

| File | Role |
|---|---|
| `index.html` | Composed landing page — mounts the full surface using the modular component files below, real licensed photography (`../../assets/photography/`), brand marks (`../../assets/brand/`), icons (`../../assets/icons/`). |
| `components.html` | Component specimen — extractable landing blocks (header, trust strip, steps, dark simulation section, footer) with reference markup. |
| `components/index.css` | Aggregator — `@import`s every modular stylesheet below. |

## Component files

| File | Role |
|---|---|
| `components/index.css` | Aggregator entry point. |
| `components/base.css` | Page scaffolding: root variables override, body, container, section headers. |
| `components/header.css` | Sticky translucent header + navigation with a single primary CTA. |
| `components/hero.css` | Hero (7/5 asymmetry), media aspect, anchored badge overlay, trust strip. |
| `components/blocks.css` | Steps, payback chart (filled bars), benefits, dark simulation section, FAQ, footer. |
| `components/responsive.css` | Collapsing grids at 1000px/640px; no horizontal scroll. |

## How to reuse

1. Copy `../../colors_and_type.css` into your project as the first `<style>`; then either `@import` the `components/index.css` files or inline the block styles you need.
2. Pull the blocks from `components.html` and assemble the page in the funnel order above.
3. Replace every `*`-marked metric (`R$ 480/mês`, `4,1 anos`, `2,4 t CO₂`) with real business numbers — these are illustrative examples.
4. Swap the photography for real product images when available; current images are licensed via Wikimedia Commons with credits in `../../assets/photography/README.md`.

## Usage workflow

- Start from `index.html` as the canonical mount; copy it to a new artifact when you need the full landing structure.
- For single blocks, copy the markup from `components.html` and adjust `data-od-id` values to the new context.
- Localize all user-visible copy to pt-BR; keep brand names and technical identifiers as-is.
- Run the package audit before closing: `"$OD_NODE_BIN" "$OD_BIN" tools connectors design-system-package-audit --path . --fail-on-warnings`.

## Design notes

- **Interactions:** the simulation form validates numeric consumption, shows an inline error with focus, and toggles a "Calculando…" state; the FAQ uses native `<details>` with rotating chevron; navigation is anchor-based (no `scrollIntoView`); `prefers-reduced-motion` is honored by `../../colors_and_type.css`.
- **Imagery:** hero at 1800×1205 and secondary at 1400×1050, with declared `width`/`height` to prevent layout shift; `object-fit: cover` reserved for the decorative hero fill; the badge overlay is anchored to a corner with frosted-glass + shadow.
- **Markup:** `data-od-id` on sections, CTAs, and repeated cards; all user-visible copy is pt-BR.
- **Constraints:** one solid primary button per viewport; amber accent at most twice per viewport; hover never lightens the foreground.
- **Generic role mapping:** for cross-package comparison, the kit surfaces map onto the reusable component vocabulary as follows: `index.html` is the page **App** shell that composes the blocks; the dark simulation section hosts the **Composer** role (the savings/quote form); each block embedded from `components.html` renders as a **PreviewCard** in `preview/index.html`.