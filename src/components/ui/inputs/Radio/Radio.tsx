import { View } from "react-native";
import { RadioProps } from "./types";
import useStyles from "./useStyles";

// Presentational only — the group owns the press target and the a11y role, so
// the indicator never handles a gesture of its own.
const Radio = ({ isSelected, disabled }: RadioProps) => {
  const { styles } = useStyles(isSelected, disabled);

  return (
    <View style={styles.indicator}>
      <View style={styles.innerIndicator} />
    </View>
  );
};

export default Radio;
