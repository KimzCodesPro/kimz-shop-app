export const ICON_SIZE = 22;

// Measured from ChevronLeft's path "M15 6l-6 6l6 6" (viewBox 0 0 24 24):
// M15 6 starts at x=15, l-6 goes to x=9, l6 returns to x=15 — glyph spans
// x 9–15, ±0.75 for the centered 1.5 stroke → x ≈ 8.25–15.75.
// Left gap 8.25/24 ≈ 34% of the box is transparent padding.
// Negative-margin the slot by this so the visible glyph — not the icon's
// bounding box — optically aligns with the content edge.
export const GLYPH_INSET = ICON_SIZE * 0.34;
