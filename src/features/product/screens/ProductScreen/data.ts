import { brandSample3, productSample } from "@/assets/images";
import { ColorOption } from "./components/ColorSwitcher/types";

// sample data until real product data is connected
const PRODUCT_IMAGES = [productSample, productSample, productSample];

const PRODUCT_STORE = {
  name: "Marc Jacobs",
  followerNumber: 860,
  imgSrc: brandSample3,
};

const PRODUCT_COLORS: ColorOption[] = [
  { name: "Brown", code: "#a16207" },
  { name: "Black", code: "#0f1117" },
  { name: "Teal", code: "#0d9488" },
  { name: "Green", code: "#22c55e" },
  { name: "Red", code: "#dc2626" },
  { name: "Purple", code: "#a855f7" },
  { name: "Orange", code: "#fb923c" },
];

export { PRODUCT_COLORS, PRODUCT_IMAGES, PRODUCT_STORE };
