import { AddressTypes } from "@/src/components/ui/card/AddressCard/types";
import { StyleProp, ViewStyle } from "react-native";

export type ShippingAddressProps = {
  style?: StyleProp<ViewStyle>;
  type: AddressTypes;
  userName: string;
  address: string;
  phoneNumber: string;
};
