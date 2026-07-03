import Icon from "@/components/icons";
import { View } from "react-native";
import Typography from "../../display/Typography/Typography";
import useStyles from "./useStyles";

type RowNavTrailingProps =
  | { trailing: "chevronWithValue"; trailingValue: string }
  | { trailing: "chevron" | "noChevron"; trailingValue?: never };

const RowNavTrailing = ({ trailing, trailingValue }: RowNavTrailingProps) => {
  const { styles, colors } = useStyles();

  if (trailing === "noChevron") return null;

  return (
    <View style={styles.trailing}>
      {trailing === "chevronWithValue" && (
        <Typography variant="smallRegular" color={colors.foreground.tertiary}>
          {trailingValue}
        </Typography>
      )}
      <Icon
        name="chevron"
        size={22}
        color={colors.foreground.tertiary}
        supportRTL
      />
    </View>
  );
};

export default RowNavTrailing;
