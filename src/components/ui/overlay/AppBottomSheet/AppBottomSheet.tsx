import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { Button, Text } from "react-native";
import useStyles from "./useStyles";
const AppBottomSheet = () => {
  const { styles } = useStyles();
  // ref
  const sheetRef = useRef<BottomSheet>(null);

  // callbacks
  // const handleSheetIndexZero = () => sheetRef.current?.snapToIndex(0);
  // const handleSheetIndexOne = () => sheetRef.current?.snapToIndex(1);
  const handleSheetIndexTwo = () => sheetRef.current?.snapToIndex(2);
  const closeSheet = () => sheetRef.current?.close();

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
    <>
      <Button title="Open" onPress={handleSheetIndexTwo} />
      <Button title="Close" onPress={closeSheet} />

      <BottomSheet
        ref={sheetRef}
        snapPoints={["25%", "50%", "90%"]}
        index={-1}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.bottomSheet}
      >
        <BottomSheetView>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default AppBottomSheet;
