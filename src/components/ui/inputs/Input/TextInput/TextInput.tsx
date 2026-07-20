import Icon from "@/components/icons";
import { useState } from "react";
import { Pressable, TextInput as RNTextInput, View } from "react-native";
import FormInputErrorMessage from "../shared/FormInputErrorMessage";
import FormInputLabel from "../shared/FormInputLabel";
import { StatusType } from "../shared/types";
import useSharedStyles from "../shared/useSharedStyles";
import { inputCurrentStatus } from "../shared/utils";
import { FormInputProps } from "./types";

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
}: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const currentStatus: StatusType = inputCurrentStatus(
    errorMessage,
    isFocused,
    value,
  );

  const { styles, colors, colorMapping } = useSharedStyles(currentStatus);

  const resolvedIconName = type === "password" ? "lock" : iconName;

  return (
    <View style={[styles.container, style]}>
      <FormInputLabel label={label} />
      <View style={styles.inputWrapper}>
        <Icon
          name={resolvedIconName}
          size={20}
          color={colorMapping[currentStatus]}
        />
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
      </View>
      <FormInputErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default TextInput;
