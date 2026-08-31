# nathompson.com - Project Rules for LLMs (and humans)

## Content and editorial

### Banned words and phrases

Never use these words in body copy, excerpts, descriptions, or quiz text:

vibrant, testament to, crucial (as filler), showcase, tapestry, underscore (verb), foster, garner, intricate, meticulous, delve, bolstered, enhance (as filler), enduring (as filler), highlight (verb), landscape (abstract), valuable (as filler), pivotal, innovative (as filler), streamline, supercharge, empower, world-class, battle-tested, unlock, unleash, robust, seamless, comprehensive (as puffery), game-changing, cutting-edge, dynamic, holistic, ecosystem (metaphor), journey (metaphor), impactful, proactive, synergy

### Banned constructions

- **Em dashes** in any form: `—`, ` -- `, ` - ` used as a substitute.
- **Negation pivots as structural device**: "It's not X; it's Y" / "Not X, but Y" as a filler move. Only acceptable where the contrast *is* the argument being made, not as a rhetorical flourish, and even then should be limited or avoided.
- **Participial appendages**: clauses ending in ", contributing to X" / ", reflecting Y" / ", fostering Z" where the -ing clause adds nothing.
- **Rule-of-three adjective clusters**: "innovative, dynamic, and comprehensive" type stacking.
- **Section closers**: "In conclusion," / "In summary," / "In essence,"
- **Didactic disclaimers**: "It is important to note that" / "It is crucial to remember that" / "It should be noted that"
- **Vague attribution**: "experts argue," "observers note," "studies show," "well-documented" without a citation. Either cite specifically or cut (we VASTLY prefer citing, IF you actually have the web research or source material to ensure accuracy)
- **"Serves as / stands as / marks / represents"** in place of "is."
- **The word "trap"** anywhere in user-facing copy (nav, body, headings, quiz UI, excerpts, descriptions) unless it's a literal fucking trap.

### Voice rules

- Reach the bleeding hearts without preaching. No moral lecturing but no needless compromises.
- Cover libertarian talking points; do not assume the reader is hostile to them (or accepting).
- Make NO assumptions about the user's identity.
- Never introduce logical fallacies.
- Never write anything inaccurate or misleading.

---

## Design rules

The site uses custom CSS with explicit design tokens. Do not drift toward default design choices.

### Typography

- Do not introduce Inter, Geist, Space Grotesk, or Instrument Serif without explicit approval.
- No gradient text (background-clip on headings or numbers).
- No oversized italic serif hero headlines.

### Color

- Do not add purple, indigo, violet, or emerald as an accent.
- Do not add gradient fills to any element (hero, button, card, text).
- Do not add gradient orbs, blobs, or glows behind sections.
- No glassmorphism (backdrop-filter blur on cards or modals).

### Layout

- Cards and containers: border-radius maximum 4px (code inline uses 2px). No `rounded-2xl`.
- Separation: use borders (`1px solid var(--border)` or `var(--border-muted)`), not box-shadows.
- No three-card feature rows with icons above headings.
- No eyebrow chips or pill badges above section headings.
- No numbered section markers (01 / 02 / 03).
- No bento grids.
- No sparkle glyphs or emoji as section markers or decorative icons.

### Motion

- Transitions only for functional state changes
- No scroll-triggered section fade-in animations.
- No bounce or elastic easing.
- Always respect `prefers-reduced-motion`.

### Trust and content

- No fabricated statistics, user counts, or trust badges.
- No testimonial walls.
- No "built with X" attributions in the footer or page source.

---

## Testing

Before committing:
```
node tests/check-external-urls.mjs --source-only
```
