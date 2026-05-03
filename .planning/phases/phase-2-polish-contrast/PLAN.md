# Phase 2: Visual Polish & Contrast

## Objective
Improve the visual hierarchy and readability of the landing page by refining the design tokens (contrast) and ensuring a clear distinction between page sections.

## Success Criteria
- [ ] Section backgrounds have sufficient contrast to be clearly distinguishable.
- [ ] Text-to-background contrast meets WCAG AA standards for readability.
- [ ] Visual hierarchy is improved through strategic use of borders, shadows, and spacing.
- [ ] Tailwind 4 theme tokens are updated and applied consistently.

## Wave 1: Token Audit & Refinement
- **Task 1.1**: Audit `app/globals.css` tokens.
- **Task 1.2**: Update `--color-background-secondary` to a slightly deeper, more distinct mint/green.
- **Task 1.3**: Refine `--color-text-secondary` for better contrast against secondary backgrounds.
- **Task 1.4**: Introduce a `--color-border-subtle` for section separation.

## Wave 2: Component Styling Updates
- **Task 2.1**: Update `components/layout/Section.tsx` to include an optional subtle border if needed.
- **Task 2.2**: Audit `components/sections/Pain.tsx` and `components/sections/Benefits.tsx` (the secondary background users) to verify contrast.
- **Task 2.3**: Improve contrast in `components/ui/FAQItem.tsx` (answer text).

## Wave 3: Final Polish
- **Task 3.1**: Verify mobile readability and contrast.
- **Task 3.2**: Ensure brand colors (Sky Blue/Orange) remain accessible.

---
*Status: Ready for execution. Run `/gsd-execute-phase 2` to begin.*
