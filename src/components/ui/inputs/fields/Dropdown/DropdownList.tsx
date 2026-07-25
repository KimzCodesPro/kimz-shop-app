import Icon from "@/components/icons";
import { useTheme } from "@/hooks";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Pressable } from "react-native";
import { Typography } from "../../../display";
import { DropdownListProps } from "./types";

const DropdownList = ({
  options,
  value,
  onSelect,
  styles,
}: DropdownListProps) => {
  const colors = useTheme();

  return (
    <BottomSheetScrollView style={styles.optionsList}>
      {options.map((option) => {
        const isSelected = option.value === value;

        return (
          <Pressable
            key={option.value}
            style={styles.option}
            onPress={() => onSelect(option.value)}
          >
            <Typography
              variant="smallRegular"
              textTransform="capitalize"
              color={
                isSelected ? colors.primary.base : colors.foreground.primary
              }
            >
              {option.label}
            </Typography>
            {isSelected && (
              <Icon name="check" size={20} color={colors.primary.base} />
            )}
          </Pressable>
        );
      })}
    </BottomSheetScrollView>
  );
};

export default DropdownList;
