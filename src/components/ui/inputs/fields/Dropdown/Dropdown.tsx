import Icon from "@/components/icons";
import { useState } from "react";
import { Pressable } from "react-native";
import { Typography } from "../../../display";
import FormInputWrapper from "../shared/FormInputWrapper";
import { StatusType } from "../shared/types";
import useSharedStyles from "../shared/useSharedStyles";
import { inputCurrentStatus } from "../shared/utils";
import { DropdownProps } from "./types";

const Dropdown = ({
  label,
  placeHolder,
  iconName,
  options,
  value,
  errorMessage,
  style,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentStatus: StatusType = inputCurrentStatus(
    errorMessage,
    isOpen,
    value,
  );

  const { styles, colors, statusColor } = useSharedStyles(currentStatus);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <Pressable onPress={() => setIsOpen(true)} style={styles.pressable}>
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
          style={styles.dropdownText}
          textTransform="capitalize"
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
          size={20}
          color={colors.foreground.tertiary}
        />
      </FormInputWrapper>
    </Pressable>
  );
};

export default Dropdown;
