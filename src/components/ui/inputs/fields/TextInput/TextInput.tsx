import Icon from "@/components/icons";
import { useState } from "react";
import { Pressable, TextInput as RNTextInput } from "react-native";
import FormInputWrapper from "../shared/FormInputWrapper";
import { StatusType } from "../shared/types";
import useSharedStyles from "../shared/useSharedStyles";
import { inputCurrentStatus } from "../shared/utils";
import { TextInputProps } from "./types";

const TextInput = ({
  label,
  placeHolder,
  iconName,
  type,
  value,
  errorMessage,
  onChangeText,
  clearInput,
  style,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const currentStatus: StatusType = inputCurrentStatus(
    errorMessage,
    isFocused,
    value,
  );

  const { styles, colors, statusColor } = useSharedStyles(currentStatus);

  const resolvedIconName = type === "password" ? "lock" : iconName;

  return (
    <FormInputWrapper
      label={label}
      inputIconName={resolvedIconName}
      errorMessage={errorMessage}
      styles={{
        container: styles.container,
        inputWrapper: styles.inputWrapper,
      }}
      statusColor={statusColor}
      style={style}
    >
      <RNTextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        placeholderTextColor={colors.foreground.tertiary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={type === "password" && !passwordVisible}
      />
      {type === "password" && value && (
        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? "eye-off" : "eye"}
            size={20}
            color={colors.foreground.tertiary}
          />
        </Pressable>
      )}

      {type === "text" && value && (
        <Pressable onPress={clearInput}>
          <Icon name="close" size={20} color={colors.foreground.tertiary} />
        </Pressable>
      )}
    </FormInputWrapper>
  );
};

export default TextInput;
