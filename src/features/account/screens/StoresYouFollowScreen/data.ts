import { brandSample, brandSample2, brandSample3 } from "@/assets/images";

const STORES_LIST = [
  { id: 1, name: "Adidas", followerNumber: 1240, imgSrc: brandSample },
  { id: 2, name: "Nike", followerNumber: 3580, imgSrc: brandSample2 },
  { id: 3, name: "Marc Jacobs", followerNumber: 860, imgSrc: brandSample3 },
];

// Toggle to preview the screen with or without followed stores.
const HAS_STORES: boolean = true;

export { HAS_STORES, STORES_LIST };
