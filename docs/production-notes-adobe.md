# Production Notes — Adobe tools / plugin access (reference for the builder)

This site is static HTML/CSS/JS and deploys to Vercel — no Adobe tools are needed to *run* it. For extending the site with a desktop editor / Adobe plugin, the access tool is:

## Access tool: Adobe Exchange
- **Single destination** for Adobe plugins/extensions: **adobe.com/exchange**.
- Inside the **Creative Cloud desktop app**: **Stock & Marketplace** → **Plugins** → **All plugins**.
- Search for the plugin, select **Free** or **Buy**, then **Get** / **Open**.

## Adobe Extension Manager
- **Free** tool to install and manage extensions across Creative Cloud apps (Dreamweaver, Photoshop, Illustrator, InDesign, Premiere Pro, etc.).
- Download: `https://www.adobe.com/exchange/em_download/em50_download.html`.
- Windows: `AdobeExtensionManagerCCAll.zip` (102 MB). macOS (Intel): `AdobeExtensionManagerCCAll.dmg` (114 MB).

## Plugin formats
- **UXP plugins** — modern, built on Adobe's Universal Extensibility Platform.
- **CEP extension panels** — legacy (ZXP format), accessed via **Window > Extensions (Legacy)**.
- **Traditional third-party plugins** — file-system plugins installed to designated plugin folders.

## Install methods
- **Creative Cloud Desktop (Marketplace)** — the recommended method: browse, **Get**, follow prompts.
- **Unified Plugin Installer Agent (UPIA)** — the command-line utility for installing outside-Marketplace `.ccx`/`.zxp` packages.
  - Windows: `UnifiedPluginInstallerAgent.exe /install <path-to-plugin>`
  - macOS: `./UnifiedPluginInstallerAgent --install <path-to-plugin>`
- **Third-party installers** (e.g., **ZXP/UXP Installer** from aescripts.com) — drag & drop the `.zxp`/`.ccx` onto the app.

## For the coding agent (Adobe Creative Cloud desktop software)
- **Flue (`sfkislev/flue`)** — the coding agent's bridge into Adobe Creative Cloud apps (Photoshop, Illustrator, Premiere, After Effects, InDesign, Audition, etc.) via COM/AppleScript. One install covers all Adobe apps, no MCP server, no screenshots.
- Install: `pip install flue` then `flue setup` (verified: flue 1.0.30 — importable).
- Compatible with Codex, Claude Code, Gemini CLI, OpenCode, Hermes, and more.
- For the creative/UI side (design system, motion, build): `romantic-gift-website-builder` skill.
