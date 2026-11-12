import { StatusVariant, ThemePalette } from "@/types";

// Built inside a function because the values come from the resolved theme,
// so they can only be read once useTheme has run.
export const getStatusHaloColors = (
  colors: ThemePalette,
  variant: StatusVariant,
) => {
  const palette = {
    success: {
      halo: colors.success.tint,
      inner: colors.success.base,
    },
    warning: {
      halo: colors.warning.tint,
      inner: colors.warning.base,
    },
    danger: {
      halo: colors.danger.tint,
      inner: colors.danger.base,
    },
    info: {
      halo: colors.primary.tint,
      inner: colors.primary.base,
    },
    secondary: {
      halo: colors.background.surface,
      inner: colors.foreground.tertiary,
    },
  } as const;

  return palette[variant];
};
