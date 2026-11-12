import { StatusVariant, ThemePalette } from "@/types";
import { StatusBillVariant } from "./types";

// Returns the border, background and text colors for one variant + color.
export const getStatusBillColors = (
  colors: ThemePalette,
  variant: StatusBillVariant,
  selectedColor: Exclude<StatusVariant, "secondary">,
) => {
  const palette = {
    outlined: {
      success: {
        border: colors.success.strong,
        background: colors.background.base,
        typography: colors.success.strong,
      },
      warning: {
        border: colors.warning.base,
        background: colors.background.base,
        typography: colors.warning.base,
      },
      info: {
        border: colors.primary.pressed,
        background: colors.background.base,
        typography: colors.primary.pressed,
      },
      danger: {
        border: colors.danger.strong,
        background: colors.background.base,
        typography: colors.danger.strong,
      },
    },
    filled: {
      success: {
        border: colors.success.strong,
        background: colors.success.strong,
        typography: colors.foreground.contrast,
      },
      warning: {
        border: colors.warning.base,
        background: colors.warning.base,
        typography: colors.foreground.contrast,
      },
      info: {
        border: colors.primary.base,
        background: colors.primary.base,
        typography: colors.foreground.contrast,
      },
      danger: {
        border: colors.danger.base,
        background: colors.danger.base,
        typography: colors.foreground.contrast,
      },
    },
  } as const;

  return palette[variant][selectedColor];
};
