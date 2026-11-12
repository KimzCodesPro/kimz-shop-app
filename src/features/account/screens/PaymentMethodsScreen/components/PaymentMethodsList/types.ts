import { CARD_TYPE_CONFIG } from "./constants";

export type CardType = keyof typeof CARD_TYPE_CONFIG;

export type PaymentMethodItemInfo = {
  id: string;
  cardNumber: string;
  cardType: CardType;
  expiryDate: string;
  cardHolderName: string;
};

export type PaymentMethodsListProps = {
  items: PaymentMethodItemInfo[];
  selectedItem: string;
  onPress: (id: string) => void;
};
