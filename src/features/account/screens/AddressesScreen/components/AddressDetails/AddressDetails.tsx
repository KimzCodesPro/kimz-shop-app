import { ADDRESS_TYPE_CONFIG } from "@/components/ui/card/AddressCard/constants";
import { useTheme, useTranslation } from "@/hooks";
import Icon from "@/components/icons";
import { IconBadge } from "@/components/ui/display";
import { StatusBill } from "@/components/ui/feedback";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/inputs";
import { Pressable, View } from "react-native";
import styles from "./addressDetailsStyles";
import { AddressDetailsProps } from "./types";

const AddressDetails = ({
  type,
  governorate,
  streetName,
  buildingNum,
  city,
  floorNum,
  landMark,
  deleteHandler,
  setAsDefaultHandler,
  editHandler,
}: AddressDetailsProps) => {
  const colors = useTheme();
  const { t } = useTranslation();
  const { color, icon, label } = ADDRESS_TYPE_CONFIG[type];

  return (
    <>
      <View style={styles.header}>
        <StatusBill icon={icon} color={color} label={t(label)} />
        <Pressable onPress={deleteHandler}>
          <IconBadge icon="trash" variant="danger" />
        </Pressable>
      </View>
      {/* main address */}
      <View style={styles.addressMain}>
        <Typography variant="mediumBold" color={colors.foreground.primary}>
          {governorate}
        </Typography>
        <Typography variant="smallRegular" color={colors.foreground.tertiary}>
          {streetName}
        </Typography>
      </View>
      {/* info in list */}
      <View style={styles.addressInfoList}>
        <View style={styles.addressInfoSlot}>
          <Icon name="map-pin" size="md" color={colors.foreground.tertiary} />
          <Typography color={colors.foreground.tertiary} variant="smallRegular">
            {city}
          </Typography>
        </View>
        <View style={styles.addressInfoSlot}>
          <Icon name="building" color={colors.foreground.tertiary} size="md" />
          <Typography color={colors.foreground.tertiary} variant="smallRegular">
            {t("account_building")} {buildingNum}
          </Typography>
        </View>
        <View style={styles.addressInfoSlot}>
          <Icon name="layers" color={colors.foreground.tertiary} size="md" />
          <Typography color={colors.foreground.tertiary} variant="smallRegular">
            {t("account_floorNumber")} {floorNum}
          </Typography>
        </View>
        <View style={styles.addressInfoSlot}>
          <Icon
            name="info-circle"
            color={colors.foreground.tertiary}
            size="md"
          />
          <Typography color={colors.foreground.tertiary} variant="smallRegular">
            {landMark}
          </Typography>
        </View>
      </View>
      {/* actions */}
      <View style={styles.actions}>
        <Button
          variant="primary-outline"
          title={t("common_setAsDefault")}
          onPress={setAsDefaultHandler}
        />
        <Button
          variant="primary"
          title={t("account_addressDetailEdit")}
          onPress={editHandler}
        />
      </View>
    </>
  );
};

export default AddressDetails;
