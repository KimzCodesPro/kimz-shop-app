import { Pressable, View } from "react-native";
import { Typography } from "../../display";
import useStyles from "../Radio/useStyles";
import { RadioProps } from "./types";

const Radio = ({ selected, onChange, disabled, title }: RadioProps) => {
  const { styles } = useStyles(selected, disabled);

  return (
    <Pressable onPress={onChange} disabled={disabled} style={styles.wrapper}>
      <View style={styles.indicator}>
        <View style={styles.innerIndicator} />
      </View>
      <View style={styles.renderItem}>
        {title && (
          <Typography variant="smallBold" textTransform="capitalize">
            {title}
          </Typography>
        )}
      </View>
    </Pressable>
  );
};

export default Radio;
