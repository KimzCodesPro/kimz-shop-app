import { ReactNode } from "react";

export type ModalProps = {
  title: string;
  description?: string;
  closeModal: () => void;
  visible: boolean;
  renderItem: () => ReactNode;
};
