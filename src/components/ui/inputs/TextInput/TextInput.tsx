import Icon, { IconName } from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { TextInput as NativeTextInput, View } from "react-native";
import useStyles from "./useStyles";

type TextInputProps = {
  type: "password" | "text";
  states?: "default" | "error" | "focused";
  label: string;
  icon: IconName;
  placeholder: string;
  helperText?: string;
};

const TextInput = ({ type, states = "default" }: TextInputProps) => {
  const { styles, theme } = useStyles();
  return (
    <View style={styles.wrapper}>
      <Typography variant="normalBold" color={theme.text.primary}>
        Email Address
      </Typography>
      <View style={styles.inputWrapper}>
        <Icon name="mail" size={20} color={theme.text.tertiary} />
        <NativeTextInput
          placeholder="Enter your email address"
          placeholderTextColor={theme.text.tertiary}
          style={styles.inputText}
        />
      </View>
    </View>
  );
};

export default TextInput;
