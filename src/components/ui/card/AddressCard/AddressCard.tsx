import { useTranslation } from "@/src/hooks";
import { StatusVariant } from "@/types/theme";
import IconBadge from "../../display/IconBadge/IconBadge";
import InfoCard from "../InfoCard/InfoCard";
import StatusBill from "../../feedback/StatusBill/StatusBill";
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
  const colorSchema = addressColorMapping[type] as Exclude<
    StatusVariant,
    "secondary"
  >;
  const StatusBillLabel = t(addressLabel[type]);
  return (
    <InfoCard onPress={onPress} style={style} isSelected={isSelected}>
      <InfoCard.Leading title={city} description={address} />
      <InfoCard.Trailing>
        <IconBadge icon="map-pin" variant={colorSchema} />
        <StatusBill
          icon={addressIcon[type]}
          label={StatusBillLabel}
          color={colorSchema}
        />
      </InfoCard.Trailing>
    </InfoCard>
  );
};

export default AddressCard;
