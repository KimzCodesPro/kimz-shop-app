import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";
import React, { RefObject } from "react";

export type BottomSheetRef = BottomSheet | null;

export type AppBottomSheetProps = {
  title: string;
  description?: string;
  // Required: the sheet is meaningless without content, and ref is the only way
  // to open it (it starts closed and exposes no other trigger).
  children: React.ReactNode;
  // enableDynamicSizing is locked to false in AppBottomSheet (we rely on fixed
  // snapPoints), so callers can't override it and reintroduce content-measuring.
  // onChange is locked too — it drives the Android back handler. Use onClose or
  // onAnimate instead.
  bottomSheetProps?: Omit<
    BottomSheetProps,
    "children" | "enableDynamicSizing" | "index" | "onChange"
  >;
  // RefObject, not Ref: Ref's callback arm is write-only, and the Android back
  // handler has to read the instance back out to close the sheet. Callers lose
  // nothing — a callback ref can't drive an imperative-only sheet.
  ref: RefObject<BottomSheetRef>;
};
