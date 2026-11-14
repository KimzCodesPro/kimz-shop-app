import { ThemePalette, ToastType } from "@/types";

// Returns the border, icon and icon background colors for one toast type.
export const getToasterColors = (colors: ThemePalette, type: ToastType) => {
  const palette = {
    success: {
      border: colors.success.base,
      icon: colors.success.strong,
      iconBackground: colors.success.tint,
    },
    warning: {
      border: colors.warning.base,
      icon: colors.warning.base,
      iconBackground: colors.warning.tint,
    },
    danger: {
      border: colors.danger.base,
      icon: colors.danger.strong,
      iconBackground: colors.danger.tint,
    },
    info: {
      border: colors.primary.base,
      icon: colors.primary.pressed,
      iconBackground: colors.primary.tint,
    },
  };

  return palette[type];
};
