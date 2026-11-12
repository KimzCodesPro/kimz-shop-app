import { useTheme, useTranslation } from "@/hooks";
import { useState } from "react";
import { formatExpiryDate } from "./helpers";

const useAddNewPaymentMethodScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();

  const [isDefault, setIsDefault] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");

  const toggleDefaultHandler = () => {
    setIsDefault((prev) => !prev);
  };

  const expiryDateChangeHandler = (text: string) => {
    setExpiryDate(formatExpiryDate(text));
  };

  return {
    t,
    colors,
    isDefault,
    toggleDefaultHandler,
    expiryDate,
    expiryDateChangeHandler,
  };
};

export default useAddNewPaymentMethodScreen;
