// Turns typed digits into MM/YY, e.g. "0828" -> "08/28".
// Non-digits are dropped, so a typed or pasted "/" never doubles up.
export const formatExpiryDate = (text: string) => {
  const digits = text.replace(/\D/g, "").slice(0, 4);
  return digits.length > 2
    ? `${digits.slice(0, 2)}/${digits.slice(2)}`
    : digits;
};
