import { Typography } from "@/components/ui/display";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { ComponentProps } from "react";
import { View } from "react-native";
import { AppBottomSheetProps } from "./types";
import useStyles from "./useStyles";

const AppBottomSheet = (props: AppBottomSheetProps) => {
  const { title, description, children, bottomSheetProps, onClose, ref } =
    props;
  const { styles } = useStyles();

  const renderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={1}
      {...props}
      style={styles.backDrop}
    />
  );

  // renders
  return (
    <BottomSheet
      ref={ref}
      snapPoints={bottomSheetProps?.snapPoints ?? ["25%", "50%", "70%", "90%"]}
      index={bottomSheetProps?.index ?? -1}
      enableDynamicSizing={false}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.bottomSheet}
      handleStyle={styles.handleStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      onClose={onClose}
      {...bottomSheetProps}
    >
      <View style={styles.container}>
        <Typography variant="mediumBold" style={styles.title}>
          {title}
        </Typography>
        {description && (
          <Typography variant="smallRegular" style={styles.description}>
            {description}
          </Typography>
        )}
        {children}
      </View>
    </BottomSheet>
  );
};

// Content slots — the caller picks how children scroll. Each one bakes in the
// sheet's shared content style so it stretches and fills the remaining space.
const Scroll = ({
  style,
  children,
  ...rest
}: ComponentProps<typeof BottomSheetScrollView>) => {
  const { styles } = useStyles();
  return (
    <BottomSheetScrollView style={[styles.content, style]} {...rest}>
      {children}
    </BottomSheetScrollView>
  );
};

const List = ({
  style,
  ...rest
}: ComponentProps<typeof BottomSheetFlatList>) => {
  const { styles } = useStyles();
  return <BottomSheetFlatList style={[styles.content, style]} {...rest} />;
};

// Non-scrolling slot: a plain View, NOT gorhom's BottomSheetView. BottomSheetView
// force-applies `position:absolute; top/left/right:0` (for dynamic-size measuring),
// which only works as the sheet's sole direct child. Nested here it would ignore
// our flex layout — overlapping the title and dropping the horizontal padding.
const Content = ({
  style,
  children,
  ...rest
}: ComponentProps<typeof View>) => {
  const { styles } = useStyles();
  return (
    <View style={[styles.content, style]} {...rest}>
      {children}
    </View>
  );
};

AppBottomSheet.Scroll = Scroll;
AppBottomSheet.List = List;
AppBottomSheet.Content = Content;

export default AppBottomSheet;
