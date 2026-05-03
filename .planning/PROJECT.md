# Autismo, e Agora?

## What This Is

Um guia prático e acolhedor (ebook) destinado a pais que acabaram de receber o diagnóstico de autismo de seus filhos. O produto oferece clareza, segurança e um passo a passo para os primeiros dias, direitos e organização das terapias, tudo através de uma landing page de alta conversão e, futuramente, uma área de membros exclusiva.

## Core Value

Transformar a paralisia do diagnóstico em ação coordenada através de um guia acessível, acolhedor e visualmente reconfortante.

## Requirements

### Validated

- ✓ **Landing Page Base**: Estrutura inicial Next.js com Tailwind 4 implementada.
- ✓ **Design "Serene Compass"**: Paleta de cores e tipografia neuro-friendly estabelecidas.
- ✓ **Conteúdo de Conversão**: Seções de dor, solução, benefícios, prova social e FAQ redigidas em pt-BR.

### Active

- [ ] **Refatoração e Modularização**: Extrair componentes do `page.tsx` para um diretório `components/` dedicado.
- [ ] **Ajuste de Contraste**: Revisar o contraste das seções para melhorar a legibilidade e hierarquia visual.
- [ ] **Integração Facebook Pixel**: Configurar o rastreamento de eventos para otimização de anúncios.
- [ ] **Dashboard de Métricas**: Painel integrado para visualização de dados do Facebook Ads.
- [ ] **Área de Membros "Netflix-Style"**: Plataforma de consumo de conteúdo estruturada com interface inspirada em streaming.

### Out of Scope

- **Acessibilidade Rigorosa (WCAG full compliance)**: Foco inicial é em design "neuro-friendly" e contraste básico, sem certificação formal de acessibilidade completa neste momento.
- **Suporte Multi-idioma**: O projeto é estritamente em pt-BR por enquanto.

## Context

- **Tech Stack**: Next.js 16, React 19, Tailwind 4, Framer Motion.
- **Design Strategy**: Alta saturação/contraste neuro-friendly (Mint, Sky Blue, Orange).
- **Current State**: Brownfield. O código inicial está concentrado em um único arquivo gigante (`page.tsx`).

## Constraints

- **Tech**: Manter compatibilidade com Tailwind 4 e React 19.
- **Design**: Não utilizar cores puras (preto absoluto) ou padrões genéricos.
- **Performance**: Manter Core Web Vitals altos apesar das animações.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js App Router | Escalabilidade para área de membros futura. | ✓ Good |
| Tailwind 4 | Uso de recursos modernos de CSS e melhor performance. | ✓ Good |
| Modularização Imediata | `page.tsx` está ilegível e difícil de manter. | — Pending |

---
*Last updated: 2026-04-30 after initialization questioning*
