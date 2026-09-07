---
name: projeto-solar-energia-solar
description: Projeto Solar design system for solar-energy landing pages in Brazil (pt-BR). Use when building landing pages, conversion prototypes, or marketing surfaces for photovoltaic residential/commercial brands, or when applying the "Projeto Solar" visual language generated from OpenDesign project "Landing Page Energia Solar".
user-invocable: true
---

# Projeto Solar — Design System for Solar Energy Landing Pages

> Category: Project Design System · Surface: web · Source: OpenDesign project "Landing Page Energia Solar"

## What is inside

A reusable design-system package for conversion-focused landing pages in the solar-energy market:

- **`DESIGN.md`** — the authoritative visual reference: theme, color, typography, spacing, layout, components, motion, voice, and anti-patterns.
- **`colors_and_type.css`** — the token layer (colors in OKLCh + hex equivalents, typography, spacing, radius, shadows) and base component CSS. Copy it verbatim as the first `<style>` of any artifact.
- **`preview/*.html`** — focused review cards: colors, typography, spacing, components, and brand assets.
- **`ui_kits/app/`** — applied interface kit: a functional landing page (`index.html`) plus a component specimen (`components.html`), both consuming `../../colors_and_type.css` and the modular `ui_kits/app/components/*.css` files.
- **`assets/`** — brand marks (`assets/brand/`), SVG icons (`assets/icons/`), and licensed real photography (`assets/photography/`).

## Source context

**Source project:** "Landing Page Energia Solar" (`27d8debd-3bb6-4b5c-9fac-6f44e52da2b6`) — a web prototype (plugin `example-web-prototype`) of a single-page conversion landing for selling photovoltaic systems to residential and commercial customers in Brazil.

**Primary surfaces:** hero with savings simulation, trust strip with statistics, contracting steps, payback projection, benefits cards, dark simulation section with a quote form, FAQ accordion, conversion footer.

**Core capabilities:** system sizing from monthly consumption/tariff, savings and payback estimation, visit scheduling, and grid homologation with the local utility.

**Evidence status:** the source project was handed off as a metadata shell with no copied HTML or assets, so the visual language was inferred from the project's domain and profile (solar PV, pt-BR, conversion landing). See `context/provenance/notes.md` for the full decision log, and `context/source-context.md` for the handoff contract.

## When to use this skill

Use this skill when the task involves:

- A solar-energy landing page, quote/savings simulation flow, or conversion prototype (residential or commercial).
- Applying the "Projeto Solar" visual language to marketing surfaces, review/preview cards, or applied UI kits in this workspace.
- Extending the design system (new components, tokens, previews) while keeping the palette and type system stable.

## How to use

1. Read `DESIGN.md` for the visual direction, then copy `colors_and_type.css` verbatim as the **first** `<style>` element of the artifact. Never rewrite tokens or invent colors outside the palette.
2. Reuse blocks from `ui_kits/app/components.html` and the modular CSS in `ui_kits/app/components/`; localize all user-visible copy to pt-BR and replace the illustrative metrics (marked with `*`) with the real business numbers.
3. Check `preview/*.html` for per-topic reference specimens and confirm hover/focus/active states and contrast before delivery.
4. For imagery, acquire real solar photography (panels, houses, roofs) and localize it under `assets/`; never fabricate or generate factual referents.
5. Keep this SKILL.md, `README.md`, `DESIGN.md`, and `ui_kits/app/README.md` in sync with the final package structure.

## Design system highlights

High-signal rules grounded in the inferred source evidence (see `context/provenance/notes.md`):

- **Color:** warm near-white backgrounds (`--bg` = `#fdfdfc`), deep blue primary (`--primary` = `#0e294a`), a single amber accent (`--accent` = `#e2a000`) used at most twice per viewport. Tokens are defined in OKLCh with hex equivalents in `colors_and_type.css`.
- **Typography:** display Space Grotesk, body DM Sans, mono IBM Plex Mono (for technical values like `kWp`, `kWh/mês`, payback). Display and body are different families.
- **Layout:** 12-column grid collapsing to 1 column on mobile (no horizontal scroll), 1160–1200px container, hero asymmetry 7/5, one primary CTA per viewport.
- **Components:** amber primary button with dark text (`--on-accent`), blue outline secondary, ghost; cards with `--radius-lg` and hover lift; 48px inputs with amber focus ring; native `<details>` FAQ accordion; mono numerals for savings figures.
- **Interaction states:** hover moves the background lightness ±0.06–0.12 on the OKLCh L channel and never lightens the foreground; `:focus-visible` ring is always defined; disabled is the only state allowed to reduce contrast.
- **Anti-patterns:** no purple/AI-gloss gradients, no emoji-as-icon, no "colored vertical bar + rounded card" callouts, no invented metrics, no beige default backgrounds, no more than one solid button per action/viewport.

## Verification

Before delivering: closed tags and working primary flow; text contrast ≥ 4.5:1 and icons ≥ 3:1; defined hover, focus, active states; at most one solid primary button per viewport; and all imagery project-local with preserved licensing notes (`assets/photography/README.md`).