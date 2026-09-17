import Icon from "@/src/components/icons";
import { View } from "react-native";
import { StatusHaloProps } from "./types";
import useStyles from "./useStyles";

const StatusHalo = ({ variant = "info", icon, style }: StatusHaloProps) => {
  const { styles, colors } = useStyles(variant);

  return (
    <View style={[styles.halo, style]}>
      <View style={styles.inner}>
        <Icon name={icon} color={colors.foreground.contrast} size={36} />
      </View>
    </View>
  );
};

export default StatusHalo;
