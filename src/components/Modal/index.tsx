import { Component, ReactElement, MouseEventHandler } from "react";
import { ModalBox, ModalStyle } from "./Modal.style";

export type ModalProps = {
  isOpen?: boolean;
  handleModal?: () => void;
  component?: Component | ReactElement;
  modalSize?: "small" | "medium" | "large"
};

function Modal({ isOpen = false, component, handleModal, modalSize }: ModalProps) {
  if (!isOpen) return null;
  return (
    <ModalStyle onClick={handleModal}>
      <div className="modal-overlay"></div>
      <ModalBox onClick={(e) => e.stopPropagation()} modalSize={modalSize}>{component}</ModalBox>
    </ModalStyle>
  );
}

export default Modal;
