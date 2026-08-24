import { AddressType } from "@/components/ui/display/AddressCard/types";

export type AddressDetailsProps = {
  type: AddressType;
  governorate: string;
  streetName: string;
  buildingNum: string;
  city: string;
  floorNum: string;
  landMark: string;
  setAsDefaultHandler: () => void;
  editHandler: () => void;
  deleteHandler: () => void;
};
