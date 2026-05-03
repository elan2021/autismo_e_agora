# Conventions

## Coding Standards
- **TypeScript**: Strict typing is enabled.
- **Components**: Functional components using React Hooks.
- **Styling**: 
  - Utility-first with Tailwind CSS.
  - Custom utility `cn` (clsx + tailwind-merge) for clean class management.
- **Client Directives**: `"use client"` is used at the top of the main page to enable interactivity.

## Design Principles
- **Neuro-friendly Aesthetics**: Soft greens (Mint), deep blues, and vibrant oranges for a high-contrast but calming experience.
- **Typography**: Nunito for emphasis (Headings/Buttons), Inter for readability (Body).
- **Interactivity**: Use of Framer Motion for scroll-triggered animations and micro-interactions (e.g., FAQ toggles, Sticky CTA).

## Naming Conventions
- **PascalCase**: React components.
- **camelCase**: Functions, variables, and hooks.
- **kebab-case**: CSS classes and IDs.
