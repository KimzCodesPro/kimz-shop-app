import { Typography } from "@/components/ui/display";
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ComponentProps } from "react";
import { View } from "react-native";
import { AppBottomSheetProps } from "./types";
import useStyles from "./useStyles";

const AppBottomSheet = (props: AppBottomSheetProps) => {
  const { title, description, children, bottomSheetProps, onDismiss, ref } =
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
    <BottomSheetModal
      ref={ref}
      snapPoints={bottomSheetProps?.snapPoints ?? ["25%", "50%", "70%", "90%"]}
      index={bottomSheetProps?.index ?? 0}
      enableDynamicSizing={false}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.bottomSheet}
      handleStyle={styles.handleStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      onDismiss={onDismiss}
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
    </BottomSheetModal>
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

const Content = ({
  style,
  children,
  ...rest
}: ComponentProps<typeof BottomSheetView>) => {
  const { styles } = useStyles();
  return (
    <BottomSheetView style={[styles.content, style]} {...rest}>
      {children}
    </BottomSheetView>
  );
};

AppBottomSheet.Scroll = Scroll;
AppBottomSheet.List = List;
AppBottomSheet.Content = Content;

export default AppBottomSheet;
