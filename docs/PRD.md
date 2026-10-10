# PRD — Birthday Gift Website for Client's Girlfriend

Product: A private, multi-page birthday gift website for a client's girlfriend. Trigger: the TikTok gift format ("I made a website for my girlfriend") — private, link-based, emotionally driven.

## 1. Overview
- **Product**: A private multi-page birthday gift website for the client's girlfriend (referred to throughout as **Gwiyomi** — the Korean term of endearment "cutie," which the client uses for her).
- **Purpose**: Surprise the recipient on her birthday with a curated digital gift box: an intro/"Happy Birthday" reveal, a letter, a questions page, a photo gallery, a video page, and a song.
- **Status**: v0.2 — all pages built, fully styled, animated, and verified. Ready to drop in client media.
- **Delivery**: One flat folder that deploys to Vercel (static, no database, no account).

## 2. Stakeholders
- **Client** (the person commissioning the gift).
- **Recipient** (the client's girlfriend — **Gwiyomi**). The person the site is devoted to.
- **Builder** (this session) — writes copy and builds the site.

## 3. Core Problem & Solution
- The recipient wants to feel looked-after on her birthday. A private, personal website does this in a shareable, lasting way.
- Solution: a multi-page, link-reachable site that coalesces a letter, questions, photos, videos, and a song into one coherent emotional arc.

## 4. Scope
### In scope
- **Intro page** (`index.html`): "Happy Birthday" opening, an envelope/letter CTA, a short opening note, a song teaser, and a questions CTA.
- **Letter page** (`letter.html`): a written, emotional letter in the client's voice, in-character, with a "unfold" reveal animation.
- **Questions page** (`questions.html`): the questions a boyfriend asks his girlfriend (Gwiyomi) — playful, deep, romantic, and fun. Each question has a click-to-reveal answer (the client's prepared answer shown as a fold-out card).
- **Gallery page** (`gallery.html`): sequenced photos (how you met → now), no dates, scroll-snap carousel with parallax lift.
- **Videos page** (`videos.html`): the couple's video clips in a swipeable carousel. Client drops MP4s in; thumbnail present until then.
- **Song page** (`song.html`): embedded song/music player from a URL. Default: Miley Cyrus "Adore You" official music video.
- **Design**: very romantic — warm parchment, deep rose, soft gold, elegant serif. Gentle, intentional motion only (scroll-reveal, letter unfold, scroll-snap parallax, marquee ticker, CSS sparkles). No autoplay video, no loud animation.
- **Tech**: Vercel static site; media self-hosted in `assets/` (no DB, no upload API, no account).
- **Responsiveness**: works on phone, tablet, desktop. Verified at 375px / 768px / 1280px.
- **No dates** on photo/video captions — the timeline stays emotional, never literal.

### Out of scope (deferred to later rounds)
- User accounts / login (recipient has no login).
- Custom domain beyond Vercel defaults (or client-purchased domain).
- Background client dashboard for uploading media (media is self-hosted in `assets/`; no upload API).
- Comments, social sharing, analytics.
- Animations beyond the gentle romantic reveal.

## 5. Page Structure (multi-page)
| Page | Purpose | Key content |
|---|---|---|
| `index.html` | Intro / "Happy Birthday" | Opening note, envelope CTA, "open the letter" action, song teaser, questions CTA |
| `letter.html` | The letter | A written love letter with a "unfold" animation, signature |
| `questions.html` | Questions for Gwiyomi | The boyfriend's questions with click-to-reveal answers |
| `gallery.html` | The gallery | 6 photo cards (5 semantic + 1 [[Caption]] placeholder), scroll-snap carousel, no dates |
| `videos.html` | The videos | 3 swipeable video cards with thumbnail fallbacks |
| `song.html` | The song | Embedded music video player + direct shareable link |

## 6. Content & Copy
### Tone
Warm, intimate, specific, unpretentious. It must pass the "could this be copied onto someone else's site?" test — it is unmistakably about *this* client and *this* Gwiyomi. If it could be copied, rewrite it.

### Naming
- GWI / the site brand: "gift" (small, elegant).
- Recipient nickname: **Gwiyomi** (귀요미 — "cutie"), introduced gently in the intro and used consistently. Korean pronunciation: *gwi-yo-mi*.
- Sign-off: "I love you, / Yours, / [Your Name]."

### Sections of copy
- **Intro**: a short opening note ("Some days you just want someone to look at you and see everything you are.").
- **Letter**: 5 short paragraphs + a quote + a signature with a blank for [Your Name].
- **Questions**: 8 questions, each with a click-to-reveal answer.
- **Gallery**: 6 photo cards (5 semantic + 1 [[Caption]] placeholder), all emotional, no dates.
- **Videos**: 3 video cards with [[Title]] placeholders.
- **Song**: "Adore You" by Miley Cyrus (default) + direct link.

## 7. Design System (Verified)
- **Palette**: parchment `#F7F2E9`, softer cream `#FAF6EE`, espresso ink `#3A2A26`, deep rose `#7B2D43`, mid rose `#A85A6E`, soft gold `#C9A227`, warm taupe `#8A7A70`.
- **Typography**: Playfair Display (headings) + Source Sans 3 (body).
- **Color tokens** in `styles.css` (`:root`): `--paper`, `--paper-soft`, `--paper-card`, `--ink`, `--ink-muted`, `--rose`, `--rose-deep`, `--rose-soft`, `--gold`, `--gold-soft`, `--taupe`, `--taupe-soft`, `--line`, `--line-soft`.
- **Motion tokens**: `--ease-soft`, `--duration-soft`, `--duration-slow`, `--reveal-distance`.
- **Type scale** (`clamp()`): h1 `clamp(2.4rem, 6vw, 4rem)`, etc.
- **Motion language**: scroll-reveal, letter "unfold" (rotate + slide), gallery scroll-snap with parallax lift, video swipeable carousel with hover/touch zoom, marquee ticker, CSS sparkle particles.

## 8. Deliverables & Milestones
- [x] Docs: PRD, glossary, ADR, production-notes-adobe.
- [x] 6 pages built: index, letter, questions, gallery, videos, song.
- [x] `styles.css` (design system + motion).
- [x] `app.js` (motion layer).
- [x] `assets/` placeholders (6 photos, 3 video thumbnails as real JPEGs).
- [x] Full render verification (HTTP 200, no dates, no placeholder copy, syntax OK).
- [ ] Client media drop-in (photos, MP4s, song URL).
- [ ] Vercel deployment for a live link.

## 9. Media Conventions
- **Photos**: drop into `assets/`, match the names `placeholder-photo-1.jpg` … `placeholder-photo-6.jpg`. Each is a single drop-in swap.
- **Videos**: MP4s drop into the `<video>` `<source>` under each `video-card` in `videos.html`; the placeholder frame shows in the meantime. No silent empties.
- **Song**: paste the song URL into `song.html`; the player activates. Default Miley Cyrus "Adore You" is built in.

## 10. How to Run & Test
```bash
cd /d/girlfriend-gift-site
npx serve .            # or: python -m http.server 8080
# open http://localhost:3000 (or :8080)
```
Verify: `node --check app.js`; CSS braces balanced; all 6 pages + `styles.css` + `app.js` + media return HTTP 200; DevTools Console is clean; no horizontal overflow at 375px / 768px / 1280px; no dates, no placeholder copy in final copy.

## 11. Production Notes — Adobe Tools (for the builder)
This site is static HTML/CSS/JS and deploys to Vercel — no Adobe tools are needed to *run* it. For extending the site with a desktop editor / Adobe plugin, the access tool is:

- **Adobe Exchange** (adobe.com/exchange) — the single destination for Adobe plugins/extensions.
- **Adobe Extension Manager CC** — free tool to install/manage extensions across Creative Cloud apps.
- **Plugin formats**: UXP (modern), CEP/ZXP (legacy), traditional third-party.
- **Install**: Creative Cloud Desktop (Marketplace), or **Unified Plugin Installer Agent (UPIA)** CLI for `.ccx`/`.zxp` packages.
- Download Extension Manager from `https://www.adobe.com/exchange/em_download/em50_download.html`.
- **Third-party installers** (e.g., ZXP/UXP Installer from aescripts.com) are an alternative to Adobe's own manager.

## 12. Adobe Tools Plugin (Global Install — Verified)
The coding agent's access tool to **Adobe Creative Cloud** apps (Photoshop, Illustrator, Premiere Pro, After Effects, InDesign, Audition, etc.) is **`flue`** by SFKislev:

- Install: `pip install flue`  (installed), then `flue setup`
- Skill: `sfkislev/flue` on GitHub + skills.sh
- A single install covers all Adobe adapters (Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Audition, etc.) via COM/AppleScript/local endpoints — no MCP server, no screenshots.
- Detector/harness compatibility: Codex, Claude Code, Gemini CLI, OpenCode, Hermes, and more.
- Verified installed: `flue 1.0.30` — importable, `flue.setup()` callable.
- For the creative/UI side (design system, motion, build): `romantic-gift-website-builder` skill.

## 13. Adobe Tools / Plugin Access (Reference)
This site is static HTML/CSS/JS and deploys to Vercel — no Adobe tools are needed to *run* it. The following are reference notes for the client if they want to open the page in a desktop editor / extend it:

- **Access tool**: **Adobe Exchange** (adobe.com/exchange) — the single destination for Adobe plugins/extensions.
- **Adobe Extension Manager CC** — free tool to install/manage extensions across Creative Cloud apps (Dreamweaver, Photoshop, Illustrator, Premiere Pro, etc.).
- **Plugin formats**: UXP plugins (modern), CEP extension panels (legacy, ZXP), traditional third-party plugins.
- **Install method**: Creative Cloud Desktop (Marketplace), or the **Unified Plugin Installer Agent (UPIA)** command line for outside-Marketplace `.ccx`/`.zxp` packages.
- Download the Extension Manager from `https://www.adobe.com/exchange/em_download/em50_download.html`; third-party installers (e.g., ZXP/UXP Installer from aescripts.com) are an alternative to Adobe's own manager.
