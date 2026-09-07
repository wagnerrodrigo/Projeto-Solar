# Projeto Solar — Design System para Landing Page de Energia Solar

> Category: Project Design System
> Surface: web

Created from OpenDesign project "Landing Page Energia Solar" (27d8debd-3bb6-4b5c-9fac-6f44e52da2b6).

## Source Context

**Source project:** Landing Page Energia Solar (`27d8debd-3bb6-4b5c-9fac-6f44e52da2b6`) — protótipo web (plugin `example-web-prototype`) de página única de conversão para venda de sistemas de energia solar fotovoltaica no Brasil.

**Primary surfaces:** hero com simulação de economia, faixa de confiança (stats), etapas de contratação, projeção de retorno (payback), vantagens, formulário de orçamento, FAQ e footer de conversão.

**Core capabilities:** dimensionamento de sistema a partir de consumo/tarifa, estimativa de economia e retorno, agendamento de visita técnica, homologação junto à distribuidora.

**Evidence status:** o projeto-fonte foi copiado como casca de metadados; nenhum HTML/imagem foi preservado. A linguagem visual foi inferida a partir do domínio (setor solar, pt-BR, protótipo web). Ver `context/provenance/notes.md`.

## 1. Visual Theme & Atmosphere

Este sistema foi extraído do protótipo **"Landing Page Energia Solar"** — uma página única de conversão para vendas de sistemas de energia solar residencial e comercial no mercado brasileiro. O produto vende economia mensal na conta de luz, retorno de investimento e independência energética.

A atmosfera visual combina três percepções:

1. **Energia e otimismo** — o sol como fonte de luz; amarelo-âmbar quente aplicado com parcimônia e precisão, nunca em excesso.
2. **Confiança e engenharia** — azuis profundos que remetem ao céu limpo e à tecnologia fotovoltaica, transmitindo credibilidade para um investimento de médio e longo prazo.
3. **Sustentabilidade** — verde como reforço ecológico discreto, usado apenas para estados positivos (vantagens, selos, economia).

O resultado é uma identidade **limpa, luminosa e orientada à conversão**: muito espaço em branco, hierarquia tipográfica forte, fotografia real de painéis solares e casas com telhados fotovoltaicos, e um único ponto de ação primária por viewport (orçamento / simulação). Nada de gradientes decorativos por todo o fundo, néon ou divisões de cor agressivas.

## 2. Color

### Paleta principal

| Token | OKLCh (fonte de verdade) | Hex equivalente | Uso |
|---|---|---|---|
| `--bg` | `oklch(0.995 0.002 105)` | `#fdfdfc` | Fundo primário — branco levemente aquecido pelo domínio solar |
| `--surface` | `oklch(0.985 0.004 105)` | `#fafaf7` | Superfícies elevadas, cards, seções alternadas |
| `--fg` | `oklch(0.23 0.03 255)` | `#131e2b` | Texto principal, quase-preto azulado |
| `--muted` | `oklch(0.5 0.02 255)` | `#5c646f` | Texto secundário, captions, descrições |
| `--border` | `oklch(0.9 0.01 105)` | `#dfded7` | Bordas, divisores, campos de formulário |
| `--accent` | `oklch(0.75 0.16 80)` | `#e2a000` | Âmbar solar — CTA primário, destaques de valor |

### Cores semânticas

| Token | OKLCh (fonte de verdade) | Hex equivalente | Uso |
|---|---|---|---|
| `--primary` | `oklch(0.28 0.07 255)` | `#0e294a` | Azul profundo — navegação, títulos de seção, links |
| `--success` | `oklch(0.62 0.13 155)` | `#349d62` | Verde — economia, selos ecológicos, estados de sucesso |
| `--warning` | `oklch(0.8 0.15 75)` | `#f5ae39` | Âmbar intermediário — raios de retorno, alertas suaves |
| `--danger` | `oklch(0.55 0.19 25)` | `#c92f33` | Vermelho — erros de validação, avisos |
| `--info` | `oklch(0.65 0.1 235)` | `#4a99c3` | Azul-claro informativo — dicas, destaques técnicos |

### Regras

- O **âmbar** (`--accent`) é a cor de ação e aparece **no máximo duas vezes por viewport** (um CTA primário + um destaque de valor).
- Sobre `--accent`, o texto é sempre `oklch(0.2 0.03 80)` (marrom-escuro aquecido), nunca branco — garante contraste ≥ 4.5:1.
- Sobre `--primary`, o texto é sempre branco.
- Estados de hover movem a luminância em ±0.06–0.12, nunca clareiam texto para `--muted`.
- Fundos de seção alternam entre `--bg` e `--surface`; seções de energia escura usam `--primary` com texto branco.
- Não usar cinza neutro puro como substituição de `--muted` quando o texto estiver sobre o âmbar.

## 3. Typography

### Escalas

- **Display:** "Space Grotesk", ui-sans-serif, system-ui, sans-serif — títulos de seção, números de economia (contas de retorno), hero.
- **Corpo:** "DM Sans", ui-sans-serif, system-ui, sans-serif — parágrafos, labels, formulários, navegação.
- **Mono:** "IBM Plex Mono", ui-monospace, "SFMono-Regular", monospace — valores técnicos (kWp, kWh/mês, percentuais de retorno).

### Escala de tipo (desktop)

| Papel | Tamanho / peso / altura | Uso |
|---|---|---|
| `display-xl` | 64px / 700 / 1.05 | Hero principal |
| `heading-1` | 48px / 700 / 1.1 | Títulos de seção |
| `heading-2` | 32px / 600 / 1.2 | Subtítulos, títulos de card |
| `heading-3` | 22px / 600 / 1.3 | Títulos internos de card |
| `body-lg` | 20px / 400 / 1.6 | Descrições de hero, ledes |
| `body` | 17px / 400 / 1.6 | Texto corrente, descrições de card |
| `caption` | 14px / 500 / 1.4 | Labels, captions, legendas |
| `label-lg` | 16px / 600 / 1.2 | Botões grandes, tabs |
| `label` | 14px / 600 / 1.2 | Botões pequenos, formulários |
| `mono-lg` | 32px / 500 / 1.2 | Números de economia |
| `mono-sm` | 14px / 400 / 1.4 | Valores técnicos |

### Regras

- Display e corpo são famílias diferentes: Space Grotesk (display) + DM Sans (corpo).
- Títulos com números de economia usam mono (`mono-lg`) para reforçar precisão.
- Em 1920×1080, títulos ≥ 36px e corpo ≥ 24px; em telas menores, redimensionar pela mesma escala (não espremer).
- Evitar becos órfãos: ajustar largura de coluna e wrapping antes de reduzir tamanho de letra.
- `letter-spacing` negativo apenas em display (≤ -0.02em); corpo sempre em ~0.

## 4. Spacing

### Escala de 4px

| Token | Valor | Uso |
|---|---|---|
| `--space-1` | 4px | Micro-ajustes internos |
| `--space-2` | 8px | Gaps entre ícone e label |
| `--space-3` | 12px | Padding de chips, selos |
| `--space-4` | 16px | Padding interno de inputs, gaps de lista |
| `--space-5` | 24px | Gap entre elementos de conteúdo |
| `--space-6` | 32px | Gap entre conteúdo e seções internas |
| `--space-8` | 48px | Padding de cards grandes, seções |
| `--space-10` | 64px | Respiração entre blocos |
| `--space-12` | 96px | Seções de landing page |

### Densidade e raio

- **Raio:** `--radius-sm: 8px`, `--radius-md: 14px`, `--radius-lg: 20px`, `--radius-full: 999px`.
- Cards usam `--radius-lg`; botões e inputs `--radius-md`; chips e selos `--radius-full`.
- Landing page de conversão usa densidade **confortável** (padding alto, gaps de 24–64px), não densa.

### Sombras

| Token | Valor | Uso |
|---|---|---|
| `--shadow-sm` | `0 1px 2px oklch(0.3 0.05 255 / 0.06)` | Elementos quietos |
| `--shadow-md` | `0 6px 24px -6px oklch(0.3 0.05 255 / 0.14)` | Cards em repouso |
| `--shadow-lg` | `0 24px 48px -12px oklch(0.25 0.06 255 / 0.25)` | Modais, dropdowns, hero overlay |

## 5. Layout & Composition

### Estrutura

- **Container:** 1200px máximo, padding lateral de 24–48px responsivo.
- **Grid:** 12 colunas com gap `--space-5` (24px) no desktop, colapsado para 1 coluna no mobile. Hero usa assimetria 7/5 (texto/imagem).
- **Header:** fixo, superfície translúcida com blur (fundo `oklch(0.995 0.002 105 / 0.82)` + `backdrop-filter`), 72px de altura.
- **Hierarquia de seções de landing:** Hero → Barra de confiança (números de economia) → Como funciona (3 etapas) → Vantagens / retorno (cards) → Planos ou faixas de investimento → Faixa escura de simulação → Formulário de orçamento → FAQ (accordion) → Footer de conversão.

### Regras

- Um único CTA primário por viewport; navegação e repetições finais usam secundário/ghost/texto.
- Imagens de painéis solares e casas sempre com `object-fit: cover` dentro de proporção fixa; imagens de conteúdo preservam a proporção intrínseca.
- Overlays sobre imagem ancorados a um canto com inset consistente, fundo sólido ou frosted-glass + sombra, e nunca cobrindo o sujeito principal.
- Mobile nunca rola horizontalmente; grids colapsam em vez de encolher.
- Aplicar `data-od-id` em seções, CTAs e cards repetidos (`hero`, `cta-orcamento`, `card-etapa-1`, etc.).

## 6. Components

### Botões

- **Primário (âmbar):** superfície `--accent`, texto `oklch(0.2 0.03 80)`, raio `--radius-md`, min-height 48px (mínimo 44px de toque), peso 600. Hover: L +0.06; focus-visible: anel de foco 2px `--primary` + offset 2px.
- **Secundário (azul outline):** borda 1.5px `--primary`, texto `--primary`, fundo transparente. Hover: fundo `oklch(0.95 0.02 255)`.
- **Ghost:** apenas texto `--primary`, hover: sublinhado ou fundo sutil.
- **Grupo de botões:** no máximo um sólido primário; os demais outline/ghost.

### Cards

- Superfície `--surface`, borda 1px `--border`, raio `--radius-lg`, sombra `--shadow-md` em repouso → `--shadow-lg` no hover com lift de -2px.
- **Card de economia:** número em `mono-lg` âmbar, label em caption `--muted`, ícone de sol como marca.
- **Card de etapa:** número em `display`, título `heading-3`, corpo `body`, separador vertical fino.

### Formulários

- Inputs: altura 48px, raio `--radius-md`, borda 1px `--border`, padding 0 16px, label em `label`. Focus: borda `--accent` + anel de foco. Erro: borda `--danger` + mensagem.
- Select de estado (UF) e campo de consumo em kWh/mês são os campos estratégicos do funil de simulação.

### Navegação

- Header com logo, links texto, CTA único "Simular economia". Mobile: drawer de navegação.
- Footer repete a conversão com uma única label de retorno (não repete a frase do CTA primário).

### Accordion (FAQ)

- Título `body-lg` 600, chevron SVG rotacionando 180°, painel com `grid-template-rows: 0fr → 1fr`, foco no botão de cabeçalho.

### Selos e chips

- Raio `--radius-full`, padding `--space-3`, fundo suave (`oklch` do acento com L alto) e texto escuro — nunca texto claro sobre claro.

## 7. Motion & Interaction

- **Transições padrão:** `transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease`.
- **Hover de card:** lift `translateY(-2px)` + sombra maior, em 0.2s.
- **Hover de botão primário:** L +0.06 no fundo; texto inalterado (nunca ficar cinza).
- **Hover de botão outline:** surge fundo suave azul; texto permanece `--primary`.
- **Reveal on scroll:** fade + translateY(12px), 0.5s ease, com `prefers-reduced-motion: reduce` desativando tudo para transições instantâneas.
- **Accordion:** rotação do chevron 0.2s; abertura via transição de `grid-template-rows`.
- **Foco:** todos os elementos focáveis têm `:focus-visible` com anel 2px `--primary`, offset 2px.
- **Spinner de loading** no formulário: `border` rotativo com cor `--accent`, apenas enquanto envia — nunca desativa o contraste do texto.

## 8. Voice & Brand

- **Idioma:** Português do Brasil em todo o conteúdo visível.
- **Tom:** claro, técnico e orientado a benefício. Fala de "economia na conta de luz", "retorno do investimento", "independência energética" e "sustentabilidade" — na ordem, benefício financeiro primeiro.
- **Capitalização:** sentença normal ("Simule sua economia", não "SIMULE SUA ECONOMIA" em todo lugar). Labels de botões começam com verbo no imperativo.
- **Vocabulário técnico:** uso medido — "kWp", "kWh/mês", "payback" aparecem apenas em mono e com caption explicativo.
- **Nunca:** siglas soltas sem explicação (kWp sempre com legenda), promessas garantidas de valor sem disclaimer, jargão jurídico em microcopy.
- **CTA primário:** "Simular economia" / "Solicitar orçamento". Variações secundárias no mesmo viewport não repetem a frase.

## 9. Anti-patterns

- Sem gradientes roxos ou "AI gloss"; gradientes decorativos em camadas de fundo inteiras são proibidos.
- Emoji não substitui ícones funcionais — usar SVG stroke de 1.5–2px.
- Sem o padrão "barra vertical colorida à esquerda + card arredondado" em callouts.
- Hover nunca clareia texto para `--muted` ou fundo claro sobre claro.
- Sem contorno vazio como encoding principal de gráficos; barras e arcos precisam de preenchimento.
- Sem mais de um botão sólido para a mesma ação por viewport.
- Sem fundo bege/creme por padrão; superfícies permanecem `--bg`/`--surface` com leve tom solar.
- Sem persianas, sem personagens SVG desenhados à mão, sem silhuetas de pessoas genéricas.
- Nunca fabricar números de economia sem placeholder honesto ("a partir de" + valor sinalizado).
- Imagens de painéis solares e casas reais são conteúdo factual — nunca geradas ou substituídas por ilustração.

## Provenance

- Source project: Landing Page Energia Solar (27d8debd-3bb6-4b5c-9fac-6f44e52da2b6)
- Design-system project: 626ffabc-19db-4a01-89a1-cbfec416f597
- Design-system id: user:landing-page-energia-solar-design-system
- Extracted: no source files were copied (metadata shell); visual language inferred from project domain and kind (web prototype, pt-BR). See `context/provenance/notes.md`.