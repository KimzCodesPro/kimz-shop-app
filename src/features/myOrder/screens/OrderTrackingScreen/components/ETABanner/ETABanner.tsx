import Icon from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import { View } from "react-native";
import { DELIVERY_ICON_SIZE } from "./constants";
import useStyles from "./useStyles";

const ETABanner = () => {
  const { styles, colors } = useStyles();

  return (
    <View style={styles.container}>
      <Icon
        name="truck"
        size={DELIVERY_ICON_SIZE}
        color={colors.primary.base}
      />

      <View style={styles.info}>
        <Typography variant="smallRegular" style={styles.title}>
          Estimated Arrival
        </Typography>
        <Typography variant="normalBold" style={styles.eta}>
          25 September 2026
        </Typography>
      </View>
    </View>
  );
};

export default ETABanner;
