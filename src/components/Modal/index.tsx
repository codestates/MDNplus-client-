import {
  Component,
  MouseEventHandler,
  ReactElement,
} from "react";
import {ModalBox, ModalContainer} from "./Modal.style"

type ModalProps = {
  readonly isOpen: boolean;
  component: Component | ReactElement;
  handler: MouseEventHandler<HTMLDivElement> | undefined;
};

function Modal({ isOpen = false, component, handler }: ModalProps) {
    if(!isOpen) return null
  return (
    <ModalContainer onClick={handler} className="modal-overlay">
    <ModalBox>
      <div className="modal-component-box">{component}</div>
    </ModalBox>
  </ModalContainer>
  )
}

export default Modal;
