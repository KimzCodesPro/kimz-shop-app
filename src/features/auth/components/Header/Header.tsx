import { Typography } from "@/components/ui/typography";
import { View } from "react-native";
import { HeaderProps } from "./types";
import useStyles from "./useStyles";

const Header = ({ title, subtitle }: HeaderProps) => {
  const { styles, colors } = useStyles();

  return (
    <View style={styles.header}>
      <Typography variant="largeBold" color={colors.foreground.primary}>
        {title}
      </Typography>
      <Typography variant="smallRegular" color={colors.foreground.secondary}>
        {subtitle}
      </Typography>
    </View>
  );
};

export default Header;
