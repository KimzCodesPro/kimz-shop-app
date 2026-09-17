import { useState } from "react";
import { Pressable, View } from "react-native";
import { Typography } from "../../typography";
import { TabsProps } from "./types";
import useStyles from "./useStyles";

const Tabs = ({ items, defaultTab, onTabChange, style }: TabsProps) => {
  const defaultActiveTab = defaultTab ?? items[0]?.tabPrefix;

  const { styles, colors } = useStyles();
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handlePress = (tabPrefix: string) => {
    setActiveTab(tabPrefix);
    onTabChange?.(tabPrefix);
  };

  const activeItem = items.find((el) => el.tabPrefix === activeTab);

  return (
    <View style={[style, styles.container]}>
      <View style={styles.tabs}>
        {items.map((item) => {
          const isActive = item.tabPrefix === activeTab;
          return (
            <Pressable
              key={item.tabPrefix}
              style={isActive ? [styles.tab, styles.activeTab] : styles.tab}
              onPress={() => handlePress(item.tabPrefix)}
            >
              <Typography
                textAlign="center"
                variant="smallBold"
                color={
                  isActive
                    ? colors.foreground.primary
                    : colors.foreground.tertiary
                }
              >
                {item.tabTitle}
              </Typography>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.tabContent}>{activeItem?.tabContent}</View>
    </View>
  );
};

export default Tabs;
