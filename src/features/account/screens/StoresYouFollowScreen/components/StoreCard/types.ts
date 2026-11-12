import { StyleProp, ViewStyle } from "react-native";

export type StoreCardProps = {
  name: string;
  imgSrc: string;
  followerNumber: number;
  removeFollowing: () => void;
  style?: StyleProp<ViewStyle>;
};
