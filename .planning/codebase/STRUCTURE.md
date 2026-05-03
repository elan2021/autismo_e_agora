# Project Structure

## Directory Overview
```text
/
├── .agent/             # AI agent configurations and workflows
├── .planning/          # GSD planning and codebase mapping (current)
├── app/                # Next.js App Router root
│   ├── globals.css     # Global styles and Tailwind theme
│   ├── layout.tsx      # Root layout (fonts, metadata, html/body)
│   └── page.tsx        # Main landing page implementation
├── public/             # Static assets
│   └── images/         # Hero and section images
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── tailwind.config.js  # (Standard config if using legacy, though v4 is active)
```

## Key Files
- `app/page.tsx`: The heart of the application, containing all UI sections and local components.
- `app/globals.css`: Defines the "Serene Compass" design system colors and animations.
- `app/layout.tsx`: Configures the base environment, including pt-BR localization and typography.
