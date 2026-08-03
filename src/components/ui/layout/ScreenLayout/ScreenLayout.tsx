import { View } from "react-native";
import DismissKeyboard from "../DismissKeyboard/DismissKeyboard";
import VerticalScrollView from "../VerticalScrollView/VerticalScrollView";
import { ScreenLayoutProps } from "./types";
import useStyles from "./useStyles";

const ScreenLayout = ({
  scrollable = false,
  hasTopBar = true,
  hasTabBar = false,
  dismissKeyboardOnTap = true,
  scrollProps,
  children,
}: ScreenLayoutProps) => {
  const { styles } = useStyles(hasTopBar, hasTabBar);

  if (scrollable) {
    return (
      <View style={styles.scrollViewWrapper}>
        <VerticalScrollView
          {...scrollProps}
          contentContainerStyle={[
            styles.scrollViewContent,
            scrollProps?.contentContainerStyle,
          ]}
        >
          {children}
        </VerticalScrollView>
      </View>
    );
  }

  // The scrollable branch gets tap-to-dismiss from VerticalScrollView's
  // keyboardShouldPersistTaps="handled", so wrap here to match it.
  if (dismissKeyboardOnTap) {
    return (
      <DismissKeyboard style={styles.viewWrapper}>{children}</DismissKeyboard>
    );
  }

  return <View style={styles.viewWrapper}>{children}</View>;
};

export default ScreenLayout;
