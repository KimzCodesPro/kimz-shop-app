import Icon from "@/src/components/icons";
import { useState } from "react";
import { Pressable, View } from "react-native";
import Typography from "../Typography/Typography";
import { AccordionProps } from "./types";
import useStyles from "./useStyles";

const Accordion = ({ items, style }: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | string>(0);
  const { styles, colors } = useStyles();

  const handlePress = (index: number | string) => {
    setExpandedIndex(expandedIndex === index ? 0 : index);
  };

  return (
    <View style={[styles.container, style]}>
      {items.map((item) => (
        <Pressable
          key={item.id}
          style={styles.item}
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
              name={expandedIndex === item.id ? "chevron-up" : "chevron-down"}
              size={20}
              color={colors.foreground.secondary}
            />
          </View>
          {expandedIndex === item.id && (
            <View style={styles.itemDescription}>
              <Typography
                variant="smallRegular"
                textTransform="capitalize"
                color={colors.foreground.primary}
              >
                {item.description}
              </Typography>
            </View>
          )}
        </Pressable>
      ))}
    </View>
  );
};

export default Accordion;
