import { IconName } from "@/components/icons";
import { EmptyStateType } from "./types";

export const EMPTY_STATE_ICON: Record<EmptyStateType, IconName> = {
  cart: "shopping-cart",
  favorite: "heart",
  ordersActive: "truck",
  ordersHistory: "history",
  notifications: "bell",
  storesFollow: "shopping-bag",
  search: "search",
};
