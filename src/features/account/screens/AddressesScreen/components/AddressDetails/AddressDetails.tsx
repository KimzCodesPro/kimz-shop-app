import {
  addressColorMapping,
  addressIcon,
  addressLabel,
} from "@/components/ui/display/AddressCard/constants";
import { useTheme, useTranslation } from "@/hooks";
import { StatusBill, Typography } from "@/src/components/ui/display";
import { StatusVariant } from "@/types/theme";
import { View } from "react-native";
import styles from "./AddressDetailsStyles";
import { AddressDetailsProps } from "./types";

const AddressDetails = ({
  type,
  governorate,
  streetName,
  buildingNum,
  city,
  floorNum,
  landMark,
}: AddressDetailsProps) => {
  const colors = useTheme();
  const { t } = useTranslation();
  const statusColor = addressColorMapping[type] as StatusVariant;
  const statusIcon = addressIcon[type];
  const statusLabel = t(addressLabel[type]);

  return (
    <>
      <StatusBill
        iconName={statusIcon}
        color={statusColor}
        label={statusLabel}
        style={styles.statusBill}
      />
      <View style={styles.details}>
        <Typography variant="mediumBold">{governorate}</Typography>
        <Typography color={colors.foreground.tertiary} variant="smallRegular">
          {buildingNum} {streetName}
        </Typography>
        <Typography color={colors.foreground.tertiary} variant="smallRegular">
          {city}
        </Typography>
        <Typography color={colors.foreground.tertiary} variant="smallRegular">
          {t("account_floorNumber")}: {floorNum}
        </Typography>
        <Typography color={colors.foreground.tertiary} variant="smallRegular">
          {t("account_landmark")}: {landMark}
        </Typography>
      </View>
    </>
  );
};

export default AddressDetails;
