import { View } from "react-native";
import AppScrollView from "../AppScrollView/AppScrollView";
import DismissKeyboard from "../DismissKeyboard/DismissKeyboard";
import { ScreenLayoutProps } from "./types";
import useStyles from "./useStyles";

const ScreenLayout = ({
  scrollable = false,
  customTopBar,
  hasTabBar = false,
  dismissKeyboardOnTap = true,
  contentContainerStyle,
  scrollProps,
  children,
}: ScreenLayoutProps) => {
  const { styles } = useStyles(!!customTopBar, hasTabBar);

  if (scrollable) {
    return (
      <View style={styles.scrollViewWrapper}>
        {customTopBar}
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

  const ContentRender = (
    <View style={[styles.container, contentContainerStyle]}>{children}</View>
  );

  if (dismissKeyboardOnTap) {
    return (
      <DismissKeyboard style={styles.viewWrapper}>
        {customTopBar}
        {ContentRender}
      </DismissKeyboard>
    );
  }

  return (
    <View style={styles.viewWrapper}>
      {customTopBar}
      {ContentRender}
    </View>
  );
};

export default ScreenLayout;
