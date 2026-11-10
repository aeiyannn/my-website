// Single source of truth for motion. CSS vars in tokens.css mirror these.
// ponytail: duplicated to JS so Motion/GSAP don't have to query computedStyle.

export const dur = {
  fast: 0.18,
  base: 0.32,
  entry: 0.42,      // Swiss spec: entry fade+translateY
  slow: 0.6,
  cinematic: 1.2,
} as const;

export const stagger = {
  tight: 0.04,
  base: 0.08,       // Swiss spec: list cascade
  loose: 0.14,
} as const;

// Cubic-bezier arrays — Motion accepts these directly; GSAP uses easeString().
export const ease = {
  outExpo: [0.19, 1, 0.22, 1],
  inOutQuart: [0.76, 0, 0.24, 1],
  springSoft: [0.34, 1.26, 0.64, 1],
  springTight: [0.2, 1.6, 0.4, 1],
} as const;

// GSAP needs string form, e.g. "cubic-bezier(.19,1,.22,1)".
export const easeString = {
  outExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
  inOutQuart: "cubic-bezier(0.76, 0, 0.24, 1)",
  springSoft: "cubic-bezier(0.34, 1.26, 0.64, 1)",
  springTight: "cubic-bezier(0.2, 1.6, 0.4, 1)",
} as const;

export type EaseName = keyof typeof ease;
export type DurName = keyof typeof dur;

// Preset transitions — Motion-friendly.
export const T = {
  fast: { duration: dur.fast, ease: ease.outExpo },
  base: { duration: dur.base, ease: ease.outExpo },
  entry: { duration: dur.entry, ease: ease.outExpo },  // Swiss entry
  hover: { duration: 0.2, ease: ease.outExpo },         // spec hover
  slow: { duration: dur.slow, ease: ease.inOutQuart },
  cinematic: { duration: dur.cinematic, ease: ease.inOutQuart },
  springSoft: { type: "spring" as const, stiffness: 180, damping: 22, mass: 1 },
  springTight: { type: "spring" as const, stiffness: 320, damping: 26, mass: 1 },
} as const;

// Reusable entry variant — fade + 16px translateY per spec.
export const entryVariant = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0, transition: T.entry },
} as const;
