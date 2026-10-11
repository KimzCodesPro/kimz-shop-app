import { scalingMethods } from "@/utils";
import { useRef, useState } from "react";
import { View } from "react-native";
import { Carousel, CarouselRef } from "react-native-reanimated-carousel";
import { DEFAULT_AUTOPLAY_INTERVAL } from "./constants";
import PaginationDot from "./PaginationDot/PaginationDot";
import { CarouselProps } from "./types";
import useStyles from "./useStyles";

const { VS } = scalingMethods;

const RNCarousel = <T,>({
  data,
  height,
  renderItem,
  paginationDotType = "circle",
  loop = false,
  autoplay = false,
  autoplayInterval = DEFAULT_AUTOPLAY_INTERVAL,
  style,
}: CarouselProps<T>) => {
  const ref = useRef<CarouselRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { styles } = useStyles();

  return (
    <View>
      <Carousel
        ref={ref}
        data={data}
        loop={loop}
        autoplay={autoplay}
        autoplayInterval={autoplayInterval}
        style={[styles.carousel, { height: VS(height) }, style]}
        // onProgressChange updates the dot mid-swipe (onSnapToItem waits until the swipe settles)
        onProgressChange={(p) => setActiveIndex(Math.round(p) % data.length)}
        renderItem={({ item }) => renderItem(item)}
      />
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <PaginationDot
            key={index}
            paginationDotType={paginationDotType}
            active={index === activeIndex}
            onPress={() => ref.current?.scrollTo({ index, animated: true })}
          />
        ))}
      </View>
    </View>
  );
};

export default RNCarousel;
