import { brandSample3 } from "@/assets/images";
import { PRODUCTS_LIST, PRODUCTS_SLIDES } from "@/features/home/data";

// sample data until real store data is connected
const STORE = {
  name: "Marc Jacobs",
  followerNumber: 860,
  imgSrc: brandSample3,
};

// reuse the home samples so the store looks filled in
const STORE_SLIDES = PRODUCTS_SLIDES;
const STORE_PRODUCTS = PRODUCTS_LIST;

export { STORE, STORE_PRODUCTS, STORE_SLIDES };
