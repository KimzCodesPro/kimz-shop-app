import { useTranslation } from "@/hooks";
import { OtpInput as RNOtpInput } from "react-native-otp-entry";
import { Typography } from "../../typography";
import { OtpInputProps } from "./types";
import useStyles from "./useStyles";

const OtpInput = ({
  onFocus,
  onBlur,
  onTextChange,
  onFilled,
  verifyFailed,
}: OtpInputProps) => {
  const { t } = useTranslation();
  const { styles, colors } = useStyles(verifyFailed);

  return (
    <>
      <RNOtpInput
        numberOfDigits={4}
        autoFocus={false}
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
      {verifyFailed && (
        <Typography variant="smallRegular" color={colors.danger.base}>
          {t("auth_verificationCodeFailed")}
        </Typography>
      )}
    </>
  );
};

export default OtpInput;
