import Icon from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { Pressable, Modal as RNModal, View } from "react-native";
import { ModalProps } from "./types";
import useStyles from "./useStyles";

const Modal = ({
  title,
  description,
  closeModal,
  visible = false,
  renderItem,
}: ModalProps) => {
  const { styles, colors } = useStyles();

  return (
    <RNModal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.backDrop}>
        <View style={styles.content}>
          <Pressable style={styles.contentCloseBTN} onPress={closeModal}>
            <Icon name="close" size={20} color={colors.foreground.primary} />
          </Pressable>
          <View style={styles.contentHeader}>
            <Typography
              variant="mediumBold"
              color={colors.foreground.primary}
              style={styles.contentTitle}
            >
              {title}
            </Typography>

            {description && (
              <Typography
                variant="smallRegular"
                color={colors.foreground.secondary}
                style={styles.contentDescription}
              >
                {description}
              </Typography>
            )}
          </View>
          <View style={styles.contentChildren}>{renderItem()}</View>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
