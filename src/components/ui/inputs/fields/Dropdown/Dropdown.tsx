import Icon from "@/components/icons";
import { useRef, useState } from "react";
import { Pressable } from "react-native";
import { Typography } from "../../../display";
import { BottomSheet, BottomSheetRef } from "../../../overlay";
import FormInputWrapper from "../shared/FormInputWrapper";
import { StatusType } from "../shared/types";
import useSharedStyles from "../shared/useSharedStyles";
import { inputCurrentStatus } from "../shared/utils";
import DropdownList from "./DropdownList";
import { DropdownProps } from "./types";

const Dropdown = ({
  label,
  placeHolder,
  iconName,
  options,
  value,
  onSelect,
  errorMessage,
  style,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useRef<BottomSheetRef>(null);

  const openSheet = () => {
    setIsOpen(true);
    sheetRef.current?.present();
  };

  const handleSelect = (selectedValue: string) => {
    onSelect(selectedValue);
    sheetRef.current?.dismiss();
  };

  const currentStatus: StatusType = inputCurrentStatus(
    errorMessage,
    isOpen,
    value,
  );

  const { styles, colors, statusColor } = useSharedStyles(currentStatus);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <>
      <Pressable onPress={openSheet} style={styles.pressableWrapper}>
        <FormInputWrapper
          label={label}
          inputIconName={iconName}
          errorMessage={errorMessage}
          styles={{
            container: [styles.container, style],
            inputWrapper: styles.inputWrapper,
          }}
          statusColor={statusColor}
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
            {selectedOption?.label ?? placeHolder}
          </Typography>
          <Icon
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={22}
            color={colors.foreground.tertiary}
          />
        </FormInputWrapper>
      </Pressable>
      <BottomSheet
        ref={sheetRef}
        title={label ?? placeHolder}
        onDismiss={() => setIsOpen(false)}
        bottomSheetProps={{ snapPoints: ["50%"] }}
      >
        <BottomSheet.Scroll>
          <DropdownList
            options={options}
            value={value}
            onSelect={handleSelect}
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
