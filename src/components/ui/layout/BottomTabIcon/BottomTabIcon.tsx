import Icon, { IconName } from "@/components/icons";
import { ColorValue, StyleSheet, View } from "react-native";

const BottomTabIcon = ({
  focused,
  color,
  activeColor,
  name,
}: {
  focused: boolean;
  color: ColorValue;
  activeColor: ColorValue;
  name: IconName;
}) => {
  const borderTopColor = focused ? activeColor : "transparent";
  return (
    <View style={[styles.iconContainer, { borderTopColor }]}>
      <Icon size={24} name={name as IconName} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    width: 70,
    height: 70,
  },
});

export default BottomTabIcon;
