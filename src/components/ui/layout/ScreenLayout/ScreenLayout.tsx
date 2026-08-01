import { View } from "react-native";
import VerticalScrollView from "../VerticalScrollView/VerticalScrollView";
import { ScreenLayoutProps } from "./types";
import useStyles from "./useStyles";

const ScreenLayout = ({
  scrollable = false,
  hasTopBar = true,
  hasTabBar = false,
  overRidebottomInset,
  scrollProps,
  children,
}: ScreenLayoutProps) => {
  const { styles } = useStyles(hasTopBar, hasTabBar, overRidebottomInset);

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
  return <View style={styles.viewWrapper}>{children}</View>;
};

export default ScreenLayout;
