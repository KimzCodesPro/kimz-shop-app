import colors from "../store/theme/colors.json";

export type Theme = "light" | "dark" | "system";

export type ThemeColors = typeof colors;

// One resolved palette, i.e. what useTheme hands back after light/dark is picked.
export type ThemePalette = ThemeColors[keyof ThemeColors];

export type StatusVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "secondary";
