import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";
import React, { Ref } from "react";

export type BottomSheetRef = BottomSheet | null;

export type AppBottomSheetProps = {
  title: string;
  description?: string;
  // Required: the sheet is meaningless without content, and ref is the only way
  // to open it (it starts closed and exposes no other trigger).
  children: React.ReactNode;
  // enableDynamicSizing is locked to false in AppBottomSheet (we rely on fixed
  // snapPoints), so callers can't override it and reintroduce content-measuring.
  bottomSheetProps?: Omit<
    BottomSheetProps,
    "children" | "enableDynamicSizing" | "index"
  >;
  ref: Ref<BottomSheetRef>;
};
