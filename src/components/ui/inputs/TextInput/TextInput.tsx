import Icon, { IconName } from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { useState } from "react";
import {
  TextInput as NativeTextInput,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
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
  onChangeText?: (text: string) => void;
  clearInput?: () => void;
};

const TextInput = ({
  type = "text",
  label,
  icon,
  placeholder,
  errorMessage,
  value,
  onChangeText,
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

  const { styles, theme } = useStyles(status);

  const iconStatusColor = {
    error: theme.danger.base,
    focused: theme.primary.base,
    default: theme.text.tertiary,
  };

  return (
    <View style={[styles.wrapper, viewStyle]}>
      <Typography
        variant="normalBold"
        color={theme.text.primary}
        style={styles.label}
      >
        {label}
      </Typography>
      <View style={styles.inputWrapper}>
        <Icon name={icon} size={20} color={iconStatusColor[status]} />
        <NativeTextInput
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          placeholderTextColor={theme.text.tertiary}
          style={styles.inputText}
          secureTextEntry={type === "password" && !passwordVisible}
        />

        {clearInput && value ? (
          <Pressable onPress={clearInput}>
            <Icon name="close" size={16} color={theme.text.tertiary} />
          </Pressable>
        ) : null}

        {type === "password" && (
          <Pressable onPress={() => setPasswordVisible((prev) => !prev)}>
            <Icon
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color={theme.text.tertiary}
            />
          </Pressable>
        )}
      </View>
      {errorMessage && (
        <Typography
          variant="smallRegular"
          color={theme.danger.base}
          style={styles.errorMessage}
        >
          {errorMessage}
        </Typography>
      )}
    </View>
  );
};

export default TextInput;
