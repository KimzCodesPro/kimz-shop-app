import { useWindowDimensions } from "react-native";
import BaseRenderHtml from "@native-html/render";

import { SYSTEM_FONTS } from "./constants";
import { RenderHtmlProps } from "./types";

const RenderHtml = ({ source, tagsStyles }: RenderHtmlProps) => {
  const { width } = useWindowDimensions();

  return (
    <BaseRenderHtml
      contentWidth={width}
      source={source}
      tagsStyles={tagsStyles}
      systemFonts={SYSTEM_FONTS}
    />
  );
};

export default RenderHtml;
