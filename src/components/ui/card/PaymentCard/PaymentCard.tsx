import { useTranslation } from "@/hooks";
import IconBadge from "../../display/IconBadge/IconBadge";
import StatusBill from "../../feedback/StatusBill/StatusBill";
import InfoCard from "../InfoCard/InfoCard";
import { PaymentCardProps } from "./types";

const PaymentCard = ({
  cardNumber,
  cardType,
  expiryDate,
  variant = "info",
  isSelected,
  isDefault,
  onPress,
  style,
}: PaymentCardProps) => {
  const { t } = useTranslation();
  const formattedCardNumber = `•••• •••• •••• ${cardNumber}`;

  return (
    <InfoCard onPress={onPress} style={style} isSelected={isSelected}>
      <InfoCard.Leading
        title={formattedCardNumber}
        description={`${cardType} · ${t("paymentMethods_paymentExpires", { date: expiryDate })}`}
      />
      <InfoCard.Trailing>
        <IconBadge icon="credit-card" variant={variant} />
        {isDefault && <StatusBill icon="check" label={t("paymentMethods_paymentDefault")} color="info" />}
      </InfoCard.Trailing>
    </InfoCard>
  );
};

export default PaymentCard;
