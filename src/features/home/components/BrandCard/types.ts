import { StyleProp, ViewStyle } from "react-native";

export type BrandCardProps = {
  name: string;
  logo?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
