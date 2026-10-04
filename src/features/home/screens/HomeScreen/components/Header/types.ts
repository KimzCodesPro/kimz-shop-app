import { UserGreetingProps } from "@/components/ui/display/UserGreeting/types";
import { StyleProp, ViewStyle } from "react-native";

export type HeaderProps = Pick<
  UserGreetingProps,
  "userName" | "meta" | "imgSrc"
> & {
  unReadNotifications: boolean;
  onUserPress: () => void;
  onFavoritePress: () => void;
  onNotificationPress: () => void;
  style?: StyleProp<ViewStyle>;
};
