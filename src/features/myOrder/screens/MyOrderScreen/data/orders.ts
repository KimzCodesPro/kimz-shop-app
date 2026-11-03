import { productSample } from "@/assets/images";

const MY_ORDERS_LIST = [
  {
    orderNumber: "#10234",
    products: [
      { id: "1", title: "Marc Jacobs Mini", imgSrc: productSample },
      { id: "2", title: "Second Item", imgSrc: productSample },
      { id: "3", title: "Third Item", imgSrc: productSample },
    ],
    total: 377,
    status: "onProgress",
  },
  {
    orderNumber: "#10235",
    products: [{ id: "4", title: "Fourth Item", imgSrc: productSample }],
    total: 129,
    status: "onProgress",
  },
] as const;

const HISTORY_ORDERS_LIST = [
  {
    orderNumber: "#10120",
    products: [{ id: "5", title: "Fifth Item", imgSrc: productSample }],
    total: 59,
    status: "completed",
  },
  {
    orderNumber: "#10121",
    products: [{ id: "6", title: "Sixth Item", imgSrc: productSample }],
    total: 99,
    status: "cancelled",
  },
] as const;

// Toggles to preview each tab with or without orders.
const HAS_MY_ORDERS: boolean = false;
const HAS_HISTORY_ORDERS: boolean = false;

export {
  HAS_HISTORY_ORDERS,
  HAS_MY_ORDERS,
  HISTORY_ORDERS_LIST,
  MY_ORDERS_LIST
};

