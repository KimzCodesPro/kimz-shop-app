import { Typography } from "@/components/ui/display";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { View } from "react-native";
import { AppBottomSheetProps } from "./types";
import useStyles from "./useStyles";

const AppBottomSheet = (props: AppBottomSheetProps) => {
  const {
    title,
    description,
    scrollable,
    children,
    bottomSheetProps,
    onDismiss,
    ref,
  } = props;
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

  const header = (
    <>
      <Typography variant="mediumBold" style={styles.title}>
        {title}
      </Typography>
      {description && (
        <Typography variant="smallRegular" style={styles.description}>
          {description}
        </Typography>
      )}
    </>
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
      {scrollable ? (
        <View style={styles.scrollableContainer}>
          {header}
          <BottomSheetScrollView style={styles.scrollableContent}>
            {children}
          </BottomSheetScrollView>
        </View>
      ) : (
        <BottomSheetView style={styles.bottomSheetContainer}>
          {header}
          <View style={styles.bottomSheetContent}>{children}</View>
        </BottomSheetView>
      )}
    </BottomSheetModal>
  );
};

export default AppBottomSheet;
