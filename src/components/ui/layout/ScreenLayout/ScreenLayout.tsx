import { View } from "react-native";
import AppScrollView from "../AppScrollView/AppScrollView";
import DismissKeyboard from "../DismissKeyboard/DismissKeyboard";
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
        <AppScrollView
          {...scrollProps}
          contentContainerStyle={[
            styles.scrollViewContent,
            scrollProps?.contentContainerStyle,
          ]}
        >
          {children}
        </AppScrollView>
      </View>
    );
  }

  if (dismissKeyboardOnTap) {
    return (
      <DismissKeyboard style={styles.viewWrapper}>{children}</DismissKeyboard>
    );
  }

  return <View style={styles.viewWrapper}>{children}</View>;
};

export default ScreenLayout;
