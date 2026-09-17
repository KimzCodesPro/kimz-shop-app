import { onBoard1, onBoard2, onBoard3 } from "@/assets/images";
import { TranslationKey } from "@/types";
import { CarouselSlide } from "./components/Carousel/types";

// Slides hold translation keys; LandingScreen resolves them with t() so the
// carousel re-renders in the active language.
type LandingSlide = Omit<CarouselSlide, "title" | "description"> & {
  title: TranslationKey;
  description: TranslationKey;
};

export const LANDING_SLIDES: LandingSlide[] = [
  {
    img: onBoard1,
    title: "onBoarding_titleOne",
    description: "onBoarding_description",
  },
  {
    img: onBoard2,
    title: "onBoarding_titleTwo",
    description: "onBoarding_description",
  },
  {
    img: onBoard3,
    title: "onBoarding_titleThree",
    description: "onBoarding_description",
  },
];
