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
  dismissKeyboardOnTap = false,
  verticalCenterAlignment = false,
  horizontalCenterAlignment = false,
  children,
}: ScreenLayoutProps) => {
  const { styles } = useStyles({
    hasTopBar: !!renderTopBar,
    hasTabBar,
    paddingSides,
    horizontalCenterAlignment,
    verticalCenterAlignment,
  });

  const topBar = renderTopBar?.();

  const ContentArea = dismissKeyboardOnTap ? DismissKeyboard : View;

  if (scrollable) {
    return (
      <View style={styles.scrollViewWrapper}>
        {topBar}
        <VerticalScrollView {...scrollProps}>
          <ContentArea style={[styles.scrollContent, contentContainerStyle]}>
            {children}
          </ContentArea>
        </VerticalScrollView>
      </View>
    );
  }

  return (
    <View style={styles.viewWrapper}>
      {topBar}
      <ContentArea style={[styles.viewContent, contentContainerStyle]}>
        {children}
      </ContentArea>
    </View>
  );
};

export default ScreenLayout;
