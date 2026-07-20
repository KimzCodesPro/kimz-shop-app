import { Pressable, View } from "react-native";
import useStyles from "../Radio/useStyles";
import { RadioProps } from "./types";

const Radio = ({ value, onChange, disabled }: RadioProps) => {
  const { styles } = useStyles(value, disabled);

  return (
    <Pressable onPress={onChange} disabled={disabled} style={styles.container}>
      <View style={styles.indicator} />
    </Pressable>
  );
};

export default Radio;
