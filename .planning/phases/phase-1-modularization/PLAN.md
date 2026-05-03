# Phase 1: Component Modularization

## Objective
Refactor the monolithic `app/page.tsx` (~500 lines) into a modular, maintainable structure by extracting reusable UI elements, layout components, and page sections into a dedicated `components/` directory.

## Success Criteria
- [ ] `app/page.tsx` is reduced to less than 100 lines (serving as an orchestrator).
- [ ] All components are correctly typed with TypeScript.
- [ ] Tailwind 4 styles and Framer Motion animations remain functional.
- [ ] Project directory follows the standard `components/{ui,layout,sections}` pattern.
- [ ] A `lib/utils.ts` exists with the `cn` helper.

## Wave 1: Foundation & Primitives
- **Task 1.1**: Create `lib/utils.ts` and move the `cn` helper function there.
- **Task 1.2**: Extract `Button` component to `components/ui/Button.tsx`.
- **Task 1.3**: Extract `ProgressBar` component to `components/ui/ProgressBar.tsx`.
- **Task 1.4**: Extract `FAQItem` component to `components/ui/FAQItem.tsx`.
- **Task 1.5**: Extract `StickyCTA` component to `components/ui/StickyCTA.tsx`.

## Wave 2: Structural Components
- **Task 2.1**: Extract `Section` wrapper to `components/layout/Section.tsx`.
- **Task 2.2**: (Optional) Create a `Footer` component in `components/layout/Footer.tsx`.

## Wave 3: Landing Page Sections
- **Task 3.1**: Extract `Hero` section to `components/sections/Hero.tsx`.
- **Task 3.2**: Extract `Pain` section to `components/sections/Pain.tsx`.
- **Task 3.3**: Extract `Solution` section to `components/sections/Solution.tsx`.
- **Task 3.4**: Extract `Benefits` section to `components/sections/Benefits.tsx`.
- **Task 3.5**: Extract `Proof` section to `components/sections/Proof.tsx`.
- **Task 3.6**: Extract `Pricing` section to `components/sections/Pricing.tsx`.
- **Task 3.7**: Extract `FAQ` section to `components/sections/FAQ.tsx`.

## Wave 4: Integration
- **Task 4.1**: Update `app/page.tsx` to import and use the new components.
- **Task 4.2**: Verify all imports and types.
- **Task 4.3**: Run `npm run lint` and `npm run build` (optional check) to ensure no regressions.

---
*Status: Ready for execution. Run `/gsd-execute-phase 1` to begin.*
