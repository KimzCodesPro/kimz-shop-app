import { useTranslation } from "@/hooks";
import IconBadge from "../../display/IconBadge/IconBadge";
import StatusBill from "../../feedback/StatusBill/StatusBill";
import InfoCard from "../InfoCard/InfoCard";
import { addressColorMapping, addressIcon, addressLabel } from "./constants";
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
  const colorSchema = addressColorMapping[type];

  return (
    <InfoCard onPress={onPress} style={style} isSelected={isSelected}>
      <InfoCard.Leading title={city} description={address} />
      <InfoCard.Trailing>
        <IconBadge icon="map-pin" variant={colorSchema} />
        <StatusBill
          icon={addressIcon[type]}
          label={t(addressLabel[type])}
          color={colorSchema}
        />
      </InfoCard.Trailing>
    </InfoCard>
  );
};

export default AddressCard;
