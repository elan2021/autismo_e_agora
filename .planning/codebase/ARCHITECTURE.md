# Architecture

## Design Pattern
- **Single Page Application (SPA)**: The current implementation is a single-page landing page designed for high conversion.
- **Client-Side Rendering (CSR)**: The main page is marked with `"use client"`, leveraging React hooks for animations, scroll tracking, and interactivity.

## Layout System
- **Next.js App Router**: Uses `app/layout.tsx` for the root structure and `app/page.tsx` for the main content.
- **Responsive Design**: Mobile-first approach using Tailwind CSS breakpoints.

## Component Architecture
- **In-file Components**: Components like `ProgressBar`, `StickyCTA`, `Section`, `Button`, and `FAQItem` are currently defined within `app/page.tsx`. This suggests a flat architecture suitable for simple landing pages.
- **Theme Injection**: Design tokens are defined in `app/globals.css` using Tailwind 4's `@theme` block, ensuring consistency across the application.
