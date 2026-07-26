import Icon from "@/components/icons";
import { useState } from "react";
import { Pressable, TextInput as RNTextInput } from "react-native";
import FieldWrapper from "../shared/FieldWrapper";
import { StatusType } from "../shared/types";
import useSharedStyles from "../shared/useSharedStyles";
import { fieldCurrentStatus } from "../shared/utils";
import { TextInputProps } from "./types";

const TextInput = ({
  label,
  placeholder,
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

  const currentStatus: StatusType = fieldCurrentStatus(
    errorMessage,
    isFocused,
    value,
  );

  const { styles, colors } = useSharedStyles(currentStatus);

  // Defaulted in the body, not in the destructuring: a default on `type` would
  // detach it from the union and stop it narrowing `iconName` on the next line.
  const fieldType = type ?? "text";

  const resolvedIconName = type === "password" ? "lock" : iconName;

  return (
    <FieldWrapper
      label={label}
      fieldIconName={resolvedIconName}
      errorMessage={errorMessage}
      currentStatus={currentStatus}
      style={style}
    >
      <RNTextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.foreground.tertiary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={fieldType === "password" && !passwordVisible}
      />
      {fieldType === "password" && value && (
        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? "eye-off" : "eye"}
            size={20}
            color={colors.foreground.tertiary}
          />
        </Pressable>
      )}

      {fieldType === "text" && clearInput && value && (
        <Pressable onPress={clearInput}>
          <Icon name="close" size={20} color={colors.foreground.tertiary} />
        </Pressable>
      )}
    </FieldWrapper>
  );
};

export default TextInput;
