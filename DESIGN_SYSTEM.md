# Design System

Swiss-style minimalism. Pure white canvas, off-black ink, light brown decorative accent. Sharp corners by default, bold geometric sans for headings, mono for eyebrows.

## Source of truth

- `styles/tokens.css` — every colour, type, spacing, radii, shadow, motion token as a CSS variable.
- `lib/motion.ts` — same easings and durations exported for Motion / GSAP.
- `lib/fonts.ts` — `next/font` loaders for Inter (sans+display) and JetBrains Mono.

Components read tokens via `var(--name)` only. No hex values, no px spacing, no ad-hoc easings in component files.

## Tokens at a glance

| Group | Tokens |
|---|---|
| Neutral | `--n-50 … --n-900` (`#ffffff` → `#0a0908`) |
| Decorative | `--a-300` taupe, `--a-400` brown text-safe |
| Semantic | `--bg`, `--surface`, `--text`, `--muted`, `--border`, `--primary`, `--accent`, `--focus` |
| Type | `--font-display`, `--font-sans`, `--font-mono`, `--fs-{display..caption}`, `--fw-{display..body}`, `--lh-*`, `--ls-*` |
| Space | `--s-0 … --s-24` (4px base) + `--section-{sm,md,lg,xl}` (clamp) |
| Radii | `--r-0`, `--r-xs 2`, `--r-sm 4`, `--r-md 8`, `--r-lg 14`, `--r-full 999`, plus semantic `--r-button 0`, `--r-card 0`, `--r-input 4` |
| Shadow | `--elev-1`, `--elev-2`, `--elev-3` (max 3 levels) |
| Motion | `--dur-{fast,hover,base,entry,slow,cinematic}`, `--ease-{outExpo,inOutQuart,springSoft,springTight}` |

Dark theme: activate with `data-theme="dark"` on `<html>` (`pages/design-system.tsx` toggles for review) or let `prefers-color-scheme: dark` auto-apply.

## Motion principles

- Entry: fade + translateY (16px → 0) over `--dur-entry` (420ms) `ease-out-expo`. Stagger `0.08s` between siblings. Preset: `entryVariant` + `T.entry` from `lib/motion.ts`.
- Hover: 200ms colour / shadow shift. Transform/opacity only.
- Page: 200ms fade.
- `prefers-reduced-motion` reduces every duration token to `0.01ms` in one CSS rule — components inherit automatically.

## Components

Location: `components/ui/`

- `Container` — max-width wrapper (`var(--container)` 1200 / `wide` 1440).
- `Section` — vertical rhythm via `rhythm="sm|md|lg|xl"` → `var(--section-*)`.
- `Button` — `variant="primary|ghost|link"`, `size="sm|md|lg"`, optional `magnetic`.
- `LinkA` — `next/link` + animated underline (`hover|always|none`), tones `text|accent|muted`.
- `Tag` — mono uppercase chip, tones `neutral|accent|ink`.
- `Card` — `variant="flat|elev|outline"`, `interactive` for pointer feedback.
- `Nav` — sticky, animated mobile sheet via Radix Dialog, token-styled.
- `Cursor` — optional DOM cursor, auto-disabled on touch / reduced-motion.
- `TextReveal` — word or line split, cascades via `entryVariant`.

Every component is typed, focus-visible ring works, respects reduced-motion.

## Showcase

`/design-system` renders every token and component. Light / dark toggle in the top section. `noindex`.

## Extending

- New colour → add scale rung in `:root` of `tokens.css`, then a semantic alias.
- New motion curve → add to `--ease-*` and mirror in `lib/motion.ts` `ease`.
- Component → one file in `components/ui/`, token-only, no hex.
- Breaking change → bump the file comment at top of `tokens.css` and migrate consumers in the same commit.

## Non-goals

- No pure `#000` (per Swiss "no hard black" convention; use `--n-900 #0a0908`).
- No AAA contrast claims — the decorative taupe fails AAA on white; keep it decorative, never text.
- No heavy motion by default — reduce-motion is the baseline.
- No Tailwind v4 migration yet — tokens are the bridge until the stack catches up.
