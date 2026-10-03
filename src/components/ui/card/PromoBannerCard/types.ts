import { StyleProp, ViewStyle } from "react-native";

export type PromoBannerCardProps = {
  title: string;
  shopName: string;
  imgSrc: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
