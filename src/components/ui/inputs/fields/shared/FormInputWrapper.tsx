import Icon from "@/components/icons";
import { View } from "react-native";
import FormInputErrorMessage from "../shared/FormInputErrorMessage";
import FormInputLabel from "./FormInputLabel";
import { FormInputWrapperProps } from "./types";

const FormInputWrapper = ({
  label,
  inputIconName,
  errorMessage,
  children,
  styles,
  statusColor,
}: FormInputWrapperProps) => {
  return (
    <View style={styles.container}>
      <FormInputLabel label={label} />
      <View style={styles.inputWrapper}>
        <Icon name={inputIconName} size={20} color={statusColor} />
        {children}
      </View>
      <FormInputErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default FormInputWrapper;
