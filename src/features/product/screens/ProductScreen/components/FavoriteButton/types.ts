export type FavoriteButtonProps = {
  // true = product is in favorites (filled heart), false = not (outline heart)
  isFavorite: boolean;
  onPress?: () => void;
};
