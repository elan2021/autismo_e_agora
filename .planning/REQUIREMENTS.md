# Requirements

## 1. Technical Infrastructure (Refactoring)

### 1.1. Modularization
- **R1.1.1**: Create `components/layout/` for global structural elements (Header, Footer, Section, ProgressBar).
- **R1.1.2**: Create `components/ui/` for reusable atomic elements (Button, FAQItem, StickyCTA).
- **R1.1.3**: Create `components/sections/` for landing page specific blocks (Hero, Pain, Solution, Benefits, Proof, Pricing, FAQ).
- **R1.1.4**: Establish a `lib/utils.ts` for common utilities like the `cn` function.

### 1.2. Design System Refinement
- **R1.2.1**: Update `globals.css` with improved contrast tokens for secondary backgrounds and text.
- **R1.2.2**: Ensure all components use these tokens consistently.

## 2. Marketing & Analytics

### 2.1. Facebook Integration
- **R2.1.1**: Implement Facebook Pixel script via `next/script`.
- **R2.1.2**: Track standard events (PageView, Lead, InitiateCheckout).
- **R2.1.3**: (Future) Develop a Dashboard to view Facebook metrics using Graph API.

## 3. Product Expansion (Area de Membros)

### 3.1. Netflix-Style Interface
- **R3.1.1**: Design a dashboard layout with horizontal scrolling lists for content modules.
- **R3.1.2**: Implement video player integration.
- **R3.1.3**: Authentication system (likely Supabase or NextAuth).

## 4. Conversion Optimization
- **R4.1.1**: Replace Hotmart placeholder with real production link.
- **R4.1.2**: SEO Audit and meta tag implementation for social sharing.
