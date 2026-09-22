import { scalingMethods } from "@/utils";
import { useRef, useState } from "react";
import { View } from "react-native";
import { Carousel, CarouselRef } from "react-native-reanimated-carousel";
import PaginationDot from "./PaginationDot";
import { CarouselProps } from "./types";
import useCarouselStyles from "./useCarouselStyles";

const { VS } = scalingMethods;

const RNCarousel = <T,>({
  data,
  height,
  renderItem,
  paginationDotType = "circle",
  loop = false,
  autoplay = false,
  autoplayInterval = 3000,
}: CarouselProps<T>) => {
  const ref = useRef<CarouselRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { styles } = useCarouselStyles();

  return (
    <View>
      <Carousel
        ref={ref}
        data={data}
        loop={loop}
        autoplay={autoplay}
        autoplayInterval={autoplayInterval}
        style={[styles.carousel, { height: VS(height) }]}
        onSnapToItem={setActiveIndex}
        renderItem={({ item }) => renderItem(item)}
      />
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <PaginationDot
            paginationDotType={paginationDotType}
            key={index}
            active={index === activeIndex}
            onPress={() => ref.current?.scrollTo({ index, animated: true })}
          />
        ))}
      </View>
    </View>
  );
};

export default RNCarousel;
