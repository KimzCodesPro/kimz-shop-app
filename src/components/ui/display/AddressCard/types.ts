import { StyleProp, ViewStyle } from "react-native";

export type AddressType = "home" | "office" | "apartment" | "other";

export type AddressCardProps = {
  city: string;
  address: string;
  type: AddressType;
  isSelected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
