import { Typography } from "@/components/ui/typography";
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { ComponentProps, useEffect, useMemo, useRef } from "react";
import { BackHandler, View } from "react-native";
import { AppBottomSheetProps } from "./types";
import useStyles from "./useStyles";

const AppBottomSheet = (props: AppBottomSheetProps) => {
  const { title, description, children, bottomSheetProps, ref } = props;

  const { styles } = useStyles();

  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const isOpen = useRef(false);

  useEffect(() => {
    if (typeof ref === "function" || ref === null) return;

    const nativeNavigationListener = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (!isOpen.current) return false;

        ref.current?.dismiss();
        return true;
      },
    );
    return () => nativeNavigationListener.remove();
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

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={bottomSheetProps?.snapPoints ?? snapPoints}
      enableDynamicSizing={false}
      enablePanDownToClose
      backdropComponent={RenderBackdrop}
      backgroundStyle={styles.bottomSheet}
      handleStyle={styles.handleStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      {...bottomSheetProps}
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
    </BottomSheetModal>
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
