import { UserGreetingProps } from "@/components/ui/display/UserGreeting/types";

export type HeaderProps = Pick<
  UserGreetingProps,
  "userName" | "meta" | "imgSrc"
> & {
  unReadNotifications: boolean;
  onFavoritePress: () => void;
  onNotificationPress: () => void;
};
