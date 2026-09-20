import { ImageProps } from "expo-image";
import { StyleProp, ViewStyle } from "react-native";

export type PromoBannerCardProps = {
  title: string;
  shopLabel: string;
  imgSrc: ImageProps["source"];
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
