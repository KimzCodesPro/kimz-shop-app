import { StyleProp, ViewStyle } from "react-native";

export type ProductCardProps = {
  productName: string;
  price: number;
  discountPrice?: number;
  brand: string;
  imgSrc?: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
