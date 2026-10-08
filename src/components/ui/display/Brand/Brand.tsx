import { brandPlaceholder } from "@/assets/images";
import { Typography } from "@/components/ui/typography";
import { Image } from "expo-image";
import { Pressable } from "react-native";
import { BrandProps } from "./types";
import useStyles from "./useStyles";
const Brand = ({ name, logo, onPress }: BrandProps) => {
  const { styles, colors } = useStyles();

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={logo}
        style={styles.logo}
        contentFit="cover"
        placeholder={brandPlaceholder}
        placeholderContentFit="cover"
        transition={1000}
      />

      <Typography
        variant="xsmallRegular"
        textTransform="capitalize"
        color={colors.foreground.primary}
      >
        {name}
      </Typography>
    </Pressable>
  );
};

export default Brand;
