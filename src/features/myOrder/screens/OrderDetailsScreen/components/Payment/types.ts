import { StyleProp, ViewStyle } from "react-native";

export type PaymentProps = {
  style?: StyleProp<ViewStyle>;
  type: "Visa" | "MasterCard";
  cardNumber: string;
};
