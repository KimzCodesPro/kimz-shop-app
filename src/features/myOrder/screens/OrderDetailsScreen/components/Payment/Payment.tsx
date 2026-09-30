import Icon from "@/src/components/icons";
import { CardWrapper } from "@/src/components/ui/card";
import { Typography } from "@/src/components/ui/typography";
import { View } from "react-native";
import { CREDIT_CARD_ICON_SIZE } from "./constants";
import { PaymentProps } from "./types";
import useStyles from "./useStyles";

const Payment = ({ style, type, cardNumber }: PaymentProps) => {
  const { styles, colors } = useStyles();

  return (
    <CardWrapper style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Icon
          name="credit-card"
          size={CREDIT_CARD_ICON_SIZE}
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
