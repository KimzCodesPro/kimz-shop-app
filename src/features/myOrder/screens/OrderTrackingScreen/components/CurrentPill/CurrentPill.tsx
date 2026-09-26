import { Typography } from "@/src/components/ui/typography";
import { View } from "react-native";
import useStyles from "./useStyles";

const CurrentPill = ({ label }: { label: string }) => {
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
