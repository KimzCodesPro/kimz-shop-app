import Icon from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import { useTranslation } from "@/hooks";
import { Pressable, View } from "react-native";
import { ColorSwitcherProps } from "./types";
import useStyles from "./useStyles";

const ColorSwitcher = ({
  selectedColor,
  colorPalette,
  onColorChange,
  style,
}: ColorSwitcherProps) => {
  const { t } = useTranslation();
  const { styles, colors } = useStyles();

  return (
    <View style={[styles.container, style]}>
      {/* "Color : Black" */}
      <View style={styles.labelRow}>
        <Typography variant="normalBold" color={colors.foreground.primary}>
          {`${t("itemDetails_color")} :`}
        </Typography>
        <Typography variant="normalRegular" color={colors.foreground.secondary}>
          {selectedColor}
        </Typography>
      </View>
      {/* one circle per color */}
      <View style={styles.colorsRow}>
        {colorPalette.map(({ name, code }) => {
          const isSelected = name === selectedColor;
          const selectedBackgroundColor = isSelected ? code : "transparent";
          return (
            // tapping sends the color name back to the parent, which updates
            // selectedColor, so the title above changes to this name
            <Pressable
              key={name}
              onPress={() => onColorChange(name)}
              style={[
                styles.colorOuter,
                { borderColor: selectedBackgroundColor },
              ]}
            >
              <View style={[styles.colorInner, { backgroundColor: code }]}>
                {isSelected && (
                  <Icon
                    name="check"
                    size="sm"
                    strokeWidth={2}
                    color={colors.foreground.contrast}
                  />
                )}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default ColorSwitcher;
