import Icon from "@/components/icons";
import { useRef, useState } from "react";
import { Keyboard, Pressable } from "react-native";
import { BottomSheet, BottomSheetRef } from "../../../overlay";
import { Typography } from "../../../typography";
import FieldWrapper from "../shared/FieldWrapper";
import { StatusType } from "../shared/types";
import useSharedStyles from "../shared/useSharedStyles";
import { fieldCurrentStatus } from "../shared/helpers";
import { CHEVRON_ICON_SIZE } from "./constants";
import DropdownList from "./DropdownList";
import { DropdownProps } from "./types";

const Dropdown = ({
  label,
  placeholder,
  icon,
  options,
  value,
  onSelect,
  errorMessage,
  sheetTitle,
  style,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useRef<BottomSheetRef>(null);

  const handleOpenSheet = () => {
    Keyboard.dismiss();
    setIsOpen(true);
    sheetRef.current?.present();
  };

  const handleSelectValue = (val: string) => {
    sheetRef.current?.dismiss();
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
          fieldIconName={icon}
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
            size={CHEVRON_ICON_SIZE}
            color={colors.foreground.tertiary}
          />
        </FieldWrapper>
      </Pressable>
      <BottomSheet
        ref={sheetRef}
        title={sheetTitle ?? label ?? placeholder}
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
