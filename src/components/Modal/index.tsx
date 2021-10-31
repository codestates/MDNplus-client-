import { Component, ReactElement } from "react";
import { ModalBox, Wrapper } from "./styles";

export type ModalProps = {
  isOpen?: boolean;
  handleModal?: () => void;
  component?: Component | ReactElement;
  modalSize?: "small" | "medium" | "large"
};

function Modal({ isOpen = false, component, handleModal, modalSize }: ModalProps) {
  if (!isOpen) return null;
  return (
    <Wrapper onClick={handleModal}>
      <div className="modal-overlay"></div>
      <ModalBox onClick={(e) => e.stopPropagation()} modalSize={modalSize}>{component}</ModalBox>
    </Wrapper>
  );
}

export default Modal;
