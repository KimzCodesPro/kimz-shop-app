import Icon from "@/components/icons";
import { Pressable } from "react-native";
import { FavoriteButtonProps } from "./types";
import useStyles from "./useStyles";

const FavoriteButton = ({ isFavorite, onPress }: FavoriteButtonProps) => {
  const { styles, buttonColors } = useStyles(isFavorite);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon
        name={isFavorite ? "heart-filled" : "heart"}
        size="md"
        color={buttonColors.icon}
      />
    </Pressable>
  );
};

export default FavoriteButton;
