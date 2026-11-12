import Icon from "@/components/icons";
import { CardWrapper } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { View } from "react-native";
import { PaymentProps } from "./types";
import useStyles from "./useStyles";

const Payment = ({ style, type, cardNumber }: PaymentProps) => {
  const { styles, colors } = useStyles();

  return (
    <CardWrapper style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Icon
          name="credit-card"
          size="sm"
          color={colors.primary.pressed}
        />
      </View>
      <Typography color={colors.foreground.primary} variant="smallBold">
        {type} · •••• {cardNumber}
      </Typography>
    </CardWrapper>
  );
};

export default Payment;
