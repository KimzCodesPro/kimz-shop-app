import { PaymentCard } from "@/components/ui/card";
import { useTranslation } from "@/hooks";
import styles from "../../paymentMethodsScreenStyles";
import { CARD_TYPE_CONFIG } from "./constants";
import { PaymentMethodsListProps } from "./types";

const PaymentMethodsList = ({
  items,
  selectedItem,
  onPress,
}: PaymentMethodsListProps) => {
  const { t } = useTranslation();

  return items.map((item) => {
    const { color, label } = CARD_TYPE_CONFIG[item.cardType];
    const isDefault = selectedItem === item.id;

    return (
      <PaymentCard
        key={item.id}
        cardNumber={item.cardNumber}
        cardType={t(label)}
        expiryDate={item.expiryDate}
        variant={color}
        isDefault={isDefault}
        isSelected={isDefault}
        onPress={() => onPress(item.id)}
        style={styles.list}
      />
    );
  });
};

export default PaymentMethodsList;
