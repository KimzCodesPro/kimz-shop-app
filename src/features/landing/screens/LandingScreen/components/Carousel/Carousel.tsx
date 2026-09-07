import { Typography } from "@/components/ui/display";
import { Image } from "expo-image";
import { useRef } from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import {
  Carousel,
  CarouselRef,
  Pagination,
} from "react-native-reanimated-carousel";
import { CarouselProps } from "./types";
import useCarouselStyles from "./useCarouselStyles";

const RNCarousel = ({ data }: CarouselProps) => {
  const ref = useRef<CarouselRef>(null);
  const progress = useSharedValue(0);
  const { styles } = useCarouselStyles();

  return (
    <View>
      <Carousel
        ref={ref}
        data={data}
        progress={progress}
        style={styles.carousel}
        renderItem={({ item }) => (
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
        )}
      />
      <Pagination
        count={data.length}
        progress={progress}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        onPress={(index) => ref.current?.scrollTo({ index })}
        getItemAccessibilityLabel={(index, count) =>
          `Featured item ${index + 1} of ${count}`
        }
      />
    </View>
  );
};

export default RNCarousel;
