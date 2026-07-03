import { Pressable, StyleProp, ViewStyle } from "react-native";
import useStyles from "./useStyles";

type InfoCardProps = {
  isSelected?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const InfoCard = ({ isSelected, onPress, children, style }: InfoCardProps) => {
  const { styles } = useStyles(isSelected);

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      {children}
    </Pressable>
  );
};

export default InfoCard;
