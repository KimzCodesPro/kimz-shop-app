import IconBadge from "../IconBadge/IconBadge";
import InfoCard from "../InfoCard/InfoCard";
import StatusBill from "../StatusBill/StatusBill";
import { PaymentCardProps } from "./types";

const PaymentCard = ({
  cardNumber,
  cardType,
  expiryDate,
  variant,
  isSelected,
  isDefault,
  onPress,
  style,
}: PaymentCardProps) => {
  const formattedCardNumber = `•••• •••• •••• ${cardNumber}`;

  return (
    <InfoCard onPress={onPress} style={style} isSelected={isSelected}>
      <InfoCard.Leading
        title={formattedCardNumber}
        description={`${cardType} · Expires ${expiryDate}`}
      />
      <InfoCard.Trailing>
        <IconBadge iconName="credit-card" color={variant} />
        {isDefault && (
          <StatusBill iconName="check" label="Default" color="info" />
        )}
      </InfoCard.Trailing>
    </InfoCard>
  );
};

export default PaymentCard;
