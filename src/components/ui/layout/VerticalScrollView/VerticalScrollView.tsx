import { ScrollView, StyleSheet } from "react-native";
import { CONTENT_BOTTOM_GAP } from "../ScreenLayout/constants";
import { VerticalScrollViewProps } from "./types";

// Project defaults for every vertical scrollable surface. Any prop can be
// overridden by the caller since props are spread after the defaults.
const VerticalScrollView = ({
  children,
  contentContainerStyle,
  ...props
}: VerticalScrollViewProps) => {
  return (
    <ScrollView
      // "handled" lets a tap through to whatever it landed on — a button fires
      // on the first press instead of spending it on closing the keyboard, and
      // ScreenLayout's dismiss target gets the taps that hit empty space. This
      // prop routes taps; it is not itself a dismiss-on-tap feature.
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      {...props}
      // Merged rather than spread, so a caller adding their own content styles
      // extends these defaults instead of dropping flexGrow along with them.
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // flexGrow so short content still fills the viewport — without it a screen
  // with one row can't stretch, and anything centred inside collapses.
  contentContainer: {
    flexGrow: 1,
    paddingBottom: CONTENT_BOTTOM_GAP,
  },
});

export default VerticalScrollView;
