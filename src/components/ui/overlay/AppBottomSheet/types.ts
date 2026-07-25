import { BottomSheetModal, BottomSheetModalProps } from "@gorhom/bottom-sheet";
import React, { Ref } from "react";

export type BottomSheetRef = BottomSheetModal | null;

export type AppBottomSheetProps = {
  title: string;
  description?: string;
  scrollable?: boolean;
  children?: React.ReactNode;
  bottomSheetProps?: Omit<BottomSheetModalProps, "children">;
  onDismiss?: () => void;
  ref?: Ref<BottomSheetRef>;
};
