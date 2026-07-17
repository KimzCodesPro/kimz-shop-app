import { StyleProp, ViewStyle } from "react-native";
import iconList from "./components/iconMapper";

export type IconName = keyof typeof iconList;

export type IconProps = {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};
