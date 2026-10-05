import { spacing } from "@/src/constants";

import { ItemHorizontalSpace } from "./types";

export const horizontalSpace = (itemHorizontalSpace: ItemHorizontalSpace) => {
  return {
    small: spacing.space12.width,
    large: spacing.space20.width,
  }[itemHorizontalSpace];
};
