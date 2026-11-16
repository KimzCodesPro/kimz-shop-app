import { ThemePalette } from "@/types";
import { StockStatus } from "./types";

// Returns the dot, background and text colors for one stock status.
// dot + text use the strong shade, the background uses the light tint.
export const getStockBadgeColors = (
  colors: ThemePalette,
  stockStatus: StockStatus,
) => {
  const palette = {
    inStock: {
      dot: colors.success.strong,
      background: colors.success.tint,
      typography: colors.success.strong,
    },
    outOfStock: {
      dot: colors.danger.strong,
      background: colors.danger.tint,
      typography: colors.danger.strong,
    },
  } as const;

  return palette[stockStatus];
};
