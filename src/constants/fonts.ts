const fonts: { [key: string]: { [key: string]: string } } = {
  en: {
    light: "SpaceGrotesk-Light",
    regular: "SpaceGrotesk-Regular",
    bold: "SpaceGrotesk-Bold",
  },
  ar: {
    light: "Cairo-Light",
    regular: "Cairo-Regular",
    bold: "Cairo-Bold",
  },
} as const;

export default fonts;
