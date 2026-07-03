import { StatusVariant } from "@/types/theme";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import IconBadge from "../IconBadge/IconBadge";
import StatusBill from "../StatusBill/StatusBill";
import Typography from "../Typography/Typography";
import useStyles from "./useStyles";

type AddressCardProps = {
  title: string;
  description: string;
  type: "home" | "office" | "apartment" | "other";
  isSelected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const AddressCard = ({
  title,
  description,
  type,
  isSelected,
  onPress,
  style,
}: AddressCardProps) => {
  const { styles } = useStyles(isSelected);

  const addressType = {
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

  const colorSchema = addressType[type] as StatusVariant;

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <View style={styles.rightInfo}>
        <Typography variant="smallBold" style={styles.rightInfoTitle}>
          {title}
        </Typography>
        <Typography variant="xsmallRegular" style={styles.rightInfoDescription}>
          {description}
        </Typography>
      </View>
      <View style={styles.addressLocation}>
        <IconBadge iconName="map-pin" color={colorSchema} />
        <StatusBill
          iconName={addressIcon[type]}
          type={type}
          color={colorSchema}
        />
      </View>
    </Pressable>
  );
};

export default AddressCard;
