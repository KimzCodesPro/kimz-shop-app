import { StatusVariant } from "@/types/theme";
import IconBadge from "../IconBadge/IconBadge";
import InfoCard from "../InfoCard/InfoCard";
import StatusBill from "../StatusBill/StatusBill";
import { AddressCardProps } from "./types";

const AddressCard = ({
  city,
  address,
  type,
  isSelected,
  onPress,
  style,
}: AddressCardProps) => {
  const addressColorMapping = {
    home: "success",
    apartment: "warning",
    office: "primary",
    other: "danger",
  };

  const addressIcon = {
    home: "home",
    apartment: "building",
    office: "brief-case",
    other: "map-pin",
  } as const;

  const colorSchema = addressColorMapping[type] as StatusVariant;

  return (
    <InfoCard onPress={onPress} style={style} isSelected={isSelected}>
      <InfoCard.Leading title={city} description={address} />
      <InfoCard.Trailing>
        <IconBadge iconName="map-pin" color={colorSchema} />
        <StatusBill
          iconName={addressIcon[type]}
          label={type}
          color={colorSchema}
        />
      </InfoCard.Trailing>
    </InfoCard>
  );
};

export default AddressCard;
