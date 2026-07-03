import { useTranslation } from "@/hooks/useTranslation";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import iconList from "./components/iconList";

type IconProps = {
  name: keyof typeof iconList;
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
  supportRTL?: boolean;
};

const Icon = ({
  name,
  size,
  color = "black",
  supportRTL = false,
  style,
}: IconProps) => {
  const { direction } = useTranslation();
  const IconComponent = iconList[name];

  if (!IconComponent) {
    return (
      <View>
        <Text>{`Icon ${name} not found in icons list`}</Text>
      </View>
    );
  }

  const shouldMirror = supportRTL && direction === "rtl";

  return (
    <IconComponent
      size={size}
      color={color}
      style={[style, { transform: [{ scaleX: shouldMirror ? -1 : 1 }] }]}
    />
  );
};

export default Icon;
