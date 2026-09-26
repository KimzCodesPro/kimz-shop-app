import { iconSize } from "@/src/constants";

export const trackingStageLabel = {
  orderPlaced: "orders_statusPlaced",
  shipped: "orders_statusShipped",
  inTransit: "orders_statusInTransit",
  delivered: "orders_statusDelivered",
} as const;

export const MARK_ICON_SIZE = iconSize.sm;
