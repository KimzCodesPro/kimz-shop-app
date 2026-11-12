import { useTheme, useTranslation } from "@/hooks";
import { useState } from "react";

const useAddNewPaymentMethodScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();

  const [isDefault, setIsDefault] = useState(false);

  const toggleDefaultHandler = () => {
    setIsDefault((prev) => !prev);
  };

  return { t, colors, isDefault, toggleDefaultHandler };
};

export default useAddNewPaymentMethodScreen;
