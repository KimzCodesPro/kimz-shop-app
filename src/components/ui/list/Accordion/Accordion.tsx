import Icon from "@/src/components/icons";
import { useState } from "react";
import { Pressable, View } from "react-native";
import Typography from "../../typography/Typography/Typography";
import { AccordionProps } from "./types";
import useStyles from "./useStyles";
import { CHEVRON_ICON_SIZE } from "./constants";

const Accordion = ({ items, style }: AccordionProps) => {
  const [expandedId, setExpandedId] = useState<number>(0);
  const { styles, colors } = useStyles();

  const handlePress = (id: number) => {
    setExpandedId((current) => (current === id ? 0 : id));
  };

  return (
    <View style={[styles.container, style]}>
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <Pressable
            key={item.id}
            style={styles.itemContainer}
            onPress={() => handlePress(item.id)}
          >
            <View style={styles.itemHeader}>
              <Typography
                variant="smallBold"
                textTransform="capitalize"
                color={colors.foreground.primary}
              >
                {item.title}
              </Typography>
              <Icon
                name={isExpanded ? "chevron-up" : "chevron-down"}
                size={CHEVRON_ICON_SIZE}
                color={colors.foreground.tertiary}
              />
            </View>
            {isExpanded && (
              <View style={styles.itemContent}>
                <Typography
                  variant="smallRegular"
                  textTransform="capitalize"
                  color={colors.foreground.secondary}
                >
                  {item.content}
                </Typography>
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default Accordion;
