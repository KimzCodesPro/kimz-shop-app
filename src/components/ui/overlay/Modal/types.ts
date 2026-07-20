import { JSX } from "react";

export type ModalProps = {
  title: string;
  description?: string;
  closeModal: () => void;
  visible: boolean;
  renderItem: () => JSX.Element;
};
