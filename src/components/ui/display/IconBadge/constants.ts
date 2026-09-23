import { ThemePalette } from "@/types";

// A function rather than a plain object: the values come from the resolved
// theme, so they can only be read once useTheme has run.
export const iconBadgeColor = (colors: ThemePalette) =>
  ({
    success: colors.success.strong,
    warning: colors.warning.base,
    info: colors.primary.pressed,
    danger: colors.danger.base,
  }) as const;

// The single glyph the badge exists to frame.
export const BADGE_ICON_SIZE = 22;
