import { onBoard1, onBoard2, onBoard3 } from "@/assets/images";
import { CarouselSlide } from "./components/Carousel/types";

const SLIDE_DESCRIPTION =
  "Urna amet, suspendisse ullamcorper ac elit diam facilisis cursus vestibulum.";

export const LANDING_SLIDES: CarouselSlide[] = [
  {
    img: onBoard1,
    title: "Various Collections Of The Latest Products",
    description: SLIDE_DESCRIPTION,
  },
  {
    img: onBoard2,
    title: "Complete Collection Of Colors And Sizes",
    description: SLIDE_DESCRIPTION,
  },
  {
    img: onBoard3,
    title: "Fast Delivery And Secure Payment",
    description: SLIDE_DESCRIPTION,
  },
];
