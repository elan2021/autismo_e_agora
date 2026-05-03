# Phase 3: Analytics Setup (Facebook Pixel)

## Objective
Integrate the Facebook Pixel into the landing page to track user behavior, optimize ad performance, and measure conversions.

## Success Criteria
- [ ] Facebook Pixel base script is loaded on all pages.
- [ ] `PageView` event is automatically tracked.
- [ ] `InitiateCheckout` event is tracked when a user clicks a CTA button.
- [ ] Tracking logic is abstracted into a reusable utility/component.
- [ ] Pixel ID is configurable via environment variables.

## Wave 1: Infrastructure & Base Script
- **Task 1.1**: Create a Facebook Pixel utility/component using `next/script`.
- **Task 1.2**: Update `app/layout.tsx` to include the Pixel component.
- **Task 1.3**: Set up `.env.local.example` with `NEXT_PUBLIC_FB_PIXEL_ID`.

## Wave 2: Event Tracking implementation
- **Task 2.1**: Create a utility function `trackFBEvent` to send custom events.
- **Task 2.2**: Update `components/ui/Button.tsx` to optionally trigger an event on click.
- **Task 2.3**: Update `components/sections/Pricing.tsx` to trigger `InitiateCheckout` when the main CTA is clicked.

## Wave 3: Verification
- **Task 3.1**: Verify script injection in the browser (simulated or manual check instructions).
- **Task 3.2**: Ensure no tracking errors occur in the console.

---
*Status: Ready for execution. Run `/gsd-execute-phase 3` to begin.*
