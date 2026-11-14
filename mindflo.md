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
- **Validation:** Source migration and configuration authored; root route outlet wired for route rendering. Install/build/typecheck/browser visual comparison not executed in this environment. Do not treat as production-verified until CI passes.

### 2026-11-15 — Migration PR merged; validation handoff

- **Contributor:** ChatGPT
- **Repository state:** PR #1 merged into `main` (squash merge); merge commit `85ccc3a6937292d59b440a50f4f26da2ac51b523`.
- **Changes:** Promoted the TanStack Start migration scaffold to the default branch. Confirmed the Vite plugin order and explicit Vercel framework setting against the current TanStack Start and Vercel deployment documentation.
- **Validation:** No GitHub Actions workflow runs or commit status checks were reported for the merge commit. A local clone could not be completed in the execution environment because outbound DNS/network access to GitHub was unavailable; therefore dependency installation, lockfile generation, TypeScript checks, production build, and browser visual regression remain unexecuted. Vercel framework detection has not yet been confirmed by the repository owner.
- **Next gate:** Owner to import `jobbyist/mindflo` into Vercel and confirm that the Framework Preset is detected as **TanStack Start**. After that confirmation, run or inspect the Vercel build; address any build failure in a focused follow-up commit and append the results here.

### 2026-11-15 — Resolve Vercel dependency installation failure

- **Contributor:** ChatGPT
- **Branch:** `fix/tanstack-vite8-peer-deps`
- **Files:** `package.json`, `mindflo.md`.
- **Issue:** Vercel correctly detected TanStack Start, but npm dependency resolution failed because the floating `^1.120.5` range installed `@tanstack/react-start@1.169.5`, whose Vite integration requires Vite 8+, while the project constrained Vite to 6.x. The existing React Vite plugin was also from the older Vite compatibility generation.
- **Changes:** Aligned TanStack packages to `@tanstack/react-start@1.169.6` and `@tanstack/react-router@1.170.43`; upgraded Vite to `8.3.8` and `@vitejs/plugin-react` to `6.3.0`; declared Node.js `>=22.12.0` for the Vite 8 toolchain. Kept the landing-page source, styles, and Vercel framework declaration unchanged.
- **Reason:** Resolve the exact peer-dependency conflict in the supplied Vercel log without suppressing npm's dependency checks.
- **Validation:** Versions and peer-compatibility direction checked against current TanStack Start migration guidance and Vite React plugin release notes. Dependency installation, lockfile generation, TypeScript check, production build, and browser visual regression have not yet been run in this environment. A fresh Vercel deployment is required to verify the fix end-to-end.
- **Next gate:** Review and merge the fix after Vercel reports a successful install/build. If a new error appears, append the exact error and corrective change here.

### 2026-11-15 — Correct unavailable TanStack Start patch version

- **Contributor:** ChatGPT
- **Branch:** `fix/tanstack-vite8-peer-deps`
- **Files:** `package.json`, `mindflo.md`.
- **Issue:** The next Vercel install failed with `ETARGET` because `@tanstack/react-start@1.169.6` is not published to the npm registry. The published release available for this dependency line is `1.169.5`.
- **Changes:** Corrected the exact `@tanstack/react-start` pin from `1.169.6` to the published `1.169.5`. Kept the Vite 8 and React plugin 6 pins from the previous compatibility fix. No application source, CSS, or deployment configuration changed.
- **Reason:** Remove the invalid package version that prevented npm from resolving dependencies before compilation.
- **Validation:** Confirmed the published package version and release metadata from npm/TanStack package listings. No install, lockfile generation, typecheck, production build, or browser regression has yet been run locally. Vercel Preview must verify the next install and build.
- **Next gate:** Wait for the updated Vercel Preview. Do not merge until dependency installation and the production build both pass; capture any subsequent failure verbatim and continue with a focused fix.

### 2026-11-15 — Correct Nitro package name/version line

- **Contributor:** ChatGPT
- **Branch:** `fix/tanstack-vite8-peer-deps`
- **Files:** `package.json`, `mindflo.md`.
- **Issue:** Vercel dependency installation next failed with `ETARGET` for `nitro@^2.11.0`. Nitro v2 was published as `nitropack`; the unscoped `nitro` package is the renamed v3 line, so a v2 semver range cannot resolve against it.
- **Changes:** Pinned the published `nitro@3.0.261103-rc` package to match the existing `nitro/vite` import in `vite.config.ts`. Raised the declared Node engine minimum to `>=22.22.0`, matching the Nitro v3 migration requirement.
- **Reason:** Align the installed Nitro package with the import path and Vite integration already used by the project, rather than switching back to the legacy package under a mismatched name.
- **Validation:** Confirmed npm's published Nitro v3 package and the Nitro migration documentation, which distinguishes Nitro v3 (`nitro`) from Nitro v2 (`nitropack`). No local install, lockfile generation, typecheck, production build, or browser regression has been run. Vercel Preview remains the next validation gate.
- **Next gate:** Verify that npm install completes and Vercel proceeds into the build. Do not merge until the full production build succeeds.