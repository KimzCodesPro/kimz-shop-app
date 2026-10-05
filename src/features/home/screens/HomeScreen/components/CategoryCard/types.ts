import { StyleProp, ViewStyle } from "react-native";

export type CategoryCardProps = {
  categoryName: string;
  productsCount: number;
  imgSrc: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
