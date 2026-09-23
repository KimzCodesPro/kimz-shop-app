import Icon from "@/components/icons";
import { useTheme } from "@/hooks";
import { Pressable } from "react-native";
import { Typography } from "../../../typography";
import { DropdownListProps } from "./types";
import { SELECTED_OPTION_ICON_SIZE } from "./constants";

const DropdownList = ({
  options,
  value,
  onSelect,
  styles,
}: DropdownListProps) => {
  const colors = useTheme();

  return (
    <>
      {options.map((option) => {
        const isSelected = option.value === value;

        return (
          <Pressable
            key={option.value}
            style={styles.option}
            onPress={() => onSelect(option.value)}
          >
            <Typography
              variant={isSelected ? "normalBold" : "normalRegular"}
              textTransform="capitalize"
              color={
                isSelected ? colors.primary.base : colors.foreground.primary
              }
            >
              {option.label}
            </Typography>
            {isSelected && (
              <Icon
                name="check"
                size={SELECTED_OPTION_ICON_SIZE}
                color={colors.primary.base}
              />
            )}
          </Pressable>
        );
      })}
    </>
  );
};

export default DropdownList;
