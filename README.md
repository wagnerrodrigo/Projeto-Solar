# Projeto Solar — Design System for Solar Energy Landing Pages

Design system extracted from the OpenDesign prototype **"Landing Page Energia Solar"** (id `27d8debd-3bb6-4b5c-9fac-6f44e52da2b6`). Reusable package for building conversion-focused landing pages in the Brazilian solar-energy market (pt-BR).

## Package Guide — at a glance

- **Product Overview:** this package documents the **source product** — a solar-energy landing page — and its **Primary surfaces** (hero, trust strip, steps, payback, benefits, simulation, FAQ, footer) and **Core capabilities** (system sizing, savings/payback estimation, quote requests, homologation). See the Product Overview section below.
- **Product Context:** single-page conversion prototype, pt-BR, for residential and commercial photovoltaic sales.
- **Source/context references:** `context/source-context.md` (handoff contract) and `context/provenance/notes.md` (decision log).
- **Package Contents:** `DESIGN.md`, `colors_and_type.css`, `SKILL.md`, `preview/`, `ui_kits/app/`, `assets/`, `context/`.
- **Preview cards:** six focused cards under `preview/` (see the Preview Manifest section).
- **Preserved assets/fonts/build artifacts:** licensed photography in `assets/photography/`, brand marks and icons in `assets/brand/` and `assets/icons/`; no `build/` or `fonts/` artifacts exist yet.
- **ui_kits/app:** applied landing page (`index.html`) and component specimen (`components.html`) on the modular `ui_kits/app/components/` CSS.
- **Reuse & review workflow:** follow the workflow at the end of this file; end with the design-system package audit.

---

## Product Overview

**The source product** provides a single-page conversion landing that helps residential and commercial customers in Brazil choose and buy photovoltaic systems: a visitor enters monthly consumption (kWh/mês) and state (UF), receives a savings-and-payback simulation, and can request a quote with a technical site visit. Product context: the brand sells lower electric bills ("até −97%"), predictable payback (3–6 anos) and energy independence.

**Primary surfaces:** hero with savings simulation, trust strip with statistics, contracting steps, payback projection, benefits cards, a dark simulation section with a quote form, FAQ accordion, and a conversion footer.

**Core capabilities:** system sizing from consumption/tariff, savings and payback estimation, financing lines, grid homologation with the local utility, and follow-up of monthly generation. All copy is Brazilian Portuguese.

> **Evidence status:** the source project was handed off as a metadata shell (no copied HTML/images). Colors, type, spacing, and components were inferred from the project domain and profile — see `context/provenance/notes.md`. Numbers shown in previews are illustrative examples marked with `*`.

---

## Source & Context References

Source and context references for this package:

| Reference | Path |
|---|---|
| Source handoff contract | [`context/source-context.md`](./context/source-context.md) |
| Extraction decision log | [`context/provenance/notes.md`](./context/provenance/notes.md) |
| Visual reference (authoritative) | [`DESIGN.md`](./DESIGN.md) |
| Token & component CSS | [`colors_and_type.css`](./colors_and_type.css) |
| Skill usage instructions | [`SKILL.md`](./SKILL.md) |

## Package Contents

| Path | Role |
|---|---|
| [`DESIGN.md`](./DESIGN.md) | Reference documentation: theme, color, type, spacing, layout, components, motion, voice, anti-patterns, provenance |
| [`colors_and_type.css`](./colors_and_type.css) | Full token set (OKLCh + hex) and base component CSS (buttons, cards, forms, accordion, chips) |
| [`style.css`](./style.css) | Landing page stylesheet — tokens + components + layout + responsive (source of truth for `index.html`) |
| [`script.js`](./script.js) | Simulation engine — validates form, calculates 5 metrics from consumption + UF with real tariff/irradiation data for all 27 Brazilian states |
| [`SKILL.md`](./SKILL.md) | Discoverable skill package (YAML frontmatter) for agents generating artifacts with this system |
| [`index.html`](./index.html) | Composed landing page — loads `style.css` + `script.js`, uses all assets from `assets/` |
| [`preview/`](./preview/) | Focused review cards — see the Preview Manifest below |
| [`ui_kits/app/`](./ui_kits/app/) | Applied interface kit: functional landing page + component specimen |
| [`assets/brand/`](./assets/brand/) | Brand marks (logo-mark.svg, logo-horizontal.svg) |
| [`assets/icons/`](./assets/icons/) | Functional SVG icons (stroke, `currentColor`) |
| [`assets/photography/`](./assets/photography/) | Licensed real photography (Wikimedia Commons) with credits |
| [`context/`](./context/) | Source handoff and provenance notes |

## Preview cards and workflow

Review the design system through the preview cards in `preview/` (see the [Preview Manifest](#preview-manifest)) and the applied kit in `ui_kits/app/`.

---

## Preview Manifest

Every generated `preview/*.html` card, its review purpose, and what source-based evidence it demonstrates:

| Card | Path | Review purpose | Demonstrates |
|---|---|---|---|
| Preview index (hub) | [`preview/index.html`](./preview/index.html) | Navigate all cards and the applied UI kit | Loads `colors_and_type.css` and links every card |
| Colors | [`preview/colors-primary.html`](./preview/colors-primary.html) | Validate palette, semantics, contrast pairs | `--bg/--surface/--fg/--muted/--border/--accent`, `--primary/--success/--warning/--danger/--info`, `--on-accent/--on-primary` |
| Typography | [`preview/typography-specimens.html`](./preview/typography-specimens.html) | Validate display/body/mono scale and families | `--font-display/-body/-mono`, full type scale tokens |
| Spacing, radius, shadows | [`preview/spacing-tokens.html`](./preview/spacing-tokens.html) | Validate 4px scale, radii, elevation | `--space-*`, `--radius-*`, `--shadow-*` |
| Components | [`preview/components-buttons.html`](./preview/components-buttons.html) | Validate components and interaction states | `.btn--primary/secondary/ghost`, `.card`, `.chip`, `.accordion`, `.input` |
| Brand assets | [`preview/brand.html`](./preview/brand.html) | Validate logo marks and icons against real files | `assets/brand/*.svg`, `assets/icons/*.svg` |
| Applied UI kit | [`ui_kits/app/index.html`](./ui_kits/app/index.html) | Inspect the composed landing surface | `colors_and_type.css` + `ui_kits/app/components/*.css`, `assets/photography/*.jpg` |

---

## Preserved Assets, Fonts, Build Artifacts & Source Examples

- **Real photography (licensed):** `assets/photography/` — casa brasileira com microgeração fotovoltaica no telhado, em Sorriso, Mato Grosso (Wikimedia Commons, CC BY-SA 4.0). Full credits and reuse terms in [`assets/photography/README.md`](./assets/photography/README.md). An optimized web copy (`casa-sorriso-mt-1280.jpg`) sits alongside the original download.
- **Brand & icons (authored):** `assets/brand/` and `assets/icons/` — sun-over-roof mark, horizontal logo, and five functional icons, created by the system from the domain; they are intentional assets, not extracted code (no source survived).
- **Fonts:** not bundled — Space Grotesk, DM Sans, and IBM Plex Mono load from the environment or from `fonts/` once licensed files are supplied. Fallback stacks are declared in `colors_and_type.css`.
- **Build artifacts:** none were captured (source metadata shell); when runtime/build assets surface in a future extraction, they belong under root `build/` with their original filenames and a `preview/brand-assets.html` reference.
- **Source examples:** no original HTML/component code survived the handoff. Substantive authored examples live in `ui_kits/app/index.html` and `ui_kits/app/components.html` as reconstructions, not stubs.

---

## Simulation Engine

The `script.js` module powers the "Simule sua economia" form with real calculations based on user input:

| Input | Description |
|---|---|
| **Consumo mensal (kWh/mês)** | Average monthly electricity consumption from the user's bill |
| **Estado (UF)** | Brazilian state — determines tariff and solar irradiation |

### Calculation formulas

| Metric | Formula | Source |
|---|---|---|
| **Sistema (kWp)** | `consumo / (irradiacao × 30 × 0.75)` | Considers 75% system efficiency and daily irradiation average |
| **Economia mensal (R$)** | `consumo × tarifa × 0.95` | 95% offset of the electricity bill |
| **Investimento (R$)** | `sistema_kWp × 4.500` | Average market cost ~R$ 4.500/kWp installed |
| **Payback (anos)** | `investimento / (economia × 12)` | Simple payback in years |
| **CO₂ evitado (t/ano)** | `sistema_kWp × 0.3` | ~0.3 t CO₂/kWp avoided per year |

### Data sources

- **Tariffs:** Average residential tariffs per UF (ANEEL 2024 reference values)
- **Irradiation:** Daily global horizontal irradiation averages (kWh/m²/day) per state (CRESESB/LABSOLAR)
- All 27 Brazilian states are covered in both the `<select>` dropdown and the calculation table

### Result display

On submission, 5 result cards appear below the form:
- **Tamanho do sistema** — amber accent, calculated in kWp
- **Economia mensal** — white on dark, in BRL
- **Investimento estimado** — light muted, in BRL
- **Payback** — green success color, in years
- **CO₂ evitado por ano** — light muted, in tonnes

---

## ui_kits/app/ — Applied Interface Kit

`ui_kits/app/` mounts the system on a real landing surface:

| File | Role |
|---|---|
| `index.html` | Composed landing page — hero with licensed photography, trust strip, steps, payback chart, benefits, simulation form (validation + "Calculando…" state), FAQ accordion, conversion footer. Loads `../../colors_and_type.css` then `components/index.css`. |
| `components.html` | Component specimen — extractable landing blocks with reference markup and CSS notes. |
| `components/*.css` | Modular CSS: `base.css`, `header.css`, `hero.css`, `blocks.css`, `responsive.css`, aggregated by `index.css`. |
| `README.md` | Kit usage guide (structure, reuse workflow, design notes, source basis). |

---

## Review Workflow

Reuse and review workflow for consuming and regenerating this design-system package:

1. **Reuse:** copy `colors_and_type.css` verbatim as the first `<style>`; pull landing blocks from `ui_kits/app/components.html`; localize copy to pt-BR; replace `*`-marked metrics with real numbers; acquire and localize real solar imagery under `assets/`.
2. **Review:** open `preview/index.html` and walk the cards in order (Colors → Typography → Spacing → Components → Brand), then open `ui_kits/app/index.html` to review the composed surface and its interactions.
3. **Verify:** run `"$OD_NODE_BIN" "$OD_BIN" tools connectors design-system-package-audit --path . --fail-on-warnings` before closing a package change.

## Conventions

- Tokens in `oklch()` with hex equivalents in `colors_and_type.css`; never invent colors.
- Amber (`--accent`) is the action metal, at most twice per viewport.
- Text on amber uses `--on-accent` (dark), never white.
- `data-od-id="kebab-case-id"` on sections, CTAs, and repeated cards.
- All user-visible content in pt-BR; brand names and technical identifiers preserved as-is.