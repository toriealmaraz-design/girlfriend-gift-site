# ADR-0001 — Design System: Romantic Warm

## Status
Accepted (v0.1)

## Context
The gift site must feel "very romantic" as the client requested. We needed a concrete design direction that reads as warm, nostalgic, and intimate — not cold/tech, not generic/flashy.

## Decision
- **Palette**: warm parchment cream `#F7F2E9`, softer cream `#FAF6EE`, deep espresso ink `#3A2A26`, deep rose primary `#7B2D43`, soft gold accent `#C9A227`, warm taupe muted `#8A7A70`.
- **Typography**: `Playfair Display` for headings (elegant serif); `Source Sans 3` for body.
- **Motion**: gentle scroll reveals (staggered `.reveal[data-delay]`), letter "unfold" reveal (rotate + slide on first view), gallery scroll-snap with parallax lift, video swipeable carousel with hover/touch zoom, marquee ticker, CSS sparkle particles. Emotional restraint.

## Alternatives considered
1. Dark neon cyber-minimal (client's personal preference, but too cold for a "very romantic" gift) — rejected.
2. Bright pastel scrapbook — too casual and momentarily childish — rejected.

## Consequences
- Warm, nostalgic, intimate tone established across all pages.
- Palette is the single source of truth in CSS variables (`:root`).
- Motion is intentional and gentle; heavy animation would break the romantic feel.
