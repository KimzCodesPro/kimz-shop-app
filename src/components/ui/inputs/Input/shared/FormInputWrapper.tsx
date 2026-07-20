import Icon from "@/components/icons";
import { View } from "react-native";
import FormInputErrorMessage from "../shared/FormInputErrorMessage";
import FormInputLabel from "./FormInputLabel";
import { FormInputWrapperProps } from "./types";

const FormInputWrapper = ({
  label,
  inputIconName,
  errorMessage,
  currentStatus,
  children,
  wrapperStyles,
  colorMapping,
  style,
}: FormInputWrapperProps) => {
  return (
    <View style={[wrapperStyles.container, style]}>
      <FormInputLabel label={label} />
      <View style={wrapperStyles.inputWrapper}>
        <Icon
          name={inputIconName}
          size={20}
          color={colorMapping[currentStatus]}
        />
        {children}
      </View>
      <FormInputErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default FormInputWrapper;
