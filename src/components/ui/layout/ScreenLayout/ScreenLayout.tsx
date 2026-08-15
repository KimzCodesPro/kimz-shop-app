import { View } from "react-native";
import DismissKeyboard from "../DismissKeyboard/DismissKeyboard";
import VerticalScrollView from "../VerticalScrollView/VerticalScrollView";
import { ScreenLayoutProps } from "./types";
import useStyles from "./useStyles";

const ScreenLayout = ({
  scrollable = false,
  renderTopBar,
  hasTabBar = false,
  paddingSides = "both",
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

  // The content area is always the dismiss target — with children and style
  // passed as values rather than functions, Pressable never tracks its own
  // pressed state, so a screen with no inputs pays for a View and nothing more.
  if (scrollable) {
    return (
      <View style={styles.scrollViewWrapper}>
        {topBar}
        <DismissKeyboard style={[styles.container, contentContainerStyle]}>
          <VerticalScrollView {...scrollProps}>{children}</VerticalScrollView>
        </DismissKeyboard>
      </View>
    );
  }

  return (
    <View style={styles.viewWrapper}>
      {topBar}
      <DismissKeyboard style={[styles.container, contentContainerStyle]}>
        {children}
      </DismissKeyboard>
    </View>
  );
};

export default ScreenLayout;
