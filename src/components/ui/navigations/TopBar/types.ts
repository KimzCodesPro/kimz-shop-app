import { IconName } from "@/components/icons";
import { Href } from "expo-router";
import { StyleProp, ViewStyle } from "react-native";

export type TopBarBaseProps = {
  title: string;
  actionBtn?: { iconName: IconName; onPress: () => void; flipOnRTL: boolean };
  style?: StyleProp<ViewStyle>;
};

export type TopBarBackProps =
  | { goBack?: false; forceBack?: never }
  | { goBack: true; forceBack?: Href };

export type TopBarProps = TopBarBaseProps & TopBarBackProps;
