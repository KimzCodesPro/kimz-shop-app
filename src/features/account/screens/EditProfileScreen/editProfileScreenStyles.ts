import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    gap: spacing.space16.height,
  },
  // Centres the avatar without stretching it: the wrapper sizes to the image,
  // which keeps the uploader badge pinned to the picture's own bottom corner.
  avatar: {
    alignSelf: "center",
    marginBottom: spacing.space24.height,
  },
  submitButton: {
    marginTop: spacing.space40.height,
  },
});

export default styles;
