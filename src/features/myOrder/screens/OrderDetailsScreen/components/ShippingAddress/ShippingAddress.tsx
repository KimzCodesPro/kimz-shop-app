import { CardWrapper } from "@/src/components/ui/card";
import { addressColorMapping } from "@/src/components/ui/card/AddressCard/constants";
import { IconBadge } from "@/src/components/ui/display";
import { Typography } from "@/src/components/ui/typography";
import { View } from "react-native";
import { ShippingAddressProps } from "./types";
import useStyles from "./useStyles";

const ShippingAddress = ({
  style,
  type,
  userName,
  address,
  phoneNumber,
}: ShippingAddressProps) => {
  const { styles, colors } = useStyles();
  const colorSchema = addressColorMapping[type];

  return (
    <CardWrapper style={[styles.container, style]}>
      <IconBadge icon="map-pin" variant={colorSchema} />
      <View style={styles.contentInfo}>
        <Typography variant="smallBold" color={colors.foreground.primary}>
          {userName}
        </Typography>
        <Typography
          variant="xsmallRegular"
          color={colors.foreground.tertiary}
          numberOfLines={2}
        >
          {address}
        </Typography>
        <Typography variant="xsmallRegular" color={colors.foreground.tertiary}>
          {phoneNumber}
        </Typography>
      </View>
    </CardWrapper>
  );
};

export default ShippingAddress;
