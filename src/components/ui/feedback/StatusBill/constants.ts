import { iconSize } from "@/constants";
import { ThemePalette } from "@/types";

export const VARIANT_TO_SCHEMA = {
  outlined: "outline",
  filled: "fill",
} as const;

export const statusBillColor = (colors: ThemePalette) =>
  ({
    outline: {
      success: {
        border: colors.success.strong,
        background: "transparent",
        typography: colors.success.strong,
      },
      warning: {
        border: colors.warning.base,
        background: "transparent",
        typography: colors.warning.base,
      },
      info: {
        border: colors.primary.pressed,
        background: "transparent",
        typography: colors.primary.pressed,
      },
      danger: {
        border: colors.danger.strong,
        background: "transparent",
        typography: colors.danger.strong,
      },
    },
    fill: {
      success: {
        border: colors.success.base,
        background: colors.success.base,
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
  }) as const;

// Optional glyph before the bill's label.
export const STATUS_ICON_SIZE = iconSize.xs;
