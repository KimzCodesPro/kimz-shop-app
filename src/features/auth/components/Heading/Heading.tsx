import { Typography } from "@/components/ui/typography";
import { View } from "react-native";
import { HeadingProps } from "./types";
import useStyles from "./useStyles";

const Heading = ({ title, subtitle }: HeadingProps) => {
  const { styles, colors } = useStyles();

  return (
    <View style={styles.heading}>
      <Typography variant="largeBold" color={colors.foreground.primary}>
        {title}
      </Typography>
      <Typography variant="smallRegular" color={colors.foreground.secondary}>
        {subtitle}
      </Typography>
    </View>
  );
};

export default Heading;
