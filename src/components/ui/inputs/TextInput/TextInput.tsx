import Icon, { IconName } from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { useState } from "react";
import { TextInput as NativeTextInput, Pressable, View } from "react-native";
import { StatusType } from "./types";
import useStyles from "./useStyles";

type TextInputProps = {
  type?: "password" | "text";
  label: string;
  icon: IconName;
  placeholder: string;
  errorMessage?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

const TextInput = ({
  type = "text",
  label,
  icon,
  placeholder,
  errorMessage,
  value,
  onChangeText,
}: TextInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const status: StatusType = errorMessage
    ? "error"
    : isFocused
      ? "focused"
      : "default";

  const { styles, theme } = useStyles(status);

  const IconStatusColor =
    status === "error"
      ? theme.danger.base
      : status === "focused"
        ? theme.primary.base
        : theme.text.tertiary;

  return (
    <View style={styles.wrapper}>
      <Typography variant="normalBold" color={theme.text.primary}>
        {label}
      </Typography>
      <View style={styles.inputWrapper}>
        <Icon name={icon} size={20} color={IconStatusColor} />
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
          variant="xsmallRegular"
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
