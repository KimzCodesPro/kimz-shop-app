import { StyleProp, ViewStyle } from "react-native";

export type StoreCardProps = {
  name: string;
  imgSrc: string;
  followerNumber: number;
  // true: button says "Following", false: button says "Follow"
  isFollowing: boolean;
  // one callback for the button: follow when not following, unfollow when following
  onFollowPress: () => void;
  // tapping the card (outside the follow button), e.g. open the store page
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
