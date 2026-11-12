import { productSample2, productSample3 } from "@/assets/images";
import { ProductLineItem } from "@/components/ui/card/ProductLineItemCard/types";

const CHECKOUT_ADDRESS = {
  city: "Cairo",
  address: "12 El Nasr Street, Nasr City",
  type: "home",
} as const;

const CHECKOUT_PAYMENT = {
  cardNumber: "4242",
  cardType: "Visa",
  expiryDate: "08/28",
  isDefault: true,
} as const;

const CHECKOUT_ITEMS: ProductLineItem[] = [
  {
    id: "1",
    image: productSample2,
    title: "Classic Cotton T-Shirt",
    color: "Black",
    quantity: 2,
    price: 24.99,
  },
  {
    id: "2",
    image: productSample3,
    title: "Slim Fit Denim Jeans",
    color: "Blue",
    quantity: 1,
    price: 49.99,
  },
];

export { CHECKOUT_ADDRESS, CHECKOUT_ITEMS, CHECKOUT_PAYMENT };
