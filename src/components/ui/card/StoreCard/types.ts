import { StyleProp, ViewStyle } from "react-native";

export type StoreCardProps = {
  name: string;
  imgSrc: string;
  followerNumber: number;
  removeFollowing: () => void;
  // tapping the card (outside the follow button), e.g. open the store page
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
