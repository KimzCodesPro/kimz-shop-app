import { View } from "react-native";
import AppScrollView from "../AppScrollView/AppScrollView";
import DismissKeyboard from "../DismissKeyboard/DismissKeyboard";
import { ScreenLayoutProps } from "./types";
import useStyles from "./useStyles";

const ScreenLayout = ({
  scrollable = false,
  topBar,
  hasTabBar = false,
  dismissKeyboardOnTap = true,
  contentContainerStyle,
  scrollProps,
  children,
}: ScreenLayoutProps) => {
  const { styles } = useStyles(!!topBar, hasTabBar);

  if (scrollable) {
    return (
      <View style={styles.scrollViewWrapper}>
        {topBar}
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
        {topBar}
        {ContentRender}
      </DismissKeyboard>
    );
  }

  return (
    <View style={styles.viewWrapper}>
      {topBar}
      {ContentRender}
    </View>
  );
};

export default ScreenLayout;
