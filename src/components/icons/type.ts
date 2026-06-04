import { StyleProp, ViewStyle } from "react-native";
import iconList from "./components/iconList";

export type IconName = keyof typeof iconList;

type IconProps = {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export default IconProps;
