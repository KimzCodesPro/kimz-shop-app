import Icon from "@/components/icons";
import { View } from "react-native";
import Typography from "../../typography/Typography/Typography";

import { StatusBillProps } from "./types";
import useStyles from "./useStyles";
import { STATUS_ICON_SIZE } from "./constants";

const StatusBill = ({
  style,
  icon,
  variant = "filled",
  label,
  color,
}: StatusBillProps) => {
  const { styles, typographyColor } = useStyles(color, variant);
  return (
    <View style={[styles.container, style]}>
      {icon && <Icon name={icon} size={STATUS_ICON_SIZE} color={typographyColor} />}
      <Typography
        variant="xsmallBold"
        color={typographyColor}
        textTransform="capitalize"
      >
        {label}
      </Typography>
    </View>
  );
};

export default StatusBill;
