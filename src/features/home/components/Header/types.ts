import { UserGreetingProps } from "@/components/ui/display/UserGreeting/types";

export type HeaderProps = Pick<
  UserGreetingProps,
  "userName" | "meta" | "imgSrc"
> & {
  unReadNotifications: boolean;
  onUserPress: () => void;
  onFavoritePress: () => void;
  onNotificationPress: () => void;
};
