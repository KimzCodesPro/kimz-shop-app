import { Pressable, View } from "react-native";
import useStyles from "../Radio/useStyles";

type RadioProps = {
  value: boolean;
  onChange: () => void;
  disabled?: boolean;
};

const Radio = ({ value, onChange, disabled }: RadioProps) => {
  const { styles } = useStyles(value, disabled);

  return (
    <Pressable onPress={onChange} disabled={disabled} style={styles.container}>
      <View style={styles.indicator} />
    </Pressable>
  );
};

export default Radio;
