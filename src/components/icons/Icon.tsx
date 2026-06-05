import { Text } from "react-native";
import iconList from "./components/iconList";
type IconProps = {
  name: keyof typeof iconList;
  size?: number;
  color?: string;
  isRTL?: boolean;
};

const Icon = ({ name, size, color = "black", isRTL = false }: IconProps) => {
  const IconComponent = iconList[name];

  if (!IconComponent) {
    return <Text>{`Icon ${name} not found in icons list`}</Text>;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      style={{ transform: [{ scaleX: isRTL ? -1 : 1 }] }}
    />
  );
};

export default Icon;
