import { View } from "react-native";
import { SwitchProps } from "./types";
import useStyles from "./useStyles";

// Presentational only — the group owns the press target and the a11y role, so
// the track never handles a gesture of its own.
const Switch = ({ isSelected, style, disabled }: SwitchProps) => {
  const { styles } = useStyles(isSelected, disabled);

  return (
    <View style={[styles.track, style]}>
      <View style={styles.indicator} />
    </View>
  );
};

export default Switch;
