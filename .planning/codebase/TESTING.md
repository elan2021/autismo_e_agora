# Testing

## Current State
- **Automated Testing**: No automated testing framework (Jest, Vitest, Playwright, etc.) is currently configured in `package.json`.
- **Manual Verification**: Testing is currently performed manually by running the development server (`npm run dev`) and verifying UI/UX behavior.

## Strategy Recommendations
1. **Visual Testing**: Given the heavy use of animations and specific color palettes, visual regression testing (e.g., Storybook + Chromatic) would be beneficial.
2. **E2E Testing**: Playwright could be used to verify the main conversion flow (clicking CTAs, navigating to Hotmart).
3. **Accessibility Audit**: Ensuring the "neuro-friendly" claim is backed by WCAG compliance audits.
