import Icon from "@/components/icons";
import { useTheme } from "@/hooks";
import { Pressable } from "react-native";

type ClearInputActionProps = {
  clearInput?: () => void;
  value?: string;
};

const ClearInputAction = ({ clearInput, value }: ClearInputActionProps) => {
  const theme = useTheme();

  if (!clearInput || !value) return null;

  return (
    <Pressable onPress={clearInput}>
      <Icon name="close" size={16} color={theme.foreground.tertiary} />
    </Pressable>
  );
};

export default ClearInputAction;
