import { Pressable } from "react-native";
import { PaginationDotProps } from "./types";
import useStyles from "./useStyles";

const PaginationDot = ({
  active,
  onPress,
  paginationDotType,
}: PaginationDotProps) => {
  const { styles } = useStyles(paginationDotType);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.dot, active && styles.activeDot]}
    />
  );
};

export default PaginationDot;
