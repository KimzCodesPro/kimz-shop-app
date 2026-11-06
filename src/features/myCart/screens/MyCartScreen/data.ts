import {
  productSample,
  productSample2,
  productSample3,
} from "@/assets/images";

const CART_SHIPPING = 4;

const CART_ITEMS = [
  {
    id: "1",
    image: productSample,
    title: "Bix Bag Limited Edition",
    color: "Black",
    quantity: 1,
    price: 149,
    selected: false,
  },
  {
    id: "2",
    image: productSample2,
    title: "Second Item",
    color: "Beige",
    quantity: 2,
    price: 42.5,
    selected: false,
  },
  {
    id: "3",
    image: productSample3,
    title: "Third Item",
    color: "Navy",
    quantity: 1,
    price: 0.95,
    selected: false,
  },
];

// Toggle to preview the screen with or without cart items.
const HAS_CART_ITEMS: boolean = true;

export { CART_ITEMS, CART_SHIPPING, HAS_CART_ITEMS };
