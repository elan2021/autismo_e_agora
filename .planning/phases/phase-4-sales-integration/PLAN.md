# Phase 4: Sales Integration & SEO Optimization

## Objective
Prepare the landing page for official launch by connecting production sales links and optimizing for search engines and social sharing.

## Success Criteria
- [ ] Hotmart placeholder is replaced with a configurable production link.
- [ ] SEO Metadata is fully implemented (Title, Description, Keywords).
- [ ] OpenGraph tags (OG:Image, OG:Title, OG:Description) are set for social media sharing.
- [ ] Favicon and app icons are configured.
- [ ] Robots.txt and Sitemap.xml are generated (or structured).

## Wave 1: Sales Configuration
- **Task 1.1**: Move the Hotmart checkout URL to environment variables.
- **Task 1.2**: Update `components/sections/Pricing.tsx` to use the environment variable.
- **Task 1.3**: Update `components/ui/StickyCTA.tsx` and other CTAs to ensure consistent link usage.

## Wave 2: SEO & Meta Tags
- **Task 2.1**: Update `app/layout.tsx` metadata with comprehensive SEO details.
- **Task 2.2**: Prepare OpenGraph and Twitter card metadata.
- **Task 2.3**: Add a "Social Share" preview image to the `public/` directory (placeholder or instructions).

## Wave 3: Final Launch Readiness
- **Task 3.1**: Create `public/robots.txt`.
- **Task 3.2**: Final copy review for typos and persuasion (Portuguese).
- **Task 3.3**: Verification of all outbound links.

---
*Status: Ready for execution. Run `/gsd-execute-phase 4` to begin.*
