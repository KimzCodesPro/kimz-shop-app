import { spacing } from "@/constants";

// Vertical margin on each side of the line, keyed by the space prop.
export const DIVIDER_SPACE = {
  none: 0,
  xs: spacing.space4.height,
  sm: spacing.space8.height,
  md: spacing.space12.height,
  lg: spacing.space16.height,
} as const;
