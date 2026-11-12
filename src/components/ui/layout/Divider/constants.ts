import { spacing } from "@/constants";

// Vertical margin on each side of the line, keyed by the space prop.
export const SEPARATOR_SPACE = {
  sm: spacing.space8.height,
  lg: spacing.space16.height,
} as const;
