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
        >
          <Image
            source={option.image}
            style={styles.preview}
            contentFit="fill"
          />
          <Radio
            selected={selectedValue === option.value}
            onChange={() => onValueChange(option.value)}
            title={option.label}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default ThemeRadioGroup;
