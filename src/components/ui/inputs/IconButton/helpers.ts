import { ThemePalette } from "@/types";
import { IconButtonVariant } from "./types";

// Built inside a function because the values come from the resolved theme,
// so they can only be read once useTheme has run.
export const getIconButtonColors = (
  colors: ThemePalette,
  variant: IconButtonVariant,
) => {
  const palette = {
    primary: {
      background: colors.background.base,
      icon: colors.primary.base,
      border: colors.primary.base,
    },
  } as const;

  return palette[variant];
};
