import { Typography } from "@/components/ui/display";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { View } from "react-native";
import useStyles from "./useStyles";

export type BottomSheetRef = BottomSheet | null;
type AppBottomSheetProps = {
  title: string;
  description?: string;
  bottomSheetProps?: BottomSheetProps;
};

const AppBottomSheet = forwardRef<BottomSheetRef, AppBottomSheetProps>(
  (props, ref) => {
    const { title, description, bottomSheetProps } = props;
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
  },
);

export default AppBottomSheet;
