import { ThemePalette } from "@/types";

// A function rather than a plain object: the values come from the resolved
// theme, so they can only be read once useTheme has run.
export const statusBillColor = (colors: ThemePalette) =>
  ({
    success: { tint: colors.success.base, strong: colors.success.strong },
    warning: { tint: colors.warning.base, strong: colors.warning.base },
    info: { tint: colors.primary.base, strong: colors.primary.pressed },
    danger: { tint: colors.danger.base, strong: colors.danger.strong },
  }) as const;
