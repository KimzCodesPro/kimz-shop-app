import { productSample } from "@/assets/images";

const CART_SHIPPING = 4;

const CART_ITEMS = [
  {
    id: "1",
    image: productSample,
    title: "Bix Bag Limited Edition",
    color: "Black",
    quantity: 1,
    price: 149,
  },
  {
    id: "2",
    image: productSample,
    title: "Second Item",
    color: "Beige",
    quantity: 2,
    price: 42.5,
  },
  {
    id: "3",
    image: productSample,
    title: "Third Item",
    color: "Navy",
    quantity: 1,
    price: 0.95,
  },
];

export { CART_ITEMS, CART_SHIPPING };
