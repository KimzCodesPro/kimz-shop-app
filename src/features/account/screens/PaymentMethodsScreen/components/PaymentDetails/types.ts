import { CardType } from "../PaymentMethodsList/types";

export type PaymentDetailsProps = {
  cardType: CardType;
  cardNumber: string;
  expiryDate: string;
  cardHolderName: string;
  setAsDefaultHandler: () => void;
  deleteHandler: () => void;
};
