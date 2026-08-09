import { View } from "react-native";
import AppScrollView from "../AppScrollView/AppScrollView";
import DismissKeyboard from "../DismissKeyboard/DismissKeyboard";
import { ScreenLayoutProps } from "./types";
import useStyles from "./useStyles";

const ScreenLayout = ({
  scrollable = false,
  renderTopBar,
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
  });

  const topBar = renderTopBar?.();

  const renderContent = (
    <View style={[styles.container, contentContainerStyle]}>{children}</View>
  );

  if (scrollable) {
    return (
      <View style={styles.scrollViewWrapper}>
        {topBar}
        <AppScrollView {...scrollProps}>{children}</AppScrollView>
      </View>
    );
  }

  if (dismissKeyboardOnTap) {
    return (
      <DismissKeyboard style={styles.viewWrapper}>
        {topBar}
        {renderContent}
      </DismissKeyboard>
    );
  }

  return (
    <View style={styles.viewWrapper}>
      {topBar}
      {renderContent}
    </View>
  );
};

export default ScreenLayout;
