import { productSample } from "@/assets/images";

const ORDER = {
  orderNumber: "#KMZ-2024-0142",
  placedAt: "May 15, 2024",
  status: "onProgress",
} as const;

const ORDER_SUMMARY = {
  subtotal: 234.45,
  shipping: 4.0,
  total: 238.45,
} as const;

const ORDER_ITEMS = [
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

export { ORDER, ORDER_ITEMS, ORDER_SUMMARY };
