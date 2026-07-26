import Icon from "@/components/icons";
import { View } from "react-native";
import FieldErrorMessage from "../shared/FieldErrorMessage";
import FieldLabel from "./FieldLabel";
import { FieldWrapperProps } from "./types";

const FieldWrapper = ({
  label,
  inputIconName,
  errorMessage,
  children,
  styles,
  statusColor,
}: FieldWrapperProps) => {
  return (
    <View style={styles.container}>
      <FieldLabel label={label} />
      <View style={styles.inputWrapper}>
        <Icon name={inputIconName} size={20} color={statusColor} />
        {children}
      </View>
      <FieldErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default FieldWrapper;
