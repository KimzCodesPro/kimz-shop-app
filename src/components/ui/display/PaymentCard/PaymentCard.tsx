import { StatusVariant } from "@/types/theme";
import { StyleProp, ViewStyle } from "react-native";
import IconBadge from "../IconBadge/IconBadge";
import InfoCard from "../InfoCard/InfoCard";
import StatusBill from "../StatusBill/StatusBill";

type PaymentCardProps = {
  cardNumber: string;
  expiryDate: string;
  cardType: string;
  variant: StatusVariant;
  isDefault?: boolean;
  isSelected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

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
