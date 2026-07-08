import Icon, { IconName } from "@/components/icons";
import { StyleProp, View, ViewStyle } from "react-native";
import Typography from "../Typography/Typography";

import { StatusVariant } from "@/types";
import { StatusBillVariant } from "./types";
import useStyles from "./useStyles";

type StatusBillProps = {
  iconName?: IconName;
  variant?: StatusBillVariant;
  label: string;
  color: StatusVariant;
  style?: StyleProp<ViewStyle>;
};

const StatusBill = ({
  style,
  iconName,
  variant = "filled",
  label,
  color,
}: StatusBillProps) => {
  const { styles, strongColorType } = useStyles(color, variant);
  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <Icon name={iconName} size={13} color={strongColorType[color]} />
      )}
      <Typography
        variant="xsmallBold"
        color={strongColorType[color]}
        textTransform="capitalize"
      >
        {label}
      </Typography>
    </View>
  );
};

export default StatusBill;
