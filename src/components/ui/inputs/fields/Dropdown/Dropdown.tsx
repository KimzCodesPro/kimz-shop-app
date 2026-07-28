import Icon from "@/components/icons";
import { useRef, useState } from "react";
import { Keyboard, Pressable } from "react-native";
import { Typography } from "../../../display";
import { BottomSheet, BottomSheetRef } from "../../../overlay";
import FieldWrapper from "../shared/FieldWrapper";
import { StatusType } from "../shared/types";
import useSharedStyles from "../shared/useSharedStyles";
import { fieldCurrentStatus } from "../shared/utils";
import DropdownList from "./DropdownList";
import { DropdownProps } from "./types";

const Dropdown = ({
  label,
  placeholder,
  iconName,
  options,
  value,
  onSelect,
  errorMessage,
  style,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useRef<BottomSheetRef>(null);

  const handleOpenSheet = () => {
    Keyboard.dismiss();
    setIsOpen(true);
    sheetRef.current?.expand();
  };

  const handleSelectValue = (val: string) => {
    sheetRef.current?.close();
    onSelect(val);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  // Status follows the resolved option, not the raw value: a value with no
  // matching option renders as the placeholder, so it must not read as filled.
  const currentStatus: StatusType = fieldCurrentStatus(
    errorMessage,
    isOpen,
    selectedOption?.value ?? "",
  );

  const { styles, colors } = useSharedStyles(currentStatus);

  return (
    <>
      <Pressable onPress={handleOpenSheet} style={styles.pressableWrapper}>
        <FieldWrapper
          label={label}
          fieldIconName={iconName}
          errorMessage={errorMessage}
          currentStatus={currentStatus}
          style={style}
        >
          <Typography
            variant="smallRegular"
            textTransform="capitalize"
            style={styles.dropdownValueText}
            color={
              selectedOption
                ? colors.foreground.primary
                : colors.foreground.tertiary
            }
          >
            {selectedOption?.label ?? placeholder}
          </Typography>
          <Icon
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={22}
            color={colors.foreground.tertiary}
          />
        </FieldWrapper>
      </Pressable>
      <BottomSheet
        ref={sheetRef}
        title={label ?? placeholder}
        bottomSheetProps={{
          snapPoints: ["50%"],
          onClose: () => setIsOpen(false),
        }}
      >
        <BottomSheet.Scroll>
          <DropdownList
            options={options}
            value={value}
            onSelect={handleSelectValue}
            styles={{
              option: styles.dropdownOption,
            }}
          />
        </BottomSheet.Scroll>
      </BottomSheet>
    </>
  );
};

export default Dropdown;
