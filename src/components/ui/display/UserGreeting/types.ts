import { StyleProp, ViewStyle } from "react-native";

export type UserGreetingProps = {
  size: "lg" | "sm";
  imgSrc: string;
  userName: string;
  meta: string;
  style?: StyleProp<ViewStyle>;
};
