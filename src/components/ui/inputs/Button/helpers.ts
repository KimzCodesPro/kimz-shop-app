import { ThemePalette } from "@/types";
import { VariantType } from "./types";

// Built inside a function because the values come from the resolved theme,
// so they can only be read once useTheme has run.
export const getButtonColors = (colors: ThemePalette, variant: VariantType) => {
  const palette = {
    primary: {
      background: colors.primary.base,
      typography: colors.foreground.contrast,
      border: colors.primary.base,
    },
    "primary-outline": {
      background: colors.background.base,
      typography: colors.primary.base,
      border: colors.primary.base,
    },
    chip: {
      background: colors.background.base,
      typography: colors.primary.base,
      border: colors.primary.base,
    },
    link: {
      background: colors.background.base,
      typography: colors.primary.base,
      border: colors.background.base,
    },
    "link-danger": {
      background: colors.background.base,
      typography: colors.danger.base,
      border: colors.background.base,
    },
    ghost: {
      background: colors.background.base,
      typography: colors.foreground.primary,
      border: colors.border.default,
    },
  } as const;

  return palette[variant];
};
