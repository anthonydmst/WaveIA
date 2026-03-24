/**
 * 1. PRIMITIVES - Raw values (Base 4px/8px)
 */
const BASE_UNIT = 4

export const PRIMITIVES = {
  spacing: {
    1: `${BASE_UNIT * 1}px`, // 4px
    2: `${BASE_UNIT * 2}px`, // 8px
    3: `${BASE_UNIT * 3}px`, // 12px
    4: `${BASE_UNIT * 4}px`, // 16px
    6: `${BASE_UNIT * 6}px`, // 24px
    8: `${BASE_UNIT * 8}px`, // 32px
    10: `${BASE_UNIT * 10}px`, // 40px
    12: `${BASE_UNIT * 12}px`, // 48px
    16: `${BASE_UNIT * 16}px`, // 64px
    20: `${BASE_UNIT * 20}px`, // 80px
    24: `${BASE_UNIT * 24}px`, // 96px
    32: `${BASE_UNIT * 32}px`, // 128px
  },
}

/**
 * 2. SEMANTICS - Intent-based mappings
 */
export const SEMANTICS = {
  spacing: {
    container: 'px-6 lg:px-12 max-w-7xl mx-auto',
    sectionPadding: 'py-16 md:py-20',
  },
}

/**
 * 3. TYPOGRAPHY - S-Tier Scales
 */
export const TYPOGRAPHY = {
  heading: {
    page: `text-[clamp(48px,8vw,96px)] font-bold tracking-tighter leading-[1.0]`,
    section: `text-[clamp(32px,5vw,60px)] font-bold tracking-tight leading-tight`,
    subsection: `text-[clamp(24px,3vw,40px)] font-bold tracking-tight`,
  },
  body: {
    lg: 'text-lg md:text-xl leading-relaxed',
    base: 'text-base leading-normal',
    sm: 'text-sm leading-snug',
    badge: 'text-[10px] font-bold tracking-[0.3em] uppercase',
  },
} as const

export const SPACING = {
  sectionPadding: 'py-16 md:py-20',
  container: SEMANTICS.spacing.container,
} as const
