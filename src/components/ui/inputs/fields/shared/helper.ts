import { ThemePalette } from "@/types";
import { StatusType } from "./types";

// A function rather than a plain object: the values come from the resolved
// theme, so they can only be read once useTheme has run.
export const fieldStatusColor = (colors: ThemePalette) =>
  ({
    mainColor: {
      default: colors.border.default,
      focused: colors.primary.base,
      filled: colors.primary.base,
      error: colors.danger.base,
    },
    iconColor: {
      default: colors.foreground.tertiary,
      focused: colors.primary.base,
      filled: colors.primary.base,
      error: colors.danger.base,
    },
  }) as const;

export const fieldCurrentStatus = (
  errorMessage: string | undefined,
  isFocused: boolean,
  value: string,
): StatusType => {
  return errorMessage
    ? "error"
    : isFocused
      ? "focused"
      : value
        ? "filled"
        : "default";
};
