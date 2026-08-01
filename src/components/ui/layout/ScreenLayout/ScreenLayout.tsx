import { View } from "react-native";
import AppScrollView from "../AppScrollView/AppScrollView";
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
  return <View style={styles.viewWrapper}>{children}</View>;
};

export default ScreenLayout;
