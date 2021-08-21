import { Component, MouseEventHandler, ReactElement } from "react";
import { ModalBox, ModalStyle } from "./Modal.style";

type ModalProps = {
  readonly isOpen: boolean;
  component: Component | ReactElement;
  handler: MouseEventHandler<HTMLDivElement>;
};

function Modal({ isOpen = false, component, handler }: ModalProps) {
  if (!isOpen) return null;
  return (
    <ModalStyle onClick={handler} className="modal-overlay">
      <ModalBox>
        <div className="modal-component-box">{component}</div>
      </ModalBox>
    </ModalStyle>
  );
}

export default Modal;
