import { Typography } from "@/components/ui/typography";
import { View } from "react-native";
import { CurrentPillProps } from "./types";
import useStyles from "./useStyles";

const CurrentPill = ({ label }: CurrentPillProps) => {
  const { styles, colors } = useStyles();

  return (
    <View style={styles.container}>
      <Typography variant="xsmallBold" color={colors.primary.pressed}>
        {label}
      </Typography>
    </View>
  );
};

export default CurrentPill;
