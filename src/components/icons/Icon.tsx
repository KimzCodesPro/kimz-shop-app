import { Text, View } from "react-native";
import iconMapper from "./components/iconMapper";
import { IconProps } from "./types";

const Icon = ({ name, size, color, style }: IconProps) => {
  const IconComponent = iconMapper[name];

  if (!IconComponent) {
    return (
      <View>
        <Text>{`Icon not found: ${name}`}</Text>
      </View>
    );
  }

  return <IconComponent size={size} color={color} style={style} />;
};

export default Icon;
