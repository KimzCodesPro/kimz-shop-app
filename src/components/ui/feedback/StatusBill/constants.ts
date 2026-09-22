import { ThemePalette } from "@/types";

// A function rather than a plain object: the values come from the resolved
// theme, so they can only be read once useTheme has run.
export const statusBillColor = (colors: ThemePalette) =>
  ({
    success: { tint: colors.success.tint, strong: colors.success.strong },
    warning: { tint: colors.warning.tint, strong: colors.warning.base },
    info: { tint: colors.primary.tint, strong: colors.primary.pressed },
    danger: { tint: colors.danger.tint, strong: colors.danger.strong },
  }) as const;
