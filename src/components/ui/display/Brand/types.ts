import { StyleProp, ViewStyle } from "react-native";

export type BrandProps = {
  name: string;
  logo?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
