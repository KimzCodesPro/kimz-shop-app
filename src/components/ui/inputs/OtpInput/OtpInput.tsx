import { OtpInput as RNOtpInput } from "react-native-otp-entry";
import { OtpInputProps } from "./types";
import useStyles from "./useStyles";

const OtpInput = ({
  onFocus,
  onBlur,
  onTextChange,
  onFilled,
}: OtpInputProps) => {
  const { styles } = useStyles();

  return (
    <RNOtpInput
      numberOfDigits={4}
      autoFocus={true}
      hideStick={true}
      placeholder=""
      blurOnFilled={true}
      disabled={false}
      type="numeric"
      secureTextEntry={false}
      onFocus={onFocus}
      onBlur={onBlur}
      onTextChange={onTextChange}
      onFilled={onFilled}
      textInputProps={{
        accessibilityLabel: "One-Time Password",
      }}
      textProps={{
        accessibilityRole: "text",
        accessibilityLabel: "OTP digit",
        allowFontScaling: false,
      }}
      theme={{
        containerStyle: styles.container,
        pinCodeContainerStyle: styles.pinCodeContainer,
        pinCodeTextStyle: styles.pinCodeText,
        focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        placeholderTextStyle: styles.placeholderText,
        filledPinCodeContainerStyle: styles.filledPinCodeContainer,
        disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
      }}
    />
  );
};

export default OtpInput;
