# Provenance — Landing Page Energia Solar

## Sessão de extração

- **Source project id:** `27d8debd-3bb6-4b5c-9fac-6f44e52da2b6`
- **Source project name:** Landing Page Energia Solar
- **Source kind:** prototype
- **Source skill id:** (none)
- **Source design system id:** (none)
- **Design-system project id:** `626ffabc-19db-4a01-89a1-cbfec416f597`
- **Design-system id:** `user:landing-page-energia-solar-design-system`
- **Extracted at:** 2026-09-05

## Unresolved facts

The source project was handed off as a **metadata shell**: `context/source-context.md` lists no copied files (HTML, images, or fonts) and the snapshot binding points to plugin `example-web-prototype`. There was no source code, screenshot, or asset to read as evidence.

## Decisions taken

Given the absence of raw evidence, the visual language was reconstructed from the only authoritative signals available — project domain and profile:

| Signal | Value | Consequence |
|---|---|---|
| Name | "Landing Page Energia Solar" | Single-page conversion landing, solar PV market |
| kind | prototype | One flow, conversion-focused, interaction + visual |
| plugin | example-web-prototype | Responsive web page |
| Scenario snapshot | 455525af-… | — |
| Region implied | Brazil (pt-BR) | All copy in Brazilian Portuguese |

### Tokens (OKLCh)

- Six core tokens `--bg / --surface / --fg / --muted / --border / --accent` chosen for a luminous, trustworthy solar identity: warm near-white backgrounds, deep blue primary, and a single amber accent used sparingly.
- Semantics added: `--primary`, `--success`, `--warning`, `--danger`, `--info`.

### Typography

- Display: **Space Grotesk**; Body: **DM Sans**; Mono: **IBM Plex Mono**. Display and body deliberately different per design charter.

### Insights

Any artifact built with this system must pass a human review pass before release: values like "a partir de R$ 120/mês" are provisional placeholders until the real numbers are provided.

## Asset provenance

- `assets/` currently holds **intentional system placeholders** (SVG brand/icon marks authored by the system, not copied from the source project).
- No fonts are bundled yet: Space Grotesk, DM Sans, and IBM Plex Mono are expected to load from the environment or via `fonts/` once the user supplies licensed files. The stack falls back to `ui-sans-serif/system-ui`.
- Should the original prototype file surface, re-extract its real screens and replace the inferred assets.

## Limitations declared

1. No original HTML/component code was preserved because none was copied — `ui_kits/app/` is authored from the inferred system, not extracted.
2. No real photography ships in this package; landing artifacts must acquire real solar imagery (panels, houses, roofs) at build time.

Do not claim that tokens, fonts, or components were extracted from source code — they were inferred from project metadata and domain knowledge.