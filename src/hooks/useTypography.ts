import fonts from "@/constants/fonts";
import { StyleSheet } from "react-native";

const useTypography = () => {
  let lang = "ar";

  const systemFonts = fonts[lang];

  const englishTypography = StyleSheet.create({
    heroBold: {
      fontFamily: systemFonts.bold,
      fontSize: 38,
      lineHeight: 50,
    },
    heroRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 38,
      lineHeight: 50,
    },
    xlargeBold: {
      fontFamily: systemFonts.bold,
      fontSize: 22,
      lineHeight: 30,
    },
    xlargeRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 22,
      lineHeight: 30,
    },
    largeBold: {
      fontFamily: systemFonts.bold,
      fontSize: 18,
      lineHeight: 26,
    },
    largeRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 18,
      lineHeight: 26,
    },
    largeLight: {
      fontFamily: systemFonts.light,
      fontSize: 18,
      lineHeight: 26,
    },
    mediumBold: {
      fontFamily: systemFonts.bold,
      fontSize: 16,
      lineHeight: 26,
    },
    mediumRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 16,
      lineHeight: 26,
    },
    mediumLight: {
      fontFamily: systemFonts.light,
      fontSize: 16,
      lineHeight: 26,
    },
    normalBold: {
      fontFamily: systemFonts.bold,
      fontSize: 14,
      lineHeight: 22,
    },
    normalRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 14,
      lineHeight: 22,
    },
    normalLight: {
      fontFamily: systemFonts.light,
      fontSize: 14,
      lineHeight: 22,
    },
    smallBold: {
      fontFamily: systemFonts.bold,
      fontSize: 12,
      lineHeight: 22,
    },
    smallRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 12,
      lineHeight: 22,
    },
    smallLight: {
      fontFamily: systemFonts.light,
      fontSize: 12,
      lineHeight: 22,
    },
    xsmallBold: {
      fontFamily: systemFonts.bold,
      fontSize: 10,
      lineHeight: 14,
    },
    xsmallRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 10,
      lineHeight: 14,
    },
    xsmallLight: {
      fontFamily: systemFonts.light,
      fontSize: 10,
      lineHeight: 14,
    },
    monoMd: {
      fontFamily: systemFonts.regular,
      fontSize: 12,
      lineHeight: 10,
    },
    monoSm: {
      fontFamily: systemFonts.regular,
      fontSize: 12,
      lineHeight: 10,
    },
  });

  const arabicTypography = StyleSheet.create({
    heroBold: {
      fontFamily: systemFonts.bold,
      fontSize: 35,
      lineHeight: 46,
    },
    heroRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 35,
      lineHeight: 46,
    },
    xlargeBold: {
      fontFamily: systemFonts.bold,
      fontSize: 20,
      lineHeight: 28,
    },
    xlargeRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 20,
      lineHeight: 28,
    },
    largeBold: {
      fontFamily: systemFonts.bold,
      fontSize: 17,
      lineHeight: 24,
    },
    largeRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 17,
      lineHeight: 24,
    },
    largeLight: {
      fontFamily: systemFonts.light,
      fontSize: 17,
      lineHeight: 24,
    },
    mediumBold: {
      fontFamily: systemFonts.bold,
      fontSize: 15,
      lineHeight: 24,
    },
    mediumRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 15,
      lineHeight: 24,
    },
    mediumLight: {
      fontFamily: systemFonts.light,
      fontSize: 15,
      lineHeight: 24,
    },
    normalBold: {
      fontFamily: systemFonts.bold,
      fontSize: 13,
      lineHeight: 20,
    },
    normalRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 13,
      lineHeight: 20,
    },
    normalLight: {
      fontFamily: systemFonts.light,
      fontSize: 13,
      lineHeight: 20,
    },
    smallBold: {
      fontFamily: systemFonts.bold,
      fontSize: 11,
      lineHeight: 20,
    },
    smallRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 11,
      lineHeight: 20,
    },
    smallLight: {
      fontFamily: systemFonts.light,
      fontSize: 11,
      lineHeight: 20,
    },
    xsmallBold: {
      fontFamily: systemFonts.bold,
      fontSize: 9,
      lineHeight: 13,
    },
    xsmallRegular: {
      fontFamily: systemFonts.regular,
      fontSize: 9,
      lineHeight: 13,
    },
    xsmallLight: {
      fontFamily: systemFonts.light,
      fontSize: 9,
      lineHeight: 13,
    },
    monoMd: {
      fontFamily: systemFonts.regular,
      fontSize: 12,
      lineHeight: 10,
    },
    monoSm: {
      fontFamily: systemFonts.regular,
      fontSize: 12,
      lineHeight: 10,
    },
  });

  const typography = lang === "en" ? englishTypography : arabicTypography;

  return typography;
};

export default useTypography;
