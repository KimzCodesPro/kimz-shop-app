import { ScrollView } from "react-native";
import { VerticalScrollViewProps } from "./types";

// Project defaults for every vertical scrollable surface. Any prop can be
// overridden by the caller since props are spread after the defaults.
const VerticalScrollView = ({ children, ...props }: VerticalScrollViewProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export default VerticalScrollView;
