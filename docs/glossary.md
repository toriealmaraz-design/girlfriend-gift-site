# Glossary — Birthday Gift Website for Client's Girlfriend

## People
- **Gwiyomi (recipient)**: the client's girlfriend; the person the site is devoted to. Nickname "cutie" in Korean (*gwiyomi*, 귀요미). Pronounced *gwi-yo-mi*.
- **Client** (the person commissioning the gift): supplies photos, videos, song URL, and edits the letter.
- **Builder** (this session): writes copy and builds the site.

## Page terms
- **Intro / opening page**: the first thing she sees after clicking the link; "Happy Birthday" greeting + envelope/letter CTA + song teaser.
- **Letter page**: the written love letter with a reveal animation.
- **Questions page**: the questions a boyfriend asks his girlfriend, each with a click-to-reveal answer.
- **Gallery**: the sequenced photo grid.
- **Videos page**: the couple's video clips.
- **Song page**: embedded song/music player.

## Tech terms
- **Static site**: pure HTML/CSS/JS, no database, no backend. Deploys to Vercel for free.
- **Vercel**: a static-hosting platform built for frontend frameworks; the site deploys from a flat folder with zero config.
- **Self-host media**: photos/videos live in `assets/` next to the site, referenced by plain `<img>`/`<video>` tags. Chosen because ~200MB of media is too heavy for a free database; self-hosted keeps the site free and instant to load.
- **Placeholder**: a visible, intentional stand-in for client-supplied content (media or copy). Never silently empty.
- **Drop-in swap**: every user-supplied item is a single file rename in `assets/` or a single edit in the HTML. Nothing else changes.

## Korean terms used
- **Gwiyomi / 귀요미** — "cutie" / "cute one." A term of endearment a boyfriend uses for his girlfriend.
- **Yours, / I love you** — the letter's sign-off, in English.

## Adobe/tooling (reference only — not required to run the site)
- **Adobe Exchange** (adobe.com/exchange) — the single destination for Adobe plugins/extensions.
- **Creative Cloud desktop app** → **Stock & Marketplace** → **Plugins** — the built-in plugin marketplace.
- **Adobe Extension Manager CC** — free tool to install/manage extensions across Creative Cloud apps (Dreamweaver, Photoshop, Illustrator, InDesign, Premiere Pro, etc.).
- **Plugin formats**: UXP plugins (modern), CEP extension panels (legacy, ZXP), traditional third-party plugins.
- **Unified Plugin Installer Agent (UPIA)** — the command-line utility for installing outside-Marketplace `.ccx`/`.zxp` packages.
- **Flue (`sfkislev/flue`)** — the coding agent's bridge into Adobe Creative Cloud apps (Photoshop, Illustrator, Premiere, After Effects, InDesign, Audition, etc.) via COM/AppleScript. Install: `pip install flue` + `flue setup` (verified: flue 1.0.30, importable).
