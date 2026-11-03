import Icon from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import { CardWrapper } from "@/components/ui/card";
import { View } from "react-native";
import { ETABannerProps } from "./types";
import useStyles from "./useStyles";

const ETABanner = ({ title, subTitle, style }: ETABannerProps) => {
  const { styles, colors } = useStyles();

  return (
    <CardWrapper style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Icon
          name="truck"
          color={colors.primary.pressed}
        />
      </View>

      <View style={styles.info}>
        <Typography variant="smallBold" color={colors.foreground.primary}>
          {title}
        </Typography>
        <Typography variant="xsmallRegular" color={colors.primary.pressed}>
          {subTitle}
        </Typography>
      </View>
    </CardWrapper>
  );
};

export default ETABanner;
