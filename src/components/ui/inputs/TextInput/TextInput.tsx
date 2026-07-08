import Icon, { IconName } from "@/components/icons";
import { useState } from "react";
import {
  TextInput as NativeTextInput,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import ClearInputAction from "./ClearInputAction";
import DisplayErrorMessage from "./DisplayErrorMessage";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";
import TextInputLabel from "./TextInputLabel";
import { StatusType } from "./types";
import useStyles from "./useStyles";

type TextInputProps = {
  label: string;
  icon: IconName;
  placeholder: string;
  errorMessage?: string;
  type?: "password" | "text";
  value?: string;
  viewStyle?: StyleProp<ViewStyle>;
  onChange?: (text: string) => void;
  clearInput?: () => void;
};

const TextInput = ({
  type = "text",
  label,
  icon,
  placeholder,
  errorMessage,
  value,
  onChange,
  clearInput,
  viewStyle,
}: TextInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const status: StatusType = errorMessage
    ? "error"
    : isFocused
      ? "focused"
      : "default";

  const { styles, colors } = useStyles(status);

  const iconStatusColor = {
    error: colors.danger.base,
    focused: colors.primary.base,
    default: colors.foreground.tertiary,
  };

  return (
    <View style={[styles.container, viewStyle]}>
      <TextInputLabel label={label} />
      <View style={styles.inputWrapper}>
        <Icon name={icon} size={20} color={iconStatusColor[status]} />
        <NativeTextInput
          value={value}
          onChangeText={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          placeholderTextColor={colors.foreground.tertiary}
          style={styles.inputText}
          secureTextEntry={type === "password" && !passwordVisible}
        />
        {type === "password" ? (
          <PasswordVisibilityToggle
            visible={passwordVisible}
            onToggle={() => setPasswordVisible((prev) => !prev)}
          />
        ) : (
          <ClearInputAction clearInput={clearInput} value={value} />
        )}
      </View>
      <DisplayErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default TextInput;
