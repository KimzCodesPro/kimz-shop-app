export type NotificationItemProps = {
  type:
    | "purchase-completed"
    | "flash-sale"
    | "package-sent"
    | "payment-successful"
    | "rate-purchase"
    | "refund-processed"
    | "security-alert"
    | "share-your-feedback";
  title: string;
  description: string;
  timeAgo: string;
};
