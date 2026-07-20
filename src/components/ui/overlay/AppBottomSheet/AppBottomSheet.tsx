import { Typography } from "@/components/ui/display";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { View } from "react-native";
import { AppBottomSheetProps } from "./types";
import useStyles from "./useStyles";

const AppBottomSheet = (props: AppBottomSheetProps) => {
  const { title, description, bottomSheetProps, ref } = props;
  const { styles } = useStyles();

  const renderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      disappearsOnIndex={-1}
      appearsOnIndex={1}
      opacity={1}
      {...props}
      style={styles.backDrop}
    />
  );
  // renders
  return (
    <>
      <BottomSheet
        ref={ref}
        snapPoints={
          bottomSheetProps?.snapPoints ?? ["25%", "50%", "70%", "90%"]
        }
        index={bottomSheetProps?.index ?? -1}
        enableDynamicSizing={false}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.bottomSheet}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        {...bottomSheetProps}
      >
        <BottomSheetView style={styles.bottomSheetContainer}>
          <Typography variant="mediumBold" style={styles.title}>
            {title}
          </Typography>
          {description && (
            <Typography variant="smallRegular" style={styles.description}>
              {description}
            </Typography>
          )}
          <View style={styles.bottomSheetContent}>
            {bottomSheetProps?.children}
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default AppBottomSheet;
