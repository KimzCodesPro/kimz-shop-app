import { ThemePalette } from "@/types";
import { RowNavVariant } from "./types";

// Built inside a function because the values come from the resolved theme,
// so they can only be read once useTheme has run.
export const getRowNavColor = (
  colors: ThemePalette,
  variant: RowNavVariant,
) => {
  const palette = {
    default: colors.foreground.primary,
    danger: colors.danger.base,
  } as const;

  return palette[variant];
};
