import { useTranslation } from "@/hooks";
import IconBadge from "../../display/IconBadge/IconBadge";
import StatusBill from "../../feedback/StatusBill/StatusBill";
import InfoCard from "../InfoCard/InfoCard";
import { ADDRESS_TYPE_CONFIG } from "./constants";
import { AddressCardProps } from "./types";

const AddressCard = ({
  city,
  address,
  type,
  isSelected,
  onPress,
  style,
}: AddressCardProps) => {
  const { t } = useTranslation();
  const { color, icon, label } = ADDRESS_TYPE_CONFIG[type];

  return (
    <InfoCard onPress={onPress} style={style} isSelected={isSelected}>
      <InfoCard.Leading title={city} description={address} />
      <InfoCard.Trailing>
        <IconBadge icon="map-pin" variant={color} />
        <StatusBill icon={icon} label={t(label)} color={color} />
      </InfoCard.Trailing>
    </InfoCard>
  );
};

export default AddressCard;
