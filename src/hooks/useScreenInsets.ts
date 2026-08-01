import { scalingMethods } from "@/utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { VS } = scalingMethods;

const SPACE_BOTTOM = 24;

type ScreenInsets = {
  hasTopBar?: boolean;
  hasTabBar?: boolean;
  overRidebottomInset?: number; // pass 110 for sticky-CTA screens
};

const useScreenInsets = ({
  hasTopBar = false,
  hasTabBar = false,
  overRidebottomInset = SPACE_BOTTOM,
}: ScreenInsets) => {
  const insets = useSafeAreaInsets();
  const bottomWithScale = VS(overRidebottomInset);
  const bottom = hasTabBar ? bottomWithScale : insets.bottom + bottomWithScale;

  return {
    paddingTop: hasTopBar ? 0 : insets.top,
    paddingBottom: bottom,
  };
};

export default useScreenInsets;
