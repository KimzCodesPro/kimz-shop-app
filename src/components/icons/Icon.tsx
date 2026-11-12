import { useTranslation } from "@/hooks";
import { Text, View } from "react-native";
import iconMap from "./components/iconMap";
import { ICON_SIZES } from "./constants";
import { IconProps } from "./types";

const Icon = ({
  name,
  size = "lg",
  color,
  strokeWidth,
  style,
  flipOnRTL,
}: IconProps) => {
  const { direction } = useTranslation();

  const IconComponent = iconMap[name];

  const shouldFlip = flipOnRTL && direction === "rtl";

  if (!IconComponent) {
    return (
      <View>
        <Text>{`Icon not found: ${name}`}</Text>
      </View>
    );
  }

  return (
    <IconComponent
      size={ICON_SIZES[size]}
      color={color}
      strokeWidth={strokeWidth}
      style={[style, { transform: [{ scaleX: shouldFlip ? -1 : 1 }] }]}
    />
  );
};

export default Icon;
