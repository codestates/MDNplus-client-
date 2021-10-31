import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animation";
import { ModalProps } from "./index";

type SizeType = Pick<ModalProps, "modalSize">;

const sizeStyles = css<SizeType>`
  ${({ modalSize }) =>
    modalSize === "large" &&
    css`
      width: 700px;
      height: 600px;
    `}

  ${({ modalSize }) =>
    modalSize === "medium" &&
    css`
      width: 370px;
      height: 350px;
    `}

  ${({ modalSize }) =>
    modalSize === "small" &&
    css`
      width: 370px;
      height: 150px;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);

  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  .modal-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;

export const ModalBox = styled.aside<ModalProps>`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: white;
  border: 1px solid #9e9e9e;
  transition: 0.2s ease-in;
  border-radius: 10px;
  ${sizeStyles};
`;
