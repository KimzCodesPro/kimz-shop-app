import Icon from "@/components/icons";
import { IconBadge } from "@/components/ui/display";
import { StatusBill } from "@/components/ui/feedback";
import { Button } from "@/components/ui/inputs";
import { Typography } from "@/components/ui/typography";
import { useTheme, useTranslation } from "@/hooks";
import { Pressable, View } from "react-native";
import { CARD_TYPE_CONFIG } from "../PaymentMethodsList/constants";
import styles from "./paymentDetailsStyles";
import { PaymentDetailsProps } from "./types";

const PaymentDetails = ({
  cardType,
  cardNumber,
  expiryDate,
  cardHolderName,
  setAsDefaultHandler,
  deleteHandler,
}: PaymentDetailsProps) => {
  const colors = useTheme();
  const { t } = useTranslation();
  const { color, label } = CARD_TYPE_CONFIG[cardType];

  return (
    <>
      <View style={styles.header}>
        <StatusBill icon="credit-card" color={color} label={t(label)} />
        <Pressable onPress={deleteHandler}>
          <IconBadge icon="trash" variant="danger" />
        </Pressable>
      </View>
      {/* masked card number */}
      <View style={styles.cardMain}>
        <Typography variant="mediumBold" color={colors.foreground.primary}>
          {`•••• •••• •••• ${cardNumber}`}
        </Typography>
      </View>
      {/* info in list */}
      <View style={styles.cardInfoList}>
        <View style={styles.cardInfoSlot}>
          <Icon name="history" size="md" color={colors.foreground.tertiary} />
          <Typography color={colors.foreground.tertiary} variant="smallRegular">
            {t("paymentMethods_paymentExpires", { date: expiryDate })}
          </Typography>
        </View>
        <View style={styles.cardInfoSlot}>
          <Icon name="user" size="md" color={colors.foreground.tertiary} />
          <Typography color={colors.foreground.tertiary} variant="smallRegular">
            {cardHolderName}
          </Typography>
        </View>
      </View>
      {/* actions */}
      <View style={styles.actions}>
        <Button
          variant="primary"
          title={t("paymentMethods_paymentSetDefault")}
          onPress={setAsDefaultHandler}
        />
      </View>
    </>
  );
};

export default PaymentDetails;
