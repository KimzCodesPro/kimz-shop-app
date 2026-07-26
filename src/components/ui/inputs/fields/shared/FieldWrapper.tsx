import Icon from "@/components/icons";
import { View } from "react-native";
import FieldErrorMessage from "./FieldErrorMessage";
import FieldLabel from "./FieldLabel";
import { FieldWrapperProps } from "./types";

const FieldWrapper = ({
  label,
  fieldIconName,
  errorMessage,
  children,
  styles,
  statusColor,
}: FieldWrapperProps) => {
  return (
    <View style={styles.container}>
      <FieldLabel label={label} />
      <View style={styles.fieldWrapper}>
        <Icon name={fieldIconName} size={20} color={statusColor} />
        {children}
      </View>
      <FieldErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default FieldWrapper;
