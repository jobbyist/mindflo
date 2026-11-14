# MindFlo — Development changelog

This file is the canonical, append-only development log for MindFlo. Every implementation change made by Claude, ChatGPT, Amazon Q, or other contributors must be recorded here in the same working session or pull request.

## Project overview

- **Product:** MindFlo — professional counselling service led by Florence Kaunda.
- **Repository:** `jobbyist/mindflo`
- **Application:** TanStack Start + React + TypeScript + Vite.
- **Hosting target:** Vercel using Nitro integration.
- **Design constraint:** Preserve the supplied HTML prototype's UI, UX, copy, layout, colours, responsive behaviour, and interaction patterns unless a change is explicitly requested.
- **Brand palette:** Deep forest `#172b2b`, sage `#dce7d9`, muted sage `#91a69a`, lime `#d9f179`, cream `#f7f6f0`, paper `#fffefa`.
- **Typography:** DM Sans for body copy; Manrope for display typography.

## Collaboration and change-control rules

1. Read this file before making code changes.
2. Preserve the existing visual design. Do not redesign sections, alter spacing, typography, colours, copy, or responsive breakpoints as part of routine framework/backend work.
3. Keep changes focused, reviewable, and type-safe. Avoid unrelated refactors.
4. Update this log for every meaningful code, dependency, infrastructure, configuration, content, accessibility, analytics, or design change. Include date, contributor/tool, files, reason, implementation, and validation performed.
5. Never claim a build, test, deployment, integration, or manual visual review succeeded unless it was actually run and verified. Record blockers and unverified checks explicitly.
6. Do not commit secrets, API keys, service-role keys, credentials, personal client data, or real counselling enquiry content. Use environment variables and document required names only.
7. Treat counselling enquiries as sensitive. Do not collect unnecessary health details. Before production data collection, implement an appropriate privacy notice, consent, access controls, retention policy, and secure server-side handling consistent with applicable privacy law (including POPIA where relevant).
8. Do not invent Florence's qualifications, professional registration, credentials, specialities, fees, contact details, availability, or service locations. Keep unconfirmed claims clearly marked for review.
9. Amazon Q reviews should report findings with severity and file/line references. Resolve or explicitly document accepted risks before merge.
10. Keep this file's history; add new dated entries rather than rewriting previous entries.

## Current architecture

- `src/routes/__root.tsx`: document shell, SEO metadata, font loading, global stylesheet.
- `src/routes/index.tsx`: homepage route.
- `src/router.tsx`: TanStack Router registration.
- `src/components/mindflo-landing.tsx`: React-mounted landing page markup and client-side interactions. The original markup is retained to minimise visual drift during migration.
- `src/styles.css`: original prototype CSS, preserved as the visual source of truth.
- `vite.config.ts`: TanStack Start, Nitro, and React Vite plugins.
- `vercel.json`: Vercel framework detection.

## Environment variables

- `VITE_BOOKING_EMAIL` — optional public booking inbox used only to prepare a mailto enquiry. Configure in Vercel and local `.env` files; never place secrets in a `VITE_*` variable. A real booking workflow should replace this prototype interaction before collecting production enquiries.

## Validation status

- Framework files and Vercel configuration added in this migration.
- Original HTML content and CSS retained; menu, FAQ, year, and enquiry interactions reattached in React effect lifecycle.
- Dependency installation, production build, typecheck, browser QA, and Vercel deployment have **not yet been run in this GitHub-only implementation step**. Verify these after cloning/installing dependencies.

## Changelog

### 2026-11-15 — TanStack Start migration scaffold

- **Contributor:** ChatGPT
- **Branch:** `feat/tanstack-start-migration`
- **Files:** `package.json`, `vite.config.ts`, `tsconfig.json`, `vercel.json`, `src/router.tsx`, `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/components/mindflo-landing.tsx`, `src/styles.css`, `mindflo.md`.
- **Changes:** Converted the repository from a standalone HTML file into a TanStack Start + React + TypeScript application. Preserved the prototype's full page markup and CSS rather than re-authoring the interface, and reattached mobile navigation, FAQ toggles, current year, and enquiry form behaviour through React lifecycle-managed event listeners. Added SEO metadata, Google Fonts, Nitro/Vercel configuration, and cross-tool change-control guidance.
- **Reason:** Establish a deployable application foundation while protecting the approved visual design and enabling subsequent backend/frontend architecture work.
- **Validation:** Source migration and configuration authored; install/build/typecheck/browser visual comparison not executed in this environment. Do not treat as production-verified until CI passes.
