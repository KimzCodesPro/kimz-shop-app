import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";
import { Ref } from "react";

export type BottomSheetRef = BottomSheet | null;

export type AppBottomSheetProps = {
  title: string;
  description?: string;
  bottomSheetProps?: BottomSheetProps;
  ref?: Ref<BottomSheetRef>;
};
