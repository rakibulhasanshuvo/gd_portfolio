# Anti-Slop Research & Codebase Audit Report

> **Project:** Muhammad Rakibul Hasan Shuvo — Graphic & Visual Designer Portfolio  
> **Date:** October 2026  
> **Methodology:** `no-ai-slop` (editorial & voice purity) + `ai-slop-cleaner` (code-bloat, dead-tree pruning, UI design checklist)

---

## 1. Executive Summary

A comprehensive anti-slop audit of the portfolio project revealed two primary vectors of AI-generated slop:
1. **Codebase Bloat (Dead Code):** 5 orphaned, unused components totaling **48.1 KB** left behind from previous prototyping iterations (`HeroVisual.tsx`, `ProfileSection.tsx`, `ProjectGallery.tsx`, `ProjectCard.tsx`, `RetroTV.tsx`).
2. **Copy Slop & Artificial Puffery:** Over-leveraged superlative marketing copy (*"masterworks"*, *"high-velocity"*, *"high-converting"*, *"executive CV"*, *"visual storyteller"*), artificial flame emojis (`🔥`) on section titles, and ungrounded claims that undermined the authentic voice of a Computer Science student and commercial graphic designer.

All dead code has been pruned, copy has been re-grounded in concrete facts, and full build & lint gates remain 100% green.

---

## 2. Code Slop Pruning (`ai-slop-cleaner`)

### Dead Components Eliminated

| Deleted File | Size | Cause / Reason for Removal |
|---|---|---|
| `components/HeroVisual.tsx` | 15.2 KB | Superseded by `Hero.tsx` + `PortfolioHeadline.tsx`; never imported in the active tree. |
| `components/ProfileSection.tsx` | 7.5 KB | Unused duplicate profile view; not imported in `app/page.tsx`. |
| `components/ProjectGallery.tsx` | 7.1 KB | Superseded by `Vol01PackagingShowcase`, `Vol02LogoShowcase`, and `Vol03PrintShowcase`. |
| `components/ProjectCard.tsx` | 11.7 KB | Sub-component only consumed by `ProjectGallery.tsx`; orphaned once gallery was deprecated. |
| `components/RetroTV.tsx` | 6.6 KB | Replaced by `RetroTVSticker.tsx`; never referenced in the active page. |
| **Total Reclaimed** | **48.1 KB** | **Zero impact on runtime UI or features.** |

---

## 3. Copy Anti-Slop Audit & Transformations (`no-ai-slop`)

### Principles Applied
- **Banned Words Stripped:** `leverage`, `high-velocity`, `masterwork`, `high-converting`, `paradigm shift`.
- **Throat-Clearing & Puffery Removed:** Replaced inflated corporate badges with grounded credentials.
- **Emoji Clutter Cut:** Removed artificial `🔥` emojis on section titles.
- **Fact-Preservation:** Maintained real achievements (500+ commercial print runs, BOU CSE student, University of Tokyo Matsuo Lab AI intensive, zero defect registration tolerances).

### Before & After Matrix

| Component / File | Before (AI Slop) | After (Clean & Human) | Slop Smell Classified |
|---|---|---|---|
| `components/Hero.tsx` | `EXPLORE 18 MASTERWORKS` | `VIEW ALL 18 PROJECTS` | Importance Puffery |
| `components/Hero.tsx` | `EXECUTIVE CV` | `VIEW CV` | Inflated Title for Junior/Mid Role |
| `components/Hero.tsx` | `ZERO BLEED RECORD` | `ZERO REGISTRATION ERRORS` | Sensationalist Claim |
| `components/WhatIDoSection.tsx` | `What do i Do? 🔥` | `What I Do` | Formatting Slop & Emoji Clutter |
| `components/WhatIDoSection.tsx` | `...and Explore AI tools and try to integrate it across visual direction, concept development, packaging die-lines, and high-velocity creative exploration.` | `...and Figma across brand identity, screen-print packaging die-lines, and production-ready vector graphics.` | Run-on AI Hallucination & Buzzword Stacking |
| `components/Vol01PackagingShowcase.tsx` | `Packaging Fleet 🔥` | `Packaging Fleet` | Decorative Emoji Slop |
| `components/Vol01PackagingShowcase.tsx` | `FLAGSHIP COMMERCIAL MASTERWORK // PKG-001` | `FEATURED PACKAGING // PKG-001` | Importance Puffery |
| `components/CreatorAvatarCard.tsx` | `Visual Storyteller` | `Brand & Print Designer` | Vague Abstract Label |
| `components/CreatorAvatarCard.tsx` | `...of high-volume commercial production in Design industry.` | `...of commercial print production across apparel and retail.` | Broken Grammar & Abstract Noun |
| `components/PrepressVisualizer.tsx` | `...calibrated for high-velocity press runs.` | `...calibrated for clean screen-print release.` | Fake Buzzword Suffix |
| `data/projects.ts` | `tags: ['High-Velocity Production', ...]` | `tags: ['Commercial Production', ...]` | Buzzword Tag |
| `data/projects.ts` | `Dynamic high-velocity athletic branding...` | `Athletic branding and typography...` | Empty Adverb / Adjective |
| `data/projects.ts` | `High-converting promotional restaurant collateral...` | `Promotional restaurant collateral...` | Generic Marketing Slop |
| `data/projects.ts` | `Tight-deadline turnaround record` | `On-time project delivery` | Inflated Claim |
| `data/projects.ts` (Bio) | `Specializing in translating bold ideas into polished digital interfaces...` | `Designing digital interfaces, brand identities, and commercial packaging...` | Classic AI Throat-Clearing Opener |
| `README.md` | `High-impact visual design, production-engineered commercial screen-print packaging... high-converting marketing collateral.` | `Graphic design portfolio featuring commercial screen-print packaging (500+ bag production runs), brand identities, vector die-lines, and editorial print.` | Buzzword Overload |
| `public/cv.html` | `Leveraged Adobe Photoshop...` | `Used Adobe Photoshop...` | Banned Corporate Verb (`leverage`) |

---

## 4. Verification & Quality Gates

- **ESLint Gate:** Passed with 0 errors, 0 warnings.
- **Turbopack Build Gate:** Static prerender succeeded in 2.6s.
- **Interactive Integrity:** All Web Audio synthesized sound fx, Prepress separation toggles, 3D bag mockup toggles, and project modals verified intact.
