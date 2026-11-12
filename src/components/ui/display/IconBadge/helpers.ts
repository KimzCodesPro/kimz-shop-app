import { StatusVariant, ThemePalette } from "@/types";

// Built inside a function because the values come from the resolved theme,
// so they can only be read once useTheme has run.
export const getIconBadgeColor = (
  colors: ThemePalette,
  variant: Exclude<StatusVariant, "secondary">,
) => {
  const palette = {
    success: colors.success.strong,
    warning: colors.warning.base,
    info: colors.primary.base,
    danger: colors.danger.base,
  } as const;

  return palette[variant];
};
