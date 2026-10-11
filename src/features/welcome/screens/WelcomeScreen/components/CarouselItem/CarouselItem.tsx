import { Typography } from "@/components/ui/typography";
import { Image } from "expo-image";
import { View } from "react-native";
import { CarouselItemProps } from "./types";
import useStyles from "./useStyles";

const CarouselItem = ({ img, title, description }: CarouselItemProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.item}>
      <Image
        source={img}
        contentFit="cover"
        transition={1000}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Typography variant="largeBold" style={styles.title}>
          {title}
        </Typography>
        <Typography variant="smallRegular" style={styles.description}>
          {description}
        </Typography>
      </View>
    </View>
  );
};

export default CarouselItem;
