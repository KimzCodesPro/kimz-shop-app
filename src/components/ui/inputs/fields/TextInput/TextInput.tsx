import Icon from "@/components/icons";
import {
  BottomSheetTextInput,
  useBottomSheetInternal,
} from "@gorhom/bottom-sheet";
import { useState } from "react";
import { Pressable, TextInput as RNTextInput } from "react-native";
import FieldWrapper from "../shared/FieldWrapper";
import { StatusType } from "../shared/types";
import useSharedStyles from "../shared/useSharedStyles";
import { fieldCurrentStatus } from "../shared/utils";
import { TextInputProps } from "./types";

const TextInput = ({
  label,
  placeholder,
  iconName,
  type,
  value,
  errorMessage,
  onChangeText,
  clearInput,
  style,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Inside a sheet the input has to be gorhom's own: it registers the focused
  // node with the sheet, which is the only way the sheet knows to shift above
  // the keyboard. The unsafe flag returns null outside a sheet instead of
  // throwing, and the context can't appear or disappear while mounted — so the
  // component this picks stays the same for the field's whole lifetime.
  const isInsideBottomSheet = useBottomSheetInternal(true) !== null;
  const Input = isInsideBottomSheet ? BottomSheetTextInput : RNTextInput;

  const currentStatus: StatusType = fieldCurrentStatus(
    errorMessage,
    isFocused,
    value,
  );

  const { styles, colors } = useSharedStyles(currentStatus);

  const resolvedIconName = type === "password" ? "lock" : iconName;

  return (
    <FieldWrapper
      label={label}
      fieldIconName={resolvedIconName}
      errorMessage={errorMessage}
      currentStatus={currentStatus}
      style={style}
    >
      <Input
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.foreground.tertiary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={type === "password" && !passwordVisible}
      />
      {type === "password" && value && (
        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? "eye-off" : "eye"}
            size={20}
            color={colors.foreground.tertiary}
          />
        </Pressable>
      )}

      {type !== "password" && clearInput && value && (
        <Pressable onPress={clearInput}>
          <Icon name="close" size={20} color={colors.foreground.tertiary} />
        </Pressable>
      )}
    </FieldWrapper>
  );
};

export default TextInput;
