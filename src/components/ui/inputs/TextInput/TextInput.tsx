import Icon, { IconName } from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { TextInput as NativeTextInput, View } from "react-native";
import useStyles from "./useStyles";

type TextInputProps = {
  type?: "password" | "text";
  states?: "default" | "error" | "focused";
  label: string;
  icon: IconName;
  placeholder: string;
  errorMessage?: string;
};

const TextInput = ({
  type = "text",
  states = "default",
  label,
  icon,
  placeholder,
  errorMessage,
}: TextInputProps) => {
  const { styles, theme } = useStyles();
  return (
    <View style={styles.wrapper}>
      <Typography variant="normalBold" color={theme.text.primary}>
        {label}
      </Typography>
      <View style={styles.inputWrapper}>
        <Icon name={icon} size={20} color={theme.text.tertiary} />
        <NativeTextInput
          placeholder={placeholder}
          placeholderTextColor={theme.text.tertiary}
          style={styles.inputText}
        />
        {errorMessage && (
          <Typography variant="xsmallRegular" color={theme.danger.base}>
            {errorMessage}
          </Typography>
        )}
      </View>
    </View>
  );
};

export default TextInput;
