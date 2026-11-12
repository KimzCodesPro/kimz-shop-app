import { productSample2, productSample3 } from "@/assets/images";
import { ProductLineItem } from "@/components/ui/card/ProductLineItemCard/types";

const CHECKOUT_ADDRESSES = [
  {
    id: "1",
    city: "Cairo",
    address: "12 El Nasr Street, Nasr City",
    type: "home",
  },
  {
    id: "2",
    city: "Alexandria",
    address: "8 El Geish Road, Sidi Gaber",
    type: "apartment",
  },
  {
    id: "3",
    city: "Giza",
    address: "45 Gameat El Dewal El Arabeya, Mohandessin",
    type: "office",
  },
] as const;

const CHECKOUT_PAYMENTS = [
  {
    id: "1",
    cardNumber: "4242",
    cardType: "Visa",
    expiryDate: "08/28",
    variant: "info",
    isDefault: true,
  },
  {
    id: "2",
    cardNumber: "5555",
    cardType: "Mastercard",
    expiryDate: "11/27",
    variant: "warning",
    isDefault: false,
  },
  {
    id: "3",
    cardNumber: "1881",
    cardType: "Visa",
    expiryDate: "03/29",
    variant: "info",
    isDefault: false,
  },
] as const;

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

const CHECKOUT_PRICES = {
  subtotal: 400,
  shipping: 8,
  tax: 26.58,
  total: 477,
};

export {
  CHECKOUT_ADDRESSES,
  CHECKOUT_ITEMS,
  CHECKOUT_PAYMENTS,
  CHECKOUT_PRICES,
};
