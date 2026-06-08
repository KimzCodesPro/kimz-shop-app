import Svg, { Path } from "react-native-svg";
import { IconProps } from "../type";

function Close({ size, color, style }: IconProps) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Path d="M18 6L6 18M6 6l12 12" />
    </Svg>
  );
}

export default Close;
