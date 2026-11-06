import Icon from "@/components/icons";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Typography } from "../../typography";
import { QuantityStepperProps } from "./types";
import useStyles from "./useStyles";

const QuantityStepper = ({
  size = "md",
  limit,
  startQuantity,
  currentQuantity,
}: QuantityStepperProps) => {
  const [quantity, setQuantity] = useState(startQuantity);
  const { styles, colors, iconSize } = useStyles(size);

  useEffect(() => {
    currentQuantity?.(quantity);
  }, [currentQuantity, quantity]);

  const handleIncrease = () => {
    if (limit === undefined || quantity < limit) {
      setQuantity(quantity + 1);
    }
  };
  const handleDecrease = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.decrease} onPress={handleDecrease}>
        <Icon
          size={iconSize}
          name="minus"
          color={colors.foreground.secondary}
        />
      </TouchableOpacity>
      <Typography variant="smallBold" color={colors.foreground.primary}>
        {quantity}
      </Typography>
      <TouchableOpacity style={styles.increase} onPress={handleIncrease}>
        <Icon size={iconSize} name="plus" color={colors.foreground.contrast} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityStepper;
