import { BottomSheetModal, BottomSheetModalProps } from "@gorhom/bottom-sheet";
import { ReactNode, Ref } from "react";

export type BottomSheetRef = BottomSheetModal | null;

export type AppBottomSheetProps = {
  title: string;
  description?: string;
  // Required: the sheet is meaningless without content, and ref is the only way
  // to open it (it starts closed and exposes no other trigger).
  children: ReactNode;
  // enableDynamicSizing is locked to false in AppBottomSheet (we rely on fixed
  // snapPoints), so callers can't override it and reintroduce content-measuring.
  // onChange is locked too — it drives the Android back handler. Use onClose or
  // onAnimate instead.
  bottomSheetProps?: Omit<
    BottomSheetModalProps,
    "children" | "enableDynamicSizing" | "index" | "onChange"
  >;
  // The full Ref union, so callers may pass any ref shape. The Android back
  // handler needs to read the instance back out, which only the RefObject arm
  // allows — so AppBottomSheet narrows to that arm before subscribing.
  ref: Ref<BottomSheetRef>;
};
