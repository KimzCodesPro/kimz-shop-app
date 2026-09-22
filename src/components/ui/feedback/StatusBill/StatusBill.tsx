import Icon from "@/components/icons";
import { View } from "react-native";
import Typography from "../../typography/Typography/Typography";

import { StatusBillProps } from "./types";
import useStyles from "./useStyles";

const StatusBill = ({
  style,
  icon,
  variant = "filled",
  label,
  color,
}: StatusBillProps) => {
  const { styles, strongColor } = useStyles(color, variant);
  return (
    <View style={[styles.container, style]}>
      {icon && <Icon name={icon} size={13} color={strongColor} />}
      <Typography
        variant="xsmallBold"
        color={strongColor}
        textTransform="capitalize"
      >
        {label}
      </Typography>
    </View>
  );
};

export default StatusBill;
