import { Typography } from "@/components/ui/typography";
import { Image } from "expo-image";
import { View } from "react-native";
import { CarouselItemProps } from "./types";
import useCarouselItemStyles from "./useCarouselItemStyles";

const CarouselItem = ({ item }: CarouselItemProps) => {
  const { styles } = useCarouselItemStyles();

  return (
    <View style={styles.item}>
      <Image
        source={item.img}
        contentFit="cover"
        transition={1000}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Typography variant="largeBold" style={styles.title}>
          {item.title}
        </Typography>
        <Typography variant="smallRegular" style={styles.description}>
          {item.description}
        </Typography>
      </View>
    </View>
  );
};

export default CarouselItem;
