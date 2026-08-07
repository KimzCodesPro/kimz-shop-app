import { StyleProp, View, ViewStyle } from "react-native";
import AppScrollView from "../AppScrollView/AppScrollView";
import DismissKeyboard from "../DismissKeyboard/DismissKeyboard";
import { ScreenLayoutProps } from "./types";
import useStyles from "./useStyles";

const ScreenLayout = ({
  scrollable = false,
  renderTopBar,
  renderFooter,
  hasTabBar = false,
  paddingSides = "both",
  dismissKeyboardOnTap = true,
  contentContainerStyle,
  scrollProps,
  children,
}: ScreenLayoutProps) => {
  const { styles } = useStyles({
    hasTopBar: !!renderTopBar,
    hasTabBar,
    paddingSides,
    hasFooter: !!renderFooter,
  });

  const topBar = renderTopBar?.();
  const footer = renderFooter?.();

  // The two branches pad their footer differently, so the style comes from the
  // call site. Null without a footer — an empty View would still count as a
  // flex child and the wrapper's gap would open a hole under the content.
  const renderFooterView = (style: StyleProp<ViewStyle>) =>
    footer ? <View style={style}>{footer}</View> : null;

  const renderContent = (
    <View style={[styles.container, contentContainerStyle]}>{children}</View>
  );

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
        {renderFooterView(styles.scrollFooter)}
      </View>
    );
  }

  if (dismissKeyboardOnTap) {
    return (
      <DismissKeyboard style={styles.viewWrapper}>
        {topBar}
        {renderContent}
        {renderFooterView(styles.viewFooter)}
      </DismissKeyboard>
    );
  }

  return (
    <View style={styles.viewWrapper}>
      {topBar}
      {renderContent}
      {renderFooterView(styles.viewFooter)}
    </View>
  );
};

export default ScreenLayout;
