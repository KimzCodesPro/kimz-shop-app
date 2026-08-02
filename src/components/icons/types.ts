import { ColorValue, StyleProp, ViewStyle } from "react-native";
import iconList from "./components/iconMapper";

export type IconName = keyof typeof iconList;

export type IconBase = {
  size?: number;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
};

export type IconProps = { name: IconName; flipOnRTL?: boolean } & IconBase;
