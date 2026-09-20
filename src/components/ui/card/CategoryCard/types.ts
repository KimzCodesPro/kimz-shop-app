import { ImageProps } from "expo-image";
import { StyleProp, ViewStyle } from "react-native";

export type CategoryCardProps = {
  categoryName: string;
  productsCount: number;
  imgSrc: ImageProps["source"];
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
