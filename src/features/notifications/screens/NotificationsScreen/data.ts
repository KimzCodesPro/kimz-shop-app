const NOTIFICATIONS_LIST = [
  {
    type: "purchase-completed",
    title: "Purchase Completed",
    description: "Your order #1024 has been placed successfully.",
    timeAgo: "notification_timeNow",
  },
  {
    type: "flash-sale",
    title: "Flash Sale",
    description: "Up to 50% off on selected bags. Ends tonight!",
    timeAgo: "notification_time1h",
  },
  {
    type: "package-sent",
    title: "Package Sent",
    description: "Your package is on the way and will arrive in 2 days.",
    timeAgo: "notification_time1d",
  },
  {
    type: "security-alert",
    title: "Security Alert",
    description: "A new device signed in to your account.",
    timeAgo: "notification_time2d",
  },
] as const;

export { NOTIFICATIONS_LIST };
