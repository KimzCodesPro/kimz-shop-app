import { ImageProps } from "expo-image";
import { StyleProp, ViewStyle } from "react-native";

export type ProductCardProps = {
  productName: string;
  price: number;
  brand: string;
  imgSrc: ImageProps["source"];
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
