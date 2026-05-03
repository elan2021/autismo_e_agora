# Concerns & Technical Debt

## Technical Concerns
- **Single-File Complexity**: `app/page.tsx` is nearly 500 lines long and contains multiple components. As the page grows, this should be refactored into a `components/` directory.
- **Hardcoded Content**: All copy and pricing are hardcoded. If the product scales or needs frequent updates, moving this to a CMS or a local `data/` file would be better.
- **Placeholder Links**: The Hotmart link is a placeholder (`PLACEHOLDER`). This is a critical blocker for production.
- **Missing SEO Details**: While basic metadata is in `layout.tsx`, specific OpenGraph tags and structured data for an ebook product are missing.

## UX Concerns
- **Neuro-diversity Compliance**: While the palette is "neuro-friendly", a formal audit (e.g., motion reduction support, font sizing) should be conducted to ensure it serves the target audience effectively.
- **Performance**: Heavy use of Framer Motion and large images could impact Core Web Vitals if not properly optimized (e.g., using `next/image` properly, which is currently being used).

## Future Proofing
- **Localization**: Currently only supports `pt-BR`. If internationalization is planned, a strategy for `i18n` should be established.
