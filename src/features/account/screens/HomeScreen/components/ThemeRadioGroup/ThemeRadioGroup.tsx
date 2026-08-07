import { Radio } from "@/src/components/ui/inputs";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";
import { ThemeRadioGroupProps } from "./types";
import useStyles from "./useStyles";

// Same contract as RadioGroup, but each option renders as a column — a theme
// preview above its radio — and the options lay out in a row.
const ThemeRadioGroup = ({
  options,
  selectedValue,
  onValueChange,
}: ThemeRadioGroupProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      {options.map((option) => (
        // The whole column is pressable, so tapping the preview picks the
        // theme too — the radio alone would be a small target.
        <Pressable
          key={option.value}
          style={styles.option}
          onPress={() => onValueChange(option.value)}
          accessibilityRole="radio"
          accessibilityState={{ selected: selectedValue === option.value }}
          accessibilityLabel={option.label}
        >
          <Image
            source={option.image}
            style={styles.preview}
            contentFit="fill"
          />
          {/* Radio is presentational here — pointerEvents keeps it from
              claiming the touch, so the column is one target and, more to the
              point, one node for a screen reader instead of two nested ones. */}
          <View pointerEvents="none">
            <Radio
              isSelected={selectedValue === option.value}
              onChange={() => onValueChange(option.value)}
              title={option.label}
            />
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default ThemeRadioGroup;
