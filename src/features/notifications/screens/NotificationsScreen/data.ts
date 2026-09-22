import type { NotificationItemProps } from "../../components/NotificationItem/types";

const NOTIFICATIONS_LIST: NotificationItemProps[] = [
  {
    type: "purchase-completed",
    title: "Purchase Completed",
    description: "Your order #1024 has been placed successfully.",
    timeAgo: "2m ago",
  },
  {
    type: "flash-sale",
    title: "Flash Sale",
    description: "Up to 50% off on selected bags. Ends tonight!",
    timeAgo: "1h ago",
  },
  {
    type: "package-sent",
    title: "Package Sent",
    description: "Your package is on the way and will arrive in 2 days.",
    timeAgo: "3h ago",
  },
  {
    type: "security-alert",
    title: "Security Alert",
    description: "A new device signed in to your account.",
    timeAgo: "1d ago",
  },
];

export { NOTIFICATIONS_LIST };
