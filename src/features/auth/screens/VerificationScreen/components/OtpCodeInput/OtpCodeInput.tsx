import { OtpInput } from "react-native-otp-entry";
import { OtpCodeInputProps } from "./types";
import useStyles from "./useStyles";

const OtpCodeInput = ({
  onFocus,
  onBlur,
  onTextChange,
  onFilled,
}: OtpCodeInputProps) => {
  const { styles } = useStyles();

  return (
    <OtpInput
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

export default OtpCodeInput;
