import { View } from "react-native";
import { BrandCardProps } from "./types";
import useStyles from "./useStyles";

const BrandCard = (_props: BrandCardProps) => {
  const { styles } = useStyles();

  return <View style={styles.container} />;
};

export default BrandCard;
