import { useRef, useState } from "react";
import { View } from "react-native";
import { scalingMethods } from "@/utils";
import { Carousel, CarouselRef } from "react-native-reanimated-carousel";
import CarouselItem from "../CarouselItem/CarouselItem";
import PaginationDot from "./PaginationDot";
import { CarouselProps } from "./types";
import useCarouselStyles from "./useCarouselStyles";

const { VS } = scalingMethods;

const RNCarousel = ({
  data,
  height,
  paginationDotType = "circle",
}: CarouselProps) => {
  const ref = useRef<CarouselRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { styles } = useCarouselStyles();

  return (
    <View>
      <Carousel
        ref={ref}
        data={data}
        style={[styles.carousel, { height: VS(height) }]}
        onSnapToItem={setActiveIndex}
        renderItem={({ item }) => <CarouselItem item={item} />}
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
