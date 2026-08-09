import { Typography } from "@/components/ui/display";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import { ComponentProps, useEffect, useRef } from "react";
import { BackHandler, View } from "react-native";
import { AppBottomSheetProps } from "./types";
import useStyles from "./useStyles";

const AppBottomSheet = (props: AppBottomSheetProps) => {
  const { title, description, children, bottomSheetProps, ref } = props;
  const { styles } = useStyles();
  // A ref, not state: onChange fires on every snap point, and openness only
  // ever needs to be read inside the back handler below — never rendered.
  const isOpen = useRef(false);

  // Android back press: the sheet is portaled to the app root, outside the
  // navigator, so the press falls through to expo-router and pops the screen
  // while the sheet stays up. gorhom has no prop for this (still an open
  // request upstream), so claim the press ourselves. Returning false while
  // closed hands the press to expo-router's own listener, which is registered
  // at app root and therefore older — RN runs them newest-first, so this one
  // always gets first refusal. No platform check needed: BackHandler is a
  // no-op stub on iOS.
  useEffect(() => {
    const sub = BackHandler.addEventListener("hardwareBackPress", () => {
      if (!isOpen.current) return false;

      ref.current?.close();
      return true;
    });
    return () => sub.remove();
  }, [ref]);

  const RenderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={1}
      {...props}
      style={styles.backDrop}
    />
  );

  // renders — Portal teleports the sheet to the root PortalHost so it paints
  // above sibling content (a non-modal BottomSheet has no containerComponent
  // prop, so we portal it manually, the same way BottomSheetModal does).
  return (
    <Portal>
      <BottomSheet
        ref={ref}
        snapPoints={
          bottomSheetProps?.snapPoints ?? ["25%", "50%", "70%", "90%"]
        }
        index={-1}
        enableDynamicSizing={false}
        enablePanDownToClose
        backdropComponent={RenderBackdrop}
        backgroundStyle={styles.bottomSheet}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        {...bottomSheetProps}
        // After the spread so nothing can replace it — the back handler needs
        // every index change. onChange is omitted from bottomSheetProps for the
        // same reason.
        onChange={(index) => {
          isOpen.current = index >= 0;
        }}
      >
        <View style={styles.header}>
          <Typography variant="mediumBold" style={styles.title}>
            {title}
          </Typography>
          {description && (
            <Typography variant="smallRegular" style={styles.description}>
              {description}
            </Typography>
          )}
        </View>
        {children}
      </BottomSheet>
    </Portal>
  );
};

// Content slots — the caller picks how children scroll. Each one bakes in the
// sheet's shared content style so it stretches and fills the remaining space.
const Scroll = ({
  style,
  contentContainerStyle,
  children,
  ...rest
}: ComponentProps<typeof BottomSheetScrollView>) => {
  const { styles } = useStyles();
  return (
    <BottomSheetScrollView
      style={[styles.content, style]}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      {...rest}
    >
      {children}
    </BottomSheetScrollView>
  );
};

const List = ({
  style,
  contentContainerStyle,
  ...rest
}: ComponentProps<typeof BottomSheetFlatList>) => {
  const { styles } = useStyles();
  return (
    <BottomSheetFlatList
      style={[styles.content, style]}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      {...rest}
    />
  );
};

const Content = ({ style, children, ...rest }: ComponentProps<typeof View>) => {
  const { styles } = useStyles();
  return (
    <View style={[styles.content, styles.contentContainer, style]} {...rest}>
      {children}
    </View>
  );
};

AppBottomSheet.Scroll = Scroll;
AppBottomSheet.List = List;
AppBottomSheet.Content = Content;

export default AppBottomSheet;
