import { iconSize } from "@/constants";
export const notificationIcon = {
  "purchase-completed": "shopping-cart",
  "flash-sale": "discount",
  "package-sent": "truck",
  "payment-successful": "credit-card",
  "rate-purchase": "star",
  "refund-processed": "credit-card-refund",
  "security-alert": "alert-triangle",
  "share-your-feedback": "file-text",
} as const;

// Glyph picked per notification type, inside the leading wrapper.
export const NOTIFICATION_ICON_SIZE = iconSize.lg;
