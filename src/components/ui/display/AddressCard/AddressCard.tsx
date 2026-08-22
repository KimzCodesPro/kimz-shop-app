import { useTranslation } from "@/src/hooks";
import { StatusVariant } from "@/types/theme";
import IconBadge from "../IconBadge/IconBadge";
import InfoCard from "../InfoCard/InfoCard";
import StatusBill from "../StatusBill/StatusBill";
import { AddressCardProps } from "./types";

const addressColorMapping = {
  home: "success",
  apartment: "warning",
  office: "info",
  other: "danger",
} as const;

const addressIcon = {
  home: "home",
  apartment: "building",
  office: "briefcase",
  other: "map-pin",
} as const;

const labels = {
  home: "account_home",
  office: "account_office",
  apartment: "account_apartment",
  other: "account_other",
} as const;

const AddressCard = ({
  city,
  address,
  type,
  isSelected,
  onPress,
  style,
}: AddressCardProps) => {
  const { t } = useTranslation();
  const colorSchema = addressColorMapping[type] as StatusVariant;
  const StatusBillLabel = t(labels[type]);
  return (
    <InfoCard onPress={onPress} style={style} isSelected={isSelected}>
      <InfoCard.Leading title={city} description={address} />
      <InfoCard.Trailing>
        <IconBadge iconName="map-pin" color={colorSchema} />
        <StatusBill
          iconName={addressIcon[type]}
          label={StatusBillLabel}
          color={colorSchema}
        />
      </InfoCard.Trailing>
    </InfoCard>
  );
};

export default AddressCard;
