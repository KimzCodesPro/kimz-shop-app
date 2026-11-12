import { ThemePalette } from "@/types";
import { StatusType } from "./types";

// Built inside a function because the values come from the resolved theme,
// so they can only be read once useTheme has run.
export const getFieldColors = (colors: ThemePalette, status: StatusType) => {
  const palette = {
    borderColor: {
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
  } as const;

  return {
    borderColor: palette.borderColor[status],
    iconColor: palette.iconColor[status],
  };
};

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
