import Icon from "@/components/icons";
import { View } from "react-native";
import FieldErrorMessage from "./FieldErrorMessage";
import FieldLabel from "./FieldLabel";
import { FieldWrapperProps } from "./types";
import useSharedStyles from "./useSharedStyles";
import { FIELD_ICON_SIZE } from "./constants";

const FieldWrapper = ({
  label,
  fieldIconName,
  errorMessage,
  children,
  currentStatus,
  style,
}: FieldWrapperProps) => {
  const { styles, iconColor } = useSharedStyles(currentStatus);

  return (
    <View style={[styles.container, style]}>
      <FieldLabel label={label} />
      <View style={styles.fieldWrapper}>
        <Icon name={fieldIconName} size={FIELD_ICON_SIZE} color={iconColor} />
        {children}
      </View>
      <FieldErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default FieldWrapper;
