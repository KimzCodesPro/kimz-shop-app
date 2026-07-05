import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import Typography from "../Typography/Typography";
import useStyles from "./useStyles";

type InfoCardProps = {
  isSelected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const InfoCardLeading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { styles } = useStyles();

  return (
    <View style={styles.leading}>
      <Typography variant="smallBold" style={styles.leadingTitle}>
        {title}
      </Typography>
      <Typography variant="xsmallRegular" style={styles.leadingDescription}>
        {description}
      </Typography>
    </View>
  );
};

const InfoCardTrailing = ({ children }: { children?: React.ReactNode }) => {
  const { styles } = useStyles();
  return <View style={styles.trailing}>{children}</View>;
};

const InfoCard = ({ children, isSelected, onPress, style }: InfoCardProps) => {
  const { styles } = useStyles(isSelected);

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      {children}
    </Pressable>
  );
};

InfoCard.Leading = InfoCardLeading;
InfoCard.Trailing = InfoCardTrailing;

export default InfoCard;
