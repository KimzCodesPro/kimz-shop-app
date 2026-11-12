import { HS, VS } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";

function CreditCardRefund({
  size = 24,
  color,
  style,
  strokeWidth = 1.5,
}: IconBase) {
  return (
    <Svg
      width={HS(size)}
      height={VS(size)}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4" />
      <Path d="M3 10l18 0" />
      <Path d="M7 15l.01 0" />
      <Path d="M19 16l-3 3l3 3" />
      <Path d="M22 19l-6 0" />
    </Svg>
  );
}

export default CreditCardRefund;
