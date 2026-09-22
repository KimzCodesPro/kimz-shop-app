import { ThemePalette } from "@/types";

// A function rather than a plain object: the colors come from the resolved
// theme, so they can only be read once useTheme has run. The `as const` keeps
// the font names as literals, which Typography's `variant` prop requires.
export const userGreetingTypography = (colors: ThemePalette) =>
  ({
    lg: {
      userName: {
        font: "mediumBold",
        color: colors.foreground.primary,
      },
      meta: {
        font: "smallRegular",
        color: colors.foreground.tertiary,
      },
    },
    sm: {
      userName: {
        font: "normalBold",
        color: colors.foreground.primary,
      },
      meta: {
        font: "smallRegular",
        color: colors.foreground.secondary,
      },
    },
  }) as const;
