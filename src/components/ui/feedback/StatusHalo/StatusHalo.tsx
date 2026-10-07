import Icon from "@/components/icons";
import { View } from "react-native";
import { StatusHaloProps } from "./types";
import useStyles from "./useStyles";
import { HALO_ICON_SIZE } from "./constants";

const StatusHalo = ({ variant = "info", icon, style }: StatusHaloProps) => {
  const { styles, colors } = useStyles(variant);

  return (
    <View style={[styles.halo, style]}>
      <View style={styles.inner}>
        <Icon
          name={icon}
          color={colors.foreground.contrast}
          size={HALO_ICON_SIZE}
        />
      </View>
    </View>
  );
};

export default StatusHalo;
