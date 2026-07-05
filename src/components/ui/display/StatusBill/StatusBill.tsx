import Icon, { IconName } from "@/components/icons";
import { View } from "react-native";
import Typography from "../Typography/Typography";

import { StatusVariant } from "@/types";
import useStyles from "./useStyles";

type StatusBillProps = {
  iconName: IconName;
  label: string;
  color: StatusVariant;
};

const StatusBill = ({ iconName, label, color }: StatusBillProps) => {
  const { styles, strongColorType } = useStyles(color);
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={13} color={strongColorType[color]} />
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
