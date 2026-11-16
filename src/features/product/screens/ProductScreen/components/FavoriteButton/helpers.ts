import { ThemePalette } from "@/types";

// Returns the background and icon colors for the favorite state.
// default: neutral surface + muted icon, active: light red + red icon.
export const getFavoriteButtonColors = (
  colors: ThemePalette,
  isFavorite: boolean,
) => {
  const palette = {
    default: {
      background: colors.background.surface,
      icon: colors.foreground.tertiary,
    },
    active: {
      background: colors.danger.tint,
      icon: colors.danger.base,
    },
  } as const;

  return palette[isFavorite ? "active" : "default"];
};
