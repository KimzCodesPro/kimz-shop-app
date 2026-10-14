import { ThemePalette } from "@/types";

export const statusBillColor = (colors: ThemePalette) =>
  ({
    outline: {
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
