# 00-config-app

- Stripped the default Expo template: removed demo screens (`explore.tsx`), themed components (`themed-text`, `themed-view`, `app-tabs`, `animated-icon`, `collapsible`, `external-link`, `hint-row`, `web-badge`), theme constants, and color-scheme hooks
- Simplified `src/app/_layout.tsx` and `src/app/index.tsx` down to a minimal starting point
- Deleted the `scripts/reset-project.js` helper
- Moved `assets/` → `src/assets/` (images, tab icons, expo icon SVG, branding PNGs)
- Updated `app.json` for the new asset paths
- Added **ESLint** config (`eslint.config.js`) and `lint` + `type-check` npm scripts
- Added **Husky** with a `pre-push` hook that runs `lint` + `type-check` before every push
- Added `.husky/post-checkout` hook that auto-prefixes new branches with `NN-` (tutorial step numbering)
