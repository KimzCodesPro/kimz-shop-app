import Icon from "@/components/icons";
import { useTheme } from "@/hooks";
import { Pressable } from "react-native";

type PasswordVisibilityToggleProps = {
  visible: boolean;
  onToggle: () => void;
};

const PasswordVisibilityToggle = ({
  visible,
  onToggle,
}: PasswordVisibilityToggleProps) => {
  const theme = useTheme();

  return (
    <Pressable onPress={onToggle}>
      <Icon
        name={visible ? "eye-off" : "eye"}
        size={20}
        color={theme.foreground.tertiary}
      />
    </Pressable>
  );
};

export default PasswordVisibilityToggle;
