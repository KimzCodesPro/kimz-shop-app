import Icon, { IconName } from "@/components/icons";
import { View } from "react-native";
import Typography from "../Typography/Typography";

import { StatusVariant } from "@/types";
import useStyles from "./useStyles";

type StatusBillProps = {
  iconName: IconName;
  type: string;
  color: StatusVariant;
};

const StatusBill = ({ iconName, type, color }: StatusBillProps) => {
  const { styles, strongColorType } = useStyles(color);
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={13} color={strongColorType[color]} />
      <Typography
        variant="xsmallBold"
        color={strongColorType[color]}
        textTransform="capitalize"
      >
        {type}
      </Typography>
    </View>
  );
};

export default StatusBill;
